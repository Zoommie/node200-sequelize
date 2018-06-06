const server = require('./app');
const port = process.env.PORT ||8080;

server.listen(process.env.PORT || 8080, () => {
    console.log('listening at http://localhost:8080');
});