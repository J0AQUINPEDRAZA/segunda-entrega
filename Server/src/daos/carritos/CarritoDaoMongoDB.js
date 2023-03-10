import ContenedorMongoDB from "../../contenedores/ContenedorMongoDB.js";
import { cartModel } from "../../models/cartModel.js";

class CarritoDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super({
            name: cartModel.CartCollection,
            schema: cartModel.CarritoSchema,
          })
    }

    

    // postById = async (idCart, idProd, timestamp) => {
    // try {
    //     const readDataCart = await fs.readFile(this.ruta);
    //     const readDataProd = await fs.readFile("src/DB/productos.json");
        
    //     const newDataCart = JSON.parse(readDataCart);
    //     const newDataProd = JSON.parse(readDataProd);
        

    //     const cart = newDataCart.find((cart) => cart.carrito_id == idCart);

    //     let isInCart = cart.productos.some(prod=>prod.id == idProd)
        
    //     const prod = newDataProd.find((prod) => prod.id == idProd);

    //     console.log(isInCart)
    //     if (isInCart == false) {
    //     prod.timestamp = timestamp
    //     cart.productos.push(prod);
    //     let carritosString = JSON.stringify(newDataCart);
    
    //     await fs.writeFile(this.ruta, carritosString);
    //     console.log("agregado al carrito")
    //     }

    //     console.log(idCart, idProd);

        
    // } catch (e) {
    //     console.log(e);
    // }
    // };


    // deleteCart = async (id) => {
    // ///////////
    // try {
    //     const readData = await fs.readFile(this.ruta);
    //     const newData = await JSON.parse(readData);

    //     const indexProd = await newData.findIndex(
    //     (obj) => obj.carrito_id == id
    //     );
    //     if (indexProd >= 0) {
    //     await newData.splice(indexProd, 1);
    //     }
    //     const dataJSON = JSON.stringify(newData);
    //     console.log(id);
    //     console.log(newData);

    //     await fs.writeFile(this.ruta, dataJSON);

    //     console.log("Producto eliminado");
    // } catch (e) {
    //     console.log(e);
    // }
    // };

    // deleteProduct = async (cartId, prodId) => {
    // ///////////////////
    // try {
    //     const readDataCart = await fs.readFile(this.ruta);
    //     const newDataCart = JSON.parse(readDataCart);

    //     const cart = newDataCart.find((cart) => cart.carrito_id == cartId);

    //     const indexCart = await newDataCart.findIndex(
    //     (cart) => cart.carrito_id == cartId
    //     );

    //     if (!cart) {
    //     console.log("El carrito no existe");
    //     } else {
    //     const indexProd = await cart.productos.findIndex(
    //         (obj) => obj.id == prodId
    //     );
    //     if (indexProd >= 0) {
    //         await newDataCart[indexCart].productos.splice(indexProd, 1);
    //     }

    //     const newCart = JSON.stringify(newDataCart);

    //     await fs.writeFile(this.ruta, newCart);

    //     console.log("Producto eliminado");
    //     return newDataCart;
    //     }
    // } catch (e) {
    //     console.log(e);
    // }
    // };

}

export default CarritoDaoMongoDB;