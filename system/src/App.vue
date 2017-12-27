<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
    }
   .layout-rightbody{
      display:flex;
      height:100%;
      flex-direction:column;
    }
    .layout-content{
        flex:1;
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
        height: 100%;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .ivu-row-flex{
      height:100%;
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        height:100%;
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Menu-item key="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                         <router-link to='/index' tag='span'>分类模块</router-link>
                    </Menu-item>
                    <Menu-item key="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                       <router-link to='/index' tag='span'>产品模块</router-link>
                    </Menu-item>
                    <Menu-item key="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <router-link to='/index' tag='span'>最新信息</router-link>
                    </Menu-item>
                    <Menu-item key="4">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <router-link to='/upload' tag='span'>上传模块</router-link>
                    </Menu-item>
                    <Menu-item key="4">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <router-link to='/kind' tag='span'>分类模块</router-link>
                    </Menu-item>
                    <Menu-item key="4">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <router-link to='/message' tag='span'>留言模块</router-link>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
             <div class="layout-rightbody">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
               
                <div class="layout-content">
                    <div class="layout-content-main">
                      <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                spanLeft: 4,
                spanRight: 20
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            }
        }
    }
</script>