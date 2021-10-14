var tl = gsap.timeline();

tl
    .from('nav a', {
        y: 20,
        stagger: .2,
        duration: 1.5,
        opacity: 0
    })
    .from('span', {
        y: 20,
        stagger: .2,
        duration: 1,
        opacity: 0
    }, '-=.4')
    .from('h2', {
        y: 20,
        stagger: .2,
        duration: 1,
        opacity: 0
    }, '-=.4')
    .from('#img img', {
        duration: 1,
        opacity: 0,
        scale: 4,
    })
    .from('h1', {
        duration: 1,
        opacity: 0,
        y:20,
        ease: Expo.easeInOut
    },'-=.5')
    .from('#circle img', {
        duration: 1,
        opacity: 0,
        scale: 4,
        ease: Expo.easeInOut
    },'-=.5')
    .from('#circle h5', {
        duration: 1,
        opacity: 0,
        y:10
    },'-=.2')
    .from('#quickLinks a', {
        y: 20,
        stagger: .2,
        duration: 1,
        opacity: 0
    },'-=1.5')
    .from('#text', {
        y: 10,
        duration: 1,
        opacity: 0
    },'-=.2')

    