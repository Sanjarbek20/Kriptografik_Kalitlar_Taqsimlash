/** @format */

const resultEl = document.querySelector("#result");
const lengthEl = document.querySelector("#length");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const generateEl = document.querySelector("#generate");
const clipboard = document.querySelector("#clipboard");
const RSAresult = document.querySelector("#RSAresult");
const rsaKeys = document.getElementById("rsaKeys");
const choose_way = document.getElementsByClassName("choose_way");
const waysRsa = document.querySelector("#ways");
const rsaEnc = document.querySelector("#rsaEnc");
const rsaDenc = document.querySelector("#rsaDenc");

// bu joydan rsa shiflashlash oynasiniki
const shifrlash = document.querySelector("#shifrlash");
const EncSubmit = document.querySelector("#EncSubmit");
const tubP = document.querySelector("#p");
const tubQ = document.querySelector("#p");
const EncText = document.querySelector("#EncText");

// deshifrlash uchun sectorlar
const deshifrlash = document.querySelector("#deshifrlash");

console.log(choose_way);

var randomFunc = {
	upper: getRandomUpper,
	lower: getRandomLower,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboard.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Password copied to clipboard");
});

generateEl.addEventListener("click", () => {
	const length = +lengthEl.value;
	const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(
		hasUpper,
		hasLower,
		hasNumber,
		hasSymbol,
		length
	);
});

//Generator Functions

function generatePassword(upper, lower, number, symbol, length) {
	//1. Initialise Password Variable
	let generatePassword = "";
	const typesCount = upper + lower + number + symbol;
	// console.log(typesCount);

	//2. Filter Out Unchecked Types
	const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(
		(item) => Object.values(item)[0]
	);
	// console.log(typesArr);

	if (typesCount == 0) {
		return "";
	}

	//3. Loop Over Length & Call Generator Function for each Type
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			// console.log('funcName: ' + funcName);

			generatePassword += randomFunc[funcName]();
		});
	}

	//4. Add Final Password to the Password Variable and return
	let finalPassword = generatePassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}

let bir = 0;

function copiedResultKey() {
	const textarea = document.createElement("textarea");
	const password = resultEl.innerText;
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
	alert("Password copied to clipboard");
}

RSAresult.addEventListener("click", copiedResultKey);

// rsa keys function starting

rsaKeys.addEventListener("click", () => {
	// choose_way.style.display = "block";

	waysRsa.style.display = "block";
	console.log(choose_way);
	console.log("assa");
});

rsaEnc.addEventListener("click", () => {
	// choose_way.style.display = "block";

	shifrlash.style.display = "block";

	deshifrlash.style.display = "none";
});

rsaDenc.addEventListener("click", () => {
	// choose_way.style.display = "block";

	deshifrlash.style.display = "block";
	shifrlash.style.display = "none";

	console.log(shifrlash);
	console.log("assa");
});
EncSubmit.addEventListener("click", () => {});
