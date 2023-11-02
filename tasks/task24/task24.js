const table = document.getElementById('dataTable');
const tbody = table.querySelector('tbody');
const pagination = document.getElementById('pagination');

let data = [];
const url = `http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true`

const fetchData = async () => {
  const res = await fetch(url)
  const responseData = await res.json()
  console.log(responseData)
  data = responseData
  renderTable(data);
  addPagination();
}

const renderTable = (displayedData) => {
  tbody.innerHTML = '';
  const columns = table.querySelectorAll('th');

  for (const item of displayedData) {
    const row = document.createElement('tr');
    for (const column of columns) {
      const cell = document.createElement('td');
      cell.textContent = item[column.getAttribute('data-column')];
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
}

const addPagination = () => {
  pagination.innerHTML = '';
  const itemsPerPage = 50;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const pageLink = document.createElement('a');
    pageLink.textContent = i;
    pageLink.href = '#';

    if (i === 1) {
      pageLink.classList.add('active')
    }

    pageLink.addEventListener('click', (e) => {
      e.preventDefault()
      updateActivePage(i)
      displayPage(i);
    });

    pagination.appendChild(pageLink);
  }

  displayPage(1)
}

const updateActivePage = (newPage) => {
  const pages = pagination.querySelectorAll('a');
  pages.forEach((page, i) => {
    if (i + 1 === newPage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

const displayPage = (pageNumber) => {
  const itemsPerPage = 50;
  const start = (pageNumber - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedData = data.slice(start, end);
  renderTable(displayedData);
}

fetchData();
