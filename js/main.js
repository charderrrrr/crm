const sampleBookings = [
    { id: 1001, guest: "Иванов А.С.", room: "Стандарт 101", dates: "15.10 - 18.10", status: "confirmed" },
    { id: 1002, guest: "Петрова Е.В.", room: "Делюкс 205", dates: "16.10 - 20.10", status: "confirmed" },
    { id: 1003, guest: "Сидоров П.К.", room: "Люкс 301", dates: "18.10 - 22.10", status: "pending" },
    { id: 1004, guest: "Козлова М.И.", room: "Стандарт 105", dates: "20.10 - 25.10", status: "confirmed" },
    { id: 1005, guest: "Николаев Д.А.", room: "Делюкс 210", dates: "22.10 - 24.10", status: "cancelled" }
];

const sampleFeedback = [
    { id: 2001, guest: "Иванов А.С.", type: "Жалоба", message: "Шумный номер", status: "В обработке", date: "15.10.2023" },
    { id: 2002, guest: "Петрова Е.В.", type: "Предложение", message: "Добавить больше подушек", status: "Решено", date: "16.10.2023" },
    { id: 2003, guest: "Сидоров П.К.", type: "Вопрос", message: "Есть ли сейф в номере?", status: "Решено", date: "17.10.2023" },
    { id: 2004, guest: "Козлова М.И.", type: "Жалоба", message: "Плохой Wi-Fi", status: "В обработке", date: "18.10.2023" }
];

const samplePopularity = [
    { type: "Стандарт", bookings: 45, rating: 4.2, occupancy: "78%", revenue: "₽1,250,000" },
    { type: "Делюкс", bookings: 32, rating: 4.5, occupancy: "85%", revenue: "₽1,800,000" },
    { type: "Люкс", bookings: 18, rating: 4.8, occupancy: "72%", revenue: "₽2,100,000" }
];


document.addEventListener('DOMContentLoaded', function() {
    renderBookings();
    renderFeedback();
    renderPopularity();
    renderCalendar();
    setupEventListeners();

});


function renderBookings() {
    const tableBody = document.getElementById('bookingsTable');
    tableBody.innerHTML = '';
    
    sampleBookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.guest}</td>
            <td>${booking.room}</td>
            <td>${booking.dates}</td>
            <td><span class="status status-${booking.status}">${getStatusText(booking.status)}</span></td>
            <td>
                <button class="btn btn-primary" onclick="editBooking(${booking.id})">Редактировать</button>
                <button class="btn" onclick="deleteBooking(${booking.id})">Удалить</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}



function getStatusText(status) {
    const statusMap = {
        'confirmed': 'Подтверждено',
        'pending': 'Ожидание',
        'cancelled': 'Отменено'
    };
    return statusMap[status] || status;
}


function renderFeedback() {
    const tableBody = document.getElementById('feedbackTable');
    tableBody.innerHTML = '';
    
    sampleFeedback.forEach(feedback => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${feedback.id}</td>
            <td>${feedback.guest}</td>
            <td>${feedback.type}</td>
            <td>${feedback.message}</td>
            <td>${feedback.status}</td>
            <td>${feedback.date}</td>
            <td>
                <button class="btn btn-primary" onclick="editFeedback(${feedback.id})">Редактировать</button>
                <button class="btn" onclick="deleteFeedback(${feedback.id})">Удалить</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


function renderPopularity() {
    const tableBody = document.getElementById('popularityTable');
    tableBody.innerHTML = '';
    
    samplePopularity.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.type}</td>
            <td>${room.bookings}</td>
            <td>${room.rating}</td>
            <td>${room.occupancy}</td>
            <td>${room.revenue}</td>
        `;
        tableBody.appendChild(row);
    });
}


function renderCalendar() {
    const calendar = document.getElementById('roomCalendar');
    calendar.innerHTML = '';
    

    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-header';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });
    

    for (let i = 1; i <= 31; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = i;
        dayElement.appendChild(dayNumber);
        

        if (i === 15 || i === 16 || i === 17) {
            const booking = document.createElement('div');
            booking.className = 'booking';
            booking.textContent = 'Иванов А.С. (101)';
            dayElement.appendChild(booking);
        }
        
        if (i === 16 || i === 17 || i === 18 || i === 19) {
            const booking = document.createElement('div');
            booking.className = 'booking';
            booking.style.backgroundColor = '#e74c3c';
            booking.textContent = 'Петрова Е.В. (205)';
            dayElement.appendChild(booking);
        }
        
        if (i === 18 || i === 19 || i === 20 || i === 21) {
            const booking = document.createElement('div');
            booking.className = 'booking';
            booking.style.backgroundColor = '#2ecc71';
            booking.textContent = 'Сидоров П.К. (301)';
            dayElement.appendChild(booking);
        }
        
        calendar.appendChild(dayElement);
    }
}


function setupEventListeners() {

    document.getElementById('addBookingBtn').addEventListener('click', function() {
        document.getElementById('bookingModal').style.display = 'flex';
    });
    

    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();

        alert('Бронирование добавлено!');
        closeModal('bookingModal');
    });
    

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {

            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

            this.classList.add('active');
            

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            

            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    

    document.getElementById('prevMonthBtn').addEventListener('click', function() {

        alert('Переход к предыдущему месяцу');
    });
    
    document.getElementById('nextMonthBtn').addEventListener('click', function() {

        alert('Переход к следующему месяцу');
    });
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function editBooking(id) {
    alert(`Редактирование бронирования #${id}`);
}

function deleteBooking(id) {
    if (confirm('Вы уверены, что хотите удалить это бронирование?')) {
        alert(`Бронирование #${id} удалено`);
    }
}

function editFeedback(id) {
    alert(`Редактирование обращения #${id}`);
}

function deleteFeedback(id) {
    if (confirm('Вы уверены, что хотите удалить это обращение?')) {
        alert(`Обращение #${id} удалено`);
    }
}