function celsiusToFahrenheit() {
  var celsius = parseFloat(document.getElementById("celsiusInput").value);
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheitOutput").innerText = "華氏溫度：" + fahrenheit.toFixed(2) + " 度";
}

function fahrenheitToCelsius() {
  var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
  var celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsiusOutput").innerText = "攝氏溫度：" + celsius.toFixed(2) + " 度";
}