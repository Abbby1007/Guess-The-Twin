let array = [8];
const Test = () =>{
    let test = 0;
    let num;
    num = Math.floor(Math.random() * 6)+1;
    document.getElementById("Test").innerHTML = `${num}`;
 let what = array.length;
    document.getElementById("Test2").innerHTML = `Array length: ${what - 1}. Array:${array}`;
    for(let i = 0; i< array.length; i++){
        if(array[i] === num){
            test = 1;
        }
    }
            if(test != 1){
            array.push(num);
        }

}

let question = 1;
let totalPoints = 0;
let problems = [15];
let total = 0;
const questions = () =>{

    //    if(problems.length === 10){

//        document.getElementById("checkAnswer").innerHTML=`STOPPPPPPPPPP`;
// }
    // document.getElementById("question").innerHTML = `Congratulations on finishing. You have ${points} points <br> Would you like to tryagain?`;
if(question == 11){
    document.getElementById("number").innerHTML = `Question 10/10 <br> Points: ${totalPoints}`;
    document.getElementById("question").innerHTML = `<h3>Congratulations on finishing. You finished with ${totalPoints} points <br> Would you like to try again? <br> <br> <a href="1Page.html"><button>Try Again</button></a></h3>`;
}
document.getElementById("continue").style.display = `none`;
        document.getElementById("startButt").style.display = `none`;
        if(question != 11){
document.getElementById("number").innerHTML = `Question ${question}/10 <br> Points: ${totalPoints}`;
        }
        
 
    let test = 0;
    const photos = ["d1.jpg","d2.jpg","d3.jpg"];
    //generate index
 let index = Math.floor(Math.random() * 10);
    //chekc if numebr is already useds
 for(let i = 0; i< problems.length; i++){
        if(problems[i] === index){
            test = 1;
        }
 }
let newIndex = index;

    if(test == 1){
        questions();
    }
        else if(test != 1){
            problems.push(index);
            total +=1;
            question += 1;
            if(index === 0){
                question1();
            }
            else if(index === 1){
                question2();
            }
            else if(index === 2){
                question3();
            }
            else if(index === 3){
                question4();
            }
            else if(index === 4){
                question5();
            }
            else if(index === 5){
                question6();
            }    
            else if(index === 6){
                question7();
            }
            else if(index === 7){
                question8();
            }
            else if(index === 8){
                question9();
            }
            else if(index === 9){
                question10();
            }
            else{
                document.getElementById("question").innerHTML=`NUMBER ISN"T HERE :(`;   
            }
        }

}


const checkQuestion = (num) =>{

    // Determine if the user is correct
    let points = 0;
if(document.getElementById("rAbigail").checked){
    points += 1;
}
if(document.getElementById("rAdriyel").checked){
    points += 3;
}
if(document.getElementById("lAbigail").checked){
    points += 4;
}
if(document.getElementById("lAdriyel").checked){
    points += 7;
}
// check if it is question 1
 // left Adriyel + Right Abigail = 7 + 1 = 8
if(num === 1){
    if(points === 8){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
 // left Adriyel + Right Abigail = 7 + 1 = 8
else if(num === 2){
    if(points === 8){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
// left Adriyel + Right Abigail = 7 + 1 = 8
else if(num === 3){
    if(points === 8){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
//Left Abigail and Right ADriyel = 4 + 3 = 7
else if(num === 4){
    if(points === 7){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
//Left Abigail and Right ADriyel = 4 + 3 = 7
else if(num === 5){
    if(points === 7){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
// left Adriyel + Right Abigail = 7 + 1 = 8
else if(num === 6){
    if(points === 8){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
//Left Abigail and Right ADriyel = 4 + 3 = 7
else if(num === 7){
    if(points === 7){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
// left Adriyel + Right Abigail = 7 + 1 = 8
else if(num === 8){
    if(points === 8){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
// left Adriyel + Right Abigail = 7 + 1 = 8
else if(num === 9){
    if(points === 8){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
//Left Abigail and Right ADriyel = 4 + 3 = 7
else if(num === 10){
    if(points === 7){
        document.getElementById("checkAnswer").innerHTML = `<p id="correct">Corect Answers +1 point</p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
        totalPoints += 1;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `<p id="wrong">Wrong Answers :( no point </p>`;
        document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
}
    else{
        document.getElementById("checkAnswer").innerHTML = `Not a valid Numbers`;
                document.getElementById("submit").style.display = `none`;
        document.getElementById("continue").style.display = `block`;
    }
//     // contineu button appears

document.getElementById("number").innerHTML = `Question ${question-1}/10 <br> Points: ${totalPoints}`;
 
}
const continueButt = () => {
    // move on to next question, while also claering the checkanswer text
    document.getElementById("checkAnswer").innerHTML = ` `;
    document.getElementById("continue").style.display = `none`;
    questions();

}
//Question 1 Function
const question1 = () => {
    document.getElementById("question").innerHTML=`<img src="photo1.JPG"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(1)">Submit</button>`;
}

//Question 2 Function
const question2 = () => {
    document.getElementById("question").innerHTML=`<img src="photo2.JPG"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(2)">Submit</button>`;

}

//Question 3 Function
const question3 = () => {
    document.getElementById("question").innerHTML=`<img src="photo3.JPG"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(3)">Submit</button>`;
}

//Question 4 Function
const question4 = () => {
    document.getElementById("question").innerHTML=`<img src="photo4.JPG"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(4)">Submit</button>`;
}

//Question 5 Function
const question5 = () => {
    document.getElementById("question").innerHTML=`<img src="photo5.JPG"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(5)">Submit</button>`;
}

//Question 6 Function
const question6 = () => {
    document.getElementById("question").innerHTML=`<img src="photo6.jpg"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(6)">Submit</button>`;
}

//Question 7 Function
const question7 = () => {
    document.getElementById("question").innerHTML=`<img src="photo7.jpg"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(7)">Submit</button>`;
}

//Question 8 Function
const question8 = () => {
    document.getElementById("question").innerHTML=`<img src="photo8.jpg"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(8)">Submit</button>`;
}

//Question 9 Function
const question9 = () => {
    document.getElementById("question").innerHTML=`<img src="photo9.jpg"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(9)">Submit</button>`;
}

//Question 10 Function
const question10 = () => {
    document.getElementById("question").innerHTML=`<img src="photo10.JPG"> <br> 
    <p> Who is on the Right</p>
    <form>
        
        <!-- Right Abigail equals 1 point -->
        <input type="checkbox" id="rAbigail" name="rAbigail" value="rAbigail">
        <label for="rAbigail">Abigail</label> 

        <!-- CORRECT -->
         <!-- Right Adriyel equals 2 points -->
        <input type="checkbox" id="rAdriyel" name="rAdriyel" value="rAdriyel">
        <label for="rAdriyel">Adriyel</label>
    </form>
<!-- 5 is the correct total -->
    <p> Who is on the Left</p>
    <form>
        <!-- CORRECT -->
        <!-- Left Abigail equals 3 points -->
        <input type="checkbox" id="lAbigail" name="lAbigail" value="lAbigail">
        <label for="lAbigail">Abigail</label> 
        <!-- left Adriyel equals 4 points -->
        <input type="checkbox" id="lAdriyel" name="lAdriyel" value="lAdriyel">
        <label for="lAdriyel">Adriyel</label>
    </form>
<br>
    <button id="submit" onclick="checkQuestion(10)">Submit</button>`;
}