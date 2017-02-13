

//gets the data from the url
var data = $.ajax({
    url: `http://json-data.herokuapp.com/forms/`,
    dataType: "json",

  });

function createForm (item) {
  console.log(item);
  for (var i = 0; i < item.length; i++){
    if (item[i].type === "select") {
      var resultsHTML = `
        <div class = "dropDown">
          <select class="language">
            <option> Select Language</option>
            <option> ${item[i].options[0].label}</option>
            <option> ${item[i].options[1].label}</option>
            <option> ${item[i].options[2].label}</option>
            <option> ${item[i].options[3].label}</option>
            <option> ${item[i].options[4].label}</option>
          </select>
        </div>
      `;

    } else if (item[i].type === "text") {
      var resultsHTML = `
      <div class ="text-box">
        <i class ="smallIcon fa ${item[i].icon}"></i>
        <textarea class ="form" placeholder ="${item[i].label}"></textarea>
      </div>
      `;
    } else if (item[i].type === "email") {
      var resultsHTML = `
      <div class ="email">
        <i class ="smallIcon fa ${item[i].icon}"></i>
        <textarea class ="form" placeholder ="${item[i].label}"></textarea>
      </div>
      `;
    } else if (item[i].type === "textarea") {
      var resultsHTML = `
      <div class ="comment-box">
        <i class ="smallIcon fa ${item[i].icon}"></i>
        <textarea class ="form" placeholder ="${item[i].label}"></textarea>
      </div>
      `;
    } else if (item[i].type === "tel") {
      var resultsHTML = `
      <div class ="telephone">
        <i class ="smallIcon fa ${item[i].icon}"></i>
        <textarea class ="form" placeholder ="${item[i].label}"></textarea>
      </div>
      `;
    }


     $(".container").append(resultsHTML);

};
}

//data.then(console.log);
data.then(createForm);
