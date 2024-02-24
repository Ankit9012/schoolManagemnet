const mongoose = require('mongoose')
const { Schema } = mongoose;

const examResultsSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            required: true
        },
        exam: {
            type: Schema.Types.ObjectId,
            ref: 'Exam',
            required: true
        },
        grade: {
            type: Number,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        passMark: {
            type: Number,
            required: true,
            default: 50
        },
        // pass/fail
        status: {
            type: String,
            required: true,
            enum: [
                'failed',
                'passed'
            ]
        },
        remarks: {
            type: String,
            required: true,
            enum: [
                'Excellent',
                'Good',
                'Poor'
            ]
        },
        position: {
            type: Number,
            required: true
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: 'Subject'
        },
        classLevel: {
            type: Schema.Types.ObjectId,
            ref: 'ClassLevel'
        },
        academicTerm: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicTerm',
            required: true
        },
        academicYear: {
            type: Schema.Types.ObjectId,
            ref: 'AcademicYear',
            required: true
        },
        isPublished: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const ExamResult = mongoose.model(
    'ExamResult',
    examResultsSchema
);

module.exports = ExamResult;