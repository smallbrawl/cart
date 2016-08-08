var JS_shoppingCart = (function () {
    var cart = [];
    
    function Item(name, price, count){        
        this.name= name
        this.price = price
        this.count= count
    } 
    
    function saveCart () {
       localStorage.setItem ("shoppingCart", JSON.stringify(this.cart));
    };

    function loadCart (){
        this.cart = JSON.parse (localStorage.getItem ("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    };
     
    loadCart();
    
    var obj = {};
     
    obj.addItemtoCart = function(name, price, count){
        for (var i in this.cart) {
            if (cart[i].name === name){
                cart[i].count +=count ;
                saveCart();
                return;
            }
            
        console.log("addItemToCart:", name, price, count);
            
        var item = new Item(name, price, count);
        cart.push(item);        
        saveCart();

        }
    };
  
    obj.removeItemfromCart= function(name){
        for (var i in cart){
            if (cart[i].name === name){
                cart[i].count --;
                if(cart[i].count === 0){
                    cart.splice(i,1);
                }
                break;
            }

        }
        saveCart();
    };
    
    obj.removeAllItemfromCart = function(name){
        for (var i in this.cart){
            if (cart[i].name === name){
             cart.splice(i, 1);
            break;
            }
        }
        saveCart();
    }
    
    obj.clearCart = function(){
        cart = [];
        saveCart();
    };
    
    obj.totalCount = function(){
        var totalCount =0;
        for(var i in cart){
           totalCount += cart[i].count;

        }
        return totalCount;
    };
    
    obj.totalCost = function(){

        var totalCost =0;
        for(var i in cart){
            totalCost += (cart[i].price * cart[i].count);

        }
        return totalCost.toFixed(2);
    };
    
    obj.listCart = function() {
        
        var cartCopy = [];        
        
        for (var i in cart){
            var item = cart[i];
            var ItemCopy = {};
            for (var p in item){
                ItemCopy[p] = item[p];
            }
            ItemCopy.total =(item.price * item.count).toFixed(2);
            cartCopy.push(ItemCopy);
        }
        return cartCopy; 
        
    };
    return obj;
    
    JS_shoppingCart.addItemtoCart("Food",1.22,1);
    JS_shoppingCart.addItemtoCart("gra",1.22,2);
    console.log(JS_shoppingCart);
    
})();

var carts = [];
carts.push(5);
console.log(carts);