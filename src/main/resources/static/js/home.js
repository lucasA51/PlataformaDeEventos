// Função para buscar eventos cadastrados
function fetchEventos() {
    fetch("/api/eventos")
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById("cardContainer");
            cardContainer.innerHTML = ""; // Limpa o conteúdo anterior, caso exista

            // Cria um card para cada um
            data.forEach(event => {
                const card = document.createElement("div");
                card.classList.add("card");

                // Estrutura HTML do card
                card.innerHTML = `
                    <img src="${event.image}" alt="Imagem do Evento">
                    <div class="textcard">
                        <h3>${event.title}</h3>
                        <p>Data: <span>${formatDate(event.dataEvent)}</span></p>
                        <p>Local: <span>${event.localEvent}</span></p>
                        <button class="subscribe-button" onclick="window.location.href='/evento/${event.id}'">Inscreva-se</button>
                    </div>
                `;

                // Adiciona o card ao container de cards
                cardContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar eventos:", error);
        });
}

// Data no formato (dd/mm/yyyy)
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

// Função para carregar os eventos ao carregar a página
window.onload = function() {
    fetchEventos();
};
