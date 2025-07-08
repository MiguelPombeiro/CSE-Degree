import { Letter_U } from './letter_U.js';
import { Letter_I } from './letter_I.js';
import { Letter_P } from './letter_P.js';
import { Letter_L } from './letter_L.js';
import { Letter_C } from './letter_C.js';
import { Letter_A } from './letter_A.js';
import { Letter_D } from './letter_D.js';
import { Letter_O } from './letter_O.js';

export class Word extends THREE.Group {
    constructor() {
        super();
        this.buildWord().then(() => {
            this.animateWord();
        });

        this.rotation.z = -Math.PI / 2;
        this.rotation.x = Math.PI;
        this.position.y = 20;

    }


    /**
     * This method creates the word and animates it.
     * @returns {Promise} A Promise that resolves when the word is built
     */
    buildWord() {
        const letters = [
            new Letter_U(),
            new Letter_P(),
            new Letter_L(),
            new Letter_I(),
            new Letter_C(),
            new Letter_A(),
            new Letter_D(),
            new Letter_O()
        ];

        // Create a Promise to make sure the animations are done in the correct sequence
        // To animate the letters in sequence, we need to create a Promise for each letter
        const promises = letters.map((letter, index) => {
            return new Promise((resolve) => {
                const geometry = letter.getGeometry();
                const material = new THREE.MeshPhongMaterial({
                    color: 0x000000, // Black 
                    side: THREE.DoubleSide,
                    flatShading: true,
                });
                const mesh = new THREE.Mesh(geometry, material);

                mesh.visible = false;

                const startPosition = new THREE.Vector3(
                    (Math.random() - 0.5) * 5000, 
                    (Math.random() + 50) * 5000, 
                    (Math.random() - 0.5) * 5000 
                );

                mesh.position.copy(startPosition);

                // Animate the letter to its final position
                new TWEEN.Tween(mesh.position)
                    .to({ x: 0, y: 0, z: 90 }, 5000)
                    .delay(index * 1000) 
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onStart(() => {
                        mesh.visible = true;
                    })
                    .onComplete(() => {
                        new TWEEN.Tween(material.color)
                            .to({ r: 0.941, g: 0.902, b: 0.549 }, 2000) // Khaki
                            .delay(1000) 
                            .start();
                        resolve();
                    })
                    .start();

                this.add(mesh);
            });
        });

        return Promise.all(promises);
    }


    /**
     * This method animates the word with scales and translations
     */
    animateWord() { 

            // Create the translation for the scalling to not go under the ground
            this.goUp = new TWEEN.Tween(this.position)
                .to({ y: this.position.y + 50 }, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onComplete(() => {
                    this.getBiggerScaleX.start();
                });
    
            this.goDown = new TWEEN.Tween(this.position)
                .to({ y: this.position.y }, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut);
    
            // Create the scaling animations
            this.getBiggerScaleX = new TWEEN.Tween(this.scale)
                .to({ x: this.scale.x + 1 }, 2000)
                .easing(TWEEN.Easing.Elastic.Out)
                .onComplete(() => {
                    this.getNormalScaleX.start();
                });
    
            this.getNormalScaleX = new TWEEN.Tween(this.scale)
                .to({ x: this.scale.x }, 2000)
                .easing(TWEEN.Easing.Elastic.Out)
                .onComplete(() => {
                    this.goDown.start();
                });
    
            this.goUp.chain(this.getBiggerScaleX);
            this.getNormalScaleX.chain(this.goDown);
            this.goDown.chain(this.goUp);
    

            this.goUp.start();
        
        }
        
}



