const{ Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_51IVOLEGFpy3oHPiequbMUJnxAcTMj9E6FHJLZnQDyyfRYRLTMGpbmmjTf3gEZlEvyFgeXWdXYfLn3PPz2tIRxYih00sX7QiFIe');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/checkout', async(req, res) => {
    console.log(req.body);
   
   const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });
    const charge = await stripe.charges.create({
        amount: '18000000',
        currency: 'cop',
        customer: customer.id,
        description: 'Onu GPON'
    });
    console.log(charge.id);
    res.render('message');
});

module.exports = router;