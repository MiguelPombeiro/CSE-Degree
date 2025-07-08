import { Paths } from "../utils/Paths.js";
import { Sun } from "./Sun.js";
import { Sea } from "./Sea.js";

const DARK_SKY = '#A5E5FF';
const LIGHT_SKY = '#CDF0FF';

export class Background {

    constructor(renderer) {

        this.sea = new Sea (renderer);
        this.sun = new Sun();

        this.transform = {
            dx: 0,
            dy: 0,
            sx: 1,
            sy: 1,
            a: 0,
        }

        this.style = {
            fill: LIGHT_SKY,
            stroke: DARK_SKY,
            lineWidth: 2,
        }

        this.shape = Paths.uRect_path();

    }


    update(elapsed) {
        this.sun.update(elapsed);
    }


    graph() {
        return {
            transform: this.transform,
            style: this.style,
            shape: this.shape,
            children: [
                this.sea.graph(),
                this.sun.graph(),
            ],
        }
    }

}