async function scanWaste() {
    let fileInput = document.getElementById("wasteInput");
    let resultDiv = document.getElementById("result");

    if (fileInput.files.length === 0) {
        resultDiv.innerHTML = "<p style='color:red;'>Please upload an image first.</p>";
        return;
    }

    let file = fileInput.files[0];
    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.width = 224; 
    img.height = 224;
    //img.style.display = "none"; 
    document.body.appendChild(img);

    img.onload = async () => {
        try {
            resultDiv.innerHTML = "<p>⏳ Analyzing waste... Please wait.</p>";
            
            const model = await mobilenet.load();
            const predictions = await model.classify(img);
            
            let detectedItems = predictions.map(pred => 
                `<li>${pred.className} - <strong>${(pred.probability * 100).toFixed(2)}%</strong></li>`
            ).join("");

            resultDiv.innerHTML = `<p>Detected Waste Materials:</p><ul>${detectedItems}</ul>`;
        } catch (error) {
            resultDiv.innerHTML = "<p style='color:red;'>⚠️ Error processing image. Please try again.</p>";
            console.error("Model error:", error);
        }
    };
}
