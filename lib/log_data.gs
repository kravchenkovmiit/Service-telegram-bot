function logData(upd, sheetName) {
  var sheet =  SpreadsheetApp.openById(ssLogId).getSheetByName(sheetName);
  var lastRow = sheet.getDataRange().getDisplayValues().length + 1;
  
  Logger.log(lastRow);
  sheet.getRange(lastRow, 1, 1, 6)
    .setValues(
        [[Utilities.formatDate(new Date(),
         "GMT+3", "dd/MM/yyyy HH:mm:ss"), 
         upd.message.from.id,
         upd.message.from.first_name + ' ' + upd.message.from.last_name,
         upd.message.text, upd,
         upd.message.chat.type]]);
}