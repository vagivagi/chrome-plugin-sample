document.addEventListener('click', function(e) {

  $.ajax({
          type:           'POST',
          url:            '/sample/cart/add',
          data:           {parameter1 : 'param1', parameter2 : 'param2' },
          datatype:       'json',
          timeout:        30,
          contentType:    'application/json',
          scriptCharset:  'utf-8'
          })

      .then((result) => {
        alert('Hello111, world!');
          console.log('ajax connection successed.');
      }, () => {
        alert('Wow');
          console.error('Error:ajax connection failed.');
      });
}, false);
