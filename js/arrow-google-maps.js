function uberGoogleMap_initialize(){googleMapsAPI_loaded=!0;for(var a=0;a<ugm_maps_to_load.length;a++)ugm_maps_to_load[a].init();ugm_maps_to_load=new Array}function uberGoogleMap_loadScript(a,b){var c="";c=1==parseInt(b)?"true":"false";var d=document.createElement("script");d.type="text/javascript",d.src=editorMode?"https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyB9v7hw6MuDrKEijZmFgKsPGBNt-le4asM&callback=uberGoogleMap_initialize&libraries=places&language="+a:"https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyB9v7hw6MuDrKEijZmFgKsPGBNt-le4asM&callback=uberGoogleMap_initialize&language="+a+"&signed_in="+c,document.body.appendChild(d)}var uberGoogleMap=void 0,uberGoogleMap_loadCallback=function(){},uberGoogleMap_started_loading=!1,googleMapsAPI_loaded=!1,editorMode=!1,ugm_maps=new Array,ugm_maps_to_load=new Array;!function(a,b,c,d){"use strict";function e(b,c){this.el=a(b),this.settings=a.extend({},g,c),this._defaults=g,this._name=f,this.map=d,this.markers={},this.info_windows={},this.id=Math.floor(1e4*Math.random())}a.uber_google_maps_get_map_object=function(){},a.uber_google_maps_markers={};var f="UberGoogleMaps",g={positionType:"manual",lat:-34.397,lng:150.644,zoom:8,width:640,height:480,responsive:1,searchQuery:"",language:"en",markers:[],infoWindows:[],showInfoWindowsOn:"click",animateMarkers:1,style_type:"preset",style_index:3,style_array:d,style_array_custom:"[]",auto_sign_in:1,fullscreen_enabled:1,is_fullscreen:0},h=d;a.extend(e.prototype,{init:function(){var b=this;if(ugm_maps[this.id]=this,this.el.html(""),"undefined"!=typeof google){if(!editorMode){var c=this.settings.width;1==parseInt(this.settings.responsive,10)&&(c="100%"),this.el.css({width:c,height:this.settings.height})}var e={center:{lat:parseFloat(this.settings.lat),lng:parseFloat(this.settings.lng)},zoom:parseFloat(this.settings.zoom),disableDefaultUI:!0},f=d;if(1==parseInt(this.settings.disable_scroll,10)&&(e.scrollwheel=!1),"preset"==this.settings.style_type){var f=new google.maps.StyledMapType(this.settings.style_array,{name:"Styled Map"});e.mapTypeControlOptions={mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}}if("custom"==this.settings.style_type){var f=new google.maps.StyledMapType(JSON.parse(this.settings.style_array_custom),{name:"Styled Map"});e.mapTypeControlOptions={mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}}if(this.map=new google.maps.Map(b.el.get(0),e),this.map.map_id=this.id,("preset"==this.settings.style_type||"custom"==this.settings.style_type)&&(this.map.mapTypes.set("map_style",f),this.map.setMapTypeId("map_style")),this.settings.markers.length>0){var g=this.settings.markers.length,i=null,j=0;1==parseInt(this.settings.animateMarkers)&&(i=google.maps.Animation.DROP,j=150);var k=0;b.markerInterval=setInterval(function(){var c=b.settings.markers[k],d={position:{lat:parseFloat(c.lat),lng:parseFloat(c.lng)},title:c.title,animation:i};"default"!=c.icon&&(d.icon=c.icon_url);var e=new google.maps.Marker(d);if(a.uber_google_maps_markers[b.settings.markers[k].id]=e,b.markers[b.settings.markers[k].id]=e,e.setMap(b.map),k++,k==g&&(clearInterval(b.markerInterval),b.settings.infoWindows.length>0))for(var f=b.settings.infoWindows.length,j=0;f>j;j++){var l='<div class="uber-google-maps-info-window-content-wrap">';b.settings.infoWindows[j].title.length>0&&(l+='<div class="uber-google-maps-info-window-field uber-google-maps-title">'+b.settings.infoWindows[j].title+"</div>"),b.settings.infoWindows[j].subtitle.length>0&&(l+='<div class="uber-google-maps-info-window-field uber-google-maps-subtitle">'+b.settings.infoWindows[j].subtitle+"</div>"),b.settings.infoWindows[j].phone.length>0&&(l+='<div class="uber-google-maps-info-window-field uber-google-maps-phone">'+b.settings.infoWindows[j].phone+"</div>"),b.settings.infoWindows[j].address.length>0&&(l+='<div class="uber-google-maps-info-window-field uber-google-maps-address">'+b.settings.infoWindows[j].address+"</div>"),b.settings.infoWindows[j].email.length>0&&(l+='<div class="uber-google-maps-info-window-field uber-google-maps-email">'+b.settings.infoWindows[j].email+"</div>"),b.settings.infoWindows[j].web.length>0&&(l+='<div class="uber-google-maps-info-window-field uber-google-maps-web"><a href="'+b.settings.infoWindows[j].web+'">'+b.settings.infoWindows[j].web+"</a></div>"),b.settings.infoWindows[j].content.length>0&&(l+=b.settings.infoWindows[j].content),l+="</div>";var m=!1;1==parseInt(b.settings.infoWindows[j].open)&&(m=!0);var n=new google.maps.InfoWindow({content:l,is_open:m}),o=b.settings.infoWindows[j].marker_id;b.info_windows[o]=n,google.maps.event.addListener(b.markers[o],b.settings.showInfoWindowsOn,b.toggle_window),1==parseInt(b.settings.infoWindows[j].open)&&(n.open(b.map,b.markers[o]),h=n,h.is_open=!0)}},j)}1==parseInt(this.settings.fullscreen_enabled)&&0==parseInt(this.settings.is_fullscreen)&&(this.el.append('<div class="uber-google-maps-fullscreen-button" id="go-fullscreen">Go Fullscreen</div>'),a("#go-fullscreen").on("click",function(){b.go_fullscreen()})),1==parseInt(this.settings.fullscreen_enabled)&&1==parseInt(this.settings.is_fullscreen)&&(this.el.append('<div class="uber-google-maps-fullscreen-button" id="close-fullscreen">Close Fullscreen</div>'),a("#close-fullscreen").on("click",function(){b.close_fullscreen()})),0==parseInt(this.settings.is_fullscreen)&&uberGoogleMap_loadCallback(b.map)}},toggle_window:function(a){var b=this.map.map_id,c=ugm_maps[b],e=a.latLng,f=e.lat()+"_"+e.lng();"click"==c.settings.showInfoWindowsOn&&c.info_windows[f].is_open?(c.info_windows[f].is_open=!1,c.info_windows[f].close(),h=d):(h!=d&&(h.is_open=!1,h.close()),c.info_windows[f].is_open=!0,c.info_windows[f].open(c.map,c.markers[f]),h=c.info_windows[f])},go_fullscreen:function(){var b="";a(".uber-google-maps-fullscreen-wrap").remove(),a("body, html").removeClass("uber-google-maps-fullscreen"),b+='<div class="uber-google-maps-fullscreen-wrap">',b+='   <div class="uber-google-map" id="uber-google-maps-fullscreen-map"></div>',b+="</div>",a("body").prepend(b),a("body, html").addClass("uber-google-maps-fullscreen");var c=this.settings;c.is_fullscreen=1,c.responsive=1,c.height="100%",a("#uber-google-maps-fullscreen-map").UberGoogleMaps(c)},close_fullscreen:function(){a(".uber-google-maps-fullscreen-wrap").remove(),a("body, html").removeClass("uber-google-maps-fullscreen")}}),a.fn[f]=function(a,b,c){return editorMode=c,"undefined"!=typeof b&&(uberGoogleMap_loadCallback=b),uberGoogleMap_started_loading||(uberGoogleMap_started_loading=!0,1==parseInt(a.load_api,10)?uberGoogleMap_loadScript(a.language,a.auto_sign_in):googleMapsAPI_loaded=!0),this.each(function(){uberGoogleMap=new e(this,a),googleMapsAPI_loaded?uberGoogleMap.init():ugm_maps_to_load.push(uberGoogleMap)})}}(jQuery,window,document);