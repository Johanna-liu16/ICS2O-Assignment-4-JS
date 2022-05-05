// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")
/**
 * Input
 */
function myButtonClicked() {
  const largePizza = document.getElementById("largePizza").checked;
  const xLargePizza = document.getElementById("xLargePizza".checked);
  const t1 = document.getElementById("t1").checked);
  const t2 = document.getElementById("t2").checked;
  const t3 = document.getElementById("t3").checked;
  const t4 = document.getElementById("t4").checked;
    
  var sizePrice = 0
  var toppingPrice = 0
  var tax
  var price

    if (largePizza.checked == true){
        sizePrice = 6.0
        document.getElementById("largePizza").innerHTML = "Large"
    } else {
        sizePrice = 10.0
        document.getElementById("largePizza").innerHTML = "Extra large"
    }

    if (t1 == true) {
        toppingPrice = 1.0;
        document.getElementById("t1").innerHTML = "Topping 1"
    } else if (t2 == true) {
        toppingPrice = 1.75;
        document.getElementById("t2").innerHTML = "Topping 2"
    } else if (t3 == true) {
        toppingPrice = 2.5;
        document.getElementById("t3").innerHTML = "Topping 3"
    } else {
        toppingPrice = 3.35;
        document.getElementById("t4").innerHTML = "Topping 4"
    }

    //output
    tax = (sizePrice + toppingPrice) * 0.13;
    price = tax + (sizePrice + toppingPrice);
    
    document.getElementById("answers").innerHTML =
      "Your pizza will be $" + price.toFixed(2) + ".";
  }
}