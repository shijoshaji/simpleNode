// creating this to get the parent dir of the file we work

const path = require('path');

module.exports = path.dirname(require.main.filename);
