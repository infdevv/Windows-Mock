
// Product key: tes862440

// Added chrome ( port from rcpos )
// Changed how the X button looked 

// Utility tools: CTRL + F

// Made it so theres extra non js commands in cmd:

// sysrun("function()") - Close the CMD tab and open the new tab

// sysfix - Fixes the system via restart from boot 

// restart - Restarts the system to Passlock ( DO NOT RUN IT )

// Giant try of doom ( system erorr recovery )
try{
// Hide stuff or something 
$("#cmdbar").toggle()
$(".pushnoti").toggle()
$(".notifications").toggle()

// Variables 
rantime=0

setInterval(function () {
  var elems = document.querySelectorAll(".ifme"); // Get all elements with class="ifme"
  Array.prototype.forEach.call(elems, function (elem) {
    elem.style.width = "100%";
    elem.style.height = "100%";
  });
}, 100);


setInterval(function () {
  try {
    const time = new Date();
    document.getElementById("clock").innerHTML = time.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h24",
    });
  } catch {}
}, 500); // 1000 milliseconds (1 second) interval
function productcheck(str) {
  alpha = str[+0];
  alpha = alpha + str[+1];
  alpha = alpha + str[+2];
  beta = str.replace(alpha, "");
  function isEven(number) {
    return number % 2 === 0;
  }

  result = isEven(beta);
  if (result == true) {
    return true;
  } else {
    return false;
  }
}

// Setup Essentials

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "f") {
    alert("System Utilitys opening");
    try {
      closeWindow();
    } finally {
      cmd1();
    }
  }
});

function boot() {
  document.body.style.backgroundColor = "#000000";
  // CSS styles for the centered div
  windowsicon =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8LFsejSKHAUqlLdTJ9wzRqn9GhRqMyhmpw&usqp=CAU";
  // Create the loading screen element
  var loadingScreen = document.createElement("div");
  loadingScreen.id = "loading-screen";
  loadingScreen.style.width = "100%";
  loadingScreen.style.height = "100%";
  loadingScreen.style.backgroundColor = "#f3f3f3";
  loadingScreen.style.display = "flex";
  loadingScreen.style.justifyContent = "center";
  loadingScreen.style.alignItems = "center";
  loadingScreen.style.position = "fixed";
  loadingScreen.style.top = "0";
  loadingScreen.style.left = "0";
  loadingScreen.style.zIndex = "9999";

  var spinner = document.createElement("div");
  spinner.classList.add("spinner");

  var loadingText = document.createElement("div");
  loadingText.id = "loading-text";
  loadingText.style.fontSize = "24px";
  loadingText.style.color = "#333";
  loadingText.textContent = " \n \n ​       ​ Loading Windows Infinite";

  loadingScreen.appendChild(spinner);
  loadingScreen.appendChild(loadingText);
  document.body.appendChild(loadingScreen);

  // here we do stuff

  hostname = window.location.hostname;

  if (hostname == "solocode.azurewebsites.net ") {
    const platforrm = "Sololearn";
  } else {
    const hostname = "Host Undetectable";
  }

  // Simulate some asynchronous task
  function simulateTask() {
    return new Promise(function (resolve) {
      setTimeout(resolve, 3000); // Simulating a 3-second task
    });
  }

  // Call the simulateTask function
  simulateTask().then(function () {
    // Hide the loading screen
    loadingScreen.style.display = "none";
  });

  checkFirstRun();

  try{
    code=localStorage.getItem("startup")
    eval(code)
  }
  finally{

  }

}

function sysrun(str) {
  closeWindow();
  eval(str);
}

function checkFirstRun() {
  // Check if the program has been run before
  if (localStorage.getItem("firstRun") === null) {
    // First run: execute firstRunFunction
    firstRunFunction();

    // Set a flag indicating that the program has been run before
    localStorage.setItem("firstRun", "true");
  } else {
    // Not the first run: execute otherFunction
    otherFunction();
  }
}

function firstRunFunction() {
  firsttime();
  // Do something specific for the first run
}

function otherFunction() {
  startup();
  //Do something specific for subsequent runs
}

// Leave this:

boot();

function gettasks() {
  // Create an empty array to store the variables
  var variables = [];

  // Track the number of variables found
  var variableCount = 0;

  // Loop through the properties of the global object
  for (var variableName in window) {
    // Check if the property is a variable and not a built-in object or function
    if (
      window.hasOwnProperty(variableName) &&
      typeof window[variableName] !== "function"
    ) {
      // Increment the variable count
      variableCount++;

      // Check if the variable count is greater than or equal to 176
      if (variableCount >= 176) {
        // Add the variable name to the array
        variables.push(variableName);
      }
    }
  }

  // Print the list of variables
  return variables;
}

function opennotifications(){
    $(".notifications").toggle()
}

function openchrome() {
  create_window("Chrome", true);
  create("div", "content", "tabbar", "");
  create("br", "content");
  create("input", "content", "searchbar", "Input URL");
  create("button", "content", "", "Search", "search()");
  e = 1;
  create(
    "iframe",
    "content",
    "ifme",
    "",
    "",
    "https://storage2.w3spaces.com/google.html",
  );
  check1 = 1;
}

check1 = 0;
function search(str) {


  search1 = document.getElementById("searchbar").value;


  document.getElementById("ifme").setAttribute("src", search1);
  ifme = document.getElementById("ifme");
ifme.style.height = "100%";
}

function cmd1() {
  create_window("CMD", true);
  var contentDiv = document.getElementById("content");
  contentDiv.style.backgroundColor = "black";
  create("div", "content", "cmdline1");
  create("h6", "cmdline1", "cmd", "Command Prompt | Administrator");
  create("input", "content", "cmdline");
  cmdline.setAttribute("onkeypress", "handleKeyPress(event)");
}

// system
startupon = 0;

window.oncontextmenu = function () {};

function taskmgr() {
  create_window("Task Manager", true);
  create("center", "content", "center", "");
  create("h2", "center", "", "Task Manager");
  tasks = [gettasks()];
  create("br", "content");
  create("div", "content", "", "", "", "", "container");
  for (item in tasks) {
    create("h4", "center", "", tasks[item]);
    create("hr", "content");
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    runcmd();
  }
}

// Chat time

function runcmd() {
  var query = document.getElementById("cmdline").value;
  create("h6", "cmdline1", "cmd", query);
  if (query == "cmdbar"){
      $("cmdbar").toggle()
  }
  if (query == "cloak") {
      closeWindow()
    code = document.documentElement.outerHTML;
	   var win = window.open();
	   win.document.write(code);
  }
  if (query == "sysfix") {
    // Get all div elements in the document
    var divs = document.querySelectorAll("div");

    // Loop through each div element and remove it
    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      div.parentNode.removeChild(div);
    }

    document.write('<div id="screen"></div>');
    document.write(
      "<style> body { display: flex; align-items: center; justify-content: center; height: 100vh; background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3tHYZPdkovYKeXksUPv9tktWR0gOQxAx6cTB9I3P3Zci4xLkVD9kP90XyL-4KLDlnKk:https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-johannes-plenio-1146708.jpg%26fm%3Djpg&usqp=CAU); background-repeat: no-repeat; background-size: cover; user-select: none; } body { font-family: Arial, sans-serif; } .chat-window { width: 400px; height: 600px; border: 1px solid #ccc; margin: 50px auto; padding: 20px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); } h2 { text-align: center; } #computer-message { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 20px; } #user-input { width: 75%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; } #send-btn { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; } #send-btn:hover { background-color: #3e8e41; } #ifme{ width: 100%; height: 90%; } .window { position: absolute; background-color: #c2c2c2; width: 400px; min-height: 200px; max-height: 200px; border: 2px solid #000; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); resize: both; overflow-y: scroll; overflow-x: scroll; z-index: 1; } textarea{ width: 100%; height: 80%; } .spinner { width: 40px; height: 40px; border-radius: 50%; border: 4px solid #333; border-top-color: #999; animation: spin 1s infinite linear; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .contaner{ overflow: scroll; } .window-title { background-color: #017acd; padding: 8px; color: #fff; cursor: move; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } .window-content { padding: 8px; min-height: 150px; } .taskbar { position: fixed; bottom: 0; left: 0; width: 100%; height: 40px; background-color: #1c1c1c; color: white; display: flex; align-items: center; justify-content: flex-start; padding-left: 10px; } .start-button { width: 40px; height: 40px; background-color: #1c1c1c; color: white; border: none; outline: none; cursor: pointer; display: flex; align-items: center; justify-content: center; } .start-button:hover { background-color: #555; } .start-button img { width: 20px; height: 20px; } .start-menu { position: absolute; top: 40px; left: 0; width: 200px; background-color: #1c1c1c; color: white; border: 1px solid #555; padding: 10px; display: none; } .start-menu.active { display: block; } #cmd{ color: white; } #cmdline{ color: white; background-color: black; border-color: black; } #iframe{ overflow: auto; width: 50px; } #clock{ right: 0px; position: fixed; width: 100px; z-index: 9999; } .context-menu { display: none; position: absolute; background-color: #f9f9f9; border: 1px solid #ccc; padding: 5px; } </style>",
    );

    

    boot();

    return;
  }
  if (query == "restart") {
    create("h6", "cmdline1", "cmd", "Restarting...");
    setTimeout(function () {
      const myNode = document.getElementById("body");
      while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
      }
      passlock();
    }, 3000);
  }
  try {
    var tried = 0;
    eval(query);
  } catch (error) {
    tried = 1;
    create(
      "h6",
      "cmdline1",
      "cmd",
      "Error while running command: " + error.message,
    );
  }
  if (tried == 0) {
    create("h6", "cmdline1", "cmd", "Command ran successfully");
  }
}

function create(string, dom, id, text, onclick, src, class1) {
  para = document.createElement(string);
  para.innerText = text;
  para.setAttribute("id", id);
  para.setAttribute("onclick", onclick);
  para.setAttribute("src", src);
  para.setAttribute("class", class1);

  document.getElementById(dom).appendChild(para);
  para = null;
}

function create_file(name) {
  var drive = localStorage.getItem("drive");
  if (drive && drive.includes(name)) {
  } else {
    localStorage.setItem("drive", drive ? drive + "," + name : name);
  }
}

function filemanager() {
  try {
    drive = localStorage.getItem("drive");
    drive_files = drive.split(",");
  } catch (error) {}
  return drive_files;
}

function create_file1(name, value) {
  var drive = localStorage.getItem("drive1");
  if (drive && drive.includes(name)) {
  } else {
    localStorage.setItem("drive1", drive ? drive + "," + name : name);
    localStorage.setItem(name, value);
  }
}

function write_file1(name, value) {
  var drive = localStorage.getItem("drive1");
  localStorage.removeItem(name);
  alpha = filemanager();
  function removeStringFromArray(arr, stringToRemove) {
    return arr.filter((item) => item !== stringToRemove);
  }

  // Example usage:

  modifiedArray = removeStringFromArray(alpha, name);
  localStorage.setItem("drive1", modifiedArray);

  localStorage.setItem("drive1", drive ? drive + "," + name : name);
  localStorage.setItem(name, value);
}

function directorymgr() {
  try {
    const drive = localStorage.getItem("drive");
    const drive_files = drive.split(",");
    return drive_files;
  } catch (error) {
    console.log(error);
    // Handle error here or use a specific error handler
    setTimeout(() => firstRunFunction(), 3000);
  }
}

function filemgr() {
  create_window("Variable Explorer", true);
  drive_files = directorymgr();
  for (item in drive_files) {
    create("h3", "content", "", drive_files[item]);
    create("br", "content");
  }
}

function handle_error(error) {
  try {
    closeWindow();
  } finally {
    create_window("Error", true);
    create(
      "h4",
      "content",
      "",
      "Error:" + error + " Attemping automatic fix in 3 seconds",
    );

    setTimeout(function () {
      closeWindow();
      create_window("Attempting a system reset.");
      localStorage.clear();
      closeWindow;
      create_window("System mem wiped, restarting in 3 seconds");
      setTimeout(function () {
        closeWindow();
        firstRunFunction();
      }, 3000);
    });
  }
}

function notification(name,msg){
    box = document.createElement("div")
    box.innerHTML=(`
    <div class="notification">
    <h5> Notification from: ${name} </h5>
    <hr>
    <h6> ${msg} </h6>
    </div>
    `)
    notbox=(document.getElementById("notbox"))
    notbox.appendChild(box)
    $(".pushnoti").toggle()
    document.getElementById("name").innerHTML=(name)
    document.getElementById("info").innerHTML=(msg)
    setTimeout(function(){
        $(".pushnoti").toggle()
    },3000)
}

function create_window(name, exitpar) {
  // Create the window elements dynamically
  try{
      closeWindow()
  }
  catch{

  }

  const windowElem = document.createElement("div");
  windowElem.className = "window";
  windowElem.id = "window-main";

  const titleBar = document.createElement("div");
  titleBar.className = "window-title";
  titleBar.textContent = name;

  const content = document.createElement("div");
  content.className = "window-content";
  content.textContent = "";
  content.id = "content";

  windowElem.appendChild(titleBar);
  windowElem.appendChild(content);
  document.body.appendChild(windowElem);

  if (exitpar == true) {
      on=0



// Create a button element
var button = document.createElement('img');
button.src=fullscreen
button.id="fullscreen"
// Add an event listener to the button
button.addEventListener('click', function() {
  
  if (on == 1){
      on=0
      button.src=fullscreen
      windowElem.style.width = '40%';
  windowElem.style.height = '20%';
  }
  else{
      on=1
      button.src=minimize
      windowElem.style.width = '100%';
      windowElem.style.height = '100%';
  }
  // Set the width and height of the body element to 100%
  
});

// Add the button to the page
titleBar.appendChild(button);

    const exitButton = document.createElement("div");
    exitButton.className = "exit-button";
    exitButton.textContent = "X";
    exitButton.style.position = "absolute";
    exitButton.style.top = "5px";
    exitButton.style.right = "5px";

    titleBar.appendChild(exitButton);

    exitButton.addEventListener("click", () => {
      windowElem.remove();
    });
    return num
  }

  function reset1() {
    localStorage.setItem("drive1", "");
  }
  // Make the window draggable
  let isDragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  titleBar.addEventListener("mousedown", (event) => {
    isDragging = true;
    dragOffsetX = event.clientX - windowElem.offsetLeft;
    dragOffsetY = event.clientY - windowElem.offsetTop;
  });

  document.addEventListener("mousemove", (event) => {
    if (isDragging) {
      const left = event.clientX - dragOffsetX;
      const top = event.clientY - dragOffsetY;
      windowElem.style.left = `${left}px`;
      windowElem.style.top = `${top}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Make the window resizable
  const resizer = document.createElement("div");
  resizer.className = "resizer";
  windowElem.appendChild(resizer);

  resizer.addEventListener("mousedown", (event) => {
    event.stopPropagation();

    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = parseInt(
      window.getComputedStyle(windowElem).getPropertyValue("width"),
    );
    const startHeight = parseInt(
      window.getComputedStyle(windowElem).getPropertyValue("height"),
    );

    function resizeWindow(event) {
      const width = startWidth + event.clientX - startX;
      const height = startHeight + event.clientY - startY;
      windowElem.style.width = `${width}px`;
      windowElem.style.height = `${height}px`;
    }

    function stopResize() {
      document.removeEventListener("mousemove", resizeWindow);
      document.removeEventListener("mouseup", stopResize);
    }

    document.addEventListener("mousemove", resizeWindow);
    document.addEventListener("mouseup", stopResize);
  });
}

function closeWindow() {
  temp = document.getElementById("window-main");
  temp.remove();
  temp = null;
}

function reset() {
  user = directorymgr().filter((item) => item.startsWith("user/"));
  pass = directorymgr().filter((item) => item.startsWith("pass/"));
  localStorage.setItem("drive", "");
  localStorage.setItem("drive", user + ",");
  localStorage.setItem("drive", pass + ",");
  localStorage.setItem("C:/", pass + ",");
}

function startup() {
  num=create_window("Startup");
  create("center", "content", "center", "");
  create("h2", "center", "", "Loading assets");

  var fontList = ["Noto+Sans", "Lexend"];

  for (var i = 0; i < fontList.length; i++) {
    var fontName = fontList[i];

    var linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = "https://fonts.googleapis.com/css?family=" + fontName;

    document.head.appendChild(linkElement);

    var styleElement = document.createElement("style");
    styleElement.innerHTML =
      ".myText { font-family: '" + fontName + "', sans-serif; }";

    document.head.appendChild(styleElement);
  }

  bodyElement = document.querySelector("body");

  // Apply the font to the <body> element
  bodyElement.style.fontFamily = "Noto Sans";
  closeWindow();

  if (!directorymgr().includes("C:/")) {
    firsttime();
  }

  if ("c:/" in directorymgr()) {
    passlock();
  } else {
    passlock();
  }
}

function quickfile() {
  num=create_window("Quick File", true);
  create("input", "content", "name");
  create("h3", "content", "", "Only TXT supported currently");
  create(
    "button",
    ("content["+num+"]"),
    "",
    "Make file",
    "create_file1(document.getElementById('name').value, '')",
  );
}

document.addEventListener("DOMContentLoaded", function () {
  var contextMenu = document.createElement("div");
  contextMenu.className = "context-menu";
  contextMenu.innerHTML = `
        <ul>
          <li><a href="#" onclick="quickfile()">Create new file</a></li>
          <li><a>Context menu V1</a></li>
        </ul>
      `;

  document.body.appendChild(contextMenu);

  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    contextMenu.style.display = "block";
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
  });

  document.addEventListener("click", function (event) {
    contextMenu.style.display = "none";
  });

  document.addEventListener("mousemove", function (event) {
    var isInsideContextMenu = isDescendantOf(event.target, contextMenu);
    if (!isInsideContextMenu) {
      contextMenu.style.display = "none";
    }
  });

  function isDescendantOf(element, ancestor) {
    while (element !== null) {
      if (element === ancestor) {
        return true;
      }
      element = element.parentNode;
    }
    return false;
  }
});

// System files end here

// System files but not essentials

function firsttime() {
  rantime=1
  num=create_window("Welcome to Windows Infinite");
  create("h2", ("content"), "", "Give a product key!");
  create("input", ("content"), "productkey");
  create("button", ("content"), "", "Submit", "part2()");
}

function part2() {
  key = document.getElementById("productkey").value;
  if (productcheck(key) == true) {
    create("center", ("content"), "center", "");
    create("h2", ("content"), "", "Make a account");
    create("br", ("content"));
    create("input", ("content"), "input-signup");
    inputBox = document.getElementById("input-signup");
    inputBox.placeholder = "Enter Account Name";
    create("input", ("content"), "input-signup1");
    inputBox = document.getElementById("input-signup1");
    inputBox.placeholder = "Enter Account Password";
    create("br", ("content"));
    create("center", ("content"), "center2", "");
    passwordInput = document.getElementById("input-signup1");
    passwordInput.type = "password";
    create("button", "center2", "submit-button", "Submit", "finalize1331()");
  } else {
    alert("Incorrect");
  }
}

function finalize1331() {
  create_file("C:/");
  create_file("Users");
  create_file("user/" + document.getElementById("input-signup").value);
  create_file("pass/" + document.getElementById("input-signup1").value);
  closeWindow();
  passlock();
}

function passlock() {
  create_window("Sign in");
  create("center", ("content"), "center", "");

  const filteredList = directorymgr().filter((item) =>
    item.startsWith("user/"),
  );

  create("h3", "center", "", filteredList);
  create("br", ("content"));
  create("center", ("content"), "center", "");
  create("input", "center", "passcheck");
  inputBox = document.getElementById("passcheck");
  inputBox.placeholder = "Enter Account Password";
  inputBox.type = "password";
  create("br", "content");
  create("center", ("content"), "center1", "");
  create("button", "center", "", "Check Password", "keycheck()");
}

function settings2() {
  create_window("Settings", true);
  // Get a reference to the div element
  create("h2", "content", "", "hi");
}

function submitimg12() {
  document.body.style.backgroundImage =
    'url("' + document.getElementById("textbox11").value + '")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  localStorage.setItem("bg", document.getElementById("textbox11").value);
}

function customize() {
  create_window("Customize Windows", true);
  create("h2", "content", "", "Customize windows!");
  create("h3", "content", "", "Background IMG");
  create("input", "content", "textbox11");
  create("button", "content", "", "Submit image", "submitimg12()");
}

function appmgr(str) {
  closeWindow();
  eval(str);
}

function keycheck() {
  //const filteredList = directorymgr().filter(item => item.startsWith('pass/'))

  pass = document.getElementById(passcheck);
  filteredList = pass;
  if ("pass/" + pass == filteredList) {
    closeWindow();
  }
  //console.log(filteredList, (document.getElementById("passcheck")))
  closeWindow();
  main();
  if (localStorage.getItem("bg") == null) {
    return;
  } else {
    document.body.style.backgroundImage =
      'url("' + localStorage.getItem("bg") + '")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";
  }
}

function main() {
  filemain = filemanager();
  if (filemain == null || filemain == undefined) {
  } else {
    for (item in filemain) {
      //console.log(file[item])
      create(
        "img",
        "screen",
        "file",
        "",
        "notepad('" + filemain[item] + "')",
        txtfile,
        "start-button",
      );
    }
  }

  // Sample data for windows icons
  var windowsIcon = windowsicon;

  // Create taskbar
  var taskbar = document.createElement("div");
  taskbar.className = "taskbar";

  // Create start button
  var startButton = document.createElement("button");
  startButton.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = windowsIcon;
  startIcon.setAttribute("onclick", "startmenu()");
  startButton.appendChild(startIcon);

  var startButton1 = document.createElement("button");
  startButton1.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = file;
  startButton1.appendChild(startIcon);
  startButton1.setAttribute("onclick", "filemgr()");

  var startButton2 = document.createElement("button");
  startButton2.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = cmd;
  startButton2.appendChild(startIcon);
  startButton2.setAttribute("onclick", "cmd1()");

  var startButton3 = document.createElement("button");
  startButton3.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = taskicon;
  startButton3.appendChild(startIcon);
  startButton3.setAttribute("onclick", "taskmgr()");

  var startButton4 = document.createElement("button");
  startButton4.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = paint;
  startButton4.appendChild(startIcon);
  startButton4.setAttribute("onclick", "customize()");

  var startButton5 = document.createElement("button");
  startButton5.className = "start-button";
  var startIcon = document.createElement("img");
  startButton5.appendChild(startIcon);
  startButton5.setAttribute("onclick","opennotifications()")
  startButton5.setAttribute("id", "clock");

  var startButton6 = document.createElement("button");
  startButton6.className = "start-button";
  var startIcon = document.createElement("img");
  startIcon.src = chrome;
  startButton6.appendChild(startIcon);
  startButton6.setAttribute("onclick", "openchrome()");

  // Create start menu
  var startMenu = document.createElement("div");
  startMenu.className = "start-menu";
  startMenu.style.display = "none"; // Hide the start menu initially

  // Add initial content to the start menu
  var startMenuContent = document.createElement("p");
  startMenuContent.textContent = "This is a blank start menu.";
  startMenu.appendChild(startMenuContent);

  // Add elements to the taskbar
  taskbar.appendChild(startButton);
  taskbar.appendChild(startButton1);
  taskbar.appendChild(startButton2);
  taskbar.appendChild(startButton3);
  taskbar.appendChild(startButton4);
  taskbar.appendChild(startButton5);
  taskbar.appendChild(startButton6);
  taskbar.appendChild(startMenu);
  if (rantime == 1){
  notification("System","Welcome to windows infinite! If you see a problem then restart the OS")
  document.body.style.backgroundImage =
    'url("' + windows_default + '")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center center";
  localStorage.setItem("bg", windows_default);
  }
  //create_window("Welcome to Windows Infinite!",true)

  // Add taskbar to the document body
  document.body.appendChild(taskbar);
  on = 0;
  // Toggle start menu
  startButton.onclick = function () {
    if (on == 1) {
      closeWindow();
      on = 0;
    } else {
      start1();
    }
  };
  



  function start1() {
    on = 1;
    create_window("Start");
    create("center", "content", "center", "");
    create("h2", "center", "", "Applications");
    create("br", "content");
    create(
      "img",
      "content",
      "",
      "",
      "closeWindow();cmd1()",
      cmd,
      "start-button",
    );
    create(
      "img",
      "content",
      "",
      "",
      "closeWindow();internetexplorer()",
      ie,
      "start-button",
    );
    create("img", "content", "", "", "settings1()", settings, "start-button");
    closeWindow();
  }

  // Handle click outside of the start menu to close it
  window.onclick = function (event) {
    if (
      !startButton.contains(event.target) &&
      !startMenu.contains(event.target)
    ) {
      startMenu.style.display = "none";
    }
  };
}

// Applicaions

function internetexplorer() {
  create_window("Internet Explorer");

  create("center", "content", "center", "");
  create("input", "center", "input_box");
  create("iframe", "center", "iframe");
}

function startmenu() {
  // Not finished yet 
  notification("System","This feature is still in development, check in later")
}

function notepad(str) {
  name1 = str;
  create_window("Notepad || " + str, true);
  create(
    "button",
    "content",
    "",
    "Save",
    "write_file1(name, (document.getElementById('textbox').value))",
  );
  create("textarea", "content", "textbox");
  doc = document.getElementById("textbox");
  doc.value = localStorage.getItem(name);
}

// Images
windows_default=
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4NuFYHBQVJoNJD0Nyx6TXfhbRzlaAn01dJKjOCfiBUrQDojvcmF9Jfd9w0kyQs4WVcbE:https://www.pcworld.com/wp-content/uploads/2023/04/Windows-10.jpg%3Fquality%3D50%26strip%3Dall%26w%3D1024&usqp=CAU"
seperator=
   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAAIVBMVEX///8AAADV1dX19fWmpqYqKirk5ORzc3NHR0d7e3shISF4Kv4/AAAAbklEQVR4nO3U2Q2EMAxAQXshXP0XjOjA+5EoiJkKnmI7EQAAAAAAAAAAAJ+y/Xrb/snZr+zt2ss1y9G95nEsxZ51SE7mWuxpg3pasWdQTuZL32e2/ZntviLO/iNrZ7kmpvufAQAAAAAAAAAA3u8G5FIFvA1LdwQAAAAASUVORK5CYII="
minimize=
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwf7JIqj-IFCe2hmZad8lAUZJ87rGe8tZwIM9V-q2EvAvwFCvXcU2ZgU7Gwo8uSH9gWpA:https://icons.veryicon.com/png/o/object/material_design_icons/window-minimize-3.png&usqp=CAU"
fullscreen=
   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACPCAMAAAD0vXihAAAAKlBMVEX///8AAADg4OBbW1uDg4Pd3d3r6+t2dnZhYWGfn59UVFR+fn78/PwgICAheNfUAAAAyklEQVR4nO3ayw6CMBBAUQTKo8D//64rTZS0ISloo+esncldWjJNAwAAAHCmNbQZQ2JqyA2FtaAn3HLGxNSYnQoFPW12c5+Y6rNTrR49evT8XM+SmFo+0rNN3as4J6bm+PbLabugZyrYM13Q0xXs6fTo0aNHjx49eg70xII98aSeYewfltS/wSPm5blnTH0VAQAA+Ge1vb9qe5/W/H7Xo0ePHj169PxeT233CbXdb+x9975lr7b7Hz169Oi5rqe2+/Da7ucBAAAA9u6emQ6Bq9OupwAAAABJRU5ErkJggg=="
chrome =
  "data:image/png;base64,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";
lockscreen =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3tHYZPdkovYKeXksUPv9tktWR0gOQxAx6cTB9I3P3Zci4xLkVD9kP90XyL-4KLDlnKk:https://images.pexels.com/photos/1146708/pexels-photo-1146708.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-johannes-plenio-1146708.jpg%26fm%3Djpg&usqp=CAU";
paint =
  "data:image/jpeg;base64,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";
txtfile =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8UNlPd879HkSMW4TOUkwbwTUZtntqXtdQQ:https://img.freepik.com/premium-vector/modern-flat-design-txt-file-icon-web-simple-style_599062-541.jpg%3Fw%3D2000&usqp=CAU";
settings =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PERAPEg8VDRAXGRgTFQ0REhYXDhUWFxUWFxYWFhUYHSggGBslHRUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0mHR4tLSsuLS0tLysrLSsrLSsrLSsrKy0rKy0tLS0rLS0rKy0rLS0tKy0rNS0rNy01LS0tMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBQYDAgj/xAA+EAACAgACBwQGCQMEAwEAAAAAAQIDBBEFBhIhMUFRYXGBkQcTIjJSoRQjQlNicrHB0YKy8DOiwuEWJJJD/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAIBBAUD/8QAIREBAQACAwACAwEBAAAAAAAAAAECEQMEEjFhIVFxQTL/2gAMAwEAAhEDEQA/ALxAAAAAAAABEpJLNvJdXwOc0rrdTVnGpevn8S/0148/ADpDHrx1MpbEbYSn8CnFy8k8yttJabxGIz27Go/dx3Q8ufia6E3FqSezJPNNcU1waK8p2uIGr1f0vHFVKW5WLdOHR9e5m0JUAAAAAABr9N6UhhanZLfLhCHOUuSAybsZVCSjK2EJPhGU0pPuTZ7lN4i6VkpTm9qUm22+bZm6N07icPkoWNx+7lvh4J8PAryn0tcHM6J1xotyjb/68+G0/wDSf9X2fE6WMk1mnmuq4EqSAAAAAAAAAAAAAAAAa/S+l6cLHObzk/drXvy/hdp96ZxboottSzlFZpcs+CKuxOInbJznJzk+MmbJtlrY6Z09dim03sV8qovd49TUggtKSCABlaOx9mHmrK3k1xX2WujRYmhNYKcUkk/V286pPf3xfNFYBNrenk+q4mWbJVzArTAa14qrJOStj0sWb8+JuKte/iw+/rGf7NE6qtx2YOMs18X2cM8+2zd8kanH634q3NRapX4F7Xmxqm47bTOnKMKvbltT5VR99/wu1lb6X0pZirHZN9kYL3YrojDnNybk25N8W3m33s+SpNJt2EAg1iTbaF1hvwrST9ZXzqlw/pfI1BA0Lb0PpmnFx2q5e0verfvx8Oa7TYlMYXFTqmrK5OE1wkv83otXV7SLxOHrukspPNPLhmnk2vImzS5WyABLQAAAAAAAAAAed9MbIyhJZxkmmuxlU6Twjotsqf2Xln1XJ+RbRwWv+H2bq7Pjjk++L/iUSsWVzBAIKQAEAACAAIAAEAAQCAJIBBoAgAeuFolZOFcd8pNRXe3kXBo7BxoqhVHhFZd/Vld6h4ZWYtSfCEZT8d0V/dn4FmkZKxAASoAAAAAAAAAAA4z0i5f+t1+s8vYz/Y7Mr/X/ABO1fCtfYhv75PP9FE2fLL8OZIBBaEkAgCSD0oonY8oxcn8vE2+G0Bzsn/TH+QNGRmdhTouiPCtPtlvfzMqNUVwil4GbbpwuZB3vqov7KfgeFui6J8ao96WT80NmnEkHS4rVqL31zcX8Mt68zRY3A20vKccukvsvuZu2McgEGgCAB1/o3/1rvyL+4sErHULFerxai+E4yh47pL+3LxLOIy+V4/AACWgAAAAAAAABDaW97l15AeeKxEaoSsk8oxTbZUmkMXK6ydsuMm33LkvI3ut+sH0h+prf1MXm5fHJf8UcyXIi1JAINYk2OjNFyt9qXsw6833DQ2jvXPal7i+b6HURjlu4LpyMa86KIwWzGKiui/zeeqRKR84i+FUXOclXFcZSeSEmy3T7SPpI5PSGvFEM1VB3P4n7MP5NPbr3im/ZhXFdHFv55o68OjzZTetf1y593hxut7/ixUj6SK3hr3i098KpLooyXz2jb6P1/qk8rqnX+OD2o+XEzPo82M3rf8Me7w5XW3ZpEWUxmnGUVKL4xazR5YDG1YiO3VZG2PWL4Po1yfeZaRyWWXVdcss3HIab1fdadlWcocXDjKPd1Rz5aCRyOs+hfV531rKDftxXCLfNdhsrLHOAEFJeuGvlXOFkd0otST7U8y5NG42OIqhdF5qSz7nzXgylTpNTtYfos3VY/qJPj8Evi7upNipVng+YTUkmnmnvTXBo+iFgAAAAAQ3l2Fda0abvliLIRtlXCD2UoScd64ttcd+ZobsRZP35yn+aTf6leU+lm6R1kwlCedqsl8Fb2n4tbl4nE6d1luxWcF9VV92nvl+Z8+40YNkZaAgg1iT0w1DsnGC4t+XaeRv9V8N79r/Kv1f7AbrD0KuMYR3JLL/s9kiUj4xF0aoSsm9mEU5N9iM+W/DA05pivB17c/ak90a1xk/2XaVlpbS12Knt2Sz+GC9yPcv3I0zpSeKtlbLdnujDlGPJGDme/wBXqzim7/08Ltdm8t1P+TMgZkHXtyyGZAzIJ2qRlaO0hbhpqyqbrkunBrpJc0WtqprJXjoZP6u+K9qvk/xR7Cnsz30fjbMPZC6t7M4vNdH1T7GcvZ6+PLPv9urr8+XFfpfSQnWpJxazTWTT4NPijF0JpGGLorvhwkt8ecZLdKL7mZ6R4Fll1XuSyzcVnprR7w1sq/s8YvrF8DAO612wO3Srkt8Hv/LLd+uRwhUTQAg1jf6u60XYP2H9bT923vj+V8u47/RWsmExOSjaoz+6m9mfgnx8CoAzLjtsq9gUnh9KYivdC+yC+FTls+WeRutA614qF1astdtcmoyjPLcm8s0+wnyr0tIDMEqU7jrNq22XWcpecmzwGZB9HzAQQBJAINA7bQtOxRUuq2n/AFb/ANziGWJTDKMV0S/Qmtj6SOS9I2O2KYUJ5Ox5v8sf+8jsEitfSTY3ioR5KtNf1Sln+h1dLCZc03/n5c3cyuPDdf7+HKEZkEZnv7eFInMjMjMjMnapE5kEZkZmbVInMgjMgnapFh+ibSXtXYVvc162K7Vul+xZiRSfo8ucdI4dL7W1F92xJ/8AFF3pHi97HXLv9vY6eW+PX6Y2Owytqsrf2oyj5prMqT9S5kioNIxyuuXSc15SZy4ujJ4EAgpIAQADeW9cSABbH/kcOn+eYKv+m2dV5Anyr093uIPfSNexddD4Zzj5SaMYpiSAQBJAIAMsmnfGL7F+hWpYWhLfWYemX4Un3x9l/NE1sZiRWPpLg1i4Pk64peEpZ/qi0Ujh/SjgHKunEJe43CXdLh80dXSy8803/v4c3cx9cV+lcEZgjM9zbxZEkZkEZmbVInMjMjMjMnapE5kEZkZmbVI6T0eQctJYXLk5Sfd6uS/dF6JFU+h7RrnddimvZhH1cX+KW9/JItlI8fvZb5dfqPV6mOuP+oSKd0nLO+98nZN/72W/i7lXXZY+EYym+6Kb/YpeUm82+L3t9py4ujIIBBSQAg0AD5bA+syDtv8AxqXw/JAncbp4636IthibLI1ylXN7SlFNrNrenlweeZz04uPFOPesi7D4nVGSycVJdGk0T6V5UoQWjpLVLB3ZtQ9RP4q9y8Y8Dh9O6uX4T2mvWVfexW5fmXIqVljTEAg1iTrdSsXnGdL4p7a7nx+f6nImVovGui2Fq5cV1T4oykWWkeGksBDEVWUT92acW+a6NdqeTPeiyM4xnF5xkk0+xnqkTLq7irNzVfn/AEro+zC2zosWU4vLPk1ykuxmJmXXrfqtDH15rKu+PuWcn+GXZ+hTekcDbhrJVWwdc1yfNdU+a7T3Ov2Jy4/bxufr3jv0xyMyBmdG3ykCMwRmTtUhmemGonbOFcIuc5NRjFcW2RhsPO2ca64OycnlGEVnJvuLm1A1IWBX0i/KeKkty4xqT5LrLqz4c/POPHd+X24uG8l+m91T0HHAYWrDrfJLasn8U5b5Pu5LsSNykSkTw3vcuvI8TLK5W2vXxxkmo5nX7H+qwzrT9q17PbsrfL9l4lZG51r0v9LxEpRf1cfYh3LjLx/g0pUmoi1JAIKYkgztEaJvxc9iqG1l703uhHvZ3mitQMPBJ3yd8vhTca/lvfmZbpsm1aNmZofATxN0KoR282trLgo572+m7MuPC6Iw1Syhh64dqhHPxeWbMuMEuCS7kT6b5NkH0CFgAAHzZBSTjJKUXucWs010aPoAVnrhq79Fl62tfUSeWXwSfLufLyOZLsxmGhdXOqazjJNNFN6SwcqLbKZcYtrPquT8i8ajKMcgEFJdNqlpxVP1Fksq2/Zk+EW+XYmd0kU+dVq3rT6tKm9tw4Rt4uPY+qJsVK7hIwtL6Fw2Mh6u+pWLlLhOL6xkt6M6qUZJSi1KL3qSeaa7GeiRktl3G2SzVVdpf0WTWcsNepLlXduf/wBL+DnL9QdKReSwvrO2FkMvm0XskSkdWPd5Z8/lz5dTjv0oavULSsnl9Ece2U68vlJnQaJ9FOIk08RfGmPwV+1PzeSRbaR9JDLu8l+NQx6nHGm1e1YwmAjlRUlJ+9dL2rpd8nwXYskbpIlInhv4LryOTLK5XddMkk1EJHEa96xpKWEplnJ7rZp8Fzhn16+ROtWucUpUYWWcuEsQuC67D5vtK/bz38X15lY4puQQCC0pNtq1oOeNt2F7Ncd9lnRcku18vE1MU20lvb3Jdpc2rOiVhMPCvL237U31k+Plw8CbdNxm2Zo/A1YeuNVUFCC5Li3zbfN9pkgHzfQAAAAAAAAAAArr0k4VRvqtX24tPvg1v8pR8ixTifScvq8O/wAUv0RuPyzL4cCQCD6PmkgEAbHROmr8K/q5+zzrlvg/Dk+47PRuu2HnkrU6JfF71fmt68iuyDLNt2ujCY2m5Z12wtX4JpvxS4GUkUZnz59eZkw0jfHcr7YrorZpfJmeW+l1pHniMVVUtqyyFS+KclFfNlMS0liHueIta6O2eX6mNKTbzbzfV735jyeln6S14wlWarbxEvwrKH/0/wBjidOaz4nF5xlL1dX3MN0X+Z/aNIDZJGW2gIBTAgEBje6k4T12NpTWcY52P+lZr/dslwlYejCK+l2PmqpZeM68/wDO0s8+eXy+mPwAAlQAAAAAAAAAABX/AKTsSnPD1c1GU2vzNKP9sjv5SSTbeSW9spzWPSX0rEWW/Zz2Y/ljuX8+JWPynJrSAQWhJAIAkgEGgAQABAAAgBgQCAJIBAHTejvEqvHQT+3Cdf6TXzgW0ULgsVKmyu2PvQkpLweZeWj8ZC+qF0HnGSUl48iMo+mLIABCgAAAAAAAAAAYmlsNK2i6qL2ZShKKfRtbil8Vh51Sdc4uE1ucXxLzNTp7QFGNjlNbM17t0ffj/K7CpdJs2p0g22nNX8Rg5e3Har5XR9x9/R95qC0JIBBokg9MPROyUa4Rc5yeSiuLZZOrepNVGzZeldbx2P8A8oeH2n2sy3TZNuD0doLFYnfVTKUfjfsw82b2n0fYtrOVlUOzOTfyWRZkUluSyXRcCSPVV5is7PR5ilwtql2ZyX7Gm0jqxjcPm50Nx+OHtR+RcoHqnmKBBbmsOqOHxacor1F3K2K3N/jjz7+JVuldG24Wx1Wx2ZLg/syXWL5ouXabNMQgEGpSQQZWjtHXYmarqg7Jdnurtb5IDGLf1DwVtGDhG1OMm5SUHxim92fTr4mNqvqXVhcrbcr7+X3cPyrm+1+GR1Z88stvpjNAAJUAAAAAAAAAAAAAPmyuMk4ySlF7nFrNPvRxum9Qqp5zw8vUy+6lvq8Hxj813HaA2XTLNqS0nojEYV5W1OC5T4wfdJbjAbL6sgpJqSUk+KazT8DVQ1YwMbFasNBTTzXHYT6qGeyvIr0ny1uo+ryw1ausj9fNZ7+MIvhHsfU6kAi1cAAAAAA1Gs2g4Y2lwe6xb67Oal/DNuAKBxFMq5yrktmcW4yi+TTyZ9YTCW3S2K65Wy+GKz8+hc2ktW8FiZ+stoU585qUot5fFstbXiZ+DwdVMdiquNUfhhFJfIv2jyr7Qno8nLKeJn6uP3MHnN9jlwXgd9o7R1OGgq6q1VHouL7W+LfazKBNtqpNAAMaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=";
ie =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88xkI08R7SG57pWpD5I97G1DPP4wiLmEX0w&usqp=CAU";
file =
  "data:image/jpeg;base64,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";
cmd =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUTExP///8AAAAMDAx/f38yMjL4+PjHx8fk5OSGhoawsLCIiIiqqqqvr6+EhISmpqZgYGB5eXmenp5tbW3s7Ozm5ubT09MqKiqQkJAYGBjf399VVVW+vr5lZWU+Pj5EREQsLCyfn5+UlJR+1k8FAAACl0lEQVR4nO3c7XKaUBRGYTkgmKig4AexJine/0UWTSGpOiYz7H02hfX86KRJZ17XnETRTJ1MAAAAAAAAAAAAAAAAAAAAAGDIQnvKhVN7qn0uC2JrQeY0C58De88UUkihOQop/GHh9vDF7Ke2lz8u2g+27QeXj2aXL/11mH2ObD0XFs63wnPhWnPm7nREocyMYeGaQpkZChWnKRSauVPo/LTa3Ze6+S/ntF87mVieoUuCWenhIA3PMDn/9fgaKh+kdWF9KZ6/qR6kYWEZN5/bFYo/kYZXbfVV/675bLx814o0vS517j3btAcZ7VVugffC6J+Z+m6mSNqDVLkJxoXnL7lp3hykxvepfeH5IF31cYgDLawP8bQZbmF9fkXSPGzEg/s5rPN+tz+DwWGu8is+w8LQTXw8IPoqXN4Uhl8fC9cvaldun4VLz4XNdWmwqd40n0ZZF8bJSvlZom3hodyrP0E0LDwevTzJtyv09UKNS+0K7/27W52ne1XoVuXplFfZhyrPT2Xaedp3YfqwsAquxS9dp/tVmN8Ubij8drpXheH+dXWt83SvCs/PNv77+9LHhRrTFArNGBY+USgzQ6HiNIVCMxQqTlMoNEOh4rTvwqehFi56ULigsNMMhYrTFArNGBbOKZSZoVBxmkKhGQoVpykUmmkL5xSKT1MoNDOi61LDVzEo7DYzou9SCuWnKRSaoVBxmkKhmRE9Hg7/upRC+WkKhWZGVDj812kolJ+mUGgm68E9je57X2Y9OENPhcM/QwrlpykUmqFQcZpCoZkRFUbq7+Z5LfJcuEt823kuNEQhhRTao5DCx4WL72+AOtXXacJpGllLp6pvpHLnv6F75+HtYAEAAAAAAAAAAAAAAAAAAAAAAIbsD12pRBbO1WULAAAAAElFTkSuQmCC";
run =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8BAQEAAAD8/PwFBQXv7+/z8/P29vbT09Pl5eW/v7/p6ens7Oz5+fnc3NyJiYmZmZnMzMxsbGx7e3uTk5OhoaGrq6tiYmKysrLGxsY6Ojpzc3MaGhpPT0+MjIwzMzMRERFBQUFQUFAoKCgYGBghISGBgYFZWVksLCy5ubl3d3dFRUVkZGRUqA8dAAAJmklEQVR4nO2dCXfiLBSGERIT9z0utdpq1Wnt//99w4WoSSABTzsBMjxnzjedr9HDK5flLiBCHo/H4/F4PB6Px+PxeDwej8fj8Xg8Ho/HYwsk96+BoVb8OwgVGMWr8Wg0Xg0HTVSIUPyyxSnH2dB0a34Z2n/DVy6u1cIt+Pu7VzBbp6FSdhgHVN0dqjEpDk2XIRcqMKMQByBx1hSJhIBAZqAPiVQkxi9NUYheaJ8JwHDcmW7bL7HKWWhuME5Mt+1XaAeyLmSjEZ/YOuk6c2qPZQphQnUeUlgnsgoDvDHdvB8zQN0SG+UDETu/uSFoVqGQalyYbuFPIehdbqI3hRfTLfwx7ZJBeFO4N93AH9PH1QpPkekW/hSVwre26Rb+lFChcOt8H0ZvTR+H1XMpdn8uJehcrdD59RChddWK34g9DQrK5xqMr01wgsdVO+9VAxSSwVtJJ1Ll+0b4h9S7kHuI1LOIGxGMYu6FaKgQbhubbtuvsZTYKe3Xkel2/RJghlNRIkTaGjEIAaojoYMueIijK0jwabpZvwpBneUjKAw/zfpNmGMyQG5mdLzlnjbzPmqOiWbpdZPxOFn3Tbfjn0GEHxyBRFHUbrfDMOz3+70b/TBsD3JSCPxxSxwMrt0GV3K8jFZDkj7tGgT1vqvl3Ti9dB0Mx9AumUCEIghuC0BuOU/3LS22XaO/3O4G6atcAQSyHXVlGOa+QaNLPPWUHFPYK025SDQGdO+Np8SpNTDasGbrK6S2enBIIUHLYm5eZagwGqem2/0EI30TzfSkMx4hQStcmTQr1Yg7ptuuAeHTqL6F5jpx6sJ0Sl2hjLxnlMJY7JluvgYk2me8WVgG8lR1YcuNkXjJyICQYJIsFuPdefayvByu738qJNI+fDXdeg3O2XiEWGzwVZ1swrbvUAlKHusEhnV8lX9AlTC0P1OxzikQJ8eVYuqxvtIrO43CINwM8m6uovaCvmZtqOVaEDQ4PgQEfAXPCxyqVg+7+3BADnkTxd3c71kxsGKvY/WuBjIQGQF07p+hYiRmq9iv4sDe0gQ63hZ5E8Tvgku7xi2FwgM8ZmdEalBIWGNxB0bQVOX0p4l7Ox3FYbYcHZb6bvEJoqgPgpeFoI0QG0cj2eD8dnQkmlqiVHjhL5rQhb+0G0naxXUHPT4LK+G7xNSuSoVpxmnG8r9y+CCNSO22PM0KpBJDsQHD6okUIm4Rbz44JOXpNTIZQZR1VLOntck5FNKtiSq0wQM19IPpwukgnPBA/43UOAfx+X5AqltrN14zjQ/wXBxGBCnii/S3E/7gN3MVma9Ism+AUHw+3n1M+vekTju9lTOzj/9V/HChZ4LKDQ3Gf/gMwv0PfjAoSzx6g1xxkL4Nnc2ONYljTPhSxzymD8nGhMiy9QWJ6SGZ5N5JSzBN/mHFoy1Oz7Y9PhJxRfqX3CoqApgHJdajsRgy35Cg18eqemgz64xHf2QBEFxrvQaEZ3imgk4Rss3lQuUZ4g3/YHr3ByEGElJ5R26ckpd816gQQfwCeC/xfzYKhQHdsTGFY5y1w48T7z1pDAt/1amP0u4mab5TZKjakgY4rb/Y5/YOlZHXuo8NcW0lS9RZuRge+EuHhcdKJ2AYEGGN8lQoouBUP9vEEOokF4WUvYJ5IpZ4IbAYKn1fFkck5KiZ1GHrpUVu1lIZvkhTa5Vl0VwZj8PivVWFYYowaebAaLjEFYXR6ZaCGsSu1Pkwg2oxbOFT6vOxZ6sUgltxBnn2GCigWgxZsSVKnb/4JNfIzfM0471tkUBos6oLg1w0P7xI5yXQN5vYeWXGWdmFueM/BM2F4m+QN13bKY/V46smyPzhGIImH/dy09Q6p7X6EU9BCukaaR8KwbXwwjfyLZZiXX7anHUjdC9dLTANBOdfRLrpfSf4sAr5/7IVgi6KUShkGdPdbedzPF+sofcG9QcPn4CgrWpLan3mV4XSM3SiyKQKpcJ1oxXCDR+O61P2YQPO/2wUCq2vv1Ayqz7sC8u9vUuBFpUlJrBYjO3M+uqSL+WTKISLaCzzZ5+DGuBVYaY4vfbK1Y4k+fSpDGqpJ6sraSqBLOBeQyKe2VtpUgZBt3R8V11JC+dKutSXNNzmJ5lsbz/JzvoWJdJ+XNoUxFZC4I6k250B0YdOmBe7dSMkIXSCCQgPoUG5jc4JIerv9mx2BXOw8MxjFZikSTKtbnSEOU6vXOM9MuRZeA2JG0c2qpDLZUW0PNZLUBsy+RppFwz30rhgqKwyIYA87b2x3X1abVCtMMCymjHLIBDnDlhJCJ4jlIbsEfp8x+pjexg7cLsQQft7gQ0+31cAiPAvNWZVbP0RKDjcdRtytBe/b7E0nsdmJQ2VtsqOQNnNIBtBpNvqOBfwbC9O6jC45TcP7HDucmeMz7CtftgqWl+qjdX2ZbGTm02Yk/vxiGvzSq4OK1MrLSfBLwbbz0shb9Mjkuwkl4XUGOvGfVx4Lko28mIn9hqzh7wKO0cSdobxZN1dJePd+Wv6fRA7BkS2xTUu/iqbdPC1NjVy+t356Gt6Oew/igcMGcKSB9Wg0lU8Sq5SYzWpkPZf50Umi+Uy5btrKvlc+obxDG4VKhirSStlKc9nD/qW3+sMBt9evRcPRxsdh2sdHyHXWlx1sJAN6qh4M50xhYTVwmpdePFoLP08EsVWOixahbGbPYm6zFCiEH+r3CGhasrc3aWk/aSJgpG+KQOFQpG0wdtZ18/PMhrnJnuCwmUNWmRoVFYUgfsulP6sPQpZ+OXJLnzV+HqjjrBamFOorDMsCtSqtBDyU8YcRJKGBZ8QqHU82x6FiETaAnH6dTE6uQjhlLfJEpSR7uUz7PonTTdPVGjQP4y2+r3IAm06WKUQAoX5sGexcXdepUegSt6z8CZf5qyUoBicwvSsR9DCLeESGsb+/ER2PhYcypnBoDBB0bwoZ7s5LKdf5914sepO4njY6cH8oh+bnwh9eDbZhyyXlCySVXdNtYQlLSHPJB+sUvhPEOqIG1ALlkfI9P8HCncNs9JPYS6VnAd3mlXjFSaCQg2n0ilEhQuv0DEW/4HCYlTf7vzh8wjxLa/QOYQIXiO+KCjLvJgqEE97OY5wG1/j+nAk7Lybp7A4Dq26UOAXEOdSedrfXSb5mYadumyWwkEmCMuqHS4OFXzrwbZt/Nsw2OWuTp8TkkKuuJW5/bS8NsVVCAmPOL0Niv532TQTRTDo2t+87Ag36WvzCsQvcHHZpu47H2uFtEPIGDfPRD0ej8fj8Xg8Ho/H4/F4PB6Px+PxeDwej8fj8fxP/AWQr11DD/WpfAAAAABJRU5ErkJggg==";
windowsicon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8LFsejSKHAUqlLdTJ9wzRqn9GhRqMyhmpw&usqp=CAU";
taskicon =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAArlBMVEX///8zMzMmJibm5ua9vb3q6upStSksLCz39/fMzMxsbGy4uLjGxsYhISFTuCnCwsKpqalgYGBZWVkUFBRVvSklHyYzVyc1XScyMDM4SzE0ODMlIyYjFiYkGyZRsSkiEyYtQSYxKTNKnigqNyY/fChImCghCSZMpCkxJTRBgygiDiZFjig7cCcnKyY4ZScsPSYyUScgACaKiopAcC86VTE1QzExSykwHjQoMCYFBQWOsTVWAAAD6UlEQVRoge3aa1PiMBQGYA1QZMW4aiuFtJRyKwIKLi7u/v8/tiflViVJE3Iq42zfD44fGJ7m5M704qJMmTJlytimVmiupO5VpeDUZHLRcKUiaXXhTZY2+n+WCxnXGnKtcfcDP7+05Ic6esh9Q0e+uURP/e62eTa5ens2mdNnkqvNs8lAn0uuNs4mN0v5+8jxxD+PHK9mbVMaRfbfXDcxhHHk+Ik6dGnYaBw5cRx3GHy97Hdcx6H9gHy5HL+A7HQHzIhGkWcUZNryiAmN0s9dh8tPETGhEWS/DcUGPJkSExpBjueuQ4dQcOhoAxpDHlEnWUO5XzxiQCPInS708RT+zNJy69L2Miydjvv4CuO7GxED2l6eQBe7XghzmvaYAW0vx31K+1PWg46eh0Sftpb939DDw5B4iUNHU6JP28stKPOSkYjvV2OiT1vLEy7C0PLgCdy1p0/by7zK0FY22FRdm7aV/fZuZHl8pGXlHNpWjldQ7DWfTQHMLkqYNm0rT2Dp7KYtZWu+onhEl7Zu837VZM98FQ2ILm0p+2u63ynCEaUJI7q0pRzPodiLDRfy3XKQpRnEv/SPgyC/92GH3FaYLaCjXzKje/zM0xEknpjJgod/d7enIJ6A9/mho4PElWYYG8hxp32cFnTzfjyHsFMmz7tye+mJVBIa6Mv+UvIl3UHW2szt3XNQWZtnUV1b5hNX+PT9/RRmBDp6viu3B7UfLR+FWfIP6MrxyqWiZMfUK6zh/e1OyQZ8vEWeMLwuN/fa/fzWEmWdGcwB7FvdP9s5toLSLz5P70z05UufyR5/F+/xMODS4aaATWSYgoov2oTuF1DRWnq6nEu/JrCAptPbE+wfNnIeHeyvGvw/V1VsUzmHZsvdVSPg5wRVsY3lPJovoJHobGQvq+kpPyiM+SiHbl6quvkEWUmHsGvyWRxtT6S4sopOrxorj4QwyPtj+edOlJV0etX4dNfBkxX0lP9mMg4/7FqYspxOrxq9D3daXFlKswWv8zhzj8eW5TSMrVHvcCLFl2V0ulPC3HJ66m62kCW0t9z+RqVcOu1kMc2vGvvf5YqSxXSYHtjUO6S1LKRDvlNmTqTFyCKa9ba/ORcri2g47sIOWbgsoNMjvnqHRJGPabhq0N3Zt1D5mI5mSUu9TyHJglaz3FrjyBrn8KLkk2gc+RQaST6BxpLNaTTZmMaTTWlE2ZDGlM1oVNmIxpVNaGTZgMaW9Wl0WZvWlP9qF5HUbx608ldHrlSqPwtIVUeuNapFJUcukM6TK7Xm18qZd5mLarXknbiLWtH0tfTd8QxdaVyj51b65jjv60Pw3ypWuGXKlCnzzfIPsqDHxSVuFqoAAAAASUVORK5CYII=";

}
catch{
    notification("Error","A error has occured with a task. System automatic restart in 5 seconds")
    setTimeout(function(){
        boot()
    },5000)
}
