(() => {
	const headerBurgerBtn = document.querySelector('.header__box-burger')
	const headerNavigation = document.querySelector('.header__navigation')
	const headerCloseBtn = document.querySelector('.header__navigation-cross')

	headerBurgerBtn.addEventListener('click', () => {
		headerNavigation.classList.add('active')
	})

	headerCloseBtn.addEventListener('click', () => {
		headerNavigation.classList.remove('active')
	})
})();

(() => {
	const tabsItems = document.querySelectorAll('.tabs__lists-item')
	const contentsItems = document.querySelectorAll('.tabs__contents-item')

	tabsItems.forEach((tab, index) => {
		tab.addEventListener('click', e => {
			contentsItems.forEach(content => {
				content.classList.remove('active')
			})
			tabsItems.forEach(tab => {
				tab.classList.remove('active')
			})
			tabsItems[index].classList.add('active')
			contentsItems[index].classList.add('active')
		})
	})
})();

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });


const teamSwiper = new Swiper(".team__swiper", {
	spaceBetween: 30,
	direction: 'horizontal',
	autoHeight:'true',
	autoplay: {
		delay: 2000,
	  },
	loop: 'true',

	pagination: {
	  el: ".team__swiper-pagination",
	  clickable: 'true',
	},
  });

  const achieveSwiper = new Swiper(".achieve__swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	direction: 'horizontal',
	autoHeight:'true',
	autoplay: {
		delay: 2000,
	  },
	  loop: 'true',

	pagination: {
	  el: ".achieve__swiper-pagination",
	  clickable: 'true',
	},

	breakpoints: {
		768: {
		  slidesPerView: 4,
		  spaceBetween: 30
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 40
		  }
	
	}
  });