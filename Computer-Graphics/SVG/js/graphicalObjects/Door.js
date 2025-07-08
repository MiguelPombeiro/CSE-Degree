import { Paths } from "../utils/Paths.js";
import { Enemy } from "./Enemy.js";



export class Door extends Enemy {
    constructor(dx = 512, dy = 200, sxy = 1, step = 2){

        super(dx, dy, sxy, sxy, 0);

        this. step = step;
    }


    update(model) {
        this.dx -= this.step;

        this.hitPlayer(model, model.doorDistance);
    }


    #get_door() {
        let door = [
            { x: 19.5,y: 77 },
            { x: 19.5,y: 11 },
            { x: 58.5,y: 11 },
            { x: 58.5,y: 77 },
            { x: 19.5,y: 77 },
        ]
        
        return door;
    }

    #get_decoration1() {
        let deco = [
            { x: 26,y: 37.15 },
            { x: 26,y: 17.23 },
            { x: 52,y: 17.23 },
            { x: 52,y: 37.15 },
            { x: 26,y: 37.15 },
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
                fill: "#6A462F",
                stroke: "black",
                strokeWidth: 0.5,
            },
            shape: deco,
        }
    }

    #get_decoration2() {
        let deco = [
            { x: 26,y: 55.83 },
            { x: 52,y: 55.83 },
            { x: 52,y: 69.53 },
            { x: 26,y: 69.53 },
            { x: 26,y: 55.83 },
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
                fill: "#6A462F",
                stroke: "black",
                strokeWidth: 0.5,
            },
            shape: deco,
        }
    }

    #get_handle(dx, dy, sx, sy, a, color = "white") {
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
                strokeWidth: 1,
            },
            shape: Paths.circle_path(32),
        }
    }


    #get_broken_door() {
        let door = [ 
            { x: 19.5 ,y: 44 },
            { x: 25.06 ,y: 48 },
            { x: 30.13 ,y: 43 },
            { x: 34.69 ,y: 48 },
            { x: 39.75 ,y: 43 },
            { x: 44.31 ,y: 48 },
            { x: 48.87 ,y: 43 },
            { x: 53.94 ,y: 48 },
            { x: 58.5 ,y: 43 },
            { x: 58.5 ,y: 77 },
            { x: 19.5 ,y: 77 },
            { x: 19.5 ,y: 44 },
        ];
        return door;

    }

    graph() {

        if(!this.isHit) {
            return {
                transform:{
                    dx: this.dx, //512
                    dy: this.dy, //0 - 420 
                    sx: this.sx,
                    sy: this.sy,
                    a: this.a,
                },

                style: {
                    fill: "#A57939",
                    stroke: "black",
                    strokeWidth: 0.1,
                },

                shape: this.#get_door(),
                children: [
                    this.#get_decoration1(),
                    this.#get_decoration2(),
                    this.#get_handle(53, 47, 1, 1, 0, "black"),
                ],
            }
        }
        else {
            return {
                transform:{
                    dx: this.dx, //512
                    dy: this.dy, //0 - 420 
                    sx: this.sx,
                    sy: this.sy,
                    a: this.a,
                },

                style: {
                    fill: "#A57939",
                    stroke: "black",
                    strokeWidth: 0.1,
                },

                shape: this.#get_broken_door(),
                children: [
                    this.#get_decoration2(),
                ],
            }
        }
    }

} 