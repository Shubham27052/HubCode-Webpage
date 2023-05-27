
const url =
  "https://ksomncus27.execute-api.us-east-1.amazonaws.com/dev/contact";


const navbarLinks = document.querySelectorAll('#header-right a');

navbarLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent default link behavior
        const target = document.querySelector(event.target.getAttribute('href')); // Get the target section
        target.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
  });
});



//form validation


const form = document.getElementById('contact-form');
const nameInput = document.getElementById('firstname')
const mobileInput = document.getElementById('mobile');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event)=> {
        event.preventDefault(); // Prevent form submission

        // Validate mobile number
        const mobileValue = mobileInput.value;
        if (!isNumeric(mobileValue)) {
            alert('Please enter a valid mobile number');
            return;
        }

        // Validate email format
        const emailValue = emailInput.value;
        if (!isEmailValid(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }

        const nameValue= nameInput.value 




        //defining the request body
        var request_body = {
            name: nameValue,
            email: emailValue,
            message: mobileValue,
        };

        //fetching the request
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(request_body),
        })
        .then((response) => {
            if (response.status === 200) {
                
              document.getElementById("free-trial-message").innerHTML = "Submit Successful. FREE trial started";
              document.getElementById("free-trial-message").style.backgroundColor = "green";
              form.reset()
            }
          
          })

    })
     










function isNumeric(value) {
    return /^\d{10}$/.test(value);
}

function isEmailValid(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}



const toggleButton= document.getElementById("hamburger");

toggleButton.addEventListener('click',()=>{

    document.getElementById('header-right').classList.toggle('active');
    console.log('done')



})
