var matches;
(function(doc) {
   matches =
      doc.matchesSelector ||
      doc.webkitMatchesSelector ||
      doc.mozMatchesSelector ||
      doc.oMatchesSelector ||
      doc.msMatchesSelector;
})(document.documentElement);

document.addEventListener('click', function(e) {
   if ( matches.call( e.target, '[it="shest02"]:checked' ) ) {

       var id = $( e.target, '[it="shest02"]:checked' ).attr('id') || 'Перед нажатием на кнопку выделите checkbox!';
       var data = 1.0 || 'Перед нажатием на кнопку выделите checkbox!';
       var dop_addr = $( e.target, '[it="shest02"]:checked' ).attr('dop') || 'Перед нажатием на кнопку выделите checkbox!';
       var func = $( e.target, '[it="shest02"]:checked' ).attr('func') || 'Перед нажатием на кнопку выделите checkbox!';
       var address = $( e.target, '[it="shest02"]:checked' ).attr('address') || 'Перед нажатием на кнопку выделите checkbox!';

               $.ajax({
         url: '/ajaxcheckbox',
         type: 'post',
         data: {id:id, data:data, dop_addr:dop_addr, func:func, address:address},
           success: function(response){
                alert('Значение параметра '+ id + '  установлена на '+ data  );
                 },
                });

   }
   else if ( matches.call( e.target, '[it="shest02"]' ) )
   {
       var id = $( e.target, '[it="shest02"]:checked' ).attr('id') || 'Перед нажатием на кнопку выделите checkbox!';
       var data = "0" || 'Перед нажатием на кнопку выделите checkbox!';
       var dop_addr = $( e.target, '[it="shest02"]:checked' ).attr('dop') || 'Перед нажатием на кнопку выделите checkbox!';
       var func = $( e.target, '[it="shest02"]:checked' ).attr('func') || 'Перед нажатием на кнопку выделите checkbox!';
       var address = $( e.target, '[it="shest02"]:checked' ).attr('address') || 'Перед нажатием на кнопку выделите checkbox!';
       var devname = $( e.target, '[it="shest02"]:checked' ).attr('devname');
               $.ajax({
     url: '/ajaxcheckbox',
         type: 'post',
                   data: {id:id, data:data, dop_addr:dop_addr, func:func, address:address},
           success: function(response){
         alert('Значение параметра '+ id + '  установлена на '+ data  );
                 },
                });
   }

}, false);