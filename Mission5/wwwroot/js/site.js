// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    const hourlyRate = 50;  // Hourly charge

    $('#calculateButton').click(function () {
        // Get the number of hours entered by the user
        const hours = $('#hoursInput').val();

        // Validate input: Ensure hours is a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate total cost
        const totalCost = hours * hourlyRate;

        // Display total cost in the output box
        $('#totalOutput').val("$" + totalCost.toFixed(2));
    });
});