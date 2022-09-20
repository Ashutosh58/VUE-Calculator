<template>
  <div>
    <h1>Addition page</h1>
    <h2>Addition result :- {{ result }}</h2>    
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0,
    };
  },
  methods: {},
  mounted() {
    this.num1 = this.$route.params.num1;
    this.num2 = this.$route.params.num2;
    this.result = parseInt(this.num1) + parseInt(this.num2);
  },
};
</script>
  
  <style>
</style>