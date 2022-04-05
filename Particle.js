class Particle {
    constructor(_pos, _c) {
        this.position = _pos;
        this.charge = _c;
    }

    show() {
        textSize(30);
        noStroke();
        if (this.charge > 0) {
            fill(0, 0, 255);
            ellipse(this.position.x + w / 2, this.position.y + w / 2, w / 2, w / 2);
            drawPlusMinus(this.position.x + w / 2, this.position.y + w / 2, true);
        } else if (this.charge < 0) {
            fill(255, 0, 0);
            ellipse(this.position.x + w / 2, this.position.y + w / 2, w / 2, w / 2);
            drawPlusMinus(this.position.x + w / 2, this.position.y + w / 2, false);
        } else {
            noFill();
            stroke(1);
            strokeWeight(2);
            ellipse(this.position.x + w / 2, this.position.y + w / 2, w / 2, w / 2);
        }
    }
}