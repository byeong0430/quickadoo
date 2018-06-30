// $(document).ready(function(){

//   var regex = /^(.+?)(\d+)$/i;
//   var cloneIndex = $(".clonedInput").length;

//   function clone(){
//       $(this).parents(".clonedInput").clone()
//           .appendTo("body")
//           .attr("id", "clonedInput" +  cloneIndex)
//           .find("*")
//           .each(function() {
//               var id = this.id || "";
//               var match = id.match(regex) || [];
//               if (match.length == 3) {
//                   this.id = match[1] + (cloneIndex);
//               }
//           })
//           .on('click', 'button.clone', clone)
//           .on('click', 'button.remove', remove);
//       cloneIndex++;
//   }
//   function remove(){
//       $(this).parents(".clonedInput").remove();
//   }
//   $("button.clone").on("click", clone);

//   $("button.remove").on("click", remove);

// });

  $(document).ready(function(){

    var cont = 0;

    $("#add").click(function(){
      cont++;
        $(this).parent().append($("#options").clone().attr("id","options" + cont));
        $("#options" + cont).css("display","inline");
        $("#options" + cont + " :input").each(function(){
            $(this).attr("name",$(this).attr("name") + cont);
            $(this).attr("id",$(this).attr("id") + cont);
            });

        $("textarea#options" + cont).each(function(){
          $(this).attr("name",$(this).attr("name") + cont);
          $(this).attr("id",$(this).attr("id") + cont);
          });

        $("#del" + cont).click(function(){
          event.preventDefault();
          $(this).closest("div").remove();
        });
    }); 

});


  // (function($) {
  //   var isNum = function(n) { return isFinite(parseInt(n)); };
  //   var re = /\d+$/;
  //   $.fn.increment = function(a, i) {
  //     var inc = isNum(a) ? a : (isNum(i) ? i : 1);
  //     var attr = (!!a && !isNum(a)) ? a : ((!!i && !isNum(i)) ? i : 'class');
  //     return this.each(function() {
  //       var $this = $(this);
  //       var match = $this.attr(attr).match(re);
  //       if(match && match.length) {
  //         $this.attr(attr, $this.attr(attr).slice(0,-1*match[0].length)+(parseInt(match[0])+inc));
  //       }
  //     });
  //   };
  // })(jQuery);

  // $("#addbutton").click(function () {
  //   $('.mydiv1').clone().increment().insertAfter('.mydiv1');
  // };

// }); 

  // $('button').click(function(){

  //   event.preventDefault();

  //   let myName = $(this)[0].name;

  //   let textarea = $(".mydiv").find("textarea")[0].name;
  //   let pos = textarea.replace('note-','');
  //   let next = Number(pos) + 1;

  //   console.log(pos, next, myName);
  //   return;

  //   if (myName.indexOf("addbutton")>0) {
  //     alert('add');
  //   }

  //   if (myName.indexOf("removebutton")>0) {
  //     alert('remove');
  //   }

  // });


  // $("#addbutton").click(function () {

  //   event.preventDefault();

  //   // var inputs = $(".mydiv").find("input");
  //   let textarea = $(".mydiv").find("textarea")[0].name;
  //   let pos = textarea.replace('note-','');
  //   let next = pos + 1;

  //   // for (let i=0; i<inputs.length; i++) {
  //   //   console.log(inputs[i].name);
  //   // }
  //   // console.log(pos);

  //   // return;
  //   // var inc = $('.mydiv').length;
  //   // var cloned = $('.mydiv:first').clone()
  //   //   .find('.title').text('Block ' + ++inc).end()
  //   //   .find('input').val('').prop('checked', false).end()
  //   //   .find('option').prop('selected', false).end()
  //   //   .appendTo('.option')

  //   // return;
  //   var inc = $('.mydiv').length;
  //   var cloned = $('.mydiv:first').clone()
  //     .find('input').attr('name', $(this).attr('name') + inc).end()
  //     .find('textarea').attr('name', $(this).attr('name') + inc).end()
  //     .appendTo('.option')

  // });

  // // $("#removebutton").click(function () {
  // //   event.preventDefault();
  // //   alert($('.mydiv').length);
  // //   if ($('.mydiv').length > 1)
  // //     $('.mydiv:last').remove()
  // // });

  // $("#removebutton").click(function () {
  //   event.preventDefault();

  //   var mydiv= $(".mydiv");
  //   var inputs = mydiv.find("input");

  //   // for (let i=0; i<inputs.length; i++) {
  //   //   console.log(inputs[i].name);
  //   // }

  //   if ($('.mydiv').length > 1)
  //     $('.mydiv:last').remove()
  // });

// });