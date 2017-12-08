import $ from 'jquery';
import LoremIpsum from '../models/LoremIpsumModel';

const {View} = Backbone;


class Tab1View extends View {
	constructor() {
		super();
		this.model = LoremIpsum;
		this.template = ({ text }) => `${text}`;
        this.setElement($('#tab1'));
	}
 
	render() {
		this.$el.html(this.template(this.model.attributes));
	}
}

export default Tab1View;
