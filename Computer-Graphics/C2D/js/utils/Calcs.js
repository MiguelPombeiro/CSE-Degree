export class Calcs {

    /**
     * Gives a random number between a and b.
     * 
     * @param {number} a - Lower bound.
     * @param {number} b - Upper bound.
     * 
     * @returns {number} - Random number between a and b.
     */
    static rand_ab(a, b) {
        return a + (b-a) * Math.random();
    }


    /**
     * Converts radians to degrees.
     * 
     * @param {number} radians - Radians to convert.
     * 
     * @returns {number} - Degrees.
    */
    static convertRadiansToDegrees (radians){ 
        return (radians * 180.0) / Math.PI;
    }


    /**
     * Converts degrees to radians.
     * 
     * @param {number} degrees - Degrees to convert.
     * 
     * @returns {number} - Radians.
     */
    static convertDegreesToRadians (degrees) {
        return (degrees * Math.PI) / 180.0;
    }


    /**
     * Restricts a number to be within a specified range.
     * If x is less than a, it returns a.
     * If x is greater than b, it returns b.
     * Otherwise, it returns x.
     * Ensures that the returned value is always within the range [a, b].
     * 
     * @param {number} x - Number to clip.
     * @param {number} a - Lower bound.
     * @param {number} b - Upper bound.
     * 
     * @returns {number} - Clipped number.
    */
    static clip(x, a, b) { 
        return x < a ? a : (x > b ? b : x); 
    }


    
        /**
     * Gives a random number between a and b.
     * 
     * @param {number} a - Lower bound.
     * @param {number} b - Upper bound.
     * 
     * @returns {number} - Random number between a and b.
     */
    static rand_ab(a, b) {
        return a + (b-a) * Math.random();
    }


    /**
     * Generates a random number within a range, centered around a given value.
     * 
     * @param {number} c - Center value; the value around which the random number is generated.
     * @param {number} r - Radius; range of the random number.
     * 
     * @returns {number} - Random number in the range [c-r, c+r].
     */
    static rand_cr(c, r) {
        return c + r * (Math.random() * 2 - 1);
    }


    /**
     * Calculates the distance between two points.
     * The points are defined by their x, y and z coordinates.
     * If any of the coordinates are not provided, they are assumed to be 0.
     * 
     * @param {Object} v - First point; an object with x, y and z coordinates.
     * @param {Object} t - Second point; an object with x, y and z coordinates.
     * 
     * @returns {number} - Distance between the two points.
    */
    static dist (v, t) {
        //x
        v.x = v.x || 0; 
        t.x = t.x || 0;

        //y
        v.y = v.y || 0; 
        t.y = t.y || 0;

        //z
        v.z = v.z || 0; 
        t.z = t.z || 0;

        return Math.hypot(v.x - t.x, v.y - t.y, v.z - t.z);
    }
}

