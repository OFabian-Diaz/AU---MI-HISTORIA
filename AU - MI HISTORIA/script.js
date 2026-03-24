/**
 * La noche en que todo se detuvo - Script principal
 * Maneja la interactividad: eventos, estado y manipulación del DOM
 */

/* ============================================
   VARIABLES - Control del estado de la interfaz
   ============================================ */
let tiempoCongelado = false; // Estado: false = normal, true = tiempo detenido

/* ============================================
   REFERENCIAS AL DOM - Elementos que se manipulan
   ============================================ */
const btnIniciar = document.getElementById('btn-iniciar');
const btnDetener = document.getElementById('btn-detener');
const btnNormalidad = document.getElementById('btn-normalidad');
const btnMoraleja = document.getElementById('btn-moraleja');

const contenidoHistoria = document.getElementById('contenido-historia');
const seccionMoraleja = document.getElementById('moraleja');
const mensajeTiempo = document.getElementById('mensaje-tiempo');
const body = document.body;

/* ============================================
   FUNCIONES - Lógica de la aplicación
   ============================================ */

/**
 * Inicia la historia: oculta la portada y muestra el contenido narrativo
 */
function iniciarHistoria() {
    contenidoHistoria.removeAttribute('hidden');
    // Scroll suave hacia el inicio del contenido
    contenidoHistoria.scrollIntoView({ behavior: 'smooth', block: 'start' });
    contenidoHistoria.focus({ preventScroll: true });
}

/**
 * Detiene el tiempo visualmente: cambia estilos y muestra mensaje
 */
function detenerTiempo() {
    if (tiempoCongelado) return; // Evitar ejecución duplicada

    tiempoCongelado = true;
    body.classList.add('tiempo-congelado');

    // Mostrar mensaje usando manipulación del DOM
    mensajeTiempo.textContent = 'El tiempo está congelado...';
    mensajeTiempo.removeAttribute('hidden');

    // Actualizar estado de los botones
    btnDetener.setAttribute('aria-pressed', 'true');
    btnNormalidad.removeAttribute('aria-disabled');
    btnNormalidad.disabled = false;
}

/**
 * Restaura la normalidad: revierte los cambios visuales
 */
function volverNormalidad() {
    if (!tiempoCongelado) return;

    tiempoCongelado = false;
    body.classList.remove('tiempo-congelado');

    // Ocultar mensaje
    mensajeTiempo.textContent = '';
    mensajeTiempo.setAttribute('hidden', '');

    // Actualizar estado de los botones
    btnDetener.setAttribute('aria-pressed', 'false');
    btnNormalidad.setAttribute('aria-disabled', 'true');
    btnNormalidad.disabled = true;
}

/**
 * Revela la sección de moraleja usando manipulación del DOM
 */
function mostrarMoraleja() {
    seccionMoraleja.removeAttribute('hidden');
    seccionMoraleja.classList.add('revelada');
    seccionMoraleja.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Opcional: deshabilitar el botón para evitar clics repetidos
    btnMoraleja.disabled = true;
    btnMoraleja.textContent = 'Moraleja mostrada';
}

/* ============================================
   EVENT LISTENERS - Asociación de eventos a elementos
   ============================================ */

// Botón "Iniciar historia"
btnIniciar.addEventListener('click', iniciarHistoria);

// Botón "Detener el tiempo"
btnDetener.addEventListener('click', detenerTiempo);

// Botón "Volver a la normalidad"
btnNormalidad.addEventListener('click', volverNormalidad);

// Botón "Mostrar moraleja"
btnMoraleja.addEventListener('click', mostrarMoraleja);

/* Accesibilidad: soporte para teclado (Enter/Space en botones) */
btnIniciar.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        iniciarHistoria();
    }
});
