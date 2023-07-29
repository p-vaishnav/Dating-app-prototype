const express = require('express');
const router = express.Router();

// middleware
const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');

const {createPlan, getAllPlan, updatePlan, deletePlan} = require('../controller/plan.controller');

// create a plan
router.post('/plan', isAuthenticated, isAdmin, createPlan);

// get all plans
router.get('/plan', isAuthenticated,  isAdmin, getAllPlan);

// update a plan
router.put('/plan/:planId', isAuthenticated, isAdmin, updatePlan);

// delete a plan
router.delete('/plan/:planId',isAuthenticated, isAdmin, deletePlan);

module.exports = router;