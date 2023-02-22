let question = document.getElementById("question");
let answerText = document.querySelectorAll(".answer")
let option = document.querySelectorAll(".inp");
let btn = document.getElementById("btn");
let reload = document.getElementById("btn_reload");

question.innerHTML = arrQuestion.first

answerText[0].innerHTML = answerArr.messi
answerText[1].innerHTML = answerArr.neymar
answerText[2].innerHTML = answerArr.holland
let result = 0;
btn.onclick = () => {

    

        if(option[0].checked && question.innerHTML == arrQuestion.first){

            question.innerHTML = arrQuestion.second

            answerText[0].innerHTML = answerArr.Chrome
            answerText[1].innerHTML = answerArr.Safari
            answerText[2].innerHTML = answerArr.Mosaic
            result = 25
           
            
        }
        else if(option[1].checked && question.innerHTML == arrQuestion.first){

            question.innerHTML = arrQuestion.second

            answerText[0].innerHTML = answerArr.Chrome
            answerText[1].innerHTML = answerArr.Safari
            answerText[2].innerHTML = answerArr.Mosaic
            result = 0
           
            
        }
        else if(option[2].checked && question.innerHTML == arrQuestion.first){

            question.innerHTML = arrQuestion.second

            answerText[0].innerHTML = answerArr.Chrome
            answerText[1].innerHTML = answerArr.Safari
            answerText[2].innerHTML = answerArr.Mosaic
            result = 0
           
            
        }
        else if(option[2].checked && question.innerHTML == arrQuestion.second ){

            question.innerHTML = arrQuestion.third

            answerText[0].innerHTML = answerArr.ang
            answerText[1].innerHTML = answerArr.kit
            answerText[2].innerHTML = answerArr.fr
            result = result + 25
        
            
        }

        else if(option[0].checked && question.innerHTML == arrQuestion.second ){

            question.innerHTML = arrQuestion.third

            answerText[0].innerHTML = answerArr.ang
            answerText[1].innerHTML = answerArr.kit
            answerText[2].innerHTML = answerArr.fr
        
            
        }
        else if(option[1].checked && question.innerHTML == arrQuestion.second ){

            question.innerHTML = arrQuestion.third

            answerText[0].innerHTML = answerArr.ang
            answerText[1].innerHTML = answerArr.kit
            answerText[2].innerHTML = answerArr.fr
        
            
        }

        else if(option[2].checked && question.innerHTML == arrQuestion.third ){

            question.innerHTML = arrQuestion.fourth

            answerText[0].innerHTML = answerArr.poet
            answerText[1].innerHTML = answerArr.foot
            answerText[2].innerHTML = answerArr.dream
            
        
            
        }

        else if(option[0].checked && question.innerHTML == arrQuestion.third ){

            question.innerHTML = arrQuestion.fourth

            answerText[0].innerHTML = answerArr.poet
            answerText[1].innerHTML = answerArr.foot
            answerText[2].innerHTML = answerArr.dream
            result = result + 25
        
            
        }
        else if(option[1].checked && question.innerHTML == arrQuestion.third ){

            question.innerHTML = arrQuestion.fourth

            answerText[0].innerHTML = answerArr.poet
            answerText[1].innerHTML = answerArr.foot
            answerText[2].innerHTML = answerArr.dream
        
            
        }

        else if(option[0].checked && question.innerHTML == arrQuestion.fourth){

            result = result + 25
            question.innerHTML = `Вы ответили на все вопросы, Ваш результат ${result}  из 100 балов ` 
            answerText[0].innerHTML =""
            answerText[1].innerHTML = ""
            answerText[2].innerHTML = ""
            option[0].style.display = "none"
            option[1].style.display = "none"
            option[2].style.display = "none"
            btn.style.display = "none"
            reload.style.display = "block"

           
        }
        else if(option[1].checked && question.innerHTML == arrQuestion.fourth){

            question.innerHTML = `Вы ответили на все вопросы, Ваш результат ${result} из 100 балов` 
            answerText[0].innerHTML =""
            answerText[1].innerHTML = ""
            answerText[2].innerHTML = ""
            option[0].style.display = "none"
            option[1].style.display = "none"
            option[2].style.display = "none"
            btn.style.display = "none"
            reload.style.display = "block"
           
        }
        else if(option[2].checked && question.innerHTML == arrQuestion.fourth){

            question.innerHTML = `Вы ответили на все вопросы, Ваш результат ${result} из 100 балов` 
            answerText[0].innerHTML =""
            answerText[1].innerHTML = ""
            answerText[2].innerHTML = ""
            option[0].style.display = "none"
            option[1].style.display = "none"
            option[2].style.display = "none"
            btn.style.display = "none"
            reload.style.display = "block"
           
        }
    
}

reload.onclick = () => {


    location.reload()

}