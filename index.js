let dis = document.getElementById("dis")
let saveele = document.getElementById("pp")
let c = 0

function count()
{
    c = c + 1
    dis.innerText = c
}
function save(){
    let countstr = c + ' - '
    saveele.textContent += countstr
    dis.textContent = 0
    c = 0
}