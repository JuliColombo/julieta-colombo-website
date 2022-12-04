(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('lYizSTzMq1vu1Pryh');
})();

window.onload = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_0av4e6d', 'template_aw90f1n', this)
            .then(function () {
                showSnackbar();
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

function showSnackbar() {
    // Get the snackbar DIV
    let x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.classList.add("show");

// After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        x.classList.remove("show");
    }, 3000);
}