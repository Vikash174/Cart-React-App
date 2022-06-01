import React from "react";

const Navbar = (props) => {





    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://as2.ftcdn.net/v2/jpg/00/97/00/05/1000_F_97000552_d8RwiZAnFewznisQphPtjyxxRNAAZQ92.jpg" alt="cart-image" />
                <span style={styles.cartCount}>4</span>
            </div>

        </div>
    );

}

const styles = {
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -1
    },
    cartIconContainer: {
        position: 'relative'
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIcon: {
        height: 32,
        marginRight: 20
    }

}

export default Navbar;