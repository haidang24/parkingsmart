var firebaseConfig = {
  apiKey: "AIzaSyA43Hde625yMEu7q82kw4_ddHqwNigYvJQ",
  authDomain: "conect-to-firebase.firebaseapp.com",
  databaseURL: "https://conect-to-firebase-default-rtdb.firebaseio.com",
  projectId: "conect-to-firebase",
  storageBucket: "conect-to-firebase.appspot.com",
  messagingSenderId: "557246254108",
  appId: "1:557246254108:web:9dd705ba70c7da9427e3d9",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
var btnToggle = document.getElementById("Btn");

btnOn.onclick = function(){
    document.getElementById("denId_01").src = "./img/lighton.png"
    firebase.database().ref("/Control").update({
        "Led" : 1
    })
}
btnOff.onclick = function(){
    document.getElementById("denId_01").src = "./img/lightoff.png"
    firebase.database().ref("/Control").update({
        "Led" : 0
    })
}

var buttonValue = 0;

  // Hàm để cập nhật giá trị và cập nhật box
  function setButtonValue(value) {
    buttonValue = value;
    updateValue();
  }

  // Hàm để cập nhật giá trị trong box
  function updateValue() {
    document.getElementById("valueBox").innerHTML = "Value: " + buttonValue;
  }
  
  // Khai báo biến mặc định cho toggleButton
var toggleButtonValue = 0;

// Lấy tham chiếu đến toggleButton từ DOM
var toggleButton = document.getElementById("toggleButton");

// Xử lý sự kiện khi nút được nhấn
toggleButton.addEventListener("mousedown", function () {
  setToggleButtonValue(1);
});

// Xử lý sự kiện khi nút được nhả ra
toggleButton.addEventListener("mouseup", function () {
  setToggleButtonValue(0);
});

// Hàm để cập nhật giá trị của toggleButton và cập nhật lên Firebase
function setToggleButtonValue(value) {
  toggleButtonValue = value;

  // Cập nhật giá trị trên Firebase
  firebase.database().ref("/Control").update({
    "Value": toggleButtonValue
  });
}

// Hàm khởi tạo để cài đặt giá trị ban đầu từ Firebase
function initializeToggleButtonValue() {
  firebase.database().ref("/Control/ToggleButton").once("value").then(function (snapshot) {
    // Lấy giá trị từ Firebase
    var firebaseValue = snapshot.val();

    // Đặt giá trị của toggleButton và cập nhật giao diện nếu cần
    setToggleButtonValue(firebaseValue);

    // Cập nhật giao diện nếu cần (ví dụ: thay đổi hình ảnh trạng thái)
    updateToggleButtonUI();
  });
}

// Hàm cập nhật giao diện của toggleButton
function updateToggleButtonUI() {
  // Thực hiện các bước cập nhật giao diện dựa trên giá trị của toggleButton
  // Ví dụ: thay đổi hình ảnh, màu sắc, v.v.
  // document.getElementById("toggleButton").innerHTML = "Toggle: " + toggleButtonValue;
}

// Gọi hàm khởi tạo khi trang web được tải
window.onload = function () {
  initializeToggleButtonValue();
};


var buttonValues = [0, 0, 0, 0, 0]; // Giá trị mặc định cho 5 nút mới

// Lấy tham chiếu đến 5 nút mới từ DOM
var buttons = [];
for (var i = 1; i <= 5; i++) {
  buttons[i] = document.getElementById("button" + i);
  addEventListeners(buttons[i], i);
}

// Hàm để thêm sự kiện cho mỗi nút
function addEventListeners(button, index) {
  button.addEventListener("mousedown", function () {
    setButtonValue(index, 1);
  });

  button.addEventListener("mouseup", function () {
    setButtonValue(index, 0);
  });
}

// Hàm để cập nhật giá trị của nút và cập nhật lên Firebase
function setButtonValue(index, value) {
  buttonValues[index] = value;

  // Cập nhật giá trị trên Firebase
  firebase.database().ref("/Control" + index).update({
    "Value": buttonValues[index]
  });
}

// Hàm khởi tạo để cài đặt giá trị ban đầu từ Firebase cho 5 nút mới
function initializeButtonValues() {
  for (var i = 1; i <= 5; i++) {
    firebase.database().ref("/Control" + i + "/Value").once("value").then(function (snapshot) {
      // Lấy giá trị từ Firebase
      var firebaseValue = snapshot.val();

      // Đặt giá trị của nút và cập nhật giao diện nếu cần
      setButtonValue(i, firebaseValue);

      // Cập nhật giao diện nếu cần (ví dụ: thay đổi hình ảnh trạng thái)
      updateButtonUI(i);
    });
  }
}

// Hàm cập nhật giao diện của từng nút
function updateButtonUI(index) {
  // Thực hiện các bước cập nhật giao diện dựa trên giá trị của nút
  // Ví dụ: thay đổi hình ảnh, màu sắc, v.v.
  // document.getElementById("button" + index).innerHTML = "Button " + index + ": " + buttonValues[index];
}

// Gọi hàm khởi tạo khi trang web được tải
window.onload = function () {
  initializeToggleButtonValue();
  initializeButtonValues();
};


// Truy vấn dữ liệu từ Firebase Realtime Database tại đường dẫn "/Control"


// Lắng nghe sự kiện "value" trên đường dẫn "/Control/Led"





