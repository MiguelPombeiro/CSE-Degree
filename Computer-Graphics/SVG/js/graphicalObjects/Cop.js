import { Paths } from "../utils/Paths.js";
import { Enemy } from "./Enemy.js";

export class Cop extends Enemy {

    constructor(dx = 512, dy = 200, sxy = 1.3, step = 1) {

        super(dx, dy, sxy, sxy, 0);

        this.step = step;
    }

    update(model) {
        this.dx -= this.step;

        this.hitPlayer(model, model.copDistance);
    }

    #get_body() {
        let body = [
            { x: 81.58,y: 64.73 },
            { x: 10.05,y: 64.73 },
            { x: 10.05,y: 55.72 },
            { x: 11.61,y: 55.72 },
            { x: 15.71,y: 47.74 },
            { x: 39.05,y: 45.09 },
            { x: 46.11,y: 33.09 },
            { x: 81.85,y: 33.08 },
        ]
        return body;
    }
    
    #get_window() {
        let window = [
            { x: 46,y: 45 },
            { x: 55.53,y: 36 },
            { x: 76.47,y: 36 },
            { x: 76.47,y: 45 },
            { x: 44,y: 45 },
        ];

        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0
            },
            style: {
                fill: "#3F3F3F",
                stroke: "#3F3F3F",
                strokeWidth: 0.1,
            },
            shape: window
        }
    }

    #get_light(dx = 60, dy = 30, sx = 4, sy = 4, color = "red") {
        let light = [];

        light = light.concat(Paths.sector_path(32, 0, -Math.PI));

        return {
            transform: {
                dx: dx,
                dy: dy,
                sx: sx,
                sy: sy,
                a: 0
            },
            style: {
                fill: color,
                stroke: color,
                strokeWidth: 1,
            },
            shape: light
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
                strokeWidth: 0.01,
            },
            shape: Paths.circle_path(32),
        }
    }


    graph() {
        return {
            transform: {
            dx: this.dx,
            dy: this.dy, // 0 - 400
            sx: this.sx, //1.0 - 1.3
            sy: this.sy, //1.0 - 1.3
            a: this.a
            },
            style: {
                fill: "#92D3F5",
                stroke: "#92D3F5",
                strokeWidth: 1,
            },

            shape: this.#get_body(),
            children: [
                this.#get_window(),
                this.#get_light(),
                this.#get_wheels(30, 65, 7, 7, 0, "black"),  //back wheel
                this.#get_wheels(30, 65, 4, 4, 0, "white"),  //back wheel
                this.#get_wheels(65, 65, 7, 7, 0, "black"),  //front wheel
                this.#get_wheels(65, 65, 4, 4, 0, "white"),  //front wheel
                this.#get_wheels(13, 52, 4, 4, 0, "yellow"),  //headlight
            ],

        }
    }

} 