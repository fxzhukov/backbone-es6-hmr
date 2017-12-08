import $ from 'jquery';
import StorageModel from '../models/StorageModel';

const {View} = Backbone;

class Popup extends View {
    constructor() {
        super();
        this.model = StorageModel;
        this.template = ({text}) => `<a class="closer" href="#">Закрыть</a><div>${text}</div>`;
        this.setElement($('#popupContent'));
        this.model.on('change', this.render, this);
        //set popup max height
        $('#popupContent').css('max-height', parseInt($(window).height()*0.9));
    }

    events(){
        return {"click a.closer": "closePopup"}
    }

    closePopup(e){
        e.preventDefault();
        $('#popup').css('visibility', 'hidden');
    }

    render() {
        this.$el.html(this.template(this.model.attributes));
    }
}
export default Popup;