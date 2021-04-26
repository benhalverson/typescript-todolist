 

# To-Do App

Please create a simple To-Do app, with a web UI, that allows users to at least:
- Create/edit/delete to-do notes that include a due date
- View notes with their due date on a calendar view
- Persist notes to a backend (could use any kind of storage, e.g. local file storage or even in-memory)
- [Bonus] Allow searching/filtering for notes

## Tech used

- typescript
- react
- jest (maybe included...)
- material-ui
- docker
- gcp app engine
- gcal API
- mongoDB
- next.js (seperate repo)

## Assumptions
No auth for either the user or auth on the backend.

gcal will load data from my private api but can not modify the data.


## Getting started

Install docker compose

`docker-compose up`


Other way

step 1 get front-end code (this repo)
- `git clone ...`
- `npm i`
- `npm start`

step 2 start mongo server in another terminal 
- `mongod`

step 3 in another terminal clone and install the backend code
- `git clone ...`
- `npm i` 
- `npm start`

