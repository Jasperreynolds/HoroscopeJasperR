var signs = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];

var images = ["<img src='Images/aquarius.jpg'/>","<img src='Images/pisces.png'/>","<img src='Images/aries.jpg'/>",
    "<img src='Images/taurus.jpg'/>","<img src='Images/gemini.jpg'/>","<img src='Images/cancer.jpg'/>",
    "<img src='Images/leo.jpg'/>","<img src='Images/virgo.png'/>","<img src='Images/libra.png'/>",
    "<img src='Images/scorpio.jpg'/>","<img src='Images/sagittarius.jpg'/>","<img src='Images/capricorn.jpg'/>"];

var messages = ["You are an Aquarius. Does that really mean anything??",
    "You are a Pisces. My friend told me Pisces cry a lot (I hope this horoscope doesn't make you emotional).",
    "You are an Aries. That is the best sign you could have - I swear it's not because I'm an Aries...",
    "Wow, your sign is a bull. Powerful. They also aren't the smartest animals, but hey, that doesn't mean anything.",
    "Gemini. Interesting. If I knew more about astrology maybe I could tell you something worthwhile.",
    "Cancer's are very optimistic people, and they make good friends (I don't know if that's true, just take the complement).",
    "Leo the lion. That's actually a pretty cool sign.",
    "As a virgo, you will encounter a lot of good luck in the year to come. Don't mess it up!",
    "Libra's are very free spirited. You might get into trouble for expressing such open opinions.",
    "Scorpions are very scary. I think your sign is scary, too (please don't hurt me)!",
    "As a Sagittarius, you are very sagacious, which means you are very smart. Not as smart as Mr. Albinson, though (pls give me A).",
    "The capricorn is the last zodiac sign, but it is also the first one."];

function onSubmit(){
    var yourName = document.getElementById("yourName").value;
    if(validateName(yourName) == false){
        return false;
    }
    var monthBorn = document.getElementById("monthBorn").value;
    var dayBorn = document.getElementById("dayBorn").value;
    if(validateDate(dayBorn, monthBorn) == false){
        return false;
    }
    var name = document.getElementById("yourName").value;
    var bday = new Date();
        if((bday.getMonth() == monthBorn) && (bday.getDate() == dayBorn)){
            document.getElementById("userName").innerHTML = "Happy Birthday " + name + "!";
        } else {
            document.getElementById("userName").innerHTML = "Hi " + name + "!";
        }
    var sign =  determineSign(dayBorn, monthBorn);
    var zodiac = document.getElementById("yourSign").innerHTML = "Congratulations! You are a " + signs[sign] + "!";
    document.getElementById("image").innerHTML = images[sign];
    document.getElementById("yourMessage").innerHTML = messages[sign];

    document.getElementById("all").style.display = 'none';
    document.getElementById("reset").style.display = 'inline';


}

function determineSign(dayBorn, monthBorn){
    var sign = "";
    if((monthBorn == 0 && dayBorn >= 20) || (monthBorn == 1 && dayBorn <= 18)){
        sign = 0;
    } else if((monthBorn == 1 && dayBorn >= 19) || (monthBorn == 2 && dayBorn <= 20)){
        sign = 1;
    } else if((monthBorn == 2 && dayBorn >= 21) || (monthBorn == 3 && dayBorn <= 19)){
        sign = 2;
    } else if((monthBorn == 3 && dayBorn >= 20) || (monthBorn == 4 && dayBorn <= 20)){
        sign = 3;
    } else if((monthBorn == 4 && dayBorn >= 21) || (monthBorn == 5 && dayBorn <= 20)){
        sign = 4;
    } else if((monthBorn == 5 && dayBorn >= 21) || (monthBorn == 6 && dayBorn <= 22)){
        sign = 5;
    } else if((monthBorn == 6 && dayBorn >= 23) || (monthBorn == 7 && dayBorn <= 22)){
        sign = 6;
    } else if((monthBorn == 7 && dayBorn >= 23) || (monthBorn == 8 && dayBorn <= 22)){
        sign = 7;
    } else if((monthBorn == 8 && dayBorn >= 23) || (monthBorn == 9 && dayBorn <= 22)){
        sign = 8;
    } else if((monthBorn == 9 && dayBorn >= 23) || (monthBorn == 10 && dayBorn <= 21)){
        sign = 9;
    } else if((monthBorn == 10 && dayBorn >= 22) || (monthBorn == 11 && dayBorn <= 21)){
        sign = 10;
    } else if((monthBorn == 11 && dayBorn >= 22) || (monthBorn == 0 && dayBorn <= 19)){
        sign = 11;
    }
    return sign;
}

function validateName(yourName){
    var validName = true;
    if(yourName == ""){
        validName = false;
    }
    if(validName == false){
        alert("Please enter your name");
        return false;
    }
    return true;
}

function validateDate(dayBorn, monthBorn){
    var validDate = true;
    if((monthBorn == 3 || monthBorn == 5 || monthBorn == 8 || monthBorn == 10) && dayBorn == 31){
        validDate = false;
    }
    if((monthBorn == 1) && (dayBorn == 30 || dayBorn == 31)){
        validDate = false;
    }
    if(validDate == false){
        alert("This date is not valid");
        return false;
    }
    return true;
}

function newEntry(){
    location.reload();
}
