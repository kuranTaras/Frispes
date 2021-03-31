const findSelector = document.querySelectorAll('.find__select')
const findSelectorHide = document.querySelectorAll('.find__select-hide')
const findLocationChoose = document.querySelectorAll('.find__location-choose')
const findTypeChoose = document.querySelectorAll('.find__type-choose')
const findDateChoose = document.querySelectorAll('.find__date-choose')
const findLocationChosen = document.querySelector('.find__location-chosen')
const findTypeChosen = document.querySelector('.find__type-chosen')
const findDateChosen = document.querySelector('.find__date-chosen')
const findArrow = document.querySelectorAll('.find-arrow')
const findSelectorHideHeight = []
findSelectorHide.forEach((item, i) => {
    findSelectorHideHeight[i] = item.scrollHeight + 'px'
})
findSelectorHide.forEach((item, i) => {
    findSelector[i].addEventListener('click', () => {
        item.classList.toggle('find__form-active')
        findArrow[i].classList.toggle('find-arrow-active')
        if (item.classList.contains('find__form-active')) {
            item.style.maxHeight = findSelectorHideHeight[i]
        } else {
            item.style.maxHeight = '0px'
        }
    })
})
findLocationChoose.forEach((item) => {
    item.addEventListener('click', () => {
        findLocationChosen.innerHTML = item.innerHTML
    })
})
findTypeChoose.forEach((item) => {
    item.addEventListener('click', () => {
        findTypeChosen.innerHTML = item.innerHTML
    })
})
findDateChoose.forEach((item) => {
    item.addEventListener('click', () => {
        findDateChosen.innerHTML = item.innerHTML
    })
})

//Find slider
const findBlockDots = document.querySelector('.find__dots')
const findImg = document.querySelectorAll('.find__absolute-img')
findImg.forEach(() => {
    let dot = document.createElement('div')
    dot.className = 'find-dot'
    findBlockDots.append(dot)
})
const findDot = document.querySelectorAll('.find-dot')
findDot[0].classList.add('find-dot-active')
findImg.forEach((item, i) => {
    findDot[i].addEventListener('click', () => {
        findDot.forEach((item) => {
            item.classList.remove('find-dot-active')
        })
        findImg.forEach((item) => {
            item.classList.remove('find-absolute-img-active')
        })
        item.classList.add('find-absolute-img-active')
        findDot[i].classList.add('find-dot-active')
    })
})

//Our Slider

const ourPrev = document.querySelector('.our-prev')
const ourNext = document.querySelector('.our-next')
const ourSlides = document.querySelector('.our__slides')
const ourSlide = document.querySelectorAll('.our__slide')
const ourQuantity = document.querySelector('.our-quantity')
const ourCurrent = document.querySelector('.our-current')
const ourDots = document.querySelector('.our__dots')
ourSlide.forEach(() => {
    let dot = document.createElement('div')
    dot.className = 'our-dot'
    ourDots.append(dot)
})
const ourDot = document.querySelectorAll('.our-dot')
ourDot[0].classList.add('our-dot-active')

ourQuantity.innerHTML = '0' + ourSlide.length

let ourCount = 1
ourNext.addEventListener('click', () => {
    if (ourCount !== ourSlide.length) {
        ourDot.forEach((item) => {
            item.classList.remove('our-dot-active')
        })
        ourSlides.style.transform = 'translateX(-' + ourCount*100 + '%)'
        ourCount = ourCount + 1
        ourNext.classList.add('our-next-active')
        ourPrev.classList.add('our-prev-active')
        for (let j = 0; j < ourCount; j++) {
            ourDot[j].classList.add('our-dot-active')
        }
        if (ourCount === ourSlide.length) {
            ourNext.classList.remove('our-next-active')
        }
        ourCurrent.innerHTML = '0' + ourCount
    }
})

ourPrev.addEventListener('click', () => {
    if (ourCount !== 1) {
        ourDot.forEach((item) => {
            item.classList.remove('our-dot-active')
        })
        ourSlides.style.transform = 'translateX(-' + (ourCount*100-200) + '%)'
        ourCount = ourCount - 1
        ourNext.classList.add('our-next-active')
        ourPrev.classList.add('our-prev-active')
        for (let j = 0; j < ourCount; j++) {
            ourDot[j].classList.add('our-dot-active')
        }
        if (ourCount === 1) {
            ourPrev.classList.remove('our-prev-active')
        }
        ourCurrent.innerHTML = '0' + ourCount
    }
})

ourSlide.forEach((item, i) => {
    ourDot[i].addEventListener('click', () => {
        ourDot.forEach((item) => {
            item.classList.remove('our-dot-active')
        })
        if (ourCount < ourSlide.length && i !== 0) {
            ourSlides.style.transform = 'translateX(-' + i*100 + '%)'
            ourCount = i + 1
            ourNext.classList.add('our-next-active')
            ourPrev.classList.add('our-prev-active')
        } else if (ourCount === ourSlide.length && i !== ourSlide.length) {
            ourSlides.style.transform = 'translateX(-' + (i*100) + '%)'
            ourCount= i + 1
            ourNext.classList.add('our-next-active')
            ourPrev.classList.add('our-prev-active')
        } else if (ourCount === 1 && i !== 0) {
            ourSlides.style.transform = 'translateX(-' + i*100 + '%)'
            ourCount = i + 1
            ourNext.classList.add('our-next-active')
            ourPrev.classList.add('our-prev-active')
        } else if (ourCount !== 1 && i === 0) {
            ourSlides.style.transform = 'translateX(0)'
            ourCount = i + 1
            ourNext.classList.add('our-next-active')
            ourPrev.classList.add('our-prev-active')
        }
        if (ourCount === 1) {
            ourPrev.classList.remove('our-prev-active')
        }
        if (ourCount === ourSlide.length) {
            ourNext.classList.remove('our-next-active')
        }
        for (let j = 0; j < ourCount; j++) {
            ourDot[j].classList.add('our-dot-active')
        }
        ourCurrent.innerHTML = '0' + ourCount
    })
})

//facilities Slider

const facilitiesLink = document.querySelectorAll('.facilities-link')
const facilitiesSlides = document.querySelector('.facilities__slides')
const facilitiesQuantity = document.querySelector('.facilities-quantity')
const facilitiesCurrent = document.querySelector('.facilities-current')
const facilitiesDots = document.querySelector('.facilities__dots')
facilitiesLink.forEach(() => {
    let dot = document.createElement('div')
    dot.className = 'facilities-dot'
    facilitiesDots.append(dot)
})
const facilitiesDot = document.querySelectorAll('.facilities-dot')
facilitiesDot[0].classList.add('facilities-dot-active')
facilitiesQuantity.innerHTML = '0' + facilitiesLink.length


facilitiesLink.forEach((item, i) => {
    item.addEventListener('click', () => {
        facilitiesSlides.style.transform = 'translateY(-' + (100*i) + '%)'
        facilitiesLink.forEach((item) => {
            item.classList.remove('facilities-link-active')
        })
        facilitiesDot.forEach((item) => {
            item.classList.remove('facilities-dot-active')
        })
        for (let j = 0; j < i + 1; j++) {
            facilitiesDot[j].classList.add('facilities-dot-active')
        }
        facilitiesCurrent.innerHTML = '0' + (i + 1)
        item.classList.add('facilities-link-active')
    })
})

//gallery slider
const galPrev = document.querySelector('.gallery-prev')
const galNext = document.querySelector('.gallery-next')
const galSlides = document.querySelector('.gallery__slides')
const galSlide = document.querySelectorAll('.gallery-slide')
let galCount = 2


galNext.addEventListener('click', () => {
    if (galCount !== galSlide.length) {
        galSlides.style.transform = 'translateX(-' + (galSlide[0].scrollWidth * (galCount - 1)) + 'px)'
        galSlide.forEach((item) => {
            item.classList.remove('gallery-slide-active')
        })
        galCount = galCount + 1
        setTimeout(() => {
            galSlide[galCount -1 ].classList.add('gallery-slide-active')
        }, 300)
    }
})

galPrev.addEventListener('click', () => {
    if (galCount !== 1) {
        galSlide.forEach((item) => {
            item.classList.remove('gallery-slide-active')
        })
        setTimeout(() => {
            galSlides.style.transform = 'translateX(-' + (galSlide[0].scrollWidth * (galCount - 2)) + 'px)'
        }, 300)



        if (galCount === 2) {
            setTimeout(() => {
                galSlides.style.transform = 'translateX(' + galSlide[0].scrollWidth + 'px)'
            }, 300)

        }
        galCount = galCount - 1
        setTimeout(() => {
            galSlide[galCount - 1].classList.add('gallery-slide-active')
        }, 300)
    }
})


//customers slider
const cusSlides = document.querySelector('.customers__slides')
const cusSlide = document.querySelectorAll('.customers__slide')
const cusPrev = document.querySelector('.customers-prev')
const cusNext = document.querySelector('.customers-next')
const cusSlideWidth = cusSlide[0].scrollWidth  + parseInt(getComputedStyle(cusSlide[0]).marginRight)
const cusDots = document.querySelector('.customers__dots')
cusSlide.forEach(() => {
    let dot = document.createElement('div')
    dot.className = 'customers-dot'
    cusDots.append(dot)
})
const cusDot = document.querySelectorAll('.customers-dot')
cusDot[0].classList.add('customers-dot-active')
let cusCount = 1

cusNext.addEventListener('click', () => {
    if (cusCount !== cusSlide.length) {
        cusDot.forEach((item) => {
            item.classList.remove('customers-dot-active')
        })
        cusSlides.style.transform = 'translateX(-' + cusSlideWidth * cusCount + 'px)'
        for (let j = 0; j < cusCount + 1; j++) {
            cusDot[j].classList.add('customers-dot-active')
        }
        cusCount = cusCount + 1
    }
})
cusPrev.addEventListener('click', () => {
    if (cusCount !== 1) {
        cusDot.forEach((item) => {
            item.classList.remove('customers-dot-active')
        })
        cusSlides.style.transform = 'translateX(-' + cusSlideWidth * (cusCount - 2) + 'px)'

        cusCount = cusCount - 1
        for (let j = 0; j < cusCount; j++) {
            cusDot[j].classList.add('customers-dot-active')
        }
    }
})

// mobila

const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

headerBurger.addEventListener('click', () => {
    headerMenu.classList.toggle('header__menu-active')
    headerBurger.classList.toggle('header__burger-active')
})







