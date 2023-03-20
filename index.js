// Code your solutions in this file
const getMessage=["Guadalupe", "Ollie", "Aki"];
function writeCards(name,event) {
    let message=[]
    for (let i=0; i < name.length; i++){
        message.push("Thank you, "+name[i] +","+ " for the wonderful " + event + " gift!");
   debugger;
    }
        return  message;

    }
    console.log ["Guadalupe,", "Ollie,", "Aki,"];
    console.log(writeCards(names,events));
    
//writeCards(["Guadelupe", "Ollie","Aki"],"Surprise");
function countDown(){
    let numCountDown=10;
    while(numCountDown>=0){
        console.log(numCountDown--);

    }
}