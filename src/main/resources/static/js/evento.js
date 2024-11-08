// Função para obter o ID do evento da URL
function getEventId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Função para buscar os detalhes do evento
function fetchEventDetails(eventId) {
    fetch(`/api/eventos/${eventId}`)
        .then(response => response.json())
        .then(event => {
            const eventDetailsContainer = document.getElementById("eventDetails");

            // Estrutura HTML para exibir os detalhes do evento
            eventDetailsContainer.innerHTML = `
                <h1>${event.title}</h1>
                <p><strong>Data:</strong> ${formatDate(event.dataEvent)}</p>
                <p><strong>Local:</strong> ${event.localEvent}</p>
                <img src="${event.image}" alt="Imagem do Evento" class="event-image">
                <div class="event-description">
                    <p>${event.description}</p>
                </div>
                <button class="subscribe-button">Inscreva-se no Evento</button>
            `;
        })
        .catch(error => {
            console.error("Erro ao buscar detalhes do evento:", error);
        });
}

// Função para formatar a data no formato desejado (dd/mm/yyyy)
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

// Ao carregar a página, obtemos o ID do evento e buscamos seus detalhes
window.onload = function() {
    const eventId = getEventId();
    if (eventId) {
        fetchEventDetails(eventId);
    } else {
        console.error("ID do evento não encontrado na URL");
    }
};
