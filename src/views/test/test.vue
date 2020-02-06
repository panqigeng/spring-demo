<template>
  <div class="block">
    <el-button type="primary" @click="geturlAll">主要按钮</el-button>
    <el-row :gutter="24">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <!-- <el-image :src="imgUrl">
          </el-image> -->
          <div>全国确诊人数：{{this.overall.confirmedCount}}</div>
          <div>疑似感染人数：{{this.overall.suspectedCount}}</div>
          <div>治愈人数：{{this.overall.curedCount}}</div>
          <div>死亡人数：{{this.overall.deadCount}}</div>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple">sdd</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">ff</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">gg</div></el-col>
    </el-row>
    
  </div>
</template>
<script>
import { geturlAll } from '@/api/test'
export default {
 data() {
    return {
      overall:{
        confirmedCount:"",	//确诊人数
        suspectedCount:"",	//疑似感染人数
        curedCount:"",	//治愈人数
        deadCount:"", //死亡人数
        imgUrl:""
      },
      
    }
  },
  created() {
   this.geturlAll();
  },
  methods: {
    geturlAll(){
      geturlAll("1").then(response => {
          debugger
          this.overall.confirmedCount=response.data.results[0].confirmedCount
          this.overall.suspectedCount=response.data.results[0].suspectedCount
          this.overall.curedCount=response.data.results[0].curedCount
          this.overall.deadCount=response.data.results[0].deadCount
          // var words = sentence.split(',')
          // this.imgUrl=words[0]
      }).catch(err => {
        console.log(err)
      })
   }
  }
}
</script>

<style>

</style>
