<template>
  <div>
123
  </div>
</template>

<script>
export default {
  onLoad() {
    console.log("页面加载")
   },
  onShow() {
    console.log("页面在页面栈最前面")
    uni.navigateTo({
							url: '/pages/subPacks/sub1/list'
		})
   },
  onHide() { 
    console.log("页面隐藏")
  },
  onUnload() { 
    console.log("页面卸载")
  },
}
</script>

<style lang="scss" >

</style>
