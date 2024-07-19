
// v-if 디렉티브는 조건에 따라 블록을 렌더링하기 위해 사용됩니다. 블록은 디렉티브의 표현식이 true 값을 반환할 때만 렌더링됩니다.
let if1 = new Vue({
  el: "#if1",
  data: {
    awesome: true
  }
})

let if2 = new Vue({
  el: "#if2",
  data: {
    ok: true
  }
})