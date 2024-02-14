function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden'); // Cela déclenchera l'animation CSS fadeIn
}

function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsToShow = ['hi', 'just-wanted', 'funny-love', 'happy', 'valentine', 'kind', 'love', 'bunny-love', 'sign-off'];
    let delay = 0;

    elementsToShow.forEach((id) => {
        setTimeout(() => showElement(id), delay);
        // Augmenter le délai pour le prochain élément
        delay += 2000;
    });

     elementsToShow.forEach((id) => {
        setTimeout(() => hideElement(id), delay + 2000); // Les éléments disparaîtront après 2 secondes supplémentaires
     });
});
