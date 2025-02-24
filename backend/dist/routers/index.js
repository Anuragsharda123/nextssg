"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/getallusers', controllers_1.getUsers);
router.post('/adduser', controllers_1.addUser);
exports.default = router;
