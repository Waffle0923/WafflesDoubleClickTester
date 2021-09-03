const clickPanel = document.getElementById('clickPanel');
let dClickCountVal = document.getElementById('doubleClickCount');
let clickCountVal = document.getElementById('clickCount');
let exTriggeredTime = 0;
let clickCount = 0;
let doubleClickCount = 0;

clickPanel.addEventListener('click', countFunc);  // 좌클릭 이벤트 처리.
clickPanel.addEventListener('contextmenu', countFunc);  // 우클릭 이벤트 처리.

window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        clickCount = 0;
        doubleClickCount = 0;
        clickCountVal.innerHTML = String(clickCount);
        dClickCountVal.innerHTML = String(doubleClickCount);
        clickPanel.style.backgroundColor = 'white';
        clickPanel.style.color = '#A9A9A9';
    }
});

window.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        window.close();
    }
});

function countFunc() {
    let triggeredTime = new Date().getTime();

    if (Math.abs(exTriggeredTime - triggeredTime) <= 100) {
        doubleClickCount++;
        dClickCountVal.innerHTML = String(doubleClickCount);
        clickPanel.style.backgroundColor = 'red';
        clickPanel.style.color = 'white';
    }

    clickCount++;
    clickCountVal.innerHTML = String(clickCount);
    exTriggeredTime = triggeredTime;
}