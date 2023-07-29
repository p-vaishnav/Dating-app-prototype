const Plan = require('../model/plan.model');

// create a plan
const createPlan = async (req, res) => {
    const {name, price, description, duration} = req.body;

    if (!name || !price || !description || !duration) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    try {
        // add the entry to the database, where data will be sent from the front-end by req.body
        const plan = await Plan.create({
            name,
            price,
            description,
            duration,
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while inserting the plan'});
    }

    res.status(200).json({msg: 'plan created successfully'});
};

// get all plans
const getAllPlan = async (req, res) => {
    try {
        // get all the plans
        const plans = await Plan.find();
        return res.status(200).json({plans});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while getting the plans'});
    }
};

// update a plan
const updatePlan = async (req, res) => {
    const {name, price, description, duration} = req.body;

    if (!name || !price || !description || !duration) {
        return res.status(400).json({msg: 'Please enter all fields'});
    }

    try {
        // update the plan
        const plan = await Plan.updateOne({_id: req.params.planId}, {
            name,
            price,
            description,
            duration,
        });
        return res.status(200).json({msg: 'plan updated successfully', plan});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while updating the plan'});
    }
};

// delete a plan
const deletePlan = async (req, res) => {
    try {
        // delete the plan
        const plan = await Plan.deleteOne({_id: req.params.planId});
        return res.status(200).json({msg: 'plan deleted successfully', plan});
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: 'Error while deleting the plan'});
    }
};

module.exports = {createPlan, getAllPlan, updatePlan, deletePlan}