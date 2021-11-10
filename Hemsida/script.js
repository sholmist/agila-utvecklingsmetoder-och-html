function submitForm() {

    console.log("debug");
    debugger;

    const namn = document.forms["contactForm"]["namn"].value;
    const epost = document.forms["contactForm"]["epost"].value;
    const meddelande = document.forms["contactForm"]["meddelande"].value;

    console.log(namn);
    console.log(epost);
    console.log(meddelande);

    // Date
    // const date = Date.now();
    // console.log(date);
    // const today = new Date(date);
    // console.log(today);

    // Posts
    var message = document.getElementById("message").innerHTML;

    message = "Skickar mejl!";

    document.getElementById("message").innerHTML = message;

    document.getElementById("overlay").style.display = "block";

    //window.location.href = "tack.html";

    return false;
}