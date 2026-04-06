/**
 * MonoMuse — site-wide script (Phase B increments 3–5 + final rubric).
 *
 * External libraries (load order set in HTML):
 * - jQuery 4.x — https://jquery.com/ (index.html, exhibitions.html); used for Read More/Less + accordion.
 * - Leaflet 1.9.x — https://leafletjs.com/ (explore.html only); map tiles © OpenStreetMap contributors.
 */

/* Part 2: numeric addition (course Increment 3) */
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

/* Part 2: string concatenation */
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

/* Part 2: sumnPrint */
function sumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);
sumnPrint(x, y);
sumnPrint(A, B);

/* Part 2: nested if/else (C.length vs z) */
if (C.length > z) {
  if (C.length < z) {
    console.log(z);
  } else {
    console.log(C);
  }
} else {
  if (C.length < z) {
    console.log(z);
  } else {
    console.log("good job!");
  }
}

/* Part 2: arrays + Banana (commented after Increment 3 check) */
/*
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
...
*/

/* Part 3: time-based greeting (DOM) */
var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetingEl = document.getElementById("greeting");
  if (!greetingEl) {
    return;
  }
  var phrase;
  if (h < 5 || h >= 20) {
    phrase = "Good night";
  } else if (h < 12) {
    phrase = "Good morning";
  } else if (h < 18) {
    phrase = "Good afternoon";
  } else {
    phrase = "Good evening";
  }
  greetingEl.textContent = phrase + " — Welcome to MonoMuse";
}

greeting(hour);

/* Part 4: footer year */
function addYear() {
  var yearEl = document.getElementById("copyYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* Active navigation (Increment 4; rubric: active state) */
function ActiveNav() {
  var navLinks = document.querySelectorAll(".nav_bar a");
  var path = window.location.pathname;
  var currentFile = path.split("/").pop();
  if (!currentFile || currentFile === "") {
    currentFile = "index.html";
  }
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    var targetFile = href.split("/").pop();
    if (targetFile === currentFile) {
      link.classList.add("active");
    }
  });
}

ActiveNav();

/* jQuery: Read More / Read Less (index.html only; avoids $ errors elsewhere) */
if (window.jQuery) {
  jQuery(function ($) {
    $("#readLess").click(function () {
      $("#longIntro").hide();
      $("#readLess").hide();
      $("#readMore").show();
    });
    $("#readMore").click(function () {
      $("#longIntro").show();
      $("#readLess").show();
      $("#readMore").hide();
    });
  });
}

/* jQuery: accordion panels (exhibitions.html; rubric: jQuery feature) */
if (window.jQuery && document.querySelector(".accordion-header")) {
  jQuery(function ($) {
    $(".accordion-panel").hide();
    $(".accordion-header").click(function () {
      var panel = $(this).next(".accordion-panel");
      $(".accordion-panel").not(panel).slideUp(200);
      panel.slideToggle(200);
    });
  });
}

/* Increment 5: hamburger nav */
function toggleNav() {
  var nav = document.querySelector(".nav_bar");
  if (nav) {
    nav.classList.toggle("nav_open");
  }
}

/* Leaflet + OSM (explore.html only; do not use variable name `l` — conflicts with Leaflet `L`) */
if (document.getElementById("map") && typeof L !== "undefined") {
  var museumMap = L.map("map").setView([40.4433, -79.9444], 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(museumMap);
  L.marker([40.4433, -79.9444]).addTo(museumMap);
}

/* --- Phase B rubric: checkout (tickets.html) --- */
function ticketUnitPrice(type) {
  if (type === "student") {
    return 12;
  }
  if (type === "member") {
    return 0;
  }
  return 18;
}

function updateCheckoutTotal() {
  var typeEl = document.getElementById("ticketType");
  var qtyEl = document.getElementById("ticketQty");
  var outEl = document.getElementById("priceTotal");
  if (!typeEl || !qtyEl || !outEl) {
    return;
  }
  var qty = parseInt(qtyEl.value, 10);
  if (isNaN(qty) || qty < 1) {
    qty = 0;
  }
  var unit = ticketUnitPrice(typeEl.value);
  var total = qty * unit;
  outEl.textContent = total.toFixed(2);
}

function clearCheckoutErrors() {
  var ids = [
    "visitDateError",
    "ticketTypeError",
    "ticketQtyError",
    "checkoutEmailError",
    "checkoutZipError",
  ];
  ids.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = "";
    }
  });
}

function validateCheckoutForm() {
  clearCheckoutErrors();
  var ok = true;
  var visitDate = document.getElementById("visitDate");
  var ticketType = document.getElementById("ticketType");
  var ticketQty = document.getElementById("ticketQty");
  var checkoutEmail = document.getElementById("checkoutEmail");
  var checkoutZip = document.getElementById("checkoutZip");

  if (!visitDate || !visitDate.value) {
    ok = false;
    var e1 = document.getElementById("visitDateError");
    if (e1) {
      e1.textContent = "Please choose a visit date.";
    }
  }

  if (!ticketType || !ticketType.value) {
    ok = false;
    var e2 = document.getElementById("ticketTypeError");
    if (e2) {
      e2.textContent = "Please select a ticket type.";
    }
  }

  var qty = ticketQty ? parseInt(ticketQty.value, 10) : NaN;
  if (!ticketQty || isNaN(qty) || qty < 1 || qty > 10) {
    ok = false;
    var e3 = document.getElementById("ticketQtyError");
    if (e3) {
      e3.textContent = "Enter a whole number of tickets from 1 to 10.";
    }
  }

  if (!checkoutEmail || !checkoutEmail.value.trim()) {
    ok = false;
    var e4 = document.getElementById("checkoutEmailError");
    if (e4) {
      e4.textContent = "Email is required.";
    }
  } else if (checkoutEmail.validity && !checkoutEmail.validity.valid) {
    ok = false;
    var e4b = document.getElementById("checkoutEmailError");
    if (e4b) {
      e4b.textContent = "Enter a valid email address.";
    }
  }

  if (checkoutZip && checkoutZip.value.trim() !== "") {
    if (!/^\d{5}$/.test(checkoutZip.value.trim())) {
      ok = false;
      var e5 = document.getElementById("checkoutZipError");
      if (e5) {
        e5.textContent = "ZIP must be exactly 5 digits.";
      }
    }
  }

  return ok;
}

function initCheckoutForm() {
  var form = document.getElementById("checkoutForm");
  if (!form) {
    return;
  }
  var typeEl = document.getElementById("ticketType");
  var qtyEl = document.getElementById("ticketQty");
  if (typeEl) {
    typeEl.addEventListener("change", updateCheckoutTotal);
  }
  if (qtyEl) {
    qtyEl.addEventListener("input", updateCheckoutTotal);
  }
  updateCheckoutTotal();

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!validateCheckoutForm()) {
      return;
    }
    var visitDate = document.getElementById("visitDate");
    var ticketType = document.getElementById("ticketType");
    var ticketQty = document.getElementById("ticketQty");
    var checkoutEmail = document.getElementById("checkoutEmail");
    var checkoutZip = document.getElementById("checkoutZip");
    var mailingList = document.getElementById("mailingList");
    var qty = parseInt(ticketQty.value, 10);
    var unit = ticketUnitPrice(ticketType.value);
    var total = qty * unit;
    var order = {
      visitDate: visitDate.value,
      ticketType: ticketType.value,
      quantity: qty,
      unitPrice: unit,
      total: total,
      email: checkoutEmail.value.trim(),
      zip: checkoutZip ? checkoutZip.value.trim() : "",
      mailingList: mailingList && mailingList.checked,
    };
    sessionStorage.setItem("monoOrder", JSON.stringify(order));
    window.location.href = "confirmation.html";
  });
}

initCheckoutForm();

/* Rubric: image gallery / slideshow (exhibitions.html), 3+ images */
function initGallery() {
  var img = document.getElementById("galleryImage");
  var prevBtn = document.getElementById("galleryPrev");
  var nextBtn = document.getElementById("galleryNext");
  if (!img || !prevBtn || !nextBtn) {
    return;
  }
  var slides = [
    {
      src: "../static/Gemini_Generated_Image_oyjbg1oyjbg1oyjb.png",
      alt: "MonoMuse museum exterior with concrete architecture and plaza",
    },
    {
      src: "../static/Gemini_Generated_Image_3s03on3s03on3s03.png",
      alt: "MonoMuse logo with column and profile line art",
    },
    {
      src: "../static/Gemini_Generated_Image_oyjbg1oyjbg1oyjb.png",
      alt: "Approach to MonoMuse entrance and glass facade",
    },
  ];
  var galleryIndex = 0;
  function show(i) {
    galleryIndex = (i + slides.length) % slides.length;
    img.src = slides[galleryIndex].src;
    img.alt = slides[galleryIndex].alt;
  }
  prevBtn.addEventListener("click", function () {
    show(galleryIndex - 1);
  });
  nextBtn.addEventListener("click", function () {
    show(galleryIndex + 1);
  });
  show(0);
}

initGallery();

/* Rubric: order confirmation page (confirmation.html) */
function renderConfirmation() {
  var box = document.getElementById("orderSummary");
  if (!box) {
    return;
  }
  var raw = sessionStorage.getItem("monoOrder");
  if (!raw) {
    box.innerHTML =
      '<p role="status">No order data found.</p><p><a href="tickets.html">Return to ticket checkout</a></p>';
    return;
  }
  var order = JSON.parse(raw);
  var typeLabel =
    order.ticketType === "student"
      ? "Student"
      : order.ticketType === "member"
        ? "Member"
        : "General";
  box.textContent = "";
  var p1 = document.createElement("p");
  var strong = document.createElement("strong");
  strong.textContent = "Thank you — your order is confirmed.";
  p1.appendChild(strong);
  box.appendChild(p1);
  var p2 = document.createElement("p");
  p2.appendChild(document.createTextNode("Total: $"));
  var strongT = document.createElement("strong");
  strongT.textContent = Number(order.total).toFixed(2);
  p2.appendChild(strongT);
  box.appendChild(p2);
  var ul = document.createElement("ul");
  function addLi(text) {
    var li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
  }
  addLi("Visit date: " + order.visitDate);
  addLi("Ticket type: " + typeLabel);
  addLi("Quantity: " + String(order.quantity));
  addLi("Email: " + order.email);
  if (order.zip) {
    addLi("ZIP: " + order.zip);
  }
  addLi("Mailing list: " + (order.mailingList ? "Yes" : "No"));
  box.appendChild(ul);
  var p3 = document.createElement("p");
  var a1 = document.createElement("a");
  a1.href = "tickets.html";
  a1.textContent = "Buy more tickets";
  p3.appendChild(a1);
  p3.appendChild(document.createTextNode(" · "));
  var a2 = document.createElement("a");
  a2.href = "../index.html";
  a2.textContent = "Home";
  p3.appendChild(a2);
  box.appendChild(p3);
}

renderConfirmation();
