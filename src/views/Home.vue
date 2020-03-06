<template>
  <div class="home">
    <h1>home</h1>
    <ul>
      <li style="height:30px;" v-for="i in 100" :key="i">{{i}}</li>
      <div id="box">123box</div>
    </ul>
  </div>
</template>

<script>
import IndexData from "../service/getIndexData";
import NewsData from "../service/wynews";
const indexdata = new IndexData();
const newsdata = new NewsData();

export default {
  name: "Home",
  data() {
    return {
      data: null,
      data2: null
    };
  },
  async mounted() {
    await this.getCourseData();
    this.NewsData()
  },
  methods: {
    async getCourseData() {
      await indexdata.getIndexData().then(data => {
        this.data = data;
        // console.log("index", this.data);
      });
    },
    async NewsData() {
      await newsdata.NewsData().then(data => {
        this.data2 = data;
        // console.log("index", this.data);
        // console.log("news", this.data2);
      });
    }
  }
};
</script>
