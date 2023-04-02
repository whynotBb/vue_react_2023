<style scoped></style>

<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {};
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    showLog(e) {
      // debugger;
      console.log(e.target);
      this.$emit('showLog', 'abc', 123);
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
  },
};
</script>
