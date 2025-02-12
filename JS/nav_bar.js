// burger meniu funkcionalumas.


function toggleMenu() {
  let menu = document.getElementById("mobileMenu");
  if (menu.style.right === "0px") {
      menu.style.right = "-250px";
  } else {
      menu.style.right = "0px";
  }
}

  