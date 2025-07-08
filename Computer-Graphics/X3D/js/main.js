
/**
 * This function displays a message in the console
 * 
 * @param {string} text 
 */
function message (text) {
    let terminal = document.getElementById("aconsole");
    terminal.innerText = text;
}


/**
 * This function creates a new context for the animation.
 * 
 * @returns A new context for the animation
 */
function new_context() {
    let x3d_root = document
        .getElementById("x3d_root");

    let context = {
        x3d: x3d_root,
    }

    context.render = render_context;

    return context;

}


/**
 * This function renders the model in the context
 * 
 * @param {Object} model: The model to render 
 * 
 */
function render_context(model) {
    message(`AGE: ${model.age}`);

    for (let key in model.wheel) {
        let elem = model.wheel[key].elem;
        let current = model.wheel[key].current;
        elem.setAttribute("translation", `${current.x} ${current.y} ${current.z}`);
    }

    for (let key in model.trees) {
        let elem = model.trees[key].elem;
        let current = model.trees[key].current;
        elem.setAttribute("translation", `${current.x} ${current.y} ${current.z}`);
    }
}


/**
 * Creates a new model for the animation
 * 
 * @returns The new model
 */
function new_model() {
    let model = {
        age: 0,
        duration: 713,
        step: 1,
        viewpoint: document.getElementById("X3D__viewpoint"),
        wheel: {
            ticket_box: { 
                elem: document.getElementById("X3D__ticket_box"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: 0, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
            outer_wheels: {
                elem: document.getElementById("X3D__outer_wheels"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: 0, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
            wheel_axis: {
                elem: document.getElementById("X3D__wheel_axis"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: 0, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
            cabins: {
                elem: document.getElementById("X3D__cabins"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: 0, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
            wheel_base: {
                elem: document.getElementById("X3D__wheel_base"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: 0, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
        },
        trees: {
            floor: { 
                elem: document.getElementById("X3D__floor"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: -13, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
            all_trees: {
                elem: document.getElementById("X3D__all_trees"),
                start: { x: 0, y: 0, z: 0},
                target: { x: 0, y: 0, z: 0},
                current: { x: 0, y: 0, z: 0},
            },
        }
    };


    for (let key in model.wheel) {
        let elem = model.wheel[key].elem;
        let pos = elem.getAttribute("translation").split(" ");
        model.wheel[key].start.x = parseFloat(pos[0]);
        model.wheel[key].start.y = parseFloat(pos[1]);
        model.wheel[key].start.z = parseFloat(pos[2]);

        model.wheel[key].current.x = model.wheel[key].start.x;
        model.wheel[key].current.y = model.wheel[key].start.y;
        model.wheel[key].current.z = model.wheel[key].start.z;
    }
    
    for (let key in model.trees) {
        let elem = model.trees[key].elem;
        let pos = elem.getAttribute("translation").split(" ");
        model.trees[key].start.x = parseFloat(pos[0]);
        model.trees[key].start.y = parseFloat(pos[1]);
        model.trees[key].start.z = parseFloat(pos[2]);

        model.trees[key].current.x = model.trees[key].start.x;
        model.trees[key].current.y = model.trees[key].start.y;
        model.trees[key].current.z = model.trees[key].start.z;
    }

    model.update = update_model;
    model.update_object = update_object;


    return model;
}


/**
 * This function updates the model.
 * It updates the age of the model and the position of all the objects.
 * It uses the ease in-out function to update the position of the objects.
 */
function update_model() {
    this.age ++;

    let t = this.age / this.duration;
    t = t > 1 ? 1 : t;

    t = t * (2 - t); // Ease in-out

    for (let key in this.wheel) {
        this.update_object(this.wheel[key], t);
    }

    for (let key in this.trees) {
        this.update_object(this.trees[key], t);
    }

}


/**
 * This function updates an object.
 * It updates the object position based on the start and target positions using linear interpolation.
 * 
 * @param {Object} obj: The object to update 
 * @param {number} t: The time to update the object
 */
function update_object(obj, t) {
    let start = obj.start;
    let target = obj.target;
    let current = obj.current;

    current.x = start.x + t * (target.x - start.x);
    current.y = start.y + t * (target.y - start.y);
    current.z = start.z + t * (target.z - start.z);
}


/**
 * This function starts the animation.
 * It creates a new context and a new model.
 * It then starts the animation loop.
 */
function start_animation() { 

    // Animation
    let gc = new_context();
    let model = new_model(gc);

    let step = (ts) => {
        model.update();
        gc.render(model);
        requestAnimationFrame(step);
    }

    step();
}


function main() {

    const elements ={
        X3D_Trees: document.getElementById("X3D_Trees"),
        X3D_Wheel: document.getElementById("X3D_Wheel"),
    }


    let total = Object.keys(elements).length;
    let loaded = 0;

    message(`I'm alive...`);

    // Check if all files are loaded
    let check_loaded = (ev) => {
        loaded ++;
        console.log(`Loaded: ${loaded} of ${total}`);
        if (loaded === total) {
            console.log(`All files loaded.`);
            start_animation();
        }
    }

    for (let key in elements) {
        elements[key].onload = check_loaded;
    }

}

window.onload = main();