var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud 9", 
        image: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "Phasellus et mi congue, ultrices risus non, bibendum tellus. Donec vel risus at libero varius ullamcorper sed vel risus. Duis viverra fringilla dui, non placerat tellus ullamcorper id. Vestibulum dignissim nisl dolor, quis lobortis mi varius non. Maecenas augue neque, scelerisque in felis vitae, convallis convallis mi. In ac enim et sapien hendrerit tincidunt non ac odio. Fusce lectus lacus, mattis nec posuere a, scelerisque vitae lacus. Duis turpis elit, mattis at sapien vel, vehicula lacinia dolor. Praesent varius sagittis purus, id rutrum justo posuere sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus iaculis velit lectus. In eros libero, viverra eu odio non, dapibus tristique felis. Praesent varius mi vel orci vehicula laoreet. Maecenas interdum nisl nisi, at malesuada est venenatis eget. Donec egestas convallis velit sed porttitor."
    },
    {
        name: "Midgar", 
        image: "https://pi.tedcdn.com/r/tedideas.files.wordpress.com/2017/05/featured_art_heal_forests.jpg?",
        description: "Phasellus et mi congue, ultrices risus non, bibendum tellus. Donec vel risus at libero varius ullamcorper sed vel risus. Duis viverra fringilla dui, non placerat tellus ullamcorper id. Vestibulum dignissim nisl dolor, quis lobortis mi varius non. Maecenas augue neque, scelerisque in felis vitae, convallis convallis mi. In ac enim et sapien hendrerit tincidunt non ac odio. Fusce lectus lacus, mattis nec posuere a, scelerisque vitae lacus. Duis turpis elit, mattis at sapien vel, vehicula lacinia dolor. Praesent varius sagittis purus, id rutrum justo posuere sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus iaculis velit lectus. In eros libero, viverra eu odio non, dapibus tristique felis. Praesent varius mi vel orci vehicula laoreet. Maecenas interdum nisl nisi, at malesuada est venenatis eget. Donec egestas convallis velit sed porttitor."
    },
    {
        name: "Havana", 
        image: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/whatcountsas.jpg",
        description: "Phasellus et mi congue, ultrices risus non, bibendum tellus. Donec vel risus at libero varius ullamcorper sed vel risus. Duis viverra fringilla dui, non placerat tellus ullamcorper id. Vestibulum dignissim nisl dolor, quis lobortis mi varius non. Maecenas augue neque, scelerisque in felis vitae, convallis convallis mi. In ac enim et sapien hendrerit tincidunt non ac odio. Fusce lectus lacus, mattis nec posuere a, scelerisque vitae lacus. Duis turpis elit, mattis at sapien vel, vehicula lacinia dolor. Praesent varius sagittis purus, id rutrum justo posuere sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus iaculis velit lectus. In eros libero, viverra eu odio non, dapibus tristique felis. Praesent varius mi vel orci vehicula laoreet. Maecenas interdum nisl nisi, at malesuada est venenatis eget. Donec egestas convallis velit sed porttitor."
    }
]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        // if(err) {
        //     console.log(err);
        // }
        // console.log("removed campgrounds"); 
        // //add a few campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if(err) {
        //             console.log(err);
        //         }
        //         else {
        //             console.log("added a campground");
        //             //create a cmoment
        //             Comment.create(
        //                 {
        //                     text: "Great place. No animals tho.",
        //                     author: "Mikey"
        //                 }, function(err, comment) {
        //                     if(err) {
        //                         console.log(err);
        //                     }
        //                     else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new campground");
        //                     }
        //                 }
        //             )
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;




// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment   = require("./models/comment");
 
// var data = [
//     {
//         name: "Cloud's Rest", 
//         image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Desert Mesa", 
//         image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     },
//     {
//         name: "Canyon Floor", 
//         image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//     }
// ]
 
// function seedDB(){
//   //Remove all campgrounds
//   Campground.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed campgrounds!");
//         Comment.remove({}, function(err) {
//             if(err){
//                 console.log(err);
//             }
//             console.log("removed comments!");
//              //add a few campgrounds
//             data.forEach(function(seed){
//                 Campground.create(seed, function(err, campground){
//                     if(err){
//                         console.log(err)
//                     } else {
//                         console.log("added a campground");
//                         //create a comment
//                         Comment.create(
//                             {
//                                 text: "This place is great, but I wish there was internet",
//                                 author: "Homer"
//                             }, function(err, comment){
//                                 if(err){
//                                     console.log(err);
//                                 } else {
//                                     campground.comments.push(comment);
//                                     campground.save();
//                                     console.log("Created new comment");
//                                 }
//                             });
//                     }
//                 });
//             });
//         });
//     }); 
//     //add a few comments
// }
 
// module.exports = seedDB;