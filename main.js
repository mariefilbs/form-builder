

//gets the data from the url
var data =
    $.ajax({
    url: `http://json-data.herokuapp.com/forms/`,
    dataType: "json",

  });

function createForm (item) {
  for (var i = 0; i < item.length; i++){
    var field = item[i];

    if (field.type === "select") {
      console.log(field);
      var resultsHTML = `
        <div id="${field.id}">
          <select class="language">
            <option> Select Language</option>
            ${setOptions(field.options)}

          </select>
        </div>
      `;

    } else if (field.type === "textarea") {
      var resultsHTML = `
      <div class ="comment-box">
        <i class ="small-icon fa ${field.icon}"></i>
        <textarea class ="form" placeholder ="${field.label}"></textarea>
      </div>
      `;
    } else if (field.type != "select" && field.type != "textarea") {
      var resultsHTML = `
      <div id="${field.id}">
        <i class ="small-icon fa ${field.icon}"></i>
        <input class ="form" placeholder ="${field.label}"/>
      </div>
      `;
    }

     $(".container").append(resultsHTML);

};

}

function setOptions (option) {
  var html = "";
  // debugger;
    for (var i = 0; i < option.length; i++) {
      if (i < option.length) html += "<option>";
      //console.log('THIS IS OPTION', option);
      html += option[i].label + '</option>';
      //console.log(html);

    }
  return html;
}


//data.then(console.log);
data.then(createForm);
