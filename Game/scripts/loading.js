document.addEventListener('DOMContentLoaded', () => {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', () => {
        splash.style.display = 'none';
    });
});