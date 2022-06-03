import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import * as firebase from 'firebase';
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import  db from './index.js';
import {collection, onSnapshot,doc, getDoc, QuerySnapshot, addDoc, setDoc, updateDoc, CollectionReference, deleteDoc} from 'firebase/firestore';


class App extends React.Component {

  constructor () {
    super();
    this.state = {
      products: [],
      loading:true
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  componentDidMount(){
        //   firebase
        //  .firestore()
       
   
        // db.collection("products").get()
        // .then((QuerySnapshot) =>{
        //   console.log(qu)
        // })
         
       onSnapshot(collection(db,"products"),(snapshot)=>{
            //  console.log(snapshot.docs.map(doc =>doc.data()));


             const products = snapshot.docs.map((doc) => {
               const data = doc.data();
                data['id'] = doc.id;

                return data;
             })

            //  console.log(products);
          
             this.setState({
               products:products,
               loading:false
             })
          

       });
             
             
  }
  handleIncreaseQuantity = (product) => {
    // console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
     
    // })

    // console.log( new CollectionReference(db,'products'));
       
    const docRef = doc(db,"products",product["id"]);
    updateDoc(docRef,{
      qty:products[index].qty += 1
    });




  }
  handleDecreaseQuantity = (product) => {
    // console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);


    const docRef = doc(db,"products",product["id"]);
     
    if (products[index].qty === 0) {
      return;
    }
    updateDoc(docRef,{
 
      qty:products[index].qty -= 1
    });

    // if (products[index].qty === 0) {
    //   return;
    // }

    // products[index].qty -= 1;

    // this.setState({
    //   products
    // })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [{}]

    // this.setState({
    //   products: items
    // })

    const docRef = doc(db,"products",id);
    deleteDoc(docRef);

  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
  addProduct = () =>{
         
          // collection(db,'products')
          // .add({
          //   img:'',
          //   price:999,
          //   qty:3,
          //   title:"shoes"
          // })

          //  const docRef = doc(db,"products","product11");
           const payload = {
             title:"latptop",
             price:25000,
             qty:1,
             img:"https://www.cnet.com/a/img/resize/4e82f3a17554a5aff8089194237de5a3acfce3b4/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200"
           }
          // setDoc(docRef,payload);

          addDoc(collection(db,'products'),payload);

  }
  render () {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style= {{padding:10, fontSize:20, margin:20}}>Add a product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
