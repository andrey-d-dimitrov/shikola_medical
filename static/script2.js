document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content h2,.content h3,.content h4');
    
    sections.forEach(section => {
        section.style.cursor = 'pointer';
        
        section.addEventListener('click', function() {
            const nextElement = this.nextElementSibling;
            
            if (nextElement.style.display === 'none' || nextElement.style.display === '') {
                nextElement.style.display = 'block';
            } else {
                nextElement.style.display = 'none';
            }
        });
    });

    const contentElements = document.querySelectorAll('.content p,.content ul');
    contentElements.forEach(element => {
        element.style.display = 'none';
    });
});