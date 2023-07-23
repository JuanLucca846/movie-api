# Movie API

I created this API to manage movies.

Features

```bash
Get all movies.
Get a specific movie by ID.
Create a new movie.
Edit an existing movie.
Delete an existing movie.
```

### Technologies!

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

#### Installation

```bash
$ npm install
```

### Running the app

```bash
$npx prisma migrate dev

$npx prisma studio

# development
$ npm run serve

# tests
$ npm run test
```

## API Endpoints

| Method | Endpoint    | Responsibility     |
| ------ | ----------- | ------------------ |
| POST   | /movies     | Create movie       |
| GET    | /movies     | Get all movies     |
| GET    | /movies/:id | Find movie by id   |
| PATCH  | /movies/:id | Update movie by id |
| DELETE | /movies/:id | Delete movie by id |

### Examples

| **POST /movies**  |
| ----------------- |
| **Request Body:** |

```json
{
  "name": "Movie 1",
  "category": "Movie",
  "duration": 120,
  "price": 35
}
```

| **PATCH /movies/:id** |
| --------------------- |
| **Request Body:**     |

```json
{
  "name": "Movie 2"
}
```

### Enviroment

```bash
PORT=3000
DATABASE_URL=
```
