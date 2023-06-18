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


// Get all toggle buttons on the page
var toggleButtons = document.getElementsByClassName('toggle-button');

// Iterate through each toggle button
for (var i = 0; i < toggleButtons.length; i++) {
  // Attach click event listener to each button
  toggleButtons[i].addEventListener('click', function() {
    // Get the sibling element with the additional information
    var info = this.previousElementSibling;

    // Toggle the visibility of the additional information
    if (info.style.display === 'none') {
      info.style.display = 'block';
      this.textContent = 'Hide Additional Info';
    } else {
      info.style.display = 'none';
      this.textContent = 'Toggle Additional Info';
    }
  });
}



function validateForm() {
      // Clear previous error messages
      clearErrors();

      // Get form input values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;

      // Validate name (required field)
      if (name === "") {
        displayError("name", "Name is required");
        return false;
      }

      // Validate email
      if (!validateEmail(email)) {
        displayError("email", "Invalid email address");
        return false;
      }

      // Validate phone number
      if (!validatePhone(phone)) {
        displayError("phone", "Invalid phone number");
        return false;
      }

      // If all validations pass, the form is valid
      return true;
    }

    function validateEmail(email) {
      // Simple email validation using regular expression
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    function validatePhone(phone) {
      // Simple phone number validation using regular expression
      var re = /^\d{10}$/;
      return re.test(phone);
    }

    function displayError(fieldId, errorMessage) {
      // Display error message for a specific field
      var field = document.getElementById(fieldId);
      var errorSpan = document.createElement("span");
      errorSpan.className = "error";
      errorSpan.innerHTML = errorMessage;
      field.parentNode.appendChild(errorSpan);
    }
	


	const button = document.getElementById('button');
	button.addEventListener('click', () => {
	alert('Details saved successfully!');
});
	


function addClass(element, className) {
  element.classList.add(className);
}

// Function to handle the animations
function handleAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach((element) => {
    if (isInViewport(element)) {
      addClass(element, 'fade-in-animation');
    }
  });

}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add event listener to detect when the elements come into view
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




// Get all the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default behavior of jumping to the section
    event.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute('href');

    // Scroll smoothly to the target section
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
