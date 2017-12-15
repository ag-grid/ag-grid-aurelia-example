define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'ag-Grid Aurelia Examples';
            config.map([
                { route: '', redirect: 'rich-grid' },
                {
                    route: 'rich-grid/:fromDocs?',
                    name: 'rich-grid',
                    nav: true,
                    moduleId: 'components/rich-grid-example/rich-grid-example',
                    title: 'Rich Grid with pure JavaScript',
                    href: '#/rich-grid'
                },
                {
                    route: 'richgrid-declarative/:fromDocs?',
                    name: 'richgrid-declarative',
                    nav: true,
                    moduleId: 'components/rich-grid-declarative-example/rich-grid-declarative-example',
                    title: 'Rich Grid with Declarative Markup',
                    href: '#/richgrid-declarative'
                },
                {
                    route: 'editor/:fromDocs?',
                    name: 'editor',
                    nav: true,
                    moduleId: 'components/editor-example/editor-example',
                    title: 'Editor Example',
                    href: '#/editor'
                },
                {
                    route: 'floating-row/:fromDocs?',
                    name: 'floating-row',
                    nav: true,
                    moduleId: 'components/floating-row-example/floating-row-example',
                    title: 'Pinned Row Example',
                    href: '#/floating-row'
                },
                {
                    route: 'full-width/:fromDocs?',
                    name: 'full-width',
                    nav: true,
                    moduleId: 'components/full-width-example/full-width-example',
                    title: 'Full Width Example',
                    href: '#/full-width'
                },
                {
                    route: 'group-row/:fromDocs?',
                    name: 'group-row',
                    nav: true,
                    moduleId: 'components/group-row-example/group-row-example',
                    title: 'Group Row Example',
                    href: '#/group-row'
                },
                {
                    route: 'filter/:fromDocs?',
                    name: 'filter',
                    nav: true,
                    moduleId: 'components/filter-example/filter-example',
                    title: 'Filter Example',
                    href: '#/filter'
                }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('ag-grid-aurelia')
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('auDateComponents/date-component',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateComponent = (function () {
        function DateComponent() {
            this.dd = '';
            this.mm = '';
            this.yyyy = '';
        }
        DateComponent.prototype.onResetDate = function () {
            this.setDate(null);
            this.params.onDateChanged();
        };
        DateComponent.prototype.onDateChanged = function (on, newValue) {
            this.date = this.parseDate(on === 'dd' ? newValue : this.dd, on === 'mm' ? newValue : this.mm, on === 'yyyy' ? newValue : this.yyyy);
            this.params.onDateChanged();
        };
        DateComponent.prototype.getDate = function () {
            return this.date;
        };
        DateComponent.prototype.setDate = function (date) {
            if (date == null) {
                this.dd = '';
                this.mm = '';
                this.yyyy = '';
                this.date = null;
            }
            else {
                this.dd = date.getDate() + '';
                this.mm = (date.getMonth() + 1) + '';
                this.yyyy = date.getFullYear() + '';
                this.date = date;
            }
        };
        DateComponent.prototype.parseDate = function (dd, mm, yyyy) {
            if (dd.trim() === '' || mm.trim() === '' || yyyy.trim() === '') {
                return null;
            }
            var day = Number(dd);
            var month = Number(mm);
            var year = Number(yyyy);
            var date = new Date(year, month - 1, day);
            if (isNaN(date.getTime())) {
                return null;
            }
            if (date.getDate() != day || date.getMonth() + 1 != month || date.getFullYear() != year) {
                return null;
            }
            return date;
        };
        DateComponent = __decorate([
            aurelia_framework_1.customElement('ag-date-component'),
            aurelia_framework_1.inject(Element)
        ], DateComponent);
        return DateComponent;
    }());
    exports.DateComponent = DateComponent;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('auHeaderComponents/header-component',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HeaderComponent = (function () {
        function HeaderComponent(element) {
            this.element = element;
            this.onSortChanged = this.onSortChanged.bind(this);
        }
        HeaderComponent.prototype.attached = function () {
            this.menuIcon = 'fa ' + this.params.menuIcon;
            this.params.column.addEventListener('sortChanged', this.onSortChanged);
            this.onSortChanged();
        };
        HeaderComponent.prototype.detached = function () {
            this.params.column.addEventListener('sortChanged', this.onSortChanged);
        };
        HeaderComponent.prototype.onSortChanged = function () {
            if (this.params.column.isSortAscending()) {
                this.sorted = 'asc';
            }
            else if (this.params.column.isSortDescending()) {
                this.sorted = 'desc';
            }
            else {
                this.sorted = '';
            }
        };
        ;
        HeaderComponent.prototype.onMenuClick = function () {
            this.params.showColumnMenu(this.querySelector('.customHeaderMenuButton'));
        };
        HeaderComponent.prototype.querySelector = function (selector) {
            return this.element.querySelector('.customHeaderMenuButton', selector);
        };
        HeaderComponent.prototype.onSortRequested = function (order, event) {
            this.params.setSort(order, event.shiftKey);
        };
        ;
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], HeaderComponent.prototype, "sorted", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], HeaderComponent.prototype, "menuIcon", void 0);
        HeaderComponent = __decorate([
            aurelia_framework_1.customElement('ag-header-component'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Object])
        ], HeaderComponent);
        return HeaderComponent;
    }());
    exports.HeaderComponent = HeaderComponent;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('auHeaderComponents/header-group-component',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HeaderGroupComponent = (function () {
        function HeaderGroupComponent(element) {
            this.element = element;
            this.onExpandChanged = this.onExpandChanged.bind(this);
        }
        HeaderGroupComponent.prototype.attached = function () {
            this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChanged);
        };
        HeaderGroupComponent.prototype.detached = function () {
            this.params.columnGroup.getOriginalColumnGroup().removeEventListener('expandedChanged', this.onExpandChanged);
        };
        HeaderGroupComponent.prototype.expandOrCollapse = function () {
            this.params.setExpanded(!this.expanded);
        };
        ;
        HeaderGroupComponent.prototype.onExpandChanged = function () {
            this.expanded = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Boolean)
        ], HeaderGroupComponent.prototype, "expanded", void 0);
        HeaderGroupComponent = __decorate([
            aurelia_framework_1.customElement('ag-header-group-component'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Object])
        ], HeaderGroupComponent);
        return HeaderGroupComponent;
    }());
    exports.HeaderGroupComponent = HeaderGroupComponent;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('auRenderers/styled-renderer',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StyledRenderer = (function () {
        function StyledRenderer() {
        }
        StyledRenderer = __decorate([
            aurelia_framework_1.customElement('ag-styled-renderer'),
            aurelia_framework_1.inject(Element)
        ], StyledRenderer);
        return StyledRenderer;
    }());
    exports.StyledRenderer = StyledRenderer;
});

define('data/refData',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RefData = (function () {
        function RefData() {
        }
        RefData.IT_SKILLS = ['android', 'css', 'html5', 'mac', 'windows'];
        RefData.IT_SKILLS_NAMES = ['Android', 'CSS', 'HTML 5', 'Mac', 'Windows'];
        RefData.firstNames = ["Sophie", "Isabelle", "Emily", "Olivia", "Lily", "Chloe", "Isabella",
            "Amelia", "Jessica", "Sophia", "Ava", "Charlotte", "Mia", "Lucy", "Grace", "Ruby",
            "Ella", "Evie", "Freya", "Isla", "Poppy", "Daisy", "Layla"];
        RefData.lastNames = ["Beckham", "Black", "Braxton", "Brennan", "Brock", "Bryson", "Cadwell",
            "Cage", "Carson", "Chandler", "Cohen", "Cole", "Corbin", "Dallas", "Dalton", "Dane",
            "Donovan", "Easton", "Fisher", "Fletcher", "Grady", "Greyson", "Griffin", "Gunner",
            "Hayden", "Hudson", "Hunter", "Jacoby", "Jagger", "Jaxon", "Jett", "Kade", "Kane",
            "Keating", "Keegan", "Kingston", "Kobe"];
        RefData.COUNTRY_CODES = {
            Ireland: "ie",
            Spain: "es",
            "United Kingdom": "gb",
            France: "fr",
            Germany: "de",
            Sweden: "se",
            Italy: "it",
            Greece: "gr",
            Iceland: "is",
            Portugal: "pt",
            Malta: "mt",
            Norway: "no",
            Brazil: "br",
            Argentina: "ar",
            Colombia: "co",
            Peru: "pe",
            Venezuela: "ve",
            Uruguay: "uy"
        };
        RefData.DOBs = [
            new Date(2000, 0, 1),
            new Date(2001, 1, 2),
            new Date(2002, 2, 3),
            new Date(2003, 3, 4),
            new Date(2004, 4, 5),
            new Date(2005, 5, 6),
            new Date(2006, 6, 7),
            new Date(2007, 7, 8),
            new Date(2008, 8, 9),
            new Date(2009, 9, 10),
            new Date(2010, 10, 11),
            new Date(2011, 11, 12)
        ];
        RefData.countries = [
            { country: "Ireland", continent: "Europe", language: "English" },
            { country: "Spain", continent: "Europe", language: "Spanish" },
            { country: "United Kingdom", continent: "Europe", language: "English" },
            { country: "France", continent: "Europe", language: "French" },
            { country: "Germany", continent: "Europe", language: "(other)" },
            { country: "Sweden", continent: "Europe", language: "(other)" },
            { country: "Norway", continent: "Europe", language: "(other)" },
            { country: "Italy", continent: "Europe", language: "(other)" },
            { country: "Greece", continent: "Europe", language: "(other)" },
            { country: "Iceland", continent: "Europe", language: "(other)" },
            { country: "Portugal", continent: "Europe", language: "Portuguese" },
            { country: "Malta", continent: "Europe", language: "(other)" },
            { country: "Brazil", continent: "South America", language: "Portuguese" },
            { country: "Argentina", continent: "South America", language: "Spanish" },
            { country: "Colombia", continent: "South America", language: "Spanish" },
            { country: "Peru", continent: "South America", language: "Spanish" },
            { country: "Venezuela", continent: "South America", language: "Spanish" },
            { country: "Uruguay", continent: "South America", language: "Spanish" }
        ];
        RefData.addresses = [
            '1197 Thunder Wagon Common, Cataract, RI, 02987-1016, US, (401) 747-0763',
            '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
            '3235 High Forest, Glen Campbell, MS, 39035-6845, US, (601) 638-8186',
            '2234 Sleepy Pony Mall , Drain, DC, 20078-4243, US, (202) 948-3634',
            '2722 Hazy Turnabout, Burnt Cabins, NY, 14120-5642, US, (917) 604-6597',
            '6686 Lazy Ledge, Two Rock, CA, 92639-3020, US, (619) 901-9911',
            '2000 Dewy Limits, Wacahoota, NF, A4L-2V9, CA, (709) 065-3959',
            '7710 Noble Pond Avenue, Bolivia, RI, 02931-1842, US, (401) 865-2160',
            '3452 Sunny Vale, Pyro, ON, M8V-4Z0, CA, (519) 072-8609',
            '4402 Dusty Cove, Many Farms, UT, 84853-8223, US, (435) 518-0673',
            '5198 Silent Parade, Round Bottom, MD, 21542-9798, US, (301) 060-7245',
            '8550 Shady Moor, Kitty Fork, CO, 80941-6207, US, (303) 502-3767',
            '2131 Old Dell, Merry Midnight, AK, 99906-8842, US, (907) 369-2206',
            '7390 Harvest Crest, Mosquito Crossing, RI, 02957-6116, US, (401) 463-6348',
            '874 Little Point, Hot Coffee, BC, V3U-2P6, CA, (250) 706-9207',
            '8834 Stony Pioneer Heights, Newlove, OR, 97419-8670, US, (541) 408-2213',
            '9829 Grand Beach, Flint, UT, 84965-9900, US, (435) 700-5161',
            '3799 Cozy Blossom Ramp, Ptarmigan, MS, 38715-0313, US, (769) 740-1526',
            '3254 Silver Island Loop, Maunaloa, DE, 19869-3169, US, (302) 667-7671',
            '1081 Middle Wood, Taylors Gut Landing, OR, 97266-2873, US, (541) 357-6310',
            '1137 Umber Trail, Shacktown, NW, X3U-5Y8, CA, (867) 702-6883',
            '9914 Hidden Bank, Wyoming, MO, 64635-9665, US, (636) 280-4192',
            '7080 Misty Nectar Townline, Coward, AB, T9U-3N4, CA, (403) 623-2838',
            '1184 Wishing Grounds, Vibank, NW, X7D-0V9, CA, (867) 531-2730',
            '126 Easy Pointe, Grandview Beach, KY, 40928-9539, US, (502) 548-0956',
            '6683 Colonial Street, Swan River, BC, V1A-9I8, CA, (778) 014-4257',
            '960 Gentle Oak Lane, Shakopee, ND, 58618-6277, US, (701) 327-1219',
            '6918 Cotton Pine Corner, Kenaston, IA, 52165-3975, US, (515) 906-7427',
            '2368 Burning Woods, Ernfold, NY, 11879-9186, US, (646) 819-0355',
            '5646 Quiet Shadow Chase, Tiger Tail, IA, 52283-5537, US, (712) 375-9225',
            '5466 Foggy Mountain Dale, Sweet Home, MT, 59738-0251, US, (406) 881-1706',
            '5313 Clear Willow Route, Amazon, BC, V0S-2S6, CA, (604) 340-7596',
            '7000 Pleasant Autoroute, Spaceport City, UT, 84749-2448, US, (435) 154-3360',
            '8359 Quaking Anchor Road, Gross, BC, V9O-0H5, CA, (250) 985-3859',
            '5143 Amber Deer Hollow, New Deal, ND, 58446-0853, US, (701) 927-0322',
            '6230 Jagged Bear Key, Young, AR, 72337-3811, US, (501) 805-7239',
            '7207 Heather Vista, Devon, WY, 82520-1771, US, (307) 358-7092',
            '9416 Red Rise Place, Spraytown, OK, 73809-4766, US, (580) 867-1973',
            '3770 Golden Horse Diversion, Yelland, IL, 60471-1487, US, (224) 717-9349',
            '4819 Honey Treasure Park, Alaska, NB, E1U-3I0, CA, (506) 656-9138',
            '6187 Round Front, Land O Lakes, AK, 99873-6403, US, (907) 853-9063',
            '9218 Crystal Highway, Pickelville, MT, 59847-9299, US, (406) 076-0024',
            '6737 Bright Quay, Lazy Mountain, KY, 42390-4772, US, (606) 256-7288',
            '237 Merry Campus, Twentysix, SC, 29330-4909, US, (864) 945-0157',
            '446 Fallen Gate Rise, Petrolia, SC, 29959-9527, US, (864) 826-0553',
            '2347 Indian Boulevard, Frisbee, VA, 23797-6458, US, (703) 656-8445',
            '365 Emerald Grove Line, Level, NC, 28381-1514, US, (919) 976-7958',
            '1207 Iron Extension, Klickitat, SC, 29197-8571, US, (803) 535-7888',
            '6770 Cinder Glen, Caronport, OH, 45053-5002, US, (440) 369-4018',
            '7619 Tawny Carrefour, Senlac, NV, 89529-9876, US, (775) 901-6433'
        ];
        return RefData;
    }());
    exports.default = RefData;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('editors/mood-editor',["require", "exports", "aurelia-framework", "ag-grid-aurelia"], function (require, exports, aurelia_framework_1, ag_grid_aurelia_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MoodEditor = (function (_super) {
        __extends(MoodEditor, _super);
        function MoodEditor(element) {
            var _this = _super.call(this) || this;
            _this.happy = false;
            _this.hasFocus = false;
            _this.element = element;
            return _this;
        }
        MoodEditor.prototype.attached = function () {
            this.setHappy(this.params.value === "Happy");
            this.hasFocus = true;
        };
        MoodEditor.prototype.getValue = function () {
            return this.happy ? "Happy" : "Sad";
        };
        MoodEditor.prototype.isPopup = function () {
            return true;
        };
        MoodEditor.prototype.setHappy = function (happy) {
            this.happy = happy;
        };
        MoodEditor.prototype.toggleMood = function () {
            this.setHappy(!this.happy);
        };
        MoodEditor.prototype.onKeyDown = function (event) {
            var key = event.which || event.keyCode;
            if (key == 37 ||
                key == 39) {
                this.toggleMood();
                event.stopPropagation();
            }
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Boolean)
        ], MoodEditor.prototype, "happy", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Boolean)
        ], MoodEditor.prototype, "hasFocus", void 0);
        MoodEditor = __decorate([
            aurelia_framework_1.customElement('ag-mood-editor'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Object])
        ], MoodEditor);
        return MoodEditor;
    }(ag_grid_aurelia_1.BaseAureliaEditor));
    exports.MoodEditor = MoodEditor;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('editors/numeric-editor',["require", "exports", "aurelia-framework", "ag-grid-aurelia"], function (require, exports, aurelia_framework_1, ag_grid_aurelia_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumericEditor = (function (_super) {
        __extends(NumericEditor, _super);
        function NumericEditor(element) {
            var _this = _super.call(this) || this;
            _this.hasFocus = false;
            _this.element = element;
            return _this;
        }
        NumericEditor_1 = NumericEditor;
        NumericEditor.prototype.attached = function () {
            this.hasFocus = true;
            this.element.addEventListener('keydown', this.onKeyDown);
        };
        NumericEditor.prototype.detached = function () {
            this.element.removeEventListener('keydown', this.onKeyDown);
        };
        NumericEditor.prototype.getValue = function () {
            return this.params.value;
        };
        NumericEditor.prototype.isCancelBeforeStart = function () {
            if (!this.params.charPress) {
                return false;
            }
            return '1234567890'.indexOf(this.params.charPress) < 0;
        };
        NumericEditor.prototype.isCancelAfterEnd = function () {
            return this.params.value > 1000000;
        };
        ;
        NumericEditor.prototype.onKeyDown = function (event) {
            if (!NumericEditor_1.isKeyPressedNumeric(event)) {
                if (event.preventDefault)
                    event.preventDefault();
            }
        };
        NumericEditor.getCharCodeFromEvent = function (event) {
            event = event || window.event;
            return (typeof event.which == "undefined") ? event.keyCode : event.which;
        };
        NumericEditor.isCharNumeric = function (charStr) {
            return !!/\d/.test(charStr);
        };
        NumericEditor.isKeyPressedNumeric = function (event) {
            var charCode = NumericEditor_1.getCharCodeFromEvent(event);
            var charStr = String.fromCharCode(charCode);
            return NumericEditor_1.isCharNumeric(charStr);
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Boolean)
        ], NumericEditor.prototype, "hasFocus", void 0);
        NumericEditor = NumericEditor_1 = __decorate([
            aurelia_framework_1.customElement('ag-numeric-editor'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Object])
        ], NumericEditor);
        return NumericEditor;
        var NumericEditor_1;
    }(ag_grid_aurelia_1.BaseAureliaEditor));
    exports.NumericEditor = NumericEditor;
});

define('filters/partialMatch',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PartialMatchFilter = (function () {
        function PartialMatchFilter() {
        }
        PartialMatchFilter.prototype.init = function (params) {
            this.params = params;
            this.filterText = null;
            this.valueGetter = params.valueGetter;
        };
        ;
        PartialMatchFilter.prototype.getGui = function () {
            this.eGui = document.createElement('div');
            this.eGui.innerHTML =
                '<input style="margin: 4px 0px 4px 0px;" type="text" id="filterText" placeholder="Full name search..."/>';
            this.eFilterText = this.eGui.querySelector('#filterText');
            this.eFilterText.addEventListener("changed", listener);
            this.eFilterText.addEventListener("paste", listener);
            this.eFilterText.addEventListener("input", listener);
            this.eFilterText.addEventListener("keydown", listener);
            this.eFilterText.addEventListener("keyup", listener);
            var that = this;
            function listener(event) {
                that.filterText = event.target.value;
                that.params.filterChangedCallback();
            }
            return this.eGui;
        };
        ;
        PartialMatchFilter.prototype.isFilterActive = function () {
            return this.filterText !== null && this.filterText !== undefined && this.filterText !== '';
        };
        PartialMatchFilter.prototype.doesFilterPass = function (params) {
            var _this = this;
            var passed = true;
            this.filterText.toLowerCase().split(" ").forEach(function (filterWord) {
                var value = _this.valueGetter(params);
                if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
                    passed = false;
                }
            });
            return passed;
        };
        PartialMatchFilter.prototype.getModel = function () {
            var model = { value: this.filterText.value };
            return model;
        };
        PartialMatchFilter.prototype.setModel = function (model) {
            this.eFilterText.value = model ? model.value : '';
        };
        PartialMatchFilter.prototype.afterGuiAttached = function (params) {
            this.eGui.focus();
        };
        return PartialMatchFilter;
    }());
    exports.default = PartialMatchFilter;
});

define('filters/proficiencyFilter',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FILTER_TITLE = '<div style="text-align: center; background: lightgray; width: 100%; display: block; border-bottom: 1px solid grey;">' +
        '<b>TITLE_NAME</b>' +
        '</div>';
    var PROFICIENCY_TEMPLATE = '<label style="padding-left: 4px;">' +
        '<input type="radio" name="RANDOM"/>' +
        'PROFICIENCY_NAME' +
        '</label>';
    var PROFICIENCY_NONE = 'none';
    var PROFICIENCY_ABOVE40 = 'above40';
    var PROFICIENCY_ABOVE60 = 'above60';
    var PROFICIENCY_ABOVE80 = 'above80';
    var PROFICIENCY_NAMES = ['No Filter', 'Above 40%', 'Above 60%', 'Above 80%'];
    var PROFICIENCY_VALUES = [PROFICIENCY_NONE, PROFICIENCY_ABOVE40, PROFICIENCY_ABOVE60, PROFICIENCY_ABOVE80];
    var ProficiencyFilter = (function () {
        function ProficiencyFilter() {
        }
        ProficiencyFilter.prototype.init = function (params) {
            this.filterChangedCallback = params.filterChangedCallback;
            this.selected = PROFICIENCY_NONE;
            this.valueGetter = params.valueGetter;
        };
        ProficiencyFilter.prototype.getGui = function () {
            var eGui = document.createElement('div');
            var eInstructions = document.createElement('div');
            eInstructions.innerHTML = FILTER_TITLE.replace('TITLE_NAME', 'Custom Proficiency Filter');
            eGui.appendChild(eInstructions);
            var random = '' + Math.random();
            var that = this;
            PROFICIENCY_NAMES.forEach(function (name, index) {
                var eFilter = document.createElement('div');
                var html = PROFICIENCY_TEMPLATE.replace('PROFICIENCY_NAME', name).replace('RANDOM', random);
                eFilter.innerHTML = html;
                var eRadio = eFilter.querySelector('input');
                if (index === 0) {
                    eRadio.checked = true;
                }
                eGui.appendChild(eFilter);
                eRadio.addEventListener('click', function () {
                    that.selected = PROFICIENCY_VALUES[index];
                    that.filterChangedCallback();
                });
            });
            return eGui;
        };
        ProficiencyFilter.prototype.doesFilterPass = function (params) {
            var value = this.valueGetter(params);
            var valueAsNumber = parseFloat(value);
            switch (this.selected) {
                case PROFICIENCY_ABOVE40:
                    return valueAsNumber >= 40;
                case PROFICIENCY_ABOVE60:
                    return valueAsNumber >= 60;
                case PROFICIENCY_ABOVE80:
                    return valueAsNumber >= 80;
                default:
                    return true;
            }
        };
        ProficiencyFilter.prototype.isFilterActive = function () {
            return this.selected !== PROFICIENCY_NONE;
        };
        ProficiencyFilter.prototype.getModel = function () {
            return undefined;
        };
        ProficiencyFilter.prototype.setModel = function (model) {
        };
        return ProficiencyFilter;
    }());
    exports.default = ProficiencyFilter;
});

define('filters/skillFilter',["require", "exports", "../data/refData"], function (require, exports, refData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SKILL_TEMPLATE = '<label style="border: 1px solid lightgrey; margin: 4px; padding: 4px; display: inline-block;">' +
        '  <span>' +
        '    <div style="text-align: center;">SKILL_NAME</div>' +
        '    <div>' +
        '      <input type="checkbox"/>' +
        '      <img src="images/skills/SKILL.png" width="30px"/>' +
        '    </div>' +
        '  </span>' +
        '</label>';
    var FILTER_TITLE = '<div style="text-align: center; background: lightgray; width: 100%; display: block; border-bottom: 1px solid grey;">' +
        '<b>TITLE_NAME</b>' +
        '</div>';
    var SkillFilter = (function () {
        function SkillFilter() {
        }
        SkillFilter.prototype.init = function (params) {
            this.filterChangedCallback = params.filterChangedCallback;
            this.model = {
                android: false,
                css: false,
                html5: false,
                mac: false,
                windows: false
            };
        };
        ;
        SkillFilter.prototype.getGui = function () {
            var eGui = document.createElement('div');
            eGui.style.width = '380px';
            var eInstructions = document.createElement('div');
            eInstructions.innerHTML = FILTER_TITLE.replace('TITLE_NAME', 'Custom Skills Filter');
            eGui.appendChild(eInstructions);
            var that = this;
            refData_1.default.IT_SKILLS.forEach(function (skill, index) {
                var skillName = refData_1.default.IT_SKILLS_NAMES[index];
                var eSpan = document.createElement('span');
                var html = SKILL_TEMPLATE.replace("SKILL_NAME", skillName).replace("SKILL", skill);
                eSpan.innerHTML = html;
                var eCheckbox = eSpan.querySelector('input');
                eCheckbox.addEventListener('click', function () {
                    that.model[skill] = eCheckbox.checked;
                    that.filterChangedCallback();
                });
                eGui.appendChild(eSpan);
            });
            return eGui;
        };
        ;
        SkillFilter.prototype.doesFilterPass = function (params) {
            var rowSkills = params.data.skills;
            var model = this.model;
            var passed = true;
            refData_1.default.IT_SKILLS.forEach(function (skill) {
                if (model[skill]) {
                    if (!rowSkills[skill]) {
                        passed = false;
                    }
                }
            });
            return passed;
        };
        ;
        SkillFilter.prototype.isFilterActive = function () {
            var model = this.model;
            var somethingSelected = model.android || model.css || model.html5 || model.mac || model.windows;
            return somethingSelected;
        };
        ;
        SkillFilter.prototype.getModel = function () {
            return undefined;
        };
        SkillFilter.prototype.setModel = function (model) {
        };
        return SkillFilter;
    }());
    exports.default = SkillFilter;
});

define('jsDateComponent/dateComponent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function DateComponent() {
    }
    DateComponent.prototype.init = function (params) {
        this.params = params;
        this.eGui = document.createElement('div');
        this.eGui.innerHTML = '' +
            '<div class="filter">' +
            '<span class="reset">x</span>' +
            '<input class="dd" placeholder="dd" maxLength="2"/>/' +
            '<input class="mm" placeholder="mm" maxLength="2"/>/' +
            '<input class="yyyy" placeholder="yyyy" maxLength="4"/>' +
            '</div>';
        this.eReset = this.eGui.querySelector('.reset');
        this.onResetDate = this.onResetDate.bind(this);
        this.eReset.addEventListener('click', this.onResetDate);
        this.eDD = this.eGui.querySelector('.dd');
        this.eMM = this.eGui.querySelector('.mm');
        this.eYYYY = this.eGui.querySelector('.yyyy');
        this.onDateChanged = this.onDateChanged.bind(this);
        this.eDD.addEventListener('change', this.onDateChanged);
        this.eMM.addEventListener('change', this.onDateChanged);
        this.eYYYY.addEventListener('change', this.onDateChanged);
    };
    DateComponent.prototype.getGui = function () {
        return this.eGui;
    };
    DateComponent.prototype.onDateChanged = function (event) {
        var targetClass = event.target.classList[0];
        var targetValue = event.target.value;
        this.date = this.parseDate(targetClass === 'dd' ? targetValue : this.eDD.value, targetClass === 'mm' ? targetValue : this.eMM.value, targetClass === 'yyyy' ? targetValue : this.eYYYY.value);
        this.params.onDateChanged();
    };
    DateComponent.prototype.onResetDate = function () {
        this.dd = '';
        this.mm = '';
        this.yyyy = '';
        this.date = null;
        this.params.onDateChanged();
    };
    DateComponent.prototype.getDate = function () {
        return this.date;
    };
    DateComponent.prototype.setDate = function (date) {
        if (!date)
            return;
        this.dd = date.getDate() + '';
        this.mm = (date.getMonth() + 1) + '';
        this.yyyy = date.getFullYear() + '';
        this.date = date;
        this.params.onDateChanged();
    };
    DateComponent.prototype.parseDate = function (dd, mm, yyyy) {
        if (dd.trim() === '' || mm.trim() === '' || yyyy.trim() === '') {
            return null;
        }
        var day = Number(dd);
        var month = Number(mm);
        var year = Number(yyyy);
        var date = new Date(year, month - 1, day);
        if (isNaN(date.getTime())) {
            return null;
        }
        if (date.getDate() != day || date.getMonth() + 1 != month || date.getFullYear() != year) {
            return null;
        }
        return date;
    };
    exports.default = DateComponent;
});

define('jsHeaderComponent/headerComponent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function HeaderComponent() {
    }
    HeaderComponent.prototype.init = function (agParams) {
        this.agParams = agParams;
        this.eGui = document.createElement('div');
        this.eGui.className = "headerComponent";
        this.eGui.innerHTML = '' +
            '<div class="customHeaderMenuButton"><i class="fa ' + this.agParams.menuIcon + '"></i></div>' +
            '<div class="customHeaderLabel">' + this.agParams.displayName + '</div>' +
            '<div class="customSortDownLabel inactive"><i class="fa fa-long-arrow-down"></i></div>' +
            '<div class="customSortUpLabel inactive"><i class="fa fa-long-arrow-up"></i></div>' +
            '<div class="customSortRemoveLabel inactive"><i class="fa fa-times"></i></div>';
        this.eMenuButton = this.eGui.querySelector(".customHeaderMenuButton");
        this.eSortDownButton = this.eGui.querySelector(".customSortDownLabel");
        this.eSortUpButton = this.eGui.querySelector(".customSortUpLabel");
        this.eSortRemoveButton = this.eGui.querySelector(".customSortRemoveLabel");
        if (this.agParams.enableMenu) {
            this.onMenuClickListener = this.onMenuClick.bind(this);
            this.eMenuButton.addEventListener('click', this.onMenuClickListener);
        }
        else {
            this.eGui.removeChild(this.eMenuButton);
        }
        if (this.agParams.enableSorting) {
            this.onSortAscRequestedListener = this.onSortRequested.bind(this, 'asc');
            this.eSortDownButton.addEventListener('click', this.onSortAscRequestedListener);
            this.onSortDescRequestedListener = this.onSortRequested.bind(this, 'desc');
            this.eSortUpButton.addEventListener('click', this.onSortDescRequestedListener);
            this.onRemoveSortListener = this.onSortRequested.bind(this, '');
            this.eSortRemoveButton.addEventListener('click', this.onRemoveSortListener);
            this.onSortChangedListener = this.onSortChanged.bind(this);
            this.agParams.column.addEventListener('sortChanged', this.onSortChangedListener);
            this.onSortChanged();
        }
        else {
            this.eGui.removeChild(this.eSortDownButton);
            this.eGui.removeChild(this.eSortUpButton);
            this.eGui.removeChild(this.eSortRemoveButton);
        }
    };
    HeaderComponent.prototype.onSortChanged = function () {
        function deactivate(toDeactivateItems) {
            toDeactivateItems.forEach(function (toDeactivate) { toDeactivate.className = toDeactivate.className.split(' ')[0]; });
        }
        function activate(toActivate) {
            toActivate.className = toActivate.className + " active";
        }
        if (this.agParams.column.isSortAscending()) {
            deactivate([this.eSortUpButton, this.eSortRemoveButton]);
            activate(this.eSortDownButton);
        }
        else if (this.agParams.column.isSortDescending()) {
            deactivate([this.eSortDownButton, this.eSortRemoveButton]);
            activate(this.eSortUpButton);
        }
        else {
            deactivate([this.eSortUpButton, this.eSortDownButton]);
            activate(this.eSortRemoveButton);
        }
    };
    HeaderComponent.prototype.getGui = function () {
        return this.eGui;
    };
    HeaderComponent.prototype.onMenuClick = function () {
        this.agParams.showColumnMenu(this.eMenuButton);
    };
    HeaderComponent.prototype.onSortRequested = function (order, event) {
        this.agParams.setSort(order, event.shiftKey);
    };
    HeaderComponent.prototype.destroy = function () {
        if (this.onMenuClickListener) {
            this.eMenuButton.removeEventListener('click', this.onMenuClickListener);
        }
        this.eSortDownButton.removeEventListener('click', this.onSortRequestedListener);
        this.eSortUpButton.removeEventListener('click', this.onSortRequestedListener);
        this.eSortRemoveButton.removeEventListener('click', this.onSortRequestedListener);
        this.agParams.column.removeEventListener('sortChanged', this.onSortChangedListener);
    };
    exports.default = HeaderComponent;
});

define('jsHeaderComponent/headerGroupComponent',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function HeaderGroupComponent() {
    }
    HeaderGroupComponent.prototype.init = function (params) {
        this.params = params;
        this.eGui = document.createElement('div');
        this.eGui.className = 'ag-header-group-cell-label';
        this.eGui.innerHTML = '' +
            '<div class="customHeaderLabel">' + this.params.displayName + '</div>' +
            '<div class="customExpandButton"><i class="fa fa-arrow-right"></i></div>';
        this.onExpandButtonClickedListener = this.expandOrCollapse.bind(this);
        this.eExpandButton = this.eGui.querySelector(".customExpandButton");
        this.eExpandButton.addEventListener('click', this.onExpandButtonClickedListener);
        this.onExpandChangedListener = this.syncExpandButtons.bind(this);
        this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChangedListener);
        this.syncExpandButtons();
    };
    HeaderGroupComponent.prototype.getGui = function () {
        return this.eGui;
    };
    HeaderGroupComponent.prototype.expandOrCollapse = function () {
        var currentState = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
        this.params.setExpanded(!currentState);
    };
    HeaderGroupComponent.prototype.syncExpandButtons = function () {
        function collapsed(toDeactivate) {
            toDeactivate.className = toDeactivate.className.split(' ')[0] + ' collapsed';
        }
        function expanded(toActivate) {
            toActivate.className = toActivate.className.split(' ')[0] + ' expanded';
        }
        if (this.params.columnGroup.getOriginalColumnGroup().isExpanded()) {
            expanded(this.eExpandButton);
        }
        else {
            collapsed(this.eExpandButton);
        }
    };
    HeaderGroupComponent.prototype.destroy = function () {
        this.eExpandButton.removeEventListener('click', this.onExpandButtonClickedListener);
    };
    exports.default = HeaderGroupComponent;
});

define('jsRenderers/MedalRenderer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MedalRenderer = (function () {
        function MedalRenderer() {
        }
        MedalRenderer.prototype.init = function (params) {
            this.params = params;
            this.eGui = document.createElement('span');
            var text = document.createTextNode(params.node.key + " Gold: " + params.node.aggData.gold + ", Silver: " + params.node.aggData.silver + ", Bronze: " + params.node.aggData.bronze);
            this.eGui.appendChild(text);
        };
        MedalRenderer.prototype.getGui = function () {
            return this.eGui;
        };
        MedalRenderer.prototype.refresh = function (params) {
            return false;
        };
        return MedalRenderer;
    }());
    exports.default = MedalRenderer;
});

define('jsRenderers/NameAndAgeRenderer',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NameAndAgeRenderer = (function () {
        function NameAndAgeRenderer() {
        }
        NameAndAgeRenderer.prototype.init = function (params) {
            this.params = params;
            this.eGui = document.createElement('span');
            var text = document.createTextNode("Name: " + params.data.name + ", Age: " + params.data.age);
            this.eGui.appendChild(text);
        };
        NameAndAgeRenderer.prototype.getGui = function () {
            return this.eGui;
        };
        NameAndAgeRenderer.prototype.refresh = function (params) {
            return false;
        };
        return NameAndAgeRenderer;
    }());
    exports.default = NameAndAgeRenderer;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/filter-example/filter-example',["require", "exports", "aurelia-framework", "../../filters/partialMatch", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1, partialMatch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FilterExample = (function () {
        function FilterExample() {
            this.gridOptions = {};
            this.gridOptions.rowData = this.createRowData();
            this.gridOptions.enableFilter = true;
            this.gridOptions.defaultColDef = {
                menuTabs: ['filterMenuTab']
            };
        }
        FilterExample.prototype.createRowData = function () {
            return [
                { "row": "Row 1", "name": "Michael Phelps" },
                { "row": "Row 2", "name": "Natalie Coughlin" },
                { "row": "Row 3", "name": "Aleksey Nemov" },
                { "row": "Row 4", "name": "Alicia Coutts" },
                { "row": "Row 5", "name": "Missy Franklin" },
                { "row": "Row 6", "name": "Ryan Lochte" },
                { "row": "Row 7", "name": "Allison Schmitt" },
                { "row": "Row 8", "name": "Natalie Coughlin" },
                { "row": "Row 9", "name": "Ian Thorpe" },
                { "row": "Row 10", "name": "Bob Mill" },
                { "row": "Row 11", "name": "Willy Walsh" },
                { "row": "Row 12", "name": "Sarah McCoy" },
                { "row": "Row 13", "name": "Jane Jack" },
                { "row": "Row 14", "name": "Tina Wills" }
            ];
        };
        FilterExample.prototype.getPartialMatchFilter = function () {
            return partialMatch_1.default;
        };
        FilterExample = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('filter-example'),
            __metadata("design:paramtypes", [])
        ], FilterExample);
        return FilterExample;
    }());
    exports.FilterExample = FilterExample;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/editor-example/editor-example',["require", "exports", "aurelia-framework", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EditorExample = (function () {
        function EditorExample() {
            this.gridOptions = {};
            this.gridOptions.rowData = this.createRowData();
        }
        EditorExample.prototype.createRowData = function () {
            return [
                { name: "Bob", mood: "Happy", number: 10 },
                { name: "Harry", mood: "Sad", number: 3 },
                { name: "Sally", mood: "Happy", number: 20 },
                { name: "Mary", mood: "Sad", number: 5 },
                { name: "John", mood: "Happy", number: 15 },
                { name: "Jack", mood: "Happy", number: 25 },
                { name: "Sue", mood: "Sad", number: 43 },
                { name: "Sean", mood: "Sad", number: 1335 },
                { name: "Niall", mood: "Happy", number: 2 },
                { name: "Alberto", mood: "Happy", number: 123 },
                { name: "Fred", mood: "Sad", number: 532 },
                { name: "Jenny", mood: "Happy", number: 34 },
                { name: "Larry", mood: "Happy", number: 13 },
            ];
        };
        EditorExample = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('editor-example'),
            __metadata("design:paramtypes", [])
        ], EditorExample);
        return EditorExample;
    }());
    exports.EditorExample = EditorExample;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/floating-row-example/floating-row-example',["require", "exports", "aurelia-framework", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FloatingRowExample = (function () {
        function FloatingRowExample() {
            this.gridOptions = {};
            this.gridOptions.rowData = this.createRowData();
            this.gridOptions.pinnedTopRowData = [
                { row: "Top Row", number: "Top Number" }
            ];
            this.gridOptions.pinnedBottomRowData = [
                { row: "Bottom Row", number: "Bottom Number" }
            ];
        }
        FloatingRowExample.prototype.createRowData = function () {
            var rowData = [];
            for (var i = 0; i < 15; i++) {
                rowData.push({
                    row: "Row " + i,
                    number: Math.round(Math.random() * 100)
                });
            }
            return rowData;
        };
        FloatingRowExample = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('floating-row-example'),
            __metadata("design:paramtypes", [])
        ], FloatingRowExample);
        return FloatingRowExample;
    }());
    exports.FloatingRowExample = FloatingRowExample;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/full-width-example/full-width-example',["require", "exports", "aurelia-framework", "../../jsRenderers/NameAndAgeRenderer", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1, NameAndAgeRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FloatingRowExample = (function () {
        function FloatingRowExample() {
            this.gridOptions = {};
            this.gridOptions.rowData = this.createRowData();
            this.gridOptions.isFullWidthCell = function (rowNode) {
                return (rowNode.id === "0") || (parseInt(rowNode.id) % 2 === 0);
            };
            this.gridOptions.fullWidthCellRenderer = NameAndAgeRenderer_1.default;
        }
        FloatingRowExample.prototype.createRowData = function () {
            return [
                { name: "Bob", age: 10 },
                { name: "Harry", age: 3 },
                { name: "Sally", age: 20 },
                { name: "Mary", age: 5 },
                { name: "John", age: 15 },
                { name: "Bob", age: 10 },
                { name: "Harry", age: 3 },
                { name: "Sally", age: 20 },
                { name: "Mary", age: 5 },
                { name: "John", age: 15 },
                { name: "Jack", age: 25 },
                { name: "Sue", age: 43 },
                { name: "Sean", age: 44 },
                { name: "Niall", age: 2 },
                { name: "Alberto", age: 32 },
                { name: "Fred", age: 53 },
                { name: "Jenny", age: 34 },
                { name: "Larry", age: 13 },
            ];
        };
        FloatingRowExample = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('full-width-example'),
            __metadata("design:paramtypes", [])
        ], FloatingRowExample);
        return FloatingRowExample;
    }());
    exports.FloatingRowExample = FloatingRowExample;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/group-row-example/group-row-example',["require", "exports", "aurelia-framework", "../../jsRenderers/MedalRenderer", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1, MedalRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GroupRowExample = (function () {
        function GroupRowExample() {
            var _this = this;
            this.gridOptions = {};
            this.gridOptions.rowData = this.createRowData();
            this.gridOptions.groupUseEntireRow = true;
            this.gridOptions.groupRowInnerRenderer = MedalRenderer_1.default;
            this.gridOptions.onGridReady = function () {
                _this.gridOptions.api.sizeColumnsToFit();
            };
        }
        GroupRowExample.prototype.createRowData = function () {
            return [
                { country: "United States", name: "Bob", gold: 1, silver: 0, bronze: 0 },
                { country: "United States", name: "Jack", gold: 0, silver: 1, bronze: 1 },
                { country: "United States", name: "Sue", gold: 1, silver: 0, bronze: 1 },
                { country: "United Kingdom", name: "Mary", gold: 1, silver: 1, bronze: 0 },
                { country: "United Kingdom", name: "Tess", gold: 0, silver: 1, bronze: 1 },
                { country: "United Kingdom", name: "John", gold: 0, silver: 2, bronze: 1 },
                { country: "Jamaica", name: "Bob", gold: 1, silver: 1, bronze: 0 },
                { country: "Jamaica", name: "Jack", gold: 1, silver: 1, bronze: 0 },
                { country: "Jamaica", name: "Mary", gold: 1, silver: 1, bronze: 0 },
                { country: "South Africa", name: "Bob", gold: 1, silver: 0, bronze: 1 },
                { country: "South Africa", name: "Jack", gold: 1, silver: 0, bronze: 1 },
                { country: "South Africa", name: "Mary", gold: 1, silver: 0, bronze: 1 },
                { country: "South Africa", name: "John", gold: 1, silver: 0, bronze: 1 },
                { country: "New Zealand", name: "Bob", gold: 1, silver: 0, bronze: 0 },
                { country: "New Zealand", name: "Jack", gold: 0, silver: 1, bronze: 1 },
                { country: "New Zealand", name: "Sue", gold: 1, silver: 0, bronze: 1 },
                { country: "Australia", name: "Mary", gold: 1, silver: 1, bronze: 0 },
                { country: "Australia", name: "Tess", gold: 0, silver: 1, bronze: 1 },
                { country: "Australia", name: "John", gold: 0, silver: 2, bronze: 1 },
                { country: "Canada", name: "Bob", gold: 1, silver: 1, bronze: 0 },
                { country: "Canada", name: "Jack", gold: 1, silver: 1, bronze: 0 },
                { country: "Canada", name: "Mary", gold: 1, silver: 1, bronze: 0 },
                { country: "Switzerland", name: "Bob", gold: 1, silver: 0, bronze: 1 },
                { country: "Switzerland", name: "Jack", gold: 1, silver: 0, bronze: 1 },
                { country: "Switzerland", name: "Mary", gold: 1, silver: 0, bronze: 1 },
                { country: "Switzerland", name: "John", gold: 1, silver: 0, bronze: 1 },
                { country: "Spain", name: "Bob", gold: 1, silver: 0, bronze: 0 },
                { country: "Spain", name: "Jack", gold: 0, silver: 1, bronze: 1 },
                { country: "Spain", name: "Sue", gold: 1, silver: 0, bronze: 1 },
                { country: "Portugal", name: "Mary", gold: 1, silver: 1, bronze: 0 },
                { country: "Portugal", name: "Tess", gold: 0, silver: 1, bronze: 1 },
                { country: "Portugal", name: "John", gold: 0, silver: 2, bronze: 1 },
                { country: "Zimbabwe", name: "Bob", gold: 1, silver: 1, bronze: 0 },
                { country: "Zimbabwe", name: "Jack", gold: 1, silver: 1, bronze: 0 },
                { country: "Zimbabwe", name: "Mary", gold: 1, silver: 1, bronze: 0 },
                { country: "Brazil", name: "Bob", gold: 1, silver: 0, bronze: 1 },
                { country: "Brazil", name: "Jack", gold: 1, silver: 0, bronze: 1 },
                { country: "Brazil", name: "Mary", gold: 1, silver: 0, bronze: 1 },
                { country: "Brazil", name: "John", gold: 1, silver: 0, bronze: 1 }
            ];
        };
        GroupRowExample = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('group-row-example'),
            __metadata("design:paramtypes", [])
        ], GroupRowExample);
        return GroupRowExample;
    }());
    exports.GroupRowExample = GroupRowExample;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/rich-grid-declarative-example/rich-grid-declarative-example',["require", "exports", "aurelia-framework", "../../data/refData", "../../filters/skillFilter", "../../filters/proficiencyFilter", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1, refData_1, skillFilter_1, proficiencyFilter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RichGridDeclarative = (function () {
        function RichGridDeclarative() {
            var _this = this;
            this.gridOptions = {};
            var that = this;
            this.createRowData();
            this.showGrid = true;
            this.gridOptions.onGridReady = function () {
                _this.api = _this.gridOptions.api;
                _this.columnApi = _this.gridOptions.columnApi;
            };
        }
        RichGridDeclarative.prototype.createRowData = function () {
            var rowData = [];
            for (var i = 0; i < 10000; i++) {
                var countryData = refData_1.default.countries[i % refData_1.default.countries.length];
                rowData.push({
                    name: refData_1.default.firstNames[i % refData_1.default.firstNames.length] + ' ' + refData_1.default.lastNames[i % refData_1.default.lastNames.length],
                    skills: {
                        android: Math.random() < 0.4,
                        html5: Math.random() < 0.4,
                        mac: Math.random() < 0.4,
                        windows: Math.random() < 0.4,
                        css: Math.random() < 0.4
                    },
                    dob: refData_1.default.DOBs[i % refData_1.default.DOBs.length],
                    address: refData_1.default.addresses[i % refData_1.default.addresses.length],
                    years: Math.round(Math.random() * 100),
                    proficiency: Math.round(Math.random() * 100),
                    country: countryData.country,
                    continent: countryData.continent,
                    language: countryData.language,
                    mobile: this.createRandomPhoneNumber(),
                    landline: this.createRandomPhoneNumber()
                });
            }
            this.rowData = rowData;
        };
        RichGridDeclarative.prototype.calculateRowCount = function () {
            if (this.gridOptions.api && this.rowData) {
                var model = this.gridOptions.api.getModel();
                var totalRows = this.rowData.length;
                var processedRows = model.getRowCount();
                this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
            }
        };
        RichGridDeclarative.prototype.onModelUpdated = function () {
            console.log('onModelUpdated');
            this.calculateRowCount();
        };
        RichGridDeclarative.prototype.onReady = function () {
            console.log('onReady');
            this.calculateRowCount();
        };
        RichGridDeclarative.prototype.onCellClicked = function ($event) {
            console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
        };
        RichGridDeclarative.prototype.onCellValueChanged = function ($event) {
            console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
        };
        RichGridDeclarative.prototype.onCellDoubleClicked = function ($event) {
            console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
        };
        RichGridDeclarative.prototype.onCellContextMenu = function ($event) {
            console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
        };
        RichGridDeclarative.prototype.onCellFocused = function ($event) {
            if ($event.rowIndex !== null) {
                console.log('onCellFocused: (' + $event.rowIndex + ',' + ($event.column ? $event.column.colId : '') + ')');
            }
        };
        RichGridDeclarative.prototype.onRowSelected = function ($event) {
        };
        RichGridDeclarative.prototype.onSelectionChanged = function () {
            console.log('selectionChanged');
        };
        RichGridDeclarative.prototype.onBeforeFilterChanged = function () {
            console.log('beforeFilterChanged');
        };
        RichGridDeclarative.prototype.onAfterFilterChanged = function () {
            console.log('afterFilterChanged');
        };
        RichGridDeclarative.prototype.onFilterModified = function () {
            console.log('onFilterModified');
        };
        RichGridDeclarative.prototype.onBeforeSortChanged = function () {
            console.log('onBeforeSortChanged');
        };
        RichGridDeclarative.prototype.onAfterSortChanged = function () {
            console.log('onAfterSortChanged');
        };
        RichGridDeclarative.prototype.onVirtualRowRemoved = function ($event) {
        };
        RichGridDeclarative.prototype.onRowClicked = function ($event) {
            console.log('onRowClicked: ' + $event.node.data.name);
        };
        RichGridDeclarative.prototype.onQuickFilterChanged = function ($event) {
            this.gridOptions.api.setQuickFilter($event.target.value);
        };
        RichGridDeclarative.prototype.onColumnEvent = function ($event) {
            console.log('onColumnEvent: ' + $event);
        };
        RichGridDeclarative.prototype.onIdClicked = function (row) {
            console.log('id clicked ' + row.id);
        };
        RichGridDeclarative.prototype.dobCellRenderer = function (params) {
            return pad(params.value.getDate(), 2) + '/' +
                pad(params.value.getMonth() + 1, 2) + '/' +
                params.value.getFullYear();
        };
        RichGridDeclarative.prototype.countryCellRenderer = function (params) {
            var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + refData_1.default.COUNTRY_CODES[params.value] + ".png'>";
            return flag + " " + params.value;
        };
        RichGridDeclarative.prototype.skillsCellRenderer = function (params) {
            var data = params.data;
            var skills = [];
            refData_1.default.IT_SKILLS.forEach(function (skill) {
                if (data && data.skills && data.skills[skill]) {
                    skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
                }
            });
            return skills.join(' ');
        };
        RichGridDeclarative.prototype.percentCellRenderer = function (params) {
            var value = params.value;
            var eDivPercentBar = document.createElement('div');
            eDivPercentBar.className = 'div-percent-bar';
            eDivPercentBar.style.width = value + '%';
            if (value < 20) {
                eDivPercentBar.style.backgroundColor = 'red';
            }
            else if (value < 60) {
                eDivPercentBar.style.backgroundColor = '#ff9900';
            }
            else {
                eDivPercentBar.style.backgroundColor = '#00A000';
            }
            var eValue = document.createElement('div');
            eValue.className = 'div-percent-value';
            eValue.innerHTML = value + '%';
            var eOuterDiv = document.createElement('div');
            eOuterDiv.className = 'div-outer-div';
            eOuterDiv.appendChild(eValue);
            eOuterDiv.appendChild(eDivPercentBar);
            return eOuterDiv;
        };
        RichGridDeclarative.prototype.getSkillFilter = function () {
            return skillFilter_1.default;
        };
        RichGridDeclarative.prototype.getProficiencyFilter = function () {
            return proficiencyFilter_1.default;
        };
        RichGridDeclarative.prototype.getCountryFilterParams = function () {
            return {
                cellRenderer: this.countryCellRenderer,
                cellHeight: 20
            };
        };
        RichGridDeclarative.prototype.createRandomPhoneNumber = function () {
            var result = '+';
            for (var i = 0; i < 12; i++) {
                result += Math.round(Math.random() * 10);
                if (i === 2 || i === 5 || i === 8) {
                    result += ' ';
                }
            }
            return result;
        };
        RichGridDeclarative = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('rich-grid-declarative'),
            __metadata("design:paramtypes", [])
        ], RichGridDeclarative);
        return RichGridDeclarative;
    }());
    exports.RichGridDeclarative = RichGridDeclarative;
    function pad(num, totalStringSize) {
        var asString = num + "";
        while (asString.length < totalStringSize)
            asString = "0" + asString;
        return asString;
    }
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/rich-grid-example/rich-grid-example',["require", "exports", "aurelia-framework", "../../data/refData", "../../filters/skillFilter", "../../filters/proficiencyFilter", "../../jsHeaderComponent/headerComponent", "../../jsHeaderComponent/headerGroupComponent", "../../jsDateComponent/dateComponent", "ag-grid-enterprise/main"], function (require, exports, aurelia_framework_1, refData_1, skillFilter_1, proficiencyFilter_1, headerComponent_1, headerGroupComponent_1, dateComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RichGrid = (function () {
        function RichGrid() {
            var _this = this;
            this.gridOptions = {};
            this.createRowData();
            this.createColumnDefs();
            this.gridOptions.dateComponent = dateComponent_1.default;
            this.gridOptions.defaultColDef = {
                headerComponent: headerComponent_1.default,
                headerComponentParams: {
                    menuIcon: 'fa-bars'
                }
            };
            this.showGrid = true;
            this.gridOptions.onGridReady = function () {
                _this.api = _this.gridOptions.api;
                _this.columnApi = _this.gridOptions.columnApi;
            };
        }
        RichGrid.prototype.createRowData = function () {
            var rowData = [];
            for (var i = 0; i < 200; i++) {
                var countryData = refData_1.default.countries[i % refData_1.default.countries.length];
                rowData.push({
                    name: refData_1.default.firstNames[i % refData_1.default.firstNames.length] + ' ' + refData_1.default.lastNames[i % refData_1.default.lastNames.length],
                    skills: {
                        android: Math.random() < 0.4,
                        html5: Math.random() < 0.4,
                        mac: Math.random() < 0.4,
                        windows: Math.random() < 0.4,
                        css: Math.random() < 0.4
                    },
                    dob: refData_1.default.DOBs[i % refData_1.default.DOBs.length],
                    address: refData_1.default.addresses[i % refData_1.default.addresses.length],
                    years: Math.round(Math.random() * 100),
                    proficiency: Math.round(Math.random() * 100),
                    country: countryData.country,
                    continent: countryData.continent,
                    language: countryData.language,
                    mobile: createRandomPhoneNumber(),
                    landline: createRandomPhoneNumber()
                });
            }
            this.rowData = rowData;
        };
        RichGrid.prototype.createColumnDefs = function () {
            this.columnDefs = [
                {
                    headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                    suppressMenu: true, pinned: true
                },
                {
                    headerName: 'Employee',
                    headerGroupComponent: headerGroupComponent_1.default,
                    children: [
                        {
                            headerName: "Name", field: "name",
                            width: 150, pinned: true
                        },
                        {
                            headerName: "Country", field: "country", width: 150,
                            cellRenderer: countryCellRenderer, pinned: true,
                            filterParams: { cellRenderer: countryCellRenderer, cellHeight: 20 }
                        },
                        {
                            headerName: "DOB", field: "dob", width: 120, pinned: true,
                            cellRenderer: function (params) {
                                return pad(params.value.getDate(), 2) + ' /' +
                                    pad(params.value.getMonth() + 1, 2) + '/' +
                                    params.value.getFullYear();
                            },
                            filter: 'agDateColumnFilter',
                            columnGroupShow: 'open'
                        }
                    ]
                },
                {
                    headerName: 'IT Skills',
                    children: [
                        {
                            headerName: "Skills",
                            width: 125,
                            suppressSorting: true,
                            cellRenderer: skillsCellRenderer,
                            filter: skillFilter_1.default
                        },
                        {
                            headerName: "Proficiency",
                            field: "proficiency",
                            width: 120,
                            cellRenderer: percentCellRenderer,
                            filter: proficiencyFilter_1.default
                        },
                    ]
                },
                {
                    headerName: 'Contact',
                    children: [
                        { headerName: "Mobile", field: "mobile", width: 150, filter: 'text' },
                        { headerName: "Land-line", field: "landline", width: 150, filter: 'text' },
                        { headerName: "Address", field: "address", width: 500, filter: 'text' }
                    ]
                }
            ];
        };
        RichGrid.prototype.calculateRowCount = function () {
            if (this.gridOptions.api && this.rowData) {
                var model = this.gridOptions.api.getModel();
                var totalRows = this.rowData.length;
                var processedRows = model.getRowCount();
                this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
            }
        };
        RichGrid.prototype.onModelUpdated = function () {
            console.log('onModelUpdated');
            this.calculateRowCount();
        };
        RichGrid.prototype.onReady = function () {
            console.log('onReady');
            this.calculateRowCount();
        };
        RichGrid.prototype.onCellClicked = function ($event) {
            console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
        };
        RichGrid.prototype.onCellValueChanged = function ($event) {
            console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
        };
        RichGrid.prototype.onCellDoubleClicked = function ($event) {
            console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
        };
        RichGrid.prototype.onCellContextMenu = function ($event) {
            console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
        };
        RichGrid.prototype.onCellFocused = function ($event) {
            console.log('onCellFocused: (' + $event.rowIndex + ',' + ($event.column ? $event.column.colId : '') + ')');
        };
        RichGrid.prototype.onRowSelected = function ($event) {
        };
        RichGrid.prototype.onSelectionChanged = function () {
            console.log('selectionChanged');
        };
        RichGrid.prototype.onBeforeFilterChanged = function () {
            console.log('beforeFilterChanged');
        };
        RichGrid.prototype.onAfterFilterChanged = function () {
            console.log('afterFilterChanged');
        };
        RichGrid.prototype.onFilterModified = function () {
            console.log('onFilterModified');
        };
        RichGrid.prototype.onBeforeSortChanged = function () {
            console.log('onBeforeSortChanged');
        };
        RichGrid.prototype.onAfterSortChanged = function () {
            console.log('onAfterSortChanged');
        };
        RichGrid.prototype.onVirtualRowRemoved = function ($event) {
        };
        RichGrid.prototype.onRowClicked = function ($event) {
            console.log('onRowClicked: ' + $event.node.data.name);
        };
        RichGrid.prototype.onQuickFilterChanged = function ($event) {
            this.gridOptions.api.setQuickFilter($event.target.value);
        };
        RichGrid.prototype.onColumnEvent = function ($event) {
            console.log('onColumnEvent: ' + $event);
        };
        RichGrid = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('rich-grid'),
            __metadata("design:paramtypes", [])
        ], RichGrid);
        return RichGrid;
    }());
    exports.RichGrid = RichGrid;
    function skillsCellRenderer(params) {
        var data = params.data;
        var skills = [];
        refData_1.default.IT_SKILLS.forEach(function (skill) {
            if (data && data.skills && data.skills[skill]) {
                skills.push('<img src="images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
            }
        });
        return skills.join(' ');
    }
    function countryCellRenderer(params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='images/flags/" + refData_1.default.COUNTRY_CODES[params.value] + ".png'>";
        return flag + " " + params.value;
    }
    function createRandomPhoneNumber() {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }
    function percentCellRenderer(params) {
        var value = params.value;
        var eDivPercentBar = document.createElement('div');
        eDivPercentBar.className = 'div-percent-bar';
        eDivPercentBar.style.width = value + '%';
        if (value < 20) {
            eDivPercentBar.style.backgroundColor = 'red';
        }
        else if (value < 60) {
            eDivPercentBar.style.backgroundColor = '#ff9900';
        }
        else {
            eDivPercentBar.style.backgroundColor = '#00A000';
        }
        var eValue = document.createElement('div');
        eValue.className = 'div-percent-value';
        eValue.innerHTML = value + '%';
        var eOuterDiv = document.createElement('div');
        eOuterDiv.className = 'div-outer-div';
        eOuterDiv.appendChild(eValue);
        eOuterDiv.appendChild(eDivPercentBar);
        return eOuterDiv;
    }
    function pad(num, totalStringSize) {
        var asString = num + "";
        while (asString.length < totalStringSize)
            asString = "0" + asString;
        return asString;
    }
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"ag-grid/dist/styles/ag-grid.css\"></require>\n  <require from=\"ag-grid/dist/styles/theme-fresh.css\"></require>\n  <ul if.bind=\"!router.currentInstruction.params.fromDocs\" class=\"nav nav-pills\">\n    <li role=\"presentation\" class.bind=\"row.isActive ? 'active' : ''\" repeat.for=\"row of router.navigation\">\n      <a href.bind=\"row.href\">${row.title}</a>\n    </li>\n  </ul>\n\n  <router-view></router-view>\n</template>\n"; });
define('text!auDateComponents/date.component.css', ['module'], function(module) { module.exports = ".dd {\n    width: 30px\n}\n\n.mm {\n    width: 30px\n}\n\n.yyyy {\n    width: 40px\n}\n\n.reset {\n    padding: 2px;\n    background-color: red;\n    border-radius: 3px;\n    font-size: 10px;\n    color: white\n}"; });
define('text!auDateComponents/date-component.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./date.component.css\"></require>\n\n    <div class=\"filter\">\n        <span class=\"reset\" click.delegate=\"onResetDate()\">x</span>\n        <input class=\"dd\" value.bind=\"dd\" change.delegate=\"onDateChanged('dd', $event.target.value)\" maxLength=\"2\">\n        <span>/</span>\n        <input class=\"mm\" value.bind=\"mm\" change.delegate=\"onDateChanged('mm', $event.target.value)\" maxLength=\"2\">\n        <span>/</span>\n        <input class=\"yyyy\" value.bind=\"yyyy\" change.delegate=\"onDateChanged('yyyy', $event.target.value)\" maxLength=\"4\">\n    </div>\n</template>"; });
define('text!auHeaderComponents/header-component.css', ['module'], function(module) { module.exports = ".headerComponent {\n    position:relative;\n    top: -5px\n}\n\n.customHeaderMenuButton {\n    margin-top: 5px;\n    margin-left: 4px;\n    float: left;\n}\n\n.customHeaderLabel {\n    margin-left: 5px;\n    margin-top: 3px;\n    float: left;\n}\n\n.customSortDownLabel {\n    float: left;\n    margin-left: 10px;\n    margin-top: 5px;\n}\n\n.customSortUpLabel {\n    float: left;\n    margin-left: 3px;\n    margin-top: 4px;\n}\n\n.customSortRemoveLabel {\n    float: left;\n    font-size: 11px;\n    margin-left: 3px;\n    margin-top: 6px;\n}\n\n.active {\n    color: cornflowerblue;\n}\n\n.hidden {\n    display: none;\n}\n"; });
define('text!auHeaderComponents/header-component.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./header-component.css\"></require>\n\n    <div class=\"headerComponent\">\n        <div hidden.bind=\"!params.enableMenu\"\n             class=\"customHeaderMenuButton\"\n             click.delegate=\"onMenuClick()\">\n            <i class=\"${'fa ' + params.menuIcon}\"></i>\n        </div>\n        <div class=\"customHeaderLabel\">${params.displayName}</div>\n        <div hidden.bind=\"!params.enableSorting\"\n             class=\"${'customSortDownLabel'+ (sorted === 'desc' ? ' active' : '') }\"\n             click.delegate=\"onSortRequested('desc', $event)\">\n            <i class=\"fa fa-long-arrow-down\"></i>\n        </div>\n        <div hidden.bind=\"!params.enableSorting\"\n             class=\"${'customSortUpLabel'+ (sorted === 'asc' ? ' active' : '') }\"\n             click.delegate=\"onSortRequested('asc', $event)\">\n            <i class=\"fa fa-long-arrow-up\"></i>\n        </div>\n        <div hidden.bind=\"!params.enableSorting\"\n             class=\"${'customSortRemoveLabel'+ (sorted === '' ? ' active' : '') }\"\n             click.delegate=\"onSortRequested('', $event)\">\n            <i class=\"fa fa-times\"></i>\n        </div>\n    </div>\n</template>\n"; });
define('text!auHeaderComponents/header-group-component.css', ['module'], function(module) { module.exports = ".customHeaderLabel {\n    margin-left: 5px;\n    margin-top: 3px;\n    float: left;\n}\n\n.customExpandButton {\n    float: right;\n    margin-top: 5px;\n    margin-left: 3px;\n}\n\n.expanded {\n    animation-name: toExpanded;\n    animation-duration: 1s;\n    -ms-transform: rotate(180deg); /* IE 9 */\n    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n    transform: rotate(180deg);\n}\n\n.collapsed {\n    color: cornflowerblue;\n    animation-name: toCollapsed;\n    animation-duration: 1s;\n    -ms-transform: rotate(0deg); /* IE 9 */\n    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n    transform: rotate(0deg);\n}\n\n@keyframes toExpanded {\n    from {\n        color: cornflowerblue;\n        -ms-transform: rotate(0deg); /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n    to {\n        color: black;\n        -ms-transform: rotate(180deg); /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n}\n\n@keyframes toCollapsed {\n    from {\n        color: black;\n        -ms-transform: rotate(180deg); /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n    to {\n        color: cornflowerblue;\n        -ms-transform: rotate(0deg); /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n}"; });
define('text!auHeaderComponents/header-group-component.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./header-group-component.css\"></require>\n\n    <div >\n        <div class=\"customHeaderLabel\"> ${params.displayName}</div>\n        <div click.delegate=\"expandOrCollapse()\" class=\"${'customExpandButton' + (expanded ?  ' expanded': ' collapsed')}\">\n            <i class=\"fa fa-arrow-right\"></i>\n        </div>\n    </div>\n</template>\n"; });
define('text!editors/mood-editor.css', ['module'], function(module) { module.exports = ".mood {\n  border-radius: 15px;\n  border: 1px solid grey;\n  background: #e6e6e6;\n  padding: 15px;\n  text-align: center;\n  display: inline-block;\n  outline: none\n}\n\n.default {\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 1px solid transparent !important;\n}\n\n.selected {\n  padding-left: 10px;\n  padding-right: 10px;\n  border: 1px solid lightgreen !important;\n}\n"; });
define('text!editors/mood-editor.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./mood-editor.css\"></require>\n\n    <div class.bind=\"'mood'\" tabindex=\"0\" focus.bind=\"hasFocus\" keydown.trigger=\"onKeyDown($event)\">\n        <img src=\"images/smiley.png\" click.delegate=\"setHappy(true)\" class.bind=\"happy ? 'selected' : 'default'\">\n        <img src=\"images/smiley-sad.png\" click.delegate=\"setHappy(false)\" class.bind=\"!happy ? 'selected' : 'default'\">\n    </div>\n</template>\n"; });
define('text!jsHeaderComponent/headerComponent.css', ['module'], function(module) { module.exports = ".headerComponent {\n    position:relative;\n    top: -5px\n}\n\n.customHeaderMenuButton {\n    margin-top: 5px;\n    margin-left: 4px;\n    float: left;\n}\n\n.customHeaderLabel {\n    margin-left: 5px;\n    margin-top: 3px;\n    float: left;\n}\n\n.customSortDownLabel {\n    float: left;\n    margin-left: 10px;\n    margin-top: 5px;\n}\n\n.customSortUpLabel {\n    float: left;\n    margin-left: 3px;\n    margin-top: 4px;\n}\n\n.customSortRemoveLabel {\n    float: left;\n    font-size: 11px;\n    margin-left: 3px;\n    margin-top: 6px;\n}\n\n.active {\n    color: cornflowerblue;\n}"; });
define('text!editors/numeric-editor.html', ['module'], function(module) { module.exports = "<template>\n  <input focus.bind=\"hasFocus\" value.bind=\"params.value\">\n</template>\n"; });
define('text!jsHeaderComponent/headerGroup.css', ['module'], function(module) { module.exports = ".customHeaderLabel{\n    margin-left: 5px;\n    margin-top: 3px;\n    float: left;\n}\n\n.customExpandButton{\n    float:right;\n    margin-top: 5px;\n    margin-left: 3px;\n}\n\n.expanded {\n    animation-name: toExpanded;\n    animation-duration: 1s;\n    -ms-transform: rotate(180deg); /* IE 9 */\n    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n    transform: rotate(180deg);\n}\n\n.collapsed {\n    color: cornflowerblue;\n    animation-name: toCollapsed;\n    animation-duration: 1s;\n    -ms-transform: rotate(0deg); /* IE 9 */\n    -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n    transform: rotate(0deg);\n}\n\n\n\n@keyframes  toExpanded{\n    from {\n        color: cornflowerblue;\n        -ms-transform: rotate(0deg); /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n    to {\n        color: black;\n        -ms-transform: rotate(180deg); /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n}\n\n@keyframes toCollapsed{\n    from {\n        color: black;\n        -ms-transform: rotate(180deg); /* IE 9 */\n        -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */\n        transform: rotate(180deg);\n    }\n    to {\n        color: cornflowerblue;\n        -ms-transform: rotate(0deg); /* IE 9 */\n        -webkit-transform: rotate(0deg); /* Chrome, Safari, Opera */\n        transform: rotate(0deg);\n    }\n}"; });
define('text!auRenderers/styled-renderer.html', ['module'], function(module) { module.exports = "<template>\n    <span css.bind=\"params.style\">${params.value}</span>\n</template>\n"; });
define('text!components/rich-grid-example/rich-grid-example.css', ['module'], function(module) { module.exports = ".filter {\n    margin: 2px\n}\n\n.dd {\n    width: 30px\n}\n\n.mm {\n    width: 30px\n}\n\n.yyyy {\n    width: 60px\n}\n\n.reset {\n    padding: 2px;\n    background-color: red;\n    border-radius: 3px;\n    font-size: 10px;\n    margin-right: 5px;\n    color: white\n}"; });
define('text!components/editor-example/editor-example.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"../../editors/numeric-editor\"></require>\n    <require from=\"../../editors/mood-editor\"></require>\n    <div style=\"width: 800px;\">\n        <h1>Editor Example</h1>\n        <div style=\"width: 100%; height: 350px;\">\n            <ag-grid-aurelia #agGrid style=\"width: 100%; height: 100%;\" class=\"ag-fresh\"\n                             grid-options.bind=\"gridOptions\">\n\n                <ag-grid-column header-name=\"Name\" field=\"name\" width.bind=\"300\"></ag-grid-column>\n                <ag-grid-column header-name=\"Mood\" field=\"mood\" width.bind=\"250\" editable.bind=\"true\">\n                    <ag-cell-template>\n                        <img width=\"20px\" if.bind=\"params.value === 'Happy'\" src=\"images/smiley.png\"/>\n                        <img width=\"20px\" if.bind=\"params.value !== 'Happy'\" src=\"images/smiley-sad.png\"/>\n                    </ag-cell-template>\n                    <ag-editor-template>\n                        <ag-mood-editor></ag-mood-editor>\n                    </ag-editor-template>\n                </ag-grid-column>\n                <ag-grid-column header-name=\"Numeric\" field=\"number\" width.bind=\"249\" editable.bind=\"true\">\n                    <ag-editor-template>\n                        <ag-numeric-editor></ag-numeric-editor>\n                    </ag-editor-template>\n                </ag-grid-column>\n            </ag-grid-aurelia>\n        </div>\n    </div>\n</template>\n"; });
define('text!components/filter-example/filter-example.html', ['module'], function(module) { module.exports = "<template>\n  <div style=\"width: 800px;\">\n    <h1>Filter Example</h1>\n    <div style=\"width: 100%; height: 350px;\">\n      <ag-grid-aurelia #agGrid style=\"width: 100%; height: 100%;\" class=\"ag-fresh\"\n                       grid-options.bind=\"gridOptions\">\n        <ag-grid-column header-name=\"Row\" field=\"row\" width.bind=\"400\">\n        </ag-grid-column>\n        <ag-grid-column header-name=\"Filter Component\" field=\"name\" width.bind=\"400\" filter.bind=\"getPartialMatchFilter()\">\n        </ag-grid-column>\n      </ag-grid-aurelia>\n    </div>\n  </div>\n  </div>\n</template>\n"; });
define('text!components/floating-row-example/floating-row-example.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"../../auRenderers/styled-renderer\"></require>\n    <div style=\"width: 800px;\">\n        <h1>Pinned Row Example</h1>\n        <div style=\"width: 100%; height: 350px;\">\n            <ag-grid-aurelia #agGrid style=\"width: 100%; height: 100%;\" class=\"ag-fresh\"\n                             grid-options.bind=\"gridOptions\">\n                <ag-grid-column header-name=\"Row\" field=\"row\" width.bind=\"400\" pinned-row-cell-renderer-params.bind=\"{style: {'fontWeight': 'bold'}}\">\n                    <ag-pinned-row-template>\n                        <ag-styled-renderer></ag-styled-renderer>\n                    </ag-pinned-row-template>\n                </ag-grid-column>\n                <ag-grid-column header-name=\"Number\" field=\"number\" width.bind=\"399\" pinned-row-cell-renderer-params.bind=\"{style: {'fontStyle': 'italic'}}\">\n                    <ag-pinned-row-template>\n                        <ag-styled-renderer></ag-styled-renderer>\n                    </ag-pinned-row-template>\n                </ag-grid-column>\n            </ag-grid-aurelia>\n        </div>\n    </div>\n    </div>\n</template>\n"; });
define('text!components/full-width-example/full-width-example.html', ['module'], function(module) { module.exports = "<template>\n  <div style=\"width: 800px;\">\n    <h1>Full Width Example</h1>\n      <div style=\"width: 100%; height: 350px;\">\n        <ag-grid-aurelia #agGrid style=\"width: 100%; height: 100%;\" class=\"ag-fresh\"\n                         grid-options.bind=\"gridOptions\">\n            <ag-grid-column header-name=\"Name\" field=\"name\" width.bind=\"400\">\n            </ag-grid-column>\n            <ag-grid-column header-name=\"Age\" field=\"age\" width.bind=\"400\">\n            </ag-grid-column>\n        </ag-grid-aurelia>\n      </div>\n    </div>\n  </div>\n</template>\n"; });
define('text!components/rich-grid-declarative-example/rich-grid-declarative-example.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"../../auHeaderComponents/header-component\"></require>\n    <require from=\"../../auHeaderComponents/header-group-component\"></require>\n    <require from=\"../../auDateComponents/date-component\"></require>\n\n    <div style=\"width: 800px;\">\n        <h1>Rich Grid with Declarative Markup</h1>\n        <div style=\"padding: 4px;\">\n            <div style=\"float: right;\">\n                <input keyup.delegate=\"onQuickFilterChanged($event)\" type=\"text\" id=\"quickFilterInput\"\n                       placeholder=\"Type text to filter...\"/>\n                <button disabled.bind=\"!showGrid\" click.delegate=\"showGrid=false\">Destroy Grid</button>\n                <button disabled.bind=\"showGrid\" click.delegate=\"showGrid=true\">Create Grid</button>\n            </div>\n            <div>\n                <b>Employees Skills and Contact Details</b>\n                ${rowCount}\n            </div>\n        </div>\n        <div style=\"clear: both;\"></div>\n\n        <div if.bind=\"showGrid\">\n\n            <!-- Because we are using the Angular ID (ie #ag-grid marker), we have to have all the items that use\n                 that marker inside the same ng-if as the grid -->\n\n            <div style=\"padding: 4px;\" class=\"toolbar\">\n            <span>\n                Grid API:\n                <button click.delegate=\"api.selectAll()\">Select All</button>\n                <button click.delegate=\"api.deselectAll()\">Clear Selection</button>\n            </span>\n                <span style=\"margin-left: 20px;\">\n                Column API:\n                <button click.delegate=\"columnApi.setColumnVisible('country', false)\">Hide Country Column</button>\n                <button click.delegate=\"columnApi.setColumnVisible('country', true)\">Show Country Column</button>\n            </span>\n            </div>\n            <div style=\"clear: both;\"></div>\n            <div style=\"padding: 4px;\" class=\"toolbar\">\n                <label>\n                    <input type=\"checkbox\" change.delegate=\"showToolPanel=$event.target.checked\"/>\n                    Show Tool Panel\n                </label>\n                <button click.delegate=\"createRowData()\">Refresh Data</button>\n            </div>\n            <div style=\"clear: both;\"></div>\n\n            <div style=\"width: 100%; height: 350px;\">\n                <ag-grid-aurelia #agGrid style=\"width: 100%; height: 350px;\" class=\"ag-fresh\"\n                                 context.bind=\"$this\"\n                                 grid-options.bind=\"gridOptions\"\n                                 column-defs.bind=\"columnDefs\"\n                                 show-tool-panel.bind=\"showToolPanel\"\n                                 row-data.bind=\"rowData\"\n\n                                 enable-col-resize\n                                 enable-sorting\n                                 enable-filter\n                                 group-headers\n                                 suppress-row-click-selection\n                                 tool-panel-suppress-groups\n                                 tool-panel-suppress-values\n                                 row-height=\"22\"\n                                 row-selection=\"multiple\"\n\n                                 model-updated.call=\"onModelUpdated()\"\n                                 cell-clicked.call=\"onCellClicked($event)\"\n                                 cell-double-clicked.call=\"onCellDoubleClicked($event)\"\n                                 cell-context-menu.call=\"onCellContextMenu($event)\"\n                                 cell-value-changed.call=\"onCellValueChanged($event)\"\n                                 cell-focused.call=\"onCellFocused($event)\"\n                                 row-selected.call=\"onRowSelected($event)\"\n                                 selection-changed.call=\"onSelectionChanged()\"\n                                 before-filter-changed.call=\"onBeforeFilterChanged()\"\n                                 after-filter-changed.call=\"onAfterFilterChanged()\"\n                                 filter-modified.call=\"onFilterModified()\"\n                                 before-sort-changed.call=\"onBeforeSortChanged()\"\n                                 after-sort-changed.call=\"onAfterSortChanged()\"\n                                 virtual-row-removed.call=\"onVirtualRowRemoved($event)\"\n                                 row-clicked.call=\"onRowClicked($event)\"\n                                 grid-ready.call=\"onReady($event)\"\n\n                                 column-everything-changed.call=\"onColumnEvent($event)\"\n                                 column-row-group-changed.call=\"onColumnEvent($event)\"\n                                 column-value-changed.call=\"onColumnEvent($event)\"\n                                 column-moved.call=\"onColumnEvent($event)\"\n                                 column-visible.call=\"onColumnEvent($event)\"\n                                 column-group-opened.call=\"onColumnEvent($event)\"\n                                 column-resized.call=\"onColumnEvent($event)\"\n                                 column-pinned-count-changed.call=\"onColumnEvent($event)\">\n                    <ag-date-template>\n                        <ag-date-component></ag-date-component>\n                    </ag-date-template>\n                    <ag-grid-column header-name=\"#\" width.bind=\"30\" checkbox-selection.bind=\"true\"\n                                    suppress-sorting.bind=\"true\" suppress-menu.bind=\"true\"\n                                    pinned.bind=\"true\"></ag-grid-column>\n                    <ag-grid-column header-name=\"Employee\">\n                        <ag-header-group-template>\n                            <ag-header-group-component></ag-header-group-component>\n                        </ag-header-group-template>\n                        <ag-grid-column header-name=\"Name\" field=\"name\" width.bind=\"150\" pinned.bind=\"true\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                        <ag-grid-column header-name=\"Country\" field=\"country\" width.bind=\"150\"\n                                        cell-renderer.bind=\"countryCellRenderer\" pinned.bind=\"true\"\n                                        filter-params.bind=\"getCountryFilterParams()\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                        <ag-grid-column header-name=\"DOB\" field=\"dob\" width.bind=\"150\"\n                                        cell-renderer.bind=\"dobCellRenderer\" pinned.bind=\"true\"\n                                        filter=\"agDateColumnFilter\" column-group-show=\"open\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                    </ag-grid-column>\n                    <ag-grid-column header-name=\"IT Skills\">\n                        <ag-grid-column header-name=\"Skills\" width.bind=\"125\" suppress-sorting.bind=\"true\"\n                                        cell-renderer.bind=\"skillsCellRenderer\"\n                                        filter.bind=\"getSkillFilter()\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                        <ag-grid-column header-name=\"Proficiency\" field=\"proficiency\" width.bind=\"120\"\n                                        cell-renderer.bind=\"percentCellRenderer\"\n                                        filter.bind=\"getProficiencyFilter()\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                    </ag-grid-column>\n                    <ag-grid-column header-name=\"Contact\">\n                        <ag-grid-column header-name=\"Mobile\" field=\"mobile\" width.bind=\"150\"\n                                        filter=\"text\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                        <ag-grid-column header-name=\"Land-line\" field=\"landline\" width.bind=\"150\"\n                                        filter=\"text\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                        <ag-grid-column header-name=\"Address\" field=\"address\" width.bind=\"500\"\n                                        filter=\"text\"\n                                        header-component-params.bind=\"{ menuIcon: 'fa-bars' }\">\n                            <ag-header-template>\n                                <ag-header-component></ag-header-component>\n                            </ag-header-template>\n                        </ag-grid-column>\n                    </ag-grid-column>\n                </ag-grid-aurelia>\n            </div>\n        </div>\n    </div>\n</template>\n"; });
define('text!components/group-row-example/group-row-example.html', ['module'], function(module) { module.exports = "<template>\n  <div style=\"width: 800px;\">\n    <h1>Group Row Example</h1>\n    <div style=\"width: 100%; height: 350px;\">\n      <ag-grid-aurelia #agGrid style=\"width: 100%; height: 100%;\" class=\"ag-fresh\"\n                       grid-options.bind=\"gridOptions\">\n        <ag-grid-column header-name=\"Country\" field=\"country\" width.bind=\"100\" row-group-index.bind=\"0\">\n        </ag-grid-column>\n        <ag-grid-column header-name=\"Name\" field=\"name\" width.bind=\"100\">\n        </ag-grid-column>\n        <ag-grid-column header-name=\"Gold\" field=\"gold\" width.bind=\"100\" agg-func=\"sum\">\n        </ag-grid-column>\n        <ag-grid-column header-name=\"Silver\" field=\"silver\" width.bind=\"100\" agg-func=\"sum\">\n        </ag-grid-column>\n        <ag-grid-column header-name=\"Bronze\" field=\"bronze\" width.bind=\"100\" agg-func=\"sum\">\n        </ag-grid-column>\n      </ag-grid-aurelia>\n    </div>\n  </div>\n  </div>\n</template>\n"; });
define('text!components/rich-grid-example/rich-grid-example.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"./rich-grid-example.css\"></require>\n    <require from=\"../../jsHeaderComponent/headerGroup.css\"></require>\n    <require from=\"../../jsHeaderComponent/headerComponent.css\"></require>\n\n    <div style=\"width: 800px;\">\n        <h1>Rich Grid with Pure JavaScript</h1>\n        <div style=\"padding: 4px;\">\n            <div style=\"float: right;\">\n                <input keyup.delegate=\"onQuickFilterChanged($event)\" type=\"text\" id=\"quickFilterInput\"\n                       placeholder=\"Type text to filter...\"/>\n                <button disabled.bind=\"!showGrid\" click.delegate=\"showGrid=false\">Destroy Grid</button>\n                <button disabled.bind=\"showGrid\" click.delegate=\"showGrid=true\">Create Grid</button>\n            </div>\n            <div>\n                <b>Employees Skills and Contact Details</b>\n                ${rowCount}\n            </div>\n        </div>\n        <div style=\"clear: both;\"></div>\n\n        <div if.bind=\"showGrid\">\n\n            <!-- Because we are using the Angular ID (ie #ag-grid marker), we have to have all the items that use\n                 that marker inside the same ng-if as the grid -->\n\n            <div style=\"padding: 4px;\" class=\"toolbar\">\n            <span>\n                Grid API:\n                <button click.delegate=\"api.selectAll()\">Select All</button>\n                <button click.delegate=\"api.deselectAll()\">Clear Selection</button>\n            </span>\n                <span style=\"margin-left: 20px;\">\n                Column API:\n                <button click.delegate=\"columnApi.setColumnVisible('country', false)\">Hide Country Column</button>\n                <button click.delegate=\"columnApi.setColumnVisible('country', true)\">Show Country Column</button>\n            </span>\n            </div>\n            <div style=\"clear: both;\"></div>\n            <div style=\"padding: 4px;\" class=\"toolbar\">\n                <label>\n                    <input type=\"checkbox\" change.delegate=\"showToolPanel=$event.target.checked\"/>\n                    Show Tool Panel\n                </label>\n                <button click.delegate=\"createRowData()\">Refresh Data</button>\n            </div>\n            <div style=\"clear: both;\"></div>\n\n            <div style=\"width: 100%; height: 350px;\">\n                <ag-grid-aurelia #agGrid class=\"ag-fresh\"\n                                 style=\"width: 100%; height: 350px;\"\n                                 grid-options.bind=\"gridOptions\"\n                                 column-defs.bind=\"columnDefs\"\n                                 show-tool-panel.bind=\"showToolPanel\"\n                                 row-data.bind=\"rowData\"\n\n                                 enable-col-resize\n                                 enable-sorting\n                                 enable-filter\n                                 group-headers\n                                 suppress-row-click-selection\n                                 tool-panel-suppress-groups\n                                 tool-panel-suppress-values\n                                 row-height.bind=\"22\"\n                                 row-selection=\"multiple\"\n\n                                 model-updated.call=\"onModelUpdated()\"\n                                 cell-clicked.call=\"onCellClicked($event)\"\n                                 cell-double-clicked.call=\"onCellDoubleClicked($event)\"\n                                 cell-context-menu.call=\"onCellContextMenu($event)\"\n                                 cell-value-changed.call=\"onCellValueChanged($event)\"\n                                 cell-focused.call=\"onCellFocused($event)\"\n                                 row-selected.call=\"onRowSelected($event)\"\n                                 selection-changed.call=\"onSelectionChanged()\"\n                                 before-filter-changed.call=\"onBeforeFilterChanged()\"\n                                 after-filter-changed.call=\"onAfterFilterChanged()\"\n                                 filter-modified.call=\"onFilterModified()\"\n                                 before-sort-changed.call=\"onBeforeSortChanged()\"\n                                 after-sort-changed.call=\"onAfterSortChanged()\"\n                                 virtual-row-removed.call=\"onVirtualRowRemoved($event)\"\n                                 row-clicked.call=\"onRowClicked($event)\"\n                                 ready.call=\"onReady($event)\"\n\n                                 column-everything-changed.call=\"onColumnEvent($event)\"\n                                 column-row-group-changed.call=\"onColumnEvent($event)\"\n                                 column-value-changed.call=\"onColumnEvent($event)\"\n                                 column-moved.call=\"onColumnEvent($event)\"\n                                 column-visible.call=\"onColumnEvent($event)\"\n                                 column-group-opened.call=\"onColumnEvent($event)\"\n                                 column-resized.call=\"onColumnEvent($event)\"\n                                 column-pinned-count-changed.call=\"onColumnEvent($event)\">\n                </ag-grid-aurelia>\n            </div>\n        </div>\n\n    </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map