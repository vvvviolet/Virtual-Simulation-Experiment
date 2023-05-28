
<template>
    <a-card>
        <h1 class="title">实验1 基于MARK II的小型软件项目规模度量实验 </h1>
        <div v-show="page===1">
            <LabManual></LabManual>
            <div style="height: 50px">
            </div>
        </div>
        <div v-show="page===2">
            <LabReport></LabReport>
        </div>


        <Button type="primary" @click="change_page1()">1</Button>
        <Button type="primary" @click="change_page2()">2</Button>
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
            page: 1,
        }
    },
    methods: {
        change_page1() {
            this.page = 1;
        },
        change_page2() {
            this.page = 2;
        }
    },
}
</script>

<style scoped>

</style>
