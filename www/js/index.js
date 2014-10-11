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
                    if( self.path.join(",") != queryParameters.cat || queryParameters["item"]) {
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

                var itemId = queryParameters["item"];

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

                if(itemId) {
                    $("#item").empty();
                    $("#item").append(self.renderItem(itemId));
                } else if(cat) {
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
        
        $("#search").on("click",function(){
            $("#main-title").hide();
            $("#search-title").show();
            $(this).hide();
            $("#search-input").focus();
        })
        $("#search-menu").on("click",function(){
            $("#main-title").hide();
            $("#search-title").show();
            $("#search").hide();
            $("#search-input").focus();
            $( "#menu" ).panel( "close" );
        })
        $(document).on("focusout", "#search-input",function(){ 
            $("#main-title").show();
            $("#search-title").hide();
            $("#search").show();
        });


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


        $( "#menu" ).on( "panelbeforeopen", function() {
            $("#black-back").show();
        } );
        $( "#menu" ).on( "panelbeforeclose", function() {
            $("#black-back").hide();
        } );
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

    renderItem: function(itemId) {
        $("#items").empty();
        $("#cats").empty();
        return createItemPage(itemId);
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

    renderItems: function() {
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


    filterItems: function() {
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

    // processBid: function(userid, token, itemid, bid) {
    //     var item = this.getItemById(itemid);

    //     $.ajax({
    //       type: "POST",
    //       url: "https://money.yandex.ru/api/request-payment",
    //       data: {
    //         pattern_id: "p2p",
    //         to: 410012119774823,
    //         amount: bid,
    //         message: item.title + " продан",
    //         comment: item.title + " - " + item.text + " успешно продан за " + bid + " руб. пользователю с id = " + userid,
    //         test_payment: true,
    //         test_result: "success"
    //       },
    //       headers: {
    //           "Authorization": "Bearer " + token
    //       },
    //       success: function(data) {
    //         alert(data);
    //       },
    //       error: function(data){
    //         alert("error" + data);
    //       },
    //       dataType: "json"
    //     });
    // }, 
    // getItemById: function(id) {
    //     return globalItemsData.filter(function(val){
    //         return val.id !== id
    //     }).pop();
    // }
};
