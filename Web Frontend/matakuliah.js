document.querySelectorAll('.enter-course-btn').forEach(button => {
    button.addEventListener('click', () => {
        const courseId = button.getAttribute('data-course-id');
        
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('course-detail').style.display = 'block';
        
        const descriptionContent = document.getElementById('description-content');
        descriptionContent.innerHTML = `
            <h2>Detail Mata Kuliah: ${courseId}</h2>
            <p>Pilih menu untuk melihat detail.</p>
            <ul>
                <li><button id="absen-menu">Absen</button></li>
                <li><button id="quiz-menu">Quiz</button></li>
                <li><button id="materi-menu">Materi</button></li>
                <li><button id="zoom-menu">Zoom</button></li>
                <li><button id="diskusi-menu">Diskusi</button></li>
            </ul>
        `;
        
        document.getElementById('absen-menu').addEventListener('click', () => {
            descriptionContent.innerHTML = `<h3>Absen untuk ${courseId}</h3><p>Form absen akan ditampilkan di sini.</p>`;
        });
        document.getElementById('quiz-menu').addEventListener('click', () => {
            descriptionContent.innerHTML = `<h3>Quiz untuk ${courseId}</h3><p>Soal quiz akan ditampilkan di sini.</p>`;
        });
        document.getElementById('materi-menu').addEventListener('click', () => {
            descriptionContent.innerHTML = `<h3>Materi untuk ${courseId}</h3><p>Materi perkuliahan akan ditampilkan di sini.</p>`;
        });
        document.getElementById('zoom-menu').addEventListener('click', () => {
            descriptionContent.innerHTML = `<h3>Zoom untuk ${courseId}</h3><p>Link Zoom akan ditampilkan di sini.</p>`;
        });
        document.getElementById('diskusi-menu').addEventListener('click', () => {
            descriptionContent.innerHTML = `<h3>Diskusi untuk ${courseId}</h3><p>Forum diskusi akan ditampilkan di sini.</p>`;
        });
    });
});

document.getElementById('back-to-courses').addEventListener('click', () => {
    document.getElementById('course-detail').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
});
