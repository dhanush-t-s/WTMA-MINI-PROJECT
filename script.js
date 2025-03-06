document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let valid = true;
    
    clearErrors();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (!/^[A-Za-z]{4,}$/.test(firstName)) {
        valid = false;
        document.getElementById("firstNameError").innerText = "First Name should contain only alphabets and be at least 4 characters long.";
        document.getElementById("firstName").classList.add("border-red-500");
    }

    if (!/^[A-Za-z]{1,}$/.test(lastName)) {
        valid = false;
        document.getElementById("lastNameError").innerText = "Last Name should contain only alphabets and be at least 1 character long.";
        document.getElementById("lastName").classList.add("border-red-500");
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        valid = false;
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        document.getElementById("email").classList.add("border-red-500");
    }

    if (!dob) {
        valid = false;
        document.getElementById("dobError").innerText = "Please select a valid date.";
        document.getElementById("dob").classList.add("border-red-500");
    }

    if (!/^\d{2}$/.test(age)) {
        valid = false;
        document.getElementById("ageError").innerText = "Age should be a 2-digit number.";
        document.getElementById("age").classList.add("border-red-500");
    }

    if (!/^\d{10}$/.test(phone)) {
        valid = false;
        document.getElementById("phoneError").innerText = "Phone number should be exactly 10 digits.";
        document.getElementById("phone").classList.add("border-red-500");
    }

    if (!address.trim()) {
        valid = false;
        document.getElementById("addressError").innerText = "Address cannot be empty.";
        document.getElementById("address").classList.add("border-red-500");
    }

    if (valid) {
        displayData(firstName, lastName, email, dob, age, phone, address);
    }
});

function clearErrors() {
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("dobError").innerText = "";
    document.getElementById("ageError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("addressError").innerText = "";

    const formFields = document.querySelectorAll(".form-control");
    formFields.forEach(field => {
        field.classList.remove("border-red-500");
    });
    

}

function displayData(firstName, lastName, email, dob, age, phone, address) {
    const resultTable = document.getElementById("resultTable");
    const newRow = resultTable.insertRow();

    newRow.innerHTML = `
        <td class="px-4 py-2 border-b">${firstName}</td>
        <td class="px-4 py-2 border-b">${lastName}</td>
        <td class="px-4 py-2 border-b">${email}</td>
        <td class="px-4 py-2 border-b">${dob}</td>
        <td class="px-4 py-2 border-b">${age}</td>
        <td class="px-4 py-2 border-b">${phone}</td>
        <td class="px-4 py-2 border-b">${address}</td>
    `;
}
