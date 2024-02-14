function showElement(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        element.classList.remove('hidden');
        element.style.opacity = 1; // Pour l'animation fadeIn
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    // Définition des délais pour chaque étape de l'animation
    showElement('hi', 0); // Immédiatement
    showElement('just-wanted', 2000); // Après 2 secondes
    showElement('funny-love', 4000); // Après 4 secondes
    showElement('happy', 6000); // Après 6 secondes
    showElement('valentine', 8000); // Après 8 secondes
    showElement('kind', 10000); // Après 10 secondes
    showElement('love', 12000); // Après 12 secondes
    showElement('bunny-love', 14000); // Après 14 secondes
    showElement('sign-off', 16000); // Après 16 secondes
});
