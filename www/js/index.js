/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var globalCatsData = [
{
    "id": "item_type_phone",
    "icon": "icon-phone",
    "name": "Мобильные",
    "children":[{
        "id": "item_type_ios",
        "icon": "icon-ios",
        "name": "Apple"
    },
    {
        "id": "item_type_android",
        "icon": "icon-android",
        "name": "Android"
    },
    {
        "id": "item_type_windows",
        "icon": "icon-windows",
        "name": "Windows"
    },
    {
        "id": "item_type_blackberry",
        "icon": "icon-blackberry",
        "name": "Blackberry"
    }]
},
{
    "id": "item_type_tablet",
    "icon": "icon-tablet",
    "name": "Планшеты",
    "children": []
},
{
    "id": "item_type_notebook",
    "icon": "icon-notebook",
    "name": "Ноутбуки",
    "children": []
},
{
    "id": "item_type_tv",
    "icon": "icon-tv",
    "name": "Телевизоры",
    "children": []
},
{
    "id": "item_type_camera",
    "icon": "icon-camera",
    "name": "Фотоаппараты",
    "children": []
},
{
    "id": "item_type_clothes",
    "icon": "icon-clothes",
    "name": "Одежда",
    "children": []
}
];


var globalItemsData = [
    {
        "img": "http://mdata.yandex.net/i?path=b0910230238_img_id6738100464582526458.jpg",
        "title": "Apple iPhone 5S 16Gb",
        "text": "3G, iOS 7, 4\", 640x1136, 16Гб, 112г, камера 8МП, Bluetooth",
        "cat": [0,0],
        "os": "ios",
        "id": "1"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0904224341_img_id14396482440485392.jpeg",
        "title": "Sony Xperia Z3 Compact",
        "text": "3G, Android 4.4, 4.60\", 720x1280, 16Гб, 129г, камера 20.70МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,1],
        "os": "android",
        "id": "2"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0512090441_img_id4366155187183264326.jpeg",
        "title": "Samsung UE48HU8500",
        "text": "ЖК-телевизор, LED, 48\", 3840x2160, 4K UHD, 1000 Гц, 3D, картинка в картинке, DVR, 2 TV-тюнера, мощность звука 60 Вт, HDMI x4, Ethernet, Wi-Fi, Bluetooth, Smart T",
        "cat": [3],
        "id": "3"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0912194435_img_id2685468921689248210.jpeg",
        "title": "Apple iPhone 6 64Gb",
        "text": "3G, iOS 8, 4.70\", 750x1334, 64Гб, 129г, камера 8МП, Bluetooth",
        "cat": [0,0],
        "os": "ios",
        "id": "4"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0912194303_img_id7819188231934173594.jpeg",
        "title": "Apple iPhone 6 16Gb",
        "text": "3G, iOS 8, 4.70\", 750x1334, 16Гб, 129г, камера 8МП, Bluetooth",
        "cat": [0,0],
        "os": "ios",
        "id": "5"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0226173247_img_id4668470472780587307.jpeg",
        "title": "Samsung Galaxy S5 SM-G900F 16Gb",
        "text": "3G, Android 4.4, 5.10\", 1080x1920, 16Гб, 145г, камера 16МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,1],
        "os": "android",
        "id": "6"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0226173247_img_id4668470472780587307.jpeg",
        "title": "Samsung Galaxy S5 SM-G900F 16Gb",
        "text": "3G, Android 4.4, 5.10\", 1080x1920, 16Гб, 145г, камера 16МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,1],
        "os": "android",
        "id": "7"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0315073717_img_id4129002154421034629.jpg",
        "title": "Samsung Galaxy S4 GT-I9500 16Gb",
        "text": "3G, Android 4.4, 5\", 1080x1920, 16Гб, 130г, камера 13МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,1],
        "os": "android",
        "id": "8"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0910231305_img_id8113638867959677735.jpg",
        "title": "Apple iPhone 5S 32Gb",
        "text": "3G, iOS 7, 4\", 640x1136, 32Гб, 112г, камера 8МП, Bluetooth",
        "cat": [0,0],
        "os": "ios",
        "id": "9"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0115105237_img_id1276654684733213084.jpeg",
        "title": "Sony Xperia Z1 Compact",
        "text": "3G, Android 4.4, 4.30\", 720x1280, 16Гб, 137г, камера 20.70МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,1],
        "os": "android",
        "id": "10"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0115105237_img_id1276654684733213084.jpeg",
        "title": "Sony Xperia Z1 Compact",
        "text": "3G, Android 4.4, 4.30\", 720x1280, 16Гб, 137г, камера 20.70МП, Bluetooth, microSD (TransFlash)",
        "cat": [0,0],
        "os": "ios",
        "id": "11"
    },
    {
        "img": "http://mdata.yandex.net/i?path=b0613150319_img_id7118053794648690912.jpeg",
        "title": "Samsung UE22H5610",
        "text": "ЖК-телевизор, LED, 22\", 1920x1080, 1080p Full HD, 100 Гц, картинка в картинке, DVR, мощность звука 20 Вт, HDMI x3, Ethernet, Wi-Fi, Smart TV",
        "cat": [3],
        "id": "12"
    }
];



Number.prototype.printFloat = function (fix){
    if(fix == undefined) fix = 2;
    return String(this.toFixed(fix)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
Number.prototype.printInt = function (){
  return this.printFloat(0);
}

var processHash = function( url ) {
    var parsed = $.mobile.path.parseUrl( url ),
        hashQuery = parsed.hash.split( "?" );
    return {
        parsed: parsed,
        cleanHash: ( hashQuery.length > 0 ? hashQuery[ 0 ] : "" ),
        queryParameters: ( hashQuery.length > 1 ? hashQuery[ 1 ] : "" )
    };
};

var app = {
    // Application Constructor
    initialize: function() {
        var self = this;

        this.bindEvents();

        //this.fetchCats(function(){
            //self.renderCats(self.cats);
        //});
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        var self = this;
        this.app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
        if ( this.app ) {
            // TODO
            // document.addEventListener('deviceready', this.onDeviceReady, false);
            $(document).ready(function() {
                self.onDeviceReady();
            });
        } else {
            //alert("web");
            $(document).ready(function(){
                self.onDeviceReady();
            });
        }

        window.addEventListener('orientationchange', this.onOrientationChange);

        document.ontouchmove = function(event){
          // if( $.mobile.activePage.attr('id') == "main_menu" ){
          //  event.preventDefault();
          // }
        }


        $( document ).bind( "mobileinit", function() {
            // Make your jQuery Mobile framework configuration changes here!
            $.mobile.allowCrossDomainPages = true;
            $.support.cors = true;
            $.mobile.ignoreContentEnabled = true;
        });
         $.mobile.defaultPageTransition = 'none';
         $.mobile.defaultDialogTransition = 'none';

        $(document)
        .on( "pagechange", function( event, data ) {

        })
        .on( "pagebeforechange", function( event, data ) {
            // When we go from #secondary-page to #secondary-page we wish to indicate
            // that a transition to the same page is allowed.


            if ( $.type( data.toPage ) === "string" &&
                data.options.fromPage &&
                data.options.fromPage.attr( "id" ) === "main_menu" &&
                processHash( data.toPage ).cleanHash === "#main_menu" ) {

                    var queryParameters = {},
                        processedHash = processHash( data.toPage );

                    if ( processedHash.queryParameters ) {
                        $.each( processedHash.queryParameters.split( "&" ),
                            function( index, value ) {
                                var pair = value.split( "=" );
                                if ( pair.length > 0 && pair[ 0 ] ) {
                                    queryParameters[ pair[ 0 ] ] =
                                        ( pair.length > 1 ? pair[ 1 ] : true );
                                }
                            });
                    }
                    if( self.path.join(",") != queryParameters.cat ){
                    //data.options.openmenu = true;
                        data.options.allowSamePageTransition = true;
                    }
                }
        })
        .on( "pagecontainerbeforetransition", function( event, data ) {
            var queryParameters = {},
                processedHash = processHash( data.absUrl );
            // We only modify default behaviour when navigating to the secondary page
            if ( processedHash.cleanHash === "#main_menu" ) {
                // Assemble query parameters object from the query string
                if ( processedHash.queryParameters ) {
                    $.each( processedHash.queryParameters.split( "&" ),
                        function( index, value ) {
                            var pair = value.split( "=" );
                            if ( pair.length > 0 && pair[ 0 ] ) {
                                queryParameters[ pair[ 0 ] ] =
                                    ( pair.length > 1 ? pair[ 1 ] : true );
                            }
                        });
                }


                var cat = self.cats;
                var parent = [];
                var path = self.path = [];
                var check = self.check = false;

                if( queryParameters.cat ){
                    path = self.path = queryParameters.cat.split(",");
                    parent = path.slice(0,-1);


                    for(var i = 0; i < path.length; i++){
                        cat = cat[ path[i] ].children;
                        if( !cat ){
                            cat = self.cats;
                            break;
                        }
                    }
                }
                if( queryParameters.check !== undefined ){
                    if( queryParameters.check == "" ){
                        check = self.check = [];
                    }else{
                        check = self.check = queryParameters.check.split(",");
                    }
                }

                if(cat){
                    self.renderCats( cat, path.join(",") );
                    self.renderItems();
                }

                // Set the title from the query parameters
                //$( "#section" ).text( queryParameters.section );
                // Set the url of the page - this will be used by navigation to set the
                // URL in the location bar
                $( "#main_menu" ).jqmData( "url", processedHash.parsed.hash );
            }
        });


//         var filter = [];
//         var categ_data;
//
//         $(".b-popcat-table__item_type_phone").click(function(){
//             $.mobile.changePage("#item_type_phone_menu");
//             categ_data = data.filter(function(val){ return val.categ === "phones"});
//             fillList(categ_data, $("#item_type_phone_menu > .ui-content > .b-serp"));
//         });
//         $(".b-popcat-table__item_type_tv").click(function(){
//             $.mobile.changePage("#item_type_tv_menu");
//             categ_data = data.filter(function(val){ return val.categ === "tvs"});
//             fillList(categ_data, $("#item_type_tv_menu > .ui-content > .b-serp"));
//         });

//         function os_click_handler(os) {
//             return function(e) {
//                 $("#item_type_phone_menu > .ui-content > .b-serp").empty();
//                 $(this).toggleClass("activated");
//
//                 if($(this).hasClass('activated')) {
//                     filter.push(os);
//                 } else {
//                     filter.splice( filter.indexOf(os), 1 );
//                 }
//
//                 console.log(filter);
//
//                 var filtered_data
//                 if(filter.length == 0)
//                     filtered_data = categ_data;
//                 else {
//                         filtered_data = categ_data.filter(function(val) {
//                         console.log(val.os)
//                         console.log(filter.indexOf(val.os))
//                         return filter.indexOf(val.os) !== -1;
//                     });
//                 }
//
//                 fillList(filtered_data, $("#item_type_phone_menu > .ui-content > .b-serp"));
//             }
//         }
//
//         $(".b-popcat-table__item_type_android").click(os_click_handler("android"));
//         $(".b-popcat-table__item_type_ios").click(os_click_handler("ios"));
//         $(".b-popcat-table__item_type_blackberry").click(os_click_handler("blackberry"));
//         $(".b-popcat-table__item_type_windows").click(os_click_handler("windows"));
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var self = this;

        //setTimeout(function() {
            //$.mobile.changePage("#main_menu");
            //fillList(data, $("#main_menu > .ui-content > .b-serp"));
        //}, 100);

        $( "#swipe-region" ).on( "swiperight", function(e) {
            e.stopImmediatePropagation();
            $( "#menu" ).panel( "open" );
        } );


        this.fetchCats(function(){
            self.fetchItems(function(){
                $.mobile.changePage("#main_menu");
            });
            //self.renderCats(self.cats);
        });



        //this.onOrientationChange();
    },
    onOrientationChange: function() {

    },

    fetchCats: function(callback){
        var self = this;
        self.cats = globalCatsData;
        callback();

        // $.ajax({
        //     url: "data/cats.json",
        //     success: function(data){
        //         self.cats = data;
        //         callback();
        //     },
        //     dataType: "json"
        // });
    },

    fetchItems: function(callback){
        var self = this;
        self.items = globalItemsData;
        callback();

        // $.ajax({
        //     url: "data/items.json",
        //     success: function(data){
        //         self.items = data;
        //         callback();
        //     },
        //     dataType: "json"
        // });
    },



    renderCats: function(cat, parent){
        var cont = $("#cats").empty();
        var href;
        var check;
        var checkIndex;
        var newCheck;

        if( !this.check ){
            this.check = [];
            for(var i = 0; i < cat.length; i++){
                if( !cat[i].children && cat[i].check ){
                    this.check.push( "" + i);
                }
            }
        }

        for(var i = 0; i < cat.length; i++){
            if( cat[i].children ){
                href = "#main_menu?cat=" + (parent?(parent+","):"") + i
                check = false;
            }
            else{
                    checkIndex = this.check.indexOf( i.toString() );
                    if( checkIndex >= 0 /*|| cat[i].check*/ ){
                        check = true;
                        newCheck = [].concat(this.check)
                        newCheck.splice( checkIndex , 1);
                    }else{
                        check = false;
                        newCheck = [i].concat(this.check);
                    }
                cat[i].check = check;
                href = "#main_menu?cat=" + (parent?parent:"") + "&check=" + newCheck.join(",")  ;
            }
            cont.append(  $("<div>", {class: "cats-item " + (check?"check":"")})
                .append( $("<a>", {href: href })
                    .append( $("<i>", {class: "icon " + cat[i].icon}) )
                    .append( $("<span>").append(cat[i].name) )
                )
            )
        }
    },

    renderItems: function(){
        var cont = $("#items").empty();

        var items = this.filterItems();

        for(var  i = 0; i < items.length; i++){
            var data = items[i];
            cont.append( $("<div>", {class:"b-serp-item"})

                .append ( $( "<a>", { class:"b-link",  href: "#" + data.id  } )
                    .append( $( "<i>", { class: "b-icon", style: "background-image: url(" + data.img + ")" } ) )
                    .append( $( "<div>", { class: "b-serp-description"} )
                        .append( $("<div>", { class: "b-serp-description__title" }) .append( data.title ) )
                        .append( $("<div>", { class: "b-serp-description__text b-serp-description__text_limit_yes"} ).append( data.text ) )
                    )
                )
            )

            //cont.append( $("<div>").append( items[i].title ) )
        }
    },


    filterItems: function(){
        var path = this.path;
        var result = [];
        var f = false;

        if( path && path.length > 0 ){
            for( var i = 0; i < this.items.length; i++ ){
                if( this.items[i].cat.length >= path.length ){
                    f = true;
                    for( var j = 0; j < path.length; j++ ){
                        if( path[j] != this.items[i].cat[j] ){
                            f = false;
                            break;
                        }
                    }
                    if( f && this.check.length > 0 ){
                        if( this.check.indexOf( this.items[i].cat[ path.length ].toString() ) < 0 ){
                            f = false;
                        }
                    }
                    if(f){
                        result.push( this.items[i] );
                    }
                }
            }
        }
        else{
            result = this.items;
        }
        return result;
    },


};
