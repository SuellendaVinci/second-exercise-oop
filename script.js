const pessoa = {

peso: 59.4,
calorias: {
max: 7000,
atual: 0
},

treinar: function() {
    if(this.calorias.atual === this.calorias.max) {
        return this.peso -= 1;
    } else {
        return this.calorias.atual += 1000;
    }   
},

comer: function() {
    if(this.calorias.atual === this.calorias.max){
        return this.peso += 1;
    } else {
        return this.calorias.atual += 1000;
    }
}

}