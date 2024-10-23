let currentIndex = 0;
let progressChart;
let performanceChart;

function updateReport() {
    const student = students[currentIndex];
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentImage').src = student.image;
    document.getElementById('studentDescription').textContent = student.description;
    document.getElementById('yearIndicator').textContent = `Year: ${student.year}`;

    updateProgressChart(student.progressOverTime);
    updatePerformanceChart(student.skills);
    updateAchievements(student.achievements);
    updateImprovements(student.improvementPoints);
}

function updateProgressChart(progressData) {
    const ctx = document.getElementById('progressChart').getContext('2d');
    if (progressChart) progressChart.destroy();

    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: progressData.map(data => data.year),
            datasets: [{
                label: 'Progress',
                data: progressData.map(data => data.value),
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updatePerformanceChart(skills) {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    if (performanceChart) performanceChart.destroy();

    performanceChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(skills),
            datasets: [{
                label: 'Performance Metrics',
                data: Object.values(skills),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updateAchievements(achievements) {
    const achievementList = document.getElementById('achievementList');
    achievementList.innerHTML = '';
    achievements.forEach(ach => {
        const li = document.createElement('li');
        li.textContent = ach;
        achievementList.appendChild(li);
    });
}

function updateImprovements(improvementPoints) {
    const improvementList = document.getElementById('improvementList');
    improvementList.innerHTML = '';
    improvementPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        improvementList.appendChild(li);
    });
}

function nextStudent() {
    currentIndex = (currentIndex + 1) % students.length;
    updateReport();
}

function previousStudent() {
    currentIndex = (currentIndex - 1 + students.length) % students.length;
    updateReport();
}

// Initialize the report
document.addEventListener("DOMContentLoaded", updateReport);

function updateChart() {
    const student = students[currentIndex];
    const selectedSkill = document.getElementById('skillFilter').value;
    const skills = selectedSkill === 'all' ? student.skills : { [selectedSkill]: student.skills[selectedSkill] };

    const ctx = document.getElementById('skillChart').getContext('2d');
    if (skillChart) skillChart.destroy(); // Destroy previous chart if it exists

    const headerColor = 'rgba(243, 97, 0, 1)'; // Header color

    skillChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(skills),
            datasets: [{
                label: 'Skill Level',
                data: Object.values(skills),
                backgroundColor: Object.keys(skills).map(() => headerColor), // Use header color for bars
                borderColor: Object.keys(skills).map(() => headerColor), // Same for borders
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function updateProgressChart(progressData) {
    const ctx = document.getElementById('progressChart').getContext('2d');
    if (progressChart) progressChart.destroy(); // Destroy previous chart if it exists

    const headerColor = 'rgba(243, 97, 0, 1)'; // Header color

    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: progressData.map(data => data.year),
            datasets: [{
                label: 'Progress',
                data: progressData.map(data => data.value),
                fill: false,
                borderColor: headerColor, // Use header color for line
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}



document.querySelector('.canvas-open').addEventListener('click', function() {
    document.querySelector('.offcanvas-menu-wrapper').style.display = 'block';
    document.querySelector('.offcanvas-menu-overlay').style.display = 'block';
});

document.querySelector('.canvas-close').addEventListener('click', function() {
    document.querySelector('.offcanvas-menu-wrapper').style.display = 'none';
    document.querySelector('.offcanvas-menu-overlay').style.display = 'none';
});


