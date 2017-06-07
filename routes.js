module.exports = function(app){
 
    var Address = require('./models/addressDB');
    var pageTitle = 'Address Book';
    
   ///////  G E T S  /////////////////////////////////////////////////
    
    //Homepage
    app.get('/', function(req, res){
        console.log("here")
        Address.find(function(err, addresses){
            if (err) console.error(err);
            if (!addresses) return next();
            res.type('text/html');
            console.log(addresses)
            res.render('home', {addresses: addresses});
        });
    });
    
    //About
    app.get('/about', function (req, res){
        res.type('text/html');
        pageTitle = "Kara Manseau's App for ITC230";
        res.render('about', {pageTitle});
    });
    
    app.get('/add', function(req, res){
        pageTitle = "Add New Contact";
        res.render('add', {pageTitle} );    
    });
    
    //GET
    app.get('/detail/:name', function(req, res){
        var name = req.params.name;

        var contactName = req.params.name;
        Address.findOne({"name": name}, function (err, address){
            if (err) return next(err);
            matchAddress = true;
            if (!address) {

                address = {'name' : name};
            }
            console.log(address)
            pageTitle = "Contact Info: " + contactName;
            res.type('text/html');
            res.render('detail', {matchAddress, address, pageTitle});
        });
    });


    //POST 

    app.post('/search', function(req, res) {
        console.log("FUCK")
       var name = req.params.name;
       Address.findOne({'name' : name}, function (err, matchAddress){
           if(err) return next(err);
           if(!matchAddress){
               matchAddress = {'name':name};
           }
           res.type('text/html');
           res.render('detail', {name: matchAddress});
       });
    });

    app.post('/detail/:title', function(req,res){

        var foundAddress = Address.findOne(req.body.name);

        if (!foundAddress){
            foundAddress = {name: req.body.name};
        }
        res.type('text/html');
        res.render('detail', {address: foundAddress});
});


    app.post('/add', function(req,res){
        console.log("add")
        res.type('text/html');
        var newAddress = {"name":req.body.name.toLowerCase(), "address":req.body.address, "phone":req.body.phone, "info":req.body.info};
        var addressID = (req.body.id) ? req.body.id : "";
        console.log(addressID)
        Address.update({"id":addressID}, newAddress, function(err, x){
            console.log(x)
            var action = (x) ? "updated": "added";
            res.render('detail', {address: newAddress,pageTitle, result:{action:action}});
        });

        Address.find(function (err, address){
        console.log(address)
        if (err) return next(err);

       
    });
});


    app.post('/remove', function(req,res){

        console.log(req.body.id);
        Address.remove({"_id":req.body.id}, function(err){
            //log the error
            console.log(err);
            var action = (err) ? err: "deleted";
            res.type('text/html'); 
            res.render('detail', {result: action});
        });
    });
    
    
 
 //API
 
 
app.get('/api/addresses', function(req, res){
    console.log("happening")
    Address.find(function (err, address){
        console.log(address)
        if (err) return next(err);
        if(address) {
           res.json(address);

       }else{
           res.status(404).send('404 - Page Not Found');
       }
    });
    
});

app.get('/api/address/:addressName', function(req,res){
    console.log("gah")
    Address.findOne({"name":req.params.name}, function(err,addressMatch){
        if(addressMatch) {
            res.json(addressMatch);
        }else{
            res.status(404).send("404 - Page not Found");
        }
     });
    
});

 
app.post('/api/add', function(req,res){
        console.log("add")
        res.type('text/html');
        var newAddress = {"name":req.body.name.toLowerCase(), "address":req.body.address, "phone":req.body.phone, "info":req.body.info};
        var addressID = (req.body.id) ? req.body.id : "";
        console.log(addressID)
        Address.update({"id":addressID}, newAddress, function(err, x){
            console.log(x)
            var action = (x) ? "updated": "added";
            //res.render('detail', {address: newAddress,pageTitle, result:{action:action}});
        });

        Address.find(function (err, address){
        console.log(address)
        if (err) return next(err);

       
    });
});


    // 404 Catch-All Handler
    app.use(function(req, res, next){
    res.status(404);
    res.render('404');
});


    //500 Error Handler
    app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
 
 
    
}



//OLD ROUTES
    // app.get('/', function (req, res){
    //     pageTitle = "Address Book";
    //     res.render('home', {
    //         book:books.getLibrary(),
    //         pageTitle}); 
    // });
    