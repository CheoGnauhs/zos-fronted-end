<template>
  <el-card class="box-card">
    <div slot="header">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-button type="primary" circle style="margin-right: 10px">
            <i class="material-icons">undo</i>
          </el-button>
          <span>返回上一层</span>
        </el-col>
        <el-col :span="6" :offset="12">
          <el-button type="primary" circle style="margin-right: 10px">
            <i class="material-icons">redo</i>
          </el-button>
          <span>查看子层</span>
        </el-col>
      </el-row>
    </div>
      <div>
        <p>待查看条目：{{ name }}</p>
        <ve-pie
          :data="chartData"
          :settings="chartSettings"
          :events="chartEvents">
        </ve-pie>
      </div>
  </el-card>
</template>

<script>
export default {
  data () {
      this.chartSettings = {
        selectedMode: 'single',
        hoverAnimation: false
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          self.name = e.name
          console.log(e)
        }
      }
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [
            { '日期': '1/1', '访问用户': 1393 },
            { '日期': '1/2', '访问用户': 3530 },
            { '日期': '1/3', '访问用户': 2923 },
            { '日期': '1/4', '访问用户': 1723 },
            { '日期': '1/5', '访问用户': 3792 },
            { '日期': '1/6', '访问用户': 4593 }
          ]
        },
        name: ''
      }
  }
};
</script>
