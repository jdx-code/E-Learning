const Course = require('../../models/Course')
const { userRegister, userLogin } = require('../../utils/Auth')
const cloudinary = require("../../middleware/media_upload/cloudinary")


module.exports = {
    registerAdmin : async(req, res) => {
        await userRegister(req.body, "admin", res)
    },

    loginAdmin : async(req, res) => {        
        await userLogin(req.body, "admin", res)
    },
    
    adminAddCourse : async(req, res) => {
        try{

            // Upload the file to Cloudinary
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "E-Learning"
            })
            const imageUrl = result.secure_url
            const cloudinaryId = result.public_id

            const newCourse = await Course.create({

                courseName: req.body.courseName,
                courseDescription: req.body.courseDescription,
                courseDuration: req.body.courseDuration,
                courseUrl: req.body.courseUrl,
                courseFee: req.body.courseFee,
                courseImage: imageUrl,
                cloudinary_id: cloudinaryId,
                usersEnrolled: [],
            })
            console.log('New course added..')
            res.status(200).json({ message: 'Course added successfully', course: newCourse });
        } catch (err){
            console.error(err)            
        }
    }
}