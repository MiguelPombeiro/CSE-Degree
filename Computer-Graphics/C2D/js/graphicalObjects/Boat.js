import { Paths } from "../utils/Paths.js";
import { Sailor } from "./Sailor.js";

const BOAT_COLOR = "rgb(117, 78, 26)";
export class Boat {

    constructor(renderer) {

        this.sailor = new Sailor();

        this.transform = {
            dx: 1.2,    
            dy: -0.01,  
            sx: 0.01,
            sy: 0.01,
            a: 0,
        }

        this.style = {
            fill: BOAT_COLOR,
            stroke: BOAT_COLOR,
            lineWidth: 0.01,
        }


        this.sail1_gradient = renderer.ctx.createLinearGradient(25, 0, 50, 0);
        this.sail1_gradient.addColorStop(0, "#05394F");
        this.sail1_gradient.addColorStop(1, "#0E8A8F");


        this.sail2_gradient = renderer.ctx.createLinearGradient(0, 0, 60, 0);
        this.sail2_gradient.addColorStop(0.1, "#FF9562");
        this.sail2_gradient.addColorStop(1, "#F0481D");


        this.Tween_start;
        this.Tween_leave;

        this.shape = this.#get_boat();
        this.children = this. #get_children(renderer);

        this.#start_animation();

    }


    #start_animation() {
        this.transform.dx = 1.2;
        this.Tween_start = new TWEEN.Tween(this.transform)
            .to({dx: 0.2}, 7000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }

    leave_animation() {
        this.Tween_= new TWEEN.Tween(this.transform)
            .to({dx: -0.9}, 7000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(() => this.#start_animation())
            .start();
    }


    #get_boat() {
        let boat = [];


        boat = boat.concat(Paths.cubicBezierCurve_path(
            {x: 57.67, y: 76.65}, //startPoint
            {x: 52.95, y: 76.43}, //cPoint
            {x: 20.77, y: 74.93}, //cPoint
            {x: 2.36, y: 72.63}, //endPoint
        ));
        boat = boat.concat(Paths.cubicBezierCurve_path(
            {x: 2.36, y: 72.63}, //startPoint
            {x: 2.14, y: 72.61}, //cPoint
            {x: 1.97, y: 72.8}, //cPoint
            {x: 2, y: 73.02}, //endPoint
        ));

        boat = boat.concat(Paths.cubicBezierCurve_path(
            {x: 2, y: 73.02}, //startPoint
            {x: 2.23, y: 74.45}, //cPoint
            {x: 4.13, y: 84}, //cPoint
            {x: 9.12, y: 84}, //endPoint 
        ));

        boat = boat.concat([{x:52.83, y:84}]);

        boat = boat.concat(Paths.cubicBezierCurve_path(
            {x: 52.83, y:84}, //startPoint
            {x: 53.48, y: 84}, //cPoint
            {x: 54.08, y: 83.65}, //cPoint
            {x: 54.42, y: 83.09}, //endPoint
        ));
        
        boat = boat.concat([{x: 57.95, y: 77.18}]); 

        boat = boat.concat(Paths.cubicBezierCurve_path(
            {x: 57.95, y: 77.18}, //startPoint
            {x: 58.08, y: 76.95}, //cPoint
            {x: 57.93, y: 76.66}, //cPoint
            {x: 57.67, y: 76.65}, //endPoint
        ));

        return boat;

    }

    #get_children() {

        let children = []
        children.push(this.#get_sail1());
        children.push(this.#sail_pole());
        children.push(this.sailor.graph());
        children.push(this.#get_cubicle());
        children.push(this.#get_stripe());
        children.push(this.#get_sail2());


        return children;

    }

    #get_cubicle() {
        let cub = [];

        cub = cub.concat([{x: 43, y: 76}]);
        cub = cub.concat([{x: 41.97, y: 72.18}]);

        cub = cub.concat(Paths.cubicBezierCurve_path(
            {x: 41.97, y: 72.18},
            {x: 41.77, y: 71.37},
            {x: 41.1, y: 70.77},
            {x: 40.29, y: 70.69},
           ));
        
        cub = cub.concat([{x: 40.29, y: 70.69}]);
        cub = cub.concat([{x: 23.72, y: 69.28}]);

        cub = cub.concat(Paths.quadraticBezierCurve_path(
            {x: 23.72, y: 69.28},
            {x: 22.04, y: 69.28},
            {x: 20.5, y: 74.5},
        ));

        cub = cub.concat([{x: 20.5, y: 74.5}]);
        cub = cub.concat([{x: 43, y: 76}]);
            
        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "rgb(203, 163, 92)",
                stroke: "rgb(203, 163, 92)",
                lineWidth: 0.1,
            },
            shape: cub,
        }
    }


    #sail_pole() {
        let pole = [];

        pole = pole.concat([{x: 31.57, y: 74.71}]);
        pole = pole.concat([{x: 35.43, y: 20.82}]);
        pole = pole.concat([{x: 33, y: 67}]);
        pole = pole.concat([{x: 52.26, y: 66.82}]);
        pole = pole.concat([{x: 33, y: 67}]);

        return{
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: "#82AEC0",
                stroke: "#82AEC0",
                lineWidth: 2,
            },
            shape: pole,
        }
        
    }


    #get_sail1() {

        let sail = [];

        sail = sail.concat([{x: 51.78, y: 66.02}]);
        sail = sail.concat([{x: 36.24, y: 20.67}]);
        sail = sail.concat([{x: 35.95, y: 66.94}]);

        return {
            transform: {
                dx: 0,
                dy: 0,
                sx: 1,
                sy: 1,
                a: 0,
            },
            style: {
                fill: this.sail1_gradient,
                stroke: this.sail1_gradient,
                lineWidth: 0.1,
            },
            shape: sail,
        }
    }

    #get_sail2() {
        let sail = [];

        sail = sail.concat(Paths.quadraticBezierCurve_path(
            {x: 31.19,y: 70.02},
            {x: 25.49,y: 67.36},
            {x: 19.26,y: 68},
        ));
        sail = sail.concat(Paths.quadraticBezierCurve_path(
            {x: 19.26,y: 68},
            {x: 10.19,y: 68.93},
            {x: 2.67,y: 72.87},
        ));
        sail = sail.concat(Paths.quadraticBezierCurve_path(
            {x: 2.67,y: 72.87},
            {x: 6.05,y: 58.53},
            {x: 13.92,y: 44.42},
        ));
        sail = sail.concat(Paths.quadraticBezierCurve_path(
            {x: 13.92,y: 44.42},
            {x: 21.01,y: 31.71},
            {x: 34.84,y: 20},
        ));
        sail = sail.concat(Paths.quadraticBezierCurve_path(
            {x: 34.84,y: 20},
            {x: 30.66,y: 38.49},
            {x: 29.88,y: 49.48},
        ));
        sail = sail.concat(Paths.quadraticBezierCurve_path(
            {x: 29.88,y: 49.48},
            {x: 28.89,y: 63.44},
            {x: 31.19,y: 70.02},
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
                fill: this.sail2_gradient,
                stroke: this.sail2_gradient,
                lineWidth: 0.1,
            },
            shape: sail,
        }
    }


    #get_stripe() {
        let stripe = [
            {x: 57.26, y: 78.23},
            {x: 56.82, y: 79.05},
            {x: 2.87, y: 76.6},
        ];
        
        stripe = stripe.concat(Paths.quadraticBezierCurve_path(
            {x: 2.87, y: 76.6},
            {x: 2.59, y: 75.73},
            {x: 2.35, y: 74.71},
        ));
        
        stripe = stripe.concat([
            { x: 2.35, y: 74.71 },
            { x: 57.26, y: 78.23 },
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
                fill: "rgb(182, 203, 189)",
                stroke: "rgb(182, 203, 189)",
                lineWidth: 0.1,
            },
            shape: stripe,
        }
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