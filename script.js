const total = document.querySelector("#total");
const supply = document.querySelector("#supply");
const vat = document.querySelector("#vat");

const total2supply = (total) => Math.round(total / 1.1);
const total2vat = (total) => Math.round(total / 11);

const calculate = () => {
  const totalValue = parseFloat(total.value) || 0;

  supply.value = total2supply(totalValue);
  vat.value = total2vat(totalValue);
};

total.addEventListener("input", calculate);
