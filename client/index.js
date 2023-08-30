
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [56.04198717763115,92.91065857558536],
            zoom: 17.5
        });
        let placemark = new ymaps.Placemark([56.042008572473804,92.91057240962078], {}, {

        });
        myMap.geoObjects.add(placemark); 
    }
    ymaps.ready(init);
    let antiSpam
    function sendForm() {
        if(antiSpam === true) {
            alert(`Заявки можно отправлять только раз в 5 минут во избежании спама`)
        } else {
        antiSpam = true
        let name = document.getElementById('name').value
        let surname = document.getElementById('surname').value
        let phone = document.getElementById('phone').value
        let email = document.getElementById('email').value
        setTimeout(() => {  
            antiSpam = false
        }, 300000);
        jQuery.ajax({
            url: '/sendform',
            type: 'POST',
            data: JSON.stringify({ name: name, surname: surname, phone: phone, email: email }),
            contentType: 'application/json',
            
            success: function(resp) {  
                document.getElementById('notify').style.display = 'block'
              },
              error: function(xhr, str) {
                  console.log('Возникла ошибка: ' + xhr.responseCode);
              }
        });
    }
} 