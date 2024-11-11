// Função para buscar eventos cadastrados
function fetchEventos() {
  fetch("/api/eventos")
    .then((response) => response.json())
    .then((data) => {
      const eventList = document.getElementById("eventList");
      eventList.innerHTML = "";

      data.forEach((event) => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event-item");

        eventItem.innerHTML = `
          <div class="event-image">
              <img src="${event.image}" alt="Imagem do Evento">
          </div>
          <div class="event-info">
              <h4>${event.title}</h4>
              <p><strong>Data:</strong> ${formatDate(
                event.dataEvent
              )} ${formatTime(event.horaEvent)}</p>
              <p><strong>Local:</strong> ${event.localEvent}</p>
              <button onclick="deleteEvento(${event.id})">Deletar</button>
              <button onclick="editEvento(${event.id})">Alterar</button>
          </div>
        `;
        eventList.appendChild(eventItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar eventos:", error);
    });
}

// Funções de formatação de data e hora
function formatDate(dateString) {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
}

function formatTime(timeString) {
  if (!timeString) {
    return "00:00"; // Retorna uma string vazia ou um valor padrão se timeString for null ou undefined
  }
  return timeString.slice(0, 5); // Formato HH:mm
}

// Função para deletar um evento
function deleteEvento(eventId) {
  fetch(`/api/eventos/${eventId}`, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        alert("Evento deletado com sucesso!");
        fetchEventos();
      } else {
        alert("Erro ao deletar o evento.");
      }
    })
    .catch((error) => {
      alert("Erro ao deletar evento: " + error);
    });
}

// Função para redirecionar para a página de edição
function editEvento(eventId) {
  window.location.href = `/editEvento?id=${eventId}`;
}

// Envio do formulário para criação do evento
document
  .getElementById("eventForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const evento = {
      title: document.getElementById("title").value,
      image: document.getElementById("image").value,
      description: document.getElementById("description").value,
      dataEvent: document.getElementById("dataEvent").value,
      horaEvent: document.getElementById("horaEvent").value, // Verificar valor
      localEvent: document.getElementById("localEvent").value,
    };

    console.log("Evento para enviar:", evento); // Log para ver o que está sendo enviado

    fetch("/api/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(evento),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Evento criado com sucesso!");
        fetchEventos();
      })
      .catch((error) => {
        alert("Erro ao criar evento: " + error);
      });
  });

// Carregar eventos ao carregar a página
window.onload = function () {
  fetchEventos();
};
