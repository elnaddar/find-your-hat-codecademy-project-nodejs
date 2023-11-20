class Field{
    constructor(field){
        this.field = field;
    }

    get boundries(){
        return [this.field.length, this.field[0].length]
    }

    setLocationTo(loc, val){
        let [x, y] = loc;
        this.field[x][y] = val;
    }

    print(){
        this.field.forEach(row => {
            console.log(row.join(""));
        });
    }
}

module.exports = {Field};