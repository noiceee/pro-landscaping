document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL path
  const pageMap = {
    "index.html": "home",
    "services.html": "services",
    "testimonials.html": "testimonials",
    "contactus.html": "contactus",
    "/index.html": "home",
    "/services.html": "services",
    "/testimonials.html": "testimonials",
    "/contactus.html": "contactus"
  };
  
  // Get the current page from the window object
  const currentPage = window.location.pathname; // e.g., "/index.html"
  
  // Check the current page and log to debug
  console.log('Current Page:', currentPage);
  const activePageId = pageMap[currentPage];
  console.log('Active Page ID:', activePageId);

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

  const servicesButton = document.querySelector(".our-services");
  if (servicesButton) {
    servicesButton.addEventListener("click", function () {
      window.location.href = "services.html";
    });
  }
});
