export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static add(a, b) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static sub(a, b) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static scale(vector, scalar) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }

    static divide(vector, scalar) {
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }
}