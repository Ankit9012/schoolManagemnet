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
            role: {},
            isWitdrawn: {},
            classLevels: [{}],
            currentClassLeve: {},
            academicYear: {},
            dateAdmitted: {},
            examResults: [{}],
            program: {},
            isPromotedToLevel200: {},
            isPromotedToLevel300: {},
            isPromotedToLevel400: {},
            isGraduated: {},
            isSuspended: {},
            perfectName: {},
            yearGraduated: {}
        }
    }
);

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;