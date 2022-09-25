<template>
  <div class="position-relative" id="app">
    <ram-nav-menu/>
    <div v-if="loading" class="text-center justify-content-center d-flex align-items-center" style="top:100%; height:100vh;">
        <b-spinner variant="success"></b-spinner>
    </div>
    <router-view v-show="!loading" />
    <ram-footer />
  </div>
</template>
<script>
import RamNavMenu from "@/components/general/RamNavMenu.vue";
import RamFooter from "@/components/general/RamFooter.vue";

export default {
  components: {
    RamNavMenu,
    RamFooter,
  },
  computed:{
    loading(){
      return this.$store.getters.getLoading;
    }
  }
};
</script>
<style lang="scss">
  
</style>
