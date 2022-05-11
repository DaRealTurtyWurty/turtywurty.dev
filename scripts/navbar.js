function goToPage() {
    // get the page from the input
    var page = document.getElementById("searchbar").value;

    // get the current page
    var currentPage = window.location.href;

    // remove anything after the 3rd slash
    currentPage = currentPage.substring(
      0,
      currentPage.indexOf("/", 3)
    );

    // check that the page is not empty
    if (page.trim() === "") {
      return false;
    }

    // set the location to current page + page
    window.location.href = currentPage + "/" + page + ".html";
  }

  function setFocusLevel(focused) {
    // get the page from the input
    var searchbar = document.getElementById("searchbar");
    var search = searchbar.value.toLowerCase();

    // get the dropdown items
    var dropdownItems = document.getElementsByClassName(
      "dropdown-item search-page"
    );

    if (search.trim() === "" && !focused) {
      var dropdown =
        document.getElementsByClassName("dropdown-content")[0];
      dropdown.style.display = "none";

      // set dropdown position to searchbar position
      dropdown.style.top =
        searchbar.offsetTop + searchbar.offsetHeight + "px";
      dropdown.style.left = searchbar.offsetLeft + "px";

      // set dropdown width to searchbar width
      dropdown.style.width = searchbar.offsetWidth + "px";

      for (var i = 0; i < dropdownItems.length; i++) {
        var item = dropdownItems[i];
        item.style.display = "none";
      }
    } else if (focused) {
      var dropdown =
        document.getElementsByClassName("dropdown-content")[0];
      dropdown.style.display = "";

      for (var i = 0; i < dropdownItems.length; i++) {
        var item = dropdownItems[i];
        item.style.display = "";
      }
    }
  }

  function filterSearch() {
    // get the page from the input
    var searchbar = document.getElementById("searchbar");
    var search = searchbar.value.toLowerCase();

    // get the dropdown items
    var dropdownItems = document.getElementsByClassName(
      "dropdown-item search-page"
    );

    // if the search is not empty then hide all of the dropdown items
    for (var i = 0; i < dropdownItems.length; i++) {
      var item = dropdownItems[i];
      item.style.display = "none";
    }

    var matching = 0;
    // show the dropdown items that match the search
    for (var i = 0; i < dropdownItems.length; i++) {
      var item = dropdownItems[i];
      var itemText = item.innerText.toLowerCase();

      if (itemText.includes(search)) {
        item.style.display = "";
        matching++;
      }
    }

    if (matching == 0) {
      // if all of the drop down items are hidden then hide the dropdown
      var dropdown =
        document.getElementsByClassName("dropdown-content")[0];

      if (dropdown.style.display === "none") {
        dropdown.style.display = "";
      }
    }
  }