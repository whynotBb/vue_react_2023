<style scoped>
header {
  text-align: center;
  height: 60px;
}

section {
  text-align: center;
  height: 150px;
}

footer {
  text-align: center;
  height: 60px;
}

/* step2. 배경색 지정*/
header {
  background-color: #efb14e;
}

section {
  background-color: #95db5e;
}

footer {
  background-color: #78d0d1;
}

/* step3. 여백 주기 - margin , padding */
header {
  margin: 0 0 20px 0;
}

section {
  margin: 40px 20px;
}

div {
  margin: 40px 20px;
}
</style>

<template>
  <div>
    <HeaderComp></HeaderComp>
    <section id="page1" data-role="page">
      <div class="content" data-role="content">컨텐츠</div>
    </section>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import HeaderComp from './HeaderComp.vue';
import FooterComp from './FooterComp.vue';
export default {
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    HeaderComp: HeaderComp,
    FooterComp: FooterComp,
  },
};
</script>
