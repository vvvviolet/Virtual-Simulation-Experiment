<template>
    <div style="padding-top:60px;padding-bottom:20px">
        <a-config-provider :locale="locale">
            <p style="line-height:200%;font-size: 16px;">
                <a-row justify="center">
                    <a-col span="6">课程名称：软件工程经济学</a-col>
                    <a-col span="6">课号：420279</a-col>
                    <a-col span="6">实验项目名称：软件规模度量实验</a-col>
                </a-row>
                <a-row justify="center">
                    <a-col span="6">实验时间：<span style="border-bottom: 1px solid grey;border-radius: none;"><a-date-picker
                                v-model="experimentdate" :bordered="false"
                                style="width:150px;padding-left:3px;padding-right:3px;"
                                placeholder="点击选择实验时间" /></span></a-col>
                    <a-col span="6">实验报告人： <span style="border-bottom: 1px solid grey;border-radius: none;"><a-input
                                v-model="reportername" placeholder="请输入报告人姓名" size="small" :bordered="false"
                                style="width:18vh;"></a-input></span>
                    </a-col>
                    <a-col span="6"></a-col>
                </a-row>
            </p>
        </a-config-provider>
    </div>
    <!-- <span> {{ test }}</span> -->
    <h2>一、实验目的  </h2>
    <p class="content">1.理解国家标准《软件测试成本度量规范》中软件测试成本度量原理，通过实验操作掌握软件测试成本度量过程。</p>
    <p class="content">2.以小组为单位，根据本小组“软件工程管理与经济”课程设计项目架构及组件等设计成果，使用《软件测试成本度量规范》中的方法，估算该项目的测试成本。 </p>
    <p class="content">3.本实验为课内设计性实验项目，实验学时 1 学时，完成实验报告 1 学时。</p>
    
    <!-- <h1 class="title">实验1 基于COSMIC的小型软件项目规模度量实验

        <a-button class="button1" type="primary" shape="round" @click="click_button1">
            <template #icon>
                <DownloadOutlined />
            </template>实验指导书下载
        </a-button>
        <a-button class="button2" type="primary" shape="round" >
            <template #icon>
                <DownloadOutlined />
            </template>实验报告模板下载
        </a-button>


    </h1> -->
    <!-- <span> {{ test }}</span> -->
    <!-- <h2>一、实验目的  </h2>
    <a-input></a-input>
    <h2>二、实验原理  </h2>
    <a-input></a-input>-->
    <br>
    <h2>二、实验原理  </h2>
    <p class="content">1.COSMIC 方法通过使用一组模型、原则、规则和过程，来度量某给定软件块的功能用户需求（简称 FUR）。</p>
    <p class="content">2.其结果是一个 “量值”（由 ISO 定义），代表了软件块按照 COSMIC 方法度量得到的功能规模。这个数值是一个定比刻度类型1，因此可用于各种合法的数学运算。</p>
    <p class="content">3.COSMIC 方法采用了 ISO 中关于功能用户需求（FUR）的定义。</p>
    <br>
    <div class="pagediv">
    <!-- <div class="pagediv" v-if="p1show"> -->
        <h2>三、实验步骤 </h2>
        <p class="firsttitle">第一阶段：度量策略阶段</p>

        <div class="stepdiv">
            <p class="secondtitle">第一步：确定FSM的目的</p>
            <a-input class="input" v-model:value='objective' @change="objectOk()"></a-input>
            <a class="finish">{{ is_objective_finished }}</a>
            <p class="content">FSM的目的应该在进行特定的度量活动前确定。</p>
            <p class="content">实验操作：输入实验案例的度量目的</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第二步：确定FSM的度量范围</p>
            <a-input class="input" v-model:value='scope' @change="scopeOk()"></a-input>
            <a class="finish">{{ is_scope_finished }}</a>
            <p class="content">FSM的范围应该在进行特定的度量活动前确定。</p>
            <p class="content">实验操作：输入实验案例的度量范围</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第三步：识别FUR</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showFUR()">
                <template #icon>
                    <AimOutlined />
                </template>识别FUR
            </a-button>
            <a class="finish">{{ is_FUR_finished }}</a>
            <a-modal v-model:visible="FURmodal" 
                    title="FUR" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="FUROk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addFUR">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增FUR
                </a-button>
                <a-table bordered :data-source="FUR_content" :columns="FUR_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="FUR_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='FUR_editableData[record.key].value' 
                                        @pressEnter="saveFUR(record.key)" />
                                    <check-outlined class="check-icon" @click="saveFUR(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editFUR(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'FUR_index'">
                            <div>
                                {{ text || ' ' }}
                                <CaretUpOutlined class="caretup-icon" @click="edit_FUR_index(record.key,0)"/>
                                <CaretDownOutlined class="caretdown-icon" @click="edit_FUR_index(record.key,1)"/>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'FUR_action'">
                            <a-popconfirm v-if="FUR_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteFUR(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <p class="content">在FSM的范围内识别的FUR应该作为待度量软件功能规模的唯一来源。</p>
            <p class="content">实验操作：识别实验案例中的FUR</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第四步：识别层</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showLevel()">
                <template #icon>
                    <AimOutlined />
                </template>识别层
            </a-button>
            <a class="finish">{{ is_Level_finished }}</a>
            <SwapRightOutlined />
            <a-button class="addbutton" type="dashed" shape="round" @click="showBlock()">
                <template #icon>
                    <AimOutlined />
                </template>识别软件块
            </a-button>
            <a class="finish">{{ is_Block_finished }}</a>
            <a-modal v-model:visible="Levelmodal" 
                    title="层" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="LevelOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addLevel">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增层
                </a-button>
                <a-table bordered :data-source="Level_content" :columns="Level_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="Level_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Level_editableData[record.key].value' 
                                        @pressEnter="saveLevel(record.key)" />
                                    <check-outlined class="check-icon" @click="saveLevel(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editLevel(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Level_action'">
                            <a-popconfirm v-if="Level_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteLevel(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <a-modal v-model:visible="Blockmodal" 
                    title="软件块" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="BlockOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addBlock">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增软件块
                </a-button>
                <a-table bordered :data-source="Block_content" :columns="Block_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="Block_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Block_editableData[record.key].value' 
                                        @pressEnter="saveBlock(record.key)" />
                                    <check-outlined class="check-icon" @click="saveBlock(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editBlock(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Level'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="Level_content"
                                @change="(value)=>changeLevel(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'Block_action'">
                            <a-popconfirm v-if="Block_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteBlock(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <p class="content">软件的功能组件可能存在于软件操作环境中的不同层级中。</p>
            <p class="content">如果度量活动需要，则每一层级都应识别。</p>
            <p class="content">待度量软件块的范围不应该跨层。</p>
            <p class="content">实验操作：识别实验案例中的层</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第五步：识别功能用户</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showUser">
                <template #icon>
                    <AimOutlined />
                </template>识别功能用户
            </a-button>
            <a class="finish">{{ is_User_finished }}</a>
            <a-modal v-model:visible="Usermodal" 
                    title="功能用户" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="UserOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addUser">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增功能用户
                </a-button>
                <a-table bordered :data-source="User_content" :columns="User_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="User_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='User_editableData[record.key].value' 
                                        @pressEnter="saveUser(record.key)" />
                                    <check-outlined class="check-icon" @click="saveUser(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editUser(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'FUR'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="FUR_content"
                                @change="(value)=>changeFUR(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'User_action'">
                            <a-popconfirm v-if="User_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteUser(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <p class="content">在FSM范围内的软件FUR中，应该识别所有触发功能处理的功能用户（向功能处理提供信息或从功能处理接受信息）。</p>
            <p class="content">实验操作：识别实验案例中的功能用户</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第六步：识别软件边界</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showSide">
                <template #icon>
                    <AimOutlined />
                </template>识别边界
            </a-button>
            <a class="finish">{{ is_Side_finished }}</a>
            <a-modal v-model:visible="Sidemodal" 
                    title="边界" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="SideOk">
                <a-table bordered :data-source="FUR_content" :columns="Side_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'Block'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="Block_content"
                                @change="(value)=>changeBlock(value,record.key)"
                            ></a-select>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <p class="content">应该识别在FSM范围内每个层级的每个软件块的边界。</p>
            <p class="content">实验操作：识别实验案例中的软件边界</p>
        </div>

        <!-- <a-button class="nextbutton" shape="round" @click="GotoPage(2)">
            下一页
            <template #icon>
                <SwapRightOutlined />
            </template>
        </a-button>
        <a-button class="pagebutton"  shape="square" @click="GotoPage(4)">
            04
        </a-button>
        <a-button class="pagebutton"  shape="square" @click="GotoPage(3)">
            03
        </a-button>
         <a-button class="pagebutton" shape="square" @click="GotoPage(2)">
            02
        </a-button>
         <a-button class="pagebutton" type="primary" shape="square">
            01
        </a-button> -->
    </div>

    <div class="pagediv">
    <!-- <div class="pagediv" v-if="p2show"> -->
        <p class="firsttitle">第二阶段：映射阶段</p>

        <div class="stepdiv">
            <p class="secondtitle">第七步：识别功能处理</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showDeal">
                <template #icon>
                    <AimOutlined />
                </template>识别功能处理
            </a-button>
            <a class="finish">{{ is_Deal_finished }}</a>
            <SwapRightOutlined />
            <a-button class="addbutton" type="dashed" shape="round" @click="showSub_Deal">
                <template #icon>
                    <AimOutlined />
                </template>识别子处理
            </a-button>
            <a class="finish">{{ is_Sub_Deal_finished }}</a>
            <a-modal v-model:visible="Dealmodal" 
                    title="功能处理" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="DealOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addDeal">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增功能处理
                </a-button>
                <a-table bordered :data-source="Deal_content" :columns="Deal_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="Deal_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Deal_editableData[record.key].value' 
                                        @pressEnter="saveDeal(record.key)" />
                                    <check-outlined class="check-icon" @click="saveDeal(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editDeal(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Deal_action'">
                            <a-popconfirm v-if="Deal_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteDeal(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <a-modal v-model:visible="Sub_Dealmodal" 
                    title="子处理" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="Sub_DealOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addSub_Deal">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增子处理
                </a-button>
                <a-table bordered 
                        :data-source="Sub_Deal_content" 
                        :columns="Sub_Deal_columns"
                        :scroll="{ x: 1300}">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="Sub_Deal_editableData1[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Sub_Deal_editableData1[record.key].value' 
                                        @pressEnter="saveSub_Deal1(record.key)" />
                                    <check-outlined class="check-icon" @click="saveSub_Deal1(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editSub_Deal1(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Event'">
                            <div class="table-cell">
                                <div v-if="Sub_Deal_editableData2[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Sub_Deal_editableData2[record.key].Event' 
                                        @pressEnter="saveSub_Deal2(record.key)" />
                                    <check-outlined class="check-icon" @click="saveSub_Deal2(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editSub_Deal2(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Deal'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="Deal_content"
                                @change="(value)=>Sub_Deal_changeDeal(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'FUR'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="FUR_content"
                                @change="(value)=>Sub_Deal_changeFUR(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'User'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="User_content"
                                @change="(value)=>Sub_Deal_changeUser(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'Sub_Deal_action'">
                            <a-popconfirm v-if="Sub_Deal_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteSub_Deal(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <p class="content">FSM范围内识别的每个功能处理应该具备以下特点：</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;a) 源自至少一个可识别的FUR。</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;b) 由功能用户的输入数据移动触发，以通知功能处理它已检测到的触发事件。</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;c) 至少包含两个数据移动，通常是一个输入加一个输出或写。</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;d) 属于且仅属于一个层级。</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;e) 根据其FUR，当需要达到某个时间点时是已结束的状态。</p>
            <p class="content">实验操作：识别实验案例中的功能处理</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第八步：识别兴趣对象和数据组</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showObject()">
                <template #icon>
                    <AimOutlined />
                </template>识别兴趣对象
            </a-button>
            <a class="finish">{{ is_Object_finished }}</a>
            <SwapRightOutlined />
            <a-button class="addbutton" type="dashed" shape="round" @click="showArray()">
                <template #icon>
                    <AimOutlined />
                </template>识别数据组
            </a-button>
            <a class="finish">{{ is_Array_finished }}</a>
            <a-modal v-model:visible="Objectmodal" 
                    title="兴趣对象" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="ObjectOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addObject">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增兴趣对象
                </a-button>
                <a-table bordered :data-source="Object_content" :columns="Object_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="Object_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Object_editableData[record.key].value' 
                                        @pressEnter="saveObject(record.key)" />
                                    <check-outlined class="check-icon" @click="saveObject(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editObject(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Object_action'">
                            <a-popconfirm v-if="Object_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteObject(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <a-modal v-model:visible="Arraymodal" 
                    title="数据组" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="ArrayOk">
                <a-button class="addbutton" type="dashed" shape="round" @click="addArray">
                    <template #icon>
                        <PlusOutlined />
                    </template>新增数据组
                </a-button>
                <a-table bordered :data-source="Array_content" :columns="Array_columns">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'value'">
                            <div class="table-cell">
                                <div v-if="Array_editableData[record.key]" class="table-cell-input">
                                    <a-input v-model:value='Array_editableData[record.key].value' 
                                        @pressEnter="saveArray(record.key)" />
                                    <check-outlined class="check-icon" @click="saveArray(record.key)" />
                                </div>
                                <div v-else class="table-cell-text">
                                    {{ text || ' ' }}
                                    <edit-outlined class="edit-icon" @click="editArray(record.key)" />
                                </div>
                            </div>
                        </template>
                        <template v-else-if="column.dataIndex === 'Object'">
                            <a-select
                                :value='text'
                                style="width: 150px"
                                :options="Object_content"
                                @change="(value)=>changeObject(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'Array_action'">
                            <a-popconfirm v-if="Array_content.length" 
                                title="确定要删除吗?" 
                                @confirm="deleteArray(record.key)" 
                                okText="确定" 
                                cancelText="取消">
                                <a>删除</a>
                            </a-popconfirm>
                        </template>
                    </template>
                </a-table>
            </a-modal>
            <p class="content">FSM范围中识别的每个数据组应该：</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;a) 通过其独一无二的数据属性的集合而具有唯一性和可区分性。</p>
            <p class="content">&nbsp;&nbsp;&nbsp;&nbsp;b) 直接关联到软件FUR中描述的某个兴趣对象。</p>
            <p class="content">实验操作：识别实验案例中的兴趣对象和数据组</p>
        </div>

        <div class="stepdiv">
            <p class="secondtitle">第九步：识别数据移动</p>
            <a-button class="addbutton" type="dashed" shape="round" @click="showMovement">
                <template #icon>
                    <AimOutlined />
                </template>识别数据移动
            </a-button>
            <a class="finish">{{ is_Movement_finished }}</a>
            <a-modal v-model:visible="Movementmodal" 
                    title="数据移动" 
                    width="800px"
                    :closable=false
                    :cancel-button-props="{ style: { display: 'none' } }"
                    okText="确定"
                    @ok="MovementOk">
                <a-table bordered 
                        :data-source="Sub_Deal_content" 
                        :columns="Movement_columns"
                        :scroll="{ x: 1420}">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'Object'">
                            <a-select
                                :value='text'
                                style="width: 120px"
                                :options="Object_content"
                                @change="(value)=>Movement_changeObject(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'Array'">
                            <a-select
                                :value='text'
                                style="width: 120px"
                                :options="Array_content"
                                @change="(value)=>Movement_changeArray(value,record.key)"
                            ></a-select>
                        </template>
                        <template v-else-if="column.dataIndex === 'Type'">
                            <a-select
                                :value='text'
                                style="width: 100px"
                                :options="Type_content"
                                @change="(value)=>changeType(value,record.key)"
                            ></a-select>
                        </template>
                        <!-- <template v-else-if="column.dataIndex === 'Size'">
                            <div>
                                {{ text || ' ' }}
                            </div>
                        </template> -->
                    </template>
                </a-table>
            </a-modal>
            <p class="content">此步骤包括识别每个功能处理的数据移动（输入、输出、读、写）。</p>
            <p class="content">实验操作：识别实验案例中的数据移动</p>
        </div>
        
        <!-- <a-button class="nextbutton" shape="round" @click="GotoPage(3)">
            下一页
            <template #icon>
                <SwapRightOutlined />
            </template>
        </a-button>
        <a-button class="pagebutton"  shape="square" @click="GotoPage(4)">
            04
        </a-button>
        <a-button class="pagebutton"  shape="square" @click="GotoPage(3)">
            03
        </a-button>
         <a-button class="pagebutton" shape="square" type="primary">
            02
        </a-button>
         <a-button class="pagebutton" shape="square" @click="GotoPage(1)">
            01
        </a-button>
        <a-button class="previousbutton" shape="round" @click="GotoPage(1)">
            上一页
            <template #icon>
                <SwapLeftOutlined />
            </template>
        </a-button> -->
    </div>

    <div class="pagediv">
    <!-- <div class="pagediv" v-if="p3show"> -->
        <p class="firsttitle">第三阶段：度量阶段</p>
    
        <div class="stepdiv">
            <a-table :data-source="Deal_content" :pagination="false">
                    <template #bodyCell="{ column, text, record }">
                        <a-table bordered 
                            :data-source="Result[record.key-1]" 
                            :columns="Result_columns"
                            :pagination="false">
                            <template #title>{{Deal_content[record.key-1].value}}</template>
                            <template #footer>小计：&nbsp;{{ResultCount[record.key-1]}}&nbsp;CFP</template>
                        </a-table>
                    </template>
            </a-table>
            <p class="End"><strong>合计功能点数：&nbsp;{{ Count }}</strong></p>
        </div>

        <!-- <a-button class="nextbutton" shape="round" @click="GotoPage(4)">
            下一页
            <template #icon>
                <SwapRightOutlined />
            </template>
        </a-button>
        <a-button class="pagebutton"  shape="square" @click="GotoPage(4)">
            04
        </a-button>
        <a-button class="pagebutton"  type="primary" shape="square" >
            03
        </a-button>
         <a-button class="pagebutton" shape="square" @click="GotoPage(2)">
            02
        </a-button>
         <a-button class="pagebutton" shape="square" @click="GotoPage(2)">
            01
        </a-button>
        <a-button class="previousbutton" shape="round" @click="GotoPage(2)">
            上一页
            <template #icon>
                <SwapLeftOutlined />
            </template>
        </a-button> -->
    </div>
    
    <div class="pagediv">
    <!-- <div class="pagediv" v-if="p4show"> -->
        <h2>四、实验心得 </h2>
        <div>
            <a-textarea :rows="8" class="Exp" v-model:value='Exp' @change="ExpOk()"></a-textarea>
            <a class="finish">{{ is_Exp_finished }}</a>
        </div>
        <br/>
        <!-- <a-button class="submit" type="primary" shape="round">
            实验报告提交
            <template #icon>
                <DownloadOutlined />
            </template>
        </a-button>
        <a-button class="pagebutton" type="primary" shape="square">
            04
        </a-button>
        <a-button class="pagebutton"  shape="square" @click="GotoPage(3)" >
            03
        </a-button>
         <a-button class="pagebutton" shape="square" @click="GotoPage(2)">
            02
        </a-button>
         <a-button class="pagebutton" shape="square" @click="GotoPage(1)">
            01
        </a-button>
        <a-button class="previousbutton"  shape="round" @click="GotoPage(3)">
            上一页 
            <template #icon>
                <SwapLeftOutlined />
            </template>
        </a-button> -->
    </div>

</template>

<script>

export default {
    name: 'Exp1_COSMIC',
    data() {
        return {
            experimentdate: 0,//实验时间
            reportername: '',//实验人姓名
            //页面切换逻辑
            p1show: true,
            p2show: false,
            p3show: false,
            p4show: false,
            //cosmic_data
            objective:'',//度量目的
            is_objective_finished:'',
            scope:'',//度量范围
            is_scope_finished:'',
            //FUR弹窗
            FURmodal: false, //  是否显示FURModal
            is_FUR_finished:'',
            FUR_content: [],
            FUR_editableData: [],
            FUR_columns: [
                {
                    title: 'FUR名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '600px',
                },
                {
                    title: '颗粒度级别',
                    dataIndex: 'FUR_index',
                    key: 'FUR_index',
                    width: '100px',
                },
                {
                    title: '操作',
                    dataIndex: 'FUR_action',
                    key: 'FUR_action',
                    width: '100px',
                },
            ],
            //层弹窗
            Levelmodal: false, //  是否显示LevelModal
            is_Level_finished:'',
            Level_content: [],
            Level_editableData: [],
            Level_columns: [
                {
                    title: '层名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '700px',
                },
                {
                    title: '操作',
                    dataIndex: 'Level_action',
                    key: 'Level_action',
                    width: '100px',
                },
            ],
            //软件块弹窗
            Blockmodal: false, //  是否显示BlockModal
            is_Block_finished:'',
            Block_content: [],
            Block_editableData: [],
            Block_columns: [
                {
                    title: '软件块名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '500px',
                },
                {
                    title: '所属层',
                    dataIndex: 'Level',
                    key: 'Level',
                    width: '200px',
                },
                {
                    title: '操作',
                    dataIndex: 'Block_action',
                    key: 'Block_action',
                    width: '100px',
                },
            ],
            //功能用户弹窗
            Usermodal: false, //  是否显示UserModal
            is_User_finished:'',
            User_content: [],
            User_editableData: [],
            User_columns: [
                {
                    title: '功能用户名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '500px',
                },
                {
                    title: '所属FUR',
                    dataIndex: 'FUR',
                    key: 'FUR',
                    width: '200px',
                },
                {
                    title: '操作',
                    dataIndex: 'User_action',
                    key: 'User_action',
                    width: '100px',
                },
            ],
            //边界弹窗
            Sidemodal: false, //  是否显示SideModal
            is_Side_finished:'',
            Side_columns: [
                {
                    title: 'FUR名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '500px',
                },
                {
                    title: '所属软件块',
                    dataIndex: 'Block',
                    key: 'Block',
                    width: '300px',
                },
            ],
            //功能处理弹窗
            Dealmodal: false, //  是否显示DealModal
            is_Deal_finished:'',
            Deal_content: [],
            Deal_editableData: [],
            Deal_columns: [
                {
                    title: '功能处理名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '700px',
                },
                {
                    title: '操作',
                    dataIndex: 'Deal_action',
                    key: 'Deal_action',
                    width: '100px',
                },
            ],
            //子处理弹窗
            Sub_Dealmodal: false, //  是否显示Sub_DealModal
            is_Sub_Deal_finished:'',
            Sub_Deal_content: [],
            Sub_Deal_editableData1: [],
            Sub_Deal_editableData2: [],
            Sub_Deal_columns: [
                {
                    title: '子处理名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '300px',
                },
                {
                    title: '触发事件',
                    dataIndex: 'Event',
                    key: 'Event',
                    width: '300px',
                },
                {
                    title: '所属功能处理',
                    dataIndex: 'Deal',
                    key: 'Deal',
                    width: '200px',
                },
                {
                    title: 'FUR',
                    dataIndex: 'FUR',
                    key: 'FUR',
                    width: '200px',
                },
                {
                    title: '功能用户',
                    dataIndex: 'User',
                    key: 'User',
                    width: '200px',
                },
                {
                    title: '操作',
                    dataIndex: 'Sub_Deal_action',
                    key: 'Sub_Deal_action',
                    width: '100px',
                    fixed: 'right'
                },
            ],
            //兴趣对象弹窗
            Objectmodal: false, //  是否显示ObjectModal
            is_Object_finished:'',
            Object_content: [],
            Object_editableData: [],
            Object_columns: [
                {
                    title: '兴趣对象名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '700px',
                },
                {
                    title: '操作',
                    dataIndex: 'Object_action',
                    key: 'Object_action',
                    width: '100px',
                },
            ],
            //数据组弹窗
            Arraymodal: false, //  是否显示ArrayModal
            is_Array_finished:'',
            Array_content: [],
            Array_editableData: [],
            Array_columns: [
                {
                    title: '数据组名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '500px',
                },
                {
                    title: '所属兴趣对象',
                    dataIndex: 'Object',
                    key: 'Object',
                    width: '200px',
                },
                {
                    title: '操作',
                    dataIndex: 'Array_action',
                    key: 'Array_action',
                    width: '100px',
                },
            ],
            //数据移动弹窗
            Movementmodal: false, //  是否显示MovementModal
            is_Movement_finished:'',
            Movement_columns: [
                {
                    title: '子处理名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '300px',
                },
                {
                    title: '触发事件',
                    dataIndex: 'Event',
                    key: 'Event',
                    width: '300px',
                },
                {
                    title: 'FUR',
                    dataIndex: 'FUR',
                    key: 'FUR',
                    width: '200px',
                },
                {
                    title: '功能用户',
                    dataIndex: 'User',
                    key: 'User',
                    width: '200px',
                },
                {
                    title: '兴趣对象',
                    dataIndex: 'Object',
                    key: 'Object',
                    width: '150px',
                    fixed: 'right',
                },
                {
                    title: '数据组',
                    dataIndex: 'Array',
                    key: 'Array',
                    width: '150px',
                    fixed: 'right',
                },
                {
                    title: '数据类型',
                    dataIndex: 'Type',
                    key: 'Type',
                    width: '120px',
                    fixed: 'right',
                },
            ],
            Type_content:[
                {
                    value:'E',
                },
                {
                    value:'X',
                },
                {
                    value:'R',
                },
                {
                    value:'W',
                },
            ],
            //生成表数据
            Result:[],
            ResultCount:[],
            Count:0,
            Result_columns:[
                {
                    title: '子处理名称',
                    dataIndex: 'value',
                    key: 'value',
                    width: '300px',
                },
                {
                    title: '触发事件',
                    dataIndex: 'Event',
                    key: 'Event',
                    width: '300px',
                },
                {
                    title: 'FUR',
                    dataIndex: 'FUR',
                    key: 'FUR',
                    width: '200px',
                },
                {
                    title: '功能用户',
                    dataIndex: 'User',
                    key: 'User',
                    width: '200px',
                },
                {
                    title: '兴趣对象',
                    dataIndex: 'Object',
                    key: 'Object',
                    width: '150px',
                },
                {
                    title: '数据组',
                    dataIndex: 'Array',
                    key: 'Array',
                    width: '150px',
                },
                {
                    title: '数据类型',
                    dataIndex: 'Type',
                    key: 'Type',
                    width: '120px',
                },
                {
                    title: 'CFP',
                    dataIndex: 'Size',
                    key: 'Size',
                    width: '120px',
                },
            ],
            //实验心得
            Exp:'',
            is_Exp_finished:'',
        }
    },
    methods: {
        //页面切换函数
        // GotoPage(i) {
        //     this.p1show=false;
        //     this.p2show=false;
        //     this.p3show=false;
        //     this.p4show=false;
        //     if(i==1){
        //         this.p1show=true;
        //     }
        //     else if(i==2){
        //         this.p2show=true;
        //     }
        //     else if(i==3){
        //         this.p3show=true;
        //         this.result();
        //     }
        //     else if(i==4){
        //         this.p4show=true;
        //     }
        // },
        //cosmic_method
        objectOk(){
            if(this.objective!=""){
                this.is_objective_finished="✅";
            }
            else{
                this.is_objective_finished="⚠️";
            }
        },
        scopeOk(){
            if(this.scope!=""){
                this.is_scope_finished="✅";
            }
            else{
                this.is_scope_finished="⚠️";
            }
        },
        //FUR函数
        showFUR(){
            this.FURmodal=true;
        },
        FUROk(){
            var tag=0;
            for(var i=0;i<this.FUR_content.length;i++){
                if(this.FUR_content[i].value==""){
                    tag=1;
                }
            }
            if(this.FUR_content.length>0&&tag==0){
                this.is_FUR_finished="✅";
            }
            else{
                this.is_FUR_finished="⚠️";
            }
            this.FURmodal=false;
        },
        addFUR(){
            const count = this.FUR_content.length + 1;
            const newData = {
                key: count,
                value: `新增FUR名称 ${count}`,
                FUR_index: 1,
                Block:'',
            };
            this.FUR_content.push(newData);
        },
        deleteFUR(key){
            this.FUR_content = this.FUR_content.filter(item => item.key !== key);
            for (var i = 0; i < this.FUR_content.length; i++) {
                this.FUR_content[i].key = i + 1;
            }
        },
        editFUR(key){
            this.FUR_editableData[key] = this.FUR_content.filter(item => key === item.key)[0];
        },
        edit_FUR_index(key,num){
            if(num==0){
                this.FUR_content.filter(item => key === item.key)[0].FUR_index+=1;
            }
            else if(num==1){
                if(this.FUR_content.filter(item => key === item.key)[0].FUR_index>1){
                    this.FUR_content.filter(item => key === item.key)[0].FUR_index-=1;
                }
            }
        },
        saveFUR (key){
            Object.assign(this.FUR_editableData.filter(item => key === item.key)[0], this.FUR_editableData[key]);
            delete this.FUR_editableData[key];
        },
        //层函数
        showLevel(){
            this.Levelmodal=true;
        },
        LevelOk(){
            var tag=0;
            for(var i=0;i<this.Level_content.length;i++){
                if(this.Level_content[i].value==""){
                    tag=1;
                }
            }
            if(this.Level_content.length>0&&tag==0){
                this.is_Level_finished="✅";
            }
            else{
                this.is_Level_finished="⚠️";
            }
            this.Levelmodal=false;
        },
        addLevel(){
            const count = this.Level_content.length + 1;
            const newData = {
                key: count,
                value:`新增层名称 ${count}`,
            };
            this.Level_content.push(newData);
        },
        deleteLevel(key){
            this.Level_content = this.Level_content.filter(item => item.key !== key);
            for (var i = 0; i < this.Level_content.length; i++) {
                this.Level_content[i].key = i + 1;
            }
        },
        editLevel(key){
            this.Level_editableData[key] = this.Level_content.filter(item => key === item.key)[0];
        },
        saveLevel (key){
            Object.assign(this.Level_editableData.filter(item => key === item.key)[0], this.Level_editableData[key]);
            delete this.Level_editableData[key];
        },
        //软件块函数
        showBlock(){
            this.Blockmodal=true;
        },
        BlockOk(){
            var tag=0;
            for(var i=0;i<this.Block_content.length;i++){
                if(this.Block_content[i].value==""||this.Block_content[i].Level==""){
                    tag=1;
                }
            }
            if(this.Block_content.length>0&&tag==0){
                this.is_Block_finished="✅ ";
            }
            else{
                this.is_Block_finished="⚠️";
            }
            this.Blockmodal=false;
        },
        addBlock(){
            const count = this.Block_content.length + 1;
            const newData = {
                key: count,
                value: `新增软件块名称 ${count}`,
                Level:'',
            };
            this.Block_content.push(newData);
        },
        deleteBlock(key){
            this.Block_content = this.Block_content.filter(item => item.key !== key);
            for (var i = 0; i < this.Block_content.length; i++) {
                this.Block_content[i].key = i + 1;
            }
        },
        editBlock(key){
            this.Block_editableData[key] = this.Block_content.filter(item => key === item.key)[0];
        },
        saveBlock (key){
            Object.assign(this.Block_editableData.filter(item => key === item.key)[0], this.Block_editableData[key]);
            delete this.Block_editableData[key];
        },
        changeLevel(value,key){
            this.Block_content.filter(item => item.key === key)[0].Level=value;
        },
        //功能用户函数
        showUser(){
            this.Usermodal=true;
        },
        UserOk(){
            var tag=0;
            for(var i=0;i<this.User_content.length;i++){
                if(this.User_content[i].value==""||this.User_content[i].FUR==""){
                    tag=1;
                }
            }
            if(this.User_content.length>0&&tag==0){
                this.is_User_finished="✅";
            }
            else{
                this.is_User_finished="⚠️";
            }
            this.Usermodal=false;
        },
        addUser(){
            const count = this.User_content.length + 1;
            const newData = {
                key: count,
                value: `新增功能用户名称 ${count}`,
                FUR:'',
            };
            this.User_content.push(newData);
        },
        deleteUser(key){
            this.User_content = this.User_content.filter(item => item.key !== key);
            for (var i = 0; i < this.User_content.length; i++) {
                this.User_content[i].key = i + 1;
            }
        },
        editUser(key){
            this.User_editableData[key] = this.User_content.filter(item => key === item.key)[0];
        },
        saveUser (key){
            Object.assign(this.User_editableData.filter(item => key === item.key)[0], this.User_editableData[key]);
            delete this.User_editableData[key];
        },
        changeFUR(value,key){
            this.User_content.filter(item => item.key === key)[0].FUR=value;
        },
        //边界函数
        showSide(){
            this.Sidemodal=true;
        },
        SideOk(){
            var tag=0;
            for(var i=0;i<this.FUR_content.length;i++){
                if(this.FUR_content[i].Block==""){
                    tag=1;
                }
            }
            if(this.FUR_content.length>0&&tag==0){
                this.is_Side_finished="✅";
            }
            else{
                this.is_Side_finished="⚠️";
            }
            this.Sidemodal=false;
        },
        changeBlock(value,key){
            this.FUR_content.filter(item => item.key === key)[0].Block=value;
        },
        //功能处理函数
        showDeal(){
            this.Dealmodal=true;
        },
        DealOk(){
            var tag=0;
            for(var i=0;i<this.Deal_content.length;i++){
                if(this.Deal_content[i].value==""){
                    tag=1;
                }
            }
            if(this.Deal_content.length>0&&tag==0){
                this.is_Deal_finished="✅";
            }
            else{
                this.is_Deal_finished="⚠️";
            }
            this.Dealmodal=false;
        },
        addDeal(){
            const count = this.Deal_content.length + 1;
            const newData = {
                key: count,
                value: `新增功能处理名称 ${count}`,
            };
            this.Deal_content.push(newData);
        },
        deleteDeal(key){
            this.Deal_content = this.Deal_content.filter(item => item.key !== key);
            for (var i = 0; i < this.Deal_content.length; i++) {
                this.Deal_content[i].key = i + 1;
            }
        },
        editDeal(key){
            this.Deal_editableData[key] = this.Deal_content.filter(item => key === item.key)[0];
        },
        saveDeal(key){
            Object.assign(this.Deal_editableData.filter(item => key === item.key)[0], this.Deal_editableData[key]);
            delete this.Deal_editableData[key];
        },
        //子处理函数
        showSub_Deal(){
            this.Sub_Dealmodal=true;
        },
        Sub_DealOk(){
            var tag=0;
            for(var i=0;i<this.Sub_Deal_content.length;i++){
                if(this.Sub_Deal_content[i].value==""||this.Sub_Deal_content[i].Event==""||this.Sub_Deal_content[i].Deal==""||this.Sub_Deal_content[i].FUR==""||this.Sub_Deal_content[i].User==""){
                    tag=1;
                }
            }
            if(this.Sub_Deal_content.length>0&&tag==0){
                this.is_Sub_Deal_finished="✅";
            }
            else{
                this.is_Sub_Deal_finished="⚠️";
            }
            this.Sub_Dealmodal=false;
        },
        addSub_Deal(){
            const count = this.Sub_Deal_content.length + 1;
            const newData = {
                key: count,
                value: `新增子处理名称 ${count}`,
                Event:`触发事件名称 ${count}`,
                Deal:'',
                FUR:'',
                User:'',
                Object:'',
                Array:'',
                Type:'',
                Size: 1,
            };
            this.Sub_Deal_content.push(newData);
        },
        deleteSub_Deal(key){
            this.Sub_Deal_content = this.Sub_Deal_content.filter(item => item.key !== key);
            for (var i = 0; i < this.Sub_Deal_content.length; i++) {
                this.Sub_Deal_content[i].key = i + 1;
            }
        },
        editSub_Deal1(key){
            this.Sub_Deal_editableData1[key] = this.Sub_Deal_content.filter(item => key === item.key)[0];
        },
        saveSub_Deal1(key){
            Object.assign(this.Sub_Deal_editableData1.filter(item => key === item.key)[0], this.Sub_Deal_editableData1[key]);
            delete this.Sub_Deal_editableData1[key];
        },
        editSub_Deal2(key){
            this.Sub_Deal_editableData2[key] = this.Sub_Deal_content.filter(item => key === item.key)[0];
        },
        saveSub_Deal2(key){
            Object.assign(this.Sub_Deal_editableData2.filter(item => key === item.key)[0], this.Sub_Deal_editableData2[key]);
            delete this.Sub_Deal_editableData2[key];
        },
        Sub_Deal_changeDeal(value,key){
            this.Sub_Deal_content.filter(item => item.key === key)[0].Deal=value;
        },
        Sub_Deal_changeFUR(value,key){
            this.Sub_Deal_content.filter(item => item.key === key)[0].FUR=value;
        },
        Sub_Deal_changeUser(value,key){
            this.Sub_Deal_content.filter(item => item.key === key)[0].User=value;
        },
        //兴趣对象函数
        showObject(){
            this.Objectmodal=true;
        },
        ObjectOk(){
            var tag=0;
            for(var i=0;i<this.Object_content.length;i++){
                if(this.Object_content[i].value==""){
                    tag=1;
                }
            }
            if(this.Object_content.length>0&&tag==0){
                this.is_Object_finished="✅";
            }
            else{
                this.is_Object_finished="⚠️";
            }
            this.Objectmodal=false;
        },
        addObject(){
            const count = this.Object_content.length + 1;
            const newData = {
                key: count,
                value:`新增兴趣对象名称 ${count}`,
            };
            this.Object_content.push(newData);
        },
        deleteObject(key){
            this.Object_content = this.Object_content.filter(item => item.key !== key);
            for (var i = 0; i < this.Object_content.length; i++) {
                this.Object_content[i].key = i + 1;
            }
        },
        editObject(key){
            this.Object_editableData[key] = this.Object_content.filter(item => key === item.key)[0];
        },
        saveObject(key){
            Object.assign(this.Object_editableData.filter(item => key === item.key)[0], this.Object_editableData[key]);
            delete this.Object_editableData[key];
        },
        //数据组函数
        showArray(){
            this.Arraymodal=true;
        },
        ArrayOk(){
            var tag=0;
            for(var i=0;i<this.Array_content.length;i++){
                if(this.Array_content[i].value==""||this.Array_content[i].Object==""){
                    tag=1;
                }
            }
            if(this.Array_content.length>0&&tag==0){
                this.is_Array_finished="✅";
            }
            else{
                this.is_Array_finished="⚠️";
            }
            this.Arraymodal=false;
        },
        addArray(){
            const count = this.Array_content.length + 1;
            const newData = {
                key: count,
                value: `新增数据组名称 ${count}`,
                Object:'',
            };
            this.Array_content.push(newData);
        },
        deleteArray(key){
            this.Array_content = this.Array_content.filter(item => item.key !== key);
            for (var i = 0; i < this.Array_content.length; i++) {
                this.Array_content[i].key = i + 1;
            }
        },
        editArray(key){
            this.Array_editableData[key] = this.Array_content.filter(item => key === item.key)[0];
        },
        saveArray(key){
            Object.assign(this.Array_editableData.filter(item => key === item.key)[0], this.Array_editableData[key]);
            delete this.Array_editableData[key];
        },
        changeObject(value,key){
            this.Array_content.filter(item => item.key === key)[0].Object=value;
        },
        //数据移动函数
        showMovement(){
            this.Movementmodal=true;
        },
        MovementOk(){
            var tag=0;
            for(var i=0;i<this.Sub_Deal_content.length;i++){
                if(this.Sub_Deal_content[i].Object==""||this.Sub_Deal_content[i].Array==""||this.Sub_Deal_content[i].Type==""){
                    tag=1;
                }
            }
            if(this.Sub_Deal_content.length>0&&tag==0){
                this.is_Movement_finished="✅";
            }
            else{
                this.is_Movement_finished="⚠️";
            }
            this.Sub_Dealmodal=false;
            this.Movementmodal=false;
            this.result();
        },
        Movement_changeObject(value,key){
            this.Sub_Deal_content.filter(item => item.key === key)[0].Object=value;
        },
        Movement_changeArray(value,key){
            this.Sub_Deal_content.filter(item => item.key === key)[0].Array=value;
        },
        changeType(value,key){
            this.Sub_Deal_content.filter(item => item.key === key)[0].Type=value;
        },
        //生成结果函数
        result(){
            this.Count=0;
            for(var i=0;i<this.Deal_content.length;i++){
                this.Result[i]=[];
                this.ResultCount[i]=0;
                for(var j=0;j<this.Sub_Deal_content.length;j++){
                    if(this.Sub_Deal_content[j].Deal==this.Deal_content[i].value){
                        this.Result[i].push(this.Sub_Deal_content[j]);
                        this.ResultCount[i]+=this.Sub_Deal_content[j].Size;
                    }
                }
            }
            for(var i=0;i<this.ResultCount.length;i++){
                this.Count+=this.ResultCount[i];
            }
        },
        ExpOk(){
            if(this.Exp!=""){
                this.is_Exp_finished="✅";
            }
            else{
                this.is_Exp_finished="⚠️";
            }
        },
    }
}
</script>

<style scoped>

.pagediv {
    margin-left: 0px;
    margin-right: 0px;
}

.stepdiv {
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom:20px;
}

.firsttitle {
    font-size: 16px;
    text-indent: 2em;
    margin-left: 10px;
    font-weight: bold;
}

.secondtitle {
    text-indent: 2em;
    font-weight: bold;
}

.finish {
    text-indent: 2em;
    font-weight: bold;
    margin-right: 5px;
}

.nextbutton {
    float: right;
    margin-top: 10px;
    margin-right: 20px;
}

.previousbutton {
    float: right;
    margin-top: 10px;
    margin-right: 5px;
}

.submit {
    float: left;
    margin-top: 10px;
    margin-right: 5px;
}


.pagebutton {
    float: right;
    margin-top: 10px;
    margin-right: 5px;
}

.content {
    text-indent: 2em;
    margin-bottom: 5px;
}

.input {
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 15px;
    width:90%;
}

.Exp {
    margin-left: 40px;
    margin-top: 10px;
    margin-bottom: 15px;
    width:90%;
}

.addbutton {
    margin-left: 10px;
    margin-right:10px;
    margin-top: 10px;
    margin-bottom: 15px;
    border-color: #108ee9;
    color: #108ee9;
    border-width: 1px;
}

.addbutton:hover {
    border-color:#555555;
    color: #555555;
}


.table-cell{
    width:800px;
}

.edit-icon{
    display: none;
    position: absolute;
    right:10px;
    width: 20px;
    cursor: pointer;
    margin-top: 5px;
}

.table-cell-text{
    padding-right:15px;
}

.table-cell-input{
    padding-right:15px;
}

.table-cell:hover .edit-icon{
    display: inline-block;
    color: #108ee9;
}

.check-icon {
    display:inline-block;
    position: absolute;
    right: 10px;
    width: 20px;
    cursor: pointer;
    margin-top: 10px;
}

.caretup-icon {
    display:inline-block;
    position: absolute;
    right: 10px;
    width: 20px;
    cursor: pointer;
    margin-top: 0px;
}

.caretdown-icon {
    display:inline-block;
    position: absolute;
    right: 10px;
    width: 20px;
    cursor: pointer;
    margin-top: 13px;
}

.caretup-icon:hover,
.caretdown-icon:hover,
.check-icon:hover {
   color:#108ee9;
}

.End{
    margin-top: 20px;
    text-align: right;
}

</style> 