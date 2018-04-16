
var addresses = [     
    {id: 0, name: 'Kara M', address: '1511 E Mercer St, Seattle, WA', phone: '(503)-567-4444', info: 'home'},
    {id: 1, name: 'Mary Man', address: '555 Apple Ave, Portland, OR', phone: '(503)-555-1800', info: 'mom'},
    {id: 2, name: 'Dan S', address: '34 NW 10th Ave, Portland, OR', phone: '(503)-645-1800', info: 'dad'},
    {id: 3, name: 'GY Hellyer', address: '456 E Gallop St, San Francisco, CA', phone: '(503)-123-4444', info: 'roommate'},
    {id: 4, name: 'Jane Doe', address: '543 Onion Road, Seattle, w', phone: '(503)-555-4444', info: 'home'},
];


var addressLength = addresses.length;

exports.getAddresses = function(){
	return addresses;
};


exports.getAddress = function(name){
    console.log("getAddress")
	return addresses.find(function(address){
		return address.name === name;
	});
};


exports.addAddress = function(newAddress){
	 var addressMatch = false;
	 addresses.forEach(function(x,y){
        if (x.name == newAddress.name) {
            addresses[y] = newAddress;
            addressMatch = true;
        }
    });
    if (!addressMatch) {
        newAddress.id = addressLength;
        addresses.push(newAddress);
    }
};


exports.removeAddress = function(name){

	console.log('Removing ' + name);

	addresses.forEach(function(x,y){
		if (x.name == name){
			addresses.splice(y, 1);
		}
	});

}
