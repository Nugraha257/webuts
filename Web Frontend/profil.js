// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Show the selected section
    document.getElementById(sectionId).classList.add('active-section');
}

// Function to save settings to local storage
function saveSettings() {
    const firstName = document.querySelector('#settings-form input[type="text"]').value;
    const lastName = document.querySelector('#settings-form input[type="text"]').value;
    const email = document.querySelector('#settings-form input[type="email"]').value;
    const department = document.querySelector('#settings-form input[type="text"]').value;
    const country = document.querySelector('#settings-form input[type="text"]').value;
    const phone = document.querySelector('#settings-form input[type="text"]').value;
    const interests = document.querySelector('#settings-form input[type="text"]').value;
    const address = document.querySelector('#settings-form input[type="text"]').value;

    // Save to local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('department', department);
    localStorage.setItem('country', country);
    localStorage.setItem('phone', phone);
    localStorage.setItem('interests', interests);
    localStorage.setItem('address', address);
    
    // Update display values
    updateDisplay();
}

// Function to update display values in the About Me section
function updateDisplay() {
    document.getElementById('display-first-name').textContent = localStorage.getItem('firstName') || 'John';
    document.getElementById('display-last-name').textContent = localStorage.getItem('lastName') || 'Doe';
    document.getElementById('display-email').textContent = localStorage.getItem('email') || 'john.doe@example.com';
    document.getElementById('display-department').textContent = localStorage.getItem('department') || 'Computer Science';
    document.getElementById('display-country').textContent = localStorage.getItem('country') || 'Indonesia';
    document.getElementById('display-phone').textContent = localStorage.getItem('phone') || '123-456-7890';
    document.getElementById('display-interests').textContent = localStorage.getItem('interests') || 'Programming, AI, Robotics';
    document.getElementById('display-address').textContent = localStorage.getItem('address') || 'Jl. Example No.123';
}

// Load settings when the page is loaded
window.onload = function() {
    loadSettings();
    updateDisplay(); // Update display with current settings
};

// Function to load settings from local storage into the form
function loadSettings() {
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('firstName') || '';
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('lastName') || '';
    document.querySelector('#settings-form input[type="email"]').value = localStorage.getItem('email') || '';
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('department') || '';
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('country') || '';
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('phone') || '';
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('interests') || '';
    document.querySelector('#settings-form input[type="text"]').value = localStorage.getItem('address') || '';
}

// Fungsi untuk mengganti foto profil
function changePhoto(event) {
    const file = event.target.files[0]; // Ambil file yang dipilih

    if (file) {
        const reader = new FileReader(); // Membuat objek FileReader

        // Ketika file telah dibaca
        reader.onload = function(e) {
            const profilePhoto = document.getElementById('profile-photo');
            profilePhoto.src = e.target.result; // Set foto profil dengan file yang dipilih

            // Simpan foto ke localStorage untuk mempertahankan perubahan
            localStorage.setItem('profilePhoto', e.target.result);
        };

        // Membaca file sebagai URL Data
        reader.readAsDataURL(file);
    }
}

// Fungsi untuk memuat foto profil dari localStorage ketika halaman dimuat
window.onload = function() {
    loadSettings();
    updateDisplay();
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        document.getElementById('profile-photo').src = savedPhoto;
    }
};
