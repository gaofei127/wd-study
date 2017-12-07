## vue到底是什么？
    一个mvvm框架（库）
    比较容易上手，小乔
    mvc：mvvm

## 官网
    官网：http://cn.vuejs.org
    手册：http://cn.vuejs.org/api

## vue特点
    * 指令以v-xxx
    * 一片html代码配合上json，在new出来vue实例
    * 个人维护
    * 适合：移动端项目，小巧
    * 不兼容低版本IE

##vue基本雏形
    展示一条基本数据：
        先写一片html代码
        json：
            ```
            <body>
                <div id="box">
                    {{msg}}
                </div>
            </body>
            ```
            ```
            new Vue({
                el:"#box",
                data:{
                    msg:'welcome vue!'
                }
            ```

##常用指令
    指令：扩展了html标签的功能，属性

    * v-model
        一般表单元素（input）-双向数据绑定
    * v-for="name in arr"
        {{$index}}/ vue 2.0 已作出改变，直接这样写报错，应写：
        ```
         <li v-for="(k,v,index) in json">
              {{index}} {{v}} {{k}}
          </li>
        ```
    * 事件
        v-on:click/mouseover/mouseouyt/..="函数"
    * 显示隐藏
        v-show="ture/false"

## bootstrap + vue 简易留言板(todolist)
    bootstrap:css框架 
        - 和jQueryMobile一样,只需要给标签赋class,角色
        - bootstrap.js依赖jQuery(html中jQuery引用要在bootstrap前,不然报错)






