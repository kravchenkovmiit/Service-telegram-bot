function sendSticker(msg, stickerID, token) {
  var payload = {
    'method': 'sendSticker',
    'chat_id': String(msg.chat.id),
    'sticker' : stickerID
  }     
  var data = {
    "method": "post",
    "payload": payload
  }
    
  // send a replay
  UrlFetchApp.fetch(telegramUrl + token + '/', data);
}

function sendMessage(msg, message, token) {
  var payload = {
    'method': 'sendMessage',
    'chat_id': String(msg.chat.id),
    'text': message,
    'parse_mode': 'HTML'
  }     
  var data = {
    "method": "post",
    "payload": payload
  }
  
  // send a replay
  UrlFetchApp.fetch(telegramUrl + token + '/', data);
}

function forceRep(msg, message, token) {
  var rMark = {
    'selective': true,
    'force_reply': true
  }
  var payload = {
    'method': 'sendMessage',
    'chat_id': String(msg.chat.id),
    'reply_to_message_id': msg.message_id,
    'text': message,
    'parse_mode': 'HTML',
    'reply_markup' : JSON.stringify(rMark)
  }     
  var data = {
    "method": "post",
    "payload": payload
  }
  
  // send a replay
  UrlFetchApp.fetch(telegramUrl + token + '/', data);
}

function sendKboard(msg, message, keyBoard, token) {
  // sample
  var keyboard = {
    "inline_keyboard": [
      [{
        "text": "Button 1", 
        "callback_data": "data 1"
      }],
      [{
        "text": "Button 2", 
        "callback_data": "data 2"
      }]
    ]
  };
  // sample
  
  var payload = {
    'method': 'sendMessage',
    'chat_id': String(msg.chat.id),
    'text': message,
    'parse_mode': 'HTML',
    'reply_markup' : JSON.stringify(keyBoard)
  }     
  var data = {
    "method": "post",
    "payload": payload
  }
    
  // send a replay
  UrlFetchApp.fetch(telegramUrl + token + '/', data);
}

function sendMassive(message, token) {
  
  /*********** Id list *********/
  /**put your id list in array**/

  var i = 0;
  var id = [];  
  
  while (i < id.length) {
    var payload = {
      'method': 'sendMessage',
      'chat_id': String(id[i]),
      'text': message,
      'parse_mode': 'HTML'
    }     
    var data = {
      "method": "post",
      "payload": payload
    }
    UrlFetchApp.fetch(telegramUrl + token + '/', data);
    Logger.log('Messages were sent!');
    i++;
  }
}

/**** Update messages respectivly ****/
function infoUpdate(token) {
  var message1 = '' +
    '<strong>Обновление ##</strong>\n' + 
    '####';
  var message2 = '<i>#####</i>';
  var message3 = '####' +
    '#### @## ####\n' +
    '<i>####</i>;
  sendMassive(message1, token);
  sendMassive(message2, token);
  sendMassive(message3, token);
}