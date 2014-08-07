// var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
//     prop,
//     el = document.createElement('div');

// for(var i = 0, l = props.length; i < l; i++) {
//     if(typeof el.style[props[i]] !== "undefined") {
//         prop = props[i];
//         break;
//     }
// }

$(document).ready(function(){
  var xAngle = 0, yAngle = 0;
  $("#up").click(function(e) {
    xAngle += 90;
    $('#cube').css("-webkitTransform", "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
    })
  $("#right").click(function(e) {
    yAngle += 90;
    $('#cube').css("-webkitTransform", "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
    })
  $("#down").click(function(e) {
    xAngle -= 90;
    $('#cube').css("-webkitTransform", "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
    })
  $("#left").click(function(e) {
    yAngle -= 90;
    $('#cube').css("-webkitTransform", "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
    })
})
  //     switch(evt.keyCode) {
  //         case 37: // left
  //             yAngle -= 90;
  //             break;

  //         case 38: // up
  //             xAngle += 90;
  //             evt.preventDefault();
  //             break;

  //         case 39: // right
  //             yAngle += 90;
  //             break;

  //         case 40: // down
  //             xAngle -= 90;
  //             evt.preventDefault();
  //             break;
  //     };
  //     $('#cube').css("-webkitTransform", "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
  // }, false);

