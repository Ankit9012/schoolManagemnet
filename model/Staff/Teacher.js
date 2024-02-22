const mongoose = require('mongoose');
const TeachersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dateEmployed: {
            type: Date,
            default: Date.now
        },
        teacherId: {
            type: String,
            required: true,
            default: function () {
                return (
                    'TEA' +
                    Math.floor(100 + Math.random() * 900) +
                    Date.now().toString().slice(2, 4) +
                    this.name
                        .split(' ')
                        .map(name => name[0])
                        .join('')
                        .toUpperCase()
                )
            }
        },
        isWitDrawn: {
            type: Boolean,
            default: false
        },
        isSuspended: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: 'teacher',
        },
        subject: {
            type: mongoose.Types.ObjectId,
            ref: 'Subject',
            required: true
        },
        applicationStatus: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        },
        program: {
            type: mongoose.Types.ObjectId,
            ref: 'Program',
            required: true
        },
        classLevel: {
            type: mongoose.Types.ObjectId,
            ref: 'ClassLevel',
            required: true
        },
        academicYear: {
            type: mongoose.Types.ObjectId,
            ref: 'AcademicYear',
            required: true,
        },
        examCreated: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Exam'
            }
        ],
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'Admin',
            required: true
        },
        academicTerm: {
            type: mongoose.Types.ObjectId,
            ref: 'AcademicTerm',
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Teacher = mongoose.model('Teacher', TeachersSchema);
module.exports = Teacher;