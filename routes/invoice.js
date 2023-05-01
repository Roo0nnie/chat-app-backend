var express = require("express");
var router = express.Router();


let invoiceList = [{id:1, invoiceTo:"Juan Dela Cruz", date:"2023-04-15", address1: "810 Oroquieta Street Sta Cruz 1000", address2:"Manila, Metro Manila, Philippines", invoiceNumber:"6845",paymentMode:"COD"}];

let invoice = {id: 1, invoiceTo:"Juan Dela Cruz", date:"2023-04-15", address1: "810 Oroquieta Street Sta Cruz 1000", address2:"Manila, Metro Manila, Philippines", invoiceNumber:"6845",paymentMode:"COD"};

let invoiceItems = [{description: "Mouse", Qty: 3, unitPrice: 200}, 
                {description: "Keyboard", Qty: 3, unitPrice: 400},
                {description: "Monitor", Qty: 6, unitPrice: 5400},
                {description: "CPU Tower Case", Qty: 3, unitPrice: 1200},
                {description: "Headset", Qty: 3, unitPrice: 500},
                {description: "UPS", Qty: 1, unitPrice: 4000},];

router.get("/", (req, res, next) => {
    res.send(invoiceList);
});


router.get("/:id", (req, res, next) => {
    res.send({record:invoice, lines:invoiceItems});
});


module.exports = router;
