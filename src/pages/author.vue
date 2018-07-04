<template >
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in sources" :key="item.name">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="item.avatar" class="image">
        
        <div style="padding: 14px;">
          <span>{{item.name}}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.id }}</time>
          </div>
        </div>
      </el-card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      sources: [
        {
          name: "Lv Yansong",
          avatar: "/static/big/song.png",
          id: "学号：1552607"
        },
        {
          name: "Tan Shuang",
          avatar: "/static/big/shuang.jpg",
          id: "学号：1453564"
        },
        {
          name: "Chen Hui",
          avatar: "/static/big/hui.png",
          id: "学号：1552698"
        }
      ]
    };
  }
};
</script>
