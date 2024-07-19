let class0 = new Vue({
  el: '#class0',
  data: {
      isActive: true,
      hasError: false
  },
  methods: {
      toggleActive() {
          this.isActive = !this.isActive;
      },
      toggleError() {
          this.hasError = !this.hasError;
      }
  }
});

let class1 = new Vue({
  el: '#class1',
  data: {
      isActive: true,
      hasError: false
  },
  methods: {
      toggleActive() {
          this.isActive = !this.isActive;
      },
      toggleError() {
          this.hasError = !this.hasError;
      }
  }
});

let class2 = new Vue({
  el: '#class2',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
});

let class3 = new Vue({
  el: '#class3',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
});

let class4 = new Vue({
  el: '#class4',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
});

let class5 = new Vue({
  el: '#class5',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
});


let style1 = new Vue({
  el: '#style1',
  data: {
    activeColor: 'red',
    fontSize: 30
  }
});

let style2 = new Vue({
  el: '#style2',
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
});

let style3 = new Vue({
  el: '#style3',
  data: {
    baseStyles: {
      color: 'gray'
    },
    overridingStyles: {
      fontSize: '45px'
    }
  }
});
