
// Booking Form
const form = document.getElementById("bookingForm");

const nameInput = document.getElementById("name");
const matchInput = document.getElementById("match");
const standInput = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Show Toast Message
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

// Update Booking Summary
function updateSummary() {
    if (!form) return;

    const name = nameInput.value;
    const match = matchInput.value;
    const stand = standInput.value;
    const quantity = Number(quantityInput.value);

    const selectedOption =
        standInput.options[standInput.selectedIndex];

    const price = Number(selectedOption.dataset.price || 0);

    document.getElementById("summaryName").textContent = name || "-";
    document.getElementById("summaryMatch").textContent = match || "-";
    document.getElementById("summaryStand").textContent = stand || "-";
    document.getElementById("summaryQuantity").textContent = quantity || 0;

    document.getElementById("totalPrice").textContent =
        price * quantity;
}

// Booking Form Events
if (form) {
    [nameInput, matchInput, standInput, quantityInput].forEach(input => {
        input.addEventListener("input", updateSummary);
        input.addEventListener("change", updateSummary);
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        updateSummary();
        showToast("Booking Confirmed Successfully!");
    });
}

// Match Card Buttons
document.querySelectorAll(".btn-card").forEach(button => {
    button.addEventListener("click", function() {
        matchInput.value = this.dataset.match;
        updateSummary();

        document.getElementById("book").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Team Filter
const teamFilter = document.getElementById("teamFilter");

if (teamFilter) {
    teamFilter.addEventListener("change", function() {
        const selectedTeam = this.value;

        document.querySelectorAll(".match-card").forEach(card => {
            const team = card.dataset.team;

            card.style.display =
                selectedTeam === "all" ||
                team === selectedTeam
                ? ""
                : "none";
        });
    });
}

// Grid and List View Toggle
const viewToggle = document.getElementById("viewToggle");
const matchContainer = document.getElementById("matchContainer");

if (viewToggle && matchContainer) {
    viewToggle.addEventListener("click", function() {
        matchContainer.classList.toggle("list-view");

        this.textContent =
            matchContainer.classList.contains("list-view")
            ? "Grid View"
            : "List View";
    });
}

// Mobile Hamburger Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");

        this.textContent =
            navLinks.classList.contains("active")
            ? "✕"
            : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function() {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}
