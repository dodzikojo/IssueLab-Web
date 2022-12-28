
let currentlyDisplayedValue;
var noOfSelectedUsers = 2;
var perUserMonthlyPrice = 10;	//20
var perUserYearlyPrice = 8.5; //18
var isMonthly = true;

var slide = document.getElementById('slide');
var teamPriceValue = document.getElementById("teamPriceValue");

var usersCount = document.getElementById("usersCount");
var priceInfoDetails = document.getElementById("priceInfoDetails");

var monthlySubRadio = document.getElementById('monthlySubRadio');
var annualSubRadio = document.getElementById('annualSubRadio');

var teamPriceValueText = document.getElementById("teamPriceValueText");

runCalculation();

slide.onchange = function() {
    runCalculation();
}

function runCalculation(){
    if (isMonthly) {
        noOfSelectedUsers = slide.value;
         var resultMonthly = noOfSelectedUsers*perUserMonthlyPrice;
         currentlyDisplayedValue = resultMonthly;
         teamPriceValue.innerHTML = "£"+Math.floor(resultMonthly).toString();
         teamPriceValueText.innerHTML = "for "+noOfSelectedUsers+" users per month";

    } else {
        noOfSelectedUsers = slide.value;
         var resultYearly = noOfSelectedUsers*perUserYearlyPrice*12;
         currentlyDisplayedValue = resultYearly;
         teamPriceValue.innerHTML = "£"+Math.floor(resultYearly).toString();
         teamPriceValueText.innerHTML = "for "+noOfSelectedUsers+" users per year";
    }
}

monthlySubRadio.onchange = function() {
    isMonthly = true;
    noOfSelectedUsers = slide.value;
    var resultMonthly = noOfSelectedUsers*perUserMonthlyPrice;
    teamPriceValue.innerHTML = "£"+Math.floor(resultMonthly).toString();
    priceInfoDetails.innerHTML = "Billed at £"+perUserMonthlyPrice+" per User/ Month";
    teamPriceValueText.innerHTML = "for "+noOfSelectedUsers+" users per month";
}

annualSubRadio.onchange = function() {
    isMonthly = false;
    noOfSelectedUsers = slide.value;
    var resultYearly = noOfSelectedUsers*perUserYearlyPrice*12;
    teamPriceValue.innerHTML  = "£"+Math.floor(resultYearly).toString();
    priceInfoDetails.innerHTML = "Billed at £"+perUserYearlyPrice+" per User/ Month";
    teamPriceValueText.innerHTML = "for "+noOfSelectedUsers+" users per year";
}


