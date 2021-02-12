var news = new Glide('.news', {
    type: 'carousel',
    autoplay: 4000,
    perView: 3,
    focusAt: 'center',
    gap: 20,
    breakpoints: {
        1300: {
            focusAt: 1,
            perView: 2
        },
        768: {
            perView: 1
        }
    }
})

news.mount();



var products = new Glide('.products', {
    type: 'carousel',
    perView: 4,
    focusAt: 1,
    gap: 15,
    breakpoints: {
        980: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
})

products.mount();