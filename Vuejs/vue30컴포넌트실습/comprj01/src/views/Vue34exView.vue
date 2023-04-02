<style scoped></style>

<template>
  <div id="app">
    <Vue34exParent></Vue34exParent>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue34exParent from '../components/vue34ex/Vue34exParent.vue';
export default {
  components: {
    Vue34exParent: Vue34exParent,
  },
};
</script>
