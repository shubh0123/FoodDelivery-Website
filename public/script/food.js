import {foodItem} from './foodItem.js';
console.log(foodItem);
var cartDetail=new Object()
var cartName=new Array()
function displayItems(){
    var biryani= document.getElementById('biryani');
    var chicken = document.getElementById('chicken');
    var paneer= document.getElementById('paneer');
    var vegetable= document.getElementById('vegetable');
    var chinese = document.getElementById('chinese');
    var southIndian= document.getElementById('south-indian');

    const biryaniData= foodItem.filter(item=> item.category=='biryani');
    console.log(biryaniData);
    const chickenData= foodItem.filter(item=> item.category=='chicken');
    console.log(chickenData);
    const paneerData= foodItem.filter(item=> item.category=='paneer');
    console.log(paneerData);
    const vegetableData= foodItem.filter(item=> item.category=='vegetable');
    console.log(vegetableData);
    const chineseData= foodItem.filter(item=> item.category=='chinese');
    console.log(chineseData);
    const southIndianData= foodItem.filter(item=> item.category=='south-indian');
    console.log(southIndianData);

    biryaniData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa-sharp fa-solid fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart');
        heart.setAttribute('id',item.id);
        heart.innerText= ' ';

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price: ₹ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
    })

    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa-sharp fa-solid fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart');
        heart.setAttribute('id',item.id);
        heart.innerText= ' ';

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price: ₹ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);
    })

    paneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa-sharp fa-solid fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart');
        heart.setAttribute('id',item.id);
        heart.innerText= ' ';

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price: ₹ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard);
    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa-sharp fa-solid fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart');
        heart.setAttribute('id',item.id);
        heart.innerText= ' ';

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price: ₹ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa-sharp fa-solid fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart');
        heart.setAttribute('id',item.id);
        heart.innerText= ' ';

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price: ₹ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
    })

    southIndianData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa-sharp fa-solid fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' '+ item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart');
        heart.setAttribute('id',item.id);
        heart.innerText= ' ';

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img= document.createElement('img');
        img.src= item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price: ₹ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);
    })
}
displayItems();

const categoryListData= [...new Map(foodItem.map(item=>[item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList= document.getElementById('category-list');

    categoryListData.map(item=> {
        var listCard=document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg=document.createElement('img');
        listImg.src=item.img;

        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText=item.category;
        listName.setAttribute('href','#'+item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);
        
        var cloneListCard=listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })
}

categoryLists();

document.querySelectorAll('.fa-heart').forEach(item=> {
    item.addEventListener('click',faheart);
})

var cartData= [];

function faheart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= foodItem.find(element=>element.name==itemToAdd);

    console.log(itemObj);

    var index= cartData.indexOf(itemObj);
    if(index== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
        console.log(cartData);
    }
    else if(index>-1){
        alert("Added To Cart");
    }

    document.getElementById('cart-plus').innerText=' '+cartData.length+ ' Items';
    //document.getElementById('m-cart-plus').innerText=' '+cartData.length+ ' Items';
    totalAmount();
    cartItems();
    
}
let j=0;

function cartItems(){
    var tableBody= document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');

        var rowData1=document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);

        var rowData2=document.createElement('td');
        rowData2.innerText= item.name;
        var flag=0;
        if(j==0)
        {
            cartName[j]=item.name;
            j++;
        }
        for(var i=0;i<cartName.length;i++)
        {
            if(cartName[i]===item.name)
            {
                flag=1;
                break;
            }
          
        }
        if (flag==0)
        {
            cartName[j]=item.name
            j++;
        }
        
   
        var rowData3=document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerHTML= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4= document.createElement('td');
        rowData4.innerText= item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
        console.log(rowData2)

    })
    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click',incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click',decrementItem);
    })
}

var currPrice=0;

function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc);

    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;

    currPrice= (incObj.price*incObj.quantity-incObj.price*(incObj.quantity-1))/(incObj.quantity-1);

    incObj.price= currPrice*incObj.quantity;
    totalAmount();
    cartItems();
}

var flag= false;

function decrementItem(){
    let itemToDec= this.parentNode.previousSibling.innerText;
    console.log(itemToDec);
    let decObj= cartData.find(element=>element.name==itemToDec);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity>1){
        currPrice= (decObj.price*decObj.quantity-decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-=1;
        decObj.price=currPrice*decObj.quantity;
    }
    else{
        for(var i=0;i<cartName.length;i++)
        {
            if(cartName[i]==itemToDec)
            {
                cartName.splice(i,1)
            }
        }
        document.getElementById(decObj.id).classList.remove('toggle-heart');
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerHTML= ' '+cartData.length+ ' Items';
        //document.getElementById('m-cart-plus'),innerHTML= ' '+cartData.length;

        if(cartData.length<1 && flag){
           document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            //document.getElementById('food-items').classList.toggle('food-tems');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
           // document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            
            flag= false;
            alert("Currently no item in cart");
        }
    }

    totalAmount();
    cartItems();
}
var sum1;
function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+=item.price;
    })
    sum1=sum;
    document.getElementById('total-item').innerText= 'Total Item: '+cartData.length;
    document.getElementById('total-price').innerText= 'Total Price: ₹ '+sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);
//document.getElementById('m-cart-plus').addEventListener('click',cartToggle);

function cartToggle(){
    if(cartData.length>0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        //document.getElementById('food-items').classList.toggle('food-tems');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
       // document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
    }
    else{
        alert("Currently no items in cart");
    }
}

document.getElementById('add-address').addEventListener('click',addAddress);
//document.getElementById('m-add-address').addEventListener('click',addAddress);

var address;
var str=" ";
function addAddress(){
     address= prompt('Enter your address');
    if(address){
    document.getElementById('add-address').innerText= ' '+address;
    cartDetail.address=address;
    //document.getElementById('m-add-address').innerText= ' '+address;        
}
else{
    document.getElementById('add-address').innerText= ' Your Address';
    alert("Address not added");
}
}

document.getElementById('btn').addEventListener('click',checkout);

var s;

function checkout(){
    if(s==true)
    {
    alert("Alredy Selected")
    }
    if(address!=undefined)
    document.getElementById('btn').disabled=true;
    s=true;
    if(cartDetail.address==undefined)
    {
        alert("Fill the address details")
    }
else{
    cartDetail["Total Item"]=cartData.length;
    cartDetail["Total Price"]=sum1;
    cartDetail["Item Name",cartName]
    console.log(cartDetail);
    console.log(cartName);
    for(var i=0;i<cartName.length;i++)
    {
        str=str+cartName[i];
        if(str!=cartName.length)
        {
            str=str+","
        }

    }
alert("Confirm Your Order");
    GFG_Fun();

   console.log( document.getElementById("total-item").innerHTML);
   console.log( document.getElementById("total-price").innerHTML);
}
}
var down = document.getElementById("form");
           
// Create a break line element

function GFG_Fun(){
    var head1 = document.createElement("h1");
    head1.setAttribute("id","hd")
    head1.innerHTML="Your Order"
    head1.style.color="red"

// Create a form dynamically
var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "/order");

var cn = document.createElement("label");
cn.setAttribute("id","hd")
cn.innerHTML="<br>Customer Name <br>"
cn.style.color="white"


var title= document.createElement("input");
// Create an input element for Full Name
var FN = document.createElement("input");
FN.setAttribute("type", "text");
FN.setAttribute("name", "Customer Details");
FN.setAttribute("placeholder", "Customer Name");
FN.setAttribute("required", true);


 // Create an input element for date of birth

 var ea = document.createElement("label");
 ea.setAttribute("id","hd")
 ea.innerHTML="<br>Email Address <br>"
 ea.style.color="white"

 // Create an input element for emailID
 var EID = document.createElement("input");
 EID.setAttribute("type", "text");
 EID.setAttribute("name", "emailID");
 EID.setAttribute("placeholder", "E-Mail ID");
 EID.setAttribute("required", true);

 var ad = document.createElement("label");
 ad.setAttribute("id","hd")
 ad.innerHTML="<br>Address <br>"
 ad.style.color="white"


 var add = document.createElement("input");
add.setAttribute("type", "text");
 add.setAttribute("name", "Address");
 add.setAttribute("id", "Address");
 add.setAttribute("value", address);
 add.setAttribute("readonly", true);

 var qu = document.createElement("label");
 qu.setAttribute("id","hd")
 qu.innerHTML="<br>Quantity Name<br>"
 qu.style.color="white"

var quantname  = document.createElement("input");
quantname.setAttribute("type", "text");
quantname.setAttribute("name", "Quantity Name");
quantname.setAttribute("id", "Quantity Name");
quantname.setAttribute("value", str);
console.log(str)
 quantname.setAttribute("readonly", true);

 var qn = document.createElement("label");
 qn.setAttribute("id","qn")
 qn.innerHTML="<br>Quantity <br>"
 qn.style.color="white"

 var quant  = document.createElement("input");
quant.setAttribute("type", "number");
quant.setAttribute("name", "Quantity");
quant.setAttribute("id", "Quantity");

quant.setAttribute("value", cartData.length);
 quant.setAttribute("readonly", true);

 var ttl = document.createElement("label");
 ttl.setAttribute("id","ttl")
 ttl.innerHTML="<br>Total Price <br>"
 ttl.style.color="white"

 var tp  = document.createElement("input");
 tp.setAttribute("type", "number");
tp.setAttribute("name", "Total Price");
tp.setAttribute("id", "tp");

 
tp.setAttribute("value", sum1);
  tp.setAttribute("readonly", true);
var b=document.createElement("br")
var b1=document.createElement("br")





 



             // create a submit button
            var s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Confirm"); 
            s.style.backgroundColor="red";

            // Append the full name input to the form
            form.appendChild(cn);
            form.appendChild(FN);
           form.appendChild(ea);
            form.appendChild(EID);
            form.appendChild(ad);
            form.appendChild(add);
           form.appendChild(qu);
            form.appendChild(quantname);
            form.appendChild(qn);
            form.appendChild(quant);
            form.appendChild(ttl);
            form.appendChild(tp);
            form.appendChild(b);
            form.appendChild(b1);
            form.appendChild(s);
            down.appendChild(head1)
            down.appendChild(form)
        }



















