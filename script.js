document.addEventListener('DOMContentLoaded', () => {
  // Fonction pour ajouter l'animation aux messages
  const animateMessages = () => {
    const messages = document.querySelectorAll('.message');
    let delay = 0;

    messages.forEach((message) => {
      setTimeout(() => {
        message.classList.add('fade-in');
        setTimeout(() => {
          message.classList.remove('fade-in');
          message.classList.add('fade-out');
          setTimeout(() => {
            message.classList.remove('fade-out');
            message.classList.add('hidden');
          }, 2000); // temps pour fade out
        }, 3000); // temps affiché
      }, delay);
      delay += 5000; // délai entre chaque message
    });
  };

  // Fonction pour créer et animer les cœurs
  const createHearts = () => {
    const numberOfHearts = 20; // Nombre de cœurs à créer
    for (let i = 0; i < numberOfHearts; i++) {
      // Créer un élément div pour le cœur
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Position aléatoire sur la page
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = `${Math.random() * 100}%`;

      // Ajouter le cœur au body
      document.body.appendChild(heart);

      // Animer le cœur pour entrer et sortir
      setTimeout(() => {
        heart.classList.add('enter');
        setTimeout(() => {
          heart.classList.add('leave');
          setTimeout(() => {
            document.body.removeChild(heart); // Enlever le cœur après l'animation
          }, 2000); // temps pour leave
        }, 2000); // temps pour entrer
      }, i * 200); // Délai pour chaque cœur
    }
  };

  // Démarrer les animations des messages et des cœurs
  animateMessages();
  createHearts();
});
