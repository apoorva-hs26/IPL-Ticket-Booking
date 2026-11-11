const bookingForm = document.getElementById("bookingForm");
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const totalAmount = document.getElementById("totalAmount");

const bookingRecords = document.getElementById("bookingRecords");
const teamFilter = document.getElementById("teamFilter");

const prices = {
    "General": 500,
    "Premium": 1500,
    "VIP": 3000
};

function updateSummary() {
    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value) || 1;
    const price = prices[stand] || 0;

    summaryMatch.textContent = match || "Not selected";
    summaryStand.textContent = stand || "Not selected";
    summaryPrice.textContent = "₹" + price;
    summaryQuantity.textContent = quantity;
    totalAmount.textContent = "₹" + (price * quantity);
}

matchSelect.addEventListener("change", updateSummary);
standSelect.addEventListener("change", updateSummary);
quantityInput.addEventListener("input", updateSummary);

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const match = matchSelect.value;
    const stand = standSelect.value;
    const quantity = Number(quantityInput.value);

    const booking = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        match: match,
        stand: stand,
        quantity: quantity,
        total: prices[stand] * quantity
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.getElementById("formMessage").textContent =
        "Booking successful!";

    bookingForm.reset();
    updateSummary();
    displayBookings();
});

function displayBookings() {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookingRecords.innerHTML = "";

    bookings.forEach(function(booking) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.name}</td>
            <td>${booking.match}</td>
            <td>${booking.stand}</td>
            <td>${booking.quantity}</td>
            <td>₹${booking.total}</td>
        `;

        bookingRecords.appendChild(row);
    });
}

teamFilter.addEventListener("change", function() {
    const selectedTeam = teamFilter.value;
    const cards = document.querySelectorAll(".match-card");

    cards.forEach(function(card) {
        if (selectedTeam === "all" ||
            card.textContent.includes(selectedTeam)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

document.getElementById("clearBookings").addEventListener("click", function() {
    localStorage.removeItem("bookings");
    displayBookings();
});

updateSummary();
displayBookings();

