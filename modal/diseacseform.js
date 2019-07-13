const mongoose = require("mongoose");
const schema = mongoose.Schema;


const diseacseformSchema = new schema({
    DiseacseName:String,
    Summary:String,
    Cause:String,
    Midicine:String,
    NaturalMidicine:String,
    
    
});

module.exports = mongoose.model('diseacseform',diseacseformSchema);