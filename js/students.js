// Sample student data with profile picture paths and links
const students = [
    { name: "Omid Khan", address: "Kabul", phone: "+93 700 000 001", rating: 4, img: "img/students/student-1.jpg", link: "UserData.html" },
    { name: "Fatima Zahra", address: "Kandahar", phone: "+93 700 000 002", rating: 5, img: "img/students/fatima-zahra.jpg", link: "UserData.html" },
    { name: "Mohammad Ali", address: "Herat", phone: "+93 700 000 003", rating: 3, img: "img/students/mohammad-ali.jpg", link: "UserData.html" },
    { name: "Sara Bibi", address: "Mazar-i-Sharif", phone: "+93 700 000 004", rating: 5, img: "img/students/sara-bibi.jpg", link: "UserData.html" },
    { name: "Nasir Ahmad", address: "Jalalabad", phone: "+93 700 000 005", rating: 2, img: "img/students/student-1.jpg", link: "UserData.html" },
    { name: "Zainab Rahimi", address: "Bamiyan", phone: "+93 700 000 006", rating: 4, img: "img/students/zainab-rahimi.jpg", link: "UserData.html" },
    { name: "Sadiq Noor", address: "Logar", phone: "+93 700 000 007", rating: 5, img: "img/students/sadiq-noor.jpg", link: "UserData.html" },
    { name: "Ayesha Zafar", address: "Nangarhar", phone: "+93 700 000 008", rating: 3, img: "img/students/ayesha-zafar.jpg", link: "UserData.html" },
    { name: "Omar Farooq", address: "Badakhshan", phone: "+93 700 000 009", rating: 4, img: "img/students/omar-farooq.jpg", link: "UserData.html" },
    { name: "Razia Mohammadi", address: "Paktia", phone: "+93 700 000 010", rating: 5, img: "img/students/razia-mohammadi.jpg", link: "UserData.html" },
    { name: "Ali Khan", address: "Balkh", phone: "+93 700 000 011", rating: 3, img: "img/students/ali-khan.jpg", link: "UserData.html" },
    { name: "Laila Ahmad", address: "Ghazni", phone: "+93 700 000 012", rating: 4, img: "img/students/laila-ahmad.jpg", link: "UserData.html" },
    { name: "Faisal Sadiqi", address: "Faryab", phone: "+93 700 000 013", rating: 2, img: "img/students/faisal-sadiqi.jpg", link: "UserData.html" },
    { name: "Khadija Amini", address: "Samangan", phone: "+93 700 000 014", rating: 5, img: "img/students/khadija-amini.jpg", link: "UserData.html" },
    { name: "Bilal Mustafai", address: "Herat", phone: "+93 700 000 015", rating: 4, img: "img/students/bilal-mustafai.jpg", link: "UserData.html" },
    // Add more students as needed
];

let currentPage = 1;
const itemsPerPage = 8; // Number of students to display per page

function displayStudents() {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = ""; // Clear previous students

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedStudents = students.slice(start, end);

    paginatedStudents.forEach(student => {
        const card = document.createElement("div");
        card.className = "student-card";
        card.innerHTML = `
            <a href="${student.link}" class="student-link">
                <img src="${student.img}" alt="${student.name}" class="profile-pic">
                <div class="student-info">
                    <h3>${student.name}</h3>
                    <p>Address: ${student.address}</p>
                    <p>Phone: ${student.phone}</p>
                    <div class="ratings">
                        ${getStarRating(student.rating)}
                    </div>
                </div>
            </a>
        `;
        studentList.appendChild(card);
    });
}

function getStarRating(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<span class="star filled" style="color: #f36100;">&#9733;</span>' : '<span class="star" style="color: #ccc;">&#9734;</span>';
    }
    return stars;
}

document.getElementById("next").addEventListener("click", () => {
    const totalPages = Math.ceil(students.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayStudents();
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayStudents();
    }
});

// Initial display
displayStudents();
