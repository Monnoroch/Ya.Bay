function createItem(data) {
	var cont = $("<div>", {class:"b-serp-item"});

	cont.append('<a class="b-link" href="#' + data.id + '">' + 
			'<i class="b-icon" style="background-image: url(' + data.img + ')"></i>' + 
			'<div class="b-serp-description">' + 
				'<div class="b-serp-description__title">' + data.title + '</div>' +
				'<div class="b-serp-description__text b-serp-description__text_limit_yes">' +
					data.text + 
				'</div>' +
			'</div>' + 
		'</a>');

	return cont;
}

function fillList(data, cont) {
	data.forEach(function(val){
		cont.append(createItem(val));
	});
}