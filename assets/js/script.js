document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Validación básica
    if(!name || !email || !message) {
        alert('Por favor completa los campos requeridos');
        return;
    }
    
    // Mostrar mensaje de éxito con estilo
    const successMessage = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #48BB78;
            color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
        ">
            <h3 style="margin-top: 0;">¡Gracias, ${name}!</h3>
            <p>He recibido tu consulta y me pondré en contacto contigo pronto.</p>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', successMessage);
    
    // Eliminar el mensaje después de 5 segundos
    setTimeout(() => {
        const messageElement = document.querySelector('[style*="position: fixed;"]');
        if(messageElement) {
            messageElement.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => messageElement.remove(), 500);
        }
    }, 5000);
    
    // En un caso real, aquí enviarías los datos a tu backend
    // fetch('tu-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         name: name,
    //         email: email,
    //         phone: phone,
    //         service: service,
    //         message: message
    //     }),
    // })
    
    // Limpiar el formulario
    this.reset();
});

// Agregar animación de entrada para las secciones al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('#services, #contact');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});