// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     // console.log(users);
//     for(user of users) {
//       $("<div>").text(user.email + " " + user.email + " " + user.last_name).appendTo($("body"));
//     }
//   });
// });
$(document).ready(function(){
  let editable = false;

  $('input[type="submit"]').click(function(e) {
    e.preventDefault();
    $(".right-icon").toggle();
    $(".left-icon").toggle();
    if (editable === false) {
      $('.form-control').attr('readonly', true);
      editable = true;
    } else {
      $('.form-control').attr('readonly', false);
      editable = false;
    };
})
});

  // $.ajax({
  //   method: "GET",
  //   url: "/api/events"
  // }).done((events) => {
  //   // console.log(users);
  //   // for(event of events) {
  //     $("<div>").text(event.title).appendTo($("body"));
  //   // }
  // });


//   $.ajax({
//     method: "GET",
//     url: "/api/events"
//   }).done((events) => {
//     for(event of events) {
//       $("<div>").text(event.title).appendTo($("body"));
//     }
//   });;
//   $.ajax({
//     method: "GET",
//     url: "/api/options"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
