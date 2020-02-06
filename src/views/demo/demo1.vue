<template>
  <div>
    <eltreeSelect :checkedKeys="defaultCheckedKeys" :options="this.data"></eltreeSelect>
  </div>
</template>
<script>
import eltreeSelect from './eltreeSelect'
export default {
    components: { eltreeSelect },
 data() {
    return {
       data: [{
          path:"1",
          orgName: '一级 1',
          children: [{
            path:"2",
            orgName: '二级 1-1',
            children: [{
              path:"3",
              orgName: '三级 1-1-1'
            }]
          }]
        }],
        defaultCheckedKeys: []
      }
    },
  created () {
    // 组建中增加了监听数据变化的，
    // 此处初始化defaultCheckedKeys的值，有效果
    this.defaultCheckedKeys = ["1"];
  },
}
</script>
<style>

</style>