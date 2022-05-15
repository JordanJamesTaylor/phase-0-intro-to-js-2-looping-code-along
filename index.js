// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`)
  };

  return gifts;
};

function writeCards(arrayNames, eventName){
    const messages = [];

    for (let i = 0; i < arrayNames.length; i++){
        messages.push(`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!`)
        console.log(messages[i])
        debugger;
    };

    return messages;
};

//wrapGifts(gifts);
//writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num){
    while(num >= 0){
        console.log(num);

        num--;
    };
};