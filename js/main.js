import Backbone from 'backbone';
import $ from 'jquery';
import Tab1View from 'views/Tab1';
import Tab2View from 'views/Tab2';
import Popup from 'views/Popup';

import Workspace from 'routers/router';

//Allow other scripts use jQuery
// Initialize routing and start Backbone.history()
new Workspace();
Backbone.history.start();
//Initialize App
$(function () {
    const t1 = new Tab1View();
    t1.render();
    const t2 = new Tab2View();
    t2.render();
    const popup = new Popup();
    popup.render();
});
