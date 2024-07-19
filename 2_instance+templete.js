// 데이터 객체
var data = { a: 1 }

// Vue인스턴스에 데이터 객체를 추가합니다.
var vm = new Vue({
  data: data
})

// 데이터가 변경되면 화면은 다시 렌더링됩니다. 유념할 점은, data에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 반응형이라는 것입니다. 즉, 다음과 같이 새 속성을 추가하면:

// vm.b = 'hi'
// b가 변경되어도 화면이 갱신되지 않습니다. 어떤 속성이 나중에 필요하다는 것을 알고 있으며, 빈 값이거나 존재하지 않은 상태로 시작한다면 아래와 같이 초기값을 지정할 필요가 있습니다.

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})


var data1 = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data1
})

// vm.$data === data // => true
// vm.$el === document.getElementById('example') // => true
// $watch 는 인스턴스 메소드 입니다.
// vm.$watch('a', function (newVal, oldVal) {
//   // `vm.a`가 변경되면 호출 됩니다.
// })



// 예를 들어, created 훅은 인스턴스가 생성된 후에 호출됩니다.
new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 는 vm 인스턴스를 가리킵니다.
    console.log('a is: ' + this.a)
  }
})


var app2 = new Vue({
  el: '#app2',
  data: {
    msg: 'hi'
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
})

// 웹사이트에서 임의의 HTML을 동적으로 렌더링하려면 XSS 취약점으로 쉽게 이어질 수 있으므로 매우 위험할 가능성이 있습니다. 신뢰할 수 있는 콘텐츠에서만 HTML 보간을 사용하고 사용자가 제공한 콘텐츠에서는 절대 사용하면 안됩니다.
//span의 내용은 rawHtml로 대체됩니다. 이 때 데이터 바인딩은 무시됩니다. 
var app3 = new Vue({
  el: '#app3',
  data: {
    rawHtml: '<span style="color: red">This should be red</span>'
  }
})

// isButtonDisabled가 null, undefined 또는false의 값을 가지면 disabled 속성은 렌더링 된<button>엘리먼트에 포함되지 않습니다.
var app4 = new Vue({
  el: '#app4',
  data: {
    isButtonDisabled: false
  }
})

var app5 = new Vue({
  el: '#app5',
  data: {
    id: 'userid',
    message: "this is reverse message",
    ok: '?',
    number: 2
  },
})



// 디렉티브는 v- 접두사가 있는 특수 속성입니다. 디렉티브 속성 값은 단일 JavaScript 표현식 이 됩니다. (나중에 설명할 v-for는 예외입니다.) 디렉티브의 역할은 표현식의 값이 변경될 때 사이드이펙트를 반응적으로 DOM에 적용하는 것 입니다.
let app6 = new Vue({
  data: {
    seen: true
  }
})


// 일부 디렉티브는 콜론으로 표시되는 “전달인자”를 사용할 수 있습니다. 예를 들어, v-bind 디렉티브는 반응적으로 HTML 속성을 갱신하는데 사용됩니다.
let app7 = new Vue({
  el: '#app7',
  data: {
    url: 'https://www.google.com',
    attributeName: 'href',
    eventName: 'click'
  }, 
  methods: {
    doSomething: function(event) {
      event.preventDefault(); // 클릭 이벤트 기본 동작 막기
      alert('Do something!');
    }
  }
})