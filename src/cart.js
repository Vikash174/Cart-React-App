import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id:1
                },
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 2,
                    img: '',
                    id:2
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id:3
                }
            ]
        }

    }
      
    handleINcreaseQuantity = (product)=>{
        // console.log('Hey please increase the quantity of ',product);
        const{products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;
        this.setState({
          products : products
        });

    }
    handleDecreaseQuantity=(product)=>{
        //    console.log('hey! please decrease the quantity of ',product);
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty >0){
            products[index].qty -=1;
            this.setState({
                products:products
            });
        }
        return;
        
    }
    handleDeleteProduct=(product)=>{
        // console.log('hey! please delete ',product);
        const{products} = this.state
        const index = products.indexOf(product);
        products.splice(index,1);
        this.setState({
            products:products
        })
    }

    render() {
        const { products } = this.state;
        return (

            <div className="cart">


                {products.map((product) => {



                    return (
                        <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity={this.handleINcreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                        />)

                })}

            </div>

        );
    }
}
export default Cart;