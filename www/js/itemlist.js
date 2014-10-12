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

	var start_time, end_time;

	// jQuery.ajax({
 //         url: "https://msymbolics.com:13001/yamoney_create?item=1&id=41001575496082&time=10",
 //         success: function(result) {
 //         },
 //         async:   false
 //    });

    jQuery.ajax({
         url: "https://msymbolics.com:13001/yamoney_bid?item=1&id=410012119774823&amount=0.1",
         success: function(result) {
         },
         async:   false
    });

    jQuery.ajax({
         url: "https://msymbolics.com:13001/yamoney_time?item=" + id,
         success: function(result) {
         	var times = result.split(",");
         	start_time = (times[0] - 1) * 1000;
         	end_time = (times[1] - 1) * 1000;
         },
         async:   false
    });

    cont.append(
                $("<div>",{class:"b-model-image"}).append($("<img src=" + item.img_big + ">")),
                $('<input data-min="' + 0 + '" readonly=true data-max="' + (end_time - start_time) + '" data-displayInput=true data-width="100" data-height="100" data-thickness=".3" class="knob-container">').knob({format: function(v){
					// create a new javascript Date object based on the timestamp
					// multiplied by 1000 so that the argument is in milliseconds, not seconds
					var date = new Date(end_time - start_time - v);
					// minutes part from the timestamp
					var minutes = "0" + date.getMinutes();
					// seconds part from the timestamp
					var seconds = "0" + date.getSeconds();

					// will display time in 10:30:23 format
					var formattedTime = minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);

					return formattedTime;
                }}),
            	$("<div>", { class: "b-techspec"}).text(item.text));

    return {startTime: start_time, endTime: end_time, cont: cont};
}