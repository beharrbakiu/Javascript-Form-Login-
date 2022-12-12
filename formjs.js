const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const colorPicker = document.getElementById("color_picker");
console.log(colorPicker.value);

const table = document.getElementById("table");

function submit() {
  var education = document.getElementsByName("education");
  var edu = "";

  for (var i = 0, length = education.length; i < length; i++) {
    if (education[i].checked) {
      edu = education[i].value;

      break;
    }
  }

  if (
    firstName.value != "" &&
    lastName.value != "" &&
    age.value != "" &&
    gender.value != "" &&
    edu != ""
  ) {
    document.getElementById('table').style.display = 'table';
    var td1 = "<td>" + firstName.value + "</td>";
    var td2 = "<td>" + lastName.value + "</td>";
    var td3 = "<td>" + age.value + "</td>";
    var td4 = "<td>" + gender.value + "</td>";
    var td5 = "<td>" + edu + "</td>";
    var td6 = "<td><button onclick='remove()'>Delete</button></td>";
    var bg = "background-color: " + colorPicker.value;
    var tr =
      "<tr id='teksti' style='" +
      bg +
      "'>" +
      td1 +
      td2 +
      td3 +
      td4 +
      td5 +
      td6 +
      "</tr>";
    table.innerHTML += tr;

    firstName.value = "";
    lastName.value = "";
    age.value = "";
  } else {
    alert("u must fill all of them ");
  }
}

function remove() {
  // event.target will be the input element.
  var td = event.target.parentNode;
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}