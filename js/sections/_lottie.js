const world = document.getElementById('world');

lottie.loadAnimation({
    container: world, // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/lottie/world.json' // the path to the animation json
  });