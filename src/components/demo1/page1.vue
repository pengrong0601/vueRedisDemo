<template>
  <div>
    <div class="input-div" contenteditable placeholder="请输入电话号码" v-on:input="change"></div>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="look(index)">
        {{index}}
      </li>
      <input type="text" v-model="pars.inputVal">
      <select v-model="pars.selectVal">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="setPars">添加搜索条件</button>
      <button @click="getList">添加数据</button>
      <button @click="click">进入下一页</button>
      <button @click="goBack">返回上一页</button>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      msg: '页面一',
      list: [],
      pars: {
        inputVal: '1',
        selectVal: '1'
      }
    }
  },
  methods: {
    click () {
      this.$router.push('/page2')
    },
    goBack () {
      this.$router.go(-1)
    },
    getList () {
      for (let i = 0; i <= 10; i++) {
        this.list.push(1)
      }
    },
    look (index) {
      this.$router.push({
        path: '/page2',
        query: {
          id: index
        }
      })
    },
    change (e) {
      if (e.target.innerText.length > 10) {
        e.target.innerText = e.target.innerText.substring(0, 10)
        let range = ''
        if (window.getSelection) {
          range = window.getSelection()
          range.selectAllChildren(e.target)
          range.collapseToEnd()
        } else {
          range = document.selection.createRange()
          range.moveToElementText(e.target)
          range.collapse(false)
          range.select()
        }
      }
    },
    setPars () {
      this.$store.dispatch('save_list_page_pars', {
        path: this.$route.path,
        pars: this.pars
      })
    }
  },
  mounted () {
    this.getList()
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (from.name === 'HelloWorld') {
        vm.list = []
        vm.getList()
      } else if (from.name === 'Page2') {
        console.log(vm.$store.state.listPagePars.get(vm.$route.path))
        vm.pars = vm.$store.state.listPagePars.get(vm.$route.path)
      }
    })
  },
  created () {
  }
}
</script>
<style lang="less" scoped>

</style>
