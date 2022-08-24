import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DashboardHeader from '../DashboardHeader';



const Product = ({ product}) => {
    return (
       <div>
          <DashboardHeader />
        <Card className='my-3 p-3 rounded'>
           <Link to={`/product/${product.id}`}>
           <Card.Img src={product.image}/>
           </Link>
           <Card.Body>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as='h3' className='my-3'>
               { product.price}
            </Card.Text>
           </Card.Body>
        </Card>
        </div>
    );
};

export default Product;