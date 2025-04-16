const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/simulate', (req, res) => {
  const { ventasMensuales, costosFijos, costosVariables, empleados, accion } = req.body;

  let proyeccion = parseFloat(ventasMensuales);
  let opinion = "neutral";
  let recomendacion = "";

  if (accion === "subir_precios") {
    proyeccion *= 1.1;
    opinion = "positiva";
    recomendacion = "Se recomienda subir los precios en un 10%";
  }

  res.json({
    proyeccion,
    opinion,
    recomendacion
  });
});

app.listen(5000, () => console.log("Servidor en puerto 5000"));
