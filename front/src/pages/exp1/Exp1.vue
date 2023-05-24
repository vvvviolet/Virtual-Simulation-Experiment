<!-- 1.软件规模估算实验（FP方法）
包括:IFPUG方法、NESMA方法、MARK II方法、COSMIC方法 -->
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
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import message from 'ant-design-vue/es/message';
import axios from 'axios';
import { request } from 'http';
import http from '@/store/http';
import Cookies from 'js-cookie';

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

function uploadFile(report){
  // 生成一个表单文件
  let formData = new FormData();
  formData.append("experiment_id",rt.meta.id.toString())
  formData.append("report",report)
  const date = new Date();
  const formatDate = formatDateTime(date, 'yyyy-MM-dd HH:mm:ss');
  console.log(formatDate);
  formData.append("submit_time",formatDate)
  // http.request("/report/submit",'post',{"experiment_id":rt.meta.id.toString(),"report":report,"submit_time":formatDate})
  // // http.request("/report/submit",'post',formData.values())
  // .then((res)=>{console.log(res)})
  console.log(Cookies.get('Authorization'))
  axios({
	    method:"post",
	    url:"api/report/submit",
	    headers: {
		    "Content-Type": "multipart/form-data",
        "Authorization":Cookies.get('Authorization'),
	    },
	    // withCredentials:true,
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
