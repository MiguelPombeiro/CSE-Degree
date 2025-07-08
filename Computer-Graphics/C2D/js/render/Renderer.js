export class Renderer {

    constructor(canvasId = "acanvas", consoleId = "aconsole") {

        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        
        this.console = document.getElementById(consoleId);
    }


    /**
     * This method is used to update the console with the current age and elapsed time.
     * 
     * @param {Object} model - A JSON object that represents the model.
     * 
    */
    update_console(model) {
        this.console.innerHTML = `AGE: ${model.console.age}` + ` | ` + 
                                 `ELAPSED: ${model.console.elapsed.toFixed(2)}ms`;
    }


    /**
     * This method is used to draw a figure on the canvas.
     *  
     * @param {Object} fig - A JSON object that represents the figure to be drawn.
     */
    draw_figure(fig) {


        if (fig.hasOwnProperty("transform")) {
            this.enter(
                fig.transform.dx || 0,
                fig.transform.dy || 0,
                fig.transform.sx || 1,
                fig.transform.sy || 1,
                fig.transform.a  || 0,
            );
        }

        let path = undefined;
        if (fig.hasOwnProperty("shape")) {
            path = new Path2D();
            path.moveTo(fig.shape[0].x, fig.shape[0].y);
            for (let p of fig.shape.slice(1)) {
                path.lineTo(p.x, p.y);
            }
            path.closePath();
        }

        if (fig.hasOwnProperty("style")) {
            if (fig.style.hasOwnProperty("lineWidth")) {
                this.ctx.lineWidth = fig.style.lineWidth;
            }
            if (fig.style.hasOwnProperty("fill")) {
                this.ctx.fillStyle = fig.style.fill;
                if (path !== undefined) this.ctx.fill(path);
            }
            if (fig.style.hasOwnProperty("stroke")) {
                this.ctx.strokeStyle = fig.style.stroke;
                if (path !== undefined) this.ctx.stroke(path);
            }
        }

        if (fig.hasOwnProperty("children")) {
            for (let child of fig.children) this.draw_figure(child);
        }

        if (fig.hasOwnProperty("transform")) this.leave();
    }


    /** 
     * This method is used to set the context transformation.
     * It is used to apply a translation, scaling and rotation to the context.
     * 
     * @param {number} x - Translation in x direction.
     * @param {number} y - Translation in y direction.
     * @param {number} sx - Scaling in x direction.
     * @param {number} sy - Scaling in y direction.
     * @param {number} a - Rotation angle.
    */
    enter(x, y, sx, sy, a) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.scale(sx, sy);
        this.ctx.rotate(a);
    }
    //
    leave() {
        this.ctx.restore();
    }
}