document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('plan-form');
    const steps = Array.from(form.querySelectorAll('.form-step'));
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.querySelector('.progress-bar');
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });
        prevBtn.style.display = stepIndex === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = stepIndex === steps.length - 1 ? 'none' : 'inline-block';
        submitBtn.style.display = stepIndex === steps.length - 1 ? 'inline-block' : 'none';
        updateProgressBar();
    }

    function updateProgressBar() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Datos del formulario:', data);
        // Aquí puedes agregar la lógica para enviar los datos al servidor
        alert('Gracias por preconfigurar tu experiencia. Nuestro equipo de expertos en bienestar revisará tu solicitud y te contactará pronto para finalizar los detalles de tu experiencia en Elite Massage.');
    });

    // Manejo de la opción "Otro" en el tipo de experiencia
    const otroCheckbox = form.querySelector('input[name="experiencia"][value="otro"]');
    const otroInput = document.getElementById('otro-experiencia');

    otroCheckbox.addEventListener('change', () => {
        otroInput.style.display = otroCheckbox.checked ? 'block' : 'none';
    });

    // Inicializar
    showStep(currentStep);
});
