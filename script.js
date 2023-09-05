const mainTag = document.querySelector("main"); 
let openButtonId = null; 
const buttonsData = [ 
  { text: "+", className: "green", id: "stadium", label: "стадион" }, 
  { text: "+", className: "blue", id: "sasha", label: "дом саши" }, 
  { text: "+", className: "blue", id: "bridge", label: "мост" }, 
  { text: "+", className: "green", id: "hotel1", label: "отель Hyatt" }, 
  { text: "+", className: "blue", id: "toilet", label: "уборная" }, 
  { 
    text: "+", 
    className: "green", 
    id: "nyam_nyam", 
    label: "кашу! кашу! кашу!", 
  }, 
  { text: "+", className: "blue", id: "star", label: "гостиница Звезда" }, 
  { 
    text: "+", 
    className: "green", 
    id: "president", 
    label: "президентское управление", 
  }, 
  { text: "+", className: "blue", id: "yana", label: "дом Яны" }, 
  { text: "+", className: "blue", id: "sleep", label: "спать охота" }, 
]; 
 
const closeBtn = () => { 
  const prevOpenButton = document.getElementById(openButtonId); 
  const prevSpan = prevOpenButton.querySelector("span"); 
  const prevPElement = prevOpenButton.querySelector("p"); 
  prevSpan.innerText = "+"; 
  prevPElement.classList.replace("visible_text", "unvisible_text"); 
  prevOpenButton.classList.remove("padding"); 
} 
 
buttonsData.forEach((data) => { 
  const button = document.createElement("button"); 
  button.classList.add("btn", data.className, 'expand-btn'); 
  button.id = data.id; 
 
  const span = document.createElement("span"); 
  span.classList.add('expand-btn'); 
  span.textContent = data.text; 
 
  const pElement = document.createElement("p"); 
  pElement.classList.add("unvisible_text", "expand-btn"); 
  pElement.textContent = data.label; 
 
  button.appendChild(span); 
  button.appendChild(pElement); 
  button.addEventListener("click", () => { 
    if (openButtonId === data.id) { 
      openButtonId = null; 
      span.innerText = "+"; 
      pElement.classList.replace("visible_text", "unvisible_text"); 
      button.classList.remove("padding"); 
    } else { 
      if (openButtonId !== null) { 
        closeBtn() 
      } 
      openButtonId = data.id; 
      span.innerText = "-"; 
      pElement.classList.replace("unvisible_text", "visible_text"); 
      button.classList.add("padding"); 
    } 
  }); 
  mainTag.appendChild(button); 
}); 
 
mainTag.addEventListener("click", (event) => { 
  const target = event.target; 
  if (!target.classList.contains("expand-btn")) { 
    closeBtn(); 
  } 
});