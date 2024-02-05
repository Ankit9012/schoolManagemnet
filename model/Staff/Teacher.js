const mongoose = require('mongoose')
const TeacherSchema = new mongoose.Schema(
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
            default: function () {
                return (
                    'TEA' +
                    Math.floor(100 + Math.random() * 900) +
                    Date.now().toString().slice(2, 4) +
                    this.name
                        .split(" ")
                        .map(name => name[0])
                        .join('')
                        .toUpperCase()

                )
            }

        },
        // if witdwran, the teacher not able to login
        isWitdrawn: {
            type: Boolean,
            default: false
        },
        // if suspended, able to login but not perfom any operation
        isSuspended: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: 'teacher'
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        },
        applicationStatus: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        },
        program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Program',
            required: true
        },
        // teacher can teach more than one class level
        classLevel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ClassLevel',
            required: true
        },
        academicYear: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicYear',
            required: true
        },
        examsCreated: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Exam'
            }
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,

        },
        academicTerm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AcademicTerm',
            required: true

        }
    },
    {
        timestamps: true
    }
);

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;