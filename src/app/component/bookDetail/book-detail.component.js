"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bookDiscount_1 = require("../../model/bookDiscount");
var BookDetailComponent = (function () {
    function BookDetailComponent() {
    }
    return BookDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bookDiscount_1.BookDiscount)
], BookDetailComponent.prototype, "bookDiscount", void 0);
BookDetailComponent = __decorate([
    core_1.Component({
        selector: 'book-discount-detail',
        template: "\n    <div class=bookDiscountDetailsContainer *ngIf=\"bookDiscount\">\n    <h2>{{bookDiscount.bookView.title}}</h2>\n      <div id=linesContainer>\n        <div class=bookDiscountInfoLineContainer>\n          <label>id: </label>{{bookDiscount.id}}\n        </div>\n        <div>\n          <label>author: </label>\n          <input [(ngModel)]=\"bookDiscount.bookView.authors\" placeholder=\"authors\"/>\n        </div>\n        <div class=bookDiscountInfoLineContainer>\n          <label>price: </label>\n          <input [(ngModel)]=\"bookDiscount.price\" placeholder=\"price\"/>\n        </div>\n        <div class=bookDiscountInfoLineContainer>\n          <label>discount: </label>\n          <input [(ngModel)]=\"bookDiscount.discountDetails\" placeholder=\"discount\"/>\n        </div>\n        <div class=bookDiscountInfoLineContainer>\n          <label>bookstore: </label>\n          <input [(ngModel)]=\"bookDiscount.bookstoreView\" placeholder=\"bookstore\"/>\n        </div>\n      </div>\n      <div class=bookDiscountDetailsCoverContainer>\n        <img src=\"{{bookDiscount.bookView.coverUrl}}\">\n      </div>\n    </div>\n  ",
        styles: ["\n    .bookDiscountDetailsContainer {\n      margin: 0 0 2em 0;\n      border-size: 2px;\n      border-style:solid;\n      border-color: #607D8B;\n      border-radius: 4px;\n      background: #EEE;\n      position: relative;\n      width: 600px;\n      height: 500px;\n      padding: 5px;\n      float: left;\n    }\n\n    .bookDiscountDetailsCoverContainer {\n      margin: 20px;\n      height: 400px;\n      width: 300px;\n      display: flex;\n    }\n\n    .bookDiscountInfoLineContainer {\n      padding: 1px;\n    }\n\n    img {\n      height: 400px;\n      width: 300px;\n      margin-left: 35px;\n    }\n\n    #linesContainer {\n      float: left;\n    }\n\n    "
        ]
    })
], BookDetailComponent);
exports.BookDetailComponent = BookDetailComponent;
//# sourceMappingURL=book-detail.component.js.map