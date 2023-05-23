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

const { getExperiment,uploadReport } = useExperimentStore();
const rt = useRoute()


onMounted(()=>{
  console.log(rt.meta)
})

function uploadFile(){
  // 生成一个表单文件
  let formData = new FormData();
  formData.append("course_id","1")
  formData.append("experiment_id","1")
  formData.append("report","1")
  formData.append("submit_time",Date.now())
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

  // uploadReport(formData)
  // .then((res)=>{
  //   console.log(res)
  //   message.success("上传成功")
  // })
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
