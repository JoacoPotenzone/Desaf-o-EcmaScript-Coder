class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1;
    }
  
    getProducts() {
      return this.products;
    }
  
    generateProductId() {
        if (this.nextProductId <= 100) {
          return this.nextProductId++;
        } else {
          throw new Error("Se alcanzó el límite máximo de IDs (100).");
        }
      }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        throw new Error("El código de producto ya está en uso.");
      }
  
      const product = {
        id: this.generateProductId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
    }
  
    getProductById(productId) {
      const product = this.products.find(product => product.id === productId);
      if (!product) {
        throw new Error("Producto no encontrado.");
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  

  console.log(productManager.getProducts());
  
  productManager.addProduct("Producto prueba", "Este es un producto de prueba", 200, "Sin imagen", "abc123", 25);
  productManager.addProduct("Producto prueba 2", "Este es el 2do producto de prueba", 300, "Sin imagen", "abc124", 256);
  
  console.log(productManager.getProducts());
  
  try {
    productManager.addProduct("Producto duplicado", "Este producto tiene un código duplicado", 150, "Sin imagen", "abc123", 10);
  } catch (error) {
    console.error(error.message);
  }

  const product = productManager.getProductById(productManager.getProducts()[0].id);
  console.log(product);
  

  try {
    productManager.getProductById("producto_inexistente");
  } catch (error) {
    console.error(error.message);
  }