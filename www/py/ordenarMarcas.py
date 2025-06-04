from bs4 import BeautifulSoup

def ordenar_bloque(html, inicio_tag, fin_tag, clase_item, clase_titulo):
    inicio_index = html.find(inicio_tag)
    fin_index = html.find(fin_tag)

    if inicio_index == -1 or fin_index == -1:
        raise ValueError(f"No se encontraron los comentarios {inicio_tag} o {fin_tag}")

    bloque_html = html[inicio_index + len(inicio_tag):fin_index].strip()

    soup_bloque = BeautifulSoup(bloque_html, "html.parser")
    divs = soup_bloque.find_all("div", class_=clase_item)

    divs_ordenados = sorted(divs, key=lambda d: d.find(class_=clase_titulo).text.strip().lower())

    bloque_ordenado = "\n".join(str(div) for div in divs_ordenados)

    html = (
        html[:inicio_index + len(inicio_tag)]
        + "\n" + bloque_ordenado + "\n"
        + html[fin_index:]
    )

    return html


# Cargar HTML original
with open("guia-empresas.html", "r", encoding="utf-8") as f:
    html = f.read()

# Ordenar los bloques
html = ordenar_bloque(html, "<!-- INICIO ORDEN L -->", "<!-- FIN ORDEN L -->", "grid-item1", "titulo_ge")
html = ordenar_bloque(html, "<!-- INICIO ORDEN M -->", "<!-- FIN ORDEN M -->", "grid-item2", "titulo_ge")
html = ordenar_bloque(html, "<!-- INICIO ORDEN S -->", "<!-- FIN ORDEN S -->", "grid-item3", "titulo_ge")

# Guardar resultado
with open("archivo_ordenado.html", "w", encoding="utf-8") as f:
    f.write(html)

print("✅ Todos los bloques fueron ordenados correctamente.")
