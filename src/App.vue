<template>
  <div id="app">
    <el-container>
      <el-aside width="250px">
        <el-menu default-active="4" class="el-menu-vertical-demo" @select="handleOpen" :collapse="isCollapse">
          <el-menu-item index="0">
            <i class="el-icon-star-on"></i>
            <span slot="title">{{pages[0]}}</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{pages[1]}}</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-search"></i>
            <span slot="title">{{pages[2]}}</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-view"></i>
            <span slot="title">{{pages[3]}}</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="material-icons">face</i>
            <span slot="title">{{pages[4]}}</span>
          </el-menu-item>
          <el-menu-item index="5" v-on:click="isCollapse=!isCollapse">
            <i class="el-icon-caret-right" v-if="isCollapse==true"></i>
            <i class="el-icon-caret-left" v-if="isCollapse==false"></i>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-card shadow="always">
            <h1>{{title}}</h1> 
          </el-card>
        </el-header>
        <el-main style="margin-top: 50px">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import routes from "./router/routes";
export default {
  name: 'App',
  created(){
    this.menus = routes;
  },
  data() {
    return {
      isCollapse: false,
      title: "Author",
      pages: ["Master Catalog Present",
      "User Catalog Present",
      "Search",
      "Result From",
      "Author"]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      if(Number(key) < 5){
        this.title = this.pages[Number(key)];
        this.$router.push(this.menus[Number(key)].path);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

</style>
