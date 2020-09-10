// BUDGET CONTROLLER
let budgetController = (function () {
  // some code
})();

// UI CONTROLLER
let UIController = (function () {
  // some codes
})();

// GLOBAL APP CONTROLLER
let controller = (function (budgetCtrl, UICtrl) {
  let ctrlAddItem = function () {
    /* 1. Get the field input data 
  2. add the item to the budget controller 
  3. add the item to the ui 
  4. calculate the budget 
  5. display the budget on the ui 
   */

    console.log('it is working ');

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
})(budgetController, UIController);
