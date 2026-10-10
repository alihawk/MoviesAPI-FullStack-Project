# Movies API – Full Stack

Movie catalogue with trailers and user reviews.

- **Backend:** Java 17, Spring Boot 3.5, Spring Data MongoDB (repo root, `src/`)
- **Frontend:** React 18, React Router, React Bootstrap, MUI (`movies-frontend/`)

## API

| Method | Path | Description |
|---|---|---|
| GET | `/api/v1/movies` | All movies |
| GET | `/api/v1/movies/imdb/{imdbId}` | One movie with its reviews |
| POST | `/api/v1/reviews` | Add a review: `{"reviewBody": "...", "imdbId": "..."}` |

## Running locally

**Backend** (port 8080). Copy `src/main/resources/.env.example` to `.env` and fill in your MongoDB Atlas details, then:

```bash
./mvnw spring-boot:run
```

**Frontend** (port 3000):

```bash
cd movies-frontend
npm install
npm start
```

The frontend calls `http://localhost:8080` by default; set `REACT_APP_API_URL` to point it at another backend.
