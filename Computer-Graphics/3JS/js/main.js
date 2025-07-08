'use strict';

import { GraphicContext } from './render/GraphicContext.js';

import { Word } from './graphicalObjects/Word.js';
import { Floor } from './graphicalObjects/Floor.js';
import { Wall } from './graphicalObjects/Wall.js';


/**
 *  Build a model
 **/
function model() {

    let word = new Word();

    return word;

}


/**
 *  Setup the rendering context
*/
function init(mesh) {
    // Create the renderer
    let renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true, 
    });


    // Set the renderer size
    let size = Math.min(window.innerWidth, 1024);
    renderer.setSize(size, size);

    let gc = new GraphicContext();

    // Append the renderer's DOM element to the container
    let div_container = gc.container;
    div_container.appendChild(renderer.domElement);

    
    let scene = new THREE.Scene();
    
    scene.background = new THREE.Color(0x1C1C1C);
    

    let camera = new THREE.PerspectiveCamera(
        45, // field of view
        1, // aspect ratio
        1, // near clipping plane
        10000 // far clipping plane
    );
    camera.position.set(-666, 90, -12);
    camera.lookAt(scene.position);
    

    let controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    // Add ambient light to the scene: uncomment if the scene is too dark
    // let ambient_light = new THREE.AmbientLight(0x404040); // Dim ambient light
    // scene.add(ambient_light);

    let spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-666, 333, 333);
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);
    
    let floor = new Floor();
    let wall = new Wall();
    
    scene.add(floor.mesh);
    scene.add(wall.mesh);

    scene.add(mesh);


    return {
        camera: camera,
        scene: scene,
        renderer: renderer,
        controls: controls,
        terminal: {
            console: document.getElementById('aconsole'),
            age: 0,
        },
    };
}


/**
 * Animates the scene
*/
function animate(step) {

    requestAnimationFrame(function () {
        update(step);
        animate(step);
        step.controls.update();
        step.terminal.console.innerHTML = `AGE: ${step.terminal.age}`;
        step.renderer.render(step.scene, step.camera);
    });

}


/**
 * Updates the scene
*/
function update(step) {
    step.terminal.age += 1;
    TWEEN.update();    
}


function main() {
    let theModel = model();
    let step = init(theModel);

    animate(step);
}

window.onload = main();