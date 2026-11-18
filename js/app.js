
const form = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const matchInput = document.getElementById("match");
const standInput = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.cssText =
        "position:fixed;top:20px;right:20px;background:green;color:white;padding:15px;border-radius:8px;z-index:9999;";

    setTimeout(() => toast.remove(), 2000);
}

function updateSummary() {
    const name = nameInput.value;
    const match = matchInput.value;
    const stand = standInput.value;
    const quantity = Number(quantityInput.value);

    const selectedOption = standInput.options[standInput.selectedIndex];
    const price = Number(selectedOption.dataset.price || 0);

    document.getElementById("summaryName").textContent = name || "-";
    document.getElementById("summaryMatch").textContent = match || "-";
    document.getElementById("summaryStand").textContent = stand || "-";
    document.getElementById("summaryQuantity").textContent = quantity || 0;

    document.getElementById("totalPrice").textContent =
        price * quantity;

    showToast("Booking summary updated!");
}

matchInput.addEventListener("change", updateSummary);
standInput.addEventListener("change", updateSummary);
quantityInput.addEventListener("input", updateSummary);
nameInput.addEventListener("input", updateSummary);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    updateSummary();
    alert("Booking confirmed!");
});

// Match card buttons
document.querySelectorAll(".btn-card").forEach(button => {
    button.addEventListener("click", function() {
        matchInput.value = this.dataset.match;
        updateSummary();
        document.getElementById("book").scrollIntoView();
    });
});
