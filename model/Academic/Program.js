import { Schema as _Schema, model } from 'mongoose';
const ProgramSchema = new _Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            default: function () {
                return (
                    this.name
                        .split(' ')
                        .map(name => name[0])
                        .join('')
                        .toUpperCase() +
                    Math.floor(10 + Math.random() * 90) +
                    Math.floor(10 + Math.random() * 90)
                );
            }
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Admin',
            required: true
        },
        teachers: {
            type: Schema.Types.ObjectId,
            ref: 'Teacher',
            default: []
        },
        students: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
            default: []
        },
        subjects: {
            type: Schema.Types.ObjectId,
            ref: 'Subject',
            default: []
        }
    },
    {
        timestamps: true
    }
)


const Program = model('Program', ProgramSchema);

export default Program;
