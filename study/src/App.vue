<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="./assets/logo.png" alt="">
          </div>
          <ul class="nav">
            <router-link tag='li' to="/home">首页</router-link> 
            <router-link tag='li' to="/learn">课程</router-link>
            <router-link tag='li' to="/student">学员</router-link>
            <router-link tag='li' to="/community">社区</router-link>
            <router-link tag='li' to="/about">关于</router-link>
          </ul>
      </div>
    </div>
    
    <router-view class="router-view"/>
    <div class="footer"></div>
  </div>
</template>

<style>
.header{
  background-color: #000;
  line-height: 70px;
  padding-bottom: 2px;
}
.header .center{
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
}
.header .center img{
  width: 50px;
  height: 50px;
  vertical-align: middle;
}
.header .center .logo{
  line-height: 70px;
}
.header .center ul{
  display: flex;
}
.header .center ul li{
  color: aliceblue;
  padding: 0 30px;
  cursor: pointer;
}
.footer{
  width: 100%;
  height: 150px;
  background-color: #000;
}
.router-view{
  width: 1000px;
  min-height: 500px;
  margin: 0 auto;
  padding-top: 40px;
}
.active{
  border-bottom: 2px solid #fff;
}
</style>
