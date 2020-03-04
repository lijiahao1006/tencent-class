<template>
  <div class="home">
    <h1>home</h1>

  </div>
</template>

<script>
import IndexData from "../service/getIndexData";
const indexdata = new IndexData();

export default {
  name: "Home",
  data() {
    return {
      data: null
    };
  },
  mounted() {
    this.getCourseData();
  },
  methods: {
    async getCourseData() {
      await indexdata.getIndexData().then(data => {
        this.data = data;
        console.log("index", this.data);
      });
    }
  }
};
</script>
