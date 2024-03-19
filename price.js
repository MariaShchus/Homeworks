var services = {
    стрижка: "60 грн",
    гоління: "80 грн",
    миття_голови: "100 грн",

    price:function(){
        let sum = 0;
        for(let key in services){
            let currentPrice = parseInt(services[key]);            
            if(!isNaN(currentPrice)){
                sum += currentPrice;                
            }
        }        
        console.log(`sum is: '${sum}'`);        
        return sum;
    },

    minPrice:function(){        
        let minPrice = 999;    
        for(let key in services){
            let currentPrice = parseInt(services[key]);          
            if(minPrice > currentPrice){
                minPrice = currentPrice;              
            }
        }        
        console.log(`minPrice is: '${minPrice}'`);
        return minPrice;
    },

    maxPrice:function(){        
        let maxPrice = 1;    
        for(let key in services){
            let currentPrice = parseInt(services[key]);          
            if(maxPrice < currentPrice){
                maxPrice = currentPrice;              
            }
        }        
        console.log(`maxPrice is: '${maxPrice}'`);
        return maxPrice;
    }
}
services.price();
services.minPrice();
services.maxPrice();
services['Розбити скло'] = "200 грн";
services.price();
services.minPrice();
services.maxPrice();