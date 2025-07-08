import { Paths } from "../utils/Paths.js";
import { Calcs } from "../utils/Calcs.js";

const NUM_PTS = 255;

export class Truck {

    constructor(dx = 64, dy = 200) {

        this.dx = dx;
        this.dy = dy;
        this.sxy = 1.3;
        this.a = 0;

    }

    update(step, max) {
        this.dy = Calcs.clip(this.dy + step, 0, max);
    }

    #get_body() {
        let body = [{ x: 5.89,y: 52 }];

        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 5.89,y: 37.85 },
            { x: 5.89,y: 37.59 },
            { x: 6,y: 37.34 },
            { x: 6.18,y: 37.15 },
            NUM_PTS,
        ));
        
        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 6.18,y: 37.15 },
            { x: 6.37,y: 36.96 },
            { x: 6.62,y: 36.85 },
            { x: 6.88,y: 36.85 },
            NUM_PTS,
        ));
        
        body = body.concat([
            { x: 6.88,y: 36.85 },
            { x: 26.26,y: 36.85 },
            { x: 26.26,y: 28.33 },
        ])
        
        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 26.26,y: 28.33 },
            { x: 26.26,y: 27.75 },
            { x: 26.48,y: 27.2 },
            { x: 26.88,y: 26.79 },
            NUM_PTS,
        ));
        
        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 26.88,y: 26.79 },
            { x: 27.28,y: 26.39 },
            { x: 27.83,y: 26.16 },
            { x: 28.4,y: 26.16 },
            NUM_PTS,
        ));
        
        body = body.concat([
            { x: 28.4,y: 26.16 },
            { x: 39.48,y: 26.16 },
        ]);


        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 39.48,y: 26.16 },
            { x: 40.56,y: 26.15 },
            { x: 41.64,y: 26.4 },
            { x: 42.62,y: 26.87 },
            NUM_PTS,
        ));
        
        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 42.62,y: 26.87 },
            { x: 43.6,y: 27.35 },
            { x: 44.47,y: 28.03 },
            { x: 45.15,y: 28.89 },
            NUM_PTS,
        ));
        
        body = body.concat([
            { x: 45.15,y: 28.89 },
            { x: 51.42,y: 36.69 },
            { x: 62.63,y: 38.69 },
        ]);

        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 62.63,y: 38.69 },
            { x: 63.38,y: 38.8 },
            { x: 64.07,y: 39.19 },
            { x: 64.57,y: 39.78 },
            NUM_PTS,
        ));
        body = body.concat(Paths.cubicBezierCurve_path(
            { x: 64.57,y: 39.78 },
            { x: 65.06,y: 40.37 },
            { x: 65.34,y: 41.12 },
            { x: 65.33,y: 41.89 },
            NUM_PTS,
        ));
        
        body = body.concat([
            { x: 65.33,y: 41.89 },
            { x: 65.33,y: 51 },
            { x: 64.35,y: 52 },
            { x: 5.89,y: 52 },
        ]);            

        return body;
    }
    
    
    #get_front() {
        let front = [
            { x: 60,y: 44 },
            { x: 62.24,y: 46.69 },
        ];
        
        front = front.concat(Paths.cubicBezierCurve_path(
            { x: 62.24,y: 46.69 },
            { x: 62.44,y: 46.93 },
            { x: 62.65,y: 46.96 },
            { x: 63.28,y: 46.96 },
            NUM_PTS,
        ));
        
        front = front.concat([
            { x: 63.28,y: 46.96 },
            { x: 66.79,y: 46.96 },
        ])
        
        front = front.concat(Paths.cubicBezierCurve_path(
            { x: 66.79,y: 46.96 },
            { x: 67.64,y: 46.96 },
            { x: 68.46,y: 47.18 },
            { x: 69.06,y: 47.56 },
            NUM_PTS,
        ));
        front = front.concat(Paths.cubicBezierCurve_path(
            { x: 69.06,y: 47.56 },
            { x: 69.66,y: 47.95 },
            { x: 70,y: 48.47 },
            { x: 70,y: 49.01 },
            NUM_PTS,
        ));
        front = front.concat([
            { x: 70,y: 49.01 },
            { x: 70,y: 51 },
            { x: 63.65,y: 51 },
        ]);

        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "white",
                stroke: "white",
                strokeWidth: 4,
            },
            shape: front,
        }
    }
    
    #get_wheels(dx, dy, sx, sy, a, color = "white") {
        return {
            transform: {
                dx: dx,
                dy: dy,
                sx: sx,
                sy: sy,
                a: a,
            },
            style: {
                fill: color,
                stroke: color,
            },
            shape: Paths.circle_path(32),
        }
    }
    
    #get_window() {
        let window = [];
        
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 37.38,y: 38.33},
            { x: 37.12,y: 38.33 },
            { x: 36.87 ,y: 38.22 },
            { x: 36.68,y: 38.04 },
            NUM_PTS,
        ));   
        
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 36.68,y: 38.04 },
            { x: 36.5,y: 37.85 },
            { x: 36.39,y: 37.59 },
            { x: 36.39,y: 37.33 },
            NUM_PTS,
        ));
        
        window = window.concat([
            { x: 36.39,y: 37.33 },
            { x: 36.39,y: 30.22 },
            { x: 36.42,y: 29.22 },
            { x: 39.91,y: 29.22 },
        ]);
        
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 36.42,y: 29.22 },
            { x: 41.55,y: 29.22 },
            { x: 42.42,y: 30.3 },
            { x: 43.42,y: 31.56 },
            NUM_PTS,
        ));
        
        window = window.concat([
            { x: 43.42,y: 31.56 },
            { x: 47.46,y: 36.71 },
        ]);
        
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 47.46,y: 36.71 },
            { x: 47.58,y: 36.85 },
            { x: 47.65,y: 37.03 },
            { x: 47.67,y: 37.22 },
            NUM_PTS,
        ));
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 47.67,y: 37.22 },
            { x: 47.69,y: 37.41 },
            { x: 47.66,y: 37.59 },
            { x: 47.58,y: 37.76 },
            NUM_PTS,
        ));
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 47.58,y: 37.76 },
            { x: 47.5,y: 37.93 },
            { x: 47.37,y: 38.08 },
            { x: 47.22,y: 38.18 },
            NUM_PTS,
        ));
        window = window.concat(Paths.cubicBezierCurve_path(
            { x: 47.22,y: 38.18 },
            { x: 47.06,y: 38.28 },
            { x: 46.88,y: 38.33 },
            { x: 46.69,y: 38.33 },
            NUM_PTS,
        ));

        window = window.concat([
            { x: 46.69,y: 38.33 },
            { x: 37.38,y: 38.33 },
        ]);
            
        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "#92D3F5",
                stroke: "#92D3F5",
                strokeWidth: 0.01,
            },
            shape: window,
        }
    }


    graph() {
        return {
            transform: {
                dx: this.dx,
                dy: this.dy,
                sx: this.sxy,
                sy: this.sxy,
                a: this.a,
            },
            style: {
                fill: "#D22F27",
                stroke: "#D22F27",
            },
            shape: this.#get_body(),

            children: [
                this.#get_window(),
                this.#get_wheels(20, 52, 5, 5, 0),
                this.#get_wheels(52, 52, 5, 5, 0), //front wheel
                this.#get_wheels(20, 52, 3, 3, 0, "green"), 
                this.#get_wheels(52, 52, 3, 3, 0, "green"), //front wheel
                this.#get_wheels(33, 43, 1, 1, 0, "black"),
                this.#get_wheels(65, 40, 2, 2, 0, "yellow"),
                this.#get_front(),
            ],
        }
    }

}