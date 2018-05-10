<template>
  <div class="hello">
    <h1 class="h1">{{ msg }}</h1>
    <h1 class="h2">{{ msg }}</h1>
    <h1 class="h3">{{ msg }}</h1>
    <input type="text" v-model="massage">
    <h1 class="h3">{{ reversedMassage }}</h1>
    <h1 class="h3">{{ url }}</h1>
    <h1 class="h3">{{ codeText }}</h1>
    <button @click="click1">实现路由返回页面不刷新</button>
    <button @click="click2(1,2,3)">通过arguments获取参数</button>
  </div>
</template>

<script>
import { allUrl, codes } from './publicJs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '首页',
      url: '',
      codeText: '',
      massage1: 'say:',
      massage: ''
    }
  },
  computed: {
    reversedMassage: {
      get () {
        return `${this.massage1}${this.massage}`
      }
    }
  },
  methods: {
    click1 () {
      this.$router.push('/page1')
    },
    click2 () {
      // console.log(arguments)
    }
  },
  mounted () {
    const code = '500'
    this.url = `${allUrl.a}`
    this.codeText = `${codes[code]}`
    // let arr = [1, 2, 1, 1, 3]
    // console.log(this.unique(arr))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/publicCss/index.less";
  .hello{
    .h1{
      font-size: @fint-size;
      color: @color;
    }
    .h2{
      font-size: @fint-size + 2px;
      color: @color;
    }
    .h3{
      font-size: @fint-size + 4px;
      color: @color;
    }
  }
</style>
