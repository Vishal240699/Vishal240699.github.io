document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');

  for (let i = 0; i < 100; i++) { // Create 100 petals
    let petal = document.createElement('div');
    petal.style.position = 'absolute';
    petal.style.width = '1000px';
    petal.style.height = '1000px';
    petal.style.backgroundImage = "url('images/petal-remove.png')"; // Use your petal image
    petal.style.backgroundSize = 'cover';
    petal.style.opacity = Math.random() + 0.2; // Random opacity for realism
    container.appendChild(petal);0

    animatePetal(petal);
  }

  function animatePetal(petal) {
    // Random starting positions
    let startX = Math.random() * window.innerWidth * -1;
    let startY =  Math.random() * window.innerWidth * -1;
    let endX = window.innerHeight + 2000;
    let endY = window.innerHeight + 2000;
    let rotation = Math.random() * 720; // Random rotation
    let duration = 5 + Math.random() * 100;

    gsap.fromTo(petal, {
      x: startX,
      y: startY,
      rotation: 0
    }, {
      x: endX,
      y: endY,
      rotation: rotation,
      duration: duration,
      ease: 'linear',
      onComplete: () => animatePetal(petal) // Loop the animation
    });
  }
});
