const {Wit, log} = require('node-wit');
const responseManager = require('../manager/responseManager');
require('dotenv/config');

const client = new Wit({
    accessToken: "FL27RPPMNTZB7OFGK3TLO22ZGFBT7GRS",
});

async function test(req, res) {
}

async function handleMessage(req, res) {
    const message = req.body.message;
    const wit_response = await client.message(message);
    const bot_response = await responseManager.getResponse(wit_response);
    res.json(bot_response);
}

module.exports = {
    test,
    handleMessage
};