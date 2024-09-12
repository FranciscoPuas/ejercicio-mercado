# Proyecto Mercado

## Descripción

Este proyecto es una aplicación web para un mercado en línea. Los usuarios pueden iniciar sesión, ver una lista de productos, agregar productos a un carrito y visualizar el carrito en un modal.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de JavaScript del lado del servidor.
- **Express**: Framework para Node.js que facilita la creación de aplicaciones web.
- **Handlebars (hbs)**: Motor de plantillas para renderizar vistas.
- **Bootstrap 5**: Framework CSS para diseño responsivo y componentes interactivos.
- **JavaScript**: Lenguaje de programación para la lógica del cliente.

## Instalación

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd tu-repositorio
   ```

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Inicia el servidor:**

   ```bash
   npm start
   ```

5. **Abre tu navegador y visita** `http://localhost:3000`.

## Estructura del Proyecto

- `/views`: Contiene las vistas de la aplicación.
  - `index.hbs`: Vista principal con el saludo al usuario.
  - `vista.hbs`: Vista que muestra productos y el carrito.
  - `partials/`: Contiene fragmentos de vista reutilizables.
    - `nav.hbs`: Barra de navegación.
    - `menu.hbs`: Menú de navegación.
    - `form.hbs`: Formulario de inicio de sesión.
- `/public`: Contiene archivos estáticos como imágenes y CSS.
- `server.js`: Archivo principal del servidor que configura Express y Handlebars.

## Funcionalidades

- **Inicio de sesión**: Los usuarios pueden ingresar su nombre de usuario y contraseña.
- **Visualización de productos**: Los productos se muestran en tarjetas con imagen y nombre.
- **Agregar al carrito**: Los usuarios pueden agregar productos al carrito.
- **Mostrar carrito**: Los productos agregados se muestran en un modal.

## Uso

1. **Inicio de sesión**: Accede a la página principal e ingresa tus credenciales.
2. **Ver productos**: Navega por la lista de productos.
3. **Agregar al carrito**: Haz clic en la imagen del producto para agregarlo al carrito.
4. **Ver carrito**: Haz clic en el botón "Mostrar Carrito" para ver los productos en el modal.

## Contribuciones

Si deseas contribuir a este proyecto:

1. Realiza un fork del repositorio.
2. Haz tus cambios en una rama nueva.
3. Envía un pull request con una descripción de tus cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## Contacto

Para más información, contacta a [tu correo electrónico].
