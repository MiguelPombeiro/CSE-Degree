import { Calcs } from "../utils/Calcs.js";

export class Enemy {
    constructor (dx, dy, sx, sy, a) {
            this.dx = dx,
            this.dy = dy,
            this.sx = sx,
            this.sy = sy,
            this.a = a

        this.isHit = false;
    }

    hitPlayer(model, distance) {

        let px = model.truck.dx;
        let py = model.truck.dy;

        let a = {x: this.dx, y: this.dy};
        let b = {x: px, y: py};

        let dist = Calcs.distance(a, b);

        if (dist <= distance) {
            this.isHit = true;
        }

    }
} 