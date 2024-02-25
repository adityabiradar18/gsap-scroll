gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
})

gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{                 //scroll triger used for scrolling animation like we have multi pages if we add gsap then all pages will animate at a time we can see only current page we are
        trigger:"#page2 #box",     //triggers which one we want to animate
        scroller:"body",           //what to scroll
        markers:true,              //start and end , scrolling start and scrolling end are the markers(after disable by value false)
        start:"top 50%",           //move scrolling start from top 50%
        end:"top 30%",             //move scrolling end from top 30%
        scrub:2,                   //on scrolling effect 
    }
})

