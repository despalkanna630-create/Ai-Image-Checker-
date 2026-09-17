const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const previewContainer = document.getElementById("previewContainer");

const analyzeButton = document.getElementById("analyzeButton");

const resultText = document.getElementById("resultText");
const confidence = document.getElementById("confidence");


imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (!file) {
        return;
    }

    const imageURL = URL.createObjectURL(file);

    preview.src = imageURL;

    previewContainer.style.display = "block";

    resultText.textContent = "Image ready for analysis.";
    confidence.textContent = "";

});


analyzeButton.addEventListener("click", function () {

    const file = imageInput.files[0];

    if (!file) {
        resultText.textContent = "⚠️ Please upload an image first.";
        confidence.textContent = "";
        return;
    }

    resultText.textContent = "🔄 Analyzing...";
    confidence.textContent = "";

    setTimeout(function () {

        resultText.textContent =
            "🟡 Detection system not connected yet.";

        confidence.textContent =
            "The AI detection backend will be added in Version 2.";

    }, 1000);

});