function swUpload(msg, fields) {
  var ssDB = SpreadsheetApp.openById(dbId);
  var sheetMain = ssDB.getSheetByName("Main");
  var lRow = IFE_DB_20_script.getLastRowSpec(sheetMain, "A1:A") + 1;
  var train = getPlace(fields[0], ssDB);
  
  sheetMain.getRange(lRow, 1, 1, 29).setValues([[Utilities.formatDate(new Date(), "GMT+3", "MM/dd/yyyy"),
  getSurname(msg), , , train.place, "Non-complaint", 1, , fields[0], ,
  "Software uploaded - version: " + fields[1], , , , , , true, , , , ,
  "SW installation", "1:00", "0:00", fields[2],"0:20", , "N/A", ""]]);
  sheetMain.getRange(lRow, 27).setFormula('=IF(SUM(W' + lRow + ':Z' + lRow + ') > 0, SUM(W' + lRow + ':Z' + lRow + '), "")');
  IFE_DB_20_script.checkDataFu(ssDB, lRow);
  return train.number;
}

function getSurname(msg) {
  if (msg.from.first_name.includes("**USERNAME_0**") || msg.from.first_name.includes("**USERNAME_0**")) {return "**USER N_0**"}
  else if (msg.from.first_name.includes("**USERNAME_1**") || msg.from.first_name.includes("**USERNAME_1**")) {return "**USER N_1**"}
  else if (msg.from.first_name.includes("**USERNAME_2**") || msg.from.first_name.includes("**USERNAME_2**")) {return "**USER N_2**"}
  else if (msg.from.first_name.includes("**USERNAME_3**") || msg.from.first_name.includes("**USERNAME_3**")) {return "**USER N_3**"}
  else if (msg.from.first_name.includes("**USERNAME_4**") || msg.from.first_name.includes("**USERNAME_4**")) {return "**USER N_4**"}
  else if (msg.from.first_name.includes("**USERNAME_5**") || msg.from.first_name.includes("**USERNAME_5**")) {return "**USER N_5**"}
  else if (msg.from.first_name.includes("**USERNAME_6**") || msg.from.first_name.includes("**USERNAME_6**")) {return "**USER N_6**"}
  else {return msg.from.first_name + ' ' + msg.from.last_name}
}

function getPlace(car, ss) {
  var i = 1;
  var trainsData;
  var train = {
            number: "undefined",
            place:  "undefined"
          }
  //Add Train info
  if (car.length > 0) {
    trainsData = ss.getSheetByName("Trains").getDataRange().getDisplayValues();
    while (i < trainsData.length) {
      j = 3;
      while (j < 11) {
        if (trainsData[i][j] === car){
          //Train
          train = {
            number: trainsData[i][0],
            place:  trainsData[i][14]
          }
          Logger.log("Train is " + train);
          break;
        }
        j++;
      }
      i++;
    }
    return train;
  }
}

function wrongMsg (update, msg) {
  MyTelegramFu.sendMessage(update.message, "🤷‍♀️", token);
  MyTelegramFu.sendMessage(update.message, "Внеси 3 параметра через пробел по образцу...", token);
  MyTelegramFu.forceRep(msg, "Для внесения записи о прошивке состава в базу отправь номер головного вагона, версию прошивки, затраченное время через пробел, как указано в примере ниже:\n\n<i>75013 9.01 1:45</i>", token);
}
