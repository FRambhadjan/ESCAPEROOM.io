

function locker() {

    const locker = prompt('Wat is de 3 cijferige code? (hint: kijk aandachtig naar elke kamer.)')

    if (locker == 420) {
        alert('De locker is open.'); alert("Je hebt een papier met wat lijkt een vertaling te zijn."); window.location.href = "http://127.0.0.1:5500/kamer1deur2b/kamer1deur2.html";
    } else {
        alert("De code is fout");
    }
} 