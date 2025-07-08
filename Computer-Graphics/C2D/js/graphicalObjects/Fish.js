import { Paths } from "../utils/Paths.js";

const FISH_COLOR1 = "rgb(241, 179, 28)";
const FISH_COLOR2 = "rgb(226, 112, 34)";

export class Fish {

    constructor(renderer, boat) {

        this.transform = {
            dx: boat.transform.dx + 0.1,
            dy: boat.transform.dy,
            sx: 0.01,
            sy: 0.01,
            a: 0,
        }

        this.boatStart = boat.transform.dx - 0.1;

        this.speed = 0.001;

        this.body_gradient = renderer.ctx.createLinearGradient(1, 0, 18, 0);
        this.body_gradient.addColorStop(0, FISH_COLOR2);
        this.body_gradient.addColorStop(1, FISH_COLOR1);

        this.style = {
            fill: this.body_gradient,
            stroke: "black",
            lineWidth: 0.01,
        }

        this.shape = this.#get_body();

        this.children = this.#get_children();

    }

    update(boat, dt) {

        // To avoid the fish going backwards
        if (boat.transform.dx > this.boatStart) {
            this.transform.dx = this.boatStart;
        }

        else {
            let dx = this.speed * (boat.transform.dx + 0.55 - this.transform.dx);
            let dy = this.speed * (boat.transform.dy + 0.8 - this.transform.dy);

            this.transform.dx += dx * dt;
            this.transform.dy += dy * dt;
        }
    }

    #get_body() {
        let path = [

        ];

        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 17.99,y: 12.7 },
            { x: 16.42,y: 12.43 },
            { x: 15.18,y: 11.47 },
            { x: 14.83,y: 10.25 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 14.83,y: 10.25 },
            { x: 14.15,y: 11.65 },
            { x: 11.56,y: 12.7 },
            { x: 8.47,y: 12.7 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 8.47,y: 12.7 },
            { x: 4.87,y: 12.7 },
            { x: 1.94,y: 11.28 },
            { x: 1.94,y: 9.52 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 1.94,y: 9.52 },
            { x: 1.94,y: 7.77 },
            { x: 4.87,y: 6.35 },
            { x: 8.47,y: 6.35 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 8.47,y: 6.35 },
            { x: 11.56,y: 6.35 },
            { x: 14.15,y: 7.39 },
            { x: 14.83,y: 8.79 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 14.83,y: 8.79 },
            { x: 15.2,y: 7.57 },
            { x: 16.46,y: 6.6 },
            { x: 18.06,y: 6.35 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 18.06,y: 6.35 },
            { x: 18.06,y: 7.54 },
            { x: 17.64,y: 8.64 },
            { x: 16.94,y: 9.52 },
        ))
        
        path = path.concat(Paths.cubicBezierCurve_path(
            { x: 16.94,y: 9.52 },
            { x: 17.64,y: 10.41 },
            { x: 18.06,y: 11.51 },
            { x: 18.06,y: 12.7 },
        ))

        return path;
    }

    #get_eye() {

        return {
            transform: {
                dx: 4.9,
                dy: 10,
                sx: 0.5,
                sy: 0.5,
                a: 0,
            },
            style: {
                fill: "black",
                stroke: "black",
                lineWidth: 0.1,
            },
            shape: Paths.circle_path(),
        };

    }

    #get_children() {

        let children = []
        children.push(this.#get_eye());

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