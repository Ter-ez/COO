document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('a-scene').addEventListener('loaded', () => {
        document.querySelector('#splash').style.display = 'none';
    });
});