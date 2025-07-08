import { Paths } from "../utils/Paths.js";
import { Calcs } from "../utils/Calcs.js";
import { Renderer } from "../render/Renderer.js";


const CLOUD_COLOR = "rgba(255, 255, 255, 0.7)"; // 70% opacity
const SECOND_CLOUD_COLOR = "rgba(255, 255, 255, 0.55)"; // 55% opacity

export class Cloud {
    constructor(renderer) {

        let dy = Calcs.rand_ab(-2.4, -2.5);
        let start = Math.random() < 0.5 ? -1.9 : -0.6; 

        this.start = start;

        this.transform = {
            dx: start, //  -1.9 e -0.6
            dy: dy, //    -2.5 e -2.4
            sx: 0.23,
            sy: 0.23,
            a: 0,
        }

        //style
        this.gradient = renderer.ctx.createRadialGradient(0, 0, 0.1, 0, 0, 0.5);
        this.gradient.addColorStop(0, CLOUD_COLOR);
        this.gradient.addColorStop(1, SECOND_CLOUD_COLOR);

        this.style = {
            fill: this.gradient,
            stroke: CLOUD_COLOR,
            lineWidth: 0.0015,
        }

        this.shape = this.#get_cloud();

        this.isHidden = false;

    }


    #get_cloud() {
        let cloud_path = [];

        cloud_path = cloud_path.concat(Paths.quadraticBezierCurve_path(
            {x: 7.7576, y: 11.3552}, //startPoint
            {x: 7.6726, y: 11.5351}, //cPoint
            {x: 7.5375, y: 11.3851}, //endPoint
        ));

        cloud_path = cloud_path.concat(Paths.cubicBezierCurve_path(
            {x: 7.5375, y: 11.3851}, //startPoint
            {x: 7.4776, y: 11.4451}, //cPoint1
            {x: 7.3376, y: 11.3402}, //cPoint2
            {x: 7.3925, y: 11.2852}, //endPoint
        ));

        cloud_path = cloud_path.concat(Paths.quadraticBezierCurve_path(
            {x: 7.3925, y: 11.2852}, //startPoint
            {x: 7.3625, y: 11.1602}, //cPoint
            {x: 7.5075, y: 11.1802}, //endPoint
        ));

        cloud_path = cloud_path.concat(Paths.quadraticBezierCurve_path(
            {x: 7.5075, y: 11.1802}, //startPoint 
            {x: 7.6426, y: 10.9652}, //cPoint
            {x: 7.8026, y: 11.1652}, //endPoint
        ));

        cloud_path = cloud_path.concat(Paths.quadraticBezierCurve_path(
            {x: 7.8026, y: 11.1652}, //startPoint
            {x: 8.0076, y: 11.2652}, //cPoint
            {x: 7.7576, y: 11.3552}, //endPoint
        ));

        return cloud_path;


    }

    update() {
        let rd = Calcs.rand_ab(0.001, 0.0005);
        if (this.start == -1.9) {
            this.transform.dx += rd;
        }
        else {
            this.transform.dx -= rd;
        }

        if (this.transform.dx > -0.6 || this.transform.dx < -1.9) {
            this.isHidden = true;
        }
        return this;
    }


    graph() {

        return {
            transform: this.transform,
            style: this.style,
            shape: this.shape,
        }

    }



}