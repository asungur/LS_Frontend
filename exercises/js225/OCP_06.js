// In this exercise, you'll build a simple inventory management system. The system is composed of an item creator, an items manager, and a reports manager. The item creator makes sure that all necessary information are present and valid. The item manager is responsible for creating items, updating information about items, deleting items, and querying information about the items. Finally, the report manager generates reports for a specific item or ALL items. Reports for specific items are generated from report objects created from the report manager. The report manager is responsible for reports for all items.

// Component Specifications
// Here's all the required information for an item:

// SKU code: This is the unique identifier for a product. It consists of the first 3 letters of the item and the first 2 letters of the category. If the item name consists of two words and the first word consists of two letters only, the next letter is taken from the next word.
// Item name: This is the name of the item. It must consist of a minimum of 5 characters. Spaces are not counted as characters.
// Category: This is the category that the item belongs to. It must consist of a minimum of 5 characters and be only one word.
// Quantity: This is the quantity in stock of an item. This must not be blank. You may assume that a valid number will be provided.
// The following are the methods that the items manager can perform:

// item creator, items manager and reports manager
// creator => information valid and present
// items manager => creating, updating, deleting items, query information about items
// reports manager => reports for one or all items
// SKU => 3 letter of item 2 letter of category (get rid of spaces??)
// Item name => item name min 5 chars(excluding spaces)
// Item category => min 5 chars one word
// Item quantity => stock quantity, cannot be blank, valid num will be provided

// create: This method creates a new item. Returns false if creation is not successful.
// update: This method accepts an SKU Code and an object as an argument and updates any of the information on an item. You may assume valid values will be provided.
// delete: This method accepts an SKU Code and deletes the item from the list. You may assume a valid SKU code is provided.
// items: This property returns all the items.
// inStock: This method list all the items that have a quantity greater than 0.
// itemsInCategory: This method list all the items for a given category
// The following are the methods on the reports managers:

// ItemCreator = IIFE
// ItemManager = OBJ
// ReportManager = OBJ

// init: This method accepts the ItemManager object as an argument and assigns it to the items property.
// createReporter: This method accepts an SKU code as an argument and returns an object.
// The returned object has one method, itemInfo. It logs to the console all the properties of an object as "key:value" pairs (one pair per line). There are no other properties or methods on the returned object (except for properties/methods inherited from Object.prototype).
// reportInStock: Logs to the console the item names of all the items that are in stock as a comma separated values.
// Notes:

// There's no need to add the ability to validate the uniqueness of the SKU code. Given the current description, it's possible that a duplicate will exist.
// Each required piece of information for an item corresponds to one property.
// If any of the require information provided is not valid, the item creator returns an object with a notValid property with a value of true.
// The created item objects should not have any methods/properties on them other than the required information above and those inherited from Object.prototype.
// You may add methods to the item manager as you deem necessary.
// Here is a sample run that you can use a reference:

const ItemCreator = function() {
  function generateSkuCode(itemName, category) {
    return (itemName.replace(/\s/g, '').slice(0, 3).toUpperCase() +
            category.replace(/\s/g, '').slice(0, 2).toUpperCase());
  }

  function isValidItemName(itemName) {
    return itemName.replace(/\s/g, '').length >= 5;
  }

  function isValidCategory(category) {
    return category.replace(/\s/g, '').length >= 5 && category.split(' ').length === 1;
  }

  function isQuantityProvided(quantity) {
    return quantity !== undefined
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isQuantityProvided(quantity)) {
      this.skuCode = generateSkuCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
}();

const ItemManager = {
  items: [],
  getItem(skuCode) {
    return this.items.filter(item => item.skuCode === skuCode)[0];
  },

  create(itemName, category, quantity) {
    const item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(skuCode, itemInformation) {
    Object.assign(this.getItem(skuCode), itemInformation);
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.items.filter(({quantity}) => quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    return (() => {
      const item = this.items.getItem(skuCode);
      return {
        itemInfo() {
          Object.keys(item).forEach(key => {
            console.log(`${key}: ${item[key]}`);
          });
        },
      };
    })();
  },

  reportInStock() {
    console.log(this.items.inStock().map(({itemName}) => itemName).join(','))
  },
};

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

ItemManager.items;       
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10