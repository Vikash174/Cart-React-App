import CartItem from "./CartItem";
import Cart from "./cart";
import Navbar from "./Navbar";
import React from "react";



class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 1
                },
                {
                    price: 9999,
                    title: 'Mobile Phone',
                    qty: 2,
                    img: '',
                    id: 2
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }

    }

    handleINcreaseQuantity = (product) => {
        // console.log('Hey please increase the quantity of ',product);
        const { products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;
        this.setState({
            products: products
        });

    }
    handleDecreaseQuantity = (product) => {
        //    console.log('hey! please decrease the quantity of ',product);
        const { products } = this.state;
        const index = products.indexOf(product);

        if (products[index].qty > 0) {
            products[index].qty -= 1;
            this.setState({
                products: products
            });
        }
        return;

    }
    handleDeleteProduct = (product) => {
        // console.log('hey! please delete ',product);
        const { products } = this.state
        const index = products.indexOf(product);
        products.splice(index, 1);
        this.setState({
            products: products
        })
    }
    getCartCount =()=>{
        const{products} = this.state;
        let count =0;
        products.forEach((product) =>{
            count+=product.qty;
        });
        return count;
    }

    getCartTotal=()=>{
        const{products} = this.state;
        let cartTotal = 0;
        products.forEach((product) =>{
            cartTotal += product.qty*product.price;
        })

        return cartTotal;
    }




    render() {

        const { products } = this.state;

        return (
            <div className="App">
                <Navbar count={this.getCartCount}/>
                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleINcreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}
                />
            </div>
        );
    }

}
export default App;
