<style scoped></style>

<template>
  <div class="component-child">
    Child counter : {{ num }} <br />
    <button name="child" v-on:click="addCounter">+</button>
    <button name="child" v-on:click="subCounter">-</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: ['num'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {};
  },
  methods: {
    addCounter(e) {
      console.log(e.target);
      //부모에게 이벤트 발생시키고 인자 넘기기
      //this.$emit('이벤트명',값)
      this.$emit('addCounter', 1);
    },
    subCounter(e) {
      console.log(e.target);
      this.$emit('subCounter', -1);
    },
  },
};
</script>
