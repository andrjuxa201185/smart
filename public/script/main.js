document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('canvas');
  let numPoint = window.innerWidth > 640 ? 50 : 20;

  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;

  const molecule = new Molecule(canvas, Point, numPoint);

  molecule.start();  

  document.addEventListener("scroll", function (){
    let coord = canvas.getBoundingClientRect();
    if (coord.bottom < 0){
      molecule.stop();
    } else {
      molecule.start();
    }
  });
});

