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

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
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
            $.mobile.defaultPageTransition = "slide";
        });

        $(".b-popcat-table__item_type_phone").click(function(){
            $.mobile.changePage("#item_type_phone_menu");
        })
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var self = this;

        setTimeout(function() {
            $.mobile.changePage("#main_menu");
        }, 100);
        
        $( "#swipe-region" ).on( "swiperight", function(e) {
            e.stopImmediatePropagation();
            $( "#menu" ).panel( "open" );
        } );

        //this.onOrientationChange();
    },
    onOrientationChange: function() {

    }

};
