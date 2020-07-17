var app = require('./config/custom-express')();

app.listen(3004, function(){
    console.log('Server running: localhost:3004')
});

