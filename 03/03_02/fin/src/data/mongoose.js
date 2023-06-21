const { CONNECTIONSTRING }  = process.env;

const mongoose = require('mongoose');
//

(async () => {
    try {
        await mongoose.connect(CONNECTIONSTRING);        
        console.log('connected');
    } catch (error) {
        console.log(`Failed to connect to mongodb`);
    }
    
})();


