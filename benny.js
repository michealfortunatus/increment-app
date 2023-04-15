let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0



function increment(){
count +=  1
countEl.innerText = count
console.log(count)
//countEl.innerText = 0
//count = 0
}

function save(){
let constr = count + " - " 
saveEL.innerText += constr
console.log(saveEL)
countEl.innerText = 0
count = 0
}
