import { FC } from "react";
import Product from '../../../main/components/dashboard/products/Product'
import { Row, Col } from "react-bootstrap";
import products from '../../../products'


const DashboardPage  = () =>{


    return(
        <div>
        
        <h3> Latest Products</h3>
        <Row>
            {products.map((product) => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
            
        </Row>
        </div>      
        
       
    )
}

export default DashboardPage;