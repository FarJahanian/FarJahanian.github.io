
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", (event) => {
  let name = document.getElementById("name");
  let email = document.querySelector("#email");
  
  let postalCode = document.querySelector("#postal-code");
 
 

  let nameRegEx = /^[A-Za-z]+$/;

  if (name.value) {
    if (!nameRegEx.test(name.value)) {
      document.getElementById("name-error").innerText =
        "please insert only letters";
      document.getElementById("name-error").style.color = "red";
      name.style.borderColor = "red";
      event.preventDefault();
    } 
  } else {
    document.querySelector(".name-error").innerText =
      "please insert your name";
    document.querySelector(".name-error").style.color = "red";
    name.style.borderColor = "red";
    event.preventDefault();
  }

  let postalCodeValue = postalCode.value;
  let postalCodeRegEx = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i

  if (postalCodeValue) {
    if (!postalCodeRegEx.test(postalCodeValue)) {
      document.getElementById(".postal-code-error").innerText =
        "please insert only letters";
      document.getElementById(".postal-code-error").style.color = "red";
      postalCode.style.borderColor = "red";
    }
  } else {
    document.querySelector(".postal-code-error").innerText =
      "please insert your postal code";
    document.querySelector(".postal-code-error").style.color = "red";
    postalCode.style.borderColor = "red";
    event.preventDefault();
  }


  
  let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value) {
    if (!emailRegEx.test(email.value)) {
      document.querySelector("email-error").innerText =
        "please insert a valid email";
      document.querySelector("email-error").style.color = "red";
      email.style.borderColor = "red";
    } 
  } else {
    document.querySelector(".email-error").innerText =
      "please insert your email";
    document.querySelector(".email-error").style.color = "red";
    email.style.borderColor = "red";
    event.preventDefault();
  }

  

 
});
const subject = document.querySelectorAll(".subject input");
console.log(document.querySelector(".subject input"));
subject.forEach(item=>{
    item.addEventListener("change",function() {
        console.log(subject.value);
        if (item.checked == true && item.value=="Hiring"){
            document.querySelector(".hourly-rate").style.display="block"
          } else {
            document.querySelector(".hourly-rate").style.display="none";
          }
    })
})

