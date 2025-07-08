import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"

export class Letter_D {

    getGeometry() {
        let mainPath = this.#getOuterPath();
        let holePath = this.#getInnerPath();
     
        return GraphicContext.getExtrusion(mainPath, holePath);
    }

    #getOuterPath() {
        let path = [
            { x: 142.49, y: 27 },
            { x: 142.49, y: 29 },
            { x: 136.54, y: 29.25 },
            { x: 136.54, y: 27 },            
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 136.54, y: 27 },
            { x: 133.41, y: 30.05 },
            { x: 128.47, y: 29.66 },
            { x: 126.07, y: 27 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 126.07, y: 27 },
            { x: 123.67, y: 24.34 },
            { x: 123.2, y: 14.74 },
            { x: 126.07, y: 12.5 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 126.07, y: 12.5 },
            { x: 128.94, y: 10.26 },
            { x: 132.81, y: 9.48 },
            { x: 136.2, y: 12.5 },
        ));
        
        path = path.concat([
            { x: 136.2, y: 12.5 },
            { x: 136.2, y: 4.5 },            
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 136.2, y: 4.5 },            
            { x: 136.09, y: 2.89 },
            { x: 135.36, y: 2.51 },
            { x: 133.17, y: 2.5 },
        ));
        
        path = path.concat([
            { x: 133.17, y: 2.5 },
            { x: 133.17, y: 1 },
            { x: 142.32, y:1 },
            { x: 142.32, y: 2.5 },
        ]);

        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 142.32, y: 2.5 },
            { x: 140.12, y: 2.57 },
            { x: 139.33, y: 3.15 },
            { x: 139.27, y: 4.5 },
        ));
        
        path = path.concat([
            { x: 139.27, y: 4.5 },
            { x: 139.27, y: 26 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 139.27, y: 26 },
            { x: 139.27, y: 27.28 },
            { x: 140.87, y: 27.03 },
            { x: 142.49, y: 27 },

        ));

        
        
        return path;
        
    }


    #getInnerPath() {
        let path = [];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 131.41, y: 26.36 },
            { x: 128.05, y: 26.16 },
            { x: 127.31, y: 23.42 },
            { x: 127.22, y: 19.5 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 127.22, y: 19.5 },
            { x: 127.22, y: 15.75 },
            { x: 128.18, y: 13.74 },
            { x: 131.45, y: 13.59 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 131.45, y: 13.59 },
            { x: 134.91, y: 13.8 },
            { x: 135.99, y: 15.74 },
            { x: 136.09, y: 19.5 },
            
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 136.09, y: 19.5 },
            { x: 136, y: 23.98 },
            { x: 134.56, y: 26.24 },
            { x: 131.41, y: 26.36 },

        ));

        return path;

    }
}