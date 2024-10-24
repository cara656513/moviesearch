//카드에 뿌려주기
function printOutCard(movieList) {
    const container = document.querySelector('#cards');
    let templete = ``;
    movieList.forEach(i => {
        let image = `https://image.tmdb.org/t/p/w500/${i['poster_path']}`
        let title = i['title'];
        let score = i['vote_average'].toFixed(1);
        let id = i['id'];

        templete += `<div class="card" id=${id}>
            <div class="card-img">
            <img src=${image}/>
            </div>
            <div class="card-text">
            <div class="card-title">
            <h3>${title}</h3>
            </div>
            <div class="card-score">평점:
            ${score}
            </div></div></div>`;
    })
    container.innerHTML = templete;
}

//모달 닫기, 열기
const modalAll = document.querySelector(".modal-bg");
function modalClose() {
    modalAll.classList.add("hidden");
}
function modalOpen() {
    modalAll.classList.remove("hidden");
}

//모달에 뿌려주기
function printOutModal(e, movieList) {
    const id = Number(e.target.closest(".card").id);
    const allInfo = movieList.filter((movie) => movie.id === id)[0];
    const image = `https://image.tmdb.org/t/p/w500/${allInfo['poster_path']}`;
    const title = allInfo['title'];
    const overview = allInfo['overview'];
    const date = allInfo['release_date'];
    const score = allInfo['vote_average'].toFixed(1);
    const modal = document.querySelector(".modal");

    modal.innerHTML = ''
    let templete = `
        <div class="bookmark-modal" id=${id}>
        <img src=${image}/>
        <h1>${title}</h1>
        <p>${overview}</p>
        <h3>${date}</h3>
        <h3>평점: ${score}</h3>
        </div>`;

    modal.innerHTML = templete;
}

export { printOutCard, modalClose, modalOpen, printOutModal }
