"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessagesComponent = void 0;
var core_1 = require("@angular/core");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(route, firebase) {
        this.route = route;
        this.firebase = firebase;
        this.newMessage = '';
        this.group = '';
    }
    MessagesComponent.prototype.send = function () {
        if (this.newMessage) {
            var messages = this.firebase.list('messages');
            messages.push({
                group: this.group,
                text: this.newMessage
            });
            this.newMessage = '';
        }
    };
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.group = params.group;
            if (_this.group) {
                _this.messages = _this.firebase
                    .list('messages', function (ref) { return ref.orderByChild('group')
                    .equalTo(_this.group); }).valueChanges();
            }
        });
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            templateUrl: './messages.component.html',
            styleUrls: ['./messages.component.scss']
        })
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
