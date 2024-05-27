var list = document.getElementById("list");
var typing = document.getElementById("typing");
var userInput = document.getElementById("userInput");

function checkEnterKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    var value = userInput.value.trim();
    if (value === "") {
        return;
    }
    list.innerHTML += "<li class='right-side'>" + value + "</li>";

    typing.style.display = "block";

    if (["salam", "assalamualaikum", "salaam"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Walikumassalam</li>";
        }, 2000);
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Kese Ho?</li>";
            typing.style.display = "none";
        }, 4000);
        userInput.value = "";

    } else if (["mein theek", "thik", "theek hon", "mein theek hon", "theek", "allhamdullilah", "theek hon aap sunao"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Mein aapki kia madad krskta hon?</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["admission lena hai", "admission lena tha", "admission", "smit mein admission chaiye", "admission chaiye", "admission chaiye hai", "admission chaiye tha"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Apko kis field mein lena hai admission <br> Web and Mobile App Development <br> Graphic Designing <br> Python programming <br> Digital Marketing</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["web and mobile app development","web and app", "graphic designing", "Python programming", "digital marketing"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Apna naam btaye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["ali", "fareed", "ahmed", "hassan", "taha", "abdullah"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Apni qualification btaye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["matric", "inter", "matriculation", "intermediate", "masters", "graduate"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Apne Father ka naam btaye </li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["ali", "ahmed", "babar", "amir", "shehzad", "shahid"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Apna cnic number dijiye</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["123", "124", "125", "126"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Mubarak ho Apka admission hogya hai <br> apka Roll Number ye he " + (Math.random().toFixed(5)).replace('.', '') + "</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else if (["thanks", "thank", "thanx", "jazakallah", "shukriya", "mehrbani"].indexOf(value.toLowerCase()) !== -1) {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Koi baat nhi koi aur kaam ho tou btayega</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";

    } else {
        setTimeout(function () {
            list.innerHTML += "<li class='left-side'> Mazrat mein aapki baat smjh nhi saka</li>";
            typing.style.display = "none";
        }, 2000);
        userInput.value = "";
    }
} value.trim();