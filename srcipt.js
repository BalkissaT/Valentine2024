function fadeInOutElement(elementId, delayBeforeFadeIn, displayDuration) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        element.style.animation = `fadeInOut 4s ease-in-out forwards`;
    }, delayBeforeFadeIn);

    setTimeout(() => {
        const element = document.getElementById(elementId);
        element.style.opacity = '0';
    }, delayBeforeFadeIn + displayDuration);
}

document.addEventListener('DOMContentLoaded', () => {
    // Créons et affichons les cœurs flottants
    const animationContainer = document.getElementById('animation');
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        animationContainer.appendChild(heart);
    }

    // Affichage séquentiel des phrases
    fadeInOutElement('hi', 0, 4000);
    fadeInOutElement('just-wanted', 4000, 4000);
    fadeInOutElement('funny-love', 8000, 4000);
    fadeInOutElement('happy', 12000, 4000);
    fadeInOutElement('valentine', 16000, 4000);
    fadeInOutElement('kind', 20000, 4000);
    fadeInOutElement('love', 24000, 4000);
    fadeInOutElement('bunny-love', 28000, 4000);
    fadeInOutElement('sign-off', 32000, 4000);
});
