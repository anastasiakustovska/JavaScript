<template>
  <div class="test">
    {{ test }}
    <h1 v-if="num % 3 == 1">{{ num }}</h1>
    <h1 v-else-if="num % 3 == 2" style="color: green">{{ num }}</h1>
    <h1 v-else style="color: red">{{ num }}</h1>
    <h1 v-show="num % 3 == 1" style="color: purple">{{ num }}</h1>
    <button @click="changeNum">Press</button>
    <h2>Name: {{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "no image",
    },
  },
  data() {
    return {
      test: "test text",
      num: 1,
    };
  },
  computed: {
    newTest() {
      return this.test + "!!!!!";
    },
  },
  watch: {
    test(newVal, oldVal) {
      console.log("newVal", newVal, "oldVal", oldVal);
    },
  },

  methods: {
    upperCaseTest(txt) {
      this.test = txt.toUpperCase();
      // return txt.toUpperCase()
    },
    changeNum() {
      this.num += 1;
    },
    // pressBtn() {
    //   this.changeNum()
    //   // this.upperCaseTest('New text')
    // }
  },
};
</script>

<style></style>
