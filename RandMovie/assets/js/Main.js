
document.querySelector('.background_btn').onclick = function () {
    document.querySelector('.card-preloader').classList.remove('preloader-done');
    document.querySelector('.film_card').classList.remove('film_card_active');
    document.querySelector('.background_btn').classList.remove('background_btn_active');
    document.querySelector('.film_list_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.menu_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.footer_content').classList.remove('fitlerBlur');
};
document.querySelector('.film_card--close_btn').onclick = function () {
    document.querySelector('.card-preloader').classList.remove('preloader-done');
    document.querySelector('.film_card').classList.remove('film_card_active');
    document.querySelector('.background_btn').classList.remove('background_btn_active');
    document.querySelector('.film_list_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.menu_conteiner').classList.remove('fitlerBlur');
    document.querySelector('.footer_content').classList.remove('fitlerBlur');
};


function getData() {
    return fetch('https://positivego.github.io/RandMovie/assets/js/bd/Films.json').then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Данные не были получены, ошибка: ' + response.status);
        }
    })
        .then((data) => {
            return data 
        })
        .catch((err) => {
            console.warn(err)
        });
}

// ---- конец ----

// Отрисовка рандомной карточки

function randBtn(data) {
    const btnRandMovie = document.querySelector('.film_rand'),
        btnRand = document.querySelector('.randBtn');

    btnRandMovie.onclick = function () {
        document.querySelector('.film_card').classList.add('film_card_active');
        document.querySelector('.background_btn').classList.add('background_btn_active');
        document.querySelector('.film_list_conteiner').classList.add('fitlerBlur');
        document.querySelector('.menu_conteiner').classList.add('fitlerBlur');
        document.querySelector('.footer_content').classList.add('fitlerBlur');
        let num = Math.floor(Math.random() * data.films.length);
            title = data.films[num].title,
            year = data.films[num].year,
            img = data.films[num].img,
            description = data.films[num].description,
            tags = data.films[num].tags,
            cardSrc = document.getElementById('img');
        cardSrc.src = img;
        document.getElementById('title').innerHTML = title;
        document.getElementById('year').innerHTML = '( ' + year + ' )';
        document.getElementById('description').innerHTML = description;
        document.getElementById('tags').innerHTML = tags;
        document.getElementById('img').onload = function () {
            setTimeout(function () {
                const preloader = document.querySelector('.card-preloader');
                if (!preloader.classList.contains('preloader-done')) {
                    preloader.classList.add('preloader-done');
                }
            }, 500);
        };
    }

    btnRand.onclick = function () {
        document.querySelector('.card-preloader').classList.remove('preloader-done')
        let num = Math.floor(Math.random() * data.films.length);
            title = data.films[num].title,
            year = data.films[num].year,
            img = data.films[num].img,
            description = data.films[num].description,
            tags = data.films[num].tags,
            cardSrc = document.getElementById('img');
        function getinf(){
            cardSrc.src = img;
            document.getElementById('title').innerHTML = title;
            document.getElementById('year').innerHTML = '( ' + year + ' )';
            document.getElementById('description').innerHTML = description;
            document.getElementById('tags').innerHTML = tags;
        }
        setTimeout(getinf, 500);
        document.getElementById('img').onload = function () {
            setTimeout(function () {
                let preloader = document.querySelector('.card-preloader');
                if (!preloader.classList.contains('preloader-done')) {
                    preloader.classList.add('preloader-done');
                }
            }, 500);
        };
    }
}
// Отрисовка карточек

function renderCards(data) {
    const filmWrapper = document.querySelector('.film_list_conteiner');
    function sRand() {
        return Math.random() > 0.5 ? 1 : -1;
    }
    data.films.sort(sRand);
    for (let i = 0; i < 21; i++) {
        const card = document.createElement('div');
        card.className = 'film_list__film';
        card.innerHTML = `
                <div class="img_card_l">
                    <img src="${data.films[i].img}" alt="${data.films[i].title}" class="img_card">
                </div>
        `;
        filmWrapper.appendChild(card);

        card.onclick = function () {
            document.querySelector('.film_card').classList.add('film_card_active');
            document.querySelector('.background_btn').classList.add('background_btn_active');
            document.querySelector('.film_list_conteiner').classList.add('fitlerBlur');
            document.querySelector('.menu_conteiner').classList.add('fitlerBlur');
            document.querySelector('.footer_content').classList.add('fitlerBlur');
            let title = data.films[i].title,
                year = data.films[i].year,
                tags = data.films[i].tags,
                description = data.films[i].description;
            document.getElementById('img').src = this.querySelector('.img_card').src;
            document.getElementById('title').innerHTML = title;
            document.getElementById('year').innerHTML = '( ' + year + ' )';
            document.getElementById('tags').innerHTML = tags;
            document.getElementById('description').innerHTML = description;
            document.getElementById('img').onload = function () {
                setTimeout(function () {
                    const preloader = document.querySelector('.card-preloader');
                    if (!preloader.classList.contains('preloader-done')) {
                        preloader.classList.add('preloader-done');
                    }
                }, 500);
            };
        }
    };
};

// ---- конец ----

function renderFilter(data){

    let filterBtn = document.querySelector('.filter_buttons');
    filterBtn.onclick = function() {
        const filmWrapper = document.querySelector('.film_list_conteiner');
        let filterBtnTextContent = new RegExp(event.target.textContent, 'i');
        filmWrapper.innerHTML = '';
        function sRand() {
            return Math.random() > 0.5 ? 1 : -1;
        }
        data.films.sort(sRand).forEach((tags, index) => {
            let filmTags = tags.tags;
            if (filterBtnTextContent.test(filmTags)) {
                const card = document.createElement('div');
                card.className = 'film_list__film';
                card.innerHTML = `
                    <div class="img_card_l">
                        <img src="${data.films[index].img}" alt="${data.films[index].title}" class="img_card">
                    </div>
                `;
                filmWrapper.appendChild(card);

                card.onclick = function () {
                    document.querySelector('.film_card').classList.add('film_card_active');
                    document.querySelector('.background_btn').classList.add('background_btn_active');
                    document.querySelector('.film_list_conteiner').classList.add('fitlerBlur');
                    document.querySelector('.menu_conteiner').classList.add('fitlerBlur');
                    document.querySelector('.footer_content').classList.add('fitlerBlur');
                    let title = data.films[index].title,
                        year = data.films[index].year,
                        tags = data.films[index].tags,
                        description = data.films[index].description;
                    document.getElementById('img').src = this.querySelector('.img_card').src;
                    document.getElementById('title').innerHTML = title;
                    document.getElementById('year').innerHTML = '( ' + year + ' )';
                    document.getElementById('tags').innerHTML = tags;
                    document.getElementById('description').innerHTML = description;
                    document.getElementById('img').onload = function () {
                        setTimeout(function () {
                            const preloader = document.querySelector('.card-preloader');
                            if (!preloader.classList.contains('preloader-done')) {
                                preloader.classList.add('preloader-done');
                            }
                        }, 500);
                    };
                }
            }
        });
    };
}

getData().then((data) => {
    randBtn(data);
    renderCards(data);
    renderFilter(data);
});

let year = new Date();
document.querySelector('.yearT').innerHTML = year.getFullYear();
