//this is a factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// if a member is a function, we defined it as a method

circle.draw();
