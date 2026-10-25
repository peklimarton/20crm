# 20crm

## Overview
This project is a local development environment for the 20crm application. It uses Docker Compose to orchestrate a multi-service stack including:

- **Nginx** (serving static files: index.html, style.css, script.js)
- **Caddy** (reverse proxy, HTTPS)
- **twentycrm/twenty** (main app)
- **PostgreSQL** (database)
- **Redis** (cache)

## Features
- Simple HTML/CSS/JS frontend (see index.html, style.css, script.js)
- Dockerized services for easy local development
- Secure secrets management via Docker secrets

## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

### Setup
1. Clone this repository:
	```sh
	git clone <your-repo-url>
	cd 20crmlocal
	```
2. Create the required secrets files:
	```sh
	mkdir -p secrets
	echo "your_app_secret" > secrets/app_secret
	echo "your_db_password" > secrets/db_password
	```
3. (Optional) Edit `.env` for environment variables if needed.

### Running the Stack
Start all services:
```sh
docker-compose up --build
```

The web frontend will be available at [http://localhost:8000](http://localhost:8000).

### Stopping the Stack
```sh
docker-compose down
```

## File Structure
- `index.html` – Main HTML page
- `style.css` – Stylesheet
- `script.js` – JavaScript logic
- `docker-compose.yml` – Service definitions
- `secrets/` – Secret files for Docker Compose

## Example Frontend
The default frontend is a simple page with a button and counter. Edit `index.html`, `style.css`, and `script.js` to customize.

## License
MIT (or specify your license)