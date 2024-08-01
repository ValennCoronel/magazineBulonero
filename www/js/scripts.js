window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollTopBtn = document.querySelector(".scrollTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Script para desplazarse hacia arriba al hacer clic en el botón
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});

  $(window).on('load',function(){
    var delayMs = 2; // delay in milliseconds
    setTimeout(function(){
        $('#id03').modal('show');
    }, delayMs);
});

  // Inicializar popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });



     $(window).on('load',function(){
    $('#id02'). modal('show');
    });

  $(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
  // Prevent default anchor click behavior
  event.preventDefault();
  // Store hash
  var hash = this.hash;
  // Using jQuery's animate() method to add smooth page scroll
  // The optional nuw3er (900) specifies the nuw3er of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
  scrollTop: $(hash).offset().top
  }, 700, function(){
  // Add hash (#) to URL when done scrolling (default click behavior)
  window.location.hash = hash;
  });} // End if
  });
  $(window).scroll(function() {
    $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
    $(this).addClass("slide");
  } }); });
  })

  function evitarSpam() {
    // Si el campo está vacío, envía el formulario.
    if(!document.getElementById("controlspam").value) { 
      return true;
    } 
     // Si el campo tiene algún valor, es un spam bot
    else {
      return false;
    }
  }
(function(){var js = "window['__CF$cv$params']={r:'849917015b63336d',t:'MTcwNTk0MDA2NS41MTcwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();
