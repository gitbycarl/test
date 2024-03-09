function changeContent(imagePath, subtitle, title, description, buttonText1, buttonText2) {
    var target = document.querySelector('body');
    var main_subtitle = document.getElementById('main-subtitle');
    var main_title = document.getElementById('main-title');
    var main_description = document.getElementById('main-description');
    var main_button1 = document.getElementById('index_button1');
    var main_button2 = document.getElementById('index_button2');

    // target.style.backgroundImage =`url('${imagePath}')`;
    // main_subtitle.textContent = subtitle;
    // main_title.innerHTML = title; // <a> 태그를 포함하기 때문에 innerHTML 사용
    // main_description.innerHTML = description;
    // main_button1.value = buttonText1;
    // main_button2.value = buttonText2;

    // 팝업의 배경 이미지 업데이트
    popup.style.backgroundImage = `url('${imagePath}')`;
    
    // 팝업 표시
    popup.style.display = 'block';
    popup.style.backgroundSize = 'auto 450px'; // 또는 'contain' 사용

    document.getElementById('popupTitle').textContent = subtitle; // 예시로 제목을 subtitle로 설정
    document.getElementById('popupContent').innerHTML = description; // 설명을 팝업 내용으로 설정
    

}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}