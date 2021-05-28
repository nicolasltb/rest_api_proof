let ButtonEl = document.getElementById("btt3");
let InputEl = document.getElementById("ip");
let notificationEl = document.getElementById("notification");
let notificationText = document.getElementById("notification_text");
const regex = /^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})/
// [{"ip_address": "176.178.13.16"}, {"ip_address": "10.0.2.36"}]

ButtonEl.addEventListener('click', async () => {

  let data = InputEl.value;

  if (data.match(/^\d/)) {

    await fetch("http://localhost:5000/post_ip", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip_address: data })
    }).then(async res => {
      notificationText.innerHTML = "Request complete!<br>Ip successfully registered.";
      notificationEl.style.display = "block";
      InputEl.value = '';
      await sleep(3000);
      notificationEl.style.display = "none";
      console.log(res);
    });
  } else if (data.startsWith('[')) {

    await fetch("http://localhost:5000/post_ip", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: data
    }).then(async res => {
      notificationText.innerHTML = "Request complete!<br>Ips successfully registered.";
      notificationEl.style.display = "block";
      InputEl.value = '';
      await sleep(3000);
      notificationEl.style.display = "none";
      console.log(res);
    });
  } else {
    notificationText.innerHTML = "Invalid input, try again!";
    notificationEl.style.display = "block";
    InputEl.value = '';
    await sleep(3000);
    notificationEl.style.display = "none";
  }

});

let modal = document.getElementById("myModal");
let btn = document.getElementById("bttModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}