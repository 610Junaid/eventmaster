const firebaseConfig = {
  apiKey: "AIzaSyAKuQ3mjzLIYAOenQqikR4CClqrIItpIeA",
  authDomain: "eventmaster-ba456.firebaseapp.com",
  databaseURL: "https://eventmaster-ba456-default-rtdb.firebaseio.com",
  projectId: "eventmaster-ba456",
  storageBucket: "eventmaster-ba456.appspot.com",
  messagingSenderId: "341354410932",
  appId: "1:341354410932:web:fddb1e5b7c0e042ea178e1",
  measurementId: "G-7MSM0DCK3N",
};

firebase.initializeApp(firebaseConfig);
var eventmasterDB = firebase.database().ref("eventmaster");

document.getElementById("eventmaster").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getelementVal("name");
  var emailid = getelementVal("emailid");
  var tel = getelementVal("tel");
  var subject = getelementVal("subject");
  var msgcontent = getelementVal("msgcontent");

  saveMessages(name, emailid, tel, subject, msgcontent);

  document.getElementById("eventmaster").reset();
}

const saveMessages = (name, emailid, tel, subject, msgcontent) => {
  var neweventmaster = eventmasterDB.push();

  neweventmaster.set({
    name: name,
    emailid: emailid,
    tel: tel,
    subject: subject,
    message: msgcontent,
  });
};

const getelementVal = (id) => {
  return document.getElementById(id).value;
};
