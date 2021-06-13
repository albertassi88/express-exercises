const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const validateJWT = require('./api/auth/validateJWT');

const app = express();

app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);

app.use(apiRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('conectado na porta ' + port));

