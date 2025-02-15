document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Sustabdojame standartinį formos pateikimą
    let isValid = true;

    const requiredFields = ["name", "company", "title"]; // Tikriname šiuos laukus
    const inputEmail = document.getElementById("email");

    // Funkcija klaidos pranešimui
    function showError(inputId, message) {
        const input = document.getElementById(inputId);
        const errorText = document.getElementById(inputId + "Error");

        if (input && errorText) {
            input.classList.add("error"); // Pridedame klaidos klasę
            errorText.textContent = message; // Užrašome klaidos pranešimą
            errorText.style.display = "block"; // Parodome klaidos pranešimą
        }
        isValid = false; // Jei yra klaida, nustatome, kad forma neteisinga
    }

    // Funkcija klaidos išvalymui
    function clearError(inputId) {
        const input = document.getElementById(inputId);
        const errorText = document.getElementById(inputId + "Error");

        if (input && errorText) {
            input.classList.remove("error"); // Pašaliname klaidos klasę
            errorText.style.display = "none"; // Paslepiame klaidos pranešimą
        }
    }

    // Tikriname privalomus laukus
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (input && input.value.trim() === "") {
            showError(field, "This field is required"); // Jei laukas tuščias, rodom klaidos pranešimą
        } else {
            clearError(field); // Jei laukas užpildytas, pašaliname klaidą
        }
    });

    // Tikriname email
    let emailValue = inputEmail.value.trim();
    if (emailValue === "") {
        showError("email", "Email cannot be empty"); // ❌ El. paštas negali būti tuščias
    } else {
        // Tikriname el. pašto formatą
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailValue)) {
            showError("email", "Invalid email format"); // ❌ Neteisingas el. pašto formatas
        } else if (emailValue.length > 100) {
            showError("email", "Email cannot exceed 100 characters"); // ❌ El. paštas negali būti ilgesnis nei 100 simbolių
        } else {
            clearError("email"); // ✅ Jei el. paštas teisingas
        }
    }

    // Jei visi laukai teisingi
    if (isValid) {
        // Rodyti pranešimą apie sėkmingą formos pateikimą
        alert("Form submitted successfully!");
        
        // Išvalome formą
        this.reset();
        
        // Rodyti žinutę, kad duomenys sėkmingai pateikti
        document.getElementById("messageSuccess").textContent = "Thank you! Your message has been successfully submitted.";
    }
});

// Skaitiklis simboliams pranešime
document.getElementById("message").addEventListener("input", function () {
    const maxLength = 250;
    let charNumber = document.getElementById("charNumber");

    if (this.value.length > maxLength) {
        this.value = this.value.substring(0, maxLength); // Apribojame teksto ilgį
    }

    charNumber.textContent = this.value.length; // Atnaujiname simbolių skaičių
});
