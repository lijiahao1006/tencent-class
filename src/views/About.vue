<template>
  <div>
    <h1>about</h1>
  </div>
</template>

<script>
import ListData from "../service/getListData";
const listdata = new ListData();

export default {
  data() {
    return {
      data1: null,
      data2: null,
    };
  },
  async mounted () {
    await this.getList();
    this.getCourse();
  },
  methods: {
    async getList() {
      await listdata.getListData()
      .then((data) => {
        this.data1 = data;
      })
      console.log('list1',this.data1)
    },
    async getCourse() {
      await listdata.getCourses('all')
      .then((data) => {
        this.data2 = data;
      })
      console.log('list2',this.data2)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>