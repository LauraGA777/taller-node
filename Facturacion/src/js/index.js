const ventas = [
    {
        id: 1,
        numeroFactura: 'FAC001',
        numeroUnidades: 10,
        nombreCliente: 'Juana de Arco',
        valorTotal: 500
    },
    {
        id: 2,
        numeroFactura: 'FAC002',
        numeroUnidades: 5,
        nombreCliente: 'Policarpa Salavarrieta',
        valorTotal: 250
    },
    {
        id: 3,
        numeroFactura: 'FAC003',
        numeroUnidades: 20,
        nombreCliente: 'Tutankamon',
        valorTotal: 1000
    },
    {
        id: 4,
        numeroFactura: 'FAC004',
        numeroUnidades: 7,
        nombreCliente: 'Sócrates',
        valorTotal: 350
    },
    {
        id: 5,
        numeroFactura: 'FAC005',
        numeroUnidades: 12,
        nombreCliente: 'Simón Bolivar',
        valorTotal: 600
    }
];
const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/',(req,res)=>{
    res.end('Hola Mundo');
})

/* Punto 2 */
app.get('/numeroUnidades', (req,res)=>{
    const sumaNumeroUnidades = ventas.reduce((total,venta)=> total+venta.numeroUnidades, 0); //Suma total de número de unidades facturadas
    res.json({sumaNumeroUnidades})
})
/* Punto 3 */
app.get('/valorTotal', (req,res)=>{
    const sumaValorTotal = ventas.reduce((total,venta)=> total+venta.valorTotal, 0); //Suma de valor total facturado
    res.json({sumaValorTotal})
})
/* Punto 4 */
app.get('/venta/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const factura = ventas.find(v => v.id === id);
    if (factura) {
        res.json(factura);
    }else{
        res.status(404).json({error:'Factura no encontrada'});
    }
});
/* Punto 5 */
app.get('/resumenFactura/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(ventas.find((v) => v.id === id));
})
/* Punto 6 */
app.post('/venta',(req,res)=>{
    const venta = req.body;
    ventas.push(venta);
    res.json(ventas)
})
/* Punto 7*/
app.put('/factura/:porc',(req,res)=>{
    const porc = parseInt(req.params.porc);
    ventas.forEach(
        (v)=>{v.valorTotal = v.valorTotal - (v.valorTotal * porc) / 100}
    );
    res.json(ventas)
})

app.listen(port, ()=> {
    console.log(`server running in port http://localhost:${port}`)
})