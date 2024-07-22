
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

let if3 = new Vue({
  el: '#if3',
  data: {
    type: 'A'
  }
})


/*
Key가 없는 리스트 (app): Vue.js는 리스트를 렌더링할 때 각 요소를 고유하게 식별할 방법이 없습니다. 따라서 요소들이 무작위로 섞일 때, Vue.js는 요소를 재사용하지 않고 새로 렌더링하려고 할 수 있습니다. 이는 퍼포먼스와 관련하여 비효율적일 수 있습니다.
Key가 있는 리스트 (app-with-key): key 속성을 사용하면 Vue.js는 각 요소를 고유하게 식별할 수 있습니다. 따라서 요소의 순서가 바뀌더라도 각 요소의 상태를 유지하고, 변경이 필요할 때만 최소한의 변경을 수행합니다.
*/

// Vue는 가능한 한 효율적으로 엘리먼트를 렌더링하려고 시도하며 종종 처음부터 렌더링을 하지않고 다시 사용
// loginType을 바꾸어도 사용자가 이미 입력한 내용은 지워지지 않습니다. 두 템플릿 모두 같은 요소를 사용하므로 <input>은 대체되지 않고 단지 placeholder만 변경
let key1 = new Vue({
  el: '#key1',
  data: {
    loginType: 'username'
  },
  methods: {
    toggleLoginType() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    }
  }
});


// 트랜지션 할 때마다 입력이 처음부터 렌더링
let key2 = new Vue({
  el: '#key2',
  data: {
    loginType: 'username'
  },
  methods: {
    toggleLoginType() {
      this.loginType = this.loginType === 'username' ? 'email' : 'username';
    }
  }
});

/*
v-if
용도: 요소가 조건을 충족할 때만 렌더링되고, 조건을 충족하지 않을 때는 DOM에서 완전히 제거됩니다.
비용: 요소를 추가하고 제거할 때 컴포넌트의 생성 및 소멸 라이프사이클 훅이 실행되기 때문에 더 높은 초기 렌더링 비용이 발생합니다.
v-show
용도: 요소가 항상 DOM에 존재하지만 조건에 따라 display CSS 속성을 none으로 설정하여 보이지 않게 합니다.
비용: 초기 렌더링 비용이 낮고, 단순히 display 속성을 변경하는 것이기 때문에 성능적으로 더 효율적입니다. 그러나 항상 DOM에 남아있기 때문에 메모리 사용량이 약간 더 높을 수 있습니다.
*/