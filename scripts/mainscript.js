$(function(){

    $('.menu_button').on('click',
        function(event){
            event.preventDefault;
            $(this).toggleClass('menu_button_active');
            $('.headerNavContainer').toggleClass('headerNavContainer_visible');
    });

    $('.header_dropdown_form_btn').on('click',
    function(event){
        event.preventDefault;
        $('.dropdownFormContainer').css({'opacity':'1', 'z-index':'100'});
        $('.dropdownFormWrapper').css({'opacity':'1', 'z-index':'100'});
        // $('.dropdownFormContainer').toggleClass('dropdownFormContainer_visible');
        
    });

    $('.closeForm').on('click',
    function(event){
        event.preventDefault;
        $('.dropdownFormContainer').css({'opacity':'0', 'z-index':'-100'});
        $('.dropdownFormWrapper').css({'opacity':'0', 'z-index':'-100'});
        
    });


// $('.header_dropdown_form_btn').click(function(){
//     $('.dropdownFormContainer').css({'opacity':'1', 'z-index':'100'});
// });
// $('.closeForm').click(function(){
//     $('.dropdownFormContainer').css({'opacity':'0', 'z-index':'-100'});
// });
// $('.header_dropdown_form_btn').click(function(){
//     $('.dropdownFormWrapper').css({'opacity':'1', 'z-index':'100'});
// });
// $('.closeForm').click(function(){
//     $('.dropdownFormWrapper').css({'opacity':'0', 'z-index':'-100'});
// });
// $('#menuButton').click(function(){
//     $('.headerNavContainer').toggleClass('headerNavContainer_visible');
// });


});