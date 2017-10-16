import { renderComponent , expect } from '../test_helper';
import ProductsList from '../../src/components/productsList';

describe('ProductsList' , () => {
    let component;
    const props = {products: [
        {id:1, title: 'Apples', description: 'some red apples', price: 30},
        {id:2, title: 'Oranges', description: 'Peale\'em all', price: 25},
        {id:3, title: 'Bananas', description: 'Some potassium for you', price: 20}
    ]};

    beforeEach(() => {
        component = renderComponent(ProductsList, null, props);
    });

    it('ProductsList component exists', () => {
        expect(component).to.exist;
    });

    it('contains cart', () => {
        expect(component.find('aside.cart')).to.exist;
    });
    it('contains products list', () => {
        expect(component.find('.productsList')).to.exist;
    });
    it('shows products LIST for each product in props', () => {
        expect(component.find('.productItem').length).to.equal(props.products.length);
    });
});