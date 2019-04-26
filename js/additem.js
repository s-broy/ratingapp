$(document).ready(function(){
    var max_fields = 50;
    var add_input_button = $('.add_input_button');
    var field_wrapper = $('.field_wrapper');
    var new_field_html = '<div id="newrow" class="form-row"><div class="form-group col-md-9"><input class="form-control" type="text" name="itemRatings[]"></div><div class="form-group col-md-2"><input class="form-control" type="number" name="ratingRatings[]"></div><div class="form-group col-md-1"><a href="javascript:void(0);" class="remove_input_button btn btn-outline-danger" title="Remove field">X</a></div></div>';
    var input_count = 1;

    // Add button dynamically
    $(add_input_button).click(function(){
        if(input_count < max_fields){
            input_count++;
            $(field_wrapper).append(new_field_html);
        }
    });

    // Remove dynamically added button
    $(field_wrapper).on('click', '.remove_input_button', function(e){
        e.preventDefault();
        $(this).parents('#newrow').remove();
        input_count--;
    });
});