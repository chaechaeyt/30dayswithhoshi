// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "DAY 1 호시 첫인상" },
  { "number": 2, "message": "DAY 2 호시 입덕 계기" },
  { "number": 3, "message": "DAY 3 가장 처음 저장한 호시 사진" },
  { "number": 4, "message": "DAY 4 가장 좋아하는 호시 활동" },
  { "number": 5, "message": "DAY 5 가장 좋아하는 호시 무대" },
  { "number": 6, "message": "DAY 6 가장 좋아하는 호시 파트" },
  { "number": 7, "message": "DAY 7 가장 좋아하는 호시 머리" },
  { "number": 8, "message": "DAY 8 가장 좋아하는 호시 착장" },
  { "number": 9, "message": "DAY 9 가장 좋아하는 호시 사복" },
  { "number": 10, "message": "DAY 10 가장 좋아하는 호시 직캠" },
  { "number": 11, "message": "DAY 11 가장 좋아하는 호시 챌린지" },
  { "number": 12, "message": "DAY 12 가장 좋아하는 호시 보컬" },
  { "number": 13, "message": "DAY 13 가장 좋아하는 호시 셀카" },
  { "number": 14, "message": "DAY 14 가장 좋아하는 호시 남찍사" },
  { "number": 15, "message": "DAY 15 가장 좋아하는 호시 거울셀카" },
  { "number": 16, "message": "DAY 16 가장 좋아하는 호시 신체부위" },
  { "number": 17, "message": "DAY 17 가장 좋아하는 호시 위버스" },
  { "number": 18, "message": "DAY 18 가장 좋아하는 호시 인스타 게시물" },
  { "number": 19, "message": "DAY 19 가장 좋아하는 호시 어록" },
  { "number": 20, "message": "DAY 20 가장 좋아하는 호시 라이브" },
  { "number": 21, "message": "DAY 21 가장 좋아하는 호시 포카" },
  { "number": 22, "message": "DAY 22 가장 좋아하는 고잉세븐틴" },
  { "number": 23, "message": "DAY 23 밀고 있는 호시 모에화" },
  { "number": 24, "message": "DAY 24 호시가 해줬으면 하는 챌린지 or 커버" },
  { "number": 25, "message": "DAY 25 호시가 해줬으면 하는 헤메코" },
  { "number": 26, "message": "DAY 26 호시가 해줬으면 하는 컨셉" },
  { "number": 27, "message": "DAY 27 호시가 좋은 이유 3가지" },
  { "number": 28, "message": "DAY 28 호시를 좋아하면서 가장 행복했던 기억" },
  { "number": 29, "message": "DAY 29 호시한테 바라는 점" },
  { "number": 30, "message": "DAY 30 호시한테 한마디" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card2/${index + 1}.JPG`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});