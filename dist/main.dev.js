"use strict";

function drawTransitions() {
  var canvases = document.getElementsByClassName("transition");
  console.log(canvases.length);

  for (var i = 0; i < canvases.length; i++) {
    var ctx = canvases[i].getContext('2d');
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvases[i].width, 0);
    ctx.lineTo(0, canvases[i].height);
    ctx.closePath();
    ctx.fill();
  }
}