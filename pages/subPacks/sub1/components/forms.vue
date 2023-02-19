<template>
  <view>
    <!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
    <u--form labelPosition="left" :model="form" :rules="rules" ref="uForm">
      <u-form-item label="姓名" prop="userInfo.name" borderBottom >
        <u--input v-model="form.userInfo.name" border="none"></u--input>
      </u-form-item>

      <u-form-item label="爱好" prop="userInfo.like" borderBottom >
        <uni-data-select v-model="form.userInfo.like" :localdata="range"></uni-data-select>
      </u-form-item>
    </u--form>

    <u-button @click="submit">提交</u-button>
  </view>
</template>

<script>
export default {
  data() {
    let self = this
    return {
      form: {
        userInfo: {
          name: 123,
          like:2,
        },
      },
      range: [
      { value: 0, text: "篮球" },
        { value: 1, text: "足球" },
        { value: 2, text: "游泳" },
      ],
      rules: {
        'userInfo.name': [
          {
            type: 'any',
            required: true,
            message: '请填写姓名',
            trigger: ['blur', 'change']
          },
          {
            validator: self.$validator.zhNUmEng,
            trigger: ['blur']
          }
        ],
        'userInfo.like': [
          {
            type: 'any',
            required: true,
            message: '请填写姓名',
            trigger: ['blur', 'change']
          }
        ]
      }
    };
  },
  
  onReady() {
    //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    this.$refs.uForm.setRules(this.rules)
  },
  methods: {
    submit() {

      console.log(uni.$u,"uni.$u")

			this.$refs.uForm.validate().then(res => {
        uni.$u.toast('校验通过')
      
			}).catch(errors => {
				uni.$u.toast('校验失败')
			})
		}
  },
};
</script>
