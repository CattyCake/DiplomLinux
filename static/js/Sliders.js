 $(document).ready(function() {
    $(".slider").each(function() {

        $this = $(this);
          var value = $($this).attr('value');
          var min  = $($this).attr('slider-min');
          var max  = $($this).attr('slider-max');
          var id = $(this).attr('id');
          var dop_addr = $(this).attr('dop');
          var idfunc = $(this).attr('idfunc');
          var func = $(this).attr('func');
          var address = $(this).attr('address');


        $(".slider-range", $this).slider({
            value: value/1,
            min: min/1,
            max: max/1,

            slide: function( event, ui ) {
               // find any element with class .amount WITHIN scope of $this
                    $(this).siblings().text(ui.value);

            },

            stop: function(event, ui) {
            var data =  $(this).slider('value')

            $                (this).siblings().text(ui.value);

          alert('Значение параметра '+ id + '  установлена на '+ data  );

               $.ajax({
     url: '/ajaxcheckbox',
         type: 'post',
         data: {id:id, data:data, dop_addr:dop_addr, func:func, address:address},
           success: function(response){

                 },
                })

            }

        });
    });
});