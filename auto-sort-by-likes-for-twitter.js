(function() {
    const targetUrlPattern = /https:\/\/x\.com\/.*\/status\/.*/;
    let intervalId;

    function checkAndClick() {
        // Check if the current URL matches the desired pattern
        if (targetUrlPattern.test(window.location.href)) {
            // Try to find the specific button using the provided selector
            const buttonToClick = document.querySelector("#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1c4cdxw.r-1t251xo.r-f8sm7e.r-13qz1uu.r-1ye8kvj > div > div.css-175oi2r.r-aqfbo4.r-gtdqiz.r-1gn8etr.r-1g40b8q > div:nth-child(1) > div > div > div > div > div > div.css-175oi2r.r-1pz39u2.r-1777fci.r-15ysp7h.r-obd0qt.r-s8bhmr > div > button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-2yi16.r-1qi8awa.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l");

            if (buttonToClick) {
                // Click the button once
                buttonToClick.click();
                console.log("Button clicked!");
            } else {
                console.log("Button not found, will keep trying...");
            }

            // Check for "Sort replies by" and "Likes" elements
            const elements = document.querySelectorAll("div, span"); // Get all divs and spans

            elements.forEach(element => {
                if (element.textContent.includes("Sort replies by")) {
                    console.log("Sort replies by found but not clicking.");
                }

                if (element.textContent.includes("Likes")) {
                    // Click the "Likes" span
                    element.click();
                    console.log("Likes clicked!");

                    // Stop the checking process after clicking Likes
                    clearInterval(intervalId);
                }
            });

        } else {
            console.log("URL does not match.");
        }
    }

    // Start checking every second
    intervalId = setInterval(checkAndClick, 1000);
})();
