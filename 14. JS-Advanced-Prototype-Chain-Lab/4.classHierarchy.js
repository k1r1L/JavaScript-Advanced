function hierarchy() {
    class Figure {
        constructor() {
            if(new.target === Figure){
                throw new TypeError('Figure is abstract and shouldn\'t be instantiated');
            }
        }

        get area() {
            switch (this.constructor) {
                case Circle:
                    return this.radius * this.radius * Math.PI;
                case Rectangle:
                    return this.width * this.height;
            }
        }

        toString() {
            return this.constructor.name + ' - ' +
                Object.getOwnPropertyNames(this)
                    .map(prop => `${prop}: ${this[prop]}`)
                    .join(', ');
        }
    }

    class Circle extends Figure{
        constructor(radius) {
            super();
            this.radius = radius;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}