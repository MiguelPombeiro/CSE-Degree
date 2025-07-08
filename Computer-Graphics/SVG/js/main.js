import { Background } from './graphicalObjects/Background.js';
import { Door } from './graphicalObjects/Door.js';
import { Truck } from './graphicalObjects/Truck.js';
import { Cop } from './graphicalObjects/Cop.js';

import { Renderer } from './render/Renderer.js';
import { Calcs } from './utils/Calcs.js';


/** 
 * Set the game parameters from the user input
 * @returns {Object} - The game parameters
*/
function getGameParams() {

    let difficulty = parseInt(document.getElementById("difficulty").value);
    let cops = parseInt(document.getElementById("cops").value);

    let truck_step, max_doors, max_vel, dif, min_height;


    if (difficulty === 0) {
        dif = "Easy";
        truck_step = 20;
        max_doors = 2;
        max_vel = 1.5;
        min_height = 1;
    }
    else if (difficulty === 1) {
        dif = "Medium";
        truck_step = 15;
        max_doors = 3;
        max_vel = 2;
    }
    else if (difficulty === 2) {
        dif = "HELL";
        truck_step = 15;
        max_doors = 4;
        max_vel = 2.5;
    }
    else {
        dif = "So you want to play...";
        truck_step = Calcs.rand_ab(10, 30);
        max_doors = Calcs.rand_ab(2, 8);
        max_vel = Calcs.rand_ab(2, 4);
        cops = Calcs.rand_ab(1, 5);
    }


    return {
        difficulty: dif,
        cops: cops,
        truck_step: truck_step,
        max_doors: max_doors,
        max_vel: max_vel,
        min_height: min_height || 0.8
    }
}


/**
 * Initialize the game model. 
 * Add event listeners for the game controls.
 * 
 * @param {Renderer} renderer 
 * @returns {Object} - The game model
 */
function init_model(renderer) {

    let gP = getGameParams();

    let model = {

        max_rend_height: renderer.height - 100,

        console: {
            age: 0,
            time: performance.now(),
            elapsed:0,
            score: 0,
            difficulty: gP.difficulty,
        },
        game: {
            min_height: gP.min_height,
            max_height: 1.3,
            min_vel: 0.5,
            max_vel: gP.max_vel,

            truck_step: gP.truck_step,
            max_doors: gP.max_doors,
            max_cops: gP.cops,
        },
       
        background: new Background(renderer),
        cops: [],
        doors: [],
        truck: new Truck(),
        action: 0, // 0 - not move, 1 - move up, 2 - move down

        doorDistance: 30,
        copDistance: 40,
        enemyCutoff: -70,

        isGameOver: false, 
        isPause: false,
        isDebug: false,
    }


    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w': case 'W': model.action = 1; break;
            case 's': case 'S': model.action = 2; break;
            case "p": case "P": model.isPause = !model.isPause; break;
            case "0": model.isDebug = !model.isDebug; break;
            default: model.action = 0;
        }
    });


    return model;
}


// Update the terminal information
function updateTerminal(model){
    let now = performance.now();

    model.console.elapsed = now - model.console.time;
    model.console.score += model.console.elapsed/1000;

    model.console.time = now;
    model.console.age ++ ;

    return model;
}


// Render the terminal information
function renderTerminal(model, renderer) {

    let string = "";
    if (model.isDebug) {
        string = `AGE: ${model.console.age}` + ` | ` + 
                 `ELAPSED: ${model.console.elapsed.toFixed(2)}ms | `;
    }
    string += `MODE: ${model.console.difficulty}` + ` | SCORE: ${model.console.score.toFixed(0)}s`;
    renderer.console.innerHTML = string; 
}


// Update the game objects
function updateObjects(renderer, model) {

    // move the truck
     if (model.action != 0) {
        let step = model.action === 1 ? -model.game.truck_step : model.action === 2 ? model.game.truck_step : 0;

        model.truck.update(step, model.max_rend_height);
        model.action = 0;
    }


    // move the doors
     for (let door of model.doors) {
        door.update(model);
        
        if (!door.isHit && door.dx <= -60)
            model.isGameOver = true;
    }

    // move the cops
    for (let cop of model.cops) {
        cop.update(model);

        if (cop.isHit) {
            model.isGameOver = true;
        }
    } 
    

    model.cops = model.cops.filter(cop => cop.dx >= model.enemyCutoff);
    model.doors = model.doors.filter(door => door.dx >= model.enemyCutoff);


    // generate new doors and cops
     if (model.doors.length < model.game.max_doors && model.console.age % 25 === 0 && Math.random() < 0.55) {

        let dy = Calcs.rand_ab(0, model.max_rend_height);
        let sxy = Calcs.rand_ab(model.game.min_height, model.game.max_height);
        let step = Calcs.rand_ab(model.game.min_vel, model.game.max_vel);

        model.doors.push(new Door(renderer.width + 16, dy, sxy, step));
    }
    if (model.cops.length < model.game.max_cops && Math.random() < 0.01) {

        let dy = Calcs.rand_ab(0, model.max_rend_height);
        let sxy = Calcs.rand_ab(model.game.min_height, model.game.max_height);
        let step = Calcs.rand_ab(model.game.min_vel, model.game.max_vel);

        model.cops.push(new Cop(renderer.width + 16, dy, sxy, step));
    }

    return model;
}


// Update the game model
function updateModel(renderer, model) {
    
    if (model.isPause) {
        return model;
    }

    model = updateTerminal(model);
    
    model = updateObjects(renderer, model);

    return model;
}


// Render the game model
function render(model, renderer) {

    renderTerminal(model, renderer);

    let background = model.background.graph(renderer); 
    background.children.push(model.truck.graph());

     for (let door of model.doors) {
        background.children.push(door.graph());
    }
    for (let cop of model.cops) {
        background.children.push(cop.graph());
    }
 
    let svg_element = renderer.draw_figure(background);
    
    renderer.canvas.innerHTML = svg_element.outerHTML;

}


// Animate the game
function animate(model, renderer) {
    function animation_step() {
        if (!model.isGameOver){
            model = updateModel(renderer, model);        
            render(model, renderer);
            requestAnimationFrame(animation_step);
        }
        else {
            gameOver(renderer, model);
        }
    }
    animation_step();
}


function gameOver(renderer, model) {
    if (model.isDebug){
        console.log("Game Over!");
        console.log(model);
    };

    let string = `GAME OVER! | SCORE: ${model.console.score.toFixed(0)}s`;
    renderer.console.innerHTML = string;
    document.getElementById("gameStart").disabled = false;
}


function main (){
    console.log('I have arrived!');

    alert("Welcome to the game! \n\n" + 
          "Use 'W' to move up and 'S' to move down. \n" +
          "Press 'P' to pause the game. \n" +
          "Press '0' to show/hide the debug information. \n" +
          "Good luck!");

    const renderer = new Renderer("acanvas", "aconsole");

    const model = init_model(renderer);

    animate(model, renderer);

}

document.getElementById("gameStart").onclick = () => {
    document.getElementById("gameStart").disabled = true;
    main();
}