# Explicación académica — La noche en que todo se detuvo

## 1. Evidencia de los temas vistos en clase

### 1.1 Introducción a la ingeniería web y arquitectura cliente/servidor
- La página es una aplicación **cliente**: todo el código (HTML, CSS, JavaScript) se ejecuta en el navegador del usuario.
- No hay servidor en este proyecto; los archivos pueden abrirse localmente o servirse desde un servidor web estático.
- La separación en tres archivos (`index.html`, `styles.css`, `script.js`) refleja la división de responsabilidades: estructura, presentación y comportamiento.

### 1.2 Estructura básica con HTML5
- **Etiquetas semánticas**: `<header>`, `<main>`, `<section>`, `<footer>` organizan el contenido de forma significativa.
- **Jerarquía de títulos**: un único `<h1>` en el header, luego `<h2>` en cada sección.
- **Estructura**: `<!DOCTYPE html>`, `<html lang="es">`, `<head>` con meta viewport y charset, `<body>` con el contenido principal.
- **Atributos descriptivos**: `id` e `aria-*` para accesibilidad.

### 1.3 Estilos con CSS y diseño responsivo
- **Variables CSS** (`:root`) para colores y transiciones consistentes.
- **Flexbox** en portada y grupos de botones.
- **Media queries** en `@media (max-width: 768px)` y `@media (max-width: 480px)` para adaptar layout, tipografía y espaciado a tablets y móviles.
- **Unidades relativas** como `rem`, `%`, `clamp()` y `vw` para escalado.

### 1.4 Introducción a JavaScript: variables y eventos
- **Variable de estado**: `let tiempoCongelado` controla si la interfaz está en modo “tiempo detenido” o normal.
- **Eventos**: se usan `addEventListener('click', ...)` en los cuatro botones.
- **Funciones**: lógica encapsulada en funciones como `iniciarHistoria()`, `detenerTiempo()`, `volverNormalidad()`, `mostrarMoraleja()`.

### 1.5 Manipulación del DOM
- `document.getElementById()` para obtener referencias a elementos.
- `element.removeAttribute('hidden')` y `element.setAttribute('hidden', '')` para mostrar/ocultar contenido.
- `element.classList.add()` y `element.classList.remove()` para alternar estilos.
- `element.textContent` para cambiar el texto del mensaje.
- `element.scrollIntoView()` para desplazar la vista hacia secciones.
- `element.focus()` para foco accesible.

### 1.6 Accesibilidad y buenas prácticas en front-end
- **Imágenes con alt descriptivo**: las imágenes incluyen atributos `alt` que describen el contenido para lectores de pantalla.
- **aria-labelledby** en secciones para asociar títulos.
- **aria-describedby**, **aria-pressed**, **aria-disabled**, **aria-live** para mejorar lectores de pantalla.
- Clase `.visually-hidden` para ocultar texto solo visualmente sin perder accesibilidad.
- `role="group"` y `aria-label` en el grupo de botones.
- Contraste suficiente entre texto y fondo.
- Soporte de teclado en botones (Enter y Espacio).
- `outline` visible en `:focus` y `:focus-visible` para navegación por teclado.

---

## 2. Explicación para defender el trabajo ante el profesor

### Botón "Iniciar historia"
Hace visible el contenido principal de la historia. En el HTML, el contenedor tiene el atributo `hidden` inicialmente. Al hacer clic, el JavaScript quita ese atributo con `removeAttribute('hidden')`, de modo que la historia aparece con una animación CSS suave. También se hace scroll hasta el inicio del contenido.

### Botón "Detener el tiempo"
Simula el “tiempo detenido” de la historia. Se cambia la variable `tiempoCongelado` a `true` y se añade la clase `tiempo-congelado` al `<body>`. En CSS, esa clase cambia el color de fondo y el estilo de las tarjetas. Además, se muestra el mensaje “El tiempo está congelado...” modificando el `textContent` de un párrafo. El botón “Volver a la normalidad” se habilita y el de “Detener el tiempo” se marca como presionado con `aria-pressed`.

### Botón "Volver a la normalidad"
Deshace el efecto anterior. Se pone `tiempoCongelado` en `false`, se quita la clase `tiempo-congelado` del `body`, se oculta el mensaje y se restauran los estados de los botones (el de “Volver a la normalidad” vuelve a deshabilitarse).

### Botón "Mostrar moraleja"
Revela la sección de moraleja, que está oculta al inicio con `hidden`. El script usa `removeAttribute('hidden')` para mostrarla, añade la clase `revelada` para una animación suave y hace scroll hasta esa sección. Después deshabilita el botón y cambia su texto para evitar pulsaciones repetidas.

### Variable `tiempoCongelado`
Es una variable que indica el modo actual de la interfaz:
- `false`: estado normal.
- `true`: tiempo congelado.

Sirve para que las funciones sepan qué hacer al pulsar los botones y para evitar ejecutar la misma lógica más de una vez cuando no corresponde.

---

## 3. Estructura del proyecto

```
AU - MI HISTORIA/
├── index.html          # Estructura HTML5 y contenido
├── styles.css          # Estilos y diseño responsivo
├── script.js           # Interactividad y manipulación del DOM
├── imagenes historia/  # Carpeta con imágenes de la historia
│   ├── photo-1672214013976-301824ba39dc.avif  # Portada
│   └── A-Man-Strolling-on-a-Foggy,-Deserted-Road_ctKkw.png  # Momento extraño
└── EXPLICACION_ACADEMICA.md  # Este documento
```

---

## 4. Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto en NetBeans o cualquier editor.
2. Ejecutar `index.html` con un navegador (doble clic o desde el editor).
3. También puede usarse Live Server en VS Code o la extensión equivalente para desarrollo local.

No se requieren servidores especiales ni instalación de dependencias.
