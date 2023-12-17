$(document).ready(function () {
  // Sử dụng Datepicker cho ô nhập liệu ngày Datein
  $("#datein").datepicker({
    dateFormat: "yy-mm-dd", // Định dạng ngày (tùy chọn)
    changeMonth: true,
    changeYear: true
  });

  // Sử dụng Datepicker cho ô nhập liệu ngày Dateout
  $("#dateout").datepicker({
    dateFormat: "yy-mm-dd", // Định dạng ngày (tùy chọn)
    changeMonth: true,
    changeYear: true
  });
});



var rollV, idV, nameV, genderV, addressV, dateinV, dateoutV;

function readFom() {
rollV = document.getElementById("RollNo").value;
idV = document.getElementById("ID").value;
nameV = document.getElementById("Name").value;
genderV = document.getElementById("LicensePlates").value;
addressV = document.getElementById("Status").value;
dateinV = document.getElementById("TimeIn").value;
dateoutV = document.getElementById("TimeOut").value;
console.log(rollV, idV, nameV, addressV, genderV, dateinV, dateoutV);
}

document.getElementById("insert").onclick = function () {
readFom();

firebase
  .database()
  .ref("location/" + rollV)
  .set({
    ID: idV,
    RollNo: rollV,
    Name: nameV,
    LicensePlates: genderV,
    Status: addressV,
    TimeIn: dateinV,
    TimeOut: dateoutV,
  });
alert("Data Inserted");
rollV = document.getElementById("RollNo").value;
idV = document.getElementById("ID").value;
nameV = document.getElementById("Name").value;
genderV = document.getElementById("LicensePlates").value;
addressV = document.getElementById("Status").value;
dateinV = document.getElementById("TimeIn").value;
dateoutV = document.getElementById("TimeOut").value;
};

document.getElementById("read").onclick = function () {
readFom();

firebase
  .database()
  .ref("location/" + rollV)
  .on("value", function (snap) {
    document.getElementById("RollNo").value = snap.val().RollNo;
    document.getElementById("ID").value = snap.val().ID;
    document.getElementById("Name").value = snap.val().Name;
    document.getElementById("LicensePlates").value = snap.val().LicensePlates;
    document.getElementById("Status").value = snap.val().Status;
    document.getElementById("TimeIn").value = snap.val().TimeIn;
    document.getElementById("TimeOut").value = snap.val().TimeOut;
  });
};

document.getElementById("update").onclick = function () {
readFom();

firebase
  .database()
  .ref("location/" + rollV)
  .update({
    //   rollNo: rollV,
    ID: idV,
    RollNo: rollV,
    Name: nameV,
    LicensePlates: genderV,
    Status: addressV,
    TimeIn: dateinV,
    TimeOut: dateoutV,
  });
alert("Data Update");
document.getElementById("RollNo").value = "";
document.getElementById("ID").value = "";
document.getElementById("Name").value = "";
document.getElementById("LicensePlates").value = "";
document.getElementById("Status").value = "";
document.getElementById("TimeIn").value = snap.val().datein;
document.getElementById("TimeOut").value = snap.val().dateout;

};
document.getElementById("delete").onclick = function () {
readFom();

firebase
  .database()
  .ref("location/" + rollV)
  .remove();
alert("Data Deleted");
document.getElementById("RollNo").value = "";
document.getElementById("ID").value = "";
document.getElementById("Name").value = "";
document.getElementById("LicensePlates").value = "";
document.getElementById("Status").value = "";
document.getElementById("TimeIn").value = snap.val().datein;
document.getElementById("TimeOut").value = snap.val().dateout;
};


// Your existing Firebase configuration and other code...

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code...

  // Event listener for the "Close" button
  document.getElementById("close").addEventListener("click", function () {
    // Navigate back to index.html
    window.location.href = "index.html";
  });
});



