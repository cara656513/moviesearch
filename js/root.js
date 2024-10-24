import { printOutCard, modalClose, modalOpen, printOutModal } from "./ui.js";
import { getMovieData } from "./api.js"

document.querySelector(".modal-btn").addEventListener('click', modalClose);
document.querySelector("#searchbar").addEventListener('input', search);

//로컬스토리지 변수할당
let favoriteMovies = [];
const MOVIES_KEY = "Movies";
function saveMovies(movieData) {
    localStorage.setItem(MOVIES_KEY, JSON.stringify(movieData));
};
const savedMovies = localStorage.getItem(MOVIES_KEY);

const likeBtn = document.querySelector(".bookmark-btn");
const NONCOLORED_CLASSNAME = "non-colored";

const bookmarkedBtn = document.querySelector("#bookmark-index");

//로컬스토리지 저장
function likingMovie(e) {
    likeBtn.classList.toggle(NONCOLORED_CLASSNAME);

    const bookmarkId = e.target.parentNode.querySelector(".bookmark-modal").id;

    if (favoriteMovies.includes(String(bookmarkId))) {
        favoriteMovies = favoriteMovies.filter((element) => element !== bookmarkId);
    } else {
        favoriteMovies.push(bookmarkId);
    }
    saveMovies(favoriteMovies);
}

//좋아요버튼 디폴트
function likingBtnDefault(e) {
    const id = Number(e.target.closest(".card").id);
    if (favoriteMovies.includes(String(id))) {
        likeBtn.classList.remove(NONCOLORED_CLASSNAME);
    } else {
        likeBtn.classList.add(NONCOLORED_CLASSNAME);
    };
}

//카드 클릭 시 모달과의 상호작용
function cardClick(cards, movieList) {
    cards.forEach((card) => {
        card.addEventListener('click', modalOpen);
        card.addEventListener('click', (e) => {
            printOutModal(e, movieList);
            likingBtnDefault(e)
        });
    })
}

//북마크 화면
function printOutFavMovies() {
    let bookmarkedMovieList = []
    favoriteMovies.forEach((favoriteMovie) => {
        async function idData() {
            const url = `https://api.themoviedb.org/3/movie/${favoriteMovie}?language=ko-KR`;
            const data = await getMovieData(url);

            bookmarkedMovieList.push(data)

            printOutCard(bookmarkedMovieList);

            const cards = document.querySelectorAll(".card");
            cardClick(cards, bookmarkedMovieList);

        }
        idData();
    })
};

//첫 화면
async function firstData() {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc';
    const data = await getMovieData(url);

    const movieList = data['results'];
    printOutCard(movieList);

    const cards = document.querySelectorAll(".card");
    cardClick(cards, movieList);

    if (savedMovies !== null) {
        const parsedMovies = JSON.parse(savedMovies);
        favoriteMovies = parsedMovies;
    }

    likeBtn.addEventListener('click', (e) => { likingMovie(e) });
    bookmarkedBtn.addEventListener('click', printOutFavMovies);

}
firstData();

//검색
function search() {
    let searchValue = document.getElementById("searchbar").value.toLowerCase();//유저 검색 값
    async function searchData() {
        const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=ko-KR&page=1`;
        const data = await getMovieData(url);

        const movieList = data['results'];
        let searchResult = movieList.filter((i) => i['title'].toLowerCase().includes(searchValue));//전체 데이터에서 유저 검색 값을 포함한 결과
        printOutCard(searchResult);

        const cards = document.querySelectorAll(".card");
        cardClick(cards, movieList);

    }
    searchData();
}
