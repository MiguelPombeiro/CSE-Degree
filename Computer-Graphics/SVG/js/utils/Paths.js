

export class Paths {


    /**
     * This method generates a rectangle path. Used to draw a rectangle.
     * 
     * @returns {Array} - Array of points that define a rectangle.
     */
    static uRect_path() {
        return [
            {x: -1, y: -1}, 
            {x:  1, y: -1},
            {x:  1, y:  1},
            {x: -1, y:  1},
            {x: -1, y: -1},
        ];
    }


    /**
     * Generates a triangle path. Used to draw a triangle.
     * 
     * @returns {Array} - Array of points that define a triangle.
     */
    static triangle_path () {
    
        return [
            {x:0, y:0},
            {x:1, y:0},
            {x:0.5, y:-1},
            {x:0, y:0}
        ];
    }


    /**
     * This method generates a star path. Used to draw a star.
     * 
     * @param {number} n - Number of points in the star.
     * @param {number} r - Radius of the star.
     * 
     * @returns {Array} - Array of points that define a star.
    */
    static star_path(n, r) {
        let points = new Array();
        let step_angle = Math.PI / n;
        let angle = 0.0;
        for (let i = 0; i < 2 * n; i++) {
            let radius = 1.0;
            if (i % 2 == 0) {
                radius = r;
            };
    
            points[i] = {
                x: radius * Math.cos(angle),
                y: radius * Math.sin(angle)
            };
    
            angle += step_angle;
        }
        return points;
    }
    

    /**
     * This method generates a sector path. Used to draw a sector.
     * 
     * @param {number} num_points: Number of points in the sector.
     * @param {number} start_angle: Start angle of the sector.
     * @param {number} end_angle: End angle of the sector.
     * 
     * @returns {Array} - Array of points that define a sector.
    */ 
    static sector_path(num_points, start_angle, end_angle) {
        let step = (end_angle - start_angle) / (num_points - 1);
        let points = new Array(num_points);
        let angle = start_angle;
        for (let i = 0; i < num_points; i++) {
            points[i] = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            };
            angle += step;
        }
        return points;
    }


    /**
     * This method generates a circle path. Used to draw a circle.
     * It uses the sector_path method to generate the circle.
     * 
     * @returns {Array} - Array of points that define a circle.
    */
    static circle_path(nPoints = 256) { return this.sector_path(nPoints, 0, 2 * Math.PI); }


    /**
     * This method generates a line path. Used to draw a line.
     * It generates a quadratic bezier curve path.
     * 
     * @param {number} startPoint: Start point of the line.
     * @param {number} cPoint: Control point of the line.
     * @param {number} endPoint: End point of the line.
     * @param {number} nPoints: Number of points in the line.
     * 
     * @returns {Array} - Array of points that define a line.
    */
    static quadraticBezierCurve_path(startPoint, cPoint, endPoint, nPoints = 255) {
        const points = [];
    
        for (let i = 0; i <= nPoints; i++) {
            const t = i / nPoints;
            const nt = 1 - t; 
    
            const x = (nt ** 2 * startPoint.x) + 
                      (2 * nt * t * cPoint.x) + 
                      (t ** 2 * endPoint.x);
    
            const y = (nt ** 2 * startPoint.y) + 
                      (2 * nt * t * cPoint.y) + 
                      (t ** 2 * endPoint.y);
    
           
            points.push({ x, y });
        }
    
        return points; 
    }


    /**
     * This method generates a cubic bezier curve path. Used to draw a cubic bezier curve.
     * 
     * @param {number} startPoint: Start point of the cubic bezier curve.
     * @param {number} cPoint1: First control point of the cubic bezier curve.
     * @param {number} cPoint2: Second control point of the cubic bezier curve.
     * @param {number} endPoint: End point of the cubic bezier curve.
     * @param {number} nPoints: Number of points in the cubic bezier curve.
     * 
     * @returns {Array} - Array of points that define a cubic bezier curve.
     */
    static cubicBezierCurve_path(startPoint, cPoint1, cPoint2, endPoint, nPoints = 255) {
        const points = [];
        
        for (let i = 0; i <= nPoints; i++) {
            const t = i / nPoints;
            const nt = 1 - t;
            
            const x = (nt ** 3 * startPoint.x) + 
                      (3 * nt ** 2 * t * cPoint1.x) +
                      (3 * nt * t ** 2 * cPoint2.x) + 
                      (t ** 3 * endPoint.x);
            
            const y = (nt ** 3 * startPoint.y) + 
                      (3 * nt ** 2 * t * cPoint1.y) +
                      (3 * nt * t ** 2 * cPoint2.y) + 
                      (t ** 3 * endPoint.y);
            
            points.push({ x, y });
        }

        return points;
    }    


    /** 
     * This method generates an elipse path. Used to draw an elipse.
     * 
     * @param {number} a: Semi-major axis of the elipse.
     * @param {number} b: Semi-minor axis of the elipse.
     * @param {number} numPoints: Number of points in the elipse.
     * 
     * @returns {Array} - Array of points that define an elipse.
    */
    static elipse_path(a, b, nPoints) {
        let points = [];

        // Generate points for the elipse using the parametric equation.
        for (let i = 0; i < nPoints; i++) {
            const theta = (i / nPoints) * 2 * Math.PI;
            const x = a * Math.cos(theta);
            const y = b * Math.sin(theta);
            points.push({ x, y });
        }

        return points;
    }
    

    /**
     * This method generates a polygon path. Used to draw a polygon.
     * 
     * @param {number} n: Number of sides of the polygon.
     * 
     * @returns {Array} - Array of points that define a polygon.
     */
    static nAgon_path(n) {
        let points = new Array();
        let step_angle = 2.0 * Math.PI / n;
        let angle = 0.0;
        for (let i = 0; i < n; i++) {
            points[i] = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            }
            angle = angle + step_angle;
        }
        return points;
    }


    /** 
     * This method generates a pie path. Used to draw a pie.
     * A pie is a sector with the center at the origin.
     * 
     * @param {Array} points: Array of points that define the pie.
     * 
     * @returns {Array} - Array of points that define a pie. 
    */
    static pie_path(points) {
        let o = [{x: 0, y: 0}]
        return o.concat(points).concat(o);
    }

}