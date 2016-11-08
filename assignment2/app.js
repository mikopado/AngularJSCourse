(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getBuyItems();

    toBuyList.remove = function(index) {
      try {
        ShoppingListCheckOffService.moveItem(index);


      } catch (emptyMessage) {

        toBuyList.message = emptyMessage.message;

      }

    };
  };

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtList = this;

      boughtList.items = ShoppingListCheckOffService.getBoughtItems();
      
      boughtList.isEmpty = function () {
        return ShoppingListCheckOffService.checkIsEmpty();
      };




  };

  function ShoppingListCheckOffService() {
    var service = this;

    var alreadyBoughtList = [];

    var buyList = [
      {
        name: "Cookies",
        quantity: "10 bags"
      },
      {
        name: "Bread",
        quantity: "10 slices"
      },
      {
        name: "Milk",
        quantity: "2 litres"
      },
      {
        name: "Beer",
        quantity: "3 bottles"
      },
      {
        name: "Pasta",
        quantity: "2 Kg"
      }
    ];
    service.getBuyItems = function() {
      return buyList;
    };


    service.moveItem = function (index) {

      alreadyBoughtList.push(buyList[index]);
      buyList.splice(index, 1);
      if(buyList.length === 0) {

        throw new EmptyMessage();
      }


    };

    service.getBoughtItems = function() {

          return alreadyBoughtList;

    };

    service.checkIsEmpty = function () {
      if(alreadyBoughtList.length === 0) {
        return true;
      }
    };

  };
})();
