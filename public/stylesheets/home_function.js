let ButtonEl = document.getElementById("btt3");
let InputEl = document.getElementById("ip");
const regex = /^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})/
// [{"ip_address": "176.178.13.16"}, {"ip_address": "10.0.2.36"}]

ButtonEl.addEventListener('click', async () => {

  let data = InputEl.value;

  if (!data.startsWith('[')) {

    await fetch("http://localhost:5000/post_ip", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip_address: data })
    }).then(res => {
      alert("Request complete! Ip successfully registered.");
      console.log(res);
    });
  } else {

    await fetch("http://localhost:5000/post_ip", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: data
    }).then(res => {
      alert("Request complete! Ips successfully registered.");
      console.log(res);
    });
  }

  InputEl.value = '';
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
