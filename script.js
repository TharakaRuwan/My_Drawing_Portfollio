let slider = tns({
	container : ".my-slider",
	"slideBy" : "1",
	"speed" : 1000,
	"nav" : false,
	autoplay : true,
	controls : false,
	autoplayButtonOutput: false,
	responsive: {
		1600: {
			items : 5,
			gutter : 20
		},
		1024: {
			items : 4,
			gutter : 20
		},
		768: {
			items : 3,
			gutter : 20		
		},
		480: {
			items : 2
		}
	}
})	



var toggleButtons = document.getElementsByClassName('toggle-button');


for (var i = 0; i < toggleButtons.length; i++) {

  toggleButtons[i].addEventListener('click', function() {

    var info = this.previousElementSibling;


    if (info.style.display === 'none') {
      info.style.display = 'block';
      this.textContent = 'Hide Additional Info';
    } else {
      info.style.display = 'none';
      this.textContent = 'Toggle Additional Info';
    }
  });
}


function addClass(element, className) {
  element.classList.add(className);
}


function handleAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    if (isInViewport(element)) {
      addClass(element, 'fade-in-animation');
    }
  });

}


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


window.addEventListener('scroll', handleAnimations);
window.addEventListener('load', handleAnimations);


const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});	
			
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  link.addEventListener('click', (event) => {

    event.preventDefault();

    const targetId = link.getAttribute('href');

  
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');

let submittedData = []; 

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value
  };

  if (isDuplicateData(formData)) {
    alert('You have already submitted the same details.');
  } else if (validateName(formData.name) && validateEmail(formData.email) && validatePhone(formData.phone) && validateMessage(formData.message)) {
    displaySuccessMessage();
    submittedData.push(formData); 
  } else {
    alert('Please fill out all fields with valid information.');
  }
});

function validateName(name) {
 
  return name.trim() !== '';
}

function validateEmail(email) {
 
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhone(phone) {
  
  return phone.trim() !== '';
}

function validateMessage(message) {

  return message.trim() !== '';
}

function isDuplicateData(formData) {

  return submittedData.some(data => 
    data.name === formData.name &&
    data.email === formData.email &&
    data.phone === formData.phone &&
    data.message === formData.message
  );
}

function displaySuccessMessage() {
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Form submitted successfully!';
  successMessage.style.color = 'green';
  contactForm.appendChild(successMessage);
}



