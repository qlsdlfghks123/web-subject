const body = document.body;
const btnHtml = document.getElementById('btn-html');
const btnCss = document.getElementById('btn-css');
const btnFull = document.getElementById('btn-full');

const actionBtn = document.getElementById('action-btn');
const countDisplay = document.getElementById('count');

let cheerCount = 0;
let isJsEnabled = true;

function changeMode(mode) {
    btnHtml.classList.remove('active');
    btnCss.classList.remove('active');
    btnFull.classList.remove('active');

    body.className = '';

    if (mode === 'html') {
        body.classList.add('mode-html');
        btnHtml.classList.add('active');
        isJsEnabled = false;
    } else if (mode === 'css') {
        body.classList.add('mode-css');
        btnCss.classList.add('active');
        isJsEnabled = false;
    } else {
        body.classList.add('mode-full');
        btnFull.classList.add('active');
        isJsEnabled = true;
    }
}


btnHtml.addEventListener('click', () => changeMode('html'));
btnCss.addEventListener('click', () => changeMode('css'));
btnFull.addEventListener('click', () => changeMode('full'));

actionBtn.addEventListener('click', () => {
    if (!isJsEnabled) {
        alert('현재 모드에서는 JavaScript가 차단되어 숫자가 올라가지 않습니다! [완성형 보기]를 클릭해 주세요.');
        return;
    }

    cheerCount++;
    countDisplay.textContent = cheerCount;


    if (cheerCount % 5 === 0) {
        alert(`🎉 대단해요! 프론트엔드 코드를 ${cheerCount}번이나 응원하셨습니다.`);
    }
});