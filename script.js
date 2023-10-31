function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheit").value = fahrenheit;
}

const translations = {
  "Convertisseur de Température": "Temperature Converter",
  "Celsius:": "Celsius:",
  "Fahrenheit:": "Fahrenheit:",
  "Convertir": "Convert"
};

function changeLanguage() {
  const selectedLanguage = document.getElementById("language-selector").value;

  document.getElementById("title").textContent = translations["Convertisseur de Température"];
  document.querySelector('label[for="celsius"]').textContent = translations["Celsius:"];
  document.querySelector('label[for="fahrenheit"]').textContent = translations["Fahrenheit:"];
  document.querySelector('button').textContent = translations["Convertir"];

  if (selectedLanguage === "en") {
    document.getElementById("title").textContent = translations["Convertisseur de Température"];
    document.querySelector('label[for="celsius"]').textContent = translations["Celsius:"];
    document.querySelector('label[for="fahrenheit"]').textContent = translations["Fahrenheit:"];
    document.querySelector('button').textContent = translations["Convertir"];
  }
}
