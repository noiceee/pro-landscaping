document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL path
  const currentPage = window.location.pathname;

  // Map URL paths to span IDs
  const pageMap = {
    "/": "home",
    "/services": "services",
    "/testimonials": "testimonials",
  };

  // Get the corresponding span ID for the current page
  const activePageId = pageMap[currentPage];

  // If the current page has a corresponding span ID, add the 'active' class
  if (activePageId) {
    document.getElementById(activePageId).classList.add("active");
  }

  document
    .querySelectorAll(".get-quote-button").forEach(button => {
      button
      .addEventListener("click", function () {
        document.querySelector(".quote-wrapper").classList.remove("hidden");
      });
    })

  document
    .querySelector(".quote-wrapper")
    .addEventListener("click", function (e) {
      document.querySelector(".quote-wrapper").classList.add("hidden");
    });

  document
    .querySelector(".quote-wrapper>form")
    .addEventListener("click", function (e) {
      e.stopPropagation();
    });

});
