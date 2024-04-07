const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema(
    {         
        courseName: {
            type: String,
            // required: true
        },
        courseDescription: {
            type: String, 
            // required: true           
        },
        courseDuration: {
            type: String,
            // required: true
        },
        courseUrl: {
            type: String, 
            // required: true           
        },
        courseFee: {
            type: Number,
            // required: true
        },
        courseImage: {
            type: String,            
        },  
        cloudinary_id: {
            type: String,
        },        
        usersEnrolled: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        }],
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("courses", CourseSchema)