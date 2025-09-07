// ===== RSVP via WhatsApp =====
document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coleta todos os nomes digitados
  const convidadosInputs = document.querySelectorAll("input[name='convidado[]']");
  const listaNomes = Array.from(convidadosInputs)
    .map(i => i.value.trim())
    .filter(v => v.length > 0);

  if (listaNomes.length === 0) {
    alert("Por favor, informe ao menos um nome de convidado.");
    return;
  }

  const telefone = "27996246736"; // Número com DDD (somente dígitos)
  const texto = `Olá! Estou confirmando presença no casamento de Max & Silva! 🎉

Convidados:
- ${listaNomes.join("\n- ")}`;


  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});

// ===== Adicionar novo campo de convidado =====
function adicionarConvidado() {
  const lista = document.getElementById("convidados-lista");

  // Wrapper do campo (permite evoluir para remover no futuro, se quiser)
  const wrapper = document.createElement("div");
  wrapper.className = "convidado-item";

  const input = document.createElement("input");
  input.type = "text";
  input.name = "convidado[]";
  input.placeholder = "Nome do convidado";
  input.required = true;

  wrapper.appendChild(input);
  lista.appendChild(wrapper);

  // Foca automaticamente no novo campo
  input.focus();
}
