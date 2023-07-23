
function send_otp(){
  document.getElementById("sent").innerHTML="Check your Email for OTP"
  console.log( document.getElementById("email").value);
;
}
let btn = document.getElementById('btn');
btn.addEventListener("click", function() {

  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  document.getElementById("p").appendChild(x); // onClick code


}, {once : true});