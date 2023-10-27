class Shape {
    constructor(text, tcolour, lcolour) {
        this.text = text;
        this.tcolour = tcolour;
        this.lcolour = lcolour;
    }
}

class Circle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.lcolour}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolour}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.lcolour}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolour}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.lcolour}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.tcolour}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Triangle, Square }