export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
/*
vektor - smer a velikost
scalar - jakykoliv cislo


*/
    static add(a = new Vector2(0, 0), b = new Vector2(0, 0)) {
        return new Vector2(a.x + b.x, a.y + b.y);
    }

    static sub(a = new Vector2(0, 0), b = new Vector2(0, 0)) {
        return new Vector2(a.x - b.x, a.y - b.y);
    }

    static scale(vector = new Vector2(0, 0), scalar) {
        return new Vector2(vector.x * scalar, vector.y * scalar);
    }

    static divide(vector = new Vector2(0, 0), scalar) {
        return new Vector2(vector.x / scalar, vector.y / scalar);
    }

    static dot(a = new Vector2(0, 0), b = new Vector2(0, 0)) {
        return a.x * b.x + a.y * b.y;
    }

    static length(a = new Vector2(1, 1)) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
    }

    // linear interpolation - t urcuje vektor mezi "a" a "b"
    static lerp(a, b, t) {
        return this.add(this.scale(a, t), this.scale(b, (1 - t)));
    }
    
    //normalizovany vektor -  stejny smer, delka 1
    static normalize(vector = new Vector2(0, 0)) {
        let x = vector.x / Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        let y = vector.y / Math.sqrt(vector.x * vector.x + vector.y * vector.y);
        return new Vector2(x, y);
    }
}