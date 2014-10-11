function createItem(data) {
	var cont = $("<div>", {class:"b-serp-item"});

	cont.append('<a class="b-link" href="#main_menu?item=' + data.id + '">' + 
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

function getItemById(id) {
    return globalItemsData.filter(function(val) {
        return val.id === id
    }).pop();
}

function createItemPage(id) {
	var cont = $("<div>", {class: "b-item-page"});
	var item = getItemById(id);

    cont.append( 
                $("<div>",{class:"b-model-image"}).append($("<img src=" + item.img_big + ">")), 
            	$("<div>", { class: "b-techspec"}).text(item.text));

    return cont;
}