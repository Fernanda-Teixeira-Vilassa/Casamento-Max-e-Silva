// Confirmação de presença via WhatsApp
document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const quantidade = document.getElementById("quantidade").value;
  const mensagem = document.getElementById("mensagem").value;

  const telefone = "27996246736"; // Número com DDD
  const texto = `Olá! Estou confirmando presença no casamento de Max & Silva! Estarei presente com ${quantidade} pessoa(s).\n\nNome(s): ${mensagem}`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});

// Upload de fotos na timeline via clique
function uploadPhoto(element) {
  const uploader = document.getElementById("photoUploader");
  uploader.click();

  uploader.onchange = function () {
    const file = uploader.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = function (e) {
        element.innerHTML = `<img src="${e.target.result}" alt="Foto do casal" />`;
      };
      reader.readAsDataURL(file);
    }
  };
}

// Inicializa as 3 primeiras imagens automaticamente
window.addEventListener("DOMContentLoaded", () => {
  const imagens = ["imagens/foto1.jpg", "imagens/foto2.jpg", "imagens/foto3.jpg"];
  const caixas = document.querySelectorAll(".photo-box");

  imagens.forEach((src, index) => {
    if (caixas[index]) {
      caixas[index].innerHTML = `<img src="${src}" alt="Foto ${index + 1}" />`;
    }
  });
});
