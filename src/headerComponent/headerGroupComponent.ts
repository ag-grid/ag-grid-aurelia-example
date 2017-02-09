export default class HeaderGroupComponent {
    init = function (params) {
        this.params = params;
        this.eGui = document.createElement('div');
        this.eGui.innerHTML = ''+
            '<div class="customHeaderLabel">' + this.params.displayName + '</div>' +
            '<div class="customExpandButton"><i class="fa fa-arrow-right"></i></div>';

        this.onExpandButtonClickedListener = this.expandOrCollapse.bind(this);
        this.eExpandButton = this.eGui.querySelector(".customExpandButton");
        this.eExpandButton.addEventListener('click', this.onExpandButtonClickedListener);

        this.onExpandChangedListener = this.syncExpandButtons.bind(this);
        this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChangedListener);

        this.syncExpandButtons();
    };

    getGui = function () {
        return this.eGui;
    };

    expandOrCollapse = function () {
        var currentState = this.params.columnGroup.getOriginalColumnGroup().isExpanded();
        this.params.setExpanded(!currentState);
    };

    syncExpandButtons = function () {
        function collapsed(toDeactivate) {
            toDeactivate.className = toDeactivate.className.split(' ')[0] + ' collapsed';
        }

        function expanded(toActivate) {
            toActivate.className = toActivate.className.split(' ')[0] + ' expanded';
        }

        if (this.params.columnGroup.getOriginalColumnGroup().isExpanded()) {
            expanded(this.eExpandButton);
        } else {
            collapsed(this.eExpandButton);
        }
    };

    destroy = function () {
        this.eExpandButton.removeEventListener('click', this.onExpandButtonClickedListener);
    };
}