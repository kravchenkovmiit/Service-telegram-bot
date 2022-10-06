function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  var msg;

  MyTelegramFu.logData(update, "IL");
  console.log('Just started...');
  /*** PUT YOUR BOT NAME ***/
  if (update.message.hasOwnProperty('reply_to_message') && update.message.reply_to_message.from.username == "### PUT YOUR BOT NAME ###" ) {
    replyHeandler(update);
  } else if (update.hasOwnProperty('message') && update.message.hasOwnProperty('text') && update.message.text.length >= 1) {
    msg = update.message;
    if(msg.text.includes('/help'))
    {
      Logger.log("Help unit...");
      MyTelegramFu.sendSticker(msg, "CAACAgIAAxkBAAOPYnKg0TBeqbUeFs-9BRePVhqaIgIAAiEDAALPu9QOxDbMNaHx2IIkBA", token);
      helpReqIB(msg);
    }
    else if(msg.text.includes('/start'))
    {
      Logger.log("Start unit...");
      MyTelegramFu.sendSticker(msg, 'CAACAgIAAxkBAAOJYnKXUZ0Pq1u645mQTFRjNlktecYAAiYDAALPu9QOpFPt9CIa4u8kBA', token);
      startReqIB(msg);
    }
    else if(msg.text.includes('/sw_update'))
    {
      Logger.log("SW here...");
      MyTelegramFu.forceRep(msg, "Для внесения записи о прошивке состава в базу отправь номер головного вагона, версию прошивки, затраченное время через пробел, как указано в примере ниже:\n\n<i>75013 9.01 1:45</i>", token);
    }
    else if(msg.text.includes('/office'))
    {
      Logger.log("Office here...");
      MyTelegramFu.forceRep(msg, "Для внесения записи в базу о полном рабочем дне в офисе, отправь короткое описание работ на английском, например:\n\n<i>Office tasks, working with documents. Reporting.</i>", token);
    }
  }
}