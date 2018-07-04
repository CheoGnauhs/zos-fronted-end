<template>
  <el-card class="box-card" v-loading="loading">
    <div slot="header">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-button type="primary" circle style="margin-right: 10px" @click="viewTheTotalLayer">
            <i class="material-icons">undo</i>
          </el-button>
          <span>返回上一层</span>
        </el-col>
        <el-col :span="6" :offset="12">
          <el-button type="primary" circle style="margin-right: 10px" @click="viewTheSubLayer">
            <i class="material-icons">redo</i>
          </el-button>
          <span>查看子层</span>
        </el-col>
      </el-row>
    </div>
      <div v-if="!isViewSubLayer">
        <p>待查看条目：{{ subLayerName }}</p>
        <ve-pie
          :data="chartData"
          :settings="chartSettings"
          :events="chartEvents">
        </ve-pie>
      </div>
      <div v-if="isViewSubLayer">
        <h3>{{subLayerName+": total " + subLayerData.length}}</h3>
        <el-table
          :data="subLayerData"
          height="500"
          border
          style="width: 100%">
          <el-table-column
            prop="type"
            label="type"
            width="200px">
          </el-table-column>
          <el-table-column
            prop="name"
            label="name">
          </el-table-column>
        </el-table>
      </div>
  </el-card>
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      selectedMode: 'single',
      hoverAnimation: true
    }
    var self = this
    this.chartEvents = {
      click: function (e) {
        self.subLayerName = e.name;
        self.selectSubLayer();
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
      subLayerName: 'to be selectd',
      loading: true,
      rawData: {},
      totalChartData: [],
      subLayerData: [],
      isViewSubLayer: false
    }
  },

  methods: {
    viewTheTotalLayer(){
      this.isViewSubLayer = false;
    },
    viewTheSubLayer(){
      if(this.subLayerData.length == 0)
        return;
      
      this.isViewSubLayer = true;
    },

    selectSubLayer(){
      var tempData = [];
      this.rawData[this.subLayerName].forEach(element => {
        tempData.push({
          "type": this.subLayerName,
          "name": element
        });
      });
      this.subLayerData = tempData;
      console.log(this.subLayerData);
    },

    fetchData(){
      this.$http.get('http://localhost:3000/mastercatalog',{
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((response) => {
            // 成功回调
            this.rawData = response.body.data;
            this.loading = false;
            this.processRawData();
        }, (response) => {
            // 响应错误回调
            this.fetchDataError("获取数据失败，请重新刷新");
        });

    },

    processRawData(){
      this.chartData.columns = ['条目', '该条目数目'];
      var rows = [];

      var item
      for(item in this.rawData){
        rows.push({
          '条目': item,
          '该条目数目': this.rawData[item].length
        })
      }

      this.chartData.rows = rows;

      this.totalChartData = this.chartData;
    },

    fetchDataError(str) {
      this.$confirm(str, '错误', {
          type: 'error',
          center: true,
          showCancelButton: false,
          showConfirmButton: false
        })
    }
  },

  mounted(){
    this.fetchData();
  }
};
</script>
