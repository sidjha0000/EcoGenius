function calculateFootprint() {
    let car_km = document.getElementById("car_km").value * 52 * 0.12; // 0.12 kg CO₂ per km
    let electricity = document.getElementById("electricity_kwh").value * 12 * 0.92; // 0.92 kg CO₂ per kWh
    let diet = parseFloat(document.getElementById("diet").value) * 1000; // Convert tons to kg
    let recycle = document.getElementById("recycle").value === "yes" ? -200 : 0; // Reduce emissions if recycling

    let totalFootprint = car_km + electricity + diet + recycle;
    document.getElementById("result").innerText = totalFootprint.toFixed(2);
}
