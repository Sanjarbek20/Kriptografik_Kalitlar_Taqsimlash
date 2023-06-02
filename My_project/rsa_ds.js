/** @format */

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

// e uchun input soha
const functionEinput = document.querySelector("#functionEinput");

// console.log(EncText);
// deshifrlash uchun sectorlar
const deshifrlash = document.querySelector("#deshifrlash");
const forDencText = document.querySelector("#forDencText");
const inputD = document.querySelector("#inputD");
const bInput = document.querySelector("#bInput");

// console.log(choose_way);

let tubPValue = Number(tubP.value);
let tubQValue = Number(tubQ.value);
let Multiple = tubQValue * tubPValue;

// rsa keys function starting

rsaKeys.addEventListener("click", () => {
	// choose_way.style.display = "block";

	waysRsa.style.display = "block";
	rsaKeys.style.display = "none";

	console.log(choose_way);
	console.log("assa");
});

rsaEnc.addEventListener("click", () => {
	// choose_way.style.display = "block";

	shifrlash.style.display = "block";
	deshifrlash.style.display = "none";
	rsaKeys.style.display = "none";

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
	/* 
	document.getElementById("tubsonlarParagraph").style.display = "block";
	document.getElementById("tubsonlar").innerHTML = tubNumber; */
	// console.log(tubNumber);
});

rsaDenc.addEventListener("click", () => {
	deshifrlash.style.display = "block";
	shifrlash.style.display = "none";
	rsaKeys.style.display = "none";

	DencSubmit.addEventListener("click", () => {
		let DencTextValue = forDencText.value;
		let DencInput = DencTextValue.toString();
		let DencArray = DencInput.split("");

		let inputDValue = Number(inputD.value);

		let dencFinalResult = [];
		for (let i = 0; i < DencArray.length; i++) {
			let homeDenc = DencArray[i].charCodeAt();
			let dencNumber = homeDenc ** inputDValue % Number(bInput.value);
			console.log(dencNumber, homeDenc, inputDValue);
			// let dc = String.fromCharCode(dencNumber);
			dencFinalResult.push(dencNumber + 64);

			// console.log(String.fromCharCode(dencNumber + 64));
		}

		let dencFinalResultArray = [];
		for (y of dencFinalResult) {
			let messageDenc = String.fromCharCode(y);
			dencFinalResultArray.push(messageDenc);
		}
		let x = dencFinalResultArray.join("");
		console.log(x[0]);
		document.getElementById("dencResultArea").innerHTML = x;
	});

	funcD.addEventListener("mouseup", () => {
		document.getElementById("d").style.display = "block";
	});
	funcD.addEventListener("mouseleave", () => {
		document.getElementById("d").style.display = "none";
	});
});

EncSubmit.addEventListener("click", () => {
	let tubPValue = Number(tubP.value);
	let tubQValue = Number(tubQ.value);

	let Multiple = tubQValue * tubPValue;

	let fn = (tubPValue - 1) * (tubQValue - 1);

	// console.log(fn);

	// Fn function topish starting
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
	/* console.log(list);    // bu joyda fn funksiya uchun list
	console.log(list.length); */

	// e  ning qiymati uchun algaritm

	let functionE = [];
	for (let k = 2; k < fn; k++) {
		tubson = true;
		for (h of list) {
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
	document.getElementById("functionEinput").style.display = "block";
	document.getElementById("functionEinputParag").style.display = "block";

	/* let funcZd = [];
	for (let z = 1; z < 1000; z++) {
		if ((z * x) % fn == 1) {
			funcZd.push(z);
		}
	}

	console.log(funcZd);
	console.log("funcZd");

	document.getElementById("d").style.innerHTML = funcZd; */

	// console.log(functionE);
	/* console.log(EncInput);
	console.log(EncArray); */

	// tubsonlar.style.display = "none";
});

// final button
const EncSubmitFinal = document.querySelector("#EncSubmitFinal");

EncSubmitFinal.addEventListener("click", () => {
	let EncTextValue = EncText.value;
	let EncInput = EncTextValue.toString();
	let EncArray = EncInput.split("");
	console.log(EncArray);

	// e input malumotlar

	let functionEinputValue = functionEinput.value;
	// matematikasini hisoblash
	let tubPValue = Number(tubP.value);
	let tubQValue = Number(tubQ.value);
	let Multiple = tubQValue * tubPValue;
	// matematik hisoblash yakunlandi

	var text = [];
	for (let i = 0; i < EncArray.length; i++) {
		if (EncArray[i].charCodeAt() < 96) {
			d = EncArray[i].charCodeAt() - 64;
		} else {
			d = EncArray[i].charCodeAt() - 96;
			console.log(d);
		}
		b = d ** functionEinputValue % Multiple; // console.log(b);
		let resultShifrMatn = String.fromCharCode(b);
		text.push(b);
	}

	let textSh = [];
	for (x of text) {
		let message = String.fromCharCode(x);
		textSh.push(message);
	}
	let finalResult = textSh.join("");
	/* console.log(text);
	console.log(textSh);
	console.log(finalResult); */
	document.getElementById("EncResultArea").innerHTML = finalResult;

	let fn = (tubPValue - 1) * (tubQValue - 1);
	let funcZd = [];
	for (let z = 1; z < 1000; z++) {
		if ((z * functionEinputValue) % fn == 1) {
			funcZd.push(z);
		}
	}
	console.log(funcZd);
	document.getElementById("d").innerHTML = funcZd;

	document.getElementById("b").innerHTML = Multiple;
});
