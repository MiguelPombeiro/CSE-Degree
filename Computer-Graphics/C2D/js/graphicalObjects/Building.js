import { Paths } from "../utils/Paths.js";

// const BUILDING_COLOR = "#D4D4D4";
// const WINDOW_COLOR = "#B4B4B4";


//TODO: Maybe add a second type of building

const BUILDING_COLOR = "rgba(212, 212, 212, 0.7)"; // 80% opacity
const SECOND_BUILDING_COLOR = "rgba(180, 180, 180, 0.99)"; // 80% opacity
const WINDOW_COLOR = "rgba(180, 180, 180, 0.5)"; // 50% opacity

export class Building {
    constructor() {

        this.type = Math.floor(Math.random() * 2);
        // this.type = 2; 


        this.transform = this.#generate_building();
        // this.transform = {
        //     // dx: -0.05,
        //     dx: 0.5,
        //     dy: 0.369,
        //     sx: 0.05,
        //     sy: 0.1,
        //     a: 0,
        // }
        this.style = {
            fill: BUILDING_COLOR,
            stroke: BUILDING_COLOR,
            lineWidth: 0.0015,
        }
        this.shape = Paths.uRect_path();
        this.children;
        
        this.isHidden = false;
        
        this.#generate_building();
        
    }


    update(elapsed) {
        this.transform.dx += 0.00005 * elapsed;
        if (this.transform.dx > 1.3) {
            this.isHidden = true;
        }
        return this;
    }

    #generate_building() {
        if (this.type == 0) {
            this.transform = {
                dx: -0.09,
                dy: 0.369,
                sx: 0.05,
                sy: 0.1,
                a: 0,
            }
            this.children = this.#get_windows();

        }
        else if (this.type == 1) {
            this.transform = {
                dx: -0.05,
                dy: 0.369,
                sx: 0.05,
                sy: 0.1,
                a: 0,
            }
            this.children = this.#get_windows();
        }
        //TODO: Add a second type of building
        // else if (this.type == 2) {
        //     this.transform = {
        //         // dx: -0.05,
        //         dx: 0.5,
        //         dy: 0.393,
        //         sx: 0.055,
        //         sy: 0.075,
        //         a: 0,
        //     }
        //     this.children = this.#get_windows();

        // }
    }

    
    #get_windows() {
        let windows = [];
        let window_transform = {
            sx: 0.2,
            sy: 0.2,
            a: 0,
        }
        let window_style = {
            fill: WINDOW_COLOR,
            stroke: WINDOW_COLOR,
            lineWidth: 0.1,
        }
        let window_shape = Paths.uRect_path();

        if (this.type == 0) {
            windows.push({
                transform: {
                    dx: 0.7,
                    dy: 0.65,
                    sx: 0.7,
                    sy: 0.35,
                    a: 0,
                },
                style: {
                    fill: SECOND_BUILDING_COLOR,
                    stroke: SECOND_BUILDING_COLOR,
                    lineWidth: 0.0055,
                },
                shape: Paths.uRect_path(),
                children: [
                    {
                        transform: {
                            dx: 0.05,
                            dy: 0.5,
                            sx: 0.5,
                            sy: 0.5,
                            a: 0,
                        },
                        style: {
                            fill: BUILDING_COLOR,
                            stroke: BUILDING_COLOR,
                            lineWidth: 0.0015,
                        },
                        shape: Paths.uRect_path(),
                    },
                ]
            });
            for (let i = 0; i < 6; i++) {
                let x = -0.5 + (i % 3) * 0.5;
                let y = -0.6 + Math.floor(i / 3) * 0.6;
                windows.push({
                    transform: {
                        dx: x,
                        dy: y,
                        sx: window_transform.sx,
                        sy: window_transform.sy,
                        a: window_transform.a,
                    },
                    style: {
                        fill: window_style.fill,
                        stroke: window_style.stroke,
                        lineWidth: window_style.lineWidth,
                    },
                    shape: window_shape,
                });
            }
        }

        else if (this.type == 1) {
            for (let row = -1; row <= 1; row++) {
                for (let col = -1; col <= 1; col++) {
                    windows.push({
                        transform: {
                            dx: col * 0.5,
                            dy: row * 0.6,
                            sx: window_transform.sx,
                            sy: window_transform.sy,
                            a: window_transform.a,
                        },
                        style: {
                            fill: window_style.fill,
                            stroke: window_style.stroke,
                            lineWidth: window_style.lineWidth,
                        },
                        shape: window_shape,
                    });
                }
            }
        }

        return windows; 
    }


    graph() {
        return {
            transform: this.transform,
            style: this.style,
            shape: this.shape,
            children: this.#get_windows()//[
            // children: [
            //     {// Windows
            //         transform: {
            //             dx: -0.5,
            //             dy: -0.6,
            //             sx: 0.2,
            //             sy: 0.2,
            //             a: 0,
            //         },
            //         style: {
            //             fill: WINDOW_COLOR,
            //             stroke: WINDOW_COLOR,
            //             lineWidth: 0.1,
            //         },
            //         shape: Paths.uRect_path(),
            //     },
            //     {// Windows
            //         transform: {
            //             dx: 0.5,
            //             dy: -0.6,
            //             sx: 0.2,
            //             sy: 0.2,
            //             a: 0,
            //         },
            //         style: {
            //             fill: WINDOW_COLOR,
            //             stroke: WINDOW_COLOR,
            //             lineWidth: 0.1,
            //         },
            //         shape: Paths.uRect_path(),
            //     },
            //     {// Windows
            //         transform: {
            //             dx: -0.5,
            //             dy: 0.0,
            //             sx: 0.2,
            //             sy: 0.2,
            //             a: 0,
            //         },
            //         style: {
            //             fill: WINDOW_COLOR,
            //             stroke: WINDOW_COLOR,
            //             lineWidth: 0.1,
            //         },
            //         shape: Paths.uRect_path(),
            //     },
            //     {// Windows
            //         transform: {
            //             dx: 0.5,
            //             dy: 0.0,
            //             sx: 0.2,
            //             sy: 0.2,
            //             a: 0,
            //         },
            //         style: {
            //             fill: WINDOW_COLOR,
            //             stroke: WINDOW_COLOR,
            //             lineWidth: 0.1,
            //         },
            //         shape: Paths.uRect_path(),
            //     },
            //     {// Windows
            //         transform: {
            //             dx: -0.5,
            //             dy: 0.6,
            //             sx: 0.2,
            //             sy: 0.2,
            //             a: 0,
            //         },
            //         style: {
            //             fill: WINDOW_COLOR,
            //             stroke: WINDOW_COLOR,
            //             lineWidth: 0.1,
            //         },
            //         shape: Paths.uRect_path(),
            //     },
            //     {// Windows
            //         transform: {
            //             dx: 0.5,
            //             dy: 0.6,
            //             sx: 0.2,
            //             sy: 0.2,
            //             a: 0,
            //         },
            //         style: {
            //             fill: WINDOW_COLOR,
            //             stroke: WINDOW_COLOR,
            //             lineWidth: 0.1,
            //         },
            //         shape: Paths.uRect_path(),
            //     }

            // ]
        }
    }
}