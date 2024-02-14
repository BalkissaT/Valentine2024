function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('fade-in');
    element.classList.remove('hidden');
}

function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = ['hi', 'just-wanted', 'funny-love', 'happy', 'valentine', 'kind', 'love', 'bunny-love', 'sign-off'];
    let index = 0;

    function nextElement() {
        if (index > 0) hideElement(elements[index - 1]); // Hide the previous element
        if (index < elements.length) {
            showElement(elements[index]);
            setTimeout(nextElement, 4000); // Show next element after 4s
        }
        index++;
    }

    nextElement();
});
