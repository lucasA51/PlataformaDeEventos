// Função para buscar eventos e injetá-los no carrossel e nos cards
function fetchEventos() {
  fetch("/api/eventos")
    .then((response) => response.json())
    .then((data) => {
      // Populando o carrossel
      const carouselContainer = document.getElementById("carouselContainer");
      carouselContainer.innerHTML = `
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators" id="carouselIndicators"></div>
                            <div class="carousel-inner" id="carouselInner"></div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    `;

      const indicators = document.getElementById("carouselIndicators");
      const inner = document.getElementById("carouselInner");

      data.forEach((event, index) => {
        // Criar botão indicador para o carrossel
        const indicator = document.createElement("button");
        indicator.type = "button";
        indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
        indicator.setAttribute("data-bs-slide-to", index);
        if (index === 0) indicator.classList.add("active");
        indicators.appendChild(indicator);

        // Criar item do carrossel
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) carouselItem.classList.add("active");

        carouselItem.innerHTML = `
                    <div class="row">
            <!-- Coluna para a imagem -->
                     <div class="col-md-8">
                <img src="${
                  event.image
                }" class="d-block w-100" alt="Imagem do Evento">
            </div>
             <!-- Coluna para as informações  -->
            <div class="col-md-4 d-flex flex-column justify-content-between p-4">
            <!-- Informações do evento -->
            <div>
                <p>${formatDate(event.dataEvent)} - ${formatTime(
          event.horaEvent
        )}</p>
                <h5>${event.title}</h5>
                <p><strong>Local:</strong> ${event.localEvent}</p>
            </div>
            <!-- Botão na parte inferior -->
            <a href="/evento/${event.id}" class="btn-primary">Ver Detalhes</a>
        </div>
        </div>
    `;
        inner.appendChild(carouselItem);
      });

      // Populando os cards
      const cardContainer = document.getElementById("cardContainer");
      cardContainer.innerHTML = "";

      const row = document.createElement("div");
      row.classList.add("row", "g-4");

      data.forEach((event) => {
        const col = document.createElement("div");
        col.classList.add("col-lg-3", "col-md-4", "col-sm-6");

        const card = document.createElement("a");
        card.classList.add("card", "text");
        card.href = `/evento/${event.id}`;

        card.innerHTML = `
                            <img src="${
                              event.image
                            }" class="card-img-top" alt="Imagem do Evento">
                            <div class="card-body">
                                <div class="card-header">
                                    <a>${formatDate(
                                      event.dataEvent
                                    )} - ${formatTime(event.horaEvent)}</a>
                                </div>
                                <h5 class="card-title">${
                                  event.title
                                }</h5>       
                                <div class="card-footer">
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
  if (!timeString) return "00:00";
  return timeString.slice(0, 5);
}

// Formata a data no formato 'dd/mm/yyyy'
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
// Função para navegar para o próximo ou anterior item do carrossel
function moveCarousel(direction) {
  const carousel = document.getElementById("carouselExampleCaptions");
  if (direction === "next") {
    $(carousel).carousel("next"); // Avança para o próximo item
  } else if (direction === "prev") {
    $(carousel).carousel("prev"); // Volta para o item anterior
  }
}
// Carrega os eventos ao carregar a página
window.onload = function () {
  fetchEventos();
};
