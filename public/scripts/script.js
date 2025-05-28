// Innovations Slider
var carousel = document.querySelector('.carousel');
var carousel_slide = Array.from(carousel.children);
var nextButton = document.querySelector('.button-forward');
var backButton = document.querySelector('.button-backwards');
var cardSize = carousel_slide[0].getBoundingClientRect().width;
var childCount = carousel.childElementCount
var activeCard = 0;

carousel_slide.forEach((slide, index) => {
    slide.style.left = cardSize * index + 'px';
})

const moveToCard = (carousel, currentCard, targetCard) => {
    carousel.style.transform = 'translateX(-' + targetCard.style.left + ')';
    currentCard.classList.remove('shownCard');
    targetCard.classList.add('shownCard');
}

nextButton.addEventListener('click', function() {
    if(activeCard < childCount){
        activeCard += 2
        const currentCard = document.querySelector('.shownCard');
        const targetCard = currentCard.nextElementSibling;
        moveToCard(carousel, currentCard, targetCard);
    }
});
    
    
backButton.addEventListener('click', function() {
    if(activeCard != 0 ){
        activeCard = activeCard - 2
        const currentCard = document.querySelector('.shownCard');
        const prevCard = currentCard.previousElementSibling;
        moveToCard(carousel, currentCard, prevCard);
    }
});

// Nav Changing Color
const element = document.getElementById('about');
const rect = element.getBoundingClientRect();
var y = (screen.height <= 768) ? 10 : (rect.top + window.scrollY)/2;

window.addEventListener('scroll', () => {
    if(window.scrollY > y){
        var nav = document.getElementById('nav');
        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-gray-800')
    }
    if(window.scrollY < y){
        var nav = document.getElementById('nav');
        nav.classList.remove('bg-gray-800')
        nav.classList.add('bg-transparent')
    }
})

// Nav Mobile
// const mobileMenuButton = document.querySelector(".mobile-menu-button")
// const mobileMenu = document.querySelector(".navigation-menu")

// mobileMenuButton.addEventListener("click", () => {
//   mobileMenu.classList.toggle("hidden")
// })

// Client Auto-slider
const clientsContainer = document.getElementById('clientsContainer');
const clientsScrollWidth = clientsContainer.scrollWidth;

window.addEventListener('load', () => {
  self.setInterval(() => {
    if (clientsContainer.scrollLeft !== clientsScrollWidth) {
      clientsContainer.scrollTo(clientsContainer.scrollLeft + 1, 0);
    }
  }, 50);

    // Select all dropdown toggle buttons
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle")
    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("mouseover", () => {
            // Find the next sibling element which is the dropdown menu
            const dropdownMenu = toggle.nextElementSibling

            // Toggle the 'hidden' class to show or hide the dropdown menu
            if (dropdownMenu.classList.contains("hidden")) {
                // Hide any open dropdown menus before showing the new one
                document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.classList.add("hidden")
                })

                dropdownMenu.classList.remove("hidden")
            } else {
                dropdownMenu.classList.add("hidden")
            }
        })
    })
    window.addEventListener("mouseover", (event) => {
        if (!event.target.matches(".dropdown-toggle")) {
          document.querySelectorAll(".dropdown-menu").forEach((menu) => {
            if (!menu.contains(event.target)) {
              menu.classList.add("hidden")
            }
          })
        }
      })
});