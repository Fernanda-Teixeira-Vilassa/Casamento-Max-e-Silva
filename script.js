// ===== RSVP via WhatsApp =====
document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Coleta e normaliza nomes (remove vazios e espaços extras)
  const convidadosInputs = document.querySelectorAll("input[name='convidado[]']");
  const listaNomes = Array.from(convidadosInputs)
    .map(i => i.value.replace(/\s+/g, " ").trim())
    .filter(v => v.length > 0);

  if (listaNomes.length === 0) {
    alert("Por favor, informe ao menos um nome de convidado.");
    return;
  }

  // Remove possíveis duplicados (opcional)
  const nomesUnicos = Array.from(new Set(listaNomes));

  // Telefone de destino do WhatsApp (somente dígitos, com DDD)
  const telefone = "27996246736";

  const texto = `Olá! Estou confirmando presença no casamento de Max & Silva! 🎉

Convidados (${nomesUnicos.length}):
- ${nomesUnicos.join("\n- ")}

Prazo para confirmações: até 31/10/2025.`;

  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});

// ===== Adicionar novo campo de convidado =====
function adicionarConvidado() {
  const lista = document.getElementById("convidados-lista");

  const wrapper = document.createElement("div");
  wrapper.className = "convidado-item";

  const input = document.createElement("input");
  input.type = "text";
  input.name = "convidado[]";
  input.placeholder = "Nome do convidado";
  input.required = true;

  wrapper.appendChild(input);
  lista.appendChild(wrapper);

  input.focus();
}

/* ===== Copiar chave PIX (se estiver no HTML) ===== */
(function () {
  const btn = document.getElementById("copiar-pix");
  const alvo = document.getElementById("pix-chave");
  if (!btn || !alvo) return;

  btn.addEventListener("click", async () => {
    try {
      const chave = alvo.dataset.pix || alvo.textContent.trim();
      await navigator.clipboard.writeText(chave);
      const textoOriginal = btn.textContent;
      btn.textContent = "Copiado!";
      setTimeout(() => (btn.textContent = textoOriginal), 1500);
    } catch (e) {
      alert("Não foi possível copiar automaticamente. Copie manualmente: " + (alvo.dataset.pix || alvo.textContent.trim()));
    }
  });
})();
