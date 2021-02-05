var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

const BOX_WIDTH = 300;
const BOX_HEIGHT = 80;
const BOX_DEPTH = 200;

function openBox() {
  const top = document.getElementsByClassName('cube__face--top')[0];
  top.classList.add('cube__face--top--opened');
  top.style.transform = `translateZ(${-BOX_DEPTH/2}px) translateY(0px) rotateX(120deg)`;
}

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

function createBox(boxWidth, boxHeight, boxDepth) {
  // FRONT
  const faceFront = document.getElementsByClassName('cube__face--front')[0];
  faceFront.style.height = `${boxHeight}px`;
  faceFront.style.width = `${boxWidth}px`;
  faceFront.style.background = `#e32929`;
  faceFront.style.transform = `rotateY(0deg) translateZ(${boxDepth / 2 }px)`;

  //RIGHT
  const faceRight = document.getElementsByClassName('cube__face--right')[0];
  faceRight.style.height = `${boxHeight}px`;
  faceRight.style.width = `${boxDepth}px`;
  faceRight.style.background = `#cc2424`;
  faceRight.style.transform = `rotateY(90deg) translateZ(${boxWidth - boxDepth/2}px)`;

  //LEFT
  const faceLeft = document.getElementsByClassName('cube__face--left')[0];
  faceLeft.style.height = `${boxHeight}px`;
  faceLeft.style.width = `${boxDepth}px`;
  faceLeft.style.background = `#cc2424`;
  faceLeft.style.transform = `rotateY(90deg) translateZ(${-boxDepth/2}px)`;

  //BACK
  const faceBack = document.getElementsByClassName('cube__face--back')[0];
  faceBack.style.height = `${boxHeight}px`;
  faceBack.style.width = `${boxWidth}px`;
  faceBack.style.background = `#b52020`;
  faceBack.style.transform = `rotateY(180deg) translateZ(${boxDepth/2}px)`;

  //BOTTOM
  const faceBottom = document.getElementsByClassName('cube__face--bottom')[0];
  faceBottom.style.height = `${boxDepth}px`;
  faceBottom.style.width = `${boxWidth}px`;
  faceBottom.style.background = '#b52020';
  faceBottom.style.transform = `rotateX(90deg) translateZ(${boxDepth / 2 - boxHeight}px) translateX(${0}px)`;

  //TOP
  const faceTop = document.getElementsByClassName('cube__face--top')[0];
  faceTop.style.height = `${boxDepth}px`;
  faceTop.style.width = `${boxWidth}px`;
  faceTop.style.background = 'yellow';
  // faceTop.style.transformOrigin = 'top center';
  faceTop.style.transform = `translateZ(${-boxDepth/2}px) translateY(0px) rotateX( 90deg)`;
}

radioGroup.addEventListener( 'change', changeSide );
createBox(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH);