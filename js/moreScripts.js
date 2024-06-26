document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "dropdownButton"
  const dropdownButtons = document.querySelectorAll(".dropdownButton");

  dropdownButtons.forEach((button) => {
    // Get the corresponding dropdown menu
    const dropdownMenu = button.nextElementSibling;

    // Toggle dropdown on click
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // Toggle the 'is-active' class on the dropdown menu
      dropdownMenu.classList.toggle("is-active");
      // Close any other open dropdown menus
      document
        .querySelectorAll(".navbar-dropdown-menu.is-active")
        .forEach((openMenu) => {
          if (openMenu !== dropdownMenu) {
            openMenu.classList.remove("is-active");
          }
        });
    });

    // Handle keyboard focus and activation (Enter or Space key)
    button.addEventListener("focus", function () {
      // Add the 'is-active' class when the button receives focus
      dropdownMenu.classList.add("is-active");
    });

    button.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // Toggle the 'is-active' class on the dropdown menu
        dropdownMenu.classList.toggle("is-active");

        // Close any other open dropdown menus
        document
          .querySelectorAll(".navbar-dropdown-menu.is-active")
          .forEach((openMenu) => {
            if (openMenu !== dropdownMenu) {
              openMenu.classList.remove("is-active");
            }
          });

        // Focus the first item in the dropdown menu
        const firstItem = dropdownMenu.querySelector(".navbar-item");
        if (firstItem) {
          firstItem.focus();
        }
      }
    });

    // Remove 'is-active' class when clicking outside the dropdown or button
    document.addEventListener("click", function (e) {
      if (!button.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("is-active");
      }
    });

    // Close dropdown on ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropdownMenu.classList.remove("is-active");
      }
    });

    // Remove 'is-active' when the dropdown button loses focus, unless the dropdown menu is clicked
    button.addEventListener("blur", function (e) {
      // Use a small timeout to allow click events on the dropdown menu to register
      setTimeout(() => {
        if (!dropdownMenu.contains(document.activeElement)) {
          dropdownMenu.classList.remove("is-active");
        }
      }, 150);
    });
  });

  // Add focus styles to dropdown items
  const dropdownItems = document.querySelectorAll(
    ".navbar-dropdown-menu a.navbar-item"
  );
  dropdownItems.forEach((item) => {
    item.addEventListener("focus", function () {
      item.classList.add("is-focused");
    });
    item.addEventListener("blur", function () {
      item.classList.remove("is-focused");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the button with the class 'accordion-trigger' and the accordion div
  const button = document.querySelector(".accordion-trigger");
  const accordion = document.querySelector(".accordion");

  // Set initial ARIA attributes
  button.setAttribute("aria-expanded", "false");
  accordion.setAttribute("aria-hidden", "true");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Toggle the class to show or hide the accordion content
    accordion.classList.toggle("active");

    // Check if the accordion content is currently visible
    const isVisible = accordion.classList.contains("active");

    // Update ARIA attributes for accessibility
    button.setAttribute("aria-expanded", isVisible ? "true" : "false");
    accordion.setAttribute("aria-hidden", isVisible ? "false" : "true");
  });
});
// Range Controls
document.addEventListener("DOMContentLoaded", () => {
  const rangeInput = document.getElementById("rangeInput");
  const valueDisplay = document.getElementById("valueDisplay");

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  rangeInput.addEventListener("input", () => {
    const formattedValue = formatNumberWithCommas(rangeInput.value);
    valueDisplay.textContent = `$${formattedValue}`;
  });

  const paymentRangeInput = document.getElementById("paymentRangeInput");
  const paymentRangeDisplay = document.getElementById("paymentRangeDisplay");

  paymentRangeInput.addEventListener("input", () => {
    const minValue = parseInt(paymentRangeInput.value);
    const maxValue = minValue + 2000;
    const minFormattedValue = formatNumberWithCommas(minValue);
    const maxFormattedValue = formatNumberWithCommas(maxValue);
    paymentRangeDisplay.textContent = `$${minFormattedValue} - $${maxFormattedValue}`;
  });
});
