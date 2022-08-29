let msg = document.querySelector("#email");
let array = document.querySelectorAll(".input-group");


function myFunction() {
    if(msg.value === "trifestemuist@gmail.com") {
        array[0].classList.add("success");
  } else {
    array[1].classList.add("error");
  }
}
