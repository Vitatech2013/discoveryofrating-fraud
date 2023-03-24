const express = require('express')
const app = express()
const port = 4567;

app.get('/', index);
app.get('/registration', userRegistration);
app.get('/adminlogin', adminLogin);
app.get('/userlogin', userLogin);
app.get('/admin', admin);
app.get('/user', user);

app.get('/admin/postApps', adminPostApps);
app.get('/admin/viewUsers', adminViewUsers);
app.get('/admin/viewPosts', adminViewPosts);
app.get('/admin/viewRatting', adminViewRatting);
app.get('/admin/veiwFeedback', adminveiwFeedback);
app.get('/admin/changepwd', adminchangepwd);



app.get('/user/viewProfile', userViewProfile);
app.get('/user/viewFiles', userViewFiles);
app.get('/user/addFeedBack', useraddFeedback);
app.get('/user/appsRating', userAppsRating);
app.get('/user/chnagepwd', userchnagepwd);



function index(req, res) {
	res.sendFile("./index.html", { root: __dirname });
}

function userRegistration(req, res) {
	res.sendFile("./registration.html", { root: __dirname });
}

function adminLogin(req, res) {
	res.sendFile("./admin.html", { root: __dirname });
}

function userLogin(req, res) {
	res.sendFile("./user.html", { root: __dirname });
}

function admin(req, res) {
	res.sendFile("Admin/home.html", { root: __dirname });
}

function adminPostApps(req, res) {
	res.sendFile("Admin/postApps.html", { root: __dirname });
}

function adminViewUsers(req, res) {
	res.sendFile("Admin/viewUsers.html", { root: __dirname });
}

function adminViewPosts(req, res) {
	res.sendFile("Admin/viewPosts.html", { root: __dirname });
}

function adminViewRatting(req, res) {
	res.sendFile("Admin/viewRatting.html", { root: __dirname });
}

function adminveiwFeedback(req, res) {
	res.sendFile("Admin/veiwFeedback.html", { root: __dirname });
}

function adminchangepwd(req, res) {
	res.sendFile("Admin/changePassword.html", { root: __dirname });
}


function user(req, res) {
	res.sendFile("User/home.html", { root: __dirname });
}

function userViewProfile(req, res) {
	res.sendFile("User/profile.html", { root: __dirname });
}

function userViewFiles(req, res) {
	res.sendFile("User/viewFiles.html", { root: __dirname });
}

function useraddFeedback(req, res) {
	res.sendFile("User/addFeedBack.html", { root: __dirname });
}

function userAppsRating(req, res) {
	res.sendFile("User/appsRating.html", { root: __dirname });
}
function userchnagepwd(req, res) {
	res.sendFile("User/changePassword.html", { root: __dirname });
}

app.listen(port, () => console.log(`Server Started on ${port} Port Number`))
