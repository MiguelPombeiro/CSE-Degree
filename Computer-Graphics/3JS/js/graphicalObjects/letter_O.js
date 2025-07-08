import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"

export class Letter_O {

    getGeometry() {
        let mainPath = this.#getOuterPath();
        let holePath = this.#getInnerPath();
     
        return GraphicContext.getExtrusion(mainPath, holePath);
    }

    #getOuterPath() {
        let path = [];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 156.47, y: 29.25 },
            { x: 150.49, y: 29.15 },
            { x: 148.62, y: 27.28 },
            { x: 148.49, y: 20.04 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 148.49, y: 20.04 },
            { x: 148.63, y: 12.34 },
            { x: 150.54, y: 10.48 },
            { x: 156.47, y: 10.54},
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 156.47, y: 10.54},
            { x: 162.27, y: 10.55 },
            { x: 164.18, y: 12.38 },
            { x: 164.36, y: 20.04 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 164.36, y: 20.04 },
            { x: 164.13, y: 26.64 },
            { x: 162.79, y: 29.07 },
            { x: 156.47, y: 29.25 },

        ));
        
        return path;
        
    }


    #getInnerPath() {
        let path = [];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 156.37, y: 27.33 },
            { x: 152.7, y: 27.25 },
            { x: 151.86, y: 24.86 },
            { x: 151.78, y: 20.04 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 151.78, y: 20.04 },
            { x: 151.81, y: 13.96 },
            { x: 153.09, y: 12.69 },
            { x: 156.41, y: 12.54 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 156.41, y: 12.54 },
            { x: 159.74, y: 12.64 },
            { x: 160.92, y: 13.8 },
            { x: 161.06, y: 20.04 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 161.06, y: 20.04 },
            { x: 161.02, y: 25.34 },
            { x: 159.74, y: 27.21 },
            { x: 156.37, y: 27.33 },
        ));
        
        return path;

    }
}