const express = require('express');
const router = express.Router();


// src\routes\menu.js
router.get('/menu/:table_id', (req, res)=>{
    res.render('menu', data={
        table_id: req.params.table_id
    });
})



// export the router
module.exports = router