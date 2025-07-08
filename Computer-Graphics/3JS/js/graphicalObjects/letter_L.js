import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"

export class Letter_L {

    getGeometry() {
        let mainPath = this.#getOuterPath();
     
        return GraphicContext.getExtrusion(mainPath);
    }


    #getOuterPath() {
        let path = [
            { x: 61.17, y: 27.66 },
            { x: 61.17, y: 29.25 },
            { x: 51.26, y: 29.25 },
            { x: 51.26, y: 27.66 },
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 51.26, y: 27.66 },
            { x: 53.47, y: 27.63 },
            { x: 54.33, y: 27.33 },
            { x: 54.27, y: 25.55 },
        ));
        
        path = path.concat([
            { x: 54.27, y: 25.55 },
            { x: 54.27, y: 4.95 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 54.27, y: 4.95 },
            { x: 54.3, y: 2.07 },
            { x: 52.8, y: 2.85 },
            { x: 51.17, y: 2.83 },
            
        ));
        
        path = path.concat([
            { x: 51.17, y: 2.83 },
            { x: 51.17, y: 1.25 },
            { x: 57.83, y: 1.25 },
            { x: 57.83, y: 25.55 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 57.83, y: 25.55 },
            { x: 57.9, y: 27.56 },
            { x: 59, y: 27.67 },
            { x: 61.17, y: 27.66 },

        ));
        
        return path;
        
    }
}