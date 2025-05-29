$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,150,1300,10,"red");
    createPlatform(1300,150,10,500, "black");
    createPlatform(100,550,1200,10,"red");
    createPlatform(0,650,100,10,"black");
    createPlatform(0,350,1200,10,"red");
    createPlatform(1200,450,100,10,"black");
    //marks the finish of the level
    createPlatform(0,350,100,-100,"yellow");


    // TODO 3 - Create Collectables
    createCollectable("diamond",25,600);
    createCollectable("steve",1225,400);
    createCollectable("kennedi",1325,100);


    
    // TODO 4 - Create Cannons
    createCannon("top",250,1000);
    createCannon("top",450,900);
    createCannon("top",650,800);
    createCannon("top",850,700);
    createCannon("top",1050,600);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
