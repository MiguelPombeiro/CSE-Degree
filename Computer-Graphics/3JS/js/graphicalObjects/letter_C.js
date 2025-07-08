import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"

export class Letter_C {


    getGeometry() {
        let mainPath = this.#getOuterPath();
     
        return GraphicContext.getExtrusion(mainPath);
    }


    #getOuterPath() {
        let path = [];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 95.9, y: 25.23 },
            { x: 96.67, y: 25.54 },
            { x: 96.67, y: 26.12 },
            { x: 96.53, y: 27.25 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 96.53, y: 27.25 },
            { x: 95.43, y: 28.74 },
            { x: 93.63, y: 29.25 },
            { x: 90.6, y: 29.25 },    
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 90.6, y: 29.25 },
            { x: 88.03, y: 29.07 },
            { x: 86.57, y: 28.62 },
            { x: 85.02, y: 26.96 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 85.02, y: 26.96 },
            { x: 83.48, y: 25.3 },
            { x: 83.3, y: 23.61 },
            { x: 83.17, y: 20.75 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 83.17, y: 20.75 },
            { x: 83.14, y: 17.86 },
            { x: 83.38, y: 16.36 },
            { x: 85.02, y: 14.42 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 85.02, y: 14.42 },
            { x: 86.67, y: 12.61 },
            { x: 88.15, y: 12.34 },
            { x: 90.6, y: 12.25 },
            
        ));
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 90.6, y: 12.25 },
            { x: 94.36, y: 12.63 },
            { x: 96.53, y: 13.15 },
            { x: 96.53, y: 15.25 },
            
        ));
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 96.53, y: 15.25 },
            { x: 96.53, y: 16.79 },
            { x: 95.25, y: 17.25 },
            { x: 93.63, y: 17.25 },
            
        ));
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 93.63, y: 17.25 },
            { x: 93.47, y: 15.01 },
            { x: 92.64, y: 14.52 },
            { x: 90.6, y: 14.25 },
            
        ));
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 90.6, y: 14.25 },
            { x: 86.76, y: 14.35 },
            { x: 86.1, y: 16.15 },
            { x: 86.1, y: 20.75 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 86.1, y: 20.75 },
            { x: 86.16, y: 25.56 },
            { x: 87.16, y: 27.2 },
            { x: 91.6, y: 27.25 },
        ));

        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 91.6, y: 27.25 },
            { x: 93.65, y: 27.24 },
            { x: 95.31, y: 26.91 },
            { x: 95.9, y: 25.23 },

        ));

        return path;
        
    }
}