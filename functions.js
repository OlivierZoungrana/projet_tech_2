function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  'use strict'
  
  
  let btn = document.getElementById('toogle_btn')
  const navbar = document.querySelector('#navbar')
  
  
  btn.addEventListener("click", event=>{
  
      navbar.classList.toggle("is-visible");
  
  })
  
  
  
  
  
  
  
  
  