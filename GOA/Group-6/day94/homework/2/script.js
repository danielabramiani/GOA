const wrapper = document.querySelector('#wrapper')
const carousel = document.querySelector('#image-carousel')
const images = document.querySelectorAll('img')
const btn = document.querySelectorAll('button')
const previous = document.querySelector('#prev')
const nxt = document.querySelector('#next')


images.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})
let counter = 0;

const slideImage = ()=>{
    images.forEach(
        (e) => {
            e.style.transform = `translateX(-${counter*100}%)`
        }
    )
}



const prev = ()=>{
    if(counter > 0){
        
        counter --;
        slideImage();
        console.log(counter);
        
    }
}
const next = ()=>{
    if(counter <= (images.length - 2)){
        
        counter ++;
        slideImage();
        console.log(counter);
        
    }
}

        