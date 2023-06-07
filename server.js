const express = require('express');
const app = express();
const path = require('path');

//Configura el directorio de archivos estáticos en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para mostrar el formulario de SurveyJS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Aquí se inicia el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
