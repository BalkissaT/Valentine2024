function showElement(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        // Retirer la classe 'hidden' démarre l'animation grâce à la classe CSS
        element.classList.remove('hidden');
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    // Définition des délais pour chaque élément
    showElement('hi', 0); // Affiche immédiatement
    showElement('just-wanted', 2000); // Attend 2 secondes
    showElement('funny-love', 4000); // Attend 4 secondes
    showElement('happy', 6000); // Attend 6 secondes
    showElement('valentine', 8000); // Attend 8 secondes
    showElement('kind', 10000); // Attend 10 secondes
    showElement('love', 12000); // Attend 12 secondes
    showElement('bunny-love', 14000); // Attend 14 secondes
    showElement('sign-off', 16000); // Attend 16 secondes
});
