function setWebhook() {
  Logger.log("Start");
  var url = telegramUrl + '/setWebhook?url=' + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log("Response: " + response);
}

function deleteWebhook() {
  Logger.log("Start");
  var url = telegramUrl + '/setWebhook?url=';
  var response = UrlFetchApp.fetch(url);
  Logger.log("Response: " + response);
}

function webhookInfo() {
  Logger.log("Start");
  var url = telegramUrl + '/getWebhookInfo';
  var response = UrlFetchApp.fetch(url);
  Logger.log("Response: " + response);
}