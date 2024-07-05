document.addEventListener("DOMContentLoaded", function() {
    // Código dentro de esta función se ejecutará cuando el DOM esté completamente cargado y analizado

    // Navegación entre secciones
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace (navegación)

            const targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino al que se quiere navegar, eliminando el '#' al inicio

            document.querySelectorAll('section').forEach(section => section.style.display = 'none'); // Oculta todas las secciones
            // Mostrar la sección de bienvenida y la de inicio si el enlace clicado es "Inicio"
            if (targetId === 'inicio') {
                document.querySelector('.hero__container').style.display = 'block'; // Muestra la sección de bienvenida
                document.querySelector(`#${targetId}`).style.display = 'block'; // Muestra la sección de inicio
            } else {
                document.querySelector('.hero__container').style.display = 'none'; // Oculta la sección de bienvenida
                document.querySelector(`#${targetId}`).style.display = 'block'; // Muestra la sección correspondiente al enlace clicado
            }
        });
    });
    // Inicialmente mostrar la sección de Inicio y la de bienvenida
    document.querySelector('#inicio').style.display = 'block'; // Muestra la sección de inicio al cargar la página
    document.querySelector('.hero__container').style.display = 'block'; // Muestra la sección de bienvenida al cargar la página

    // Chart.js
    const ctx = document.getElementById('tasksChart').getContext('2d'); // Obtiene el contexto 2D del canvas para crear un gráfico
    new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barra
        data: {
            labels: ['Limpieza de computadores', 'Reseteo de computadoras', 'Cambio de discos duros', 'Limpieza de memorias', 'Cambio de contraseñas', 'Mantenimiento de ventiladores'], // Etiquetas de las barras
            datasets: [{
                label: 'Tareas Realizadas', // Etiqueta del conjunto de datos
                data: [5, 10, 3, 2, 6, 4], // Datos para cada barra
                backgroundColor: [ // Colores de fondo de cada barra
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [ // Colores de borde de cada barra
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1 // Ancho del borde
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Configuración para que el eje y comience en cero
                }
            }
        }
    });

    // Carrusel
    let index = 0; // Índice inicial de la imagen activa en el carrusel
    const images = document.querySelectorAll('.carousel-images img'); // Selecciona todas las imágenes del carrusel
    images[index].classList.add('active'); // Añade la clase 'active' a la primera imagen

    document.querySelector('.next').addEventListener('click', () => {
        images[index].classList.remove('active'); // Remueve la clase 'active' de la imagen actual
        index = (index + 1) % images.length; // Incrementa el índice y lo ajusta para que vuelva al inicio si excede el número de imágenes
        images[index].classList.add('active'); // Añade la clase 'active' a la nueva imagen
    });

    document.querySelector('.prev').addEventListener('click', () => {
        images[index].classList.remove('active'); // Remueve la clase 'active' de la imagen actual
        index = (index - 1 + images.length) % images.length; // Decrementa el índice y lo ajusta para que vaya al final si es menor que cero
        images[index].classList.add('active'); // Añade la clase 'active' a la nueva imagen
    });


    // Manejo del formulario
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario (envío)

        // Obtiene los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí puedes procesar los datos, por ejemplo, enviarlos a un servidor
        console.log('Nombre:', name);
        console.log('Correo Electrónico:', email);
        console.log('Mensaje:', message);

        // Opcional: Mostrar un mensaje de éxito o limpiar el formulario
        alert('Formulario enviado con éxito');
        form.reset(); // Limpia el formulario
    });
});


