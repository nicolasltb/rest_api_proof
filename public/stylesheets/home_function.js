let ButtonEl = document.getElementById("btt3");
let InputEl = document.getElementById("ip");

ButtonEl.addEventListener('click', () => {
    let data = InputEl.value;
    fetch("http://localhost:5000/post_ip", {
        method: "POST",
        body: JSON.stringify({ip_address: data})
    }).then(res => {
        console.log("Request complete! response:", res);
    });
});

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("bttModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
