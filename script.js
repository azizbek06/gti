window.addEventListener('DOMcontenLoaded',function (){
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('button'),
        openBtn = document.querySelector('.open');


    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')

        heading.textContent = 'в нашей корзине'
        closeBtn.textContent = 'zakrit'


        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)

    }
    createCart()

    let cart = document.querySelector('.cart'),
    closeBtn = document.querySelector('.close')

    openBtn.addEventListener('click',function (){
        cart.style.display = 'block'
    })
    closeBtn.addEventListener('click',function(){
        cart.style.display = 'none'
    })

})
