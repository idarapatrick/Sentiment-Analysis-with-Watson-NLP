// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input field and button
    const inputField = document.querySelector("input[type='text']");
    const analyzeButton = document.querySelector("button");
    const resultDiv = document.querySelector(".result");

    // Add click event listener to the button
    analyzeButton.addEventListener("click", function () {
        // Get the text from the input field
        const textToAnalyze = inputField.value.trim();

        // Check if the input is not empty
        if (!textToAnalyze) {
            resultDiv.textContent = "Please enter some text to analyze.";
            return;
        }

        // Define the API endpoint
        const apiEndpoint = `http://localhost:5000/sentimentAnalyzer?textToAnalyze=${encodeURIComponent(textToAnalyze)}`;
        ;

        // Make the GET request
        fetch(apiEndpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json(); // Assuming the server responds with JSON
            })
            .then((data) => {
                // Display the result in the resultDiv
                resultDiv.textContent = `Result of Sentiment Analysis: ${data.result}`;
            })
            .catch((error) => {
                console.error("There was a problem with the fetch operation:", error);
                resultDiv.textContent = "An error occurred while processing your request.";
            });
    });
});


