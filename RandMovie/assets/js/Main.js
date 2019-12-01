const btnRandMovie = document.querySelector('.film_rand');

// Получение данных
function getData() {
    fetch('https://positivego.github.io/RandMovie/assets/js/bd/Films.json').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + response.status);
            }
        })
        .then((data) => renderCards(data))
        .catch((err) => {
            console.warn(err)
        });
}
// ---- конец ----

// Отрисовка карточек
function renderCards(data) {
    const filmWrapper = document.querySelector('.film_list_conteiner');
    data.films.forEach((film) => {
        const card = document.createElement('div');
        card.className = 'film_list__film';
        card.innerHTML = `
                <div class="img_card_l"><img src="${film.img}" alt="" class="img_card"></div>
                <div class="film_list__film--conteiner">
                    <div class="title"><p>${film.title}</p><p>( ${film.year} )</p></div>
                    <div class="tags">
                        <p>${film.tags}</p>
                    </div>
                    <div class="line"></div>
                    <div class="description">
                        <p>
                            ${film.description}
                        </p>
                    </div>
                </div>
        `;
        filmWrapper.appendChild(card);
    });

}
// ---- конец ----
getData();

let year = new Date();
document.getElementById('year').innerHTML = year.getFullYear(); 

/*
{
    "films": [{
		"title": "Помни",
        "year": "2000",
        "country": "США",
		"img": "",
		"tags": "триллер, детектив, драма, криминал"
	}, {
		"title": "Игровая приставка Sony PlayStation 3 Super Slim",
		"price": 16499,
		"sale": true,
		"img": "https://cdn1.ozone.ru/multimedia/c400/1027495663.jpg",
		"hoverImg": "https://cdn1.ozone.ru/multimedia/c400/1028469540.jpg",
		"category": "Игровая приставка"
	}]
}
*/