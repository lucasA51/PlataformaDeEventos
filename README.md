# 🗓️ Plataforma de Eventos

Uma aplicação web completa desenvolvida com **Spring Boot** e **MySQL** para divulgação, gerenciamento e consulta de eventos institucionais e acadêmicos (inspirada na identidade visual da UEMA - Universidade Estadual do Maranhão).

---

## 📌 Sobre o Projeto

A **Plataforma de Eventos** tem como objetivo centralizar o cadastro e a visualização de eventos, palestras, conferências e atividades acadêmicas. O sistema oferece tanto uma interface web responsiva (renderizada via Thymeleaf e enriquecida com JavaScript) quanto uma API RESTful para manipulação de dados de eventos.

### ✨ Principais Funcionalidades

- **Carrossel & Destaques de Eventos**: Apresentação visual e interativa dos eventos em destaque na página inicial (`/home`).
- **Página de Detalhes do Evento**: Visualização individual de informações como banner, data, hora, local e descrição (`/evento/{id}`).
- **Cadastro e Gestão de Eventos**: Formulário dinâmico para adicionar novos eventos e gerenciamento com ações de exclusão e edição (`/` ou `/cadastroevento`).
- **Autenticação e Registro**: Telas preparadas para login de usuários e novos cadastros (`/login` e `/cadastro`).
- **API RESTful**: Endpoints JSON sob `/api/eventos` permitindo operações completas de CRUD (Create, Read, Update, Delete).

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **[Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)**: Linguagem principal do projeto.
- **[Spring Boot 3.3.5](https://spring.io/projects/spring-boot)**: Framework base da aplicação.
  - **Spring Web**: Criação de controladores REST e MVC.
  - **Spring Data JPA**: Abstração de persistência de dados com Hibernate.
  - **Spring Security**: Camada de configuração de segurança web.
  - **Spring Boot DevTools**: Recarregamento rápido durante o desenvolvimento.
- **[Lombok](https://projectlombok.org/)**: Redução de boilerplate (Getters, Setters, Construtores, Equals/HashCode).
- **[MySQL Connector/J 8.0.33](https://dev.mysql.com/doc/connector-j/en/)**: Driver JDBC para integração com banco de dados MySQL.

### Frontend
- **[Thymeleaf](https://www.thymeleaf.org/)**: Motor de templates server-side.
- **HTML5 & CSS3**: Estilização modular e temas globais customizados.
- **JavaScript (ES6+)**: Consumo assíncrono da API via `fetch` para renderização dinâmica de dados.
- **[Bootstrap 5.3.3](https://getbootstrap.com/)**: Componentes visuais e layout responsivo.
- **[jQuery 3.7.1](https://jquery.com/)**: Manipulação e interatividade DOM.

### Banco de Dados
- **[MySQL 8.x](https://www.mysql.com/)**: Banco de dados relacional.

---

## 📂 Estrutura de Diretórios

```
PlataformaDeEventos/
├── src/
│   ├── main/
│   │   ├── java/org/example/plataformadeeventos/
│   │   │   ├── configuration/
│   │   │   │   └── SecurityConfig.java         # Configuração do Spring Security
│   │   │   ├── controller/
│   │   │   │   ├── EventoController.java       # API REST (/api/eventos)
│   │   │   │   ├── HomeController.java         # Rotas de navegação Web
│   │   │   │   └── UserController.java         # Controle de usuários
│   │   │   ├── exception/
│   │   │   │   └── EventoNotFoundException.java # Tratamento de erro 404
│   │   │   ├── model/
│   │   │   │   ├── Evento.java                 # Entidade JPA de Eventos
│   │   │   │   └── User.java                   # Entidade JPA de Usuários
│   │   │   ├── repository/
│   │   │   │   ├── EventoRepository.java       # Acesso a dados de Evento
│   │   │   │   └── UserRepository.java         # Acesso a dados de Usuário
│   │   │   ├── service/
│   │   │   │   ├── EventoService.java          # Regras de negócio de Evento
│   │   │   │   └── UserService.java            # Regras de negócio de Usuário
│   │   │   └── PlataformaDeEventosApplication.java # Classe principal da aplicação
│   │   └── resources/
│   │       ├── application.properties          # Propriedades e conexão com banco
│   │       ├── static/                         # Assets estáticos (CSS, JS, Imagens, Bootstrap)
│   │       └── templates/                      # Telas Thymeleaf (home, login, register, etc.)
│   └── test/                                   # Testes unitários e de integração
├── mvnw / mvnw.cmd                             # Maven Wrapper
└── pom.xml                                     # Dependências e build do Maven
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **Java JDK 17** ou superior: [Instalar JDK](https://adoptium.net/)
- **MySQL Server 8.x**: [Instalar MySQL](https://dev.mysql.com/downloads/installer/)
- **Git**: [Instalar Git](https://git-scm.com/)
*(O Maven não precisa ser instalado globalmente, pois o projeto inclui o Maven Wrapper `mvnw`)*.

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/PlataformaDeEventos.git
cd PlataformaDeEventos
```

### 2. Configurar o Banco de Dados
Acesse seu cliente MySQL (CLI ou MySQL Workbench) e crie o banco de dados da aplicação:
```sql
CREATE DATABASE plataforma_de_eventos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Em seguida, verifique e edite o arquivo `src/main/resources/application.properties` conforme suas credenciais locais do MySQL:
```properties
spring.application.name=PlataformaDeEventos
spring.datasource.url=jdbc:mysql://localhost:3306/plataforma_de_eventos
spring.datasource.username=root
spring.datasource.password=sua_senha_aqui
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update
```

> **Nota:** Com `spring.jpa.hibernate.ddl-auto=update`, as tabelas (`evento` e `user`) serão criadas/atualizadas automaticamente ao iniciar a aplicação.

### 3. Compilar e Rodar a Aplicação

No Linux / macOS:
```bash
./mvnw spring-boot:run
```

No Windows (Prompt de Comando ou PowerShell):
```cmd
mvnw.cmd spring-boot:run
```

Após inicializar, o servidor estará disponível em:
👉 **`http://localhost:8080`**

---

## 🌐 Rotas e Navegação

### Interface Web

| Rota | Descrição |
| :--- | :--- |
| `GET /` ou `/cadastroevento` | Formulário para cadastrar novos eventos e listagem de eventos existentes |
| `GET /home` | Página inicial com carrossel dinâmico de eventos em destaque |
| `GET /evento/{id}` | Página de exibição de detalhes de um evento específico |
| `GET /login` | Tela de autenticação de usuários |
| `GET /cadastro` | Tela de criação de conta |

---

## 📡 Endpoints da API REST (`/api/eventos`)

A aplicação expõe uma API RESTful para manipular eventos em formato JSON:

| Método | Endpoint | Descrição | Corpo da Requisição (JSON) |
| :---: | :--- | :--- | :--- |
| `GET` | `/api/eventos` | Lista todos os eventos cadastrados | *Nenhum* |
| `POST` | `/api/eventos` | Cadastra um novo evento | Ver exemplo abaixo |
| `PUT` | `/api/eventos/{id}` | Atualiza os dados de um evento existente | Ver exemplo abaixo |
| `DELETE` | `/api/eventos/{id}` | Remove um evento pelo identificador | *Nenhum* |

#### Exemplo de Payload JSON (`POST` / `PUT`):
```json
{
  "title": "Semana Acadêmica de Tecnologia",
  "image": "https://exemplo.com/imagem.png",
  "description": "Palestras, workshops e hackathons sobre as novas tendências de software.",
  "dataEvent": "2026-11-20",
  "horaEvent": "14:30",
  "localEvent": "Auditório Central - UEMA"
}
```

---

## 👥 Contribuidores

- **Lucas Andrade** ([lucasa.santos.la4@gmail.com](mailto:lucasa.santos.la4@gmail.com))
- **Álex Dias** ([alekxdias@gmail.com](mailto:alekxdias@gmail.com))

---

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e acadêmicos. Consulte os mantenedores para mais detalhes sobre reutilização.
