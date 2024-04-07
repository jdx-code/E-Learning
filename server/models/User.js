const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "customer",
            enum: ["admin", "student", "mentor"]
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("users", UserSchema)



/* Admin credentials : 
{
    "name": "admin",
    "email": "admin@gmail.com",
    "role": "admin",
    "username": "admin1234",
    "password": "admin4321"
}
*/