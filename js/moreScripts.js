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
