$(document).ready(function () {
    $('.headings-item').click(function (){
        const id = $(this).data('page');
        $('.content').addClass('hidden');
        $('#' + id).removeClass('hidden');
    });

    $('.star').click(function() {
        const mark = $(this).attr('data-value');

        let counter = 1;

        $('.star').each(function () {
            if (counter > mark) {
                return;

            }
            $(this).addClass('star-gold');

            counter++;
        });
    })
});
