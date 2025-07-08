import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"


const NUM_POINTS = 63;

export class Letter_A {


    getGeometry() {
        let mainPath = this.#getOuterPath();
        let holePath = this.#getInnerPath();

        return GraphicContext.getExtrusion(mainPath, holePath);
    }


    #getOuterPath() {
        let path = [
            { x: 118.09, y: 27.95 },
            { x: 118.09, y: 29.25 },
            { x: 113.49, y: 29.25 },
            { x: 112.68, y: 26.25 },
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 112.68, y: 26.25 },
            { x: 111.94, y: 28.49 },
            { x: 110.92, y: 29.26 },
            { x: 107.35, y: 29.25 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 107.35, y: 29.25 },
            { x: 103.44, y: 29.26 },
            { x: 102.69, y: 28.3 },
            { x: 102.6, y: 24.75 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 102.6, y: 24.75 },
            { x: 102.72, y: 22.02 },
            { x: 102.7, y: 21.8 },
            { x: 104.03, y: 20.92 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 104.03, y: 20.92 },
            { x: 106.62, y: 20.09 },
            { x: 108.61, y: 19.99 },
            { x: 112.68, y: 20.16 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 112.68, y: 20.16 },
            { x: 112.71, y: 15.9 },
            { x: 112.17, y: 14.37 },
            { x: 109.52, y: 14.25 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 109.52, y: 14.25 },
            { x: 106.35, y: 14.34 },
            { x: 106.23, y: 15.65 },
            { x: 106.35, y: 18.25 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 106.35, y: 18.25 },
            { x: 104.74, y: 18.01 },
            { x: 103.51, y: 18.25 },
            { x: 103.53, y: 16.07 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 103.53, y: 16.07 },
            { x: 103.59, y: 12.78 },
            { x: 105.02, y: 11.96 },
            { x: 109.65, y: 12.01 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 109.65, y: 12.01 },
            { x: 114.32, y: 12.02 },
            { x: 115.92, y: 13.03 },
            { x: 115.88, y: 17.75 },
        ));
        
        path = path.concat([
            { x: 115.88, y: 17.75 },
            { x: 115.88, y: 25.1 },
        ])
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 115.88, y: 25.1 },
            { x: 115.92, y: 27.51 },
            { x: 116.46, y: 28.03 },
            { x: 118.09, y: 27.95 },
        ));

        return path;
        
    }


    #getInnerPath() {
        let path = [
            { x: 112.35, y: 21.25 },
            { x: 112.35, y: 24.26 },
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 112.35, y: 24.26 },
            { x: 112.33, y: 26.45 },
            { x: 111.58, y: 27.17 },
            { x: 108.16, y: 27.19 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 108.16, y: 27.19 },
            { x: 106.25, y: 27 },
            { x: 105.51, y: 26.59 },
            { x: 105.4, y: 24.75 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 105.4, y: 24.75 },
            { x: 104.94, y: 21.17 },
            { x: 108.27, y: 21.66 },
            { x: 112.35, y:21.25 },
        ));

        return path;
    }
}