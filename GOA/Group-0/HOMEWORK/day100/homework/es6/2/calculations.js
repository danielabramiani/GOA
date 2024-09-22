// calculations.js
import { PI, E } from './constants.js';

const areaOfCircle = (radius) => PI * radius * radius;
const naturalLog = (value) => Math.log(value) / Math.log(E);

console.log(`Area of circle with radius 5: ${areaOfCircle(5)}`);
console.log(`Natural log of 20: ${naturalLog(20)}`);
