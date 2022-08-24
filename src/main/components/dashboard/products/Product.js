import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DashboardHeader from '../DashboardHeader';



const Product = ({ product}) => {
    return (
       <div>
          <DashboardHeader />
        <Card>
           <Link to={`/product/${product.id}`}>
           <Card.Img src={product.image}/>
           </Link>
           <Card.Body>
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text as='h3'>
               { product.price}
            </Card.Text>
           </Card.Body>
        </Card>
        </div>
    );
};

export default Product;