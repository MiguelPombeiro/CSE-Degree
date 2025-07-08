
export class Background {
    constructor() {
        this.transform = {
            dx: 0,
            dy: 0,
            sx: 1,
            sy: 1,
            a: 0,
        }

        this.linearGradient = {
            id: 'backgroundGradient',
            x1: '0%',
            y1: '0%',
            x2: '0%',
            y2: '100%',
            stops: [
                { offset: '0%', color: '#020D0D' }, // Dark gray
                { offset: '50%', color: '#252323' }, // Medium gray
                { offset: '100%', color: '#343434' } // Dark gray
            ]
        };
    }

    graph(renderer) {
        return {
            transform: this.transform,
            style: {
                fill: "url(#backgroundGradient)",
                stroke: "#7D5A50",
                strokeWidth: 0.01,
                strokeCap: "round",
                strokeJoin: "round",
            },
            shape: [
                { x: 0, y: 0 },
                { x: 0, y: renderer.height },
                { x: renderer.width, y: renderer.height },
                { x: renderer.width, y: 0 },
                { x: 0, y: 0 },
            ],
            linearGradient: this.linearGradient,
            children: [],
        }
    }
}