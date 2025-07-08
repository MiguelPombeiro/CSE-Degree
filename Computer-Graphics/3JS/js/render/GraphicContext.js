export class GraphicContext {

    constructor(containerId = "acontainer") {
        this.container = document.getElementById(containerId);
    }


    static draw_figure(fig) {
        let path = undefined;

        if (fig.hasOwnProperty("shape")) {
            path = new THREE.Shape();
            path.moveTo(fig.shape[0].x, fig.shape[0].y);
            for (let p of fig.shape.slice(1)) {
                path.lineTo(p.x, p.y);
            }
        }

        return path;
    }


    static getExtrusion(mainPath, holePath = null, depth = 5) {

        let shape = this.draw_figure({ shape: mainPath });

        if (holePath != null) {
            let hole  = this.draw_figure({ shape: holePath });
            shape.holes.push(hole);
        }

        let spine_points = [
            new THREE.Vector3(0, -depth, 0),
            new THREE.Vector3(0, depth, 0)
        ];

        let spine = new THREE.CatmullRomCurve3(spine_points);

        let parameters = {        
            extrudePath: spine, 
        };

        const geometry = new THREE.ExtrudeGeometry( shape, parameters );

        return geometry;
    }
}