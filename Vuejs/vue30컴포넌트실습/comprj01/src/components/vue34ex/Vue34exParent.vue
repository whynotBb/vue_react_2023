<style scoped>
.component-parent {
  width: 50%;
  background-color: lightblue;
  padding: 5%;
}
.component-child {
  width: 80%;
  background-color: lightgray;
  padding: 5% 5% 10% 0;
}
</style>

<template>
  <div id="app" class="component-parent">
    Parent counter : {{ counter }} <br />
    <button name="parent" v-on:click="addCounter(+10)">+</button>
    <button name="parent" v-on:click="subCounter(-10)">-</button>
    <p></p>

    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <Vue34exChild
      v-bind:num="counter"
      v-on:addCounter="addCounter"
      v-on:subCounter="subCounter"
    >
    </Vue34exChild>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue34exChild from './Vue34exChild.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      counter: 0,
      num: '',
    };
  },
  methods: {
    addCounter(param) {
      console.log(param);
      this.$data.counter = this.$data.counter + param;
    },
    subCounter(param) {
      console.log(param);
      this.$data.counter = this.$data.counter + param;
    },
  },
  components: {
    Vue34exChild: Vue34exChild,
  },
};
</script>
