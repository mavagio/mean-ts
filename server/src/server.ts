import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/boilerplateDb', {
    useMongoClient: true,
    promiseLibrary: global.Promise,
});

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));

const routes = require('./api/routes/apiRoutes');
routes(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
