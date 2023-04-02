<style scoped></style>

<template>
  <div id="app">
    <h2>컴포넌트 등록</h2>
    <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
    <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue3103Comp from '../components/vue3103/Vue3103Comp.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      localmsg1: '부모 컴포넌트에서 자식컴포넌트로 넘겨진 메시지 1',
      localmsg2: '부모 컴포넌트에서 자식컴포넌트로 넘겨진 메시지 2',
    };
  },
  components: {
    Vue3103Comp: Vue3103Comp,
  },
};
</script>
