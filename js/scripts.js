var answerr = [];
var stringArray = [];
var reg = /[qwrtypsdfghjklzxcvbnm]{1,}/
var regnum = /[1234567890]{1,}/

function converter() {
  for (i = 0; i < stringArray.length; i++) {
    var value = stringArray[i];
    if (regnum.exec(value[0]) != null) {
      answerr.push(value);
    } else if (value[0] === "a" || value[0] === "e" || value[0] === "i" || value[0] === "o" || value[0] === "u") {
      answerr.push(value + "ay");
    } else if (reg.exec(value[0]) != null) {
      var cut = reg.exec(value)[0];
      if (cut[cut.length - 1] === "q") {
        cut = cut + "u";
        answerr.push(value.replace(cut, "") + cut + "ay");
      } else {
        answerr.push(value.replace(cut, "") + cut + "ay");
      }
    }
  }
}


$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var item = $("#tbox").val().toLowerCase();
    stringArray = item.split(" ");
    converter();
    $("#output").append("<p>" + answerr.join(" ") + "</p>");
    // console.log(item);
    answerr = []
  });
});
