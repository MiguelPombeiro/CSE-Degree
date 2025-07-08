

export class Floor {
    constructor(width = 500, height = 500, color = 0x808080) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.mesh = this.createFloor();
    }


    createFloor() {
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('../media/wooden_floor.jpg');

        const geometry = new THREE.PlaneGeometry(this.width, this.height);
        const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
        const floor = new THREE.Mesh(geometry, material);

        floor.rotation.x = -Math.PI / 2; 
        floor.position.y = -50;

        return floor;
    }

}


