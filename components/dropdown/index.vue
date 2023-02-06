<template>
  <div>
    
    <tit :titData="alldata.titData" @titToggle="titToggle"></tit>
    <item v-for="(item, index) in alldata.itemObj" :key="index" :list="item.list" :index="index"
      :isShow="alldata.titData[index].arrowUp" :item="item" @closeAll="closeAll" @select="select"></item>
  </div>
</template>

<script>
import tit from "./tit.vue"
import item from "./item.vue"
export default {
  components: {
    tit,
    item
  },
  props: {
    alldata: {
      type: Object,
      default: () => { 
        return {}
      }
    }
  },
  data() {
    return {
      valueObj: {},
      
    }
  },
  methods: {
    //select
    select(e) { 
      this.$set(this.valueObj, e.field, e.value)
      console.log(this.valueObj)
    },
    //关闭所有
    closeAll() {
      this.alldata.titData.forEach((e) => {
        e.arrowUp = false
      })

      this.$emit("upalldata",this.alldata)
    },
    //标题切换
    titToggle(e) {
      let temp = !this.alldata.titData[e.index].arrowUp
      this.alldata.titData.forEach((e) => {
        e.arrowUp = false
      })
      this.alldata.titData[e.index].arrowUp = temp

      this.$emit("upalldata",this.alldata)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
