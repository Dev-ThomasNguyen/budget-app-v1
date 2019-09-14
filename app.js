// Budget Controller
var budgetController = (function() {})();

// UI CONTROLLER
var UIController = (function() {
  // Some code
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  document.querySelector(".add__btn").addEventListener("click", function() {
    // 1. Get the fieled input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 5. Display the budget on the UI
  });

  document.addEventListener("keypress", function(e) {
    console.log(e);
  });
})(budgetController, UIController);
