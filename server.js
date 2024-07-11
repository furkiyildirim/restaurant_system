const app = require('./src/app');
const configuration = require('./src/config');


// server running
const PORT = configuration.server_configuration.port;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});