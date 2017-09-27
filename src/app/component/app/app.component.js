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
var book_service_1 = require("../../service/bookService/book.service");
var genre_service_1 = require("../../service/genreService/genre.service");
var AppComponent = (function () {
    function AppComponent(bookService, genreService) {
        this.bookService = bookService;
        this.genreService = genreService;
        this.title = 'Book discounts library';
        this.page = 0;
        this.priceFrom = '0';
        this.priceTo = '2000';
        this.detailsHidden = true;
    }
    AppComponent.prototype.getBookDiscounts = function () {
        var _this = this;
        this.bookService.getBookDiscounts("", this.page, '0', '2000').then((function (bookDiscounts) {
            console.log(bookDiscounts);
            console.log(_this.genres);
            _this.bookDiscounts = bookDiscounts;
        }));
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBookDiscounts();
        this.genreService.getGenres().subscribe(function (genres) { return _this.genres = genres; });
    };
    AppComponent.prototype.getStyle = function (bookDiscount) {
        if (this.detailsHidden || bookDiscount.id != this.detailsId) {
            return 'none';
        }
        else {
            return '';
        }
    };
    AppComponent.prototype.onSelect = function (bookDiscount) {
        this.selectedBookDiscount = bookDiscount;
        this.detailsHidden = !this.detailsHidden;
        this.detailsId = bookDiscount.id;
    };
    AppComponent.prototype.updatePriceFrom = function (priceFrom) {
        console.log(priceFrom);
        this.priceFrom = priceFrom;
    };
    AppComponent.prototype.updatePriceTo = function (priceTo) {
        this.priceTo = priceTo;
    };
    AppComponent.prototype.searchEvent = function (query, priceFrom, priceTo) {
        var _this = this;
        this.bookService.getBookDiscounts(query, 0, priceFrom, priceTo).then((function (bookDiscounts) {
            console.log(bookDiscounts);
            _this.bookDiscounts = bookDiscounts;
        }));
    };
    AppComponent.prototype.nextPage = function (query) {
        var _this = this;
        this.page += 1;
        this.bookService.getBookDiscounts(query, this.page, this.priceFrom, this.priceTo).then((function (bookDiscounts) {
            console.log(bookDiscounts);
            _this.bookDiscounts = bookDiscounts;
        }));
    };
    AppComponent.prototype.previousPage = function (query) {
        var _this = this;
        if (this.page >= 0) {
            this.page -= 1;
            this.bookService.getBookDiscounts(query, this.page, this.priceFrom, this.priceTo).then((function (bookDiscounts) {
                console.log(bookDiscounts);
                _this.bookDiscounts = bookDiscounts;
            }));
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [book_service_1.BookService, genre_service_1.GenreService]
    }),
    __metadata("design:paramtypes", [book_service_1.BookService, genre_service_1.GenreService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map