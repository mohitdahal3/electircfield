class Grid {
    constructor() {
        this.cells = []
        this.cellsWithParticle = []
        this.rows = floor(height / w);
        this.cols = floor(width / w);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.cells.push(new Cell(j, i));
            }
        }
    }

    show() {
        this.cells.forEach(c => {
            c.show();
            if (c.hasParticle) {
                c.showParticle();
            } else {
                if (this.cellsWithParticle.length > 0) {
                    let emf = createVector(0, 0);
                    this.cellsWithParticle.forEach(cwp => {
                        let ob = createVector((cwp.x * w) + w / 2, (cwp.y * w) + w / 2);
                        let oa = createVector((c.x * w) + w / 2, (c.y * w) + w / 2);
                        let emf1 = p5.Vector.sub(ob, oa);
                        let r = emf1.mag();
                        r = r * 0.1;
                        emf1.normalize();
                        let m = 5000 * ((cwp.particle.charge) / (r * r));
                        emf1.mult(m);
                        emf.add(emf1);
                    });
                    drawArrow(emf.mult(-1), c);

                }
            }
        });


    }

    checkMouse(ch) {
        this.cells.forEach(c => {
            if (c.hasMouse() && !c.hasParticle) {
                c.addParticle(ch);
                this.cellsWithParticle.push(c);
            }
        });
    }

    rem() {
        this.cells.forEach(c => {
            if (c.hasMouse() && c.hasParticle) {
                c.removeParticle();
                this.cellsWithParticle = arrayRemove(this.cellsWithParticle , c)
            }
        });
    }

    setCharge(a) {
        this.cellsWithParticle.forEach(c => {
            if (c.hasMouse()) {
                c.setCharge(a);
            }
        });
    }


}