import A11yDialog from 'a11y-dialog';


document.addEventListener('DOMContentLoaded', function() {

    const esdModal = document.querySelector('#esd-modal');
    const esdButton = esdModal.querySelector('.esd-modal__esd-open');
    const esdValue = esdModal.querySelector('.esd-modal__esd-value');

    const esdDialog = new A11yDialog(esdModal);
    
    if (!esdModal) return;

    esdButton.addEventListener('click', () => {
        esdValue.classList.toggle('esd-modal__esd-value_active');
    });

});