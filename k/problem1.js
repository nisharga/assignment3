// first 10km amimal 50
// then  20km amimal 100
// then  30km more 300

function animalCount(km){
    if(km <= 10){
        var totalAnimalCount = km * 50
        return totalAnimalCount
    }
    else if(km <= 20){
        var firstkm = 10;
        var secondKm = km - 10;
        var first10kmAnimal = firstkm * 50;
        var second10kmAnimal = secondKm * 100;
        var total = first10kmAnimal + second10kmAnimal;
        return total;
    }
    else if(km > 20){
        var firstkm = 10;
        var secondKm = 10;
        var thirdKm = km - 20;
        var first10kmAnimal = firstkm * 50;
        var second10kmAnimal = secondKm * 100;
        var thirdOrRestKM   = thirdKm * 300;
        var total = first10kmAnimal + second10kmAnimal + thirdOrRestKM;
        return total;
    }
    else{
        return 'Plese Enter Correct Number'
    }
    
}
console.log(animalCount(90))