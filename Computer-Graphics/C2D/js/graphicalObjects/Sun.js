import { Paths } from "../utils/Paths.js";

export class Sun {

    constructor() {
        this.colorLine = "#FC9601";
        this.colorStar = "#FFCC33";
        this.colorCircle = "#FFE484"

        this.radius = 0.5;
        this.angle = 0.5 * Math.PI;
        this.angleStep = 0.00005 * Math.PI;

        this.transform = {
            dx: 0.13, 
            dy: 0.11, 
            sx: 0.03, 
            sy: 0.03,
            a: this.angle,
        }
        this.style = {
            fill: this.colorStar,
            stroke: this.colorLine,
            lineWidth: 0.3,
        }

        this.shape = Paths.star_path(13, 2.4);

        this.children = [
            {
                transform: {
                    dx: 0,
                    dy: 0,
                    sx: 1,
                    sy: 1,
                    a: 0,
                },
                style: {
                    fill: this.colorCircle,
                    stroke: this.colorLine,
                    lineWidth: 0.1,
                },
                shape: Paths.circle_path(1.0),
            }
        ]
    }
    
    update(elapsed) { 
        this.angle += this.angleStep * elapsed;
        this.transform.a = this.angle;
    }

    graph() {
        return {
            transform: this.transform,    
            style: this.style,
            shape: this.shape,
            children: this.children,
        };
    }
}