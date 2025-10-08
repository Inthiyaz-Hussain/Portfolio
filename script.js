// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");
//   if (!form) return;

//   form.addEventListener("submit", function (e) {
//     let valid = true;
//     let messages = [];

//     // Name validation
//     const name = form.elements["name"];
//     if (!name.value.trim()) {
//       valid = false;
//       messages.push("Name is required.");
//     }

//     // Email validation
//     const email = form.elements["email"];
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!email.value.trim()) {
//       valid = false;
//       messages.push("Email is required.");
//     } else if (!emailPattern.test(email.value)) {
//       valid = false;
//       messages.push("Please enter a valid email address.");
//     }

//     // Message validation
//     const message = form.elements["message"];
//     if (!message.value.trim()) {
//       valid = false;
//       messages.push("Message is required.");
//     }

//     // Show errors
//     const errorDiv = document.getElementById("formErrors");
//     if (errorDiv) {
//       errorDiv.innerHTML = messages.join("<br>");
//       errorDiv.style.display = messages.length ? "block" : "none";
//     }

//     if (!valid) {
//       e.preventDefault();
//     }
//   });
// });

(function () {
  emailjs.init("k0uXO3xyPgOjnVNYH");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_oqdr3ca ", "k0uXO3xyPgOjnVNYH", this).then(
      () => {
        alert("✅ Message Sent Successfully!");
        this.reset();
      },
      (error) => {
        alert("❌ Failed to Send Message. Please Try Again.");
        console.error(error);
      }
    );
  });
