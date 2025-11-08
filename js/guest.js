const sampleGuest = [
    { id: 1001, guest: "Иванов А.С.", room: "Стандарт 101", dates: "15.10 - 18.10", status: "confirmed" },
    { id: 1002, guest: "Петрова Е.В.", room: "Делюкс 205", dates: "16.10 - 20.10", status: "confirmed" },
    { id: 1003, guest: "Сидоров П.К.", room: "Люкс 301", dates: "18.10 - 22.10", status: "pending" },
    { id: 1004, guest: "Козлова М.И.", room: "Стандарт 105", dates: "20.10 - 25.10", status: "confirmed" },
    { id: 1005, guest: "Николаев Д.А.", room: "Делюкс 210", dates: "22.10 - 24.10", status: "cancelled" },
    { id: 1006, guest: "Иванов А.С.", room: "Стандарт 101", dates: "15.10 - 18.10", status: "confirmed" },
    { id: 1007, guest: "Петрова Е.В.", room: "Делюкс 205", dates: "16.10 - 20.10", status: "confirmed" },
    { id: 1008, guest: "Сидоров П.К.", room: "Люкс 301", dates: "18.10 - 22.10", status: "pending" },
    { id: 1009, guest: "Козлова М.И.", room: "Стандарт 105", dates: "20.10 - 25.10", status: "confirmed" },
    { id: 1010, guest: "Николаев Д.А.", room: "Делюкс 210", dates: "22.10 - 24.10", status: "cancelled" },
    { id: 1011, guest: "Иванов А.С.", room: "Стандарт 101", dates: "15.10 - 18.10", status: "confirmed" },
    { id: 1012, guest: "Петрова Е.В.", room: "Делюкс 205", dates: "16.10 - 20.10", status: "confirmed" },
    { id: 1013, guest: "Сидоров П.К.", room: "Люкс 301", dates: "18.10 - 22.10", status: "pending" },
    { id: 1014, guest: "Козлова М.И.", room: "Стандарт 105", dates: "20.10 - 25.10", status: "confirmed" },
    { id: 1015, guest: "Николаев Д.А.", room: "Делюкс 210", dates: "22.10 - 24.10", status: "cancelled" }
]

document.addEventListener('DOMContentLoaded', function() {
    renderGuest();
    setupEventListeners();
});

function renderGuest() {
    const tableBody = document.getElementById('guestsTable');
    tableBody.innerHTML = '';
    
    sampleGuest.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.guest}</td>
            <td>${booking.room}</td>
            <td>${booking.dates}</td>
            <td><span class="status status-${booking.status}">${getStatusText(booking.status)}</span></td>
            <td>
                <button class="btn btn-primary" onclick="editBooking(${booking.id})">Открыть досье</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function getStatusText(status) {
    const statusMap = {
        'confirmed': 'Проживет',
        'pending': 'Бронь',
        'cancelled': 'Не проживает'
    };
    return statusMap[status] || status;
}

function editBooking(id) {
    alert(`Отсканируйте карту доступа`);
}
