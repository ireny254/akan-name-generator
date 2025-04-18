document.getElementById('birthdateForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const birthdate = new Date(document.getElementById('birthdate').value);
    const gender = document.getElementById('gender').value;

    // Validate input
    if (!birthdate || !gender) {
        alert("Please provide a valid birthdate and gender.");
        return;
    }

    // Extract date, month, and year
    const day = birthdate.getDate();
    const month = birthdate.getMonth() + 1; // JavaScript months are 0-11
    const year = birthdate.getFullYear();

    // Formula to calculate day of the week
    const CC = Math.floor(year / 100); // First two digits of the year
    const YY = year % 100;            // Last two digits of the year

    const dayOfWeek = ((4 * CC - 2 * CC - 1 + (45 * YY) + (1026 * (month + 1)) + day) % 7);

    // Akan names arrays
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Map the day of the week to Akan names
    let akanName = "";
    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfWeek];
    }

    // Display the result
    document.getElementById('akan-name').textContent = akanName;
});