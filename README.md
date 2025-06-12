# Tomás Verde - Landing Page

Landing page para "Tomás Verde", servicio de reciclaje de residuos orgánicos a domicilio en Pichilemu, Chile.

## Tecnologías utilizadas

- HTML5 semántico
- Sass/SCSS
- JavaScript (ES6+)
- GSAP + ScrollTrigger para animaciones
- GLightbox para galería de imágenes
- Diseño responsive y accesible

## Estructura del proyecto

```
project/
├── index.html              # Estructura principal HTML
├── css/
│   └── styles.scss         # Estilos SCSS (compila a CSS)
├── js/
│   └── main.js             # JavaScript principal
├── img/                    # Imágenes del sitio
│   ├── hero.webp
│   └── gallery/            # Imágenes para la galería
├── assets/
│   └── svgs/               # Archivos SVG (logos, iconos)
└── README.md               # Este archivo
```

## Características principales

- Diseño adaptable a todo tipo de dispositivos (responsive design)
- Animaciones fluidas basadas en scroll
- Galería de imágenes con lightbox
- Formulario de contacto con validación
- Integración con WhatsApp
- Contadores animados en la sección de impacto
- Menú de navegación adaptable para dispositivos móviles
- Accesibilidad (WAI-ARIA, navegación por teclado)

## Instalación y desarrollo

1. Clonar el repositorio:
   ```
   git clone https://github.com/tu-usuario/tomasverde.git
   cd tomasverde
   ```

2. Instalar dependencias (si utilizas npm):
   ```
   npm install
   ```

3. Compilar Sass (si utilizas npm):
   ```
   npm run sass
   ```
   
   O directamente con Sass:
   ```
   sass --watch css/styles.scss:css/styles.css
   ```

4. Para ver el sitio localmente, puedes usar cualquier servidor HTTP simple:
   ```
   # Si tienes Python 3 instalado:
   python -m http.server
   
   # Si tienes Node.js instalado:
   npx serve
   ```

## Despliegue

El sitio está optimizado para ser desplegado en GitHub Pages o Netlify.

### GitHub Pages

1. Configurar el repositorio para GitHub Pages en Settings > Pages
2. Seleccionar la rama main como fuente

### Netlify

1. Conectar el repositorio a Netlify
2. Configurar los siguientes ajustes:
   - Build command: (dejar en blanco si ya has compilado el Sass)
   - Publish directory: ./

## Personalización

- Los colores principales se definen como variables en `css/styles.scss`
- Las fuentes utilizadas son Libre Baskerville y Open Sans de Google Fonts
- Las animaciones pueden ajustarse en `js/main.js`

## Créditos

- Diseño y desarrollo: Tu Nombre
- Cliente: Tomás Verde
- Imágenes: [Instagram de Tomás Verde](https://www.instagram.com/tomasverde.cl/)

## Licencia

Todos los derechos reservados © 2024 