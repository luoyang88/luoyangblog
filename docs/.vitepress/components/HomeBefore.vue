<template>
  <div class="before home-container">
    <span id="switch-box" ref="mySpan"></span>
    <svg id="svgArea" width="100%" height="200px">
      <path
        fill="rgba(253, 253, 253, 0.3)"
        d="M-605.75,100c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0l0,200 l-6400,0Z"
      ></path>
      <path
        fill="rgba(253, 253, 253, 0.5)"
        d="M-305.75,100c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0l0,200 l-6400,0Z"
      ></path>
      <path
        fill="rgba(253, 253, 253, 1)"
        d="M-108.75,100c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0l0,200 l-6400,0Z"
      ></path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stringArray = "勇敢地迈出第一步，即使你不知道下一步在哪里。";
const mySpan = ref(null);
let index = 0;
const delay = 150;

onMounted(() => {
  const changeText = () => {
    mySpan.value.textContent = stringArray.slice(0, index);
    index++;
    if (index > stringArray.length) {
      //   index = 0;
    }
    setTimeout(changeText, delay);
  };
  changeText();

  // 波浪
  let waterSvg = document.querySelector("#svgArea");
  let svgCommonPath =
    "100 c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0c300 -50 500 -50 800 0c300 50 500 50 800 0l0,200 l-6400,0Z";

  let pathMConfig = [
    { startX: -605.75, step: 1, min: -1600 },
    { startX: -605.75, step: 1.75, min: -2000 },
    { startX: -108.75, step: 2.5, min: -1600 },
  ];

  setInterval(function () {
    pathMConfig.forEach((item, index) => {
      item.startX = item.startX < item.min ? 0 : item.startX - item.step;
      waterSvg.children[index].setAttribute(
        "d",
        `M${item.startX},${svgCommonPath}`
      );
    });
  }, 50);
});
</script>

<style lang="scss">
.before {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  text-align: center;
}

.home-container {
  background: url("/default.png") no-repeat;
  background-size: 100% 100%;
  height: 100vh;
}
/*打字样式光标*/
#switch-box::after {
  content: "\A0_";
  font-size: 32px;
  display: inline-block;
  vertical-align: top;
  font-weight: lighter;
  animation: flicker 1s linear infinite;
}

/*光标闪烁动画*/
@keyframes flicker {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}

#svgArea {
  position: absolute;
  bottom: 0;
  left: 0;
}

/* 黑色模式path样式 */
html[theme].dark #svgArea path {
  &:nth-child(1) {
    fill: rgba(20, 20, 20, 0.3) !important;
  }
  &:nth-child(2) {
    fill: rgba(20, 20, 20, 0.5) !important;
  }
  &:nth-child(3) {
    fill: rgba(20, 20, 20, 1) !important;
  }
}
</style>
