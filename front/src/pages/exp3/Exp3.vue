<!-- 3.碳排放需求与供给实验
寻求碳排放权市场交易的供给与需求平衡点，以达成均衡价格，建议考虑交易的公平性 -->

<template>
  <div style="padding:2%">

  <div type="flex" justify-content="center" style="height:50px">
    <div style="float:left">
      <h1 class="title">{{ $route.meta.title }} </h1>
    </div>
    <div style="float:right">
      <a-button style="margin-right:20px" type="primary" shape="round" @click="downLoadFile">
        <template #icon >
          <DownloadOutlined  />
        </template>实验指导书下载 
      </a-button>
      
    </div>
  </div>

  <hr />
  <!-- <a-config-provider :locale="locale">
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件测试成本度量实验</a-col>
                </a-row>
                <a-row justify="center">
                    <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                                v-model:value="experimentdate" :bordered="false"
                                style="width:150px;padding-left:3px;padding-right:3px;"
                                placeholder="点击选择实验时间" /></span></a-col>
                    <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                                v-model:value="reportername" placeholder="请输入报告人姓名" size="small" :bordered="false"
                                style="width:18vh;"></a-input></span>
                    </a-col>
                    <a-col span="6"></a-col>
                </a-row>
            </p>
        </a-config-provider> -->
  <RouterView />
  <div     style="float:right">
    <a-upload
    name="file"
    :before-upload="uploadFile"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      点击上传实验报告
    </a-button>
  </a-upload>
</div>
</div>
</template>

<script lang="ts" setup>
import { useExperimentStore } from '@/store/experiment';
import { onMounted, ref,defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { UploadOutlined } from '@ant-design/icons-vue';
import message from 'ant-design-vue/es/message';
import axios from 'axios';

const { getExperiment,uploadReport } = useExperimentStore();
const rt = useRoute()


function formatDateTime(date, format) {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
    a: date.getHours() < 12 ? '上午' : '下午', // 上午/下午
    A: date.getHours() < 12 ? 'AM' : 'PM', // AM/PM
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return format;
}
onMounted(()=>{
  console.log(rt.meta)
})

function uploadFile(report:Blob){
  // 生成一个表单文件
  let formData = new FormData();
  // formData.append("course_id","1")
  formData.append("experiment_id",rt.meta.id.toString())
  formData.append("report",report)
  const date = new Date();
  const formatDate = formatDateTime(date, 'yyyy-MM-dd HH:mm:ss');
  console.log(formatDate);
  formData.append("submit_time",formatDate)
  axios({
	    method:"post",
	    url:"/report/submit",
	    headers: {
		  "Content-Type": "multipart/form-data"
	    },
	    withCredentials:true,
	    data:formData
	  }).then((res)=>{
            console.log(res);
            message.success("上传成功")
    });
}
function downLoadFile(){
  getExperiment(rt.meta.id)
    .then((res) => {
      console.log(res.file)
      const filePath = res.file
      if (!filePath) {
        return;
      }
      // let url = window.URL.createObjectURL(new Blob(filePath));
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = filePath;
      link.setAttribute('download', filePath);
      document.body.appendChild(link);
      // link.click();
      window.open(filePath)
    })
}

</script>

<style scoped lang="less">
.title {
  font-family: sans-serif;
  font-size: 30px;
}
</style>