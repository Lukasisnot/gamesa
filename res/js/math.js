export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
/*
vektor - smer a velikost
scalar - jakykoliv cislo
normalizovany vekror -  stejny smer, delka 1
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

    // linear interpolation - t - vektor presne mezi "a" a "b"
    static lerp(a, b, t) {
        return this.add(this.scale(a, t), this.scale(b, (1 - t)));
    }

    static normalize(vector = new Vector2(0, 0)) {
        return this.divide(vector, vector.x * vector.x + vector.y * vector.y);
    }
}

export class Math {
    static sqrt(x) {
        let xStr = x.toString();

        let dotPos = -1;
        for (let i = 0; i < xStr.length; i++) {
            if (xStr[i] == ".") {
                dotPos = i;
            }
        }

        let afterDeciPairs = [];
        for (let i = dotPos + 1; i < xStr.length; i++) {
            
        }
    }
}