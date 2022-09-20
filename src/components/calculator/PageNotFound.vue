<template>
  <div class="page">
    <!-- <h1 id="PageNotFound">404 Oops</h1> -->
    <img src="https://cdn2.avada.io/media/resources/z4NGpcC.png" alt="Page Not Found"/>    
  </div>
</template>
  
  <script>
export default {
    name: "PageNotFound",
  data() {
    
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
#PageNotFound{
    color: darkred;
    font-size: 100px;
}
img{
    height: 110px;
    width: 350px;
    border-radius: 5px;
}


</style>