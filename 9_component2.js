/**
 * $on(eventName)을 사용하여 이벤트를 감지 하십시오.
$emit(eventName)을 사용하여 이벤트를 트리거 하십시오.

`$on`은 자식에서 호출한 이벤트는 감지하지 않습니다. `v-on`을 템플릿에 반드시 지정해야 합니다. 아래의 예제를 보십시오.

 */


Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment') // 'increment' 이벤트를 부모 컴포넌트로 emit
      // increment 이벤트를 부모 컴포넌트로 emit하면 v-on에 정의된 increment 이벤트를 수신하고 incrementTotal 메서드를 호출
    }
  },
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

// 사용자 정의 컴포넌트 정의
Vue.component('my-component', {
  template: `
    <div>
      <button>Click me</button>
    </div>
  `
});

// Vue 인스턴스 생성
new Vue({
  el: '#native',
  methods: {
    doTheThing() {
      alert('Button was clicked!');
    }
  }
});

// 사용자 정의 컴포넌트 정의
Vue.component('my-component', {
  props: ['value'], // v-model 기본 prop 이름
  template: `
    <div>
      <input v-model="localValue" @input="updateValue" />
    </div>
  `,
  data: function () {
    return {
      localValue: this.value // prop의 초기 값을 로컬 데이터 속성으로 설정
    };
  },
  watch: {
    value: function (newValue) {
      this.localValue = newValue; // prop이 변경되면 로컬 데이터 속성도 업데이트
    }
  },
  methods: {
    updateValue: function () {
      // 로컬 데이터 속성의 변경을 부모 컴포넌트에 전송
      this.$emit('input', this.localValue);
    }
  }
});

new Vue({
  el: '#vmodel',
  data: {
    bar: 'Initial value' // 초기 데이터
  },
  methods: {
    changeBar() {
      this.bar = 'Updated value'; // 버튼 클릭 시 bar 값을 변경
    }
  }
});

Vue.component('custom-input', {
  props: ['value'], // v-model의 기본 prop 이름
  template: `
    <input
      :value="value"
      @input="updateInput"
    />
  `,
  methods: {
    updateInput(event) {
      // 입력 필드의 값이 변경될 때 부모에게 'input' 이벤트를 방출
      this.$emit('input', event.target.value);
    }
  }
});

new Vue({
  el: '#vmodel2',
  data: {
    something: 'Initial value'
  }
});

Vue.component('currency-input', {
  template: `
    <div>
      <label>{{ label }}: 
        <input
          ref="input"
          :value="formattedValue"
          @input="updateValue($event.target.value)"
        />
      </label>
      <p>{{ label }}: {{ formattedValue }}</p>
    </div>
  `,
  props: ['value', 'label'],
  data() {
    return {
      formattedValue: this.formatValue(this.value) // Initialize formattedValue
    };
  },
  methods: {
    formatValue(value) {
      return Number(value).toFixed(2); // Format value to 2 decimal places
    },
    updateValue(value) {
      // Format the input value
      let formattedValue = value
        .trim() // Remove leading and trailing whitespace
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.indexOf('.') + 3
        ); // Limit to 2 decimal places

      // Update input field if formattedValue differs from input
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue;
      }

      // Emit the formatted value to parent
      this.$emit('input', Number(formattedValue));
    }
  },
  watch: {
    value(newValue) {
      this.formattedValue = this.formatValue(newValue); // Update formattedValue when prop changes
    }
  }
});

new Vue({
  el: '#vmodel3',
  data: {
    price: 0,
    shipping: 0,
    handling: 0,
    discount: 0
  }
});

Vue.component('my-checkbox', {
  model: {
    // v-model이 my-checkbox 컴포넌트에 바인딩될 때 사용하는 prop의 이름입니다. 즉, 부모 컴포넌트는 v-model="foo"를 사용하여 foo 값을 checked prop으로 전달합니다.
    prop: 'checked',
    // my-checkbox 컴포넌트가 v-model을 업데이트하기 위해 방출할 이벤트의 이름입니다. 이 예제에서는 체크박스의 상태가 변경될 때 change 이벤트가 발생하여 부모 컴포넌트의 foo 값을 업데이트합니다.
    event: 'change'
  },
  props: {
    checked: Boolean,
    value: String
  },
  template: `
    <div>
      <label>
        <input
          type="checkbox"
          :checked="checked"
          @change="updateChecked($event.target.checked)"
        />
        {{ value }}
      </label>
    </div>
  `,
  methods: {
    updateChecked(checked) {
      this.$emit('change', checked);
    }
  }
});

// Vue 인스턴스 생성
new Vue({
  el: '#vmodel4',
  data: {
    foo: false // 초기값은 false로 설정
  },
  computed: {
    message() {
      return this.foo ? 'This is true!' : 'This is false!';
    }
  }
});
var bus = new Vue();

// 컴포넌트 A 정의
Vue.component('component-a', {
  template: `
    <div>
      <button @click="sendId">Send ID</button>
    </div>
  `,
  methods: {
    sendId() {
      // 이벤트 버스를 통해 'id-selected' 이벤트를 발생시킵니다
      bus.$emit('id-selected', 1);
    }
  }
});

// 컴포넌트 B 정의
Vue.component('component-b', {
  template: `
    <div>
      <p>Selected ID: {{ selectedId }}</p>
    </div>
  `,
  data() {
    return {
      selectedId: null
    };
  },
  created() {
    // 이벤트 버스에서 'id-selected' 이벤트를 수신하여 처리합니다
    bus.$on('id-selected', (id) => {
      this.selectedId = id;
    });
  }
});

// Vue 인스턴스 생성
new Vue({
  el: '#components'
});



Vue.component('app-header', {
  template: `
    <header>
      <div>
        <slot></slot> <!-- 'main' 슬롯 -->
      </div>
      <div>
        <slot></slot> <!-- 'sidebar' 슬롯 -->
      </div>
    </header>
  `
});

Vue.component('app-footer', {
  template: `
    <footer>
      <slot></slot> <!-- 기본 슬롯 -->
    </footer>
  `
});

Vue.component('app', {
  template: `
    <div>
      <app-header>
        <slot name="main"></slot>
        <slot name="sidebar"></slot>
      </app-header>
      <app-footer>
        <slot name="footer"></slot>
      </app-footer>
    </div>
  `
});

// Vue 인스턴스 생성
new Vue({
  el: '#multicomponent'
});

// 하위 컴포넌트
Vue.component('child-component', {
  template: '<div>{{ message }}</div>',
  data: function () {
    return {
      message: 'Hello from Child Component'
    }
  }
});

// 하위 컴포넌트
Vue.component('child-component-conditional', {
  template: '<div v-show="someChildProperty">Conditional Content</div>',
  data: function () {
    return {
      someChildProperty: true
    }
  }
});

// 상위 컴포넌트
Vue.component('parent-component', {
  template: `
    <div>
      <h1>Parent Component</h1>
      <child-component></child-component>
      <child-component-conditional></child-component-conditional>
    </div>
  `
});

new Vue({
  el: '#components2'
});

// 원래 <slot> 태그 안에 있는 내용은 대체 콘텐츠 로 간주됩니다. 대체 콘텐츠는 하위 범위에서 컴파일되며 호스팅 엘리먼트가 비어 있고 삽입할 콘텐츠가 없는 경우에만 표시됩니다.
Vue.component('my-component', {
  template: `
    <div>
      <h2>나는 자식 컴포넌트의 제목입니다</h2>
      <slot>
        제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.
      </slot>
    </div>
  `
});

// Vue 인스턴스 생성
new Vue({
  el: '#components3'
});

Vue.component('app-layout', {
  template: `
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
});

// Vue 인스턴스 생성
new Vue({
  el: '#components4'
});


Vue.component('parent-component', {
  template: `
    <div class="parent">
      <child-component>
        <template slot-scope="props">
          <span>hello from parent</span>
          <span>{{ props.text }}</span>
        </template>
      </child-component>
    </div>
  `
});

// Vue 인스턴스 생성
new Vue({
  el: '#components5'
});