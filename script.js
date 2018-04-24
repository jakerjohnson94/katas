console.log("Display the numbers from 1 to 20 ");
for (i=1; i<21; i++){
    console.log(i);
}


console.log("Display the even numbers from 1 to 20. ");
for(i=1; i<21; i++){
    if((i%2) === 0){
        console.log(i);
    }
}


console.log("Display the odd numbers from 1 to 20. ");
for(i=1; i<21; i++){
    if((i%2) !== 0){
        console.log(i);
    }
}

 console.log("Display the multiples of 5 up to 100 ");
for (i=1; i<101; i++){
   if((i%5)===0){
        console.log(i);
    }
}


console.log("Display the square numbers  up to 100. ");
for(i=2; i<101;i++){
    var sqr = i*i;
 if (sqr<101){
   console.log(sqr);
 }
}


console.log("Display the numbers counting backwards from 20 to 1 ");
for(i=20;i>0; i--){  console.log(i);
}


console.log("Display the even numbers counting backwards from 20 ");
for (i=20; i>0; i--){
    if((i%2)===0){
       console.log(i);
    }
}


console.log("Display the odd numbers from 20 to 1, counting backwards ");
   for(i=20; i>0; i--){
       if((i%2)!==0){
           console.log(i);
       }
   }

console.log("Display the multiples of 5, counting down from 100 ");
for(i=100; i>0; i--){
    if((i%5)===0){
        console.log(i);
    }
}



console.log("Display the square numbers, counting down from 100. ");
for(i=100; i>0; i--){
    if((i*i)<101){
        console.log((i*i));
    }
}

