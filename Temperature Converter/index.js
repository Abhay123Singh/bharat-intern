function convertTemp() {
  let temp = parseFloat(document.getElementById("temp").value);
  if (!isNaN(temp)) {
    let temp_farenhite = (temp * 9) / 5 + 32;
    let temp_kelvin = temp + 273.15;
    document.getElementById(
      "display--section"
    ).innerHTML = `<h2 class="temp--c">${temp}&#176;C in - </h2><p>Farenhite: <span class="display--converted">${temp_farenhite.toFixed(
      2
    )} &#176;F</span></p> <p>Kelvin: <span class="display--converted">${temp_kelvin.toFixed(
      2
    )} K</span></p>`;
    document.getElementById("temp").value = NaN;
  } else {
    alert("Please enter temperature first.");
  }
}
