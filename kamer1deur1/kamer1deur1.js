function door() {
    const doorpuzzle = prompt("Wat is de 4 letter code?");
    if (doorpuzzle == "SLOT") {
        alert("de deur is open"); window.location.href = "http://www.w3schools.com";
    } else if (doorpuzzle == "slot") {
        alert("de deur is open"); window.location.href = "http://www.w3schools.com";
    } else {
        alert("de code is fout");
    }
}