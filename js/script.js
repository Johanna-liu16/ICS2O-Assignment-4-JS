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
function getPizza() {
  var price = 0
  var top = 0
  var total = 0
  var tax = 0

  var s1 = document.getElementById("s1")
  var s2 = document.getElementById("s2")

  if (s1.checked == true) {
    price = 6.0
  } else if (s2.checked == true) {
    price = 10.0
  }

  var t1 = document.getElementById("topping1")
  var t2 = document.getElementById("topping2")
  var t3 = document.getElementById("topping3")
  var t4 = document.getElementById("topping4")

  if (t1.checked == true) {
    top = 1.0
  }

  if (t2.checked == true) {
    top = 1.75
  }

  if (t3.checked == true) {
    top = 2.5
  }

  if (t4.checked == true) {
    top = 3.35
  }

  tax = (price + top) * 0.13
  total = tax + (price + top)

  document.getElementById("total_result").innerHTML =
    "Your Current Total is $ " + total.toFixed(2)
}