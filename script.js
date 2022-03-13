const pessoa = {

peso: 59.4,
caloriasPerdidas: 0,
caloriasGanhas: 0,

treinar: function() {
   
    this.caloriasPerdidas += 1000;

    if(this.caloriasPerdidas % 7000 === 0) {
        this.peso -= 1;
    } 
    
    return `O seu peso atual é ${this.peso} e quantidade de calorias perdidas durante o treino foi de ${this.caloriasPerdidas}.`
},

comer: function() {

    this.caloriasGanhas += 1000;

    if(this.caloriasGanhas % 7000 === 0){
        this.peso += 1;
    }
   
    return `O seu peso atual é ${this.peso} e quantidade de calorias ganha com o lanche foi de ${this.caloriasGanhas}.`

}

}

