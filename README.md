# Vive Health

## Descripción

Vive Health es una plataforma dedicada a la salud mental, ofreciendo servicios como consultas en línea, asesoría médica, y terapias especializadas. Nuestro objetivo es proporcionar un acceso fácil y rápido a profesionales de la salud mental para mejorar la calidad de vida de nuestros usuarios.

## Características

- **Portada Interactiva**: Una sección de portada con íconos que representan diferentes servicios de salud mental.
- **Paquetes de Servicios**: Ofrecemos varios paquetes de servicios adaptados a las necesidades individuales, de pareja y familiares.
- **Filtro de Especialistas**: Permite a los usuarios filtrar especialistas por enfoque terapéutico, área de expertise y experiencia laboral.
- **Listado de Doctores**: Muestra una lista de doctores con la opción de ver más detalles.
- **Redes Sociales**: Enlaces a nuestras redes sociales que se abren en una nueva pestaña.
- **Recarga de Página**: Al hacer clic en el logo, la página se recarga.

## Tecnologías Utilizadas

- **HTML5**: Estructura del contenido web.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Funcionalidad e interactividad.
- **Bootstrap 5**: Framework CSS para diseño responsivo y componentes predefinidos.
- **Firebase**: Base de datos en tiempo real para almacenar y sincronizar datos.

## Uso

- **Portada**: Explora los diferentes servicios ofrecidos.
- **Paquetes**: Revisa los paquetes disponibles y selecciona el que mejor se adapte a tus necesidades.
- **Filtro de Especialistas**: Utiliza los filtros para encontrar el especialista adecuado.
- **Redes Sociales**: Síguenos en nuestras redes sociales para más información y actualizaciones.
  
## Funcionalidades del Código

### `array_especialistas.js`

Este archivo contiene la lógica principal para mostrar y filtrar los doctores en la plataforma.

- **Lista de Doctores**: Un array de objetos que contiene la información de cada doctor, incluyendo nombre, imagen, colegiatura, enfoque terapéutico, área de expertise, experiencia laboral y estudios.
- **Filtros Agrupados**: Un objeto que agrupa las áreas de expertise en categorías para facilitar el filtrado.
- **Funciones Principales**:
  - `mostrarDetallesDoctor(doctor)`: Muestra los detalles de un doctor seleccionado.
  - `mostrarCalendario(nombreDoctor)`: Muestra un formulario para agendar una cita con el doctor seleccionado.
  - `mostrarDoctores(lista)`: Muestra una lista de doctores en la página.
  - `filtrarDoctores()`: Filtra los doctores según los criterios seleccionados por el usuario.

### Ejemplo de Uso

Para mostrar los doctores en la página, se llama a la función `mostrarDoctores()` al cargar la página. Los usuarios pueden filtrar los doctores utilizando los filtros disponibles y ver más detalles haciendo clic en los botones correspondientes.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

¡Gracias por visitar Vive Health!

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com).

---

¡Gracias por visitar Vive Health!

Desarrollado por WomenInTech squad de +Chicastech - hackathon 2025
