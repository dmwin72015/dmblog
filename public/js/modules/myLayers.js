/**
 * Created by admin on 2016/4/1.
 * 做一个弹出层的小插件
 */
;
(function (factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        //amd

    } else if (typeof exports == 'object') {
        //cmd
        module.exports = function (root, $) {
            if (!root) {
                root = window;
            }
            if (!$) {
                $ = typeof window !== 'undefined' ?
                    require('jquery') :
                    require('jquery')(root);
            }
            return factory($, root, root.document);
        };
    } else {
        factory(jQuery, window, document);
    }

}(function ($, window, document, undefined) {
        "use strict";
        var DmLayers={};

        /**默认参数
         * 参数说明：
         * width:    宽度 String
         * height：  高度 String
         * position: 位置 String、JSON；默认：center，垂直左右居中。
         * schame:   主题风格 String
         * type：    类型  String
         *          目前提供：
         *              alert 提示信息框，
         *              prompt 确认提示框,
         *              confirm 输入内容的确认框，
         *              page 仿页面 ，
         *              tips 旁边的小提示框
         *              load 加载
         *              tab  tab层，可以切换内容
         *              photo 相册，图片轮播功能
         * showText：显示的内容 String
         * btn ：    按钮  Array  ；存放按钮上面的文字，例如['确认'，'取消']。
         * time:     关闭时间  number 单位是秒；只有tips，alert，page，load有效果
         * shape:    设置背景 JSON ; 例如：默认{background:#333,opcatiy:0.4}
         * event     触发事件 string；例如：默认 click事件 不传的话
         * */

        var default_options = {
            width: 260,
            height: 'auto',
            position: 'center',
            schame: 'grey',
            type: 'alert',
            showText: '',
            btn:['确认','取消'],
            timer:1500,
            shape:{
                background:'#333',
                opacity:0.4
            },
            event:'click'

        };


        /*
        * 私有方法，内部使用
        * */
        function _getBrowerSize() {
            //获取浏览器可视窗口的大小
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            return {width:w,height:h};
        };
        function _getDocumentSize(){
            //获取文档的高度
            var w = document.body.scrollWidth;
            var h = document.body.scrollHeight;
            return {width:w,height:h};
        };


        /*
         * 暴露方法，外部调用
         * */
        DmLayers._tab = function () {
            //TODO tab窗口模式
        };
        DmLayers._alert = function(){
            //基本的弹窗

        };

        $.fn.Layers = function (options) {


        }

    }
));