document.addEventListener('DOMContentLoaded', function() {
    // Inicialmente mostrar todos los productos
    $('.grid-item1, .grid-item2, .grid-item3').each(function() {
        $(this).addClass('show').fadeIn(300);
    });

    // Función para actualizar la categoría seleccionada
    function updateSelectedCategory(category) {
        const categoryElement = document.getElementById('selected-category');
        if (category === 'Todos') {
            categoryElement.textContent = ''; // No muestra texto si la categoría es "Todos"
        } else {
            categoryElement.textContent = `- ${category} -`; // Muestra el nombre de la categoría
        }
    }

    // Inicialmente, asegurar que no se muestre texto para 'Todos'
    updateSelectedCategory('Todos');

    // Función para actualizar el filtro de productos basado en la categoría
    function filterProducts(selectedCategory, categoryName) {
        // Remover clase 'active' de todos los enlaces y agregarla al clicado
        document.querySelectorAll('.offcanvas-body a h4').forEach(el => {
            el.classList.remove('offcanvas-active');
            el.classList.add('offcanvas-body1');
        });
        const selectedElement = document.querySelector(`.offcanvas-body a[data-filter="${selectedCategory}"] h4`);
        if (selectedElement) {
            selectedElement.classList.remove('offcanvas-body1');
            selectedElement.classList.add('offcanvas-active');
        }

        // Actualizar la categoría seleccionada
        updateSelectedCategory(categoryName);

        // Filtrar productos de grid-item1, grid-item2 y grid-item3
        $('.grid-item1, .grid-item2, .grid-item3').each(function() {
            const productCategories = $(this).data('category') ? $(this).data('category').split(',') : [];
            if (selectedCategory === 'all' || productCategories.includes(selectedCategory)) {
                $(this).fadeOut(300, function() {
                    $(this).addClass('show').fadeIn(300);
                });
            } else {
                $(this).fadeOut(300, function() {
                    $(this).removeClass('show');
                });
            }
        });
    }

    document.querySelectorAll('.offcanvas-body a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento por defecto del enlace
            const selectedCategory = this.getAttribute('data-filter');
            const categoryName = this.textContent.trim();

            // Actualiza la URL sin recargar la página usando replaceState para evitar problemas con Live Server
            const newUrl = selectedCategory === 'all' ? '/' : `/?category=${selectedCategory}`;
            history.replaceState({category: selectedCategory}, '', newUrl);

            // Filtra los productos
            filterProducts(selectedCategory, categoryName);

            // Cierra el offcanvas
            const offcanvasElement = document.getElementById('offcanvasScrolling');
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvasInstance) {
                offcanvasInstance.hide();
            }
        });
    });

    // Maneja el evento popstate para permitir navegación hacia atrás
    window.addEventListener('popstate', function(event) {
        const category = event.state ? event.state.category : 'all';
        const categoryName = document.querySelector(`.offcanvas-body a[data-filter="${category}"]`)?.textContent.trim() || '';
        filterProducts(category, categoryName);
    });

    // Filtra productos basado en la URL inicial
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'all';
    const initialCategoryName = document.querySelector(`.offcanvas-body a[data-filter="${initialCategory}"]`)?.textContent.trim() || '';
    filterProducts(initialCategory, initialCategoryName);
});
