/* File JavaScript (js/script.js) */
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100;
    let gender = document.getElementById("gender").value;
    let resultBox = document.getElementById("result");
    
    if (!weight || !height || !gender) {
        resultBox.innerHTML = "<p style='color: red;'>Mohon isi semua kolom!</p>";
        resultBox.style.display = "block";
        return;
    }
    
    let bmi = weight / (height * height);
    let category = "";
    let color = "";
    
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
        color = "#ffcc80";
    } else if (bmi < 24.9) {
        category = "Normal (ideal)";
        color = "#81c784";
    } else if (bmi < 29.9) {
        category = "Kelebihan berat badan";
        color = "#ffb74d";
    } else {
        category = "Kegemukan (Obesitas)";
        color = "#e57373";
    }
    
    resultBox.innerHTML = `<p style='color: white; background: ${color}; padding: 10px; border-radius: 5px;'>BMI Anda: ${bmi.toFixed(2)} (${category})</p>`;
    resultBox.style.display = "block";
});
