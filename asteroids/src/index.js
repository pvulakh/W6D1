
const MovingObject = require("./moving_object.js")

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', function(){
    let canvas = document.getElementById("game-canvas");
    canvas.width = 500;
    canvas.height = 500;
    let ctx = canvas.getContext("2d");
    return mo.draw(ctx);
});
const mo = new MovingObject(
    { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
);