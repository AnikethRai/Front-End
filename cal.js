let n1 = 0
let n2 = 0

let ans = document.getElementById("ans")
function enterno(){
    n1 = parseInt(prompt('Enter number 1 :'))
    n2 = parseInt(prompt('Enter number 2 :'))
    document.getElementById("n1").textContent = n1
document.getElementById("n2").textContent = n2
}
function add(){
    let sum = n1+n2
    ans.textContent = "Sum:"+ sum
    
}
function sub(){
    let diff = n1-n2
    ans.textContent = "Sub:"+ diff
    
}
function mult(){
    let prod = n1*n2
    ans.textContent = "mult:"+ prod
    
}
function div(){
    let divi = n1/n2
    ans.textContent = "div:"+ divi
    
}
