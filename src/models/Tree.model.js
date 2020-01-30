const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const treeSeed = require('./TreeSeed');

const treeSchema = new Schema({
    name: String,
    leaves: [Number]
});

const Tree = mongoose.model('Tree', treeSchema);

// const Tree1 = new Tree({
//     name: "Wondertree"
// })

module.exports = Tree;