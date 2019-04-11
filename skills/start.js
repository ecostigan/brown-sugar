module.exports = function(controller) {

  controller.hears('start','message_received', function(bot, message) {

    bot.reply(message,'The order started');

  });

}
