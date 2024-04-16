document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('popupForm');
    form.style.display = 'none';

    document.getElementById('clickMeButton').addEventListener('click', function() {
        if (form.style.display === 'none') {
            form.style.display = 'flex'; 
        } else {
            form.style.display = 'none';
        }
    });
});
