import React from 'react';
import CropImageGrid from './CropImageGrid'

const imageProperties = [
  { src: 'https://www.dandreaproduce.com/wp-content/uploads/2018/11/green-kohlrabi-560x560.jpg', name: 'kohlrabi' },
  { src: 'https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a7751c23-7b65-4f7c-af11-f167e1af7d35.jpg', name: 'bok choy' },
  { src: 'https://cdn.shopify.com/s/files/1/0156/0137/products/refill_0012_basil.jpg', name: 'basil' },
  { src: 'https://www.algioproduce.com/wp-content/uploads/2017/07/ap_140_lettuce_baby_arugula.jpg', name: 'arugula' },
  { src: 'https://cdn.shopify.com/s/files/1/1251/5173/products/kale_1024x1024.jpeg?v=1465696011', name: 'kale' },
  { src: 'https://www.cambridgema.gov/~/media/Images/publicinformationoffice/newsphotos/Romaine.jpg', name: 'romaine' },
  { src: 'https://www.veritable-potager.fr/398-thickbox_default/butterhead-lettuce.jpg', name: 'lettuce' },
  { src: 'https://www.rawl.net/media/1131/mustard_1200.jpg', name: 'mustard green' },
  { src: 'https://www.kingfreshfarm.com/wp-content/uploads/2017/09/Green-Oak-Lettuce-7.jpg', name: 'oakleaf' }
];

class CropView extends React.Component {
  render() {
    return (
      <CropImageGrid imageProperties={imageProperties} />
    );
  }
}

export default CropView;
