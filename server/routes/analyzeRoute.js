const express = require("express");

const router = express.Router();

const { analyzeProfile } = require("../controllers/analyzeController");

router.post("/analyze", analyzeProfile);

module.exports = router;