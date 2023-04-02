<style scoped></style>

<template>
  <div>
    Vue3501View
    <Vue3501Comp></Vue3501Comp>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue3501Comp from '../components/vue3501/Vue3501Comp.vue';
export default {
  components: {
    Vue3501Comp: Vue3501Comp,
  },
};
</script>
