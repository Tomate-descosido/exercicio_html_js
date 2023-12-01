const form = document.getElementById('formulário')


form.addEventListener('submit', function(e){
    e.preventDefault()
    var númeroA = parseFloat(document.getElementById('A').value)
    var númeroB = parseFloat(document.getElementById('B').value)
    if(númeroA > númeroB){
        A.style.border = '2px solid red'
        B.style.border = '2px solid red'
        alert("O número B não é maior que o número A");}
    else{
        A.style.border = '2px solid green'
        B.style.border = '2px solid green'
        alert("Formulário válido")}
})