document.addEventListener("DOMContentLoaded", function () {
    const ulkeSelect = document.getElementById("ulke");
  
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const sortedCountries = data
          .filter((country) => country.name && country.name.common)
          .sort((a, b) => a.name.common.localeCompare(b.name.common));
  
        sortedCountries.forEach((country) => {
          const option = document.createElement("option");
          option.value = country.name.common;
          option.textContent = country.name.common;
          ulkeSelect.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Ülke verisi alınamadı:", error);
        const option = document.createElement("option");
        option.textContent = "Ülke verisi yüklenemedi";
        option.disabled = true;
        ulkeSelect.appendChild(option);
      });
  });
  