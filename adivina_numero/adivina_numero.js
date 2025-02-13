/*
Instructiuni ptr crearea jocului

1.Generarea unui numar aleatoriu
2.Inregistrarea numarului a incercarii la care se afla jucatorul incepand de la 1
3.Oferirea jucatorului o posibilitate sa ghiceasca numarul
4.Odata ce nr. este predat, inregistram intr-un loc pentru ca jucatorul sa vada cate incercari are
5.Verificam daca numarul este corect
6.Daca este corect, aratam un mes de felicitari si opriim jucatorul din a mai preda alte raspunsuri si aratam ceva care sa-i permita jucatorului sa ghiceasca din nou
7.Daca este incorect si jucatorul mai are nevoie de incercari, il lasam sa incerce din nou, ii dam posibilitatea sa continue
8.Daca jucatorul nu mai are nici o incercare, ii spunem ca jocul s-a terminat si opreste-l sa mai predea raspunsuri si arata ceva pentru ca acesta sa incerce din nou
9. Cand jocul da restar, asigura te ca totul este restored(ne intoarcem la pasul1)

*/

//Generarea nr aleatoriu

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

//Salvați trimiterea la fiecare paragraf de informație

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");


//Salvati trimiterea imputului si a butonului 

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//Variabile pentru incercari
//A doua variabila ptr salvarea trimiterii butonului reset

let guessCount = 1;
let resetButton;
guessField.focus();

//Functie ptr probarea nr de ghicit

function checkGuess(){
    //Salvam valoarea trimisa in input si ne asiguram ca este un numar cu o clasa numar

    let userGuess = Number(guessField.value);

    //probam daca suntem la prima incercare
  if (guessCount===1){
guesses.textContent = "Intentos Anteriores";
  }
  guesses.textContent += userGuess + " ";

  //In acest bloc vom proba pasii de la 5 la 8 (mai sus)

  if (userGuess === randomNumber){
    lastResult.textContent = "Felicitari! Ai ghicit!"
    lastResult.style.backgroundColor= "pink";
    lowOrHi.textContent= " ";
    setGameOver();
  } else if(guessCount === 10){
    lastResult.textContent = "Finalul Jocului";
    setGameOver();
  } else{
    lastResult.textContent = "Ai gresit!";
    lastResult.style.backgroundColor= " pink";
    if (userGuess < randomNumber){
        lowOrHi.textContent = "Numarul este prea mic!";
    } else if(userGuess > randomNumber)
        lowOrHi.textContent = "Numarul este prea mare!";
  }

  //preparam variabilele ptr urmatoarea incercare
  //golim valoarea numaryului input
  //aplicam focusul unui input

  guessCount++;
  guessField.value="";
  guessField.focus();
}

//Adaugam un listener butonului guessSubmit
guessSubmit.addEventListener("click", checkGuess);

//Declaram functia gameover

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Inca unu";
    document.body.append (resetButton);

    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
guessCount = 1;

const resetParas = document.querySelectorAll(".resultParas p");
for(let i = 0; i < resetParas.length; i++){
    resetParas[i].textContent = "";
}

resetButton.parentNode.removeChild(resetButton);

guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value="";
guessField.focus();

lastResult.style.backgroundColor= "white";
randomNumber = Math.floor(Math.random() * 100) + 1;
}