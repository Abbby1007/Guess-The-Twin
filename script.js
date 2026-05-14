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

let problems = [15];
let total = 0;
const questions = () =>{
    // document.getElementById("continue").style.display = `block`;
//        if(problems.length === 10){

//        document.getElementById("checkAnswer").innerHTML=`STOPPPPPPPPPP`;
// }
        document.getElementById("startButt").style.display = `none`;
        document.getElementById("number").innerHTML = `Question ${question}/10`;
 
    let test = 0;
    const photos = ["d1.jpg","d2.jpg","d3.jpg"];
    //generate index
 let index = Math.floor(Math.random() * 10);
    // document.getElementById("Test").innerHTML=`${index} Array values: ${problems}`;

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


// Determine if the user is correct
    let points = 0;
if(document.querySelector("rAbigail").checked){
    points += 1;
}
if(document.querySelector("rAdriyel").checked){
    points += 2;
}
if(document.querySelector("lAbigail").checked){
    points += 3;
}
if(document.querySelector("lAdriyel").checked){
    points += 4;
}

if(points === 5){
document.getElementById("checkAnswer").innerHTML = `IS CORRECT +1 point`;
}
else{
document.getElementById("checkAnswer").innerHTML = `IS WRONG no points :(`;
}

}


const checkQuestion = (num) =>{
document.getElementById("Test").innerHTML = `This was Checked`;

    // Determine if the user is correct
    let points = 0;
if(document.getElementById("rAbigail").checked){
    points += 1;
}
if(document.getElementById("rAdriyel").checked){
    points += 2;
}
if(document.getElementById("lAbigail").checked){
    points += 3;
}
if(document.getElementById("lAdriyel").checked){
    points += 4;
}
// check if it is question 1
if(num === 1){
    if(points === 5){
        document.getElementById("checkAnswer").innerHTML = `IS CORRECT +1 point`;
        document.getElementById("submit").style.display = `none`;
    }
    else{
        document.getElementById("checkAnswer").innerHTML = `IS WRONG no points :(`;
        document.getElementById("submit").style.display = `none`;
    }
}
    else{
        document.getElementById("checkAnswer").innerHTML = `Not a valid Numbers`;
    }
//     // contineu button appears
// document.getElementById("continue").style.display = `block`;

}
const continueButt = () => {
    // move on to next question, while also claering the checkanswer text
    questions();
    document.getElementById("checkAnswer").innerHTML = ``;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;

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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
}

//Question 7 Function
const question7 = () => {
    document.getElementById("question").innerHTML=`<img src="photo7.JPG"> <br> 
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
}

//Question 9 Function
const question9 = () => {
    document.getElementById("question").innerHTML=`<img src="photo9.JPG"> <br> 
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
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
    <button id="submit" onclick="checkQuestion(1)">Submit</button>
    <button id="continue" onclick="continueButt()" >CONTINUE</button>`;
}