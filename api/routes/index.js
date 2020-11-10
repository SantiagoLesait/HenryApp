const express = require("express");
const router = express();
const userRoutes = require("./user");
const cohortRoutes = require("./cohort");
const adminRoutes = require("./admin");
const instructorRoutes = require("./instructor");
const PpRoutes = require("./pair-programming");
const groupRoutes = require("./group");

router.use("/admin", adminRoutes);
router.use("/cohort", cohortRoutes);
router.use("/student", userRoutes);
router.use("/instructor", instructorRoutes);
router.use("/PP", PpRoutes);
router.use("/group", groupRoutes);

module.exports = router;
