/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('sample','message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.on('message', async(bot, message) => {
        await bot.reply(message, 'I am sorry. I cannot help you with this at the moment!');
    });

    /* controller.on('message', async(bot, message) => {
        await bot.reply(message, `What is available on the Gateway?`);
    });*/





}
