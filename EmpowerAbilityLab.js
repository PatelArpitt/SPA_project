function openTab(tab_name) {
    var tabs = document.getElementsByClassName("nav-tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    var list = document.getElementsByClassName("nav-link");
    for (i = 0; i < list.length; i++) {
        list[i].classList.remove("btn-warning");
        list[i].classList.remove("active");
    }
    document.getElementById(tab_name).style.display = "block";
    document.getElementById(tab_name + 'Tab').classList.add("btn-warning")
    document.getElementById(tab_name + 'Tab').classList.add("active")
}

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}
  
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
}  
  
function checkboxValidate(checked) {
    if (checked) document.getElementById("tell_us_more_div").style.display = "block"
    else document.getElementById("tell_us_more_div").style.display = "none"
}

function checkForm() {
    var email = document.schedule_call.email.value;

    if (!email) {
        document.getElementById("formSubmitTrue").style.display = "none"
        document.getElementById("formSubmitFalse").style.display = "block"
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError('Please enter a valid email address.');
        return false;
    }

    hideError();
    return true;
}

function displayError(message) {
    document.getElementById("formSubmitTrue").style.display = "none";
    document.getElementById("formSubmitFalse").style.display = "block";
    document.getElementById("formSubmitFalse").innerText = message;
}

function hideError() {
    document.getElementById("formSubmitTrue").style.display = "block";
    document.getElementById("formSubmitFalse").style.display = "none";
}