// Event Handling
document.getElementById('colorBtn').addEventListener('click', () => {
    const colors = ['#ff9999', '#99ff99', '#9999ff'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

document.getElementById('hoverArea').addEventListener('mouseover', () => {
    const box = document.getElementById('hoverArea');
    box.style.transform = 'scale(1.1)';
    box.style.backgroundColor = '#ffe082';
});

document.getElementById('hoverArea').addEventListener('mouseout', () => {
    const box = document.getElementById('hoverArea');
    box.style.transform = 'scale(1)';
    box.style.backgroundColor = '';
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
    document.getElementById('keyDisplay').textContent = `You pressed: ${e.key}`;
});

// Secret double-click
document.body.addEventListener('dblclick', () => {
    document.getElementById('secretMsg').hidden = false;
});

// Image Gallery
let currentImageIndex = 1;
const totalImages = 5;

function updateImage() {
    document.getElementById('currentImage').src = 
        `https://picsum.photos/300/200?random=${currentImageIndex}`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex % totalImages) + 1;
    updateImage();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex = currentImageIndex === 1 ? totalImages : currentImageIndex - 1;
    updateImage();
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        document.querySelectorAll('.tab-btn, .tab-content').forEach(element => {
            element.classList.remove('active');
        });
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let isValid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        e.target.reset();
    }
});

// Real-time validation
document.getElementById('email').addEventListener('input', () => {
    document.getElementById('emailError').textContent = '';
});

document.getElementById('password').addEventListener('input', () => {
    document.getElementById('passwordError').textContent = '';
});