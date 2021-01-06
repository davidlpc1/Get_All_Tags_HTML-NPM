const tags = require('./tags.json');

const getAllTags = () => tags;

const getTagsInitializedWith = letter => {
    return tags.filter(tag => tag[0] === letter);
}

module.exports = {
    getAllTags,
    getTagsInitializedWith
}