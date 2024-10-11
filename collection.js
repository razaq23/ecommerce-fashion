var container = document.getElementById("products");
var search = document.getElementById("search");

var productsList = container.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var i = 0; i < productsList.length; i++) {
        var productName = productsList[i].querySelector("p").textContent;

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productsList[i].style.display = "none";
        } else {
            productsList[i].style.display = "block";
        }
    }
});
