import { Background } from './graphicalObjects/Background.js';
import { Building } from './graphicalObjects/Building.js';
import { Cloud } from './graphicalObjects/Cloud.js';
import { Boat } from './graphicalObjects/Boat.js';
import { Fish } from './graphicalObjects/Fish.js';

import { Renderer } from './render/Renderer.js';



function init_model(renderer) {
    let model = {
        console: {
            age: 0,
            time: performance.now(),
            elapsed:0,
        },
        background: new Background(renderer),

        buildings: [
            new Building(),
        ],
        clouds: [
            new Cloud(renderer),
        ],
        boat: new Boat(renderer),
        fish: null,
    }
    
    model.fish = new Fish(renderer, model.boat);
    
    return model;
}



function updateTerminal(model){
    let now = performance.now();
    model.console.elapsed = now - model.console.time;
    model.console.time = now;
    model.console.age ++ ;

    return model;
}


function updateBackground(model) {
    model.background.update(model.console.elapsed);
    return model;
}


function updateObjects(renderer, model) {
    //destroy buildings and clouds
    model.buildings = model.buildings.filter((b) => !b.isHidden);
    model.clouds = model.clouds.filter((c) => !c.isHidden);


    //create new buildings and clouds
    if (model.buildings.length < 5 && model.console.age % 200 == 0 && Math.random() >= 0.3) {
        model.buildings.push(new Building());
    };

    if (model.clouds.length < 8 && model.console.age % 200 == 0) {
        model.clouds.push(new Cloud(renderer));
    };

    if (model.console.age % 1000 == 0) {
        model.boat.leave_animation();
    }

    model.fish.update(model.boat, model.console.elapsed);

    //update existing buildings and clouds
    model.buildings.forEach((b) => {
        b.update(model.console.elapsed);
    });
    model.clouds.forEach((c) => {
        c.update(model.console.elapsed);
    });

    return model;
}


function updateModel(renderer, model) {
    model = updateTerminal(model);
    model = updateBackground(model);
    model = updateObjects(renderer, model);

    return model;
}


function render_background(model, renderer) {
    renderer.draw_figure(model.background.graph());
}


function render_objects(model, renderer) {
    model.buildings.forEach((b) => {
        renderer.draw_figure(b.graph());
    });

    model.clouds.forEach((c) => {
        renderer.draw_figure(c.graph());
    });

    renderer.draw_figure(model.boat.graph());
    renderer.draw_figure(model.fish.graph());
}


function render(model, renderer) {

    renderer.update_console(model);

    renderer.enter(0, 0, renderer.ctx.canvas.width, renderer.ctx.canvas.height, 0);

    render_background(model, renderer);
    render_objects(model, renderer);
    
    
    renderer.leave();

}


function animate(model, renderer) {
    function animation_step() {
        model = updateModel(renderer, model);
        render(model, renderer);
        TWEEN.update();
        requestAnimationFrame(animation_step);
    }
    animation_step();
}


function main (){
    console.log('I have arrived!');

    const renderer = new Renderer("acanvas", "aconsole");
    const canvas = renderer.ctx.canvas;
    const gc = renderer.ctx;

    const model = init_model(renderer);

    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 

    animate(model, renderer);

}


window.onload = main;