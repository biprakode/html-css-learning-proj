const dateInput = document.getElementById("reservationDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);
dateInput.addEventListener("input", () => {
    const selectedDate = new Date(dateInput.value);
    if (selectedDate.getDay() === 0) {
        alert("Dorsia is closed on Sundays. Please select another date.");
        dateInput.value = "";
    }
});

const form = document.querySelector("form");
const confirmationContainer = document.querySelector(".ReservationConfirmationWrap");
const closeConfirmation = document.querySelector(".homepageButton");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const resDate = document.querySelector("#reservationDate").value;
    const resTime = document.querySelector("#reservationTime").value;
    const tableFor = document.querySelector("#tableFor").value;
    const resName = document.querySelector("#Name").value;
    const phone = document.querySelector("#phone").value;

    if (!resDate || !resTime || !tableFor || !resName || !phone) {
        alert("Please fill in all required fields.");
        return;
    }

    confirmationContainer.style.display = "block";
});

closeConfirmation.addEventListener("click", function () {
    confirmationContainer.style.display = "none";
});