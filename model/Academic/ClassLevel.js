const mongoose = require('mongoose');
const ClassLevelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        students: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Student',
                default: []
            }
        ],
        subjects: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Subject',
                default: []
            }
        ],
        teachers: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Teacher'
            }
        ]
    },
    {
        timestamps: true
    }
);

const ClassLevel = mongoose.model('ClassLevel', ClassLevelSchema);
module.exports = ClassLevel;