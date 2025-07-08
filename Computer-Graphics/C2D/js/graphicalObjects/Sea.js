import { Paths } from "../utils/Paths.js";

const DARK_OCEAN = '#55CEFF';
const LIGHT_OCEAN = '#91E0FF';
const SAND = '#C2A280';

export class Sea {

    constructor(renderer) {

        // Color gradient for the sea
        this.color = renderer.ctx.createLinearGradient(0.6, 0, 0.6, 1);
        this.color.addColorStop(0.91, DARK_OCEAN);
        this.color.addColorStop(0.01, LIGHT_OCEAN);


        this.transform = {
            dx: 0.5,
            dy: 0.77,
            sx: 0.5,
            sy: 0.3,
            a: 0,
        }
        this.style = {
            fill: this.color,
            stroke: LIGHT_OCEAN,
            lineWidth: 0.0015,
        }
        this.shape = Paths.uRect_path();

        this.children = [
            {// Sand
                transform: {
                    dx: 0,
                    dy: -1,
                    sx: 1,
                    sy: 0.003,
                    a: 0,
                },
                style: {
                    fill: SAND,
                    stroke: SAND,
                    lineWidth: 0.1,
                },
                shape: Paths.uRect_path(),
            }
        ]
    }

    graph() {
        return {
            transform: this.transform,
            style: this.style,
            shape: this.shape,
            children: this.children
        }
    }
}