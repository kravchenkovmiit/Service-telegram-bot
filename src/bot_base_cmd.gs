function helpReqIB(msg) {
  var message = ' <strong>Help:</strong>\n\n' + 
    'Бот умеет добавлять записи о прошивке в базу...\n' + 
      'Для этого отправь комманду /sw_update и следуй инструкциям.\n\n' +
      'Также можно внести запись о полном рабочем дне в офисе отправив команду /office';
  MyTelegramFu.sendMessage(msg, message, token);
}

function startReqIB(msg) {
  var message = ' <strong>My story is a lot like yours, only more interesting ‘cause it involves robots!</strong>\n\n' + 
    'Бот умеет добавлять записи о прошивке в базу.\n' + 
      'Для этого отправь комманду /sw_update и следуй инструкциям.\n' +
      'Также можно внести запись о полном рабочем дне в офисе отправив команду /office';
  MyTelegramFu.sendMessage(msg, message, token);
}

function officeRec(msg) {
  var ssDB = SpreadsheetApp.openById(dbId);
  var sheetMain = ssDB.getSheetByName("Main");
  var lRow = IFE_DB_20_script.getLastRowSpec(sheetMain, "A1:A") + 1;

  console.log(lRow + " - lRow");
  sheetMain.getRange(lRow, 1, 1, 29).setValues([[Utilities.formatDate(new Date(), "GMT+3", "MM/dd/yyyy"),
  getSurname(msg), , , "Office", "Non-complaint", 1, , , , msg.text, , , , , , true,
  , , , , "Administrative / office work", "0:00", "0:00",
  "8:00","0:00", , "N/A", ""]]);
  sheetMain.getRange(lRow, 27).setFormula('=IF(SUM(W' + lRow + ':Z' + lRow + ') > 0, SUM(W' + lRow + ':Z' + lRow + '), "")');
  IFE_DB_20_script.checkDataFu(ssDB, lRow);
  return Utilities.formatDate(new Date(), "GMT+3", "dd.MM.yyyy");
}