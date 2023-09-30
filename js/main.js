/*----- constants -----*/
const countries = {
    "AD": "Andorra",
    "AE": "United Arab Emirates",
    "AF": "Afghanistan",
    "AG": "Antigua and Barbuda",
    "AI": "Anguilla",
    "AL": "Albania",
    "AM": "Armenia",
    "AO": "Angola",
    "AQ": "Antarctica",
    "AR": "Argentina",
    "AS": "American Samoa",
    "AT": "Austria",
    "AU": "Australia",
    "AW": "Aruba",
    "AX": "\u00c5land Islands",
    "AZ": "Azerbaijan",
    "BA": "Bosnia and Herzegovina",
    "BB": "Barbados",
    "BD": "Bangladesh",
    "BE": "Belgium",
    "BF": "Burkina Faso",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BI": "Burundi",
    "BJ": "Benin",
    "BL": "Saint Barthélemy",
    "BM": "Bermuda",
    "BN": "Brunei Darussalam",
    "BO": "Bolivia",
    "BQ": "Caribbean Netherlands",
    "BR": "Brazil",
    "BS": "Bahamas",
    "BT": "Bhutan",
    "BV": "Bouvet Island",
    "BW": "Botswana",
    "BY": "Belarus",
    "BZ": "Belize",
    "CA": "Canada",
    "CC": "Cocos Islands",
    "CD": "Congo",
    "CF": "Central African Republic",
    "CG": "Republic of the Congo",
    "CH": "Switzerland",
    "CI": "C\u00f4te d'Ivoire",
    "CK": "Cook Islands",
    "CL": "Chile",
    "CM": "Cameroon",
    "CN": "China",
    "CO": "Colombia",
    "CR": "Costa Rica",
    "CU": "Cuba",
    "CV": "Cape Verde",
    "CW": "Cura\u00e7ao",
    "CX": "Christmas Island",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DJ": "Djibouti",
    "DK": "Denmark",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "EE": "Estonia",
    "EG": "Egypt",
    "EH": "Western Sahara",
    "ER": "Eritrea",
    "ES": "Spain",
    "ET": "Ethiopia",
    "EU": "Europe",
    "FI": "Finland",
    "FJ": "Fiji",
    "FK": "Falkland Islands",
    "FM": "Micronesia",
    "FO": "Faroe Islands",
    "FR": "France",
    "GA": "Gabon",
    "GB-ENG": "England",
    "GB-NIR": "Northern Ireland",
    "GB-SCT": "Scotland",
    "GB-WLS": "Wales",
    "GB": "United Kingdom",
    "GD": "Grenada",
    "GE": "Georgia",
    "GF": "French Guiana",
    "GG": "Guernsey",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GL": "Greenland",
    "GM": "Gambia",
    "GN": "Guinea",
    "GP": "Guadeloupe",
    "GQ": "Equatorial Guinea",
    "GR": "Greece",
    "GS": "South Georgia and the South Sandwich Islands",
    "GT": "Guatemala",
    "GU": "Guam",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HK": "Hong Kong",
    "HM": "Heard Island and McDonald Islands",
    "HN": "Honduras",
    "HR": "Croatia",
    "HT": "Haiti",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IM": "Isle of Man",
    "IN": "India",
    "IO": "British Indian Ocean Territory",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JE": "Jersey",
    "JM": "Jamaica",
    "JO": "Jordan",
    "JP": "Japan",
    "KE": "Kenya",
    "KG": "Kyrgyzstan",
    "KH": "Cambodia",
    "KI": "Kiribati",
    "KM": "Comoros",
    "KN": "Saint Kitts and Nevis",
    "KP": "Korea",
    "KR": "Korea, Republic of",
    "KW": "Kuwait",
    "KY": "Cayman Islands",
    "KZ": "Kazakhstan",
    "LA": "Laos",
    "LB": "Lebanon",
    "LC": "Saint Lucia",
    "LI": "Liechtenstein",
    "LK": "Sri Lanka",
    "LR": "Liberia",
    "LS": "Lesotho",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "LV": "Latvia",
    "LY": "Libya",
    "MA": "Morocco",
    "MC": "Monaco",
    "MD": "Moldova",
    "ME": "Montenegro",
    "MF": "Saint Martin",
    "MG": "Madagascar",
    "MH": "Marshall Islands",
    "MK": "North Macedonia",
    "ML": "Mali",
    "MM": "Myanmar",
    "MN": "Mongolia",
    "MO": "Macao",
    "MP": "Northern Mariana Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MS": "Montserrat",
    "MT": "Malta",
    "MU": "Mauritius",
    "MV": "Maldives",
    "MW": "Malawi",
    "MX": "Mexico",
    "MY": "Malaysia",
    "MZ": "Mozambique",
    "NA": "Namibia",
    "NC": "New Caledonia",
    "NE": "Niger",
    "NF": "Norfolk Island",
    "NG": "Nigeria",
    "NI": "Nicaragua",
    "NL": "Netherlands",
    "NO": "Norway",
    "NP": "Nepal",
    "NR": "Nauru",
    "NU": "Niue",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PA": "Panama",
    "PE": "Peru",
    "PF": "French Polynesia",
    "PG": "Papua New Guinea",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PM": "Saint Pierre and Miquelon",
    "PN": "Pitcairn",
    "PR": "Puerto Rico",
    "PS": "Palestine",
    "PT": "Portugal",
    "PW": "Palau",
    "PY": "Paraguay",
    "QA": "Qatar",
    "RE": "Réunion",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "SA": "Saudi Arabia",
    "SB": "Solomon Islands",
    "SC": "Seychelles",
    "SD": "Sudan",
    "SE": "Sweden",
    "SG": "Singapore",
    "SH": "Saint Helena",
    "SI": "Slovenia",
    "SJ": "Svalbard and Jan Mayen Islands",
    "SK": "Slovakia",
    "SL": "Sierra Leone",
    "SM": "San Marino",
    "SN": "Senegal",
    "SO": "Somalia",
    "SR": "Suriname",
    "SS": "South Sudan",
    "ST": "Sao Tome and Principe",
    "SV": "El Salvador",
    "SX": "Sint Maarten (Dutch part)",
    "SY": "Syrian Arab Republic",
    "SZ": "Swaziland",
    "TC": "Turks and Caicos Islands",
    "TD": "Chad",
    "TF": "French Southern Territories",
    "TG": "Togo",
    "TH": "Thailand",
    "TJ": "Tajikistan",
    "TK": "Tokelau",
    "TL": "Timor Leste",
    "TM": "Turkmenistan",
    "TN": "Tunisia",
    "TO": "Tonga",
    "TR": "Turkey",
    "TT": "Trinidad and Tobago",
    "TV": "Tuvalu",
    "TW": "Taiwan",
    "TZ": "Tanzania",
    "UA": "Ukraine",
    "UG": "Uganda",
    "UM": "US Minor Outlying Islands",
    "US": "United States",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VA": "Holy See",
    "VC": "Saint Vincent and the Grenadines",
    "VE": "Venezuela",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "VN": "Vietnam",
    "VU": "Vanuatu",
    "WF": "Wallis and Futuna Islands",
    "WS": "Samoa",
    "XK": "Kosovo",
    "YE": "Yemen",
    "YT": "Mayotte",
    "ZA": "South Africa",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
}
const countriesLowercased = Object.keys(countries).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = countries[key].toLowerCase();
    return newObj;
}, {});


/*----- state variables  -----*/
var score = 0
var countryList = []
var questionNumber = 0 
var imageElement
var selectedCountry 
var tries = 0
var userSelectedNumber

var form = document.getElementById('myForm')
var feedback = document.getElementById("feedback")

var skipButton = document.getElementById('skip')
var restartButton = document.getElementById('restart')
var radios = document.querySelectorAll('input[type=radio]')

var gameStartScreen = document.getElementById("gameStartScreen")
var gameStart = document.getElementById("gameStart")
var gameEnd = document.getElementById('gameEnd') 
/*----- functions  -----*/
function homeScreen() {
    gameStartScreen.hidden = false
    gameStart.hidden = true
    gameEnd.hidden = true


}

function Restart() {
    homeScreen()
    score = 0
    countryList = []
    for (country in countries) {
        countryList.push(country.toLowerCase()); 
    }
    tries = 0
    questionNumber = 0 
    updateFlag()
    updateScore()
    skipButton.disabled = false 
    for (let element of form.elements) {
        element.disabled = false
      }

}

function updateScore() {
    scoreText = document.getElementById("score")
    scoreText.innerHTML = `Score: ${score}`
    questionText = document.getElementById("question_number")
    /* need to define the userSleected Number first */ 
    questionText.innerHTML = `Question: ${questionNumber}/${userSelectedNumber}`
}


function updateFlag() {
    const random = Math.floor(Math.random() * countryList.length);
    selectedCountry = countriesLowercased[countryList[random]]
    countryList.pop(countryList[random])
    console.log(selectedCountry)
    if (imageElement) {
        imageElement.src = `../svg/${countryList[random]}.svg`;
} else {
    console.log("ERROR") /* error handling */ 
}
}

function nextQuestion() {
    questionNumber += 1
    updateScore()
    updateFlag() 
    document.querySelector('input[name="guess"]').value  = ''
    feedback.innerHTML = "Fill in your answer here:"
}

function gameEndCheck() {
    if (questionNumber == userSelectedNumber) {
        skipButton.disabled = true 
        for (let element of form.elements) {
            element.disabled = true
          }
        /* game end logic */ 
        gameEnd.hidden=false 
        gameStart.hidde = true
        gameStartScreen.hidden = true
        document.querySelector('#gameEnd > h2').innerHTML= `Your score is ${score}/${questionNumber}`
        /* restart doesnt work */ 
        }
    
}


/*----- event listeners  -----*/


radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.checked) {
          userSelectedNumber = this.value
          document.getElementById("gameStartScreen").hidden=true
          document.getElementById("gameStart").hidden=false
          radios.checked = false
      }
    });
  });

function gameSwitchScreen() {

}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("imageid").style.display = "block"
    imageElement = document.getElementById("imageid");
    Restart() 

    form.addEventListener('submit', function(event) {
        var userInput = document.querySelector('input[name="guess"]').value;
        event.preventDefault()
        /* how can I allow more dynamic questions */ 
        if (userInput.toLowerCase().trim() === selectedCountry) {
            feedback.innerHTML = "Correct"
            score += 1
            console.log(userSelectedNumber)
            gameEndCheck()
            nextQuestion() 
        } else if (userInput.toLowerCase().trim() === '') {
            document.querySelector('input[name="guess"]').value  = ''
            feedback.innerHTML = "Please enter a guess";
        }
        else {
            console.log("check")
            feedback.innerHTML = "Try again"
            document.querySelector('input[name="guess"]').value  = ''
            tries += 1 
        } 
    })
});

skipButton.addEventListener('click', nextQuestion);
skipButton.addEventListener('click', gameEndCheck);
restartButton.addEventListener('click', Restart);

