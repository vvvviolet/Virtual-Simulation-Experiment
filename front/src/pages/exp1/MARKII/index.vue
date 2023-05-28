<template>
    <a-card>
        <h1 class="title">实验1 基于MARK II的小型软件项目规模度量实验 </h1>
        <LabManual></LabManual>
        <div style="height: 50px"></div>
        <LabReport></LabReport>
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

        }
    },
   methods:{
        
   }
}
</script>

<style scoped>

</style>
