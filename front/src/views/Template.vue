<template>
    <el-container style="height:100%">
      <el-header>
        <el-menu class="el-menu-demo" background-color="#409EFF" text-color="#fff" mode="horizontal"
                active-text-color="#fff" :router="true" :ellipsis="false">
            <el-menu-item style="font-size:large">虚拟仿真实验平台</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item style="font-size:large">Hi, xxx</el-menu-item>
          </el-menu>
      </el-header>
    
      <el-container style="height:100%">
        <el-aside width="320px">
          <el-menu
            class="el-menu-vertical-demo"
            :router="true"
          >
          <el-menu-item-group style="font-size: large;" title="实验列表">
            <el-sub-menu index="1">
              <template #title>
                <span>1. 软件规模估算实验(FP 方法)</span>
              </template>
                <el-menu-item index="1-2">IFPUG 方法</el-menu-item>
                <el-menu-item index="/exp1_2">NESMA 方法</el-menu-item>
                <el-menu-item index="1-2">MARK II 方法</el-menu-item>
                <el-menu-item index="1-2">COSMIC 方法</el-menu-item>
            </el-sub-menu>
    
            <el-menu-item index="2">
              <span>2. 软件开发成本估算实验</span>
            </el-menu-item>
    
            <el-menu-item index="/exp3">
              <span>3. 碳排放权供给与需求实验</span>
            </el-menu-item>
    
            <el-menu-item index="/exp4_1">
              <span>4. 软件测试成本估算实验</span>
            </el-menu-item>
    
            <el-sub-menu index="5">
              <template #title>
                <span>5.软件工程经济学方法应用</span>
              </template>
                <el-menu-item index="5-1">软件项目净现值</el-menu-item>
                <el-menu-item index="5-2">IRR 与动态投资回收期实验</el-menu-item>
                <el-menu-item index="5-3">软件经济生命周期实验</el-menu-item>
                <el-menu-item index="5-3">单方案/软件产品经济性分析实验</el-menu-item>
            </el-sub-menu>
            
            <el-sub-menu index="6">
              <template #title>
                <span>6. 软件项目/产品的风险影响与评价实验</span>
              </template>
                <el-menu-item index="5-1">加权平均实验</el-menu-item>
                <el-menu-item index="5-2">蒙特卡洛实验</el-menu-item>
                <el-menu-item index="5-3">软件经济生命周期实验</el-menu-item>
                <el-menu-item index="5-3">单方案/软件产品经济性分析实验</el-menu-item>
            </el-sub-menu>
    
            <el-sub-menu index="7">
              <template #title>
                <span>7.软件项目/产品的不确定性实验</span>
              </template>
                <el-menu-item index="5-1">加权平均实验</el-menu-item>
                <el-menu-item index="5-2">蒙特卡洛实验</el-menu-item>
                <el-menu-item index="5-3">软件经济生命周期实验</el-menu-item>
                <el-menu-item index="5-3">单方案/软件产品经济性分析实验</el-menu-item>
            </el-sub-menu>
    
            <el-menu-item index="8">
              <span>8.软件项目/产品的财务评价实验</span>
            </el-menu-item>
    
            <el-menu-item index="9">
              <span>9. 软件项目进度监督与控制实验项目(EVA 法)</span>
            </el-menu-item>
    
          </el-menu-item-group>
          </el-menu>
    
        </el-aside>
        <el-main>
          <!-- 路由占位 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    </template>
    
    <style>
    .flex-grow {
        flex-grow: 1;
    }
    .el-header {
        --el-header-padding: 0;
    }
    .el-menu-vertical-demo {
      height: 100%;
    }
    .el-menu-item-group__title {
      font-size: 15px;
      padding: 17px 10px 7px;
    }
    </style>
    