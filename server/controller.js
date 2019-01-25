module.exports = {
  getProducts: (req,res,next)=>{
    const dbInstance = req.app.get("db");

    dbInstance.get_inventory().then(products =>
      res.status(200).send(products).catch(err=> console.log(err))
    )
  },

  addProduct: (req,res,next)=>{
    const dbInstance = req.app.get("db");
    const {name,price,image_url} = req.body;
    dbInstance.create_product([name,price,image_url]).then((product)=>{
      res.status(200).send(product)
    })
    
    
    //dbInstance.create_product([name,price,image_url]).then()
  }
}