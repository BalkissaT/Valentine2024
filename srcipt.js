function showElement(element, delay = 0) {
    setTimeout(() => {
        element.classList.remove('hidden');
    }, delay);
}

function fillHearts(container, count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        container.appendChild(heart);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    let countdown = 5;

    const interval = setInterval(() => {
        countdownElement.innerText = countdown;
        if (countdown <= 1) {
            clearInterval(interval);
            countdownElement.classList.add('hidden');
            const message = document.getElementById('message');
            showElement(message);

            const steps = [
                () => showElement(document.getElementById('hi'), 500),
                () => showElement(document.getElementById('just-wanted'), 1500),
                () => {
                    const heartsContainer = document.getElementById('hearts');
                    fillHearts(heartsContainer, 100);
                    showElement(heartsContainer, 500);
                },
                () => showElement(document.getElementById('happy-valentine'), 4000),
                () => showElement(document.getElementById('love'), 4500),
                () => showElement(document.getElementById('sign-off'), 5000),
            ];

            steps.forEach((func, index) => setTimeout(func, index * 2000));
        }
        countdown--;
    }, 1000);
});
