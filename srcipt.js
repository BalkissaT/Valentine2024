document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    let delay = 0;

    // Fonction pour afficher un message
    function showMessage(message) {
        message.classList.remove('hidden');
        message.style.animation = 'fadeIn 2s forwards';
    }

    // Fonction pour cacher un message
    function hideMessage(message, delay) {
        setTimeout(() => {
            message.style.animation = 'fadeOut 2s forwards';
            setTimeout(() => message.classList.add('hidden'), 2000); // Assurez-vous que le message est caché après l'animation
        }, delay - 2000); // Commence à cacher avant l'apparition du prochain message
    }

    // Affiche chaque message séquentiellement
    messages.forEach((message, index) => {
        setTimeout(() => showMessage(message), delay);
        hideMessage(message, delay + 4000); // 4000 pour correspondre à la durée de l'animation + délai
        delay += 4000;
    });

    // Générer et animer des cœurs à la fin
    setTimeout(() => {
        for (let i = 0; i < 10; i++) { // Créez et animez 10 cœurs
            const heart = document.createElement('div');
            heart.classList.add('heart');
            document.body.appendChild(heart);
            animateHeart(heart, i * 500); // Anime chaque cœur avec un délai
        }
    }, delay);

    // Fonction pour animer les cœurs
    function animateHeart(heart, delay) {
        setTimeout(() => {
            heart.style.animation = `scaleIn 1s forwards, scaleOut 1s ${1 + delay / 1000}s forwards`;
            setTimeout(() => heart.remove(), delay + 2000); // Supprime le cœur après l'animation
        }, delay);
    }
});
