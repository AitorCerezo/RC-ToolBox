const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app', {
    userCreateIndex: true,
    userNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is Connecte'))
    .catch(err => console.error(err));
