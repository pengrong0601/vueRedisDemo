<template>
  <div>
    id:{{ userid }}
    <button @click="click">返回上一页</button>
    <input type="text" v-model="value">
    <p>{{ value1 }}</p>
  </div>
</template>
<script>
import _ from 'lodash'
export default {
  name: '',
  data () {
    return {
      msg: '页面二',
      userid: '',
      value: '',
      value1: 'dsadsa'
    }
  },
  methods: {
    click () {
      this.$router.go(-1)
    },
    getData: _.debounce(
      function (newVal) {
        this.value1 = newVal
      }, 500
    )
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.userid = vm.$route.query.id
    })
  },
  mounted () {
    this.userid = this.$route.query.id
  },
  watch: {
    value: function (newVal) {
      this.value1 = '输入中。。。'
      this.getData(newVal)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
