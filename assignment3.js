// https://github.com/nisharga/assignment3

function kilometerToMeter(num){
    if(num < 0){
        return 0;
    }
    else{
        return num * 1000       /* 1000 meter = 1KM */
    }
}

function budgetCalculator(watch, mobile, laptop){
    if(watch < 0 || mobile < 0 || laptop < 0){ return 0; }
    else{
        watchPrice = watch * 50;
        mobilePrice = mobile * 100;
        laptopPrice = laptop * 100;
        return watchPrice + mobilePrice + laptopPrice;
    }
}


function hotelCost(dayStay){
    if(dayStay < 0){ return 0; }
    else if(dayStay <= 10){
        return dayStay * 100;
    }
    
    else if(dayStay <= 20){
        var remainingDays = dayStay - 10;
        var next10DaysDue =  remainingDays * 80;
        var first10DaysDue = 10 * 100;
        return next10DaysDue + first10DaysDue;
    }
    else if(dayStay > 20){
        var first10DaysDue = 10 * 100;
        var second10DaysDue = 10 * 80;
        var remainingDays = dayStay - 20;
        var nextToAllDays =  remainingDays * 50;
        return first10DaysDue + second10DaysDue + nextToAllDays;
    }
}


function megaFriend(words) { 
    let maxLength = 0;  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        var name = words[i];
      }
    }
    return name;
  }
  