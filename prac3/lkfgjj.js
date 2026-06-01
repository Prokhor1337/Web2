'use strict';

class dwaDPoint {
    constructor(name, pointX, pointY) {
        this.name = name;
        this.pointX = pointX;
        this.pointY = pointY;
    }

    display() {
        console.log(`Точка ${this.name}: (${this.pointX},${this.pointY})`);
    }

    distance(otherPoint) {
        return Math.sqrt((this.pointX - otherPoint.pointX) ** 2 + (this.pointY - otherPoint.pointY) ** 2);
    }
}

class tryDPoint extends dwaDPoint {
    constructor(name, pointX, pointY, pointZ) {
        super(name, pointX, pointY);
        this.pointZ = pointZ;
    }

    display() {
        console.log(`Точка ${this.name}: (${this.pointX},${this.pointY},${this.pointZ})`);
    }

    distance(otherPoint) {
        return Math.sqrt((this.pointX - otherPoint.pointX) ** 2 + (this.pointY - otherPoint.pointY) ** 2 + (this.pointZ - otherPoint.pointZ) ** 2);
    }
}

const pointA = new dwaDPoint("A", 1, -5);
const pointB = new dwaDPoint("B", 4, 22);
const pointC = new dwaDPoint("C", 2, -2);
const pointD = new dwaDPoint("D", -8, -2);
const pointE = new dwaDPoint("E", -3, 0);
const pointF = new dwaDPoint("F", 5, 2);
const pointG = new tryDPoint("G", 2, 5, 2);
const pointH = new tryDPoint("H", 2, 3, 3);
const pointJ = new tryDPoint("J", 2, 3, 3);

pointC.display();
pointD.display();

console.log(pointA.distance(pointB));
console.log(pointG.distance(pointH));