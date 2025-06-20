let boxes=document.querySelectorAll(".box");    
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector("#msg-container");
let msg=document.querySelector("#msg");

let turn0=true; // let the first turn is of 0...
let count=0;

// All the winning patterns...
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// disable furthermore clicks on the box
const disableboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};


// enable furthermore clicks on the box
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.style.color = "";   
        // box.innerText="";
    }
};

// to reset the game..
const resetGame = () =>{
    turn0 =true;  
    count=0;  // when the game reset it starts from 0 again
    enableboxes();  
    boxes.forEach((box) => {
        box.innerText = ""; // Remove any text inside the boxes
    });    // enable clicks
    msgContainer.classList.add("hide");// add the hidden element to hide result when reset or new game...
};


//to show the winner...
const showWinner = (winner) =>{
    if (!msgContainer) {;
        return;
    }
    msg.innerText=`CONGRATULATIONS WINNER IS ${winner}`;   // innerText 
    msgContainer.classList.remove("hide");
    disableboxes();     // disable the  click on the boxes after winning

};

// to show the match is draw..
const draw =() =>{
    if(!msgContainer){
        return;
    }
    msg.innerText="Match Draw";         // innerText 
    msgContainer.classList.remove("hide");// remove the hide element to show the result..
    disableboxes();     // disable the  click on the boxes after draw..
};

//check the winner....
const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        //if all 3 position is not empty and pos1val ,pos2val and pos3val are equal....
        if(pos1Val !=="" && pos2Val!=="" &&  pos3Val!=="" & pos1Val===pos2Val && pos2Val=== pos3Val){
            console.log("Winner",pos1Val);//show winner in console
            showWinner(pos1Val);  // show winner
            return;         // most important..... without return if a winner is detected, 
            // the function still continues to check for a draw, which leads to the incorrect behavior.
    }
   
  
 }
 if (count === 9) {     //after clicking on 9 boxes
    console.log("DRAW");
    draw();                         //call draw function
  } 
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box was clicked");// show box clicked n console
    if(turn0){
        box.innerText = "0";
        box.style.color="black";
        turn0=false;
    }else{
        box.innerText="X";
        box.style.color="white";
        turn0=true;
    }box.disabled=true;
    count++;


    checkWinner();
});
});



newbtn.addEventListener("click",resetGame);     //eventListener to new game button button using reset btn
resetbtn.addEventListener("click",resetGame);   //eventListener to reset button using reset btn