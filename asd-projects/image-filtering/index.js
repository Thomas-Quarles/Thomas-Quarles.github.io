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
applyFilter(decreaseBlue);
applyFilterNoBackground(increaseGreenByBlue);
applyFilter(reddify);
applyFilterNoBackground(decreaseBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {

      // 1. Store the pixel in a variable
      let pixel = image[i][j];

      // 2. Convert the pixel string into an array
      let pixelArray = rgbStringToArray(pixel);

      // 3. Apply the filter function passed in
      filterFunction(pixelArray);

      // 4. Convert the array back into an rgb(...) string
      let updatedPixel = rgbArrayToString(pixelArray);

      // 5. Overwrite the original pixel in the image
      image[i][j] = updatedPixel;
    }
  }
}
  // 3. Add a Nested Loop Inside the Function

  // Directly modify index 0 (Red) in the [R, G, B] array
  
// 2. Call applyFilter When the Page Loads (Inside applyAndRender)


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  // 1. Get the background color (top-left pixel)
  let backgroundColor = image[0][0];

  // 2. Loop through the entire image
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {

      // 3. Skip background pixels
      if (image[i][j] !== backgroundColor) {

        // Convert pixel string → array
        let pixelArray = rgbStringToArray(image[i][j]);

        // Apply the filter
        filterFunction(pixelArray);

        // Convert array → string
        let updatedPixel = rgbArrayToString(pixelArray);

        // Overwrite the pixel
        image[i][j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  if (num < 0) {
    return 0;
  } else if (num > 255) {
    return 255;
  } else {
    return num;
  }
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  let newBlue = pixelArray[BLUE] - 50;
  pixelArray[BLUE] = keepInBounds(newBlue);
}
function increaseGreenByBlue(pixelArray) {
  let newGreen = pixelArray[GREEN] + pixelArray[BLUE];
  pixelArray[GREEN] = keepInBounds(newGreen);
}
// CHALLENGE code goes below here
