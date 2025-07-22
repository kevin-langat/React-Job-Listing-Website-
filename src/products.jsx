const DummyProductsData = ['Product One', 'Product Two', 'Product Three'];
import './index.css';

function ProductList() {
  return (
    <div className='Product-list-container'>
      <h2 style={{ color: '#000' }}>Ecommerce Project</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          width: '80%',
          height: '70%',
          backgroundColor: 'green',
        }}
      >
        {DummyProductsData.map((item, index) => (
          <li
            style={{
              listStyle: 'none',
              color: '#000',
              fontSize: 'medium',
              fontWeight: 'bold',
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
