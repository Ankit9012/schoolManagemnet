const mongoose = require('mongoose');
const AcademicYearSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        fromYear: {
            type: String,
            required: true
        },
        toYear: {
            type: String,
            required: true
        },
        isCurrent: {
            type: Boolean,
            default: false
        },
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Student',
                default: []
            }
        ],
        teachers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'teacher',
                default: []
            }
        ]
    }
);


const AcademicYear = mongoose.model('AcademicYear', AcademicYearSchema);

module.exports = AcademicYear;

