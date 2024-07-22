/**
 * `v-model`은 모든 form 엘리먼트의 초기 `value`와 `checked` 그리고 `selected` 속성을 무시합니다. 항상 Vue 인스턴스 데이터를 원본 소스로 취급합니다. 컴포넌트의 `data` 옵션 안에 있는 JavaScript에서 초기값을 선언해야합니다.

text 와 textarea 태그는 value속성과 input이벤트를 사용합니다.
체크박스들과 라디오버튼들은 checked 속성과 change 이벤트를 사용합니다.
Select 태그는 value를 prop으로, change를 이벤트로 사용합니다.
*/

let text1 = new Vue({
    el: '#text1',
    data: {
        message: 'this is message'
    }
})


let text2 = new Vue({
    el: '#text2',
    data: {
        message: 'this is message'
    }
})

/**
 * 하나의 체크박스는 단일 boolean 값을 가집니다.
 */
let checkbox1 = new Vue({
    el: '#checkbox1',
    data: {
        checked: false,
        content: 'this is check'
    }
})

let checkbox2 = new Vue({
    el: '#checkbox2',
    data: {
      checkedNames: []
    }
  })


/**
* picked를 빈 문자열('')로 초기화하여 단일 값을 저장하도록 설정합니다. 라디오 버튼은 사용자가 하나의 옵션만 선택할 수 있기 때문에, 이 값은 단일 문자열로 저장됩니다.
*/
let radio = new Vue({
    el: '#radio',
    data: {
        picked: ''
    }
})

let select1 = new Vue({
    el: '#select1',
    data: {
        selected: ''
    }
})

let select2 = new Vue({
    el: '#select2',
    data: {
        options: [
            {
                value: 'in list 1', 
                text: 'how to text1'
            },
            {
                value: 'in list 2', 
                text: 'how to text2'
            }, 
            {
                value: 'in list 3', 
                text: 'how to text3'
            }

        ],
        selected: []
    }
})

/**
 * // 선택 하면:
typeof vm.selected // -> 'object'
vm.selected.number // -> 123
 */
let select3 = new Vue({
    el: '#select3',
    data: {
        selected: '',

    }
})

let multi_select = new Vue({
    el: '#multi-select',
    data: {
        selected: []
    }
})

let input1 = new Vue({
    el: '#input1',
    data: {
        picked: '',
        toggle: '',
        selected: ''
    }
})

/**
 * 사용자가 입력 필드에서 타이핑을 마치고 포커스를 잃거나, 값을 제출할 때, 즉 change 이벤트가 발생할 때 msg 데이터 속성이 업데이트됩니다.
 */
let lazy = new Vue({
    el: '#lazy',
    data: {
        msg: 'this is text?'
    }
})

/**
 * type="number"를 사용하는 경우에도 HTML 입력 엘리먼트의 값은 항상 문자열을 반환하기 때문에 이것은 종종 유용하게 사용할 수 있습니다
 */
let number = new Vue({
    el: '#number',
    data: {
        age: 0
    }
})

/**
 * v-model이 관리하는 input을 자동으로 trim 하기 원하면, trim 수정자를 추가하면 됩니다.
 * 출력은 같은데 사용자 입력값일때 스페이스 없이 바로 갔다붙음
 */
let trim = new Vue({
    el: '#trim',
    data: {
        msg: 'this tis      ?     ',
        msg_not_trim: 'this tis      ?     '
    }
})