document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente mostrar todos los productos
    $('.grid-item1, .grid-item2, .grid-item3').addClass('show');

    // Función para actualizar la categoría seleccionada
    function updateSelectedCategory(category) {
        const categoryElement = document.getElementById('selected-category');
        if (category === 'Todos') {
            categoryElement.textContent = '';
        } else {
            categoryElement.textContent = `- ${category} -`;
        }
    }

    // Inicialmente, ocultar el elemento de categoría seleccionada
    updateSelectedCategory('Todos');

    $('.offcanvas-body a').on('click', function(event) {
        event.preventDefault(); // Previene el comportamiento por defecto del enlace
        const selectedCategory = $(this).data('filter');
        const categoryName = $(this).text().trim();

        // Remover clase 'active' de todos los enlaces y agregarla al clicado
        $('.offcanvas-body a h4').removeClass('offcanvas-active').addClass('offcanvas-body1');
        $(this).find('h4').removeClass('offcanvas-body1').addClass('offcanvas-active');

        // Actualizar la categoría seleccionada
        updateSelectedCategory(categoryName);

        // Filtrar productos de grid-item1, grid-item2 y grid-item3
        $('.grid-item1, .grid-item2, .grid-item3').each(function() {
            const productCategory = $(this).data('category');

            if (selectedCategory === 'all' || productCategory === selectedCategory) {
                $(this).fadeOut(300, function() {
                    $(this).addClass('show').fadeIn(300);
                });
            } else {
                $(this).fadeOut(300, function() {
                    $(this).removeClass('show');
                });
            }
        });
    });
});
