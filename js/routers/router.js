const { Router } = Backbone;
import $ from 'jquery';

class Workspace extends Router {
    constructor() {
        super();
        this.routes = {
                "tab1": "tab1",  // #tab1
                "tab2": "tab2",  // #tab2
                "#modal": "modal",   // #modal
                "*path": "tab1" //default route
        };
        this._bindRoutes();
    }

    /**
     * Tab 1 route handler
     */
    tab1() {
        $('.tabs a').removeClass('active');
        $('.tabs a[href="#tab1"]').addClass('active');
        $('.contents .section').hide();
        $('#tab1').show();
    }

    /**
     * Tab 2 route handler
     */
    tab2() {
        $('.tabs a').removeClass('active');
        $('.tabs a[href="#tab2"]').addClass('active');
        $('.contents .section').hide();
        $('#tab2').show();
    }

    /**
     * Tab 3 route handler
     */
    modal() {

    }
}

export default Workspace;