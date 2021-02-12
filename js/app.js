// Side Bar Pop Out

const hamburgerButton = document.querySelector('#hamburger-button');
const sideNavBar = document.querySelector('.side-nav-bar');

hamburgerButton.addEventListener('click', () => {
	hamburgerButton.classList.toggle('open');
	sideNavBar.classList.toggle('side-nav-bar-active');
});

window.addEventListener('click', (e) => {
	if (!hamburgerButton.contains(e.target)) {
		sideNavBar.classList.remove('side-nav-bar-active');
		hamburgerButton.classList.remove('open');
	}
});

// Scrolling Ingredient List

const ingredientLists = document.querySelectorAll('.ingredient-list-inner');
const ingredientButtonLeft = document.querySelector('.ingredient-button-left');
const ingredientButtonRight = document.querySelector('.ingredient-button-right');
let ingredientCurrentList = 1;

ingredientButtonRight.addEventListener('click', () => {
	if (ingredientCurrentList != 3) {
		ingredientLists.forEach((ingredientList) => {
			ingredientList.style.transform = `translateX(${ingredientCurrentList * -170}px)`;
		});
		ingredientCurrentList++;
	}
});
ingredientButtonLeft.addEventListener('click', () => {
	if (ingredientCurrentList != 1) {
		ingredientCurrentList--;
		ingredientLists.forEach((ingredientList) => {
			ingredientList.style.transform = `translateX(${(ingredientCurrentList - 1) * -170}px)`;
		});
	}
});

// Updating Zoomed Ingredient

const ingredientIcons = document.querySelectorAll('.ingredient-icon-outer');
const zoomedIngredientIcon = document.querySelector('.zoomed-ingredient-icon-png');
const zoomedIngredientTitle = document.querySelector('.zoomed-ingredient-title');
const zoomedIngredientDescription = document.querySelector('.zoomed-ingredient-description');

const ingredientDescriptions = [
	'Kiwis contain a lot of antioxidants which help remove free radicals from the body',
	"Jalapenos are rich in Vitamin A, C, and Potassium, it's carotene is an antioxidant and the capsaicin promotes blood flow",
	"White vinegar's acetic acid content, can help control blood sugar control and reduce cholesterol",
	'Tomatillos contain dietary fiber, antioxidants, and vitamins and is a good source of copper, iron, phosphorous, and manganese',
	"Onions are rich in soluble dietary fiber it's allicin reduces cholesterol production",
	'Apples contain pectin and a lot of fiber which helps maintain good gut health, boost heart health and promote weight loss',
	'Limes provide a healthful dose of vitamin C and have antibacterial and antioxidant properties',
	"The process of fermenting soybeans releases beneficial peptides which may help regulate the body's funcitons",
	'Cilantro is one of the richest herbal sources for Vitamin K which assists in clotting and bone health',
	'Ginger seems to aid digestion and nausea and evidence it may ease osteoarthritis pain',
	'Garlic has been shown to produce H2S which relaxes blood vessels and increases blood flow, reducing the risk of heart disease',
	'Cinnamon can be good for people with diabetes as studies have suggested it lowers blood sugar as well as cholesterol',
	'Cumin has been used to help indigestion and diarrhea by limiting the growth of harmful bacteria',
	'Nutmeg may help protect against the signs of aging and serious conditions such as cancer, heart disease, and liver disease',
	'Turmeric contains cucumin which may help reduce inflammation and protect againt types of colities and high cholesterol',
];
document.querySelector('.zoomed-ingredient-description').innerHTML = ingredientDescriptions[0];
NodeList.prototype.indexOf = Array.prototype.indexOf;
ingredientIcons.forEach((ingredientIcon) => {
	ingredientIcon.addEventListener('click', (e) => {
		ingredientIcons[ingredientDescriptions.indexOf(zoomedIngredientDescription.innerHTML)].style.backgroundColor =
			'white';
		ingredientIcons[
			ingredientDescriptions.indexOf(zoomedIngredientDescription.innerHTML)
		].children[0].src = `${ingredientIcons[
			ingredientDescriptions.indexOf(zoomedIngredientDescription.innerHTML)
		].children[0].src.slice(0, -5)}2.png`;
		zoomedIngredientIcon.src = `${ingredientIcon.children[0].src.slice(0, -5)}3.png`;
		zoomedIngredientTitle.innerHTML = ingredientIcon.parentNode.children[1].innerHTML;
		zoomedIngredientDescription.innerHTML = ingredientDescriptions[ingredientIcons.indexOf(ingredientIcon)];
		ingredientIcon.children[0].src = `${ingredientIcon.children[0].src.slice(0, -5)}3.png`;
		ingredientIcon.style.backgroundColor = 'var(--light-green)';
	});
});

// Shop Buttons

const individualButton = document.querySelector('#shop-size-individual');
const caseButton = document.querySelector('#shop-size-case');
const shopImage = document.querySelector('.shop-image').children[0];
const shopImageDescription = document.querySelector('.shop-image-description-size');
const priceAmount = document.querySelector('#price-amount-amount');
const amountAmount = document.querySelector('#amount-amount');

individualButton.addEventListener('click', () => {
	caseButton.classList.remove('selected-size-choice');
	individualButton.classList.add('selected-size-choice');
	shopImage.src = './img/spruce-bottle-mobile.png';
	shopImageDescription.innerHTML = 'Individual';
	priceAmount.innerHTML = 7;
	amountAmount.innerHTML = 1;
});

caseButton.addEventListener('click', () => {
	caseButton.classList.add('selected-size-choice');
	individualButton.classList.remove('selected-size-choice');
	shopImage.src = './img/spruce-case-mobile.png';
	shopImageDescription.innerHTML = 'Case';
	priceAmount.innerHTML = 70;
	amountAmount.innerHTML = 1;
});

const decreaseAmount = document.querySelector('#amount-minus');
const currentPrice = document.querySelector('#price-amount-amount');
const increaseAmount = document.querySelector('#amount-plus');

decreaseAmount.addEventListener('click', () => {
	if (amountAmount.innerHTML != 1) {
		amountAmount.innerHTML = parseInt(amountAmount.innerHTML) - 1;
		if (individualButton.classList.contains('selected-size-choice')) {
			currentPrice.innerHTML = parseInt(currentPrice.innerHTML) - 7;
		} else {
			currentPrice.innerHTML = parseInt(currentPrice.innerHTML) - 70;
		}
	}
});

increaseAmount.addEventListener('click', () => {
	if (!(amountAmount.innerHTML >= 11)) {
		amountAmount.innerHTML = parseInt(amountAmount.innerHTML) + 1;
		if (individualButton.classList.contains('selected-size-choice')) {
			currentPrice.innerHTML = parseInt(currentPrice.innerHTML) + 7;
		} else {
			currentPrice.innerHTML = parseInt(currentPrice.innerHTML) + 70;
		}
	}
});

// Testimonial Slider

const reviewHeader = document.querySelector('.review-header');
const reviewBody = document.querySelector('.review-body');
const reviewName = document.querySelector('.review-name');
const reviewTitle = document.querySelector('.review-title');
const reviewButtonLeft = document.querySelector('.review-button-left');
const reviewButtonRight = document.querySelector('.review-button-right');
const reviewData = [
	{ id: 0, header: 'Awesome!', body: 'This sauce is really good', name: 'Mary', title: 'Engineer' },
	{ id: 1, header: 'Bad!', body: 'Wow, I put it on everything', name: 'Brad', title: 'Owner' },
	{ id: 2, header: 'Crate!', body: "I can't wait for the next flavor", name: 'Tommy', title: 'Traveler' },
];

//	<div class="review-header"> Amazing Sauce!
//	<div class="review-body"> Lorem Ipsum is simply dummy
//  <div class="review-name-title">
//		<div class="review-name"> Henrik Holmgren
//		<div class="review-title"> Chef, Chicago

let currentReviewId = 0;

reviewButtonRight.addEventListener('click', () => {
	if (currentReviewId == reviewData.length - 1) {
		currentReviewId = -1;
	}
	reviewHeader.style.opacity = 0;
	reviewHeader.style.transform = 'translateX(-100px)';
	reviewBody.style.opacity = 0;
	reviewBody.style.transform = 'translateX(-100px)';
	reviewName.style.opacity = 0;
	reviewName.style.transform = 'translateX(-100px)';
	reviewTitle.style.opacity = 0;
	reviewTitle.style.transform = 'translateX(-100px)';
	currentReviewId++;
	setTimeout(() => {
		reviewHeader.style.transform = 'translateX(200px)';
		reviewBody.style.transform = 'translateX(200px)';
		reviewName.style.transform = 'translateX(200px)';
		reviewTitle.style.transform = 'translateX(200px)';
		setTimeout(() => {
			reviewHeader.innerHTML = reviewData[currentReviewId].header;
			reviewHeader.style.opacity = 1;
			reviewHeader.style.transform = 'translateX(0px)';
			reviewBody.innerHTML = reviewData[currentReviewId].body;
			reviewBody.style.opacity = 1;
			reviewBody.style.transform = 'translateX(0px)';
			reviewName.innerHTML = reviewData[currentReviewId].name;
			reviewName.style.opacity = 1;
			reviewName.style.transform = 'translateX(0px)';
			reviewTitle.innerHTML = reviewData[currentReviewId].title;
			reviewTitle.style.opacity = 1;
			reviewTitle.style.transform = 'translateX(0px)';
		}, 500);
	}, 500);
});

reviewButtonLeft.addEventListener('click', () => {
	if (currentReviewId == 0) {
		currentReviewId = reviewData.length - 1;
	}
	reviewHeader.style.opacity = 0;
	reviewHeader.style.transform = 'translateX(200px)';
	reviewBody.style.opacity = 0;
	reviewBody.style.transform = 'translateX(200px)';
	reviewName.style.opacity = 0;
	reviewName.style.transform = 'translateX(200px)';
	reviewTitle.style.opacity = 0;
	reviewTitle.style.transform = 'translateX(200px)';
	currentReviewId--;
	setTimeout(() => {
		reviewHeader.style.transform = 'translateX(-300px)';
		reviewBody.style.transform = 'translateX(-300px)';
		reviewName.style.transform = 'translateX(-300px)';
		reviewTitle.style.transform = 'translateX(-300px)';
		setTimeout(() => {
			reviewHeader.innerHTML = reviewData[currentReviewId].header;
			reviewHeader.style.opacity = 1;
			reviewHeader.style.transform = 'translateX(0px)';
			reviewBody.innerHTML = reviewData[currentReviewId].body;
			reviewBody.style.opacity = 1;
			reviewBody.style.transform = 'translateX(0px)';
			reviewName.innerHTML = reviewData[currentReviewId].name;
			reviewName.style.opacity = 1;
			reviewName.style.transform = 'translateX(0px)';
			reviewTitle.innerHTML = reviewData[currentReviewId].title;
			reviewTitle.style.opacity = 1;
			reviewTitle.style.transform = 'translateX(0px)';
		}, 500);
	}, 500);
});

// Contact Form

const contactSendButton = document.querySelector('.contact-send');
const contactNameInput = document.querySelector('.contact-input-name');
const contactEmailInput = document.querySelector('.contact-input-email');
const contactMessageInput = document.querySelector('.contact-input-message');

contactSendButton.addEventListener('click', () => {
	setTimeout(() => {
		contactNameInput.value = '';
		contactEmailInput.value = '';
		contactMessageInput.value = '';
		alert('Thank you for submitting your message!');
	}, 10);
});
