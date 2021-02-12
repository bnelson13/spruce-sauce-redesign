const allSections = document.querySelectorAll('.section-div');
const welcomeSection = document.querySelector('#welcome-section');
const aboutSection = document.querySelector('#about-section');
const ingredientSection = document.querySelector('#ingredient-section');
const recipeSection = document.querySelector('#recipe-section');
const contactSection = document.querySelector('#contact-section');
const aboutLink = document.querySelector('#nav-bar-about-li-a');
const ingredientLink = document.querySelector('#nav-bar-ingredient-li-a');
const recipeLink = document.querySelector('#nav-bar-recipe-li-a');
const contactLink = document.querySelector('#nav-bar-contact-li-a');
const aboutMediaJS = window.matchMedia('(max-width: 1180px)');

// Welcome Section Observer

const welcomeObserver = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      spruceBottle.style.opacity = '100';
      spruceBottle.style.display = 'block';
      //   console.log('Hi Welcome Section');
    } else {
      if (aboutMediaJS.matches) {
        spruceBottle.style.display = 'none';
      } else {
        spruceBottle.style.display = 'block';
      }
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: '200px',
  }
);

welcomeObserver.observe(welcomeSection);

// About Section Observer

const kiwiDrawing = document.querySelector('#kiwi-drawing');
const navBarLinks = document.querySelectorAll('.nav-bar-link');
const aboutSides = document.querySelectorAll('.about-section-trio-side-p');
const aboutHR = document.querySelector('.about-section-hr');
const aboutSubHeaders = document.querySelectorAll('.about-subheader');

const aboutObserver = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      setTimeout(() => {
        kiwiDrawing.style.height = '500px';
        spruceBottle.style.opacity = '100';
        if (aboutMediaJS.matches) {
          spruceBottle.style.display = 'none';
        } else {
          spruceBottle.style.display = 'block';
        }
        aboutLink.classList.add('nav-link-dark-border');
        navBarLinks.forEach((link) => {
          link.classList.add('nbl-dark');
          link.classList.remove('nbl-light');
        });
        aboutHR.style.width = '605px';
        aboutSubHeaders.forEach((header) => {
          header.style.opacity = '100';
        });
        aboutSides.forEach((paragraph) => {
          paragraph.style.opacity = '100';
        });
      }, 500);
    } else {
      kiwiDrawing.style.height = '0px';
      aboutLink.classList.remove('nav-link-dark-border');
      navBarLinks.forEach((link) => {
        link.classList.add('nbl-light');
        link.classList.remove('nbl-dark');
      });
      aboutHR.style.width = '0px';
      aboutSubHeaders.forEach((header) => {
        header.style.opacity = '0';
      });
      aboutSides.forEach((paragraph) => {
        paragraph.style.opacity = '0';
      });
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: '10px',
  }
);

aboutObserver.observe(aboutSection);

// Ingredient Section Observer

const ingredientList = document.querySelectorAll('.ingredient-icon');
const spruceBottle = document.querySelector('#spruce-bottle');

const ingredientObserver = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      ingredientLink.classList.add('nav-link-white-border');
      spruceBottle.style.display = 'block';
      spruceBottle.style.opacity = '100';
      ingredientList.forEach((ingredient) => {
        ingredient.classList.add('ingredient-icon-seen');
      });
    } else {
      ingredientLink.classList.remove('nav-link-white-border');
      ingredientList.forEach((item) => {
        item.classList.remove('ingredient-icon-seen');
      });
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: '200px',
  }
);

ingredientObserver.observe(ingredientSection);

// Recipe Section Observer

const recipeObserver = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      recipeLink.classList.add('nav-link-dark-border');
      spruceBottle.style.opacity = '0';
      setTimeout(() => {
        spruceBottle.style.display = 'none';
      }, 1000);
      navBarLinks.forEach((link) => {
        link.classList.add('nbl-dark');
        link.classList.remove('nbl-light');
      });
    } else {
      recipeLink.classList.remove('nav-link-dark-border');
      navBarLinks.forEach((link) => {
        link.classList.add('nbl-light');
        link.classList.remove('nbl-dark');
      });
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: '200px',
  }
);

recipeObserver.observe(recipeSection);

// Contact Section Observer

const contactObserver = new IntersectionObserver(
  (entry) => {
    if (entry[0].isIntersecting) {
      contactLink.classList.add('nav-link-white-border');
      spruceBottle.style.opacity = '0';
      setTimeout(() => {
        spruceBottle.style.display = 'none';
      }, 1000);
    } else {
      contactLink.classList.remove('nav-link-white-border');
    }
  },
  {
    root: null,
    threshold: 1,
    rootMargin: '200px',
  }
);

contactObserver.observe(contactSection);

// Nav Bar Hover Actions

const spruceNavLogo = document.querySelector('#nav-bar-spruce-logo');
const shopNavLogo = document.querySelector('#nav-bar-shopping-logo');

spruceNavLogo.onmouseenter = () => {
  spruceNavLogo.src = '/img/logo/spruce-logo-g-10.png';
};
spruceNavLogo.onmouseleave = () => {
  spruceNavLogo.src = '/img/logo/spruce-logo-g-7.png';
};

// shopNavLogo.onmouseenter = () => {
//   shopNavLogo.src = '/img/cart-logo-l-10.png';
// };
// shopNavLogo.onmouseleave = () => {
//   shopNavLogo.src = '/img/cart-logo-l-7.png';
// };

// Ingredients Hover Change

const Ingredients = [
  'Kiwi',
  'Jalapeno',
  'Vinegar',
  'Tomatillo',
  'Onion',
  'Apple',
  'Lime',
  'Miso',
  'Cilantro',
  'Ginger',
  'Garlic',
  'Cinnamon',
  'Cumin',
  'Nutmeg',
  'Turmeric',
];
const ingredientDesc = [
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
const ingredientPics = [
  'kiwi-closeup.webp',
  'jalapeno-closeup.jpg',
  'vinegar-closeup.jpg',
  'tomatillo-closeup.jpg',
  'onion-closeup.jpg',
  'greenapple-closeup.jpg',
  'lime-closeup.jpg',
  'miso-closeup.jpg',
  'cilantro-closeup.png',
  'ginger-closeup.webp',
  'garlic-closeup.webp',
  'cinnamon-closeup.jpg',
  'cumin-closeup.jpg',
  'nutmeg-closeup.jpg',
  'turmeric-closeup.webp',
];

const ingredientDescription = document.querySelector('.ingredient-right-text');
const ingredientBackground = document.querySelector(
  '.ingredient-right-background'
);
const ingredientBorderList = document.querySelectorAll('.ingredient-icon');
const ingredientLineList = document.querySelectorAll('.ingredient-line');

for (let i = 0; i < ingredientDesc.length; i++) {
  let ingredient = document.querySelector(`#ingredient-item-${i + 1}`);
  let line = document.querySelector(`.ingredient-line-${i + 2}`);
  ingredient.onmouseenter = () => {
    ingredientBorderList.forEach((border) => {
      border.style.borderBottom = '1px solid rgba(255, 255, 255, 0)';
    });
    ingredientLineList.forEach((line) => {
      line.style.display = 'none';
    });
    ingredient.style.borderBottom = '1px solid rgba(255, 255, 255, 0.7)';
    document.querySelector(`.ingredient-line-1`).style.display = 'block';
    line.style.display = 'block';
    ingredient.style.color = 'white';
    ingredientBackground.style.backgroundImage = `url('/img/closeups/${ingredientPics[i]}')`;
    document.querySelector('.ingredient-right-box').style.display = 'block';
    ingredientDescription.innerHTML = `<h1 class="ingredient-right-text-title">${Ingredients[i]}</h1><p>${ingredientDesc[i]}</p>`;
  };
}

let bottleMinus = document.querySelector('#bottle-minus');
let bottleTotal = document.querySelector('#bottle-total');
let bottlePlus = document.querySelector('#bottle-plus');
let caseMinus = document.querySelector('#case-minus');
let caseTotal = document.querySelector('#case-total');
let casePlus = document.querySelector('#case-plus');
let bottleTotalAmnt = 0;
let caseTotalAmnt = 0;

bottleMinus.addEventListener('click', () => {
  bottleTotalAmnt -= 1;
  if (bottleTotalAmnt < 0) {
    bottleTotalAmnt = 0;
  }
  bottleTotal.innerHTML = bottleTotalAmnt;
});

bottlePlus.addEventListener('click', () => {
  bottleTotalAmnt += 1;
  bottleTotal.innerHTML = bottleTotalAmnt;
});

caseMinus.addEventListener('click', () => {
  caseTotalAmnt -= 1;
  if (caseTotalAmnt < 0) {
    caseTotalAmnt = 0;
  }
  caseTotal.innerHTML = caseTotalAmnt;
});

casePlus.addEventListener('click', () => {
  caseTotalAmnt += 1;
  caseTotal.innerHTML = caseTotalAmnt;
});
