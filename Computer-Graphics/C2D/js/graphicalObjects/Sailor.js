import { Paths } from "../utils/Paths.js";

export class Sailor {

    constructor() {

        this.transform = {
            dx: 0,
            dy: 0.5,
            sx: 1,
            sy: 1,
            a: 0,
        }

        this.style = {
            fill: "#BF6952",
            stroke: "#BF6952",
            lineWidth: 0.01,
        }
        this.shape = this.#get_sailor();
        this.children = this.#get_children();
    }

    #get_sailor() {
        let sailor = [];

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 57.02, y: 59.02 },
            { x: 57.37, y: 59.54 },
            { x: 55.69, y: 60.91 },
            { x: 54.74, y: 60.93 },
            63, 
        ));

        sailor = sailor.concat([
            { x: 54.74, y: 60.93 },
            { x: 54.39, y: 60.91 },
            { x: 53.95, y: 60.79 },
            { x: 52.61, y: 60.7 },
            63,
        ]);
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 52.61, y: 60.7 },
            { x: 52.81, y: 61.59 },
            { x: 53.61, y: 62.33 },
            { x: 54.14, y: 63.21 },
            63,
        ));

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 54.14, y: 63.21 },
            { x: 54.92, y: 64.52 },
            { x: 53.93, y: 65.33 },
            { x: 53.43, y: 65.34 },
            63,
        )),
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 53.43, y: 65.34 },
            { x: 52.67, y: 65.36 },
            { x: 52.66, y: 64.56 },
            { x: 52.91, y: 64.5 },
            31,
        ));
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 52.91, y: 64.5 },
            { x: 53.41, y: 64.55 },
            { x: 53.55, y: 63.72 },
            { x: 53.38, y: 63.23 },
            31,
        ));

        sailor = sailor.concat([
            { x: 53.38, y: 63.23 },
            { x: 52.38, y: 61.64 },
            { x: 52.62, y: 62.98 },
        ]);

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 52.62, y: 62.98 },
            { x: 52.65, y: 64.19 },
            { x: 52.54, y: 64.8 },
            { x: 52.54, y: 65.1 },
            31,
        ));
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 52.54, y: 65.1 },
            { x: 52.55, y: 65.31 },
            { x: 52.42, y: 65.36 },
            { x: 52.17, y: 65.37 },
            31,
        ));
        
        sailor = sailor.concat([
            { x: 52.17, y: 65.37 },
            { x: 50.41, y: 65.41 },
            { x: 49.79, y: 64.54 },    
        ]);
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 49.79, y: 64.54 },    
            { x: 48.69, y: 64.32 },
            { x: 48.11, y: 63.56 },
            { x: 48.09, y: 62.28 },
            31,
        ));
        
        sailor = sailor.concat([
            { x: 48.09, y: 62.28 },
            { x: 48, y: 58.31 },    
        ]);

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 48, y: 58.31 },    
            { x: 47.98, y: 57.1 },
            { x: 48.71, y: 56.17 },
            { x: 49.72, y: 56.15 },
            31,
        ));

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 49.72, y: 56.15 },
            { x: 50.76, y: 56.13 },
            { x: 51.24, y: 57.05 },
            { x: 51.26, y: 57.71 },
            31,
        ));

        sailor = sailor.concat([
            { x: 51.26, y: 57.71 },
            { x: 50.75, y: 57.72 },
        ]);

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 50.75, y: 57.72 },
            { x: 50.75, y: 57.37 },
            { x: 50.49, y: 56.67 },
            { x: 49.73, y: 56.68 },
            31,
        ));

        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 49.73, y: 56.68 },
            { x: 49, y: 56.7 },
            { x: 48.49, y: 57.38 },
            { x: 48.51, y: 58.3 },
        ));
        
        sailor = sailor.concat([
            { x: 48.51, y: 58.3 },
            { x: 48.59, y: 62.27 },            
        ])
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 48.59, y: 62.27 },            
            { x: 48.61, y: 63.21 },
            { x: 48.96, y: 63.76 },
            { x: 49.7, y: 63.98 },
            31,
        ));
        
        sailor = sailor.concat([
            { x: 49.7, y: 63.98 },
            { x: 49.62, y: 63.01 },
        ]);
        
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 49.62, y: 63.01 },
            { x: 49.45, y: 62.18 },
            { x: 49.56, y: 61.12 },
            { x: 50.01, y: 60.12 },
            31,
        ));
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 50.01, y: 60.12 },
            { x: 50.45, y: 59.12 },
            { x: 51.46, y: 58.52 },
            { x: 52.49, y: 58.56 },
            31,
        ));
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 52.49, y: 58.56 },
            { x: 52.52, y: 57.2 },
            { x: 53.2, y: 56.08 },
            { x: 54.64, y: 56.05 },
            31,
        ));
        sailor = sailor.concat(Paths.cubicBezierCurve_path(
            { x: 54.64, y: 56.05 },
            { x: 56.14, y: 56.02 },
            { x: 56.24, y: 57.87 },
            { x: 57.02, y: 59.02 },
            31,
        ));
        
        return sailor;
    }
    
    #get_mouth() {
        let mouth = [];
        
        mouth = mouth.concat(Paths.cubicBezierCurve_path(
            { x: 57.07, y: 59.18},
            { x: 57.07, y: 59.32},
            { x: 57.07, y: 59.44 },
            { x: 56.84, y: 59.45 },
            15,
        ));

        mouth = mouth.concat(Paths.cubicBezierCurve_path(
            { x: 56.84, y: 59.45 },
            { x: 56.61, y: 59.45 },
            { x: 56.06, y: 59.08 },
            { x: 56.06, y: 58.93 },
            15,
        ));

        mouth = mouth.concat(Paths.cubicBezierCurve_path(
            { x: 56.06, y: 58.93 },
            { x: 56.05, y: 58.79 },
            { x: 56.56, y: 59.19 },
            { x: 56.84, y: 59.18 },
            15,
        ));

        mouth = mouth.concat([
            { x: 56.84, y: 59.18 },
            { x: 57.07, y: 59.18 },
        ])
            
            
        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "#642116",
                stroke: "#642116",
                lineWidth: 0.01,
            },
            shape: mouth,
        }
            
        
    }
    
    #get_eye() {
        let eye = [];
        
        eye = eye.concat(Paths.cubicBezierCurve_path(
            { x: 55.46, y: 58.42 },
            { x: 55.3, y: 58.42 },
            { x: 55.18, y: 58.23 },
            { x: 55.17, y: 57.99 },
            15,
        ));
        
        eye = eye.concat(Paths.cubicBezierCurve_path(
            { x: 55.17, y: 57.99 },
            { x: 55.17, y: 57.75 },
            { x: 55.29, y: 57.56 },
            { x: 55.44, y: 57.55 },
            15,
        ));
        
        eye = eye.concat(Paths.cubicBezierCurve_path(
            { x: 55.44, y: 57.55 },
            { x: 55.59, y: 57.55 },
            { x: 55.71, y: 57.74 },
            { x: 55.72, y: 57.98 },
            15,
        ));

        eye = eye.concat(Paths.cubicBezierCurve_path(
            { x: 55.72, y: 57.98 },
            { x: 55.72, y: 58.22 },
            { x: 55.61, y: 58.41 },
            { x: 55.46, y: 58.42 },
            15,
        ));

        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "#292F33",
                stroke: "#292F33",
                lineWidth: 0.01,
            },
            shape: eye,
        }        

    }
    
    #get_hear() {
        let hear = [];
        
        hear = hear.concat(Paths.cubicBezierCurve_path(
            { x: 53.16, y: 58.46 },
            { x: 52.67, y: 58.47 },
            { x: 52.27, y: 58.07 },
            { x: 52.26, y: 57.56 },
            31,
        ));
        hear = hear.concat(Paths.cubicBezierCurve_path(
            { x: 52.26, y: 57.56 },
            { x: 52.25, y: 57.04 },
            { x: 52.63, y: 56.62 },
            { x: 53.12, y: 56.61 },
            31,
        ));
        hear = hear.concat(Paths.cubicBezierCurve_path(
            { x: 53.12, y: 56.61 },
            { x: 53.6, y: 56.6 },
            { x: 53.55, y: 57.02 },
            { x: 53.56, y: 57.53 },
            31,
        ));
        hear = hear.concat(Paths.cubicBezierCurve_path(
            { x: 53.56, y: 57.53 },
            { x: 53.57, y: 58.04 },
            { x: 53.64, y: 58.45 },
            { x: 53.16, y: 58.46 },
            31,
        ));

        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "#D79E84",
                stroke: "#D79E84",
                lineWidth: 0.01,
            },
            shape: hear,
        };
        
        // { x: , y:  },
        
    }


    #get_face() {
        let face = [];

        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 56.29, y: 60.23 },
            { x: 55.81, y: 60.61 },
            { x: 54.79, y: 60.4 },
            { x: 54.76, y: 58.96 },
            31,
        ));
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 54.76, y: 58.96 },
            { x: 54.75, y: 58.88 },
            { x: 54.76, y: 58.81 },
            { x: 54.78, y: 58.74 },
            15,
        ));
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 54.78, y: 58.74 },
            { x: 54.46, y: 58.58 },
            { x: 54.24, y: 58.25 },
            { x: 54.23, y: 57.86 },
            31,
        ));
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 54.23, y: 57.86 },
            { x: 54.22, y: 57.3 },
            { x: 54.64, y: 56.84 },
            { x: 55.16, y: 56.83 },
            31,
        ));
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 55.16, y: 56.83 },
            { x: 55.69, y: 56.82 },
            { x: 56.13, y: 57.26 },
            { x: 56.14, y: 57.82 },
            31,
        ));
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 56.14, y: 57.82 },
            { x: 56.14, y: 57.89 },
            { x: 56.13, y: 57.96 },
            { x: 56.12, y: 58.03 },
            15,
        ));
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 56.12, y: 58.03 },
            { x: 56.38, y: 58.13 },
            { x: 56.63, y: 58.32 },
            { x: 56.8, y: 58.65 },
            15,
        ));
        face = face.concat([
            { x: 56.8, y: 58.65 },
            { x: 57.02, y: 59.02 },
        ]);
        face = face.concat(Paths.cubicBezierCurve_path(
            { x: 57.02, y: 59.02 },
            { x: 57.2, y: 59.29 },
            { x: 56.83, y: 59.8 },
            { x: 56.29, y: 60.23 },
            31,
        ));

        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "#D79E84",
                stroke: "#D79E84",
                lineWidth: 0.01,
            },
            shape: face,
        }
    }

    #get_children() {
        let children = [];

        children.push(this.#get_face());
        children.push(this.#get_mouth());
        children.push(this.#get_eye());
        children.push(this.#get_hear());
        return children;
    }

    graph() {
        return {
            transform: this.transform,
            style: this.style,
            shape: this.shape,
            children: this.children,
        }
    }
}