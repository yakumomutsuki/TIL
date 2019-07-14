'use strict';

/**
 * DOM要素を生成して返却します
 * @param tagName
 * @param classNames
 * @param innerText
 * @return {any}
 */
function createElement(tagName, classNames, innerText) {
    const elm = document.createElement(tagName);
    if (typeof classNames === "string"){
        elm.classList.add(classNames);
    }
    if (Array.isArray(classNames)){
        classNames.forEach(cName => {
            elm.classList.add(cName)
        })
    }
    if (innerText) elm.innerText = innerText;
    return elm;
}


function addTodos(){
    let input = document.getElementsByClassName('input-area')[0].getElementsByTagName('input')[0];
    const inputText = input.value;

    // 空の場合には処理を行わない
    if (!inputText) return;
    input.value = null;

    // 外側のdivを生成
    const elm = createElement("label", ['row', 'todo']);

    // 番号
    let elLabelNumber = createElement("label", 'col-md-1');

    // TODOListの内容
    let elTodoContent = createElement("label", 'col-md-6', inputText);

    // Deleteボタンを作成
    let elTodoDelete = createElement("label", "delete");
    elTodoDelete.appendChild(createElement("span", null, 'Delete'));
    elTodoDelete.appendChild(createElement("i", ['fas','fa-trash-alt']));

    // Deleteボタンにイベントリスナーを設定
    setDeleteButtonListener(elTodoDelete);

    // DOMを組み立てる
    elm.appendChild(elLabelNumber);
    elm.appendChild(elTodoContent);
    elm.appendChild(elTodoDelete);

    let todos = document.getElementById('todo-container');
    todos.appendChild(elm);

    Array.from(todos.children).forEach((el, index)=>{
        el.firstChild.innerText = index + 1;
    })
}

// Deleteボタンにイベントリスナを設定する
function setDeleteButtonListener(el){
    el.addEventListener('click', function (e) {
        const todos = document.getElementById('todo-container');
        todos.removeChild(e.target.parentElement.parentElement);

        Array.from(todos.children).forEach((el, index)=>{
            el.firstChild.innerText = index + 1;
        })
    });
}

// イベントリスナを設定
document.addEventListener('DOMContentLoaded', function () {
    // Registボタンをクリックしたときの動きを登録
    document.getElementById('input-area-regist').addEventListener("click", function () {
        // TodoListを作成する
        addTodos();
    });

    // Deleteボタンをクリックしたときの動きを登録
    document.getElementById('input-area-clear').addEventListener("click", function () {
        document.getElementsByClassName('input-area')[0].children[0].value= "";
    })

});