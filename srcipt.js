document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    let delay = 0;

    // Fonction pour animer les messages un par un
    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.add('fade-in-out');
        }, delay);
        
        // Ajoutez le temps d'animation plus un délai avant le prochain message
        delay += 4000; // Durée de l'animation fadeInOut + délai
    });

    // Création et animation des cœurs
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 30; i++) { // Créez 30 cœurs ou autant que vous le souhaitez
        const heart = document.createElement('div');
        heart.classList.add('heart');
        setTimeout(() => {
            heartsContainer.appendChild(heart);
        }, delay);
    }
});
