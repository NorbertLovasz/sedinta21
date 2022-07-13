//PAS 1 

const scrollButton = document.querySelector('#scroll-top');
const ourData = {
    userName: '',
    phone: '',
    userNameErrors: [],
    phoneErrors: [],
};

const checkFormValidity = () => {
    if (ourData.userName.length > 0 &&
        ourData.phone.length > 0 &&
        ourData.phoneErrors.length === 0 &&
        ourData.userNameErrors.length === 0) {

        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', true);
    }
}

//Pas 2
scrollButton.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth',
    });
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollButton.style.visibility = 'visible';
    } else {
        scrollButton.style.visibility = 'hidden';
    }
});


const usernameInput = document.querySelector('#username');
const errorUsername = document.querySelector('#username-error');

const submitButton = document.querySelector('#submit-button');

usernameInput.addEventListener('change', (event) => {
    const inputValue = event.target.value;
    ourData.userName = inputValue;
    //Adauga un messaj de errorare atunci cand lungimea sirului introdus de utilizator este mai mica de 3 charactere.
    if (inputValue.length < 3) {
        ourData.userNameErrors.push('Please insert a username longer then 3 characters!');
        errorUsername.innerText = 'Please insert a username longer then 3 characters!';
    } else {
        ourData.userNameErrors = [];
        errorUsername.innerText = '';
    }
    checkFormValidity();

});


const phoneInput = document.querySelector('#phone');
const errorPhone = document.querySelector('#phone-error');


phoneInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    ourData.phone = inputValue;
    if (isNaN(inputValue)) {
        ourData.phoneErrors.push('Please insert a valid phone number!');
        errorPhone.innerText = 'Please insert a valid phone number!';
    } else {
        ourData.phoneErrors = [];
        errorPhone.innerText = '';
    }
    checkFormValidity();
});


const form = document.querySelector('form');
const results = document.querySelector('.form-results');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameValue = usernameInput.value;
    console.log(usernameValue);
    const phoneValue = phoneInput.value;
    console.log(phoneValue);
    results.innerText = `Success! A user was created with the username ${usernameValue} and his own phone number: ${phoneValue}`;
});