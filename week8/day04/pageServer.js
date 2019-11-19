let express = require('express');
let app = express();
app.listen(3000,function(){
    console.log('server is 3000')
})
app.use(express.static('./page'))