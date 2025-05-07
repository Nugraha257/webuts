const daysContainer = document.getElementById('daysContainer');
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

const eventsData = {
    1: { materi: 'https://example.com/materi1', absen: 'https://example.com/absen1' },
    3: { materi: 'https://example.com/materi3', absen: 'https://example.com/absen3' },
    15: { materi: 'https://example.com/materi15', absen: 'https://example.com/absen15' },
    23: { materi: 'https://example.com/materi23', absen: 'https://example.com/absen23' },
    24: { materi: 'https://example.com/materi24', absen: 'https://example.com/absen24' },
};

function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function loadCalendar(month, year) {
    daysContainer.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year); 

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        daysContainer.appendChild(emptyDiv);
    }

    for (let i = 1; i <= totalDays; i++) {
        const dayDiv = document.createElement('div');
        const dateElement = document.createElement('span');
        dateElement.innerText = i;
        dayDiv.appendChild(dateElement);

        if (eventsData[i]) {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            const materiLink = document.createElement('a');
            materiLink.href = eventsData[i].materi;
            materiLink.target = '_blank';
            materiLink.innerText = 'Link Materi';
            eventDiv.appendChild(materiLink);

            const lineBreak = document.createElement('br');
            eventDiv.appendChild(lineBreak);

            const absenLink = document.createElement('a');
            absenLink.href = eventsData[i].absen;
            absenLink.target = '_blank';
            absenLink.innerText = 'Link Absen';
            eventDiv.appendChild(absenLink);

            dayDiv.appendChild(eventDiv);
        }

        daysContainer.appendChild(dayDiv);
    }
}

// Fungsi untuk memperbarui kalender
function updateCalendar() {
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);
    loadCalendar(selectedMonth, selectedYear);
}

// Tombol navigasi bulan sebelumnya
prevMonthBtn.addEventListener('click', () => {
    let currentMonth = parseInt(monthSelect.value);
    let currentYear = parseInt(yearSelect.value);

    if (currentMonth === 0) {
        monthSelect.value = 11; // Desember
        yearSelect.value = currentYear - 1;
    } else {
        monthSelect.value = currentMonth - 1;
    }

    updateCalendar();
});

// Tombol navigasi bulan berikutnya
nextMonthBtn.addEventListener('click', () => {
    let currentMonth = parseInt(monthSelect.value);
    let currentYear = parseInt(yearSelect.value);

    if (currentMonth === 11) {
        monthSelect.value = 0; // Januari
        yearSelect.value = currentYear + 1;
    } else {
        monthSelect.value = currentMonth + 1;
    }

    updateCalendar();
});

// Muat kalender awal berdasarkan bulan dan tahun yang dipilih
monthSelect.addEventListener('change', updateCalendar);
yearSelect.addEventListener('change', updateCalendar);

// Inisialisasi kalender pada load pertama
updateCalendar();

// Event listener untuk tombol Logout
document.getElementById('logout').addEventListener('click', function() {
    // Menghapus informasi pengguna dari localStorage atau sessionStorage
    localStorage.removeItem('username'); // atau sessionStorage.removeItem('username');

    // Arahkan kembali ke halaman login
    window.location.href = 'login.html'; // Ganti dengan URL halaman login Anda
});
