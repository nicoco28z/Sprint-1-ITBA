const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

let currentIndex = 0;
const images = document.querySelectorAll("#carousel img");

// menu todas las imágenes excepto la primera

for (let i = 1; i < images.length; i++) {
  images[i].style.display = "none";
}

prevBtn &&
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateCarousel();
  });

nextBtn &&
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });

// Carousel de fotos

function updateCarousel() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[currentIndex].style.display = "block";
}

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Calculadora de moneda

function convertirMoneda() {
  const amount = parseFloat(document.getElementById("cantidad").value);
  const fromCurrency = document.getElementById("fromMoneda").value;
  const toCurrency = document.getElementById("toMoneda").value;

  const exchangeRates = {
    usd: {
      eur: 0.93,
      ars: 350.19,
      yen: 146.44,
      usd: 1,
    },
    eur: {
      usd: 1.08,
      ars: 378.08,
      yen: 158.09,
      eur: 1,
    },
    ars: {
      usd: 0.0029,
      eur: 0.0026,
      yen: 0.42,
      ars: 1,
    },
    yen: {
      usd: 0.0068,
      eur: 0.0063,
      ars: 2.39,
      yen: 1,
    },
  };

  const conversionRate = exchangeRates[fromCurrency][toCurrency];
  const result = amount * conversionRate;

  document.getElementById(
    "resultado"
  ).textContent = `Resultado: ${amount} ${fromCurrency} equivale a ${result.toFixed(
    3
  )} ${toCurrency}`;
}

// Calculadora de Prestamos

function calcularPrestamo() {
  limpiarTabla();
  let tasaMensual = 9.83 / 100;

  var inpMonto = document.getElementById("monto");
  let monto = parseInt(inpMonto.value);

  var inpCuotas = document.getElementById("cuotas");
  let cantCuotas = parseInt(inpCuotas.value);

  let cuota = (tasaMensual * monto) / (1 - (1 + tasaMensual) ** -cantCuotas);

  let saldo = monto;
  let interes = monto * tasaMensual * cantCuotas;

  let tabla = document.getElementById("tablaCuotas");

  for (let i = 0; i < cantCuotas; i++) {
    let columna = document.createElement("tr");
    columna.setAttribute("class", "datos");

    let celdaNumCuota = document.createElement("td");
    celdaNumCuota.innerHTML = i + 1;
    columna.appendChild(celdaNumCuota);

    let celdaSaldo = document.createElement("td");
    celdaSaldo.innerHTML = saldo.toFixed(2);
    columna.appendChild(celdaSaldo);

    let celdaInteres = document.createElement("td");
    celdaInteres.innerHTML = interes.toFixed(2);
    columna.appendChild(celdaInteres);

    let celdaCuota = document.createElement("td");
    celdaCuota.innerHTML = cuota.toFixed(2);
    columna.appendChild(celdaCuota);

    tabla.appendChild(columna);

    saldo -= cuota;
  }
}

function limpiarTabla() {
  let tabla = document.getElementById("tablaCuotas");
  tabla.innerHTML = "";

  let columnaHead = document.createElement("tr");

  let celdaNumHead = document.createElement("th");
  celdaNumHead.innerHTML = "Numero de Cuota:";
  columnaHead.appendChild(celdaNumHead);

  let celdaSaldoHead = document.createElement("th");
  celdaSaldoHead.innerHTML = "Saldo:";
  columnaHead.appendChild(celdaSaldoHead);

  let celdaInteresHead = document.createElement("th");
  celdaInteresHead.innerHTML = "Interes:";
  columnaHead.appendChild(celdaInteresHead);

  let celdaCuotaHead = document.createElement("th");
  celdaCuotaHead.innerHTML = "Cuota:";
  columnaHead.appendChild(celdaCuotaHead);

  tabla.appendChild(columnaHead);
}

//Login
const datos = { usuario: "admin", contrasena: "admin" };
function login() {
  let usuario = document.getElementById("usuario");
  usuario = usuario.value;

  let contrasena = document.getElementById("contrasena");
  contrasena = contrasena.value;

  let error = document.getElementById("error");

  if (usuario == datos.usuario) {
    if (contrasena === datos.contrasena) {
      location.href = "./perfil.html";
    } else {
      error.innerHTML = "Usuario y/o contraseña no validos.";
    }
  } else {
    error.innerHTML = "Usuario y/o contraseña no validos.";
  }
}

function mostrarCalMonedas() {
  let section = document.getElementById("monedas");
  let mostOcul = document.getElementById("mostrarOcultarCM");
  if (section.className === "divOculto") {
    section.className = "divVisible";
    mostOcul.innerText = "Ocultar";
  } else {
    section.className = "divOculto";
    mostOcul.innerText = "Mostrar";
  }
}

function mostrarCalPrestamo() {
  let section = document.getElementById("prestamos");
  let mostOcul = document.getElementById("mostrarOcultarCP");
  if (section.className === "divOculto") {
    section.className = "divVisible";
    mostOcul.innerText = "Ocultar";
  } else {
    section.className = "divOculto";
    mostOcul.innerText = "Mostrar";
  }
}
