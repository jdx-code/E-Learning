const router = require("express").Router()
const { userAuth, checkRole, serializeUser } = require('../utils/Auth')
const adminController = require('../controllers/Auth/admin')
const upload = require('../middleware/media_upload/multer')

// Admin registration route
router.post('/register-admin', adminController.registerAdmin)

// Admin login route
router.post('/login-admin', adminController.loginAdmin)

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json(serializeUser(req.user))
})

// Admin PROTECTED route
router.get('/admin-protected', userAuth, checkRole(['admin']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

// Admin Add Course
router.post('/admin/add-course', userAuth, checkRole(['admin']), upload.single("file"), adminController.adminAddCourse)

module.exports = router