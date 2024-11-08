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

        // div para imagem e div para informações do evento
        eventItem.innerHTML = `
                    <div class="event-image">
                        <img src="${event.image}" alt="Imagem do Evento">
                    </div>
                    <div class="event-info">
                        <h4>${event.title}</h4>
                        <p><strong>Data:</strong> ${event.dataEvent}</p>
                        <p><strong>Local:</strong> ${event.localEvent}</p>
                        <button onclick="deleteEvento(${event.id})">Deletar</button>
                        <button onclick="editEvento(${event.id})">Alterar</button>
                    </div>
                `;
        // Adiciona o item de evento à lista
        eventList.appendChild(eventItem);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar eventos:", error);
    });
}

// Função para deletar um evento
function deleteEvento(eventId) {
  fetch(`/api/eventos/${eventId}`, {
    method: "DELETE",
  })
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

// Função para editar um evento
function editEvento(eventId) {
  // redirecionar para uma página de edição com os dados do evento.
  window.location.href = `/editEvento?id=${eventId}`;
}

// Função para carregar os eventos quando a página for carregada
window.onload = function () {
  fetchEventos();
};

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
      localEvent: document.getElementById("localEvent").value,
    };

    fetch("/api/eventos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evento),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Evento criado com sucesso!");
        fetchEventos(); // Recarregar a lista de eventos
      })
      .catch((error) => {
        alert("Erro ao criar evento: " + error);
      });
  });
