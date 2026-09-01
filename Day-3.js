                //  Day 3: Conditions


let marks = 80;
let studentName = "Sandhya";
if(marks > 100 || marks < 0){
   console.log("Invalid marks");
}
else if(marks >= 90){
   console.log(` ${studentName} scored ${marks} marks and received Grade A+.`);
}
else if(marks >= 80){
   console.log(` ${studentName} scored ${marks} marks and received Grade A.`);
}
else if(marks >= 70){
   console.log(` ${studentName} scored ${marks} marks and received Grade B.`);
}
else if(marks >= 60){
   console.log(` ${studentName} scored ${marks} marks and received Grade C.`);
}
else if(marks >= 50){
   console.log(` ${studentName} scored ${marks} marks and received Grade D.`);
}
else if(marks < 50 ){
   console.log(` ${studentName} scored ${marks} marks and received Grade F.`);
}
else {
   console.log("Invalid marks");
}

//template literals ${studentName}  and ${marks}