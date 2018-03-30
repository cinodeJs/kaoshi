<template>
  <div>
      <div id="box">
          <div id="top">
              <button @click="tt">增加</button>
          </div>
          
          <ul v-for="(i,index) in arr" id="ul">
              <li>{{i.tit}}</li>
              <h5>{{i.con | he}}</h5>
              <button id="shan">删除</button>
          </ul>
      </div>
      <div id="box1">
          <input type="text" name="" id="tit"><br>
          <input type="text" name="" id="con"><br>
          <button id="tijiao" @click="tian">点击添加</button>
      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  methods: {
      tt(){
          box1.style.display='block'
      },
      tian(index){
          box1.style.display='none'
      },
      shan(index){
          this.tw=index
          this.$http.get("http://localhost:8000/dele",{id:index},{emulateJSON:true}).then(e => {this.arr = e.body;})
      }
  },
  created() {
    this.$http.get("http://localhost:8000").then(e => {this.arr = e.body;});
  }
};
</script>


<style>
#top{
    width: 100%;
    border-bottom:1px solid #ccc; 
}
#box {
  width: 400px;
  margin-left: 32%;
  border: 1px solid #ccc;
}
ul li h5{
    text-indent: 20px;
}
#box1{
    line-height: 50px;
    text-align: center;
    background: red;
    position: fixed;
    top: 0;
    left: 30%;
    width: 450px;
    height: 200px;
    display: none;
}
#ul{
    position: relative;
}
#shan{
    position: absolute;
    top: 20%;
    right: 0;
}
h5{
    text-indent: 20px;
}
</style>

