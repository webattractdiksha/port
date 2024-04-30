
gsap.to(".istimg ",{
    y:50,
    duration:2,
    delay:1,
   rotate:360,
   repeat:1,
   yoyo:true,

})
gsap.from(".istimg ",{
    opacity:0,
    duration:2,
    delay:1,
})


gsap.from("h1,h2,h5",{
    opacity:0,
    duration:1,
    stagger:0.5,
    delay:1,
    y:30,
})
gsap.from(".main-btn",{
    opacity:0,
    duration:1,
    stagger:0.5,
    delay:1,
    y:30,
})