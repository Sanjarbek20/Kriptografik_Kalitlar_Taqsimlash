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
const tubsonlar = document.querySelector("#tubsonlar");
const EncSubmit = document.querySelector("#EncSubmit");
const tubP = document.querySelector("#p");
const tubQ = document.querySelector("#q");
const EncText = document.querySelector("#EncText");

// console.log(EncText);
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
	let n = 1000;
	let tubNumber = [];
	for (let i = 2; i < n; i++) {
		tubson = true;
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				tubson = false;
				break;
			}
		}
		if (tubson == true) {
			tubNumber.push(i);
		}
	}

	document.getElementById("tubsonlarParagraph").style.display = "block";
	document.getElementById("tubsonlar").innerHTML = tubNumber;
	// console.log(tubNumber);
});

rsaDenc.addEventListener("click", () => {
	// choose_way.style.display = "block";

	deshifrlash.style.display = "block";
	shifrlash.style.display = "none";
});

EncSubmit.addEventListener("click", () => {
	let EncTextValue = EncText.value;
	let EncInput = EncTextValue.toString();
	let EncArray = EncInput.split("");

	let tubPValue = Number(tubP.value);
	let tubQValue = Number(tubQ.value);

	let Multiple = tubQValue * tubPValue;

	let fn = (tubPValue - 1) * (tubQValue - 1);

	console.log(fn);

	// Fn function topish staeting
	let list = [];
	for (let i = 2; i < fn; i++) {
		tubson = true;
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				tubson = false;
				break;
			}
		}
		if (tubson == true) {
			if (fn % i == 0) {
				list.push(i);
			}
		}
	}
	console.log(list);
	console.log(list.length);

	// e  ning qiymati uchun algaritm

	let functionE = [];
	for (let k = 2; k < fn; k++) {
		tubson = true;
		for (let h = 2; h < list.length; h++) {
			if (k % h == 0) {
				tubson = false;
				break;
			}
		}
		if (tubson == true) {
			functionE.push(k);
		}
	}

	document.getElementById("functionE").style.display = "block";
	document.getElementById("tubsonlarParagraph").style.display = "none";
	document.getElementById("tubsonlar").innerHTML = functionE;

	console.log(functionE);

	/* console.log(EncInput);
	console.log(EncArray); */

	/* console.log(EncText.value);
	console.log(tubP.value);
	console.log(tubQ.value); */

	// tubsonlar.style.display = "none";
});

/* function guardarNumeros() {
	var items = [];
	EncTextInput = document.getElementById("#EncText").value;

	items.push(EncTextInput.split());
	console.log(items);
}
 */
