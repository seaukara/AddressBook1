
var addresses = [     
    {id: 0, name: 'Kara Manseau', address: '1511 E Mercer St, Seattle, WA', phone: '(503)-453-4444', info: 'home'},
    {id: 1, name: 'Mary Manseau', address: '5230 NW 137th Ave, Portland, OR', phone: '(503)-645-1800', info: 'mom'},
    {id: 2, name: 'Dan Manseau', address: '5230 NW 137th Ave, Portland, OR', phone: '(503)-645-1800', info: 'dad'},
    {id: 3, name: 'Grace Hellyer', address: '1511 E Mercer St, Seattle, WA', phone: '(503)-453-4444', info: 'roommate'},
    {id: 4, name: 'Jane Doe', address: '543 Onion Road, Seattle, w', phone: '(503)-453-4444', info: 'home'},
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
