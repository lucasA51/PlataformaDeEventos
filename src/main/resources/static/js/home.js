// Função para buscar eventos cadastrados e injetá-los como cards Bootstrap
function fetchEventos() {
  fetch("/api/eventos")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = ""; 

      const row = document.createElement("div");
      row.classList.add("row", "g-4"); 

      // Cria um card para cada evento
      data.forEach((event) => {
        const col = document.createElement("div");
        col.classList.add("col-lg-3", "col-md-4", "col-sm-6"); // 4 por linha em telas grandes

        const card = document.createElement("a");
        card.classList.add("card", "text-decoration-none"); 
        card.href = `/evento/${event.id}`;

        card.innerHTML = `
                    <img src="${
                      event.image
                    }" class="card-img-top" alt="Imagem do Evento">
                    <div class="card-body">
                    <div class="card-header">
                    <a>${formatDate(event.dataEvent)} - ${formatTime(
          event.horaEvent
        )}</a>
                    </div>
                    <h5 class="card-title">${event.title}</h5>       
                    <div class="card-footer text-center">
                    <a>${event.localEvent}</a>
                    </div>
                    </div>
                `;

        col.appendChild(card);
        row.appendChild(col);
      });

      cardContainer.appendChild(row);
    })
    .catch((error) => {
      console.error("Erro ao buscar eventos:", error);
    });
}

// Formata a hora para (HH:mm)
function formatTime(timeString) {
  if (!timeString) return "00:00"; // Retorna "00:00" se timeString for null ou undefined

  return timeString.slice(0, 5); // Extrai apenas as horas e minutos (formato HH:mm)
}

// Formata a data no formato 'dd/mm/yyyy'
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`; // Retorna a data formatada como 'dd/mm/yyyy'
}

// Carrega os eventos ao carregar a página
window.onload = function () {
  fetchEventos();
};
