# Express REST API Tutorial

This is a simple Express.js REST API tutorial project that demonstrates how to create a basic movie management API with CRUD operations.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) VS Code extension

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/oliverTwist2/express-rest-tutorial.git
cd express-rest-tutorial
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

The server will start running on `http://localhost:8000`

## API Endpoints

### Get All Movies
- **GET** `/movies`
- Returns a list of all movies

### Get Movie by ID
- **GET** `/movies/:id`
- Returns a specific movie by its ID

### Create New Movie
- **POST** `/movies`
- Creates a new movie
- Required fields in request body:
  ```json
  {
    "title": "Movie Title",
    "genre": "Movie Genre",
    "year": 2024
  }
  ```

### Update Movie
- **PUT** `/movies/:id`
- Updates an existing movie
- Required fields in request body:
  ```json
  {
    "title": "Updated Title",
    "genre": "Updated Genre",
    "year": 2024
  }
  ```

### Delete Movie
- **DELETE** `/movies/:id`
- Deletes a movie by its ID

## Testing with Thunder Client

1. Open VS Code and install the Thunder Client extension
2. Click on the Thunder Client icon in the sidebar
3. Create a new request collection for the movie API
4. Test each endpoint using the following examples:

### Create a Movie
- Method: POST
- URL: `http://localhost:8000/movies`
- Body (JSON):
  ```json
  {
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "year": 1999
  }
  ```

### Get All Movies
- Method: GET
- URL: `http://localhost:8000/movies`

### Get Movie by ID
- Method: GET
- URL: `http://localhost:8000/movies/1`

### Update Movie
- Method: PUT
- URL: `http://localhost:8000/movies/1`
- Body (JSON):
  ```json
  {
    "title": "The Matrix Reloaded",
    "genre": "Sci-Fi",
    "year": 2003
  }
  ```

### Delete Movie
- Method: DELETE
- URL: `http://localhost:8000/movies/1`

## Error Handling

The API includes basic error handling:
- 400: Bad Request (missing required fields)
- 404: Not Found (movie not found)
- 500: Internal Server Error

## Note

This is a demonstration project using in-memory storage. In a production environment, you would want to:
- Use a proper database (MongoDB, PostgreSQL, etc.)
- Implement proper authentication and authorization
- Use environment variables for configuration
- Implement proper error handling
- Add logging 

# Author
Ikegah Oliver A.