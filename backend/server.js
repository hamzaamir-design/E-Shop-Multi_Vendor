const app = require('./app');

// Handling uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    process.exit(1);
});

// config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(
        path = "backend/config/.env"
    );
}

// creates the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

// Handling unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection');
    server.close(() => {
        process.exit(1);
    })
});
