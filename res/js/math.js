export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
/*
vektor - smer a velikost
scalar - jakykoliv cislo
*/
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

    static dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }

    // linear interpolation - t - vektor presne mezi "a" a "b"
    static lerp(a, b, t) {
        return this.add(this.scale(a, t), this.scale(b, (1 - t)));
    }
}