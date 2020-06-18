const {Router} = require('express');
const router = Router();
const {unlink} = require('fs-extra');
const path = require('path');

const Producto = require('../models/productos');

router.get('/', async (req, res) => {
   const productos = await Producto.find();
   res.json(productos);
});

router.post('/', async (req, res) => {
    const {name, empresa, cantidad,code} = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newProduct = new Producto({name, empresa, cantidad, imagePath, code});
    await newProduct.save();
    res.json({message: 'Producto Guardado'});
 });

 router.delete('/:id', async (req, res) => {
    const producto = await Producto.findByIdAndDelete(req.params.id);
   unlink(path.resolve('./backend/public' + producto.imagePath))
    res.json({message: 'Producto Eliminado'});
 });
module.exports = router;