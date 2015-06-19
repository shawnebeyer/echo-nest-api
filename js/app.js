var musicApp = {};


musicApp.musicAppApiKey = "QTEQVYC05RGB4BMX8";

musicApp.init = function() {
    musicApp.events();
};

musicApp.getArtist = function(searchQuery) {
    $.ajax({
        url: "http://developer.echonest.com/api/v4/artist/similar",
        type: "GET",
        data: {
            api_key: musicApp.musicAppApiKey, 
            format: "json",
            name: searchQuery,
            results: "5",
            bucket: "images",
            bucket: "artist_location",
            bucket: "urls",
            bucket: "genre"
            
        },
        success: function(result){
            console.log(result);
            musicApp.displaySimilarArtists(result.response.artists[0]);
        
        }
    });
};

musicApp.displaySimilarArtists = function() {

};

musicApp.events = function() {
    $('.search').on('submit', function(ev){
        ev.preventDefault();
        var searchQuery = $(this).find('input[type=search]').val();
        musicApp.getArtist(searchQuery);
    });
};


$(function() {
    musicApp.init();
})
