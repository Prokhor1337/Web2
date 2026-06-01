"use strict";

const API_URL = "https://api.tvmaze.com/shows";

let allMovies = [];
let currentPage = 1;
const itemsPerPage = 12;

const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const errorMessage = document.getElementById('errorMessage');
const movieCounter = document.getElementById('movieCounter');
const pagination = document.getElementById('pagination');

async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Помилка сервера: ${response.status}`);
        }

        const data = await response.json();
        allMovies = data;

        console.log(allMovies);
        handleProcessData();
    } catch (error) {
        showError(`Не вдалося завантажити дані: ${error.message}`);
    }
}

function displayMovies(movies) {
    moviesContainer.innerHTML = "";
    movieCounter.textContent = `Знайдено фільмів: ${movies.length}`;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedMovies = movies.slice(startIndex, endIndex);

    paginatedMovies.forEach(movie => {
        const { name, image, rating, genres } = movie;
        
        const movieHTML = `
            <div class="movie-card">
                <img src="${image ? image.medium : 'https://via.placeholder.com/210x295'}" alt="${name}">
                <h3>${name}</h3>
                <p>Рейтинг: ${rating.average || '—'}</p>
                <p><small>${genres.join(', ')}</small></p>
            </div>
        `;
        moviesContainer.insertAdjacentHTML('beforeend', movieHTML);
    });

    renderPagination(movies.length);
}

function renderPagination(totalItems) {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.textContent = "Попередня";
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        currentPage--;
        handleProcessData(false);
    };
    pagination.appendChild(prevBtn);

    const pageInfo = document.createElement('span');
    pageInfo.textContent = ` Сторінка ${currentPage} з ${totalPages} `;
    pagination.appendChild(pageInfo);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = "Наступна";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        currentPage++;
        handleProcessData(false);
    };
    pagination.appendChild(nextBtn);
}

function handleProcessData(resetPage = true) {
    if (resetPage) currentPage = 1;

    let filtered = allMovies.filter(movie => 
        movie.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    const sortType = sortSelect.value;
    if (sortType === 'alphabetical') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'rating') {
        filtered.sort((a, b) => (b.rating.average || 0) - (a.rating.average || 0));
    }

    displayMovies(filtered);
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.className = "error-visible";
}

searchInput.addEventListener('input', () => handleProcessData(true));
sortSelect.addEventListener('change', () => handleProcessData(true));

fetchMovies();