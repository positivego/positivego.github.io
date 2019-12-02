
document.querySelector('.background_btn').onclick = function() {
    document.querySelector('.film_card').classList.remove('film_card_active');
    document.querySelector('.background_btn').classList.remove('background_btn_active');
    document.querySelector('.film_list_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.menu_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.footer_content').classList.remove('fitlerBlur');
};
document.querySelector('.film_card--close_btn').onclick = function() {
    document.querySelector('.film_card').classList.remove('film_card_active');
    document.querySelector('.background_btn').classList.remove('background_btn_active');
    document.querySelector('.film_list_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.menu_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.footer_content').classList.remove('fitlerBlur');
};

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
function getDataRand() {
    fetch('https://positivego.github.io/RandMovie/assets/js/bd/Films.json').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Данные не были получены, ошибка: ' + response.status);
            }
        })
        .then((data) => randBtn(data))
        .catch((err) => {
            console.warn(err)
        });
}
// ---- конец ----

// Отрисовка рандомной карточки
function randBtn(data) {
    const btnRandMovie = document.querySelector('.film_rand'),
          CardMovie = document.querySelector('.film_card'),
          btnRand = document.querySelector('.randBtn');

    btnRandMovie.onclick = function() {
        document.querySelector('.film_card').classList.add('film_card_active');
        document.querySelector('.background_btn').classList.add('background_btn_active');
        document.querySelector('.film_list_conteiner').classList.add('fitlerBlur');
        document.querySelector('.menu_conteiner').classList.add('fitlerBlur');
        document.querySelector('.footer_content').classList.add('fitlerBlur');
        let num = Math.floor(Math.random()*data.films.length);
        title = data.films[num].title,
        year = data.films[num].year,
        img = data.films[num].img,
        description = data.films[num].description,
        tags = data.films[num].tags,
        cardSrc = document.getElementById('img');
        cardSrc.src = img;
        document.getElementById('title').innerHTML = title;
        document.getElementById('year').innerHTML = '( ' + year +' )';
        document.getElementById('description').innerHTML = description;
        document.getElementById('tags').innerHTML = tags; 
    }  

    btnRand.onclick = function() {
        let num = Math.floor(Math.random()*data.films.length);
        title = data.films[num].title,
        year = data.films[num].year,
        img = data.films[num].img,
        description = data.films[num].description,
        tags = data.films[num].tags,
        cardSrc = document.getElementById('img');
        cardSrc.src = img;
        document.getElementById('title').innerHTML = title;
        document.getElementById('year').innerHTML = '( ' + year +' )';
        document.getElementById('description').innerHTML = description;
        document.getElementById('tags').innerHTML = tags;
    }
}
// Отрисовка карточек
function renderCards(data) {
    const filmWrapper = document.querySelector('.film_list_conteiner');
    function sRand() {
        return Math.random() > 0.5 ? 1 : -1;
    }
    data.films.sort(sRand);
    for (let i = 0; i < 21; i++){
        const card = document.createElement('div');
        card.className = 'film_list__film';
        card.innerHTML = `
                <div class="img_card_l"><img src="${data.films[i].img}" alt="" class="img_card"></div>
                <div class="film_list__film--conteiner">
                    <div class="title"><p>${data.films[i].title}</p><p>( ${data.films[i].year} )</p></div>
                    <div class="tags">
                        <p>${data.films[i].tags}</p>
                    </div>
                    <div class="line"></div>
                    <div class="description">
                        <p>
                            ${data.films[i].description}
                        </p>
                    </div>
                </div>
        `;
        filmWrapper.appendChild(card);
    };
/*     data.films.sort(sRand).forEach((film) => {
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
    }); */
    
};
// ---- конец ----

getData();
getDataRand();

let year = new Date();
document.querySelector('.yearT').innerHTML = year.getFullYear();