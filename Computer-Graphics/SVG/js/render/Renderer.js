import { Calcs } from "../utils/Calcs.js";

export class Renderer {
    static N_POINTS = 256;

    constructor(canvasId = "acanvas", consoleId = "aconsole") {

        // Get the div element for the svg
        this.canvas = document.getElementById(canvasId);

        this.height = this.canvas.clientHeight;
        this.width = this.canvas.clientWidth;
        
        // Get the console
        this.console = document.getElementById(consoleId);
        
    }


    /**
     * Iterate through the figure and build the SVG element
     * 
     * @param {Object} fig: The figure to draw
     * @returns {Object} The SVG element
     */
    draw_figure(fig) {
            let svg;
        
        
            if (!fig.isChild) {
                svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.setAttribute('width', "100%");
                svg.setAttribute('height', "100%");
            }
        
            let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            
            if (fig.hasOwnProperty("transform")) {
                let transformStr = `translate(${(fig.transform.dx || 0)},${(fig.transform.dy || 0)}) scale(${fig.transform.sx || 1},${fig.transform.sy || 1}) rotate(${Calcs.convertRadiansToDegrees(fig.transform.a) || 0})`;
                group.setAttribute('transform', transformStr);
            }
            
            if (fig.hasOwnProperty("style")) {
                if (fig.style.hasOwnProperty("fill")) {
                    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    path.setAttribute('fill', fig.style.fill);
                    path.setAttribute('fill-style', fig.style.fillStyle); 
                    path.setAttribute('stroke', fig.style.stroke);
                    path.setAttribute('stroke-width', fig.style.strokeWidth);
                    path.setAttribute('stroke-linecap', fig.style.strokeCap);
                    path.setAttribute('stroke-linejoin', fig.style.strokeJoin);
                    path.setAttribute('d', this.#make_path(fig.shape));
                    group.appendChild(path);
                }
            }
            

            if (fig.hasOwnProperty("linearGradient")) {
                let linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
                linearGradient.setAttribute('id', `${fig.linearGradient.id}`);
                linearGradient.setAttribute('x1', `${fig.linearGradient.x1}`);
                linearGradient.setAttribute('x2', `${fig.linearGradient.x2}`);
                linearGradient.setAttribute('y1', `${fig.linearGradient.y1}`);
                linearGradient.setAttribute('y2', `${fig.linearGradient.y2}`);
        
                for (let stop of fig.linearGradient.stops) {
                    let stopElement = document.createElementNS("http://www.w3.org/2000/svg", "stop");
                    stopElement.setAttribute('offset', stop.offset);
                    stopElement.setAttribute('stop-color', stop.color);
                    linearGradient.appendChild(stopElement);
                }
        
                group.appendChild(linearGradient);
            }

            
            if (fig.hasOwnProperty("children")) {
                for (let child of fig.children) {
                    child.isChild = true;
                    let svg_child = this.draw_figure(child);
                    group.appendChild(svg_child);
                }
            }
        
            if (!fig.isChild) {
                svg.appendChild(group);
                return svg;
            }
        
            return group;
    }


    /**
     * Create a path string from an array of points
     * 
     * @param {Array} points: The array of points
     * @returns {String} The path string
     */ 
    #make_path(points) {
        let path_spec = "";
        if (points.length > 0) {
            let start_point = points.shift();
            path_spec = `M ${start_point.x} ${start_point.y}`;
            for (let point of points) path_spec += ` L ${point.x} ${point.y}`;
    
            path_spec += " Z";
        }
    
        return path_spec;
    }

}