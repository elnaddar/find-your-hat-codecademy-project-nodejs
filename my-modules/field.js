class Field{
    constructor(field){
        this.field = field;
    }

    get boundries(){
        return [this.field.length, this.field[0].length]
    }

    print(){
        this.field.forEach(row => {
            console.log(row.join(""));
        });
    }
}

module.exports = {Field};