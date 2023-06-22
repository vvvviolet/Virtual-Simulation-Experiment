<!-- 1.软件规模估算实验（FP方法）
包括:IFPUG方法、NESMA方法、MARK II方法、COSMIC方法 -->
<template>
  <div style="padding:2%">
    <div type="flex" justify-content="center" style="height:50px">
      <center>
        <div>
          <h1 class="title">{{ $route.meta.title }} </h1>
        </div>
      </center>
      <div style="text-align:right;">
        <a-button style="margin-right:20px" type="primary" shape="round" @click="downLoadFile">
          <template #icon>
            <DownloadOutlined />
          </template>实验指导书下载
        </a-button>
      </div>
    </div>

    <RouterView />
    <div style="float:right">
      <a-upload :file-list="fileList" name="file" :before-upload="uploadFile" maxCount="1" action="" method="get"
        @change="handleChange">
        <a-button>
          <upload-outlined />
          提交报告
        </a-button>
      </a-upload>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useExperimentStore } from '@/store/experiment';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import message from 'ant-design-vue/es/message';
import axios from 'axios';
import Cookies from 'js-cookie';
import { UploadProps } from 'ant-design-vue/lib/upload';
import { UploadChangeParam } from 'ant-design-vue/es/upload/interface';

const { getExperiment } = useExperimentStore();
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
onMounted(() => {
  // console.log(rt.meta)
})

const fileList = ref<UploadProps['fileList']>([])

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status !== 'uploading') {
    // console.log('uploading')
  }
  if (info.file.status === 'done') {
    // console.log(fileList)
    fileList.value = [];
    // message.success(`${info.file.name} 上传成功`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} 上传失败`);
  }
};

const uploadFile = (report) => {
  // 生成一个表单文件
  let formData = new FormData();

  formData.append("experiment_id", rt.meta.id.toString())
  formData.append("report", report)

  const date = new Date();
  const formatDate = formatDateTime(date, 'yyyy-MM-dd HH:mm:ss');

  formData.append("submit_time", formatDate)

  new Promise(resolve => axios({
    method: "post",
    url: "api/report/submit",
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": Cookies.get('Authorization'),
    },
    data: formData
  }).then((res) => {
    // fileList.value=report
    message.success('上传成功')
  }));

}
function downLoadFile() {
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
