
<template>
    <a-card>
        <h1 class="title">实验1 基于MARK II的小型软件项目规模度量实验 </h1>
      <div id="dg" style="z-index: 9999; position: fixed ! important; right: 0px; top: 0px;">
        <div class="el-backtop">
          <button class="btn" @click="change_page"></button>
        </div>
      </div>
        <div v-show="page===1">
            <LabManual></LabManual>
            <div style="height: 50px">
            </div>
        </div>
        <div v-show="page===2">
            <LabReport></LabReport>
        </div>

    </a-card>

</template>


<script>

import LabManual from "@/pages/exp1/MARKII/LabManual.vue";
import LabReport from "@/pages/exp1/MARKII/LabReport.vue";

export default {
    name: 'Exp1_MarkII',
    components: {LabReport, LabManual},

    data() {
        return {
            page: 3,
        }
    },
    methods: {
        change_page() {
          if(this.page === 1){
            this.page = 2;
          }
          else {
            this.page = 1;
          }

        },
    },
}
</script>

<style scoped>

.el-backtop:hover {
  background-color: rgb(240, 240, 240);
}
.el-backtop {
  position: fixed;
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  cursor: pointer;
  z-index: 5;
  right: 20px;
  top: 50%;
}
.btn {
  width: 0;
  height: 0;
  position: fixed;
  top: 51.5%;
  right: 30px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid #999;
  z-index: 5;
}
</style>
