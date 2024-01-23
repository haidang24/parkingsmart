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
  
  
  
  var rollV, nameV, genderV, addressV, dateinV, dateoutV;
  
  function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  console.log(rollV, nameV);
  }
  
  document.getElementById("insert").onclick = function () {
  readFom();
  
  firebase
    .database()
    .ref("Control/")
    .set({
      Up: "false",
      Down: "false",
      In: "false",
      Out: "false",
      Forward: "false",
      Reverse: "false",
      location: rollV,
      status: nameV,
    });
  alert("Data Inserted");
  document.getElementById("location").value = "";
  document.getElementById("status").value = "";
  };
  
  document.getElementById("read").onclick = function () {
  readFom();
  
  firebase
    .database()
    .ref("inout/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
    });
  };
  
  document.getElementById("update").onclick = function () {
  readFom();
  
  firebase
    .database()
    .ref("inout/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  };
  document.getElementById("delete").onclick = function () {
  readFom();
  
  firebase
    .database()
    .ref("location/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
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
  // Trong file script.js

  





  
  
  
  