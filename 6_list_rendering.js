let for1 = new Vue({
  el: '#for1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var for2 = new Vue({
  el: '#for2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})


// 객체를 반복할 때 순서는 `Object.keys()`의 키 나열 순서에 따라 결정됩니다. 이 순서는 JavaScript 엔진 구현간에 **일관적이지는 않습니다.**
let for3 = new Vue({
  el: '#for3',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})

/* 
key 속성의 필요성
key는 각 항목을 고유하게 식별하는 방법입니다. 이게 왜 중요한지 살펴볼까요?

목록이 바뀔 때:

예를 들어, 목록의 순서가 바뀌거나 항목이 추가되거나 제거될 때 Vue는 key를 사용해서 어떤 항목이 변경되었는지 파악합니다.
key를 사용하면 Vue는 기존의 항목을 기억하고, 변동된 부분만 업데이트하여 효율적으로 화면을 업데이트할 수 있습니다.
key 없으면:

key를 사용하지 않으면, Vue는 어떤 항목이 변경되었는지 알 수 없어서 목록을 업데이트할 때 모든 항목을 다시 그려야 할 수 있습니다. 이로 인해 성능이 저하될 수 있습니다.
가능하면 언제나 v-for에 key를 추가하는 것이 좋습니다.

객체나 배열처럼, 기본 타입(Primitive value)이 아닌 값을 키로 사용해서는 안됩니다. 대신 문자열이나 숫자를 사용하세요.
*/
let for4 = new Vue({
  el: '#for4',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

/*
변이 메소드는 배열의 내용을 직접 변경하는 메소드입니다.
Vue.js는 이러한 메소드들을 감지하여 배열이 변경될 때 화면을 자동으로 업데이트합니다.
주요 변이 메소드에는 push(), pop(), shift(), unshift(), splice(), sort(), reverse()가 있습니다.
이름에서 알 수 있듯 변이 메소드는 호출된 원본 배열을 변형
*/

let method1 = new Vue({
  el: '#method1',
  data: {
    items: [1, 2, 3]
  },
  methods: {
    addItem() {
      this.items.push(4); // 배열의 끝에 4를 추가
    }
  }
});

/*
filter(), concat() 와 slice() 입니다. 이 방법을 사용하면 원본 배열을 변형하지 않고 항상 새 배열을 반환합니다. 변형이 없는 방법으로 작업할 때 이전 배열을 새 배열로 바꿀 수 있습니다.
*/

let method2 = new Vue({
  el: '#method2',
  data: {
    items: [
      { id: 1, message: 'Foo bar' },
      { id: 2, message: 'Bar baz' },
      { id: 3, message: 'Foo baz' },
      { id: 4, message: 'Baz qux' }
    ]
  },
  methods: {
    filterItems() {
      // 원본 배열을 변형하지 않고 새로운 배열을 생성
      this.items = this.items.filter(function(item) {
        return item.message.match(/Foo/);
      });
    }
  }
});

/*
JavaScript의 제한으로 인해 Vue는 배열에 대해 다음과 같은 변경 사항을 감지할 수 없습니다.

인덱스로 배열에 있는 항목을 직접 설정하는 경우, 예: vm.items[indexOfItem] = newValue
배열 길이를 수정하는 경우, 예: vm.items.length = newLength
예시:

var vm = new Vue({
  data: {
    items: ['a', 'b', 'c']
  }
})
vm.items[1] = 'x' // reactive하지 않음
vm.items.length = 2 // reactive하지 않음

Vue.set() 또는 vm.$set() 메소드를 사용하여 Vue의 반응형 시스템이 변화를 감지하도록 합니다.

[인덱스 통해 변경하는거 해결 대체]
Vue.set(vm.items, 1, 'x')
vm.$set(vm.items, 1, 'x')

[배열 길이 변경하는거 해결 대체]
Array.prototype.splice() 메소드를 사용하여 배열을 변경합니다.
vm.items.splice(1, 1, 'x')
*/

/*
모던 JavaScript의 한계로 Vue는 속성 추가 및 삭제를 감지하지 못합니다. 예를들어,

var vm = new Vue({
  data: {
    a: 1
  }
})
// `vm.a` 는 반응형입니다.

vm.b = 2
// `vm.b` 는 반응형이 아닙니다.

*/

/*
Vue는 이미 만들어진 인스턴스에 새로운 루트레벨의 반응형 속성을 동적으로 추가하는 것을 허용하지 않습니다. 그러나 Vue.set(object, propertyName, value) 메소드를 사용하여 중첩된 객체에 반응형 속성을 추가할 수 있습니다.

var vm = new Vue({
  data: {
    userProfile: {
      name: 'Anika'
    }
  }
})
다음과 같이 중첩된 userProfile 객체에 새로운 속성 age를 추가합니다.

Vue.set(vm.userProfile, 'age', 27)
vm.$set(vm.userProfile, 'age', 27)

Object.assign()이나 _.extend()를 사용해 기존의 객체에 새 속성을 할당할 수 있습니다. 이 경우 두 객체의 속성을 사용해 새 객체를 만들어야 합니다.

Object.assign(vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
새로운 반응형 속성을 다음과 같이 추가합니다.
기존에 속성 있으면 오버라이딩되고 없으면 추가됨 
기존 객체 수정: vm.userProfile의 기존 객체를 직접 수정

vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
Object.assign({}, vm.userProfile, {...})을 통해 새 객체를 생성하고, 기존의 vm.userProfile 객체는 변경되지 않음
*/

/* 
 원본 데이터를 실제로 변경하거나 재설정하지 않고 배열의 필터링 된 버전이나 정렬된 버전을 표시
methods: 호출 시 작업을 수행하는 함수들. 직접 호출되며 데이터 변화를 감지하지 않음.
computed: 계산된 데이터를 제공하며, 종속 데이터가 변경될 때만 재계산됨. 캐싱되어 성능을 최적화함.
watch: 데이터의 변화를 감지하고, 변화에 따라 특정 작업을 수행함. 비동기 작업과 같은 사이드 이펙트 처리에 적합함.
 */

let method3 = new Vue({
  el: '#method3',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
});

/**
 * 계산된 속성을 실행할 수 없는 상황(예: 중첩 된 v-for 루프 내부)에서는 다음 방법을 사용할 수 있습니다.
  중첩된 v-for 루프의 경우, 만약 v-for의 내부에서 계산된 속성에 접근한다면, Vue는 그 계산된 속성을 다시 계산하거나 갱신하는데 어려움을 겪을 수 있습니다. 특히 데이터가 동적으로 변화할 때, Vue가 최적화된 방식으로 처리하지 못할 수 있습니다.
계산된 속성은 상위 레벨에서 잘 작동하지만, 중첩된 루프나 복잡한 UI 구조에서는 메소드 호출을 통해 직접적으로 데이터를 다루는 것이 더 명확할 수 있습니다.
*/
let method4 = new Vue({
  el: '#method4',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
});

let method5 = new Vue({
  el: '#method5',
  data: {
  }
})

let method6 = new Vue({
  el: '#method6',
  data: {
    items: [
      { msg: 'Item 1' },
      { msg: 'Item 2' },
      { msg: 'Item 3' },
      { msg: 'Item 4' }
    ]
  }
});

/**
 * v-if 와 v-for 를 동시에 사용하는 것을 추천하지 않습니다. 스타일가이드에서 자세한 내용을 확인하세요.

동일한 노드에 두가지 모두 있다면, v-for가 v-if보다 높은 우선순위를 갖습니다. 즉, v-if는 루프가 반복될 때마다 실행됩니다. 이는 일부 항목만 렌더링 하려는 경우 유용합니다.
 */

let method7 = new Vue({
  el: '#method7',
  data: {
    todos: [
      {
        name: 'todo1',
        isComplete: true
      },
      {
        name: 'todo2',
        isComplete: true
      },
      {
        name: 'todo3',
        isComplete: false
      },
      {
        name: 'todo4',
        isComplete: false
      },
    ]
  }
})

let method8 = new Vue({
  el: '#method8',
  data: {
    todos: [
      {
        name: 'todo1',
        isComplete: true
      },
      {
        name: 'todo2',
        isComplete: true
      },
      {
        name: 'todo3',
        isComplete: true
      },
      {
        name: 'todo4',
        isComplete: true
      },
    ]
  }
})