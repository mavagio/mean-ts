import * as express from 'express';

const apiController = require('../controllers/apiController');

module.exports = (app: any) => {

    const router = express.Router();
    /**
     * Route examples
     * */
    app.route('/api/test/').get(apiController.test_get);
    app.route('/api/test/').post(apiController.test_post);
};
