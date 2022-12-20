//define o valor inicial
let count = 0

//seleciona botão e valores
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){
        console.log(e.currentTarget.classList)
        //a constante styles recebe o valor da lista de classe do alvo atual do evento
        const styles = e.currentTarget.classList
        //se styles contiver a palavra "decrease/diminuir"
        if (styles.contains("decrease")){
            count--
        } else if(styles.contains("increase")){
            count++
        } 
        else{
            count = 0
        }

        if(count === 0){
            value.style.color = "black"
        }

        if(count < 0){
            value.style.color = "red"
        }

        if(count > 0){
            value.style.color = "green"
        }
        //altera o conteúdo de texto do valor para o numero atual do contador
        value.textContent = count;
    }) 

    
})