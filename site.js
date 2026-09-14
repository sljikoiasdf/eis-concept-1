/* EIS Concept 1 — phone menu, print button, inert forms. No storage, no network. */
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('mobile-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open);
      nav.hidden = !open;
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }
  var print = document.querySelector('.print-button');
  if (print) print.addEventListener('click', function () { window.print(); });
  // Forms are inert in this mock-up: no handler is wired. See README for where they should send.
  var forms = document.querySelectorAll('form.enquiry');
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function (e) { e.preventDefault(); });
  }
})();
