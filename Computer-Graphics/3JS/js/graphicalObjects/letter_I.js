import { Paths } from "../utils/Paths.js"
import { GraphicContext } from "../render/GraphicContext.js"


const NUM_POINTS = 50;

export class Letter_I {

    getGeometry() {
        let mainPath = this.#getOuterPath();
        let bodyGeometry = GraphicContext.getExtrusion(mainPath);

        let dotPath = this.#getDotPath();
        let dotGeometry = GraphicContext.getExtrusion(dotPath);

        // Combine the geometries
        let combinedGeometry = new THREE.Geometry();
        combinedGeometry.merge(bodyGeometry);
        combinedGeometry.merge(dotGeometry);

        return combinedGeometry;
    }


    #getOuterPath() {
        let path = [
            { x: 77.17, y: 27.75 },
            { x: 77.17, y: 29.25 },
            { x: 67.17, y: 29.25 },
            { x: 67.17, y: 27.75 },
        ];
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 67.17, y: 27.75 },
            { x: 69.37, y: 27.73 },
            { x: 70.33, y: 27.91 },
            { x: 70.27, y: 26.96 },
        ));

        path = path.concat([
            { x: 70.27, y: 26.96 },
            { x: 70.27, y: 16.87 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 70.27, y: 16.87 },
            { x: 70.3, y: 15.33 },
            { x: 68.8, y: 15.76 },
            { x: 67.17, y: 15.75 },
        ));
        
        path = path.concat([
            { x: 67.17, y: 15.75 },
            { x: 67.17, y: 14.25 },
            { x: 73.83, y: 14.25 },
            { x: 73.83, y: 26.88 },
        ]);
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 73.83, y: 26.88 },
            { x: 73.9, y: 27.95 },
            { x: 75, y: 27.75 },
            { x: 77.17, y: 27.75 },
        ));

        return path;
    }


    #getDotPath() {
        let path = [];

        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 69.97, y: 10.04 },
            { x: 70.03, y: 8.41 },
            { x: 70.47, y: 7.96 },
            { x: 71.91, y: 7.9 },
        ));
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 71.91, y: 7.9 },
            { x: 73.28, y: 7.94 },
            { x: 73.74, y: 8.36 },
            { x: 73.83, y: 10.04 },
        ));

        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 73.83, y: 10.04 },
            { x: 73.77, y: 11.56 },
            { x: 73.35, y: 11.98 },
            { x: 71.91, y: 11.97 },
        ));

        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 71.91, y: 11.97 },
            { x: 70.47, y: 11.92 },
            { x: 70.02, y: 11.44 },
            { x: 69.97, y: 10.04 },
        ));

        return path;  
    }

}