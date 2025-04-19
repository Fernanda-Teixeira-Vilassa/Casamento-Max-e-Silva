function uploadPhoto(box) {
    const uploader = document.getElementById('photoUploader');
    uploader.click();
  
    uploader.onchange = function () {
      const file = uploader.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          box.innerHTML = `<img src="${e.target.result}" alt="Foto do casal" />`;
        };
        reader.readAsDataURL(file);
      }
    };
  }
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
  
  // Upload de fotos na timeline
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
  