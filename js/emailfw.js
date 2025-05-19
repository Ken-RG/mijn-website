// hier is assistentie gebruikt ifv email forwarding

function toggleCC() {
    const checkbox = document.getElementById("kopieOntvangen");
    const email = document.getElementById("email").value;
    const ccField = document.getElementById("cc-email");

    ccField.value = checkbox.checked && email ? email : "";
}

document.getElementById("kopieOntvangen").addEventListener("change", toggleCC);
document.getElementById("email").addEventListener("input", toggleCC);
