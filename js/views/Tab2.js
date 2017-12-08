import $ from 'jquery';
import StorageModel from '../models/StorageModel';

const {View} = Backbone;


class Tab2View extends View {
    constructor() {
        super();
        this.model = StorageModel;
        this.template = ({text}) => `<div >\
            <textarea name="userInput" id="userInput" placeholder="Enter text...">${text}</textarea>\
            </div><div><button class="modalButton">Show Popup</button></div>`;
        this.setElement($('#tab2'));


    }

    events() {
        return {
            "keyup textarea": "updateStorage",
            "click button": "showPopup"
        }
    }

    render() {
        this.$el.html(this.template(this.model.attributes));
    }

    updateStorage(e) {
        this.model.set('text', $(e.currentTarget).val());
    }

    showPopup() {
        $('#popup').css('visibility', 'visible');
    }
}

export default Tab2View;
