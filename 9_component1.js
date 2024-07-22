Vue.component('my-component1', {
template: '<div><p></p>사용자 정의 컴포넌트 입니다!111111</div>'
})

// 루트 인스턴스 생성
new Vue({
    el: '#example'
})

var Child = {
    template: '<div><p></p>사용자 정의 컴포넌트 입니다!222222</div>'
}

new Vue({
    el: '#example2',
    components: {
      // <my-component> 는 상위 템플릿에서만 사용할 수 있습니다.
      'my-component2': Child
    }
})

Vue.component('my-row', {
    props: ['test'],
    template: `
      <tr>
        <td>{{ test.id }}</td>
        <td>{{ test.name }}</td>
        <td>{{ test.age }}</td>
      </tr>
    `
  });

// :data="row": row 객체를 my-row 컴포넌트에 data prop으로 전달합니다.
  new Vue({
    el: '#app',
    data: {
      rows: [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 }
      ]
    }
  });


// 한가지 특별한 경우가 있습니다. data 는 함수여야 합니다
// Vue.component('my-component3', {
//     template: '<span>{{ message }}</span>',

// })

// new Vue({
//     el: '#app1',
//     data: {
//         message: 'vue 인스턴스의 하위 message는 컴포넌트가 아니라 하위 인스턴스에서만 사용 가능함'
//     }
// })

var counterlet = { counter: 0 }

Vue.component('simple-counter1', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
  // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
  data: function () {
    return counterlet
  }
})

new Vue({
  el: '#counter1'
})

//data 객체를 공유하므로 하나의 카운터를 증가 시키면 모두 증가합니다! 대신 새로운 데이터 객체를 반환하여 이 문제를 해결합시다.

Vue.component('simple-counter2', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // 데이터는 기술적으로 함수이므로 Vue는 따지지 않지만
  // 각 컴포넌트 인스턴스에 대해 같은 객체 참조를 반환합니다.
  data: function () {
    return { counter: 0 }
  }
})

new Vue({
  el: '#counter2'
})


Vue.component('child', {
    // props로 부모 컴포넌트의 message 전달 받음, 여기서는 div
    props: ['message'],
    // 데이터와 마찬가지로 prop은 템플릿 내부에서 사용할 수 있으며
    // vm의 this.message로 사용할 수 있습니다.
    template: '<span>{{ message }}</span>'
})

 // 부모 컴포넌트를 포함하는 Vue 인스턴스 정의
new Vue({
    el: '#child1'
});

Vue.component('child2', {
    // JavaScript는 camelCase
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})

new Vue({
    el: '#child2'
})


Vue.component('child3', {
    // JavaScript는 camelCase
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})
new Vue({
    el: '#parent1',
    data: {
        parentMsg: 'parent message!'
    }
})

Vue.component('todo-item', {
    props: ['text', 'isComplete'],
    template: '<span>{{ text }} - {{ isComplete }}</span>'
  });
new Vue({
    el: '#parent2',
    data: {
        todo: {
            text: 'Learn Vue',
            isComplete: false
        }
    }
})


Vue.component('comp', {
    props: ['someProp'],
    template: '<div> {{ someProp }} {{ typeof someProp }} </div>',
})

new Vue({
    el: '#prop1',
    data: {
        someProp: 0
    }
})

Vue.component('counter', {
    props: ['initialCounter'],
    data: function () {
      // prop을 초기 값으로 사용하여 로컬 데이터 속성을 설정합니다
      return { counter: this.initialCounter }
    },
    template: `
      <div>
        <button v-on:click="counter += 1">{{ counter }}</button>
      </div>
    `
})

// Text-transform 컴포넌트 정의
Vue.component('text-transform', {
    props: ['text'],
    computed: {
        normalizedText: function () {
        return this.text.trim().toLowerCase();
        }
    },
    template: `
        <div>{{ normalizedText }}</div>
    `
});

new Vue({
    el: '#component1',
    data: {
        message: '   MESSGAE   '  // 이 데이터가 하위 컴포넌트에 전달됩니다
}
});

/**
 * 
type은 다음 네이티브 생성자 중 하나를 사용할 수 있습니다.

String
Number
Boolean
Function
Object
Array
Symbol
 */
Vue.component('example', {
    props: {
      propA: Number,
      propB: [String, Number],
      propC: {
        type: String,
        required: true
      },
      propD: {
        type: Number,
        default: 100
      },
      propE: {
        type: Object,
        default: function () {
          return { message: 'hello' }
        }
      },
      propF: {
        validator: function (value) {
          return value > 10;
        }
      }
    },
    template: `
      <div>
        <p>propA: {{ propA }}</p>
        <p>propB: {{ propB }}</p>
        <p>propC: {{ propC }}</p>
        <p>propD: {{ propD }}</p>
        <p>propE: {{ propE.message }}</p>
        <p>propF: {{ propF }}</p>
      </div>
    `
  });

  new Vue({
    el: '#prop_type'
  });