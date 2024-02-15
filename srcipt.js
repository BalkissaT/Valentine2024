document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.message');
    let delay = 0;

    const animateMessage = (message, delay) => {
        setTimeout(() => {
            message.classList.add('fade-in');
            setTimeout(() => {
                message.classList.remove('fade-in');
                message.classList.add('fade-out');
                setTimeout(() => {
                    message.classList.remove('fade-out');
                    message.classList.add('hidden');
                }, 1000); // Durée de l'animation fadeOut
            }, 3000); // Temps que le message est visible à l'écran
        }, delay);
    };

    messages.forEach((message) => {
        animateMessage(message, delay);
        delay += 4000; // Temps avant l'apparition du prochain message
    });

    // Animation des cœurs
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart', 'hidden');
            document.body.appendChild(heart);
            // Position aléatoire sur la page
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;

            setTimeout(() => {
                heart.classList.remove('hidden');
                heart.classList.add('animate-heart');
                setTimeout(() => {
                    heart.classList.add('hidden');
                    document.body.removeChild(heart);
                }, 5000); // Les cœurs restent à l'écran pendant 5 secondes
            }, i * 200); // Chaque cœur apparaît à un intervalle de 200ms
        }
    }, delay);
});
