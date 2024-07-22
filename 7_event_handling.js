var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 메소드는 `methods` 객체 안에 정의합니다
  methods: {
    greet: function (event) {
      // 메소드 안에서 사용하는 `this` 는 Vue 인스턴스를 가리킵니다
      alert('Hello ' + this.name + '!')
      // `event` 는 네이티브 DOM 이벤트입니다
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

let example3 = new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

/**
 * $event는 Vue에서 자동으로 제공하는 특별한 변수로, 현재 발생한 이벤트 객체를 나타냅니다. 이 변수는 v-on 디렉티브에서 이벤트 핸들러에 사용될 수 있습니다.
 * event.preventDefault()를 호출하면, 네이티브 이벤트의 기본 동작을 막을 수 있습니다. 예를 들어, <button> 요소의 기본 동작인 폼 제출을 막는 데 사용됩니다.
alert(message)를 사용하여 경고 메시지를 표시합니다.

이벤트 핸들러에 다른 인자를 넘기지 않고 단순히 메소드만 호출할 경우, Vue는 자동으로 네이티브 이벤트 객체를 메소드에 첫 번째 인자로 전달
벤트 객체 외에 추가적인 인자를 메소드에 전달하려면, $event를 사용하여 명시적으로 이벤트 객체를 전달해야 합

event.target: 이벤트가 발생한 DOM 요소를 참조합니다.
event.type: 이벤트의 유형(예: click, keydown)을 나타냅니다.
event.preventDefault(): 기본 동작(예: 링크 클릭 시 페이지 이동)을 방지합니다.
event.stopPropagation(): 이벤트 전파를 중단합니다.

Vue는 v-on 이벤트에 이벤트 수식어를 제공합니다. 수식어는 점으로 표시된 접미사 입니다.

.stop
.prevent
.capture
.self
.once
.passive
<!-- 클릭 이벤트 전파가 중단됩니다 -->
<a v-on:click.stop="doThis"></a>

<!-- 제출 이벤트가 페이지를 다시 로드 하지 않습니다 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 수식어는 체이닝 가능합니다 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 단순히 수식어만 사용할 수 있습니다 -->
<form v-on:submit.prevent></form>

<!-- 이벤트 리스너를 추가할 때 캡처모드를 사용합니다 -->
<!-- 즉, 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리합니다. -->

설명: capture 수식어를 사용하면 이벤트 캡처링 단계에서 이벤트를 처리합니다. 이벤트 캡처링 단계는 이벤트가 부모 엘리먼트에서 자식 엘리먼트로 전파되기 전에 발생합니다. 즉, 자식 엘리먼트에서 이벤트가 처리되기 전에 부모 엘리먼트에서 이벤트를 처리합니다.
<div v-on:click.capture="doThis">...</div>
methods: {
  doThis: function () {
    alert('Capture event on parent!');
  }
}

<!-- event.target이 엘리먼트 자체인 경우에만 트리거를 처리합니다 -->
<!-- 자식 엘리먼트에서는 안됩니다 -->
설명: self 수식어를 사용하면 이벤트가 발생한 대상이 엘리먼트 자신일 때만 핸들러를 실행합니다. 자식 엘리먼트에서 발생한 이벤트는 무시됩니다.
용도: 부모 엘리먼트에서 자식 엘리먼트가 클릭되었을 때 이벤트를 무시하고, 부모 엘리먼트 자체가 클릭되었을 때만 이벤트를 처리하고 싶을 때 유용합니다.

관련 코드가 동일한 순서로 생성되므로 수식어를 사용할 때 순서를 지정하세요. 다시말해 `v-on:click.prevent.self`를 사용하면 **모든 클릭**을 막을 수 있으며 `v-on:click.self.prevent`는 엘리먼트 자체에 대한 클릭만 방지합니다.
<div v-on:click.self="doThat">...</div>
methods: {
  doThat: function () {
    alert('Click on the element itself!');
  }
}


<!-- 클릭 이벤트는 최대 한번만 트리거 됩니다. -->
<a v-on:click.once="doThis"></a>

<!-- 스크롤의 기본 이벤트를 취소할 수 없습니다. -->
<div v-on:scroll.passive="onScroll">...</div>
추가로, Vue는 .passive 수식어를 제공합니다. 특히 모바일 환경에서 성능향상에 도움이 됩니다. 예를 들어, 브라우저는 핸들러가 event.preventDefault()를 호출할지 알지 못하므로 프로세스가 완료된 후 스크롤 합니다. .passive 수식어는 이 이벤트가 기본 동작을 멈추지 않는다는 것을 브라우저에 알릴 수 있습니다.
*/
let example4 = new Vue({
  el: '#example-4',
  methods: {
    warn: function (message, event) {
      // 이제 네이티브 이벤트에 액세스 할 수 있습니다
      if (event) event.preventDefault()
      alert(message)
    }
  }
})

/**
 * <!-- only call `vm.submit()` when the `key` is `Enter` -->
<input v-on:keyup.enter="submit">

<input v-on:keyup.page-down="onPageDown">

The use of `keyCode` events [is deprecated](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) and may not be supported in new browsers.
.enter
.tab
.delete (“Delete” 와 “Backspace” 키 모두를 캡처합니다)
.esc
.space
.up
.down
.left
.right

 */
let example5 = new Vue({
  el: '#example-5',
  methods: {
      submit() {
          alert('Submit triggered by pressing Enter key.');
      },
      onPageDown() {
          alert('Page Down triggered.');
      }
  }
});

/**
 * 다음 수식어를 사용해 해당 수식어 키가 눌러진 경우에만 마우스 또는 키보드 이벤트 리스너를 트리거 할 수 있습니다.

.ctrl
.alt
.shift
.meta

참고 : 매킨토시 키보드에서 meta는 command 키 입니다 (⌘). Windows 키보드에서 meta는 windows 키 (⊞) 입니다. Sun Microsystems 키보드에서 meta는 단색의 다이아몬드 (◆)로 표시됩니다. 특정 키보드의 경우, 특히 MIT 및 Lisp 시스템 키보드와 Knight 키보드, space-cadet 키보드와 같은 제품에는 “META” 레이블이 지정됩니다. Symbolics 키보드에서 메타는 “META” 또는 “Meta”로 표시됩니다.
 
<!-- Alt 또는 Shift와 함께 눌린 경우에도 실행됩니다. -->
<button @click.ctrl="onClick">A</button>

<!-- Ctrl 키만 눌려있을 때만 실행됩니다. -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 아래 코드는 시스템 키가 눌리지 않은 상태인 경우에만 작동합니다. -->
<button @click.exact="onClick">A</button>

.left
.right
.middle
위 수식어는 특정 마우스 버튼에 의해 트리거 된 이벤트로 핸들러를 제한합니다.

*/

let example6 =  new Vue({
  el: '#example-6',
  methods: {
      clear(event) {
          alert('Clear action triggered by pressing Alt + C.');
          // You can also handle `event` if needed
      },
      doSomething(event) {
          alert('Do something action triggered by Ctrl + Click.');
          // You can also handle `event` if needed
      }
  }
});