var todoList = (function () {

    // var arr = []; //배열
    // var pk=0; //li에 넣을거임 . 각 li의 번호 필요

    function modify(obj, callback){
        $.post("http://10.10.10.96:8080/jsonEx/todo/modify", obj, function (data) { //제이슨 데이터는 자바스크립에서는 자동으로 객체 변환 됨
            console.log(data);
            callback(data.result);
        });
    }

    function remove(pk, callback) {
        $.post("http://10.10.10.96:8080/jsonEx/todo/remove", {pk: pk}, function (data) { //제이슨 데이터는 자바스크립에서는 자동으로 객체 변환 됨

            console.log(data);
            callback(data.result);
        });
    }


    function getAll(callback) { //전체 받기

        $.getJSON("http://10.10.10.96:8080/jsonEx/todo/all",function (list) { //제이슨 데이터는 자바스크립에서는 자동으로 객체 변환 됨

            console.log(list);
            callback(list);
        });

    }

    //클로저
    function add(obj, callback) {
        /*서버 구축 전
        obj['pk'] = pk++; //obj.pk와도 같은 것,,,(?)
        arr.push(obj);
        callback(obj.pk);
        */

        $.post("http://10.10.10.96:8080/jsonEx/todo/add",{title:obj},function (data) {
            console.log(data);
             callback(data.pk); //서버상에서 중복되지 않음.


        },"json");
    }

    return{
        add: add,
        getAll:getAll,
        remove:remove,
        modify:modify
    } //외부에서 노출되는 건 add만.배열은 노ㅛ출되지 않음.

})();