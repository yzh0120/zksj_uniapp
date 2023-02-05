<template>
  <div>

    <tit :titData="alldata.titData" @titToggle="titToggle"></tit>
    <item v-for="(item, index) in alldata.itemObj" :key="index" :list="item.list" :index="index"
      :isShow="alldata.titData[index].arrowUp" :item="item" @closeAll="closeAll"></item>
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
  data() {
    return {
      alldata: {
        titData: [
          {
            isCheck: false,
            tit: "项目A角",
            arrowUp: false,
          },
          {
            isCheck: false,
            tit: "操作方式",
            arrowUp: false,
          },
          {
            isCheck: false,
            tit: "更多",
            arrowUp: false,
          },

        ],
        itemObj: [
          {
            type: "block",
            fileld: "roleId",
            // isShow: false,
            list: [
              {
                isCheck: false,
                label: 1,
                value: 1,
              },
              {
                isCheck: false,
                label: 11,
                value: 11,
              },
              {
                isCheck: false,
                label: 111,
                value: 111,
              },
              {
                isCheck: false,
                label: 1111,
                value: 1111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              },
              {
                isCheck: false,
                label: 11111,
                value: 11111,
              }
            ],
          },
          {
            type: "inline",
            fileld: "planId",
            // isShow: false,
            list: [
              {
                isCheck: false,
                label: 10,
                value: 10,
              },
              {
                isCheck: false,
                label: 110,
                value: 110,
              },
              {
                isCheck: false,
                label: 1110,
                value: 1110,
              },
              {
                isCheck: false,
                label: 11110,
                value: 11110,
              },
              {
                isCheck: false,
                label: 111110,
                value: 111110,
              }
            ],
          },
          {
            type: "more",
            fileld: "more",
            label: "label",
            value:"value",
            list: [
              {
                isCheck: false,
                label: 222,
                value: 222,
                children: [
                  {
                    isCheck: false,
                    label: 2221110,
                    value: 2221110,
                  },
                  {
                    isCheck: false,
                    label: 22211110,
                    value: 22211110,
                  },
                  {
                    isCheck: false,
                    label: 222111110,
                    value: 222111110,
                  }
                ]
              },
              {
                isCheck: false,
                label: 444,
                value: 444,
                children: [
                  {
                    isCheck: false,
                    label: 4441110,
                    value: 4441110,
                  },
                  {
                    isCheck: false,
                    label: 44411110,
                    value: 44411110,
                  },
                  {
                    isCheck: false,
                    label: 444111110,
                    value: 444111110,
                  }
                ]
              },

            ],
          }
        ]
      }
    }
  },
  methods: {
    closeAll() {
      this.alldata.titData.forEach((e) => {
        e.arrowUp = false
      })
    },
    titToggle(e) {
      let temp = !this.alldata.titData[e.index].arrowUp
      this.alldata.titData.forEach((e) => {
        e.arrowUp = false
      })
      this.alldata.titData[e.index].arrowUp = temp
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
