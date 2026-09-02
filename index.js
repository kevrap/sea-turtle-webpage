
let scaleFactor = 1;
const modalImage = document.getElementById('thanks-modal-image');

function scaleImage() {
  //if (scaleFactor === 1) {
  //  scaleFactor = 0.8;
  //} else {
  //  scaleFactor = 1;
  //}
  
  scaleFactor = scaleFactor === 1 ? 0.8 : 1
  modalImage.style.transform = `scale(${scaleFactor})`;
}

const toggleModal = (person) => {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');
  

  modalContent.textContent = `Thank you ${person.name} from ${person.hometown}! The turtles appreciate you.`;
  modal.style.display = "flex";

  const intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
  modal.style.display = "none";
  clearInterval(intervalId);
  }, 4000)

}



// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
// Write your code to manipulate the DOM here
document.body.classList.toggle("dark-mode");
}
// TODO: Register a 'click' event listener for the theme button
themeButton.addEventListener("click", toggleDarkMode);
// Set toggleDarkMode as the callback function.


// Add your query for the sign now button here
let count = 3;
const signNowButton = document.getElementById('sign-now-button');
const addSignature = (person) => {
// Write your code to manipulate the DOM here
    // Get the name of the requester
    //let name = document.getElementById('name').value;
    //let hometown = document.getElementById('hometown').value;

    // Print the name
    const newSig = document.createElement('p');
    newSig.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
    const signaturesSection = document.querySelector('.signatures');
    signaturesSection.appendChild(newSig);

    count = count + 1;
    const counterText = document.getElementById('counter');
    counterText.textContent = `🖊 ${count} people have signed this petition and support this cause.`;

    // Prevent default behavior
    event.preventDefault();
}
// Add a click event listener to the sign now button here
//signNowButton.addEventListener('click', addSignature);

const validateForm = () => {

  let containsErrors = false;
  
  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value, 
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
  
  const person_info = [person.name, person.hometown, person.email]

  // TODO: Loop through all inputs
  for (let i = 0; i < person_info.length; i++) {
    
  // TODO: Validate the value of each input
   if (person_info[i].length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }


  // TODO: Call addSignature() and clear fields if no errors
  else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!person.email.includes('.com')) {
    containsErrors = true;
    petitionInputs[2].classList.add('error');
  } 
  else {
    petitionInputs[2].classList.remove('error');
  }

  if (containsErrors === false) {
    addSignature(person);
    toggleModal(person);

    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    containsErrors = false;
}
}
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const revealableContainers = document.querySelectorAll('.revealable');

document
  .getElementById('reduce-motion-button')
  .addEventListener('click', reduceMotion);


function reduceMotion() {
  animation.revealDistance           = 0;
  animation.initialOpacity           = 1;
  animation.transitionDelay          = '0s';
  animation.transitionDuration       = '0s';
  animation.transitionProperty       = 'none';
  animation.transitionTimingFunction = 'none';

  for (let i = 0; i < revealableContainers.length; i++) {
    const el = revealableContainers[i];
    el.style.transform               = `translateY(${animation.revealDistance}px)`;
    el.style.opacity                 = animation.initialOpacity;
    el.style.transitionProperty      = animation.transitionProperty;
    el.style.transitionDuration      = animation.transitionDuration;
    el.style.transitionDelay         = animation.transitionDelay;
    el.style.transitionTimingFunction= animation.transitionTimingFunction;
  }
}

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    const container = revealableContainers[i];
    if (
      topOfRevealableContainer <
      windowHeight - animation.revealDistance
    ) {
      revealableContainers[i].classList.add('active');
    } else {
       revealableContainers[i].classList.remove('active');
    }
  }
}


const modal = document.getElementById("thanks-modal");
const closeBtn = document.getElementById("close-modal");
function closeModal() {
  modal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);


window.addEventListener('scroll', reveal);
reveal();