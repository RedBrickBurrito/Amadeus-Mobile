require('dotenv/config'); 

async function getResponse(wit_response) {
    const bot_response = processData(wit_response);
    return bot_response;
}

function processData(wit_response){
    const intents = wit_response.intents;
    const entities = wit_response.entities;
    const traits = wit_response.traits;

    /*
     * Super Complex logic, etc.
     */
    const bot_response = 'Thanks ^^';
    return bot_response
}

module.exports = {
    getResponse
}