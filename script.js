document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
});