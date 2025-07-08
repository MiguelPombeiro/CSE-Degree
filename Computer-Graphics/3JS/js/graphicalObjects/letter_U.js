import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"


const NUM_POINTS = 50;

export class Letter_U {

    getGeometry() {
        let mainPath = this.#getOuterPath();

        return GraphicContext.getExtrusion(mainPath);
    }


    #getOuterPath() {
        let path = [
            { x: 20.77, y: 29.25 },
            { x: 16.16, y: 29.25 },
            { x: 15.21, y: 26.13 },
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 15.21, y: 26.13 },
            { x: 11.28, y: 31.27 },
            { x: 2.9, y: 28.1 },
            { x: 2.87, y: 24.52 },
            // NUM_POINTS,
        ));
        
        path = path.concat([
            { x: 2.87, y: 24.52 },
            { x: 2.87, y: 12.47 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 2.87, y: 12.47 },
            { x: 2.87, y: 11.01 },
            { x: 2.6, y: 10.89 },
            { x: 0, y: 11.01 },
            // NUM_POINTS,
        ));
        
        path = path.concat ([
            { x: 0, y: 11.01 },
            { x: 0, y: 9.3 },
            { x: 5.75, y: 9.3 },
            { x: 5.75, y: 23.88 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 5.75, y: 23.88 },
            { x: 5.75, y: 28.46 },
            { x: 15.17, y: 27.5 },
            { x: 15.16, y: 23.2 },
            // NUM_POINTS,
        ));
        
        path = path.concat([
            { x: 15.16, y: 23.2 },
            { x: 15.16, y: 12.47 },
        ])
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 15.16, y: 12.47 },
            { x: 15.16, y: 11.01 },
            { x: 13.93, y: 10.94 },
            { x: 12.2, y: 11.01 },
            // NUM_POINTS,
        ));
        
        path = path.concat([
            { x: 12.2, y: 11.01 },
            { x: 12.2, y: 9.3 },
            { x: 17.99, y: 9.3 },
            { x: 17.99, y: 20.95 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 17.99, y: 20.95 },
            { x: 17.99, y: 27.36 },
            { x: 19.09, y: 27.54 },
            { x: 20.77, y: 27.54 },
            // NUM_POINTS,
        ));

        path = path.concat([
            { x: 20.77, y: 29.25 },
        ]);

        return path;
    }
        
   
}