# Podcaster mini app

The project is separated into two sections, "client" and "server".
The server part is not implemented properly. This is only to simulate 
clean responses.

## Dependences
node v18.16.1 (npm v9.5.1)

## How to use it

### develop mode (react client)
```
cd server
npm i
npm run ts:dev
cd ../client/react
npm i
npm run dev
```
### production preview mode
```
cd server
npm i
npm run ts:dev
cd ../client
npm i
npm build
npm run preview
```