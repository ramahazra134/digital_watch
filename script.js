function updateClock() {

            const now = new Date();

            // Get time
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            // AM / PM
            let ampm = hours >= 12 ? "PM" : "AM";

            // Convert to 12 hour format
            hours = hours % 12;

            hours = hours === 0 ? 12 : hours;

            // Add leading zero
            hours = String(hours).padStart(2, "0");
            minutes = String(minutes).padStart(2, "0");
            seconds = String(seconds).padStart(2, "0");


            // Update time
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;

            document.getElementById("ampm").textContent = ampm;


            // Day
            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];

            document.getElementById("day").textContent =
                days[now.getDay()];


            // Date
            const options = {
                month: "long",
                day: "numeric",
                year: "numeric"
            };

            document.getElementById("date").textContent =
                now.toLocaleDateString("en-US", options);


            // Timezone
            const timezone =
                Intl.DateTimeFormat().resolvedOptions().timeZone;

            document.getElementById("timezone").textContent =
                timezone;
        }


        // Run immediately
        updateClock();


        // Update every second
        setInterval(updateClock, 1000);
