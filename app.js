const getCurrentUTCTime = () => {
	const now = new Date();
	return now.toISOString();
};

document.addEventListener("DOMContentLoaded", function () {
	const timeElement = document.getElementById("currentTime");
	timeElement.textContent = "UTC Time: " + getCurrentUTCTime();

});
