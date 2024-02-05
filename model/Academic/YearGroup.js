const mongoose = require('mongoose');
const YearGroupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Admin',
            required: true
        },
        academicYear: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicYear',
            required: true
        }
    },
    {
        timeseries: true
    }
);


const YearGroup = mongoose.model('YearGroup', YearGroupSchema);
module.exports = YearGroup;