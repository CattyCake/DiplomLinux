  function AllShine() {
      var checkboxes = document.getElementsByClassName('checkbox');
  for (var index = 0; index < checkboxes.length; index++) {
   if (checkboxes[index].checked) {
        var name = $(checkboxes[index]).attr('name');
        if(name == 'shine') {
            $(checkboxes[index]).attr('checked', false);

       var id = $(checkboxes[index]).attr('id');
       var data = "0";
       var dop_addr = $(checkboxes[index]).attr('dop');
       var func = $(checkboxes[index]).attr('func');
       var address = $(checkboxes[index]).attr('address');

               $.ajax({
     url: '/ajaxcheckbox',
         type: 'post',
                   data: {id:id, data:data, dop_addr:dop_addr, func:func, address:address},
           success: function(response){
                 },
                });
        }
   }
     }
  }

  function AllElectric() {
      var checkboxes = document.getElementsByClassName('checkbox');
  for (var index = 0; index < checkboxes.length; index++) {
   if (checkboxes[index].checked) {
        var name = $(checkboxes[index]).attr('name');
        if(name == 'electric') {
            $(checkboxes[index]).attr('checked', false);

       var id = $(checkboxes[index]).attr('id');
       var data = "0";
       var dop_addr = $(checkboxes[index]).attr('dop');
       var func = $(checkboxes[index]).attr('func');
       var address = $(checkboxes[index]).attr('address');

               $.ajax({
     url: '/ajaxcheckbox',
         type: 'post',
                   data: {id:id, data:data, dop_addr:dop_addr, func:func, address:address},
           success: function(response){
                 },
                });
        }
   }
     }
  }

  function AllWater() {
      var checkboxes = document.getElementsByClassName('checkbox');
  for (var index = 0; index < checkboxes.length; index++) {
   if (checkboxes[index].checked) {
        var name = $(checkboxes[index]).attr('name');
        if(name == 'water') {
            $(checkboxes[index]).attr('checked', false);

       var id = $(checkboxes[index]).attr('id');
       var data = "0";
       var dop_addr = $(checkboxes[index]).attr('dop');
       var func = $(checkboxes[index]).attr('func');
       var address = $(checkboxes[index]).attr('address');

               $.ajax({
     url: '/ajaxcheckbox',
         type: 'post',
                   data: {id:id, data:data, dop_addr:dop_addr, func:func, address:address},
           success: function(response){
                 },
                });
        }
   }
     }
  }