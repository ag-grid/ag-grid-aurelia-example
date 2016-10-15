define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
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

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
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

define('data/refData',["require", "exports"], function (require, exports) {
    "use strict";
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
            '7619 Tawny Carrefour, Senlac, NV, 89529-9876, US, (775) 901-6433'];
        return RefData;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = RefData;
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
define('components/rich-grid',["require", "exports", 'aurelia-framework', '../data/refData'], function (require, exports, aurelia_framework_1, refData_1) {
    "use strict";
    var RichGrid = (function () {
        function RichGrid() {
            var _this = this;
            this.gridOptions = {};
            this.createRowData();
            this.createColumnDefs();
            this.showGrid = true;
            this.gridOptions.onGridReady = function () {
                _this.api = _this.gridOptions.api;
                _this.columnApi = _this.gridOptions.columnApi;
            };
        }
        RichGrid.prototype.createRowData = function () {
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
                        },
                        {
                            headerName: "Proficiency",
                            field: "proficiency",
                            width: 120,
                            cellRenderer: percentCellRenderer,
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
            console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
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
            __metadata('design:paramtypes', [])
        ], RichGrid);
        return RichGrid;
    }());
    exports.RichGrid = RichGrid;
    function skillsCellRenderer(params) {
        var data = params.data;
        var skills = [];
        refData_1.default.IT_SKILLS.forEach(function (skill) {
            if (data && data.skills && data.skills[skill]) {
                skills.push('<img src="/images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
            }
        });
        return skills.join(' ');
    }
    function countryCellRenderer(params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='../images/flags/" + refData_1.default.COUNTRY_CODES[params.value] + ".png'>";
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
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./components/rich-grid\"></require>\n  <rich-grid></rich-grid>\n</template>\n"; });
define('text!components/rich-grid.html', ['module'], function(module) { module.exports = "<template>\n  <!-- todo: plugin should load this -->\n  <!--<require from=\"../../node_modules/ag-grid-aurelia/lib/agGridAurelia\"></require>-->\n\n  <div style=\"width: 800px;\">\n    <h1>Rich Grid with pure JavaScript</h1>\n    <div style=\"padding: 4px;\">\n      <div style=\"float: right;\">\n        <input keyup.delegate=\"onQuickFilterChanged($event)\" type=\"text\" id=\"quickFilterInput\" placeholder=\"Type text to filter...\"/>\n        <button disabled.bind=\"!showGrid\" click.delegate=\"showGrid=false\">Destroy Grid</button>\n        <button disabled.bind=\"showGrid\" click.delegate=\"showGrid=true\">Create Grid</button>\n      </div>\n      <div>\n        <b>Employees Skills and Contact Details</b>\n        ${rowCount}\n      </div>\n    </div>\n    <div style=\"clear: both;\"></div>\n\n    <div if.bind=\"showGrid\">\n\n      <!-- Because we are using the Angular ID (ie #ag-grid marker), we have to have all the items that use\n           that marker inside the same ng-if as the grid -->\n\n      <div style=\"padding: 4px;\" class=\"toolbar\">\n            <span>\n                Grid API:\n                <button click.delegate=\"api.selectAll()\">Select All</button>\n                <button click.delegate=\"api.deselectAll()\">Clear Selection</button>\n            </span>\n        <span style=\"margin-left: 20px;\">\n                Column API:\n                <button click.delegate=\"columnApi.setColumnVisible('country', false)\">Hide Country Column</button>\n                <button click.delegate=\"columnApi.setColumnVisible('country', true)\">Show Country Column</button>\n            </span>\n      </div>\n      <div style=\"clear: both;\"></div>\n      <div style=\"padding: 4px;\" class=\"toolbar\">\n        <label>\n          <input type=\"checkbox\" change.delegate=\"showToolPanel=$event.target.checked\"/>\n          Show Tool Panel\n        </label>\n        <button click.delegate=\"createRowData()\">Refresh Data</button>\n      </div>\n      <div style=\"clear: both;\"></div>\n\n      <div style=\"width: 100%; height: 350px;\">\n        <ag-grid-aurelia #agGrid  class=\"ag-fresh\"\n\n                   grid-options.bind=\"gridOptions\"\n                   column-defs.bind=\"columnDefs\"\n                   show-tool-panel.bind=\"showToolPanel\"\n                   row-data.bind=\"rowData\"\n\n                   enable-col-resize\n                   enable-sorting\n                   enable-filter\n                   group-headers\n                   suppress-row-click-selection\n                   tool-panel-suppress-groups\n                   tool-panel-suppress-values\n                   debug\n                   row-height=\"22\"\n                   row-selection=\"multiple\"\n\n                   (modelUpdated)=\"onModelUpdated()\"\n                   (cellClicked)=\"onCellClicked($event)\"\n                   (cellDoubleClicked)=\"onCellDoubleClicked($event)\"\n                   (cellContextMenu)=\"onCellContextMenu($event)\"\n                   (cellValueChanged)=\"onCellValueChanged($event)\"\n                   (cellFocused)=\"onCellFocused($event)\"\n                   (rowSelected)=\"onRowSelected($event)\"\n                   (selectionChanged)=\"onSelectionChanged()\"\n                   (beforeFilterChanged)=\"onBeforeFilterChanged()\"\n                   (afterFilterChanged)=\"onAfterFilterChanged()\"\n                   (filterModified)=\"onFilterModified()\"\n                   (beforeSortChanged)=\"onBeforeSortChanged()\"\n                   (afterSortChanged)=\"onAfterSortChanged()\"\n                   (virtualRowRemoved)=\"onVirtualRowRemoved($event)\"\n                   (rowClicked)=\"onRowClicked($event)\"\n                   (ready)=\"onReady($event)\"\n\n                   (columnEverythingChanged)=\"onColumnEvent($event)\"\n                   (columnRowGroupChanged)=\"onColumnEvent($event)\"\n                   (columnValueChanged)=\"onColumnEvent($event)\"\n                   (columnMoved)=\"onColumnEvent($event)\"\n                   (columnVisible)=\"onColumnEvent($event)\"\n                   (columnGroupOpened)=\"onColumnEvent($event)\"\n                   (columnResized)=\"onColumnEvent($event)\"\n                   (columnPinnedCountChanged)=\"onColumnEvent($event)\">\n      </ag-grid-aurelia>\n      </div>\n    </div>\n\n  </div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map