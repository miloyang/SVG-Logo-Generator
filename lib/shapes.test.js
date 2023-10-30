const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape', () => {
    it('does the new instance of Circle return an svg', () => {
        const circle = new Circle("CS", "blue", "white")
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">CS</text></svg>`)
    });
});

describe('Shape', () => {
    it('does the new instance of Triangle return an svg', () => {
        const triangle = new Triangle("CS", "blue", "white")
        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">CS</text></svg>`)
    });
});

describe('Shape', () => {
    it('does the new instance of Square return an svg', () => {
        const square = new Square("CS", "blue", "white")
        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="80" y="25" width="150" height="150" fill="white" /><text x="155" y="120" font-size="60" text-anchor="middle" fill="blue">CS</text></svg>`)
    });
});
