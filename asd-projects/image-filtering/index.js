// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter() {
  // 3. Add a Nested Loop Inside the Function
  for (let row = 0; row < image.length; row++) {
    for (let col = 0; col < image[row].length; col++) {
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);
// This is where I’ll modify the color values later
      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
      pixelArray[RED] = 200; 
      // Access individual pixel: image[row][col]
      const RED = 200; // Define the CONSTANT

function reddify(pixel) {
  // Directly modify index 0 (Red) in the [R, G, B] array
  pixel[0] = RED;
}
    }
  }
}
// 2. Call applyFilter When the Page Loads (Inside applyAndRender)
function applyAndRender() {
  applyFilter(); // Call the new function
}
// TODO 9 Create the applyFilterNoBackground function


// TODO 6: Create the keepInBounds function


// TODO 4: Create reddify filter function


// TODO 7 & 8: Create more filter functions


// CHALLENGE code goes below here
