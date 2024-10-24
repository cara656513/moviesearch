# 영화 검색 사이트 만들기
## ✨ 목표 정하기
- **진짜 영화 정보**를 제공하는 검색 사이트 만들기
- **HTML**, **CSS**, **JavaScript**만으로 API와 소통하며 웹 애플리케이션 만들기
- 영화 팬들을 위한 **멋진 UI**로, 데이터를 시각적으로 표현하기
- 🦸‍♂️ API 마스터: 개발자가 되는 첫 걸음으로 실시간 데이터를 사용하는 법 익히기!
- 🔭[배포용 링크](https://cara656513.github.io/moviesearch/)
<br>

## 💻기술 스택
<div style="display:flex; justify-contents: center;">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/git-orange?style=for-the-badge&logo=git&logoColor=white">
</div>
<br>

## ✔필수 요구사항
- ✅ TMDB API 연동 및 데이터 가져오기
- ✅ 영화 카드 리스트 UI 구현
- ✅ 영화 검색 기능 구현
- ✅ 영화 상세 페이지 구현
<br>

## 👍선택 요구사항
- ✅ 로컬 저장소 활용한 ‘북마크’ 기능
- ✅ async/await로 API 호출 리팩터링
<br>

## 🎥기능 구현
- TMDB API를 fetch .then 구문으로 가져와서, 각각 영화 정보가 담긴 카드들을 나열되도록 했습니다.


   ![image](https://github.com/user-attachments/assets/60e69c16-300d-4783-96c0-4f702a186955)



- 검색 바에 검색어를 넣으면 바로 검색 결과가 나오도록 "input" event를 감지하게 하였습니다.



   또, 검색 value와 데이터 title 리스트에 각각 tolowercase()를 붙여서 영문 소문자,대문자 구분없이 검색되도록 했습니다.



   ![image](https://github.com/user-attachments/assets/be6b1cc3-e3fa-45f1-be22-bc41970145a8)


  
- 각 카드를 누르면 모달 창이 보여지고 안에 상세 내용이 보여지도록 했습니다.



   ![image](https://github.com/user-attachments/assets/d16ddbc5-5325-4cb8-b268-f7da4a18c6b3)


  
- 로컬 저장소를 활용하여 북마크 기능을 구현했습니다.



   로컬 저장소에 하트 버튼을 누른 영화의 모든 정보를 객체로 담았다가, id로 담은 후 api에서 불러오는 방식으로 변경하였습니다.



   api를 여러 번 호출해야 하는 단점이 있지만, 로컬 저장소의 메모리가 절약되고, 함수 내부에서 여러 번 실행되는 오류를 없앨 수 있었습니다.



   ![image](https://github.com/user-attachments/assets/215fffb9-cb84-42ab-b58c-2abf38a8b754)


  
- async/await로 api 호출 리팩터링하였습니다.



   api.js, ui.js로 코드를 모듈화하여 root.js -> index.html로 연결하였습니다.
