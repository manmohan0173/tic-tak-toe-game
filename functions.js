let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let text=document.querySelector("#text")
let msgcontainer=document.querySelector(".msg")
let newgamebtn=document.querySelector("#newgame")
let turno=true

let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true
    }
}
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false
        box.innerText=""
        msgcontainer.classList.add("hide")
    } 
}

const showwinner=(winner)=>{
       text.innerText=`congrulations winner is ${winner}`
       msgcontainer.classList.remove("hide")
       disabledboxes()

}
const newgame=()=>{
    turno=true
    enableboxes()
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turno){
            box.innerText ="O"
            
            turno=false
        }
        else{
            box.innerText ="X"
            turno=true
        }
        box.disabled=true
        checkwinner()
        
    })
})

const checkwinner =()=>{
    for(let pattern of winpattern){
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText

        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2==val3){
                console.log("winner",val1)
                showwinner(val1)
            }
        }
    }
}

newgamebtn.addEventListener("click",newgame)
resetbtn.addEventListener("click",newgame)