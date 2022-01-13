class Product {
    static build(name, price) { // build 정적 메소드
      const id = Math.floor(Math.random() * 1000);
      return new Product(id, name, price); // 난수를 id로 하는 상품 인스턴스 반환
    }
  
    static getTaxPrice(product) {
      return (product.price * 0.1) + product.price;
    }
  
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class DeposableProduct extends Product { // 폐기가 가능한 상품 클래스 정의, 상품 클래스 상속
    depose() {
      this.deposed = true;
    }
  }
  
  const gum = Product.build('껌', 1000);
  console.log(gum);
  
  const clothes = new DeposableProduct(1, '옷', 2000);
  const taxPrice = DeposableProduct.getTaxPrice(clothes);
  console.log(taxPrice);
  

  class ProductWithCode {
    static get CODE_PREFIX() {
      return "PRODUCT-"
    }
  
    constructor(id) {
      this.id
      this.code = ProductWithCode.CODE_PREFIX + id;
    }
  }
  
  const product1 = new ProductWithCode('001');
  console.log(ProductWithCode.CODE_PREFIX);
  console.log(product1.code);
  