$(document).ready(function() {
    let selectedArea = null;

    // Select a test area
    $('.test-area').on('click', function() {
        // Remove 'selected' class from previously selected area, if any
        if (selectedArea) {
            selectedArea.removeClass('selected');
        }
        // Mark the clicked area as selected
        selectedArea = $(this);
        selectedArea.addClass('selected');
    });

    // Apply color to the selected test area when a color is clicked
    $('.color').on('click', function() {
        if (selectedArea) {
            const color = $(this).data('color');
            selectedArea.css('background-color', color);
            // Deselect after applying color
            selectedArea.removeClass('selected');
            selectedArea = null;
        }
    });

    // Reset colors on button click
    $('#reset-button').on('click', function() {
        $('.test-area').css('background-color', '').removeClass('selected');
        selectedArea = null;
    });
});
