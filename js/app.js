
// Activity 4: JavaScript Basics and User Interaction

// 1. Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #e85d04;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        font-size: 16px;
        z-index: 9999;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    `;

    toast.style.display = "block";

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

// 2. Smooth Scrolling for Book Ticket Buttons
const bookButtons = document.querySelectorAll(".btn-card");

bookButtons.forEach(button => {
    button.addEventListener("click", function () {

        const bookingForm = document.getElementById("book");

        const selectedMatch = this.getAttribute("data-match");

        const matchSelect = document.getElementById("match");

        if (matchSelect) {
            matchSelect.value = selectedMatch;
        }

        if (bookingForm) {
            bookingForm.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        showToast(selectedMatch + " selected! Please complete your booking.");
    });
});
