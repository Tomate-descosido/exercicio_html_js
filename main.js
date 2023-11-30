const form = document.getElementById('formulário')


form.addEventListener('submit', function(e){
    e.preventDefault()
    var númeroA = document.getElementById('A')
    var númeroB = document.getElementById('B')
    if(númeroA.value > númeroB.value){
        A.style.border = '2px solid red'
        B.style.border = '2px solid red'
        alert("O número B não é maior que o número A");}
    else{
        A.style.border = '2px solid green'
        B.style.border = '2px solid green'
        alert("Formulário válido")}
})