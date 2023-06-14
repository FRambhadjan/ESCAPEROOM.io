function door() {
    const doorpuzzle = prompt("Wat is de 4 letter code?");
    if (doorpuzzle == "SLOT") {
        alert("de deur is open"); window.location.href = "http://127.0.0.1:5500/kamer3/room3.html";
    } else if (doorpuzzle == "slot") {
        alert("de deur is open"); window.location.href = "http://127.0.0.1:5500/kamer3/room3.html";
    } else {
        alert("de code is fout");
    }
}