<!-- <template>
    内容
</template>



<script lang="ts">
import { Document } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
export default {
    name: 'DONGTAITOUZI',
}
</script >

<style scoped></style>  -->


<template>
    <a-layout style="background-color:white;">

        <!-- <a-layout-header class="my-layout-header">软件测试成本度量实验</a-layout-header> -->
        <!-- <div @click="jumpToGB">软件测试成本度量规范（国标）</div> -->
        <a-row justify="end" > 
            <!-- <a-col :span="3">
                <a-button  style="width:9vw;" type="primary" size="small" ghost shape="round" @click="jumpToGB">
                    <template #icon>
                        <eye-outlined />
                    </template>实验指导书
                </a-button>
            </a-col> -->
            &emsp;
            <!-- <a-col :span="3">
                <a-button  style="width:9vw;" type="primary" size="small" ghost shape="round">
                    <template #icon>
                        <DownloadOutlined />
                    </template>报告模板下载
                </a-button>
            </a-col> -->
        </a-row>
        <br/>
        <a-config-provider :locale="locale">
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
        </a-config-provider>

        <a-typography-title :level="3">一、实验目的</a-typography-title>

        <div style="background-color: white;font-size:16px">
            <p>&emsp;&emsp;1.理解国家标准《软件测试成本度量规范》中软件测试成本度量原理，通过实验操作，掌握软件测试成本度量过程。</p>
            <p>&emsp;&emsp;2.以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，
                使用《软件测试成本度量规范》中的方法，估算该项目的测试成本。</p>
            <p>&emsp;&emsp;3.本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。</p>
        </div>

        <a-typography-title :level="3">二、实验原理</a-typography-title>
        <div>
            <a-collapse v-model:activeKey="activeKey1" :bordered="false" style="width:99%">
                <!-- 1. 软件测试成本构成 -->
                <a-collapse-panel key="1" style="background-color: white;font-size:16px">
                    <template #header>
                        <a-typography-title style="margin-bottom: 0" :level="4">1. 软件测试成本构成</a-typography-title>
                    </template>
                    <!-- 1.1 直接成本 -->
                    <a-collapse default-active-key="1-1" :bordered="false">
                        <a-collapse-panel key="1-1" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">1.1 直接成本</h3>
                            </template>
                            <a-collapse default-active-key="1-1-1" :bordered="false" style="background-color:white;">
                                <a-collapse-panel key="1-1-1">
                                    <template #header>
                                        <h3 style="font-weight:600;">1.1.1 测试环境成本</h3>
                                    </template>
                                    <p>&emsp;&emsp;测试环境成本可包括但不限于下列成本：</p>
                                    <p>&emsp;&emsp;——测试所需要的硬件环境的成本；</p>
                                    <p>&emsp;&emsp;——测试所需要的软件环境的成本；</p>
                                    <p>&emsp;&emsp;——开发测试所需要的硬件环境的成本；</p>
                                    <p>&emsp;&emsp;——开发测试所需要的软件环境的成本。</p>
                                </a-collapse-panel>
                            </a-collapse>
                            <a-collapse default-active-key="1-1-2" :bordered="false" style="background-color:white;">
                                <a-collapse-panel key="1-1-2">
                                    <template #header>
                                        <h3 style="font-weight:600;">1.1.2 测试人工成本</h3>
                                    </template>
                                    <p>
                                        &emsp;&emsp;测试人工成本包括测试项目组成员的工资、奖金、福利等人力资源费用。其中，项目组成员包括参与该项目测试过程的所有测试或支持人员，如项目经理、需求分析人员、设计人员、测试人员、部署人员、质量保证人员、配置管理人员等。对于非全职投入该项目测试工作的人员，按照项目工作量所占其总工作量比例折算其人力资源费用。测试人工成本由产品说明评审、用户文档集评审和软件测试3部分组成。
                                    </p>
                                    <p>&emsp;&emsp;1）产品说明评审：对软件产品说明进行评审，应按照 GB/T25000.51—2010对产品说明的可用性、内容、标识与标示等方面进行评审。</p>
                                    <p>&emsp;&emsp;2）用户文档集评审：对用户文档集进行评审，应按照 GB/T25000.51—2010对用户文档集的完备性、正确性和一致性等方面进行评审。</p>
                                    <p>&emsp;&emsp;3）软件测试</p>
                                    <p>&emsp;&emsp;&emsp;软件测试工作，按实际工作量(人日)来计算成本。</p>
                                    <p>&emsp;&emsp;&emsp;软件测试工作量可按照以下两种方式进行度量：</p>
                                    <p>&emsp;&emsp;&emsp;① 依据软件测试生存周期，按照各个阶段给出测试成本。软件测试生存周期包含以下阶段：</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试需求：根据软件需求规格说明确定测试需求；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试策划：确定测试的内容或质量特性，确定测试的充分性要求；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试策略或方法的选择：根据测试要求、送测软件文档和测试规范，确定测试的方法；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试环境准备：准备测试需求的各种环境，测试代码开发，包括设计驱动模块和桩模块；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试数据准备：测试执行前，为测试能够进行准备一组可以验证的数据；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试用例开发：测试用例设计，包括自动化测试时的录制和编辑测试脚本；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试执行：依据测试用例执行软件测试，并记录测试结果，包括手工测试和/或自动化测试；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试结果分析：对测试执行过程中所产生的结果输出进行分析；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试报告编制：整理编制并发布测试报告；</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 测试评估：对测试进行分析及评审，包括测试的收益、软件将来可能存在的风险。</p>
                                    <p>&emsp;&emsp;&emsp;②
                                        依据功能点法进行软件规模度量。应按照ISO/IEC19761、ISO/IEC20926、ISO/IEC20968、ISO/IEC24570和ISO/IEC29881等标准给出具体的独立可参照的规模方法及度量方法依据。在给出度量结果时，宜指明所采用的规模度量方法。
                                    </p>
                                    <p>&emsp;&emsp;&emsp;&emsp; 针对最终给出的功能点数目，按照每个功能点 K 人日来给出测试成本，K 取值应为0.5~1.0。</p>
                                    <p>&emsp;&emsp;&emsp;&emsp; <strong>注：</strong>软件规模度量过程中所产生的费用应由送测方承担。</p>
                                </a-collapse-panel>
                            </a-collapse>
                            <a-collapse default-active-key="1-1-3" :bordered="false" style="background-color:white;">
                                <a-collapse-panel key="1-1-3">
                                    <template #header>
                                        <h3 style="font-weight:600;">1.1.3 测试工具成本</h3>
                                    </template>
                                    <p>&emsp;&emsp;测试工具成本是为测试而购买的测试软件和测试设备的费用以及在测试过程中使用已有设备的折旧费用和维护费用。测试工具成本包括测试机构自有工具成本和/或租借工具成本：
                                    </p>
                                    <p>&emsp;&emsp;1）测试机构自有工具成本可按照如下步骤给出：</p>
                                    <p>&emsp;&emsp;&emsp;① 计算设备原价：设备原价包括外购设备的成本，包括购买原价、相关税费、运输和安装费用、服务费等。</p>
                                    <p>&emsp;&emsp;&emsp;②
                                        确定固定资产使用寿命：确定固定资产使用寿命时应考虑到预计的生产能力；预计有形损耗和无形损耗；测试工具的授权用户数、版权费、与客户需求的匹配度；法律或相关规定对固定资产使用的限制。
                                    </p>
                                    <p>&emsp;&emsp;&emsp;③ 可选用的折旧方法包括年限平均法、工作量法等：</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 年限平均法：将固定资产按预计使用年限平均计算折旧均衡地分摊到各期。</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;&emsp;固定资产年折旧额=固定资产应计折旧额/固定资产预计使用年限</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;● 工作量法：按照固定资产预计可完成的工作量计算折旧额。</p>
                                    <p>&emsp;&emsp;&emsp;&emsp;&emsp;单位工作量折旧额=固定资产应计折旧额/预计总工作量</p>
                                    <p>&emsp;&emsp;&emsp;④ 确定测试工具每年的维护费。</p>
                                    <p>&emsp;&emsp;&emsp;⑤ 以每年200个工作日计，按照具体的测试工期，分摊每年的折旧费和维护费。</p>
                                    <p>&emsp;&emsp;2）租借工具成本按照具体租借费用另外计算。</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </a-collapse-panel>
                    </a-collapse>

                    <!-- 1.2 间接成本 -->
                    <a-collapse default-active-key="1-2" :bordered="false">
                        <a-collapse-panel key="1-2" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">1.2 间接成本</h3>
                            </template>
                            <a-collapse default-active-key="1-2-1" :bordered="false" style="background-color:white;">
                                <a-collapse-panel key="1-2-1">
                                    <template #header>
                                        <h3 style="font-weight:600;">1.2.1 概述</h3>
                                    </template>
                                    <p>&emsp;&emsp;软件测试间接成本包括办公成本和管理成本。</p>
                                </a-collapse-panel>
                            </a-collapse>
                            <a-collapse default-active-key="1-2-2" :bordered="false" style="background-color:white;">
                                <a-collapse-panel key="1-2-2">
                                    <template #header>
                                        <h3 style="font-weight:600;">1.2.2 办公成本</h3>
                                    </template>
                                    <p>&emsp;&emsp;办公成本是测试人员为了测试某个项目而产生的行政办公费用，可包括但不限于下列成本：</p>
                                    <p>&emsp;&emsp;——测试场地；</p>
                                    <p>&emsp;&emsp;——办公用品；</p>
                                    <p>&emsp;&emsp;——通信；</p>
                                    <p>&emsp;&emsp;——印刷；</p>
                                    <p>&emsp;&emsp;——会议。</p>
                                    <p>&emsp;&emsp;<strong>注：</strong>办公成本可以包括以上所述的各项产生的费用，但不限于以上几种，本标准的使用者可以对本标准中列出的各项进行增加、删除和修改。
                                    </p>
                                </a-collapse-panel>
                            </a-collapse>
                            <a-collapse default-active-key="1-2-3" :bordered="false" style="background-color:white;">
                                <a-collapse-panel key="1-2-3">
                                    <template #header>
                                        <h3 style="font-weight:600;">1.2.3 管理成本</h3>
                                    </template>
                                    <p>&emsp;&emsp;管理成本是确保测试在软件生存周期内得到顺利实施，并达到预期的效果所产生的费用。管理成本可包括但不限于下列成本：</p>
                                    <p>&emsp;&emsp;——测试团队组织管理成本；</p>
                                    <p>&emsp;&emsp;——测试计划管理成本；</p>
                                    <p>&emsp;&emsp;——缺陷跟踪管理成本；</p>
                                    <p>&emsp;&emsp;——测试文档管理成本；</p>
                                    <p>&emsp;&emsp;——测试过程的监控成本。</p>
                                </a-collapse-panel>
                            </a-collapse>
                        </a-collapse-panel>
                    </a-collapse>
                </a-collapse-panel>

                <!-- 2.测试成本调整因子 -->
                <a-collapse-panel key="2" style="background-color: white;font-size:16px">
                    <template #header>
                        <a-typography-title style="margin-bottom: 0" :level="4">2. 测试成本调整因子</a-typography-title>
                    </template>
                    <!-- 2.1 软件复杂性 -->
                    <a-collapse default-active-key="2-1" :bordered="false">
                        <a-collapse-panel key="2-1" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.1 软件复杂性</h3>
                            </template>
                            <p>&emsp;&emsp;软件复杂性可以从软件的规模、难度和结构等方面进行度量。软件复杂性的调整因子取值范围如表1所示。</p>
                            <p>&emsp;&emsp;被测软件的复杂性可按照以下特性来进行度量：</p>
                            <p>&emsp;&emsp;——存在大量的控制或者安全设施；</p>
                            <p>&emsp;&emsp;——系统规模较大，子模块较多且相互影响关联，或需与其他系统对接使用；</p>
                            <p>&emsp;&emsp;——非简体中文软件；</p>
                            <p>&emsp;&emsp;——存在大量的逻辑处理或处理过程复杂；</p>
                            <p>&emsp;&emsp;——存在大量的数学处理或算法复杂。</p>
                            <div style="font-size:14px">
                                <a-row justify="center" style="text-align:center;">
                                    <strong style="margin-bottom:10px;">表 1 软件复杂性调整因子</strong>
                                </a-row>
                                <a-row justify="center" style="text-align:center;height:30px;line-height: 30px;">
                                    <a-col style="border: 0.5px solid #333" :span="5">复杂性程度</a-col>
                                    <a-col style="border: 0.5px solid #333" :span="6">描述</a-col>
                                    <a-col style="border: 0.5px solid #333" :span="5">调整因子取值范围</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">低</a-col>
                                    <a-col :span="6" style="border: 0.5px solid #333">&emsp;没有出现上述任何一个特性</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.0</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">中</a-col>
                                    <a-col :span="6" style="border: 0.5px solid #333">&emsp;出现上述特性中的一个</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.1~1.2</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">高</a-col>
                                    <a-col :span="6" style="border: 0.5px solid #333">&emsp;出现上述特性中的两个或两个以上</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.3~1.5</a-col>
                                </a-row>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 2.2 软件完整性 -->
                    <a-collapse default-active-key="2-2" :bordered="false">
                        <a-collapse-panel key="2-2" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.2 软件完整性</h3>
                            </template>
                            <p>&emsp;&emsp;软件完整性级别是系统完整性级别在包含软件部件或仅包含软件部件或仅包含软件的子系统上的分配。按照 GB/T18492—2001
                                给出的软件完整性级别来确定调整因子取值范围，如表2所示。</p>
                            <div style="font-size:14px">
                                <a-row justify="center" style="text-align:center;">
                                    <strong style="margin-bottom:10px;">表 2 软件完整性调整因子</strong>
                                </a-row>
                                <a-row justify="center" style="text-align:center;height:30px;line-height: 30px;">
                                    <a-col style="border: 0.5px solid #333" :span="5">软件完整性级别</a-col>
                                    <a-col style="border: 0.5px solid #333" :span="5">调整因子取值范围</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">A级</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.6~1.8</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">B级</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.3~1.5</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">C级</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.1~1.2</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">D级</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.0</a-col>
                                </a-row>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 2.3 测试风险度 -->
                    <a-collapse default-active-key="2-3" :bordered="false">
                        <a-collapse-panel key="2-3" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.3 测试风险度</h3>
                            </template>
                            <p>&emsp;&emsp;软件本身的复杂性以及测试的特点决定了测试活动中风险的大量存在。可能的测试风险由以下部分构成：</p>
                            <p>&emsp;&emsp;1）被测试软件的领域有特殊要求；</p>
                            <p>&emsp;&emsp;2）测试需求不明确；</p>
                            <p>&emsp;&emsp;3）被测软件与测试文档不一致；</p>
                            <p>&emsp;&emsp;4）测试过程中测试方与开发方因沟通等而导致不可预计的风险。</p>
                            <p>&emsp;&emsp;依据上述测试风险，表3给出测试风险调整因子。</p>
                            <div style="font-size:14px">
                                <a-row justify="center" style="text-align:center;">
                                    <strong style="margin-bottom:10px;">表 3 测试风险调整因子</strong>
                                </a-row>
                                <a-row justify="center" style="text-align:center;height:30px;line-height: 30px;">
                                    <a-col style="border: 0.5px solid #333" :span="5">风险程度</a-col>
                                    <a-col style="border: 0.5px solid #333" :span="9">描述</a-col>
                                    <a-col style="border: 0.5px solid #333" :span="5">调整因子取值范围</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">低</a-col>
                                    <a-col :span="9" style="border: 0.5px solid #333">&emsp;没有出现上述任何一个特性</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.0</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">中</a-col>
                                    <a-col :span="9" style="border: 0.5px solid #333">&emsp;出现上述特性2）、3）、4）中的一个</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.1~1.2</a-col>
                                </a-row>
                                <a-row justify="center" style="height:30px;line-height: 30px;">
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">高</a-col>
                                    <a-col :span="9"
                                        style="border: 0.5px solid #333">&emsp;出现上述特性1）,或者2）、3）、4）中的两个或两个以上</a-col>
                                    <a-col :span="5" style="text-align:center;border: 0.5px solid #333">1.3~1.5</a-col>
                                </a-row>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 2.4 回归测试 -->
                    <a-collapse default-active-key="2-4" :bordered="false">
                        <a-collapse-panel key="2-4" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.4 回归测试</h3>
                            </template>
                            <p>&emsp;&emsp;回归测试是指修改了旧代码以后，重新进行测试以确认修改没有引入新的错误或导致其他代码发生错误。回归测试调整因子取值范围：0.6~0.8。</p>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 2.5 加急测试 -->
                    <a-collapse default-active-key="2-5" :bordered="false">
                        <a-collapse-panel key="2-5" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.5 加急测试</h3>
                            </template>
                            <p>&emsp;&emsp;加急测试可能引发增加测试人员或测试人员加班等现象，从而导致测试成本增加。加急测试调整因子取值范围：1.2~3.0。</p>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 2.6 现场测试 -->
                    <a-collapse default-active-key="2-5" :bordered="false">
                        <a-collapse-panel key="2-5" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.6 现场测试</h3>
                            </template>
                            <p>&emsp;&emsp;现场测试由于测试环境离开了测试实验室会导致额外的成本增加。现场测试调整因子取值范围：1.0~1.3。</p>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 2.7 评测机构资质 -->
                    <a-collapse default-active-key="2-5" :bordered="false">
                        <a-collapse-panel key="2-5" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">2.7 评测机构资质</h3>
                            </template>
                            <p>&emsp;&emsp;依据评测机构所获得的国家、行业、地方授权的权威资质等进行调整。评测机构资质调整因子取值范围：1.0~1.2。</p>
                        </a-collapse-panel>
                    </a-collapse>

                </a-collapse-panel>
                <!-- 3.软件测试成本度量流程 -->
                <a-collapse-panel key="3" style="background-color: white;font-size:16px">
                    <template #header>
                        <a-typography-title style="margin-bottom: 0" :level="4">3. 软件测试成本度量流程</a-typography-title>
                    </template>
                    <p style="margin-left: 4vh;">本实验指导书中采用国际软件测试成本度量规范，度量目标项目软件测试成本。建议按照以下步骤执行度量过程。</p>
                    <!-- 3.1 软件测试的人工成本工作量计算如式(1)所示： -->
                    <a-collapse default-active-key="3-1" :bordered="false">
                        <a-collapse-panel key="3-1" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">3.1 软件测试的人工成本工作量计算如式(1)所示：</h3>
                            </template>
                            <a-row justify="center">&emsp;&emsp;<strong>UW =TW +SR +DR …………………………(1)</strong></a-row>
                            <div style="font-size:14px;margin-left: 4vh;">
                                <p>&emsp;&emsp;式中：</p>
                                <p>&emsp;&emsp;UW ———未调整的软件测试人工工作量，单位为人日；</p>
                                <p>&emsp;&emsp;TW ———软件测试工作量，单位为人日；</p>
                                <p>&emsp;&emsp;SR ———产品说明评审工作量，SR=TW ×10%，单位为人日；</p>
                                <p>&emsp;&emsp;DR ———用户文档集评审工作量，DR=TW ×20%，单位为人日</p>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 3.2 软件测试成本调整因子计算如式(2)所示： -->
                    <a-collapse default-active-key="3-2" :bordered="false">
                        <a-collapse-panel key="3-2" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">3.2 软件测试成本调整因子计算如式(2)所示：</h3>
                            </template>
                            <a-row justify="center">&emsp;&emsp;<strong>DF =C ×I×R ×U ×X ×A × (1+n×Tr)
                                    …………………………(2)</strong></a-row>
                            <div style="font-size:14px;margin-left: 4vh;">
                                <p>&emsp;&emsp;式中：</p>
                                <p>&emsp;&emsp;DF ———软件测试成本调整因子；</p>
                                <p>&emsp;&emsp;C ———软件复杂性调整因子，取值范围1.0~1.5；</p>
                                <p>&emsp;&emsp;I ———软件完整性调整因子，取值范围1.0~1.8；</p>
                                <p>&emsp;&emsp;R ———测试风险调整因子，取值范围1.0~1.5；</p>
                                <p>&emsp;&emsp;U ———加急测试调整因子，取值范围1.0~3.0；</p>
                                <p>&emsp;&emsp;X ———现场测试调整因子，取值范围1.0~1.3；</p>
                                <p>&emsp;&emsp;A ———评测机构资质调整因子，取值范围1.0~1.2；</p>
                                <p>&emsp;&emsp;Tr ———回归测试调整因子，取值范围0.6~0.8；</p>
                                <p>&emsp;&emsp;n ———回归测试次数。</p>
                                <p>&emsp;&emsp;注：因项目变化导致需要重新进行工作量估算时，应根据该变化的影响范围对工作量估算方法及估算结果进行合理调整。</p>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 3.3 测试人工成本计算如式(3)所示： -->
                    <a-collapse default-active-key="3-3" :bordered="false">
                        <a-collapse-panel key="3-3" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">3.3 测试人工成本计算如式(3)所示：</h3>
                            </template>
                            <a-row justify="center">&emsp;&emsp;<strong>LC =UW ×DF ×S …………………………(3)</strong></a-row>
                            <div style="font-size:14px;margin-left: 4vh;">
                                <p>&emsp;&emsp;式中：</p>
                                <p>&emsp;&emsp;LC ———测试人工成本，单位为元；</p>
                                <p>&emsp;&emsp;UW ———未调整的软件测试人工工作量，单位为人日；</p>
                                <p>&emsp;&emsp;DF ———软件测试成本调整因子；</p>
                                <p>&emsp;&emsp;S ———工作量单价，依据当地平均收入水平调整，单位为元/人日。</p>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 3.4 测试工具成本计算如式(4)所示： -->
                    <a-collapse default-active-key="3-4" :bordered="false">
                        <a-collapse-panel key="3-4" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">3.4 测试工具成本计算如式(4)所示：</h3>
                            </template>
                            <a-row justify="center">&emsp;&emsp;<strong>IC =OT +RT …………………………(4)</strong></a-row>
                            <div style="font-size:14px;margin-left: 4vh;">
                                <p>&emsp;&emsp;式中：</p>
                                <p>&emsp;&emsp;IC ———测试工具成本，单位为元；</p>
                                <p>&emsp;&emsp;OT———自有工具成本，参见4.1.2进行度量，单位为元；</p>
                                <p>&emsp;&emsp;RT———租借工具成本，依据租借费用另行估计，单位为元。</p>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 3.5 软件测试直接成本计算如式(5)所示： -->
                    <a-collapse default-active-key="3-5" :bordered="false">
                        <a-collapse-panel key="3-5" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">3.5 软件测试直接成本计算如式(5)所示：</h3>
                            </template>
                            <a-row justify="center">&emsp;&emsp;<strong>DC =LC +EC +IC …………………………(5)</strong></a-row>
                            <div style="font-size:14px;margin-left: 4vh;">
                                <p>&emsp;&emsp;式中：</p>
                                <p>&emsp;&emsp;DC ———直接成本，单位为元；</p>
                                <p>&emsp;&emsp;LC ———测试人工成本，单位为元；</p>
                                <p>&emsp;&emsp;EC ———测试环境成本，宜不超过软件测试人工成本的20%，单位为元；</p>
                                <p>&emsp;&emsp;IC ———测试工具成本，单位为元。</p>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                    <!-- 3.6 软件测试成本计算如式(6)所示： -->
                    <a-collapse default-active-key="3-6" :bordered="false">
                        <a-collapse-panel key="3-6" style="background-color: white;font-size:16px">
                            <template #header>
                                <h3 style="font-weight:600;">3.6 软件测试成本计算如式(6)所示：</h3>
                            </template>
                            <a-row justify="center">&emsp;&emsp;<strong>STC =DC +IDC …………………………(6)</strong></a-row>
                            <div style="font-size:14px;margin-left: 4vh;">
                                <p>&emsp;&emsp;式中：</p>
                                <p>&emsp;&emsp;STC ———软件测试成本，单位为元；</p>
                                <p>&emsp;&emsp;DC ———直接成本，单位为元；</p>
                                <p>&emsp;&emsp;IDC ———间接成本，宜不超过直接成本的20%，单位为元。</p>
                            </div>
                        </a-collapse-panel>
                    </a-collapse>
                </a-collapse-panel>
            </a-collapse>
        </div>

        <br>
        <a-typography-title :level="3">三、实验步骤及结果</a-typography-title>
        <a-layout-content class="my-layout-content" style="font-size:16px">

            <!--第一步：计算软件测试的人工成本工作量-->
            <div style="margin-left:1vw;">
                <a-typography-title :level="5">步骤一：软件测试的人工成本工作量计算</a-typography-title>
                <a-row class="son-line" style="display: table-cell;vertical-align: middle;">
                    <a-typography-text>（1）计算公式：UW = TW + SR + DR </a-typography-text>
                    <a-popover title="说明：">
                        <template #content>
                            <p>UW —— 未调整的软件测试人工工作量【人日】</p>
                            <p>TW —— 软件测试工作量【人日】</p>
                            <p>SR —— 产品说明评审工作量【人日】， SR=TW*10%</p>
                            <p>DR —— 用户文档集评审工作量【人日】， DR=TW*20%</p>
                        </template>
                        <question-circle-outlined />
                    </a-popover>
                </a-row>

                <a-row class="son-line">（2）计算过程：</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（a）软件测试工作量TW：
                    <a-input-number id="inputTW" v-model:value="TW" size="small" :min="0" :max="100000" />（人日）
                </a-row>
                <a-row class="son-line" style="padding-left:10px ;">
                    （b）未调整的软件测试人工工作量：UW = TW + TW * 10% + TW *20% = {{ TW }} + {{ TW }} * {{ SR_weight }} + {{ TW }} * {{
                        DR_weight }} = {{ UW }}（人日）
                </a-row>
            </div>
            <a-divider style="border-color: lightgray" dashed />

            <!--第二步：计算软件测试成本调整因子-->
            <div style="margin-left:1vw;">
                <a-typography-title :level="5">步骤二：软件测试成本调整因子计算</a-typography-title>
                <a-row class="son-line" style="display: table-cell;vertical-align: middle;">
                    <a-typography-text>（1）计算公式：DF = C * I * R * U * X * A * ( 1 + n * Tr ) </a-typography-text>
                    <a-popover title="说明：">
                        <template #content>
                            <p>DF —— 软件测试成本调整因子; </p>
                            <p>C —— 软件复杂性调整因子，取值范围1.0~1.5; </p>
                            <p>I —— 软件完整性调整因子，取值范围1.0~1.8;</p>
                            <p>R —— 测试风险调整因子，取值范围1.0~1.5; </p>
                            <p>U —— 加急测试调整因子，取值范围1.0~3.0; </p>
                            <p>X —— 现场测试调整因子，取值范围1.0~1.3; </p>
                            <p>A —— 评测机构资质调整因子，取值范围1.0~1.2; </p>
                            <p>Tr —— 回归测试调整因子，取值范围0.6~0.8; </p>
                            <p>n —— 回归测试次数</p>
                        </template>
                        <question-circle-outlined />
                    </a-popover>
                </a-row>

                <a-row class="son-line">（2）计算过程：</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（a）选择调整因子和回归测试次数取值</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（b）根据计算公式得到DF的值</a-row>



                <div style="width:80%;text-align: center;margin: 0 auto">

                    <a-row
                        style="border: 1px solid lightgray;height:50px; border-radius:10px 10px 0px 0px;line-height: 50px;"
                        justify="space-around" align="middle">
                        <a-col :span="24" style="font-weight: 600;">软件测试成本调整因子</a-col>
                    </a-row>

                    <a-row style="border: 1px solid lightgray;border-top:none;" justify="space-around" align="middle">
                        <a-col :span="4">调整因子</a-col>
                        <a-col :span="20">
                            <a-descriptions :model="form" bordered>
                                <a-descriptions-item label="软件复杂性调整因子 C (1.0~1.5)" :span="3" style="width:65%;">
                                    <a-input-number v-model:value="form.valueC" :min="1.0" :max="1.5"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                                <a-descriptions-item label="软件完整性调整因子 I (1.0~1.8)" :span="3">
                                    <a-input-number v-model:value="form.valueI" :min="1.0" :max="1.8"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                                <a-descriptions-item label="测试风险调整因子 R (1.0~1.5)" :span="3">
                                    <a-input-number v-model:value="form.valueR" :min="1.0" :max="1.5"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                                <a-descriptions-item label="加急测试调整因子 U (1.0~3.0)" :span="3">
                                    <a-input-number v-model:value="form.valueU" :min="1.0" :max="3.0"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                                <a-descriptions-item label="现场测试调整因子 X (1.0~1.3)" :span="3">
                                    <a-input-number v-model:value="form.valueX" :min="1.0" :max="1.3"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                                <a-descriptions-item label="评测机构资质调整因子 A (1.0~1.2)" :span="3">
                                    <a-input-number v-model:value="form.valueA" :min="1.0" :max="1.2"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                                <a-descriptions-item label="回归测试调整因子 T (0.6~0.8)" :span="3">
                                    <a-input-number v-model:value="form.valueT" :min="0.6" :max="0.8"
                                        :step="0.1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                            </a-descriptions>
                        </a-col>
                    </a-row>

                    <a-row style="border: 1px solid lightgray;border-top:none;" justify="space-around" align="middle">
                        <a-col :span="4">回归测试次数</a-col>
                        <a-col :span="20">
                            <a-descriptions :model="form" bordered>
                                <a-descriptions-item label="回归测试次数 n" :span="3" style="width:65%;">
                                    <a-input-number v-model:value="form.valueN" :min="0" :step="1" />&emsp;&emsp;&nbsp;
                                </a-descriptions-item>
                            </a-descriptions>
                        </a-col>
                    </a-row>

                    <a-row
                        style="border: 1px solid lightgray;border-top:none;height:100px; border-radius:0px 0px 10px 10px;"
                        justify="space-around" align="middle">
                        <a-statistic title="软件测试成本调整因子(DF)=DF =C*I*R*U*X*A*(1+n*Tr)" :precision="2"
                            :value-style="{ fontSize: '20px' }" :value=DF>
                        </a-statistic>
                    </a-row>
                </div>
            </div>
            <a-divider style="border-color: lightgray" dashed />

            <!--第三步：计算软件测试的人工成本-->
            <div style="margin-left:1vw;">
                <a-typography-title :level="5">步骤三：软件测试的人工成本计算</a-typography-title>
                <a-row class="son-line" style="display: table-cell;vertical-align: middle;">
                    <a-typography-text>（1）计算公式：LC = UW * DF * S </a-typography-text>
                    <a-popover title="说明：">
                        <template #content>
                            <p>LC —— 测试人工成本【元】</p>
                            <p>UW —— 未调整的软件测试人工工作量【人日】</p>
                            <p>DF —— 软件测试成本调整因子</p>
                            <p>S —— 工作量单价，依据当地平均收入水平调整【元/人日】</p>
                        </template>
                        <question-circle-outlined />
                    </a-popover>
                </a-row>
                <a-row class="son-line">（2）计算过程：</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（a）工作量单价S（依据当地平均收入水平调整）：
                    <a-input-number id="inputS" v-model:value="S" size="small" :min="0" :max="100000" />（元/人日）
                </a-row>
                <a-row class="son-line" style="padding-left:10px ;">
                    （b）测试人工成本：LC = {{ UW }} * {{ DF }} * {{ S }} = {{ LC }}（元）
                </a-row>
            </div>
            <a-divider style="border-color: lightgray" dashed />

            <!--第四步：计算测试工具成本
            IC ———测试工具成本，单位为元; 
            OT———自有工具成本，参见4.1.2进行度量，单位为元; 
            RT———租借工具成本，依据租借费用另行估计，单位为元。 
            年限平均法：将固定资产按预计使用年限平均计算折旧均衡地分摊到各期。 
            固定资产年折旧额 = 固定资产应计折旧额 / 固定资产预计使用年限
            测试工具成本=固定资产年折旧额+维护费用
            OT=（固定资产应计折旧额 / 固定资产预计使用年限+维护费用）/200*工具实际使用时间
            OT=(depreciation/usefulLife + maintenanceCosts)/200 * actualUsageTime-->
            <div style="margin-left:1vw;">
                <a-typography-title :level="5">步骤四：软件测试的工具成本计算</a-typography-title>
                <a-row class="son-line" style="display: table-cell;vertical-align: middle;">
                    <a-typography-text>（1）计算公式：IC = OT + RT </a-typography-text>
                    <a-popover title="说明：">
                        <template #content>
                            <p>IC —— 测试工具成本【元】</p>
                            <p>OT —— 自有工具成本【元】</p>
                            <p>RT —— 租借工具成本【元】</p>
                        </template>
                        <question-circle-outlined />
                    </a-popover>
                </a-row>
                <a-row class="son-line">（2）计算过程：年限平均法——将固定资产按预计使用年限平均计算折旧均衡地分摊到各期。</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（a）OT=（固定资产应计折旧额 / 固定资产预计使用年限+维护费用）/200*工具实际使用时间</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（b）RT= 租赁费用 * 租赁期限</a-row>

                <div style="width:85%;text-align: center;margin: 0 auto">
                    <a-row style="border: 1px solid lightgray;height:50px; border-radius:10px 10px 0px 0px;line-height: 50px;"
                        justify="space-around" align="middle">
                        <a-col :span="24" style="font-weight: 600;">软件测试工具成本</a-col>
                    </a-row>
                    <a-row style="border: 1px solid lightgray;border-top:none;padding-top: 10px;" justify="space-around"
                        align="middle">
                        <a-col :span="3">
                            自有工具成本(OT)
                        </a-col>
                        <a-col :span="16">
                            <a-row v-for="(item, index) in OTForm" style="border: 1px solid lightgray;" justify="space-around"
                                align="middle">
                                <a-col :span="3">
                                    <a-row justify="space-around" align="middle">
                                        自有工具{{ index + 1 }}
                                    </a-row>
                                    <a-row justify="space-around" align="middle">
                                        <a-button shape="circle" class="editable-add-btn" style="margin-top:5px" size=small
                                            danger @click="handleDeleteOT(index)"><minus-outlined /></a-button>
                                    </a-row>
                                </a-col>
                                <a-col :span="21">
                                    <a-descriptions :model="item" bordered size=small>
                                        <a-descriptions-item label="固定资产应计折旧额" :span="3" style="width:65%;">
                                            <a-input-number v-model:value="item.depreciation" :min="0" />&emsp;&emsp;&nbsp;元
                                        </a-descriptions-item>
                                        <a-descriptions-item label="固定资产预计使用年限" :span="3">
                                            <a-input-number v-model:value="item.usefulLife" :min="0" />&emsp;&emsp;&nbsp;年
                                        </a-descriptions-item>
                                        <a-descriptions-item label="维护费用" :span="3">
                                            <a-input-number v-model:value="item.maintenanceCosts" :min="0" />&emsp;&emsp;&nbsp;元
                                        </a-descriptions-item>
                                        <a-descriptions-item label="工具实际使用时间（工具使用每年按200个工作日算）" :span="3">
                                            <a-input-number v-model:value="item.actualUsageTime" :min="0" />&emsp;&emsp;&nbsp;天
                                        </a-descriptions-item>
                                    </a-descriptions>
                                </a-col>
                            </a-row>
                            <a-row justify="space-around" align="middle">
                                <a-button class="editable-add-btn" style="width: 100%;margin: 10px 0px 10px 0px;"
                                    @click="handleAddOT" ghost type="primary"><plus-outlined /></a-button>
                            </a-row>
                        </a-col>
                        <a-col :span="3">
                            <a-statistic v-if="OT != -1" title="总计" :value=OT :value-style="{ fontSize: '20px' }" :precision="2"
                                suffix="元"></a-statistic>
                            <a-statistic v-if="OT == -1" :value='0' :value-style="{ fontSize: '20px', color: 'red' }"
                                :precision="2">
                                <template #title>
                                    <a-tooltip placement="right">
                                        <template #title>
                                            <span>请检查输入！</span>
                                        </template>
                                        <question-circle-two-tone />
                                    </a-tooltip>
                                </template>
                            </a-statistic>
                        </a-col>
                    </a-row>
                    <a-row style="border: 1px solid lightgray;border-top:none;padding-top: 10px;" justify="space-around"
                        align="middle">
                        <a-col :span="3">
                            租借工具成本(RT)
                        </a-col>
                        <a-col :span="16">
                            <a-row v-for="(item, index) in RTForm" style="border: 1px solid lightgray;" justify="space-around"
                                align="middle">
                                <a-col :span="3">
                                    <a-row justify="space-around" align="middle">
                                        租借工具{{ index + 1 }}
                                    </a-row>
                                    <a-row justify="space-around" align="middle">
                                        <a-button shape="circle" class="editable-add-btn" style="margin-top:5px" size=small
                                            danger @click="handleDeleteRT(index)"><minus-outlined /></a-button>
                                    </a-row>
                                </a-col>
                                <a-col :span="21">
                                    <a-descriptions :model="item" bordered size=small>
                                        <a-descriptions-item label="租赁费用" :span="3" style="width:65%;">
                                            <a-input-number v-model:value="item.rentExpense" :min="0" />&emsp;元/月
                                        </a-descriptions-item>
                                        <a-descriptions-item label="租赁期限" :span="3">
                                            <a-input-number v-model:value="item.termOfLease" :min="0" />&emsp;&emsp;&nbsp;月
                                        </a-descriptions-item>
                                    </a-descriptions>
                                </a-col>
                            </a-row>
                            <a-row justify="space-around" align="middle">
                                <a-button class="editable-add-btn" style="width: 100%;margin: 10px 0px 10px 0px;"
                                    @click="handleAddRT" ghost type="primary"><plus-outlined /></a-button>
                            </a-row>
                        </a-col>
                        <a-col :span="3">
                            <a-statistic title="总计" :value=RT :value-style="{ fontSize: '20px' }" :precision="2"
                                suffix="元"></a-statistic>
                        </a-col>
                    </a-row>
                    <a-row style="border: 1px solid lightgray;border-top:none;height:100px; border-radius:0px 0px 10px 10px;"
                        justify="space-around" align="middle">
                        <a-statistic title="软件测试工具成本(IC)=OT+RT" :precision="2" :value-style="{ fontSize: '20px' }" :value=IC
                            suffix="元"></a-statistic>
                    </a-row>
                </div>
            </div>
            <a-divider style="border-color: lightgray" dashed />


            <!--第五步：计算软件测试直接成本z
            DC ———直接成本，单位为元; 
            LC ———测试人工成本，单位为元; 
            EC ———测试环境成本，宜不超过软件测试人工成本的20%，单位为元; 
            IC ———测试工具成本，单位为元。 
            -->
            <div style="margin-left:1vw;">
                <a-typography-title :level="5">步骤五：软件测试直接成本计算</a-typography-title>
                <a-row class="son-line" style="display: table-cell;vertical-align: middle;">
                    <a-typography-text>（1）计算公式：DC = LC + EC + IC </a-typography-text>
                    <a-popover title="说明：">
                        <template #content>
                            <p>DC —— 直接成本【元】</p>
                            <p>LC —— 测试人工成本【元】</p>
                            <p>EC —— 测试环境成本，宜不超过软件测试人工成本的20%【元】</p>
                            <p>IC —— 测试工具成本【元】</p>
                        </template>
                        <question-circle-outlined />
                    </a-popover>
                </a-row>
                <a-row class="son-line">（2）计算过程：</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（a）测试环境成本 EC（宜不超过测试人工成本 LC 的20%）：
                    <a-input-number v-model:value="EC" size="small" :min="0" :max="(0.2 * LC).toFixed(2)" />（元）
                </a-row>
                <a-row class="son-line" style="padding-left:10px;">
                    （b）软件测试直接成本：DC = {{ LC }} + {{ EC }} + {{ IC }} = {{ DC }}（元）
                </a-row>
            </div>
            <a-divider style="border-color: lightgray" dashed />

            <!--第六步：计算软件测试成本-->
            <div style="margin-left:1vw;">
                <a-typography-title :level="5">步骤六：软件测试成本计算</a-typography-title>
                <a-row class="son-line" style="display: table-cell;vertical-align: middle;">
                    <a-typography-text>（1）计算公式：STC = DC + IDC </a-typography-text>
                    <a-popover title="说明：">
                        <template #content>
                            <p>STC —— 软件测试成本【元】</p>
                            <p>DC —— 直接成本【元】</p>
                            <p>IDC —— 间接成本，宜不超过直接成本的20%【元】</p>
                        </template>
                        <question-circle-outlined />
                    </a-popover>
                </a-row>
                <a-row class="son-line">（2）计算过程：</a-row>
                <a-row class="son-line" style="padding-left:10px ;">（a）间接成本 IDC（宜不超过直接成本 DC 的20%）：
                    <a-input-number v-model:value="IDC" size="small" :min="0" :max="(0.2 * DC).toFixed(2)" />（元）
                </a-row>
                <a-row class="son-line" style="padding-left:10px;">
                    （b）软件测试成本：STC = {{ DC }} + {{ IDC }} = {{ STC }}（元）
                </a-row>
            </div>
            <a-divider style="border-color: lightgray" dashed />
        </a-layout-content>
        <!--a-layout-footer class="my-layout-footer">实验结束！</!--a-layout-footer-->

        <a-typography-title :level="3">四、实验思考</a-typography-title>
        <a-textarea v-model:value="thinking" placeholder="请在此处填写您的实验思考" allow-clear size="large" :rows="6" />
        <!-- <br/>
        <a-row justify="end" > 
            <a-col :span="3">
                <a-button  style="width:9vw;" type="primary" shape="round">
                    <template #icon>
                        <upload-outlined />
                    </template>提交实验报告
                </a-button>
            </a-col>
        </a-row> -->
    </a-layout>

    <a-back-top />
</template>

<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { ECDH } from 'crypto';
import { defineComponent, reactive, computed, ref, watch } from 'vue';
import type { Ref } from 'vue';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

//自有工具数组元素类型
interface OTFormDataType {
    depreciation: number,
    usefulLife: number,
    maintenanceCosts: number,
    actualUsageTime: number,
}

//租借工具数组元素类型
interface RTFormDataType {
    rentExpense: number,
    termOfLease: number,
}

export default defineComponent({
    name: 'Exp4_group9',
    setup() {
        const GBtestlink = "http://c.gb688.cn/bzgk/gb/showGb?type=online&hcno=19B82C39FB3B9DF0A35D28122C07B053";
        const TW = ref<number>(0);//软件测试工作量
        const SR_weight = ref<number>(0.1);//产品说明评审工作量权重
        const DR_weight = ref<number>(0.2);//用户文档集评审工作量权重
        const S = ref<number>(0);//工作量单价
        const EC = ref<number>(0);//测试环境成本
        const IDC = ref<number>(0);//间接成本
        const thinking = ref<string>('');

        const reportername = ref<string>('');//报告人姓名
        const experimentdate = ref<Dayjs>();//实验时间

        const form = reactive({//测试成本因子

            valueC: 1.0,
            valueI: 1.0,
            valueR: 1.0,
            valueU: 1.0,
            valueX: 1.0,
            valueA: 1.0,
            valueT: 0.6,
            valueN: 1,
        });

        // const DF = computed(() => {
        //       return form.valueC*form.valueI*form.valueR*form.valueU*form.valueX*form.valueA*(1+form.valueN*form.valueT);
        //     });



        //未调整的软件测试人工工作量
        const UW = computed(() => {
            var x = Math.round((TW.value + TW.value * SR_weight.value + TW.value * DR_weight.value) * 100) / 100;
            return x;
        });

        //软件测试人工成本调整因子
        const DF = computed(() => {
            //修改这里
            var x = form.valueC * form.valueI * form.valueR * form.valueU * form.valueX * form.valueA * (1 + form.valueN * form.valueT);
            return x;
        });

        const calculate = (event: Event) => {
            event.preventDefault();
            console.log('DF', DF.value);
        };

        //软件测试人工成本
        const LC = computed(() => {
            var x = Math.round((UW.value * DF.value * S.value) * 100) / 100;
            return x;
        });


        //自有工具数组
        const OTForm: Ref<OTFormDataType[]> = ref([
            {
                depreciation: 0,
                usefulLife: 1,
                maintenanceCosts: 0,
                actualUsageTime: 1,
            },
        ]);

        //租借工具数组
        const RTForm: Ref<RTFormDataType[]> = ref([
            {
                rentExpense: 0,
                termOfLease: 0,
            },
        ]);

        //自有工具成本
        const OT = computed(() => {
            var x = 0;
            for (var i = 0; i < OTForm.value.length; i++) {
                x += Math.round(((OTForm.value[i].depreciation / OTForm.value[i].usefulLife + OTForm.value[i].maintenanceCosts) / 200) *
                    OTForm.value[i].actualUsageTime);
            }
            if (!x && x != 0 || x == Infinity) {
                return -1
            }
            return x;
        });

        //租借工具成本
        const RT = computed(() => {
            var x = 0;
            for (var i = 0; i < RTForm.value.length; i++) {
                x += RTForm.value[i].rentExpense * RTForm.value[i].termOfLease;
            }
            if (!x && x != 0 || x == Infinity) {
                return -1
            }
            return x;
        });

        //测试工具成本
        const IC = computed(() => {
            if (!(OT.value + RT.value) || OT.value < 0) {
                return 0;
            }
            else {
                return OT.value + RT.value;
            }
        });

        //增加自有工具
        const handleAddOT = () => {
            const newData = {
                depreciation: 0,
                usefulLife: 1,
                maintenanceCosts: 0,
                actualUsageTime: 1,
            };
            OTForm.value.push(newData);
        };

        //删除自有工具
        const handleDeleteOT = (index) => {
            OTForm.value.splice(index, 1);
        };

        //增加租借工具
        const handleAddRT = () => {
            const newData = {
                rentExpense: 0,
                termOfLease: 0,
            };
            RTForm.value.push(newData);
        };

        //删除租借工具
        const handleDeleteRT = (index) => {
            RTForm.value.splice(index, 1);
        };

        //软件测试直接成本 DC = {{LC}} + {{EC}} +{{IC}} 
        const DC = computed(() => {
            var x = Math.round(LC.value + EC.value + IC.value);
            return x;
        });

        //软件测试成本
        const STC = computed(() => {
            var x = Math.round(DC.value + IDC.value);
            return x;
        });
        const activeKey1 = ref(['1', '2', '3']);
        watch(activeKey1, val => {
            console.log(val);
        });

        return {
            locale: zhCN,
            reportername,//报告人
            experimentdate,//实验时间
            GBtestlink,
            UW,
            TW,
            SR_weight,
            DR_weight,
            form,
            DF,
            calculate,
            S,
            LC,
            OTForm,
            RTForm,
            OT,
            RT,
            handleAddOT,
            handleDeleteOT,
            handleAddRT,
            handleDeleteRT,
            IC,
            DC,
            EC,
            IDC,
            STC,
            thinking,
            activeKey1,
        };
    },
    computed: {
    },
    methods: {
        jumpToGB() {
            window.open(this.GBtestlink, '_blank');
        },
    }
});
</script>

<style scoped lang="less">
// .GBlink {
//     margin-left: auto;
//     color: #1896ff;
//     text-decoration: underline;
//     cursor: pointer;
// }

.my-layout-header {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
}

// .my-layout-content{
// }
.my-layout-footer {
    text-align: center;
    font-size: large;
    background-color: white;
}

.son-line {
    line-height: 30px;
}
</style>