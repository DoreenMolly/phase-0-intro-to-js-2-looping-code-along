// Code your solutions in this file
function writeCards(names,event) {
    let thankYoucards = [];
    for (let i = 0; i < names.length; i++){
        thankYoucards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYoucards;
}
function countDown (number){
    while (number > 0) {
        console.log(number);
        number -=1;
    }
    console.log(number);
}