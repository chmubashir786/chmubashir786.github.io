
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");


});


const nameText = "Mubashir Maqbool";
let index = 0;
const typingTarget = document.getElementById("typing-name");

function typeLetter() {
  typingTarget.textContent = nameText.slice(0, index);  
  if (index < nameText.length) {
    index++;
    setTimeout(typeLetter, 150);
  }
}

window.addEventListener("load", typeLetter);