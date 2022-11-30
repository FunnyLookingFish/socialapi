const { Thought, User } = require("../models");

function getAll async (req, res){
    try{
        const thoughts = await Thought.find({});
        res.status(200).json(thoughts);
    } catch(err) {
        res.status(500).json(err)
    }
}

function findOne async (req, res){
    try{
        const thoughts = await Thought.findOne({});
        res.status(200).json(thoughts);
    } catch(err) {
        res.status.json(err) 
    }
}

module.exports = thoughtController;