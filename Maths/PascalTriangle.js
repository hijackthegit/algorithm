class PascalTriangle {
    constructor(rows) {
       this.rowCount = rows || 1;
       this.data = [];
       this._build();
    }
    set rows(n) {
        this.rowCount = n;
        this._build(n);
    }
    get rows() {
        return this.rowCount;
    }
    _build() {
        for(let i = 0; i < this.rowCount; i++) {
            this.data.push(new Array(i+1).fill(1));
            const rowLength = this.data[i].length;
            for (let j=0; j < rowLength; j++){
                if (i > 1 && (j+1) < (rowLength-1)) {
                    this.data[i][j+1] = this.data[i-1][j] + this.data[i-1][j+1];
                }
            }
        }
    }
    print() {
        this.data.map((row) => {
           console.log(row);
        });
    }
}

module.exports = PascalTriangle;