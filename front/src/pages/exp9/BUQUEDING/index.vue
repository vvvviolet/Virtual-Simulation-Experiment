<template>
    <div id="pdf-content">
        <div style="padding-top:60px;padding-bottom:20px">
        <a-config-provider  >
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件的不确定性实验</a-col>
                </a-row>
                <a-row justify="center">
                    <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                         :bordered="false"
                        style="width:150px;padding-left:3px;padding-right:3px;"
                        placeholder="点击选择实验时间" /></span></a-col>
                    <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                          placeholder="请输入报告人姓名" size="small" :bordered="false"
                        style="width:18vh;"></a-input></span>
                    </a-col>
                    <a-col span="6"></a-col>
                </a-row>
            </p>
        </a-config-provider>
        </div>
        <h2>一、实验目的</h2>
        <p class="recontent">
            本实验旨在使用不同方法评估软件项目/产品开发中的不确定性，并探讨不同因素对于不确定性的影响。 本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。
        </p>
        <h2>二、实验内容</h2>
        <p class="recontent">
            探究不同估计方法下的方法选择。具体实验步骤如下：
        </p>
        <p class="content">1.获取实验指导书</p>
        <li class="recontent">
            学生通过下载实验指导书选项获取指导书文件

        </li>
        <br />
        <p class="content">
            2. 阅读实验指导书
        </p>
        <li class="recontent">
            学生熟悉不确定性实验方法，并获取相应实验数据
        </li>
        <br />
        <p class="content">
            4. 填写实验数据
        </p>
        <li class="recontent">
            学生将所给实验数据填写在对应表格
        </li>
        <br />
        <p class="content">
            5. 根据对应的方法，选择你所认为的最佳方案
        </p>
        <li class="recontent">
            学生将选择的方案填写在对应位置
        </li>
        <br />
        <p class="content">
            6. 总结和讨论
        </p>
        <li class="recontent">
            实验结果总结：总结该种方法对不确定性方法选择的影响。
        </li>
        <br />
        <h2>三、实验原理</h2>
        <h3 class="subtitle-content">1.赫维斯基法</h3>
        <p class="content">
            赫维斯基法是对最大最小法和最大最大法两个方法进行折中的方法。决策者同时抱有乐观和悲观的态度，对每个方案的最好结果和最差结果进行加权平均计算，然后选取加权平均收益最大的方案作为最优行动方案。
            采用该方法时，需要选取一个乐观系数入，该系数取值在0和1之间。如，风险厌恶型决策者会给与最好结果0.3的权重，而给予最差结果0.7的权重。
        </p>
        <h3 class="subtitle-content">2.拉普拉斯法</h3>
        <p class="content">
            该方法的出发点是，既然不能肯定哪一种状态比另一种状态更可能出现，只好认为所有状态出现的概率是相等的。每个状态的权重值1/n。
        </p>
        <h3 class="subtitle-content">3.最大最大法</h3>
        <p class="content">
            最大最大法是决策者抱着最乐观的想法，从各方案最有利结果中选取最大值，该数值所对应的行动作为最优行动方案。

        </p>
        <h3 class="subtitle-content">4.最大最小法</h3>
        <p class="content">
            最大最小法是决策者从最不利结果着眼，将在最不利结果中取得的最有利结果之行动作为最优行动方案。

        </p>
        <h3 class="subtitle-content">5.最小最大后悔值法</h3>
        <p class="content">
            该方法考虑了决策者在做完决定，知道实际结果时的态度，考虑到没有选取最优方案作为行动方案时的机会成本。
            该方法计算过程是:先计算各方案在各种状态下的后悔值，选出各方案的最大后悔值，然后从各方案最大后悔值中选取最小值，该数值对应的方案就是决策者没有选择最优方案时后悔值最小的方案。


        </p>
        <h2>四、实验步骤</h2>
        <p class="content">
            根据实验指导书，填写下表
        </p>
        <div id="datatable">
            <p class="tabletitle">
                表1:赫维斯基法
            </p>
            <Hurwicz></Hurwicz>
            <p class="tabletitle">
                表2:拉普拉斯法
            </p>
            <Laplace></Laplace>
            <p class="tabletitle">
                表3:最大最大法
            </p>
            <Maxmax></Maxmax>
            <p class="tabletitle">
                表4:最大最小法
            </p>
            <Maxmin></Maxmin>
            <p class="tabletitle">
                表5:最小最大后悔值法
            </p>
            <Regret></Regret>
            <br />
        </div>
        <h2>五、实验结果</h2>
        1. 根据赫维斯基法，最好方案为
        <a-input v-model:value="bestplan1" style="width: 200px" placeholder="方案xx" />
        <br /><br />
        2. 根据拉普拉斯法，最好方案为
        <a-input v-model:value="bestplan2" style="width: 200px" placeholder="方案xx" />
        <br /><br />
        3. 根据最大最大法，最好方案为
        <a-input v-model:value="bestplan3" style="width: 200px" placeholder="方案xx" />
        <br /><br />
        4. 根据最大最小法，最好方案为
        <a-input v-model:value="bestplan4" style="width: 200px" placeholder="方案xx" />
        <br /><br />
        5. 根据最小最大后悔值法，最好方案为
        <a-input v-model:value="bestplan5" style="width: 200px" placeholder="方案xx" />
        <br /><br />
        <h2>六、实验思考</h2>
        <a-textarea v-model:value="reflection" placeholder="写下你的实验思考" :rows="4" />
        <br />
        <br />
    </div>
    <a-button style="margin-bottom: 8px" @click="downloadPdf"> 导出</a-button>
</template>  




<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import Hurwicz from "./Hurwicz.vue"
import Laplace from "./Laplace.vue"
import Maxmax from "./Maxmax.vue"
import Maxmin from "./Maxmin.vue"
import Regret from "./Regret.vue"
import html2pdf from 'html2pdf.js';
export default defineComponent({
    name: 'app',
    components: {
        'Hurwicz': Hurwicz,
        'Laplace': Laplace,
        'Maxmax': Maxmax,
        'Maxmin': Maxmin,
        'Regret': Regret,
    },
    methods: {
        downloadPdf() {
            const element = document.getElementById('pdf-content');
            const opt = {
                // 转换后的pdf的外边距分别为：上: 10px、右: 20px、下: 10px、左:20px
                margin: [10, 20, 10, 20],
                filename: '不确定性法.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 5 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // 调用html2pdf库的方法生成PDF文件并下载
            html2pdf().from(element).set(opt).save();
        }
    },
    setup() {
        const bestplan1 = ref<string>('');
        const bestplan2 = ref<string>('');
        const bestplan3 = ref<string>('');
        const bestplan4 = ref<string>('');
        const bestplan5 = ref<string>('');
        const bestplan = ref<string>('');
        const reflection = ref<string>('');
        return {
            reflection,
            bestplan1,
            bestplan2,
            bestplan3,
            bestplan4,
            bestplan5,
        };
    },
})
</script>


<style lang="less">
.tabletitle {
    text-align: center;
    font-family: sans-serif;
    font-size: 20px;
}
</style>