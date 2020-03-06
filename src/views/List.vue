<template>
  <div>
    <Tree @on-check-change="tree" ref="aaa" :data="data3" :load-data="loadData" show-checkbox></Tree>
    <Button @click="get">1234</Button>
  </div>
</template>

<script>
import SelfData from "../service/getselfData";
const selfData = new SelfData();

export default {
  data() {
    return {
      city: null,
      data3: [
        {
          title: '北京',
          loading: false,
          children: [],
          type: 'city'
        },
        {
          title: '上海',
          loading: false,
          children: [],
          type: 'city'
        },
      ],
    };
  },
  methods: {
    get() {
      console.log(this.$refs.aaa.getCheckedNodes())
    },
    tree(e) {
      console.log(e);
    },
    // ajax
    async getapi(name, callback) {
      await selfData.getself(name)
      .then((data) => {
        callback(data.map((item) => ({
            type: 'bumen',
            id: item.did,
            title: item.name,
            loading: false,
            children: []
        })));
      })
    },
    // tree
    loadData (item, callback) {
      if(item.type === 'city'){
        let field = 'n='+item.title;
        // 因异步拉数据，故接口函数内处理tree的回调函数
        this.getapi(field, callback);

      }else if(item.type === "bumen"){
        let field = 'id='+item.id;
        this.getapi(field, callback);
      }
      }
  },
};
</script>

<style lang="scss" scoped>
</style>