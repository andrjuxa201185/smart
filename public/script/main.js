document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('canvas');
  let numPoint = 40;

  canvas.width = window.innerWidth + 1000;
  canvas.height = window.innerHeight + 800;

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

  function drowPoint(e){
    let i = Math.round(Math.random() * numPoint);
    molecule.point[i].setMouseCoord(e);
    molecule.point[i].setParam(e);
  }

  function follow (e){
    for (let i = 0; i < numPoint; i++) {
      molecule.point[i].speedX = (e.offsetX - molecule.point[i].positionX) / window.innerWidth * Math.random() * 100;
      molecule.point[i].speedY = (e.offsetY - molecule.point[i].positionY) / window.innerHeight * Math.random() * 100;
    }
  }

  function boom(e){
    for (let i = 0; i < numPoint; i++) {
      molecule.point[i].setMouseCoord(e);
      molecule.point[i].setParam(e);
      molecule.point[i].color = "red";
      molecule.point[i].speedX = -10 + Math.random() * 20;
      molecule.point[i].speedY = -10 + Math.random() * 20;
    }
    canvas.removeEventListener("mousemove", follow);
    setTimeout(()=>{
      canvas.addEventListener("mousemove", follow);
    }, 7000);
  }

  canvas.addEventListener("mousedown", function(){
    canvas.addEventListener("mousemove", drowPoint);
  });


  canvas.addEventListener("click", drowPoint);

  canvas.addEventListener("mouseup", function(){
    canvas.removeEventListener("mousemove", drowPoint);
  });


});

