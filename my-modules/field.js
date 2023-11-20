class Field{
    constructor(field){
        this.field = field;
    }
    
    print(){
        this.field.forEach(row => {
            console.log(row.join(""));
        });
    }
}

module.exports = {Field};