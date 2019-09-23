"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var CharacterList = /** @class */ (function (_super) {
    __extends(CharacterList, _super);
    function CharacterList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterList.prototype.render = function () {
        var _a = this.props, school = _a.school, characters = _a.characters;
        return (<>
                <semantic_ui_react_1.Header as="h2">{school}</semantic_ui_react_1.Header>
                <semantic_ui_react_1.Item.Group>
                    {characters.map(function (c) { return (<semantic_ui_react_1.Item>
                                <semantic_ui_react_1.Icon name="user circle" size="huge"/>
                                <semantic_ui_react_1.Item.Content>
                                    <semantic_ui_react_1.Item.Header>{c.name}</semantic_ui_react_1.Item.Header>
                                    <semantic_ui_react_1.Item.Meta>{c.age}歳</semantic_ui_react_1.Item.Meta>
                                    <semantic_ui_react_1.Item.Meta>
                                        {c.height ? c.height : '???'}cm
                                    </semantic_ui_react_1.Item.Meta>
                                </semantic_ui_react_1.Item.Content>
                            </semantic_ui_react_1.Item>); })}
                </semantic_ui_react_1.Item.Group>
            </>);
    };
    return CharacterList;
}(react_1.Component));
exports.default = CharacterList;
