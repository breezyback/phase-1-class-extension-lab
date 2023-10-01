class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((perimeter, side) => perimeter + side, 0);
    }
}

class Triangle extends Polygon {
    constructor(sides) {
        super(sides);
    }

    get isValid() {
        if (this.countSides === 3) {
            return (
                this.sides[0] + this.sides[1] > this.sides[2] &&
                this.sides[0] + this.sides[2] > this.sides[1] &&
                this.sides[1] + this.sides[2] > this.sides[0]
              );
        }
        return false;
    }
}

class Square extends Polygon {
    constructor(sides) {
        super(sides);
    }

    get isValid() {
        if (this.countSides === 4) {
            return (
                this.sides[0] === this.sides[1] &&
                this.sides[0] === this.sides[2] &&
                this.sides[0] === this.sides[3]
            );
        }
        return false;
    }

    get area() {
        return this.sides[0] ** 2
    }
}

