const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema(
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
        studentId: {
            type: String,
            required: true,
            default: function () {
                return (
                    'STU' +
                    Math.floor(100 + Math.random() * 900) +
                    Date.now().toString().slice(2, 4) +
                    this.name
                        .split(' ')
                        .map(name => name[0])
                        .join('')
                        .toUpperCase()
                )
            },
            role: {
                type: String,
                default: 'student'
            },
            isWitdrawn: {
                type: Boolean,
                default: false,

            },
            classLevels: [{
                type: mongoose.Types.ObjectId,
                ref: 'ClassLevel',
                required: trusted,

            }],
            currentClassLevel: {
                type: String,
                default: () => {
                    return this.classLevels[
                        this.classLevels.length - 1
                    ]
                }
            },
            academicYear: {
                type: mongoose.Types.ObjectId,
                ref: 'AcademicYear',
                required: true
            },
            dateAdmitted: {
                type: Date,
                defalut: Date.now
            },
            examResults: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExamResult'
            }],
            program: {
                type: mongoose.Types.ObjectId,
                ref: 'Program',
                required: true
            },
            isPromotedToLevel200: {
                type: Boolean,
                default: false
            },
            isPromotedToLevel300: {
                type: Boolean,
                default: false
            },
            isPromotedToLevel400: {
                type: Boolean,
                default: false
            },
            isGraduated: {
                type: Boolean,
                default: false
            },
            isSuspended: {
                type: Boolean,
                default: false
            },
            perfectName: {
                type:String,
            },
            yearGraduated: {
                type:String,
            }
        }
    }
);

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;