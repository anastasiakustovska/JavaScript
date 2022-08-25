const API_URL = 'http://www.omdbapi.com';
const API_KEY = '7338434d';

const MOVIES_PER_PAGE = 10;

$(document).ready(function () {
    let currentPage = 1;
    let currentTitle = '';

    const searchMovies = () => {
        const params = new URLSearchParams({
            apikey: API_KEY, s: currentTitle, page: currentPage
        });

        $('#alert').fadeOut();

        fetch(`${API_URL}?` + params, {
            method: 'GET',
        })
            .then(data => {
                return data.json();
            })
            .then(data => {
                $('.card').remove();
                $('.number-link').remove();

                if (data.Error) {
                    $('#alert').text(data.Error).fadeIn();

                    return;
                }

                for (let i = 1; i <= calculateTotalPages(data.totalResults); i++) {
                    $('#pagination').append(`
                        <li class="page-item number-link ${currentPage === i ? 'active' : ''}">
                            <a class="page-link" href="javascript:void(0);" data-number="${i}">
                                ${i}
                            </a>
                       </li>
                    `);
                }

                data.Search.forEach(film => {
                    $('#movies').append(`
                        <div class="card col-3" style="width: 18rem;">
                            <img src="${film.Poster}" class="card-img-top" alt="${film.Title}">
                            <div class="card-body">
                            <button class="show-details btn btn-primary">
                                Details
                            </button>
                                <p><b>Title:</b>${film.Title}</p>
                                <p><b>Year:</b>${film.Year}</p>
                                <p><b>Type:</b>${film.Type}</p>
                            </div>
                    </div>
            `)
                })
            })
    }

    $(document).on('click', '.show-details', function () {
        $(this).parent().addClass('show');

        $(this).remove();
    })

    $(document).on('click', '.page-link', function () {
        currentPage = $(this).data('number');

        searchMovies();
    })

    $('#search').click(function () {
        currentTitle = $('#title').val();
        currentPage = 1;

        searchMovies();
    })
});

const calculateTotalPages = (totalResults) => {
    totalResults = parseInt(totalResults);

    return Math.ceil(totalResults / MOVIES_PER_PAGE);
}


