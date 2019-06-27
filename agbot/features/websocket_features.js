/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');


        controller.hears(new RegExp('Help','i'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here are some suggestions!',
                quick_replies: [
                    {
                        title: 'Policy Related',
                        payload: 'Policy Related',
                    },
                    {
                        title: 'Finding Information',
                        payload: 'Finding Information',
                    },
                    {
                        title: 'Site Related',
                        payload: 'Site Related',
                    }
                ]
            });
        });

        controller.hears(new RegExp('What?','i'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Here are some of the suggestions!',
                quick_replies: [
                  {
                      title: 'Policy Related',
                      payload: 'Policy Related',
                  },
                  {
                      title: 'Finding Information',
                      payload: 'Finding Information',
                  },
                  {
                      title: 'Site Related',
                      payload: 'Site Related',
                  }
                ]
            });
        });

        controller.hears(new RegExp('Site','i'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Are you looking provide your feedback or report an issue?',
                quick_replies: [
                    {
                        title: 'I found an error on the Gateway.',
                        payload: 'Error',
                    },
                    {
                        title: 'I want to provide feedback.',
                        payload: 'Feedback',
                    },
                    {
                        title: 'I want to speak with a person.',
                        payload: 'Speak',
                    }
                ]
            });
        });

        controller.hears(new RegExp('Speak','i'),'message', async(bot, message) => {
            await bot.reply(message, 'Here you go! <a target="_blank" href="https://hallways.cap.gsa.gov/login-information">Contact Us</a>');
        });




        controller.hears(new RegExp('Info','i'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Looks like you need help finding relavent information. Here are your options:',
                quick_replies: [
                  {
                      title: 'Forecast of Contracting Opportunities',
                      payload: 'Forecast of Contracting Opportunities',
                  },
                    {
                        title: 'Document Library',
                        payload: 'Document Library',
                    },
                    {
                        title: 'Community Discussions',
                        payload: 'Community Discussions',
                    },
                    {
                        title: 'eBuy Open',
                        payload: 'eBuy Open',
                    }
                ]
            });
        });

        controller.hears(new RegExp('Forecast','i'),'message', async(bot, message) => {
            await bot.reply(message, 'See if this link helps! <a target="_blank" href="https://hallways.cap.gsa.gov/app/#/x/forecast-of-contracting-opportunities">Forecast of Contracting Opportunities</a>');
        });

        controller.hears(new RegExp('Contracting','i'),'message', async(bot, message) => {
            await bot.reply(message, 'See if this link helps! <a target="_blank" href="https://hallways.cap.gsa.gov/app/#/x/forecast-of-contracting-opportunities">Forecast of Contracting Opportunities</a>');
        });

        controller.hears(new RegExp('Opportunities','i'),'message', async(bot, message) => {
            await bot.reply(message, 'See if this link helps! <a target="_blank" href="https://hallways.cap.gsa.gov/app/#/x/forecast-of-contracting-opportunities">Forecast of Contracting Opportunities</a>');
        });

        controller.hears(new RegExp('Info','i'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Looks like you need help finding relavent information. Here are your options:',
                quick_replies: [
                    {
                        title: 'Prices Paid Data',
                        payload: 'Prices Paid Data',
                    },
                    {
                        title: 'Community Discussions',
                        payload: 'Community Discussions',
                    },
                    {
                        title: 'eBuy Open',
                        payload: 'eBuy Open',
                    }
                ]
            });
        });

        controller.hears(new RegExp('End','i'), 'message', async (bot, message) => {

            await bot.reply(message,{
                text: 'Thank you for chatting with me today. How did I do today?:',
                quick_replies: [
                    {
                        title: 'Awesome',
                        payload: 'Awesome',
                    },
                    {
                        title: 'Good',
                        payload: 'Good',
                    },
                    {
                        title: 'OK',
                        payload: 'OK',
                    }
                ]
            });
        });

        controller.hears(new RegExp('Awesome','i'), 'message', async (bot, message) => {
            await bot.reply(message, 'Thank you for your feedback!');
        });

        controller.hears(new RegExp('Good','i'), 'message', async (bot, message) => {
            await bot.reply(message, 'Thank you for your feedback!');
        });

        controller.hears(new RegExp('OK','i'), 'message', async (bot, message) => {
            await bot.reply(message, 'Thank you for your feedback!');
        });


    }

}
