function MovingObject(pos, vel, radius, color) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
}

MovingObject.prototype.draw = function(ctx) {
        ctx.fillStyle = this.color;
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
};

module.exports = MovingObject;

