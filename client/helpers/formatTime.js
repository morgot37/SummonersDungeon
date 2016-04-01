UI.registerHelper("formatDate", function(datetime) {
  if (moment) {
    return moment(datetime).calendar().toLowerCase();
  }
  else {
    return datetime;
  }
});