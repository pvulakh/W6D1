Function.prototype.inherits = function(parent) {
    let Surrogate = function() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate(); 
    this.prototype.constructor = this;

    let surrogate = Object.create(parent.prototype); //creates surr obj, using parent prototype as prototype of surr obj. MUST USE .prototype if obj is a constructor
    this.prototype = surrogate; 
    this.prototype.constructor = this;
};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function () {
    console.log("i'm moving");
};

Ship.prototype.swim = function () {
    console.log("i'm swimming");
};

Asteroid.prototype.fly = function () {
    console.log("i'm flying");
};

const moveobj = new MovingObject();
const ship = new Ship();
const asteroid =  new Asteroid();

moveobj.move(); 
ship.move();
asteroid.move();

//moveobj.swim(); //should not work 
//moveobj.fly(); //should not work 

ship.swim();  
asteroid.fly(); 

//asteroid.swim(); //should not work 
//ship.fly(); //should not work 


