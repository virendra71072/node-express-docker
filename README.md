# Simple Node.js Express App with Docker

This is a simple Node.js Express application with two API routes (GET and POST), containerized using Docker. The app demonstrates how to build and run a basic web API inside a Docker container.

## Features

- **GET /api/data**: Returns a simple message with some data.
- **POST /api/data**: Accepts JSON data and returns it in the response.

## Prerequisites

- [Node.js](https://nodejs.org/) (for local development without Docker)
- [Docker](https://www.docker.com/) (for containerization)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/virendra71072/node-express-docker.git
cd node-express-docker
```

### 2. Install dependencies (Optional: if running locally without Docker)

```bash
npm install
```

### 3. Run the application locally (Optional: without Docker)

```bash
npm start
```

The app will be running at `http://localhost:3000`.

### 4. Run the application with Docker

#### Build the Docker image

```bash
docker build -t node-express-docker .
```

#### Run the Docker container

```bash
docker run -p 3000:3000 node-express-docker
```

The app will be running at `http://localhost:3000`.

## API Endpoints

### GET /

- **URL**: `/`
- **Method**: `GET`
- **Description**: Returns a welcome message.

```bash
curl http://localhost:3000/
```

**Response**:

```
Welcome to the Node.js Express App!
```

### GET /api/data

- **URL**: `/api/data`
- **Method**: `GET`
- **Description**: Returns a simple message with some data.

```bash
curl http://localhost:3000/api/data
```

**Response**:

```json
{
  "message": "Here is some data!"
}
```

### POST /api/data

- **URL**: `/api/data`
- **Method**: `POST`
- **Description**: Accepts JSON data and returns it in the response.

```bash
curl -X POST http://localhost:3000/api/data -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'
```

**Response**:

```json
{
  "message": "Data received!",
  "data": {
    "name": "John",
    "age": 30
  }
}
```

## Project Structure

```
.
├── app.js           # Main application file
├── package.json     # Project dependencies and scripts
├── Dockerfile       # Docker configuration
└── README.md        # Project documentation
```

## Dockerfile Breakdown

- **Base Image**: `node:18` (Official Node.js image)
- **Working Directory**: `/usr/src/app`
- **Dependencies**: Install using `npm install`
- **Expose Port**: `3000`
- **Start Command**: `npm start`
