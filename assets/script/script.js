document.querySelector('.delivery__arrow').addEventListener('click', function() {
    let deliveryItems = document.querySelector('.delivery__items')
    let firstItem = deliveryItems.firstElementChild
    deliveryItems.removeChild(firstItem)
    deliveryItems.appendChild(firstItem)
})

document.querySelectorAll('.button-korzinka').forEach(function(button) {
    button.addEventListener('click', function() {
        this.closest('.item__footer').style.display = 'none'
        this.closest('.delivery__item').querySelector('.button-order').style.display = 'block'
    })
})

document.querySelectorAll('.button-order').forEach(function(button) {
    button.addEventListener('click', function() {
        this.style.display = 'none'
        this.nextElementSibling.style.display = 'block'
    })
})

document.querySelectorAll('.button-in-korzinka').forEach(function(button) {
    button.addEventListener('click', function() {
        this.style.display = 'none'
        this.closest('.delivery__item').querySelector('.item__footer').style.display = 'flex'
    })
})

document.querySelector('.about__kompany__arrow').addEventListener('click', function() {
    let deliveryItems = document.querySelector('.about__kompany-cards')
    let firstItem = deliveryItems.firstElementChild
    deliveryItems.removeChild(firstItem)
    deliveryItems.appendChild(firstItem)
})

class Scroll {
    constructor(obj) {
      this.section = document.querySelector(obj.section)
      this.section.style.transition = 'all .5s ease-in-out'
      window.addEventListener('scroll', () => {
        this.fadeAnimate(this.section)
      })
    }
  
    fadeAnimate(section) {
        let trigger = section.offsetTop - window.innerHeight * 0.8
        if (window.scrollY >= trigger) {
            section.style.opacity = 1
            section.style.transform = "translateX(0)"
        } else {
            section.style.opacity = 0
            section.style.transform = "translateX(-100%)"
        }
    }
}
  
const scroll = new Scroll({
    section: ".delivery"
})
  
const scroll2 = new Scroll({
    section: ".about__kompany"
})
  
const scroll3 = new Scroll({
    section: ".work"
})

class Parallax {
    constructor(obg) {
        this.text = document.querySelector(obg.text)
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }

    str(k = 0) {
        this.text.innerHTML += this.fullText[k]
        k++
        if (k < this.fullText.length) {
            setTimeout(() => {
                this.str(k)
            }, 50)
        }
    }
}

const text = new Parallax({
    text: '.bottom__preview-title'
})
