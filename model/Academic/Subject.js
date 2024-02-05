const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: 'Teacher',
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicTerm',
            required: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Admin',
            required: true
        },
        duration: {
            type: String,
            required: true,
            default: '3 months'
        }
    },
    {
        timestamps: true
    }
);

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;