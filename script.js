var tablinks = document.getElementsByClassName("title-links")
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function formValidation() {
    flag = true;

    if (document.myForm.Message.value == "") {
        alert("Please fill our Feedback!");
        flag = false;
    }
    return flag;
}

function closeForm() {
    document.getElementById("myForms").style.display = "none";
}

function openForm() {
    document.getElementById("myForms").style.display = "block";
}


function subValidation() {
    flag = true;

    if (document.myForms.email.value == "") {
        alert("Please fill our your Email Address!");
        flag = false;
    }

    if (document.myForms.num.value == "") {
        alert("Please fill our your Phone Number!");
        flag = false;
    }
    return flag;
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxPoXlho22GRBSxkAcYRHImFiZaMnQnaaJdgM6g4qKb_N6o90SG-GWWtC78xc1lOSxMKA/exec'
const contact = document.forms['myForm']
contact.addEventListener('submit', e => {
    e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(contact)})
        .then(response => document.getElementsByClassName("btn").disabled = true, alert("Thank you for your time! Your details have been submitted!" ),  window.location.reload())
        .catch(error => error('Error!', error.message))
})

const scriptURLforms = 'https://script.google.com/macros/s/AKfycbzSYRL9pTwWqEZdgMFygUA9CT5Je5odsY6gEto14UlmEUmXR2ClnX32s3URaJsBniJxzw/exec'
const forms = document.forms['myForms']
forms.addEventListener('submit', e => {
    e.preventDefault()
        fetch(scriptURLforms, { method: 'POST', body: new FormData(forms)})
        .then(response => document.getElementsByClassName("btn").disabled = true, alert("Thank you for your time! Your details have been subscribe!" ),  window.location.reload())
        .catch(error => error('Error!', error.message))
})

let mybutton = document.getElementById("BtnTop");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

