export class Wall {
    constructor(width = 500, height = 500, color = 0x808080) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.mesh = this.createWall();
    }

    createWall() {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('../media/curtain.jpg');

        const geometry = new THREE.PlaneGeometry(this.width, this.height);
        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });

        const wall = new THREE.Mesh(geometry, material);

        wall.rotation.y = -Math.PI / 2; 
        wall.position.x = 250;
        wall.position.y = -300;

        setTimeout(() => {
            wall.raise = new TWEEN.Tween(wall.position)
                .to({ y: 200 }, 40000)
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();
        }, 11000);

        return wall;
    }
}
