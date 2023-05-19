# Social_api

This is a sample Node.js service that provides two API endpoints to fetch comments and posts.

## Installation

1. Clone the repository: git clone `<repository_url>`

2. Install the dependencies: `yarn install or npm install`

## Usage

To start the service locally, run the following command: ` npm start or yarn start`

The server will start running on `http://localhost:4000 or
 create a .env file and add a desired port as a variable PORT `.

## API Endpoints

- `GET /api/comments`:Returns comments with a default limit or you can also add custom limit `/api/comments?limit=<number>`.
- `GET /api/posts`: Returns posts with the default limit or you can also add custom limit `/api/posts?limit=<number>`..
