const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { render404Page } = require('./controller/error');
const specs = require('./swagger');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(render404Page);

app.listen(3000);

