let errorBlock = document.querySelector('.error')
const table = document.getElementById('ordersTable');
function error(msg) {
    resetError()
    errorBlock.style.display = 'block'
    errorBlock.innerHTML = msg
}
function resetError() {
    errorBlock.style.display = 'none'
}

function addButtonsToTable(data) {
    const tbody = table.querySelector('tbody');
  
    data.forEach(rowData => {
      const newRow = document.createElement('tr');
      let buttonCell; // Определяем переменную здесь
      let button; // Определяем переменную для кнопки здесь
      let cellStatus; // Определяем переменную для ячейки 'status' здесь
  
      // Добавляем ячейки с данными в строку
      const keys = ['id', 'name', 'surname', 'phone', 'email', 'status'];
      keys.forEach(key => {
        const cell = document.createElement('td');
        cell.textContent = rowData[key];
        newRow.appendChild(cell);
        if (key === 'status') {
          cellStatus = cell; // Сохраняем ссылку на ячейку 'status'
        }
      });
  
      // Проверяем значение status и добавляем кнопку, если оно пусто
      if (rowData.status === '') {
        buttonCell = document.createElement('td'); // Определяем здесь
        button = document.createElement('button');
        button.textContent = 'Изменить на рассмотренно';
        button.addEventListener('click', () => {
          // Выводим id строки при клике на кнопку
          console.log(`Нажата кнопка в строке с id: ${rowData.id}`);
          // Отправляем запрос для обновления status
          fetch('/updateStatus', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderId: rowData.id }),
          })
            .then(response => response.json())
            .then(result => {
              if (result.success) {
                console.log(`Статус обновлен для строки с id: ${rowData.id}`);
                // Обновляем status в DOM после успешного обновления
                rowData.status = 'Рассмотренно';
                cellStatus.textContent = 'Рассмотренно'; // Обновляем текст в ячейке 'status'
                // Удаляем кнопку
                if (buttonCell && button) {
                  buttonCell.removeChild(button);
                }
              } else {
                console.error('Ошибка при обновлении status.');
              }
            })
            .catch(error => {
              console.error('Ошибка при отправке запроса:', error);
            });
        });
        buttonCell.appendChild(button);
      }
      if (buttonCell) {
        newRow.appendChild(buttonCell);
      }
  
      tbody.appendChild(newRow);
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    fetch('/getOrders')
      .then(response => response.json())
      .then(data => {
        addButtonsToTable(data); // Добавляем кнопки к данным и заполняем таблицу
      })
      .catch(error => {
        console.error('Ошибка при получении данных с сервера:', error);
      });
  });
  
function loginAdmin() {
  resetError();
  let password = document.querySelector('.password').value;

  if (password !== 'BhdKssawd3591dJhgSk') {
    error('Пароль не верный');
  } else {
    document.querySelector('.block-login').style.display = 'none';
  }
}
