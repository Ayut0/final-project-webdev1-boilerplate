import { getCountries } from "./countries.js";

export const countries = getCountries();

// console.log(countries);

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  if (window.location.href === "localhost:3000") {
    //Get DOM
    let slides = document.querySelectorAll(".slider__image");
    let currentSlide = 0;

    const nextSlide = () => {
      currentSlide == slides.length - 1 ? (currentSlide = 0) : currentSlide++;
      changeSlide();
      resetTimer();
    };
    const changeSlide = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      slides[currentSlide].classList.add("active");
    };

    const autoChange = () => {
      nextSlide();
    };

    let timer = setInterval(autoChange, 5000);

    //when either button or indicator(nav links) are clicked, stop the timer and then start again
    const resetTimer = () => {
      clearInterval(timer);
      timer = setInterval(autoChange, 5000);
    };
  }


  
  // Search
  const searchBar = document.querySelector("#searchBar");
  let countryCard = document.querySelectorAll(".country-card");

  searchBar.addEventListener("input", (e)=>{
    const inputTxt = e.target.value;
    countryCard.forEach(item=>{
      if (item.innerText.toLowerCase().indexOf(inputTxt) > -1){
        item.style.display = "block"
      }else{
        item.style.display = "none"
      }
    })
  })

  // Filter
let asia=document.getElementById("asia");
let america=document.getElementById("america");
let africa=document.getElementById("africa");
let oceania=document.getElementById("oceania");
let europe=document.getElementById("europe");

asia.addEventListener("click",(e)=>{
  countryCard.forEach(item=>{
    if(item.innerText.toLowerCase().indexOf("asia")>-1){
      item.style.display="block"
    }
    else{
      item.style.display="none"
    }
  })
})

america.addEventListener("click",(e)=>{
  countryCard.forEach(item=>{
    if(item.innerText.toLowerCase().indexOf("america")>-1){
      item.style.display="block"
    }
    else{
      item.style.display="none"
    }
  })
})

africa.addEventListener("click",(e)=>{
  countryCard.forEach(item=>{
    if(item.innerText.toLowerCase().indexOf("africa")>-1){
      item.style.display="block"
    }
    else{
      item.style.display="none"
    }
  })
})

oceania.addEventListener("click",(e)=>{
  countryCard.forEach(item=>{
    if(item.innerText.toLowerCase().indexOf("oceania")>-1){
      item.style.display="block"
    }
    else{
      item.style.display="none"
    }
  })
})

europe.addEventListener("click",(e)=>{
  countryCard.forEach(item=>{
    if(item.innerText.toLowerCase().indexOf("europe")>-1){
      item.style.display="block"
    }
    else{
      item.style.display="none"
    }
  })
})

});
