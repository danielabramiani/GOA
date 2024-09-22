// moreCalculations.js
import { PI, E } from './constants.js';

const circumferenceOfCircle = (radius) => 2 * PI * radius;
const power = (base, exponent) => Math.pow(base, exponent);

console.log(`Circumference of circle with radius 5: ${circumferenceOfCircle(5)}`);
console.log(`E raised to the power of 3: ${power(E, 3)}`);
