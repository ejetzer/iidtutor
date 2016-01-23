function hideThing(tag, index, post, censored) {
	if (tag in censored) {
		$('#post'.concat(post)).toggleClass('warning');
	}
}

function checkTags(tags, post, censored) {
	tags.forEach(function (tag, index, array) {
		hideThing(tag, index, post, censored);
	});
}

function censor(censored) {
	alltags.forEach(function (tags, post, map) {
		checkTags(tags, post, censored);
	});
}

$(function () {
	censor(censored);
});
