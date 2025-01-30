document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.location.search).get("id");
  if (id) {
    // Si el ID está presente, carga el JSON
    fetch("../micro-sitios/anunciantes.json?v=2.1") // Ajusta la ruta según sea necesario
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos del JSON:", data); // Depuración

        if (data.anunciantes[id]) {
          const anunciante = data.anunciantes[id];
          console.log("Datos del anunciante:", anunciante); // Depuración

          // Contenido basico
          document.querySelector(".card-img-top").src =
            anunciante.logo || "default_logo.png";
          document.querySelector(".card-img-top").alt =
            anunciante.titulo + " Logo";
          document.querySelector(".titulo_ge").textContent = anunciante.titulo;
          document.querySelector(".titulo-marca").textContent =
            anunciante.titulo;

          //Nav
          document.querySelector(".nav-remp").textContent = anunciante.titulo;
          document.querySelector(".nav-remp").href = "#";

          //Revista
          // Bucle para recorrer las tapas de la revista
          for (let i = 1; i <= 12; i++) {
            let tapaKey = `tapa${i}`;
            let tapaUrl = anunciante.revista[tapaKey];

            // Selecciona el elemento correspondiente
            let revistaElement = document.querySelector(`#revista-${i}`);
            let revistaImg = document.querySelector(`#revista-${i} img`);

            if (tapaUrl) {
              // Si la tapa existe, actualiza el href y la imagen
              revistaElement.href = tapaUrl;
              revistaImg.src = tapaUrl;
            } else {
              // Si la tapa no existe, oculta el elemento
              revistaElement.style.display = "none";
            }
          }

          /*-------------- REDES --------------*/
          //Web
          if (
            anunciante.social.web != null &&
            anunciante.social.web.trim() !== ""
          ) {
            document.querySelector(".datos-web a").href = anunciante.social.web;
            document.querySelector(".datos-web a").title =
              anunciante.social.webtxt;
            if (
              anunciante.social.webtxt != null &&
              anunciante.social.webtxt.trim() !== ""
            ) {
              document.querySelector(".datos-web a").textContent =
                anunciante.social.webtxt;
            } else {
              document.querySelector(".datos-web a").textContent =
                "web " + anunciante.titulo;
            }
            if (
              anunciante.social.imgweb != null &&
              anunciante.social.imgweb.trim() !== ""
            ) {
              //Frame
              document.querySelector(".frameweb").style.display = "none";
            } else {
              document.querySelector(".frameweb iframe").src =
                anunciante.social.web;
            }
          } else {
            document.querySelector(".datos-web").style.display = "none";
            document.querySelector(".frameweb").style.display = "none";
          }

          //Imagen Web (si no hay iframe)
          if (
            anunciante.social.imgweb != null &&
            anunciante.social.imgweb.trim() !== ""
          ) {
            document.querySelector(".img-web img").src =
              anunciante.social.imgweb;
            if (
              anunciante.social.linkweb != null &&
              anunciante.social.linkweb.trim() !== ""
            ) {
              document.querySelector(".img-web a").href =
                anunciante.social.linkweb;
            } else {
              document.querySelector(".img-web a").href = anunciante.social.web;
            }
          } else {
            document.querySelector(".img-web").style.display = "none";
          }

          //Celular
          if (
            anunciante.telefono != null &&
            anunciante.telefono.trim() !== ""
          ) {
            document.querySelector(".datos-cel a").textContent =
              anunciante.telefono;
          } else {
            document.querySelector(".datos-cel").style.display = "none";
          }

          //Instagram
          if (
            anunciante.social.instagram != null &&
            anunciante.social.instagram.trim() !== ""
          ) {
            document.querySelector(".datos-ig a").href =
              anunciante.social.instagram;
            document.querySelector(".datos-ig a").textContent =
              anunciante.social.instagramName;
          } else {
            document.querySelector(".datos-ig").style.display = "none";
          }

          //Email
          if (
            anunciante.social.email != null &&
            anunciante.social.email.trim() !== ""
          ) {
            document.querySelector(".datos-email a").href =
              anunciante.social.mailto;
            document.querySelector(".datos-email a").textContent =
              anunciante.social.email;
          } else {
            document.querySelector(".datos-email").style.display = "none";
          }

          //Whatsapp
          if (
            anunciante.social.whatsapp != null &&
            anunciante.social.whatsapp.trim() !== ""
          ) {
            document.querySelector(".datos-whatsapp a").href =
              anunciante.social.whatsapp;
            document.querySelector(".datos-whatsapp a").textContent =
              anunciante.social.whatsappName;
          } else {
            document.querySelector(".datos-whatsapp").style.display = "none";
          }

          //Facebook
          if (
            anunciante.social.facebook != null &&
            anunciante.social.facebook.trim() !== ""
          ) {
            document.querySelector(".datos-facebook a").href =
              anunciante.social.facebook;
            document.querySelector(".datos-facebook a").textContent =
              anunciante.social.facebookName;
          } else {
            document.querySelector(".datos-facebook").style.display = "none";
          }

          //Linkedin
          if (
            anunciante.social.linkedin != null &&
            anunciante.social.linkedin.trim() !== ""
          ) {
            document.querySelector(".datos-linkedin a").href =
              anunciante.social.linkedin;
            document.querySelector(".datos-linkedin a").textContent =
              anunciante.social.linkedinName;
          } else {
            document.querySelector(".datos-linkedin").style.display = "none";
          }

          //youtube
          if (
            anunciante.social.youtube != null &&
            anunciante.social.youtube.trim() !== ""
          ) {
            document.querySelector(".datos-youtube a").href =
              anunciante.social.youtube;
            document.querySelector(".datos-youtube a").textContent =
              anunciante.social.youtubeName;
          } else {
            document.querySelector(".datos-youtube").style.display = "none";
          }

          //Descripcion (Recibe HTML)
          const parrafoElement = document.querySelector(".contenedor-parrafo");
          if (parrafoElement) {
            parrafoElement.innerHTML = anunciante.parrafo;
          } else {
            console.error(
              "El div con clase contenedor-parrafo no se encontró."
            );
          }

          //Catalogo
          if (
            anunciante.catalogo != null &&
            anunciante.catalogo.trim() !== ""
          ) {
            document.querySelector(".link-catalogo a").href =
              anunciante.catalogo;
          } else {
            document.querySelector(".link-catalogo").style.display = "none";
          }

          /*------------------- Fin de la carga de datos -------------------*/
          window.addEventListener("load", () => {
            document.body.classList.add("loaded");
          });
        } else {
          // Si no se encuentra el ID, muestra un mensaje de error o redirige
          console.error("Anunciante no encontrado");
          document.body.innerHTML = "<h1>Anunciante no encontrado</h1>";
        }
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
        document.body.innerHTML = "<h1>Error al cargar los datos</h1>";
      });
  } else {
    console.error("ID del parámetro no está presente en la URL");
    document.body.innerHTML =
      "<h1>ID del parámetro no está presente en la URL</h1>";
    loadingElement.style.display = "none";
    document.body.classList.add("loaded");
  }
});
