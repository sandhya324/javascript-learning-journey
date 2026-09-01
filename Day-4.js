// 1 — Numbers     
// Print Number from  1 to 10 using for loop

for(let i = 1; i <= 10; i++){
   console.log(i);
}




// 2 — Even numbers
// Print all even numbers from 1 to 20

let i = 2;
while(i <= 20){
   if(i % 2 == 0){
      console.log(i);
   }
   i++;
}



// 3 - Countdown
// Print numbers from 10 to 1 using a for loop

for(let i = 10; i >= 1; i--){
   console.log(i);
}



// 4 — Sum
// Calculate the sum of numbers from 1 to 10.

let sum = 0;

for(let i=1; i<=10; i++){
   sum +=  i;
   console.log(sum);
}


// 5 — Government portal 💻
// Imagine you have 5 application IDs: Print as below : 

// Processing application 1
// Processing application 2
// Processing application 3
// Processing application 4
// Processing application 5



for(let i=1; i<=5; i++){
  console.log(`Processing application ${i}`);
}

