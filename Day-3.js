                //  Day 3: Conditions


let marks = 80;
let studentName = "Sandhya";

if(marks <= 100 && marks >= 90){
   console.log(` ${studentName} scored ${marks} marks and received Grade A+.`);
}
else if(marks <= 89 && marks >= 80){
   console.log(` ${studentName} scored ${marks} marks and received Grade A.`);
}
else if(marks <= 79 && marks >= 70){
   console.log(` ${studentName} scored ${marks} marks and received Grade B.`);
}
else if(marks <= 69 && marks >= 60){
   console.log(` ${studentName} scored ${marks} marks and received Grade C.`);
}
else if(marks <= 59 && marks >= 50){
   console.log(` ${studentName} scored ${marks} marks and received Grade D.`);
}
else if(marks > 0 && marks < 50 ){
   console.log(` ${studentName} scored ${marks} marks and received Grade E.`);
}
else {
   console.log(` ${studentName} scored ${marks} marks and received Grade F.`);
}