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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getBookDiscounts = function (query, page, priceFrom, priceTo) {
        return Promise.resolve(this.getBookDiscountsQueried(query, page, priceFrom, priceTo));
    };
    BookService.prototype.getBookDiscountsQueried = function (query, page, priceFrom, priceTo) {
        var _this = this;
        return this.http.get('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo)
            .toPromise()
            .then(function (response) {
            console.log('http://localhost:8101/api/book-discounts?query=' + query + '&page=' + page + '&priceFrom=' + priceFrom + '&priceTo=' + priceTo);
            console.log(response);
            _this.totalPages = response.json().totalPages;
            _this.currentPage = response.json().number;
            return response.json().content;
        })
            .catch(this.handleError);
    };
    BookService.prototype.getTotalPages = function () {
        return this.totalPages;
    };
    BookService.prototype.getCurrentPage = function () {
        return this.currentPage;
    };
    BookService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map