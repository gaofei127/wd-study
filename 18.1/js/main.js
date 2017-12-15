var app = new Vue({
    el: '#app', //作用域,第一次没加','号，导致输出{{name}}，不知道Vue作用域
    data: {
        name: null,// 在浏览器中输入 app.name = 'b'可实时修改页面渲染，有了Vue不用JS调也能自动变
        age: null,
        sex: null,
    }
});