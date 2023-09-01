// Inside your backend code
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crud_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
