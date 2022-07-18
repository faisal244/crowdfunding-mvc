const renderLoginPage = (req, res) => {
	res.send("renderLoginPage");
};
const renderSignupPage = (req, res) => {
	res.send("renderSignupPage");
};
const renderHomePage = (req, res) => {
	res.send("renderHomePage");
};

module.exports = {
	renderLoginPage,
	renderSignupPage,
	renderHomePage,
};
