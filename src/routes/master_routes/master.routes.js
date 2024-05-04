var express = require("express");
var router = express.Router();

const UserController = require("./../../controller/master_controller/UsersController");
const GroupController = require("./../../controller/master_controller/MembersController");
const TransactionController = require("./../../controller/master_controller/TransactionController");
const QuantityController = require("./../../controller/master_controller/QuantityController");
const MilkController = require("./../../controller/master_controller/MilkController");
const CustomerController = require("./../../controller/master_controller/CustomerController");

// USER CONTROLLER
router.get("/users", UserController.getAllUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.register);
router.put("/user/:id", UserController.updateUser);
router.get("/roles", UserController.getAllRole);

// GROUP MEMBER
router.get("/groups", GroupController.getAllGroup);
router.get("/group/:id", GroupController.getGroupById);
router.post("/group", GroupController.insertGroup);
router.put("/group/:id", GroupController.updateGroup);

// MEMBERS
router.get("/members", GroupController.getAllMembers);
router.get("/member/:id", GroupController.getMemberById);
router.post("/member", GroupController.insertMember);
router.put("/member/:id", GroupController.updateMember);

// MEMBERS
router.get("/milks", MilkController.getAllMilk);
router.get("/milk/:id", MilkController.getMilkById);
router.post("/milk", MilkController.insertMilk);
router.put("/milk/:id", MilkController.updateMilk);

// CUSTOMERS
router.get("/customers", CustomerController.getAllCustomer);
router.get("/customer/:id", CustomerController.getCustomerById);
router.post("/customer", CustomerController.insertCustomer);
router.put("/customer/:id", CustomerController.updateCustomer);

// TRANSACTION
router.get("/transactions", TransactionController.getAllTransaction);
router.get("/transaction/:id", TransactionController.getTransactionById);
router.get(
  "/transaction-by-category/:id",
  TransactionController.getTransactionByCategoryId
);
router.post("/transaction", TransactionController.insertTransaction);
router.put("/transaction/:id", TransactionController.updateTransaction);
router.delete("/transaction/:id", TransactionController.deleteTransaction);

// STOK
router.get("/stoks", TransactionController.getAllStok);
router.post("/stok", TransactionController.insertStok);
router.put("/stok/:id", TransactionController.updateStok);

// QUANTITY
router.get("/quantity/:id", QuantityController.getQuantityByMilkId);
router.get(
  "/quantity-by-transaction/:id",
  QuantityController.getQuantityByTransaction
);
router.post("/quantity", QuantityController.insertQuantity);
router.put("/quantity/:id", QuantityController.updateQuantity);
router.delete("/quantity/:id", QuantityController.deleteQuantity);

module.exports = router;
