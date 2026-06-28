emailjs.init({
    publicKey: "nvqVCcxtGSxJRS_Qv"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_kx9zaeh",
        "template_v44ng0l",
        this
    )
    .then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
    });
});