<template>
   <!--地图容器-->
<div id="myMap" class="myMapClass" ref="myMap"></div>
</template>
<script>
export default {
 mounted(){
       this.initMap()
   },
methods:{
     initMap () {
       this.createMap() ; //创建地图
       this.setMapEvent();//设置地图事件
       this.addMapControl();//向地图添加控件
       this.addMarker();//向地图中添加marker
     },
     createMap(){
       var map = new BMap.Map(this.$refs.myMap);//在百度地图容器中创建一个地图
       var point = new BMap.Point(113.312213,23.147267);//定义一个中心点坐标
       map.centerAndZoom(point,13);//设定地图的中心点和坐标并将地图显示在地图容器中
       window.map = map;//将map变量存储在全局
     },
     setMapEvent(){
       map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
       map.enableScrollWheelZoom();//启用地图滚轮放大缩小
       map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
       map.enableKeyboard();//启用键盘上下左右键移动地图
     },
     addMapControl(){
       //向地图中添加缩放控件
       var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
       map.addControl(ctrl_nav);
       //向地图中添加缩略图控件
       var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
       map.addControl(ctrl_ove);
       //向地图中添加比例尺控件
       var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
       map.addControl(ctrl_sca);
     },
     addMarker(){
       var markerArr = [//地址数据
         { title: "苏州有限公司",point: "113.264531|23.157003",address: "工业园区",tel:"10086",contact: "陈先生"},
         { title: "南京有限公司",point: "113.330934|23.113401",address: "相城区",tel:"12306",contact: "陈先生"},
         { title: "上海有限公司",point: "113.310854|23.113605",address: "外滩",tel:"0521846555",contact: "陈先生"}
       ]

       var point = new Array();//定义数组标注经纬信息

       var marker = new Array();//定义数组点对象信息

       var info = new Array();//定义悬浮提示信息


       for(var i = 0; i < markerArr.length; i++){//遍历
         var infoA = markerArr[i].point.split("|")[0];//分割|
         var infoB = markerArr[i].point.split("|")[1];

         point[i] = new window.BMap.Point(infoA,infoB);

         marker[i] = new window.BMap.Marker(point[i]);

         map.addOverlay(marker[i]);
         marker[i].setAnimation(BMAP_ANIMATION_BOUNCE);

         var label = new window.BMap.Label(markerArr[i].title,{offset: new window.BMap.Size(20,-10)});
         marker[i].setLabel(label);

         info[i] = new window.BMap.InfoWindow("<p style='font-size:12px;line-height:1.8em;'" + markerArr[i].title + "</br>地址：" + markerArr[i].address + "</br> 电话：" + markerArr[i].tel + "</br> 联系人：" + markerArr[i].contact+"</p>");//悬浮提示信息
       }
       marker[0].addEventListener("mouseover",function(){
         this.openInfoWindow(info[0]);//悬浮监听提示方法
       });
       marker[1].addEventListener("mouseover",function(){
         this.openInfoWindow(info[1]);//悬浮监听提示方法
       });
       marker[2].addEventListener("mouseover",function(){
         this.openInfoWindow(info[2]);//悬浮监听提示方法
       });
     }
}
}
</script>
<style>
.myMapClass{
    width: 100%;
    height: 400px;
  }
</style>


