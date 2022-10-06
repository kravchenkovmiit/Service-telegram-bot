function replyHeandler(update) {
  var train;
  var date;
  var i;
  var fields;

  if (update.message.reply_to_message.message_id == update.message.message_id - 1) {
    if (update.message.reply_to_message.text.includes("Для внесения записи о прошивке")) {
      fields = update.message.text.split(' ');
      i = 0;
      while (fields[i] != undefined) { i++}
      if (i === 3 && fields[0].match(/^\d+$/) != null && fields[1].match(/^\d+\.\d+$/) != null) {
        if (fields[2].includes('.') || fields[2].includes(',') || fields[2].includes(';')) {
          fields[2] = fields[2].replace(/,|;|\./g, ":");
        }
        train = swUpload(update.message, fields);
        MyTelegramFu.sendMessage(update.message, "Прошивка состава " + train + " версией " + fields[1] + " внесена в базу.", token);
      } else {
        wrongMsg(update, update.message);
      }
    } else if (update.message.reply_to_message.text.includes("Для внесения записи в базу о полном рабочем дне")) {
      date = officeRec(update.message);
      MyTelegramFu.sendMessage(update.message, "👨‍💻", token);
      MyTelegramFu.sendMessage(update.message, "Запись о полном рабочем дне за " + date + " внесена в базу.", token);
    }
  } else {
    MyTelegramFu.sendMessage(update.message, "🤷‍♀️", token);
    MyTelegramFu.sendMessage(update.message, "Попробуй заново...", token);
  }
}