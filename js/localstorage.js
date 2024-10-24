
//로컬스토리지 변수할당
const MOVIES_KEY = "Movies";
export function saveMovies(movieData) {
    localStorage.setItem(MOVIES_KEY, JSON.stringify(movieData));
};
export const savedMovies = localStorage.getItem(MOVIES_KEY);
