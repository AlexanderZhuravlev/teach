var monthes = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};

var days = ['mon', 'thu', 'wen', 'the', 'fri', 'sat', 'sun'];

var monthContainer = [];

    
   var startDay = new Date('01.01.2016')
               
    
        
            

for(month in monthes) {

    var $monthWrapper = $('<div />', {
        class: 'month-wrapper'
    });

    var $daysWrapper = $('<ul />', {
        class: 'day-wrapper'
    });

    for(var j = 1; j <=1; j++){
        startDay = new Date('01.0' + j + '.2016')
        var day = startDay.getDay()-1;
            //console.log(day)
   

        for(var i = 0; i < day; i++ ) {
            $daysWrapper.append(
                $('<li />', {
                    class: 'empty-day'
                })
            );
        }    

        for(var i = 1; i <= monthes[month]; i++ ) {
            $daysWrapper.append(
                $('<li />', {
                    class: 'day',
                    text: i
                })
            );
        }
    }

    $monthWrapper.append(
        $('<h1 />', {
            text: month
        }),
        $daysWrapper
    )

    monthContainer.push($monthWrapper);
}
    

    //document.write(day);



     //var day = days.indexOf('th');
    
/*
    //var date = new Date('01.01.2016');

    date -> получить день

    days/indexOf('th') // 2
*/

var $button_left = $('<button />', {
    text: '<'
});
var $button_right = $('<button />', {
    text: '>'
});

$button_left.on('click', function() {
    alert(1)
})
$button_right.on('click', function() {
    alert(1)
})

$(document).ready(function() {
    $('#calendar').append($button_left, $button_right, monthContainer);
})


