<template>
  <div class="home">
    <h1>home</h1>
    <ul>
      <div id="box">123box</div>
      {{ a | guolu }}
      {{ b | guolu }}
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
      data2: null,
      a: 100,
      b: 200
    };
  },
  filters: {
    guolu(val) {
      if (val === 100) {
        return '我是a'
      }else{
        return 'my name is others'
      }
    }
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
