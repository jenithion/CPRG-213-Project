// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const CONTACT_PAGE =  document.getElementById("contact-page")

document.getElementById("submit-button").onclick = () => {
    CONTACT_PAGE.innerHTML = "<p>Thank you for your message</p>";
    CONTACT_PAGE.style.fontSize = 24;
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

