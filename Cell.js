class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hasParticle = false;
        let particle;
    }

    show() {
        noFill();
        stroke(69, 32, 219, 37);
        rect(this.x * w, this.y * w, w, w);
    }

    showParticle() {
        if (this.hasParticle) {
            this.particle.show();
        }
    }

    addParticle(c) {
        if (!this.hasParticle) {
            this.hasParticle = true;
            this.particle = new Particle(createVector(this.x * w, this.y * w), (c == 1) ? 1 : -1);
        }
    }

    removeParticle() {
        if (this.hasParticle) {
            this.hasParticle = false;
            this.particle = null;
        }
    }

    hasMouse() {
        return (((mouseX > this.x * w) && mouseX < (this.x * w) + w) && ((mouseY > this.y * w) && mouseY < (this.y * w) + w));
    }


    setCharge(a) {
        this.particle.charge = ((this.particle.charge > 0) ? a : (this.particle.charge < 0) ? -a : 0);
    }
}