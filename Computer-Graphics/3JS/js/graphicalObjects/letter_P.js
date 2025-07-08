import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"

export class Letter_P {

    getGeometry() {
        let mainPath = this.#getOuterPath();
        let holePath = this.#getInnerPath();
     
        return GraphicContext.getExtrusion(mainPath, holePath);
    }

    #getOuterPath() {
        let path = [
            { x: 36.08, y: 35.75 },
            { x: 36.08, y: 37.25 },
            { x: 26.93, y: 37.25 },
            { x: 26.93, y: 35.75 },
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 26.93, y: 35.75 },
            { x: 29.13, y: 35.68 },
            { x: 29.92, y: 35.1 },
            { x: 29.99, y: 33.75 },
        ));

        path = path.concat([
            { x: 29.99, y: 33.75 },
            { x: 29.99, y: 12.25 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 29.99, y: 12.25 },
            { x: 29.99, y: 10.97 },
            { x: 28.38, y: 11.22 },
            { x: 26.77, y: 11.25 },
        ));
        
        path = path.concat([
            { x: 26.77, y: 11.25 },
            { x: 26.77, y: 9 },
            { x: 32.71, y: 9 },
            { x: 32.71, y: 11.25 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 32.71, y: 11.25 },
            { x: 35.85, y: 8.19 },
            { x: 40.79, y: 8.59 },
            { x: 43.19, y: 11.25 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 43.19, y: 11.25 },
            { x: 45.59, y: 13.91 },
            { x: 46.06, y: 23.51 },
            { x: 43.19, y: 25.75 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 43.19, y: 25.75 },
            { x: 40.32, y: 27.99 },
            { x: 36.35, y: 27.95 },
            { x: 33.06, y: 25.75 },
        ));
        
        path = path.concat([
            { x: 33.06, y: 25.75 },
            { x: 33.06, y: 33.75 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 33.06, y: 33.75 },
            { x: 33.17, y: 35.36 },
            { x: 33.9, y: 35.74 },
            { x: 36.08, y: 35.75 },
        ));

        path = path.concat([
            { x: 36.08, y: 35.75 },
        ]);

        
        return path;
        
    }

    #getInnerPath() {
        let path = [];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 37.84 , y: 11.89 },
            { x: 41.2, y: 12.09 },
            { x: 41.95, y: 14.83 },
            { x: 42.03, y: 18.75 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 42.03, y: 18.75 },
            { x: 42.03, y: 22.5 },
            { x: 41.07, y: 24.51 },
            { x: 37.81, y: 24.66 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 37.81, y: 24.66 },
            { x: 34.35, y: 24.45 },
            { x: 33.27, y: 22.51 },
            { x: 33.17, y: 18.75 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 33.17, y: 18.75 },
            { x: 33.25, y: 14.27 },
            { x: 34.69, y: 12.01 },
            { x: 37.84, y: 11.89 },
        ));

        return path;

    }
}