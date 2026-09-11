## SISMONC - Sistema de Suporte e Monitoramento para Paciente Oncológico... ## 

<img width="100%" height="auto" alt="Logotipo" src="/imagens/saude_e_oncologia.jpg" />

Este diretório serve para armazenar o protótipo e os documentos referentes ao projeto de TCC-II.

Autoria:  Felipe Braga <feslipebraga@gmail.com>
Co-Autoria:  Maria de Fatima Barbosa <barbosamariaf27@gmail.com>

Data de Atualização: 11/09/2026.

Orientação: André Fabiano de Moraes <andre.moraes@ifc.edu.br>

---


## 🛠️ Como Rodar a Aplicação

Existem duas formas disponíveis para executar a aplicação no seu ambiente local:

1. **[Recomendada para Desenvolvimento] Via Docker Compose (Laravel Sail)** - Executa nativamente os containers da aplicação e do banco de dados na sua máquina.
2. **[Recomendada para Avaliação Rápida] Via Máquina Virtual (VirtualBox)** - Uma VM pré-configurada contendo todo o ambiente Debian + Nginx + MariaDB pronto para uso.

---

### Opção 1: Rodando via Docker Compose (Recomendada)

Esta opção utiliza o **Laravel Sail** para rodar os containers da aplicação PHP 8.4 e o banco de dados MySQL de forma prática e padronizada.

#### 📋 Pré-requisitos
* **Docker Desktop** instalado e rodando.
* **Git** instalado.

#### 🚀 Passo a Passo

1. **Configurar as Variáveis de Ambiente**:
   Copie o arquivo de exemplo de ambiente para criar o seu `.env`:
   ```bash
   cp .env.example .env
   ```
   *(As configurações padrão do `.env.example` já estão pré-configuradas para funcionar diretamente com o Docker, incluindo a conexão com o banco MySQL na rede interna do Docker).*

2. **Subir os Containers**:
   Execute o atalho do Composer para iniciar os containers em segundo plano (isso subirá os serviços da aplicação PHP e o banco de dados MySQL):
   ```bash
   composer docker-up
   ```
   *Caso prefira usar o comando direto:*
   ```bash
   docker compose up -d
   ```

3. **Subir o Servidor de Assets (Vite)**:
   Inicie o servidor de desenvolvimento do Vite para monitorar e compilar as atualizações de CSS/JS em tempo real:
   ```bash
   composer docker-dev
   ```
   *Caso prefira usar o comando direto:*
   ```bash
   docker compose exec laravel.test npm run dev
   ```

4. **Acessar o Projeto**:
   Abra no seu navegador:
   * **URL principal**: [http://localhost:8080](http://localhost:8080)
   * *(Nota: Se o `localhost` estiver lento ou com atrasos de rede no Windows, utilize o IP direto: [http://127.0.0.1:8080](http://127.0.0.1:8080))*

#### 🔑 Credenciais de Acesso (Docker)
* **Usuário**: `admin`
* **Senha**: `admin`

#### 💾 Conexão externa com o Banco de Dados (MySQL no Docker)
O banco de dados do container está mapeado para a porta **`3307`** no seu host. Caso queira se conectar usando uma ferramenta externa (como DBeaver, TablePlus ou PhpStorm):
* **Host**: `127.0.0.1` (ou `localhost`)
* **Porta**: `3307`
* **Banco de Dados**: `dbname`
* **Usuário**: `root`
* **Senha**: `12345`

#### ⚡ Dica de Desempenho Ultra Rápido (WSL2 no Windows)
Se você estiver utilizando Windows com WSL2, rodar o projeto a partir de pastas do Windows (`C:\Users\...`) montadas no Docker causa uma lentidão extrema na leitura de arquivos PHP.
**Para que o projeto rode em milissegundos:**
1. Mova ou clone a pasta do projeto diretamente para dentro do sistema de arquivos do Linux WSL (ex: `/home/usuario/projects/sismonc-2026`).
2. Abra o PhpStorm utilizando o caminho do WSL (`\\wsl$\Ubuntu\home\...`).
3. Execute o comando `composer docker-up` a partir do terminal do WSL.

---

### Opção 2: Rodando via Máquina Virtual (VirtualBox)

Para facilitar a avaliação e os testes sem necessidade de instalar dependências locais de desenvolvimento, todo o ambiente já configurado está disponível em uma imagem de Máquina Virtual pré-configurada para o VirtualBox.

* **Sistema Operacional:** Debian 13 (Trixie)
* **Servidor Web:** Nginx
* **Linguagem:** PHP 8.4 (via PHP-FPM)
* **Banco de Dados:** MariaDB

#### 🚀 Passo a Passo

..... continua ...
