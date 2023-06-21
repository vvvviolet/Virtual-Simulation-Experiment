<template>
    <a-card>
        <h1 class="title" style="text-align: center; font-weight: bold;">实验1 基于MARK II的小型软件项目规模度量实验</h1>
        <div id="dg" style="z-index: 9999; position: fixed ! important; right: 0px; top: 0px;">
            <div class="page_change" @click="changePage">
                <a-popover placement="left" :content="content">
                    <div>
                        <div v-if="goLeft === 1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                 class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </div>
                        <div v-if="goLeft === 2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                 class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </div>
                    </div>
                </a-popover>
            </div>
        </div>
        <div v-show="page === 1">
            <LabManual></LabManual>
            <div style="height: 50px"></div>
        </div>
        <div v-show="page === 2">
            <LabReport></LabReport>
        </div>
    </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LabManual from '@/pages/exp1/MARKII/LabManual.vue';
import LabReport from '@/pages/exp1/MARKII/LabReport.vue';

export default defineComponent({
    name: 'Exp1_MarkII',
    components: { LabReport, LabManual },
    data() {
        return {
            page: 1,
            goLeft: 1,
            content: '填写实验报告'
        };
    },
    methods: {
        changePage() {
            if (this.page === 1) {
                this.page = 2;
                this.goLeft = 2;
                this.content = '查看实验指导书';
            } else {
                this.page = 1;
                this.goLeft = 1;
                this.content = '填写实验报告';
            }
        }
    }
});
</script>

<style scoped>
.page_change {
    position: fixed;
    top: 50%;
    right: 20px;
    z-index: 5;
}
</style>
