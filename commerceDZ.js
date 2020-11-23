var ig='';
//adding the after bar to show how mush you ve scrolled 

    //check if there is a style element if yes delete it if not try to create it
$(window).ready(function(){
 //   dinamic options in the select box
 
$.ajax({
  url: "cDZ.json",
  data: "data",
  dataType: "json",
  success: function (data) {
    console.log()
    var options = `<option value=""></option>`;
    var options1 = `<option value=""></option>`
    for(let x=0; x<Object.keys(data).length; x++){
        options += `<option value="${Object.keys(data)[x]}">${Object.keys(data)[x]}</option>`;
        for(let v=0; v< Object.keys(data[Object.keys(data)[x]]).length; v++){
          options1  += `<option value="${Object.keys(data)[x]}">${Object.keys(data[Object.keys(data)[x]])[v]}</option>`
        }
    }  
    $('#selectOne').html(options);
    $('#selectTwo').html(options1);
  }
});





  // when refresh the page the line must be in his place

   if(document.querySelector('style')){document.querySelector('style').remove()}
      var x = $(window).scrollTop();
      var y = $(window).outerWidth()
      var k = $(window).innerWidth();
      var z = $("<style> .scroll::after {width: " +(x/y)*(k/61.9) +'%' + "; z-index:999 }</style>");
      var c = $("<style> .scroll::after {width:100%}</style>");
       $('body').append(z);

       //on scrolling 
   $(window).on('scroll', function(){
      if(document.querySelector('style')){document.querySelector('style').remove()}
      var f = $(window).scrollTop();
      var x= $('body').css('height');
      var y = $(window).outerWidth()
      var k = $('body').width();
      x =parseInt(x);
      var val =(((f/x)/17.132632563860973)*100)/5.515011547344111 ;
    
      var z = $("<style> .scroll::after {width: " + val*100 +'%' + "; z-index:999 }</style>");
      var c = $("<style> .scroll::after {width:100%}</style>");
       $('body').append(z);
  
  })

  



//check select one and two
var selectOne = document.getElementById('selectOne');
var selectTwo = document.getElementById('selectTwo');

//get the values and texts of the options existed and put them in a array
var arr=[];
var arr2=[];

var  p =0;
  $('#selectOne').on('click',function(){
  
   if(p==0){
    for(let s=0; s< selectTwo.options.length; s++){
      var exist = selectTwo.options[s].text
      arr.push(exist)
      
    }
    for(let s=0; s< selectTwo.options.length; s++){
      var exist2 = selectTwo.options[s].value
      arr2.push(exist2)
      
    }
    p++;
   }
  
  })

//onchange the selectOne
$(document).on('change','#selectOne', function(){
  
  if(this.options[this.selectedIndex].text == ''){
    $('nav ul li').eq(0).click();
    
   
  }else{
    var selectedvalue = this.options[this.selectedIndex].getAttribute('value');
    var  selectedtext =this.options[this.options.selectedIndex].text.replace(' ','');
    //var array2 = Object.keys(res)[0];           //.Men for example
    //var array3 = Object.keys(res[array2]) //
    //var array4 = Object.keys(res[array2])[0] //.Chemise for example
    //var array5 =res[array2][array3[0]];
    //add the paragraph of the user interest whe he search
    var cont=`<div><h3 class="norslt">Results of ${this.options[this.options.selectedIndex].text} : </h3></div>`;
    $.ajax({
      url: "cDZ.json",
      data: "data",
      dataType: "json",
      success: function (data) {
        
       //console.log(data[selectedvalue][Object.keys(data[selectedvalue])[0]]['name'].length);
       //Object.keys(data[selectedvalue][Object.keys(data[selectedvalue])[0]]).length
       //data[selectedvalue][Object.keys(data[selectedvalue])[0]]['name'].length
      //Object.keys(data[selectedvalue])  array
      //Object.keys(data[selectedvalue])[0] .pants
      //data.Men.pants.name
      // all in oe
      //data[selectedvalue][Object.keys(data[selectedvalue])[2]]
      //Object.keys(data[selectedvalue]).length
  
        //loopthe the items to shoz them on the screen
  
      
        for (let i = 0; i < Object.keys(data[selectedvalue]).length; i++) {
         
         for (let d = 0; d < data[selectedvalue][Object.keys(data[selectedvalue])[i]]['name'].length; d++) {
  
          ig=''
          //loop through the imgs
          for(let h=0; h<data[selectedvalue][Object.keys(data[selectedvalue])[i]].img[d].length ;h++){
                
           ig += data[selectedvalue][Object.keys(data[selectedvalue])[i]].img[d][h] + ' '
      
        } 
        if(data[selectedvalue][Object.keys(data[selectedvalue])[i]].discount[d] !== 0){
          cont += `<div id="product">
          <div><p id="img" style="display:none">${ig}</p><img src="${data[selectedvalue][Object.keys(data[selectedvalue])[i]].src[d]}" alt="${data[selectedvalue][Object.keys(data[selectedvalue])[i]].nbr[d]}"></div>
          <div>
          <p>${data[selectedvalue][Object.keys(data[selectedvalue])[i]].name[d]}</p>
          <p>${data[selectedvalue][Object.keys(data[selectedvalue])[i]].description[d]}</p>
          <span class="price">${data[selectedvalue][Object.keys(data[selectedvalue])[i]].price[d]} DZD</span>
          <span class="through">${data[selectedvalue][Object.keys(data[selectedvalue])[i]].pricethrough[d]} DZD</span>
          </div><div id="discount">${data[selectedvalue][Object.keys(data[selectedvalue])[i]].discount[d]}%<span>Discount<span></div></div>`;
        }else{
          cont += `<div id="product">
          <div><p id="img" style="display:none">${ig}</p><img src="${data[selectedvalue][Object.keys(data[selectedvalue])[i]].src[d]}" alt="${data[selectedvalue][Object.keys(data[selectedvalue])[i]].nbr[d]}"></div>
          <div>
          <p>${data[selectedvalue][Object.keys(data[selectedvalue])[i]].name[d]}</p>
          <p>${data[selectedvalue][Object.keys(data[selectedvalue])[i]].description[d]}</p>
          <span class="price">${data[selectedvalue][Object.keys(data[selectedvalue])[i]].price[d]} DZD</span>
          <span class="through">${data[selectedvalue][Object.keys(data[selectedvalue])[i]].pricethrough[d]} DZD</span>
          <a href="#" class="add">add to cart</a>
          </div></div>`;
        }
          
           
         }
        // $('.sld').hide();
         $('#slider').hide();
           $('.cartpage').hide();
          $('#products').html(cont);
          $('#products').hide().fadeIn();
        }
        
      },
      
    });
  
       
      
      
  }
  
  var selectOneValue = this.value;
  var option = `<option value=""></option>`;

  //looping through to check if it contaisns

  for (var i = 0; i < arr.length; i++) {
     if(selectOneValue == arr2[i]){
        option +=`<option value="${arr2[i]}"> ${arr[i]} </option>`;
        
     }
     if(selectOneValue == ''){
       
       option +=`<option value="${arr2[i]}"> ${arr[i]} </option>`;
       
     }
     
 }
 
 document.getElementById('selectTwo').innerHTML = option;
 
  

})


//when changing the selected option from selectTwo ♥

selectTwo.onchange = function(){
  
 
  var selectedvalue = this.options[this.selectedIndex].getAttribute('value');
  var  selectedtext =this.options[this.options.selectedIndex].text;
  //looping through to check if it contaisns to change the value of option one by clicking on option
  
  for(let z=0; z<selectOne.options.length; z++){
    var  indx =selectOne.options[z].text;
    if(selectedvalue == selectOne.options[z].value && selectedvalue !==''){
     selectOne.value = selectedvalue 
    }
    if(selectedtext == ''){
      
        $('#selectOne').change()
      
    }
 
};
console.log(selectOne.options[selectOne.options.selectedIndex].text)
  //add the paragraph of the user interest whe he search
  var cont=`<div><h3 class="norslt">Results of ${selectedvalue} > ${selectedtext} : </h3></div>`;
  
$.ajax({
  url: "cDZ.json",
  data: "data",
  dataType: "json",
  success: function (res) {
   
    
    //loop through the selected item to shoz them on the screen

    for(let d=0; d<res[selectedvalue][selectedtext].name.length; d++){
      ig=''
        //loop through the imgs
        for(let h=0; h<res[selectedvalue][selectedtext].img[d].length ;h++){
              
         ig += res[selectedvalue][selectedtext].img[d][h] + ' '
    
      } 
      
      if(res[selectedvalue][selectedtext].discount[d] !== 0){
        cont += `<div id="product">
      <div><p id="img" style="display:none">${ig}</p><img src="${res[selectedvalue][selectedtext].src[d]}" alt="${res[selectedvalue][selectedtext].nbr[d]}"></div>
      <div>
      <p>${res[selectedvalue][selectedtext].name[d]}</p>
      <p>${res[selectedvalue][selectedtext].description[d]}</p>
      <span class="price">${res[selectedvalue][selectedtext].price[d]} DZD</span>
      <span class="through">${res[selectedvalue][selectedtext].pricethrough[d]} DZD</span><a href="#" class="add">add to cart</a>
      </div><div id="discount">${res[selectedvalue][selectedtext].discount[d]}%<span>Discount</span></div></div>`;
      }else{
        cont += `<div id="product">
      <div><p id="img" style="display:none">${ig}</p><img src="${res[selectedvalue][selectedtext].src[d]}" alt="${res[selectedvalue][selectedtext].nbr[d]}"></div>
      <div>
      <p>${res[selectedvalue][selectedtext].name[d]}</p>
      <p>${res[selectedvalue][selectedtext].description[d]}</p>
      <span class="price">${res[selectedvalue][selectedtext].price[d]} DZD</span>
      <span class="through">${res[selectedvalue][selectedtext].pricethrough[d]} DZD</span>
      <a href="#" class="add">add to cart</a>
      </div></div>`;
      }
      
    }
   // $('.sld').hide();
   $('#slider').hide();
    $('.cartpage').hide();
    $('#products').html(cont);
    $('#products').hide().fadeIn();
  }
});
 
 


}

})

/*
 //load all items on the page 
$(window).ready(function(){
  $.ajax({
    url: "cDZ.json",
    data: "data",
    dataType: "json",
    
    beforeSend: function(){
      var x = $(window).scrollTop();
      $("#products").append('<p class="Load">LOADING...</p>' );
      $(".Load").css('marginTop',x - 100)
    },
    timeout:5000,
    success: function (res) {
      $("#products p").remove()
      
      var array2 = Object.keys(res)[0];           //.Men for example
      var array3 = Object.keys(res[array2]) //
      var array4 = Object.keys(res[array2])[0] //.Chemise for example
      var array5 =res[array2][array3[0]];
  
  
      var cont='';
    
      //loop through  data 
        for(let d=0; d<Object.keys(res).length; d++){
          for (let z = 0; z < Object.keys(res[Object.keys(res)[d]]).length; z++) { 
            
              for(let s=0; s<res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].src.length; s++){
          cont += `<div id="product">
          <div><img src="${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].src[s]}" alt=""></div>
          <div>
          <p>${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].name[s]}</p>
          <p>${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].description[s]}</p>
          <span class="price">${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].price[s]} DZD</span>
          <span class="through">${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].pricethrough[s]} DZD</span>
          </div></div>`;
           
          }
        
         
        }
        
      }
      $('#products').html(cont);
      
      }
     
    }
  );
})
*/
/*when searching in the input field  and deal with tags*/


 function inptt(){
  //empty the #products 
 
     var value = document.getElementById("input").value;
  
  
   
  
  
  //access the srver and fetch data
  $.ajax({
    url: "cDZ.json",
    data: "data",
    dataType: "json",
    success: function (res) {
      
        //loop through  data to  get  tags when searching for a item
        //add the paragraph of the user interest whe he search
        var cont=`<div><h3 class="norslt">Results of ${value} : </h3></div>`;
       
  for(let d=0; d<Object.keys(res).length; d++){

    for (let z = 0; z < Object.keys(res[Object.keys(res)[d]]).length; z++) { 
     
        for(let s=0; s<res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].tags.length; s++){

//probleme here/****** whe you add more tags it repeats mant time so u have to add just one tag ad athat the prblm */

              //get value when each time the value change
          var changable = res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].tags[s].toLowerCase();
          ig=''
         
         
          if(changable.includes(value.toLowerCase())){
            for(let f=0; f<res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].img[s].length ;f++){
                 
              ig += res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].img[s][f]
         
           }
           if(res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].discount[s] !== 0){
            cont += `<div id="product">
            <div><p id="img" style="display:none">${ig}</p><img src="${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].src[s]}" alt="${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].nbr[s]}"></div>
            <div>
             <p>${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].name[s]}</p>
            <p>${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].description[s]}</p>
            <span class="price">${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].price[s]} DZD</span>
            <span class="through">${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].pricethrough[s]} DZD</span><a href="#" class="add">add to cart</a>
            </div><div id="discount">${(res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].discount[s])}%<span>Discount</span></div></div>`;
           }else{
            cont += `<div id="product">
            <div><p id="img" style="display:none">${ig}</p><img src="${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].src[s]}" alt="${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].nbr[s]}"></div>
            <div>
             <p>${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].name[s]}</p>
            <p>${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].description[s]}</p>
            <span class="price">${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].price[s]} DZD</span>
            <span class="through">${res[Object.keys(res)[d]][Object.keys(res[Object.keys(res)[d]])[z]].pricethrough[s]} DZD</span>
            <a href="#" class="add">add to cart</a>
            </div></div>`;
           }
               
               
                //Object.keys(res[Object.keys(res)[d]]) for exp pats you must add [d]
               // loop to append it to #products
          }
         

    }
  
   
  }
  
}
  
    $('#slider').hide();
    $('.cartpage').hide();
   $('#products').html(cont);
   $('#products').fadeIn();
   if($('#products').children().length == 1){
    var msg='';
     msg = `<h3 class="norslt"> no results for ${value}</h3>`;
     $('#products').html(msg)
  }else{
    msg=''
  }
    
    }

  });
}

//when submit o the form by entering ener key
$('form').on('submit',function(e){
 
  e.preventDefault();
  inptt();
   document.getElementById("input").value ='';
})



//when submit on the btn 
$('#btn').on('click',function(e){
  
  e.preventDefault();
  inptt();
  document.getElementById("input").value='';
})




//on click on img to show more abt the item product

var vr=0;
$(document).on('click', '#product img', function(){
  
  //emmpty the value each time we click
  $('#products').html('');
  //get the imgs
  var imgs =$(this).siblings('#img').text();
  //get length of them
   var splitlengh =imgs.split(' ').length;
  
   var holder ='';
      for(k=0; k<splitlengh  ; k++){
        if(k !== splitlengh - 1){ holder += '<div><img src="';
                                  holder += imgs.split(' ')[k] + '"></div>'}else{
          holder += '<div><img src="' + imgs.split(' ')[0] +'"></div>'
        }     
      }
      //get alt nbt of product item
      vr =$(this).attr('alt');
      //start 
    var msg ='';
    msg = '<div id="other">';
     msg += '<div><img src="' + $(this).attr('src') + '"></div>';
    msg += '<div class="me">' +$(this).parent().siblings('div').html();
    msg +='<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-down"></i><span class="nn">1</span>' + '</div></div>';
    //hide slider
    $('#slider').hide()
    $('.cartpage').hide();
    //update content
    var content =  `<div class="holder">${holder}</div>`;
    //update other1
    var other1 = `<div id="other1">${content}</div>`;
    //append msg
    $('#products').append(msg);
    //append other1
    $('#products').append(other1);
    //specify the length ofthe first  div .holder which contains pics 
    $('#products #other1 .holder').css({
      width: splitlengh*80 + 7*splitlengh + 7 +'px'
    })

    $('#products').fadeIn();
    //animate scroll up
    $('body').animate({
      scrollTop : $('#other').offset().top - 140 + 'px'
    },1700);
    
     
})

 





//on click on up and up 
$(document).on('click','.fa-chevron-down',function(){
 var int =  parseInt($('.nn').text()) + 1;
 
  if(int > vr){
    alert('you cant get more than ' + vr)
  }else{
    $('.nn').text(int)
  }
});

//on click on down

$(document).on('click','.fa-chevron-up',function(){
  var int =  parseInt($('.nn').text()) - 1;
  if(int <= 0){
    $('.nn').text(1)
  }else{
    $('.nn').text(int)
  }
 })

//load the products you may like it on the page when page loaded
//var ig='';
$(window).ready(function(){
  $.ajax({
    url: "cDZ.json",
    data: "data",
    dataType: "json",
    success: function (res) {
      var cont='';
     
      //here 10 is  how much do we want an item product to be shown on the screen
      for(let i=0; i<10; i++){
        //set the radoms
       
        
        //set the randoms
        //for example we want to get women and men stuff
        var d = Math.random()*2;
         var a = Math.floor(d);
          var e =Math.random()*Object.keys(res[Object.keys(res)[a]]).length;
         var b = Math.floor(e);
         var f =Math.random()*res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].src.length;
          var c = Math.floor(f);

            ig=''
           //loop through the imgs
           for(let h=0; h<res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].img[c].length ;h++){
                 
            ig += res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].img[c][h] + ' '
       
         } 
         

          //start get cont
          if(res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].discount[c] !== 0 ){
            cont += `<div id="product">
            <div><p id="img" style="display:none">${ig}</p><img src="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].src[c]}" alt="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].nbr[c]}"></div>
            <div>
            <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].name[c]}</p>
            <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].description[c]}</p>
            <span class="price">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].price[c]} DZD</span>
            <span class="through">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].pricethrough[c]} DZD</span><a href="#" class="add">add to cart</a>
            </div><div id="discount"> ${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].discount[c]}%<span>Discount</span></div></div>`;
          }else{
            cont += `<div id="product">
          <div><p id="img" style="display:none">${ig}</p><img src="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].src[c]}" alt="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].nbr[c]}"></div>
          <div>
          <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].name[c]}</p>
          <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].description[c]}</p>
          <span class="price">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].price[c]} DZD</span>
          <span class="through">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].pricethrough[c]} DZD</span>
          <a href="#" class="add">add to cart</a>
          </div></div>`;
          }
          
          
          
      }
      //append the html
      $('#productss').html(cont);

       
    }
  });
})

    //load random content onthe page
    $(window).ready(function(){
      $.ajax({
        url: "cDZ.json",
        data: "data",
        dataType: "json",
        success: function (res) {
          var cont='';
         
          //here 10 is  how much do we want an item product to be shown on the screen
          for(let i=0; i<10; i++){
            //set the radoms
           
            
            //set the randoms
            //for example we want to get women and men stuff
            var d = Math.random()*2 + 2;
             var a = Math.floor(d);
              var e =Math.random()*Object.keys(res[Object.keys(res)[a]]).length;
             var b = Math.floor(e);
             var f =Math.random()*res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].src.length;
              var c = Math.floor(f);
              
              ig=''
              //loop through the imgs
              for(let h=0; h<res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].img[c].length ;h++){
                    
               ig += res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].img[c][h] + ' '
          
            } 
              //start get cont
              if(res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].discount[c] !== 0 ){
                cont += `<div id="product">
                <div><p id="img" style="display:none">${ig}</p><img src="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].src[c]}" alt="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].nbr[c]}"></div>
                <div>
                <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].name[c]}</p>
                <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].description[c]}</p>
                <span class="price">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].price[c]} DZD</span>
                <span class="through">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].pricethrough[c]} DZD</span><a href="#" class="add">add to cart</a>
                </div><div id="discount"> ${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].discount[c]}%<span>discount</span></div></div>`;
              }else{
                cont += `<div id="product">
              <div><p id="img" style="display:none">${ig}</p><img src="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].src[c]}" alt="${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].nbr[c]}"></div>
              <div>
              <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].name[c]}</p>
              <p>${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].description[c]}</p>
              <span class="price">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].price[c]} DZD</span>
              <span class="through">${res[Object.keys(res)[a]][Object.keys(res[Object.keys(res)[a]])[b]].pricethrough[c]} DZD</span>
              <a href="#" class="add">add to cart</a>
              </div></div>`;
              }

              
          }
          //append the html
          $('#productts').html(cont);
          
           
        }
      });
    })




//when click o btn to scroll
$(window).ready(function(){
  $('#button1').hide()
 
  
//when click forward
    $('.fa-chevron-right').on('click',function(){
    
      var width=$(this).siblings('div').children('#product:first').width();
      console.log('scrollLeft : ' + `${width}`)
     var selec = $('#'+$(this).parent('div').attr('id'));
   selec.animate({
      scrollLeft :   `+=${width + 5}` + 'px'
    },800)
  });
  
 //when click backward

 $('.fa-chevron-left').on('click',function(){

  var selec = $('#'+$(this).parent('div').attr('id'));
  var width=$(this).siblings('div').children('#product:first').width();
 selec.animate({
    scrollLeft : `-=${width + 5}`
  },800)
 })
})


// iwant to delete each product has the same img with other
function checky(el){

  //how many imgs are
  var isn = $(el).children().length;
  var is = $(el).children();

  //get accessed to src and loop through it 
  for(let y=0 ;y<isn; y++ ){

  var at =is.children().children('img')[y].getAttribute('src');
  var s = y+1;

  for(let x=s; x< isn; x++){

    if(at ==is.children().children('img')[x].getAttribute('src') ){
     
      is[x].remove()
    }
  }
  
  }
    //get marginLeft and width of the #.. to get the value to set it to the width 
   
    //for  #..
    var width =$('#product').width();
    var children =$(el).children().length;
    var margin = parseInt($('#product').css('margin-left'))
    $(el).css({
      'width': `${width*children + margin*children + 5}px`
    });
   
  
}

//lazm dir checky dakhl function 

//prevent reputation for #productss and widthis manged resposivly
  $(window).on('mousemove', function(){
    checky('#productss');

          

});
//prevent reputation for #productts and widthis manged resposivly
$(window).on('mousemove', function(){
  checky('#productts')
})


//changing the src of the main img when hovering on the others
$(document).on('mouseover','#other1 .holder div img',function(){
            
  //get value of the hovered pic
  var src =this.getAttribute('src');
  //set it up
  $('#other div img').attr('src', src);
});
$('input').on('focus',function(){
  //put placeholder i var 
  var pl = $(this).attr('placeholder')
  //empty the field
  $(this).attr('placeholder','')
  $('input').on('blur',(function(){
    //return the placeholder
    $(this).attr('placeholder',pl)
  }))
})


//slider changing ads  each x time
var ads = ["nikead.jpg","nikead1.jpg","nikead2.jpg","nikead3.jpg","nikead4.jpg","nikead5.png","nikead6.jpg","nikad7.jpg","nikead9.jpg"];
//set a picture when the page open 
document.getElementById("slider").firstElementChild.setAttribute('src',ads[5])
var w=0;
window.onload= setInterval(() => {
 
 if(w < ads.length){
  document.getElementById("slider").firstElementChild.setAttribute('src',ads[w])
  w++;
 }else{w=0}
}, 5000);

//on click on home
$("nav ul li").eq(0).on('click',function(){
    $("#other").hide();
    $("#other1").hide();
    $('#products').hide();
    $("#slider").hide().fadeIn();
    $(".cartpage").hide().fadeIn();
})
//.add on mouseover
$(document).on('mouseover', '.add',function(){
  $(this).css({color:'red' , textDecorationLine:'underline'})
});
//on mouseleave
$(document).on('mouseleave', '.add',function(){
  $(this).css({color:'#64965f' , textDecoration:'none'})
})
//on click onn .add
var k=1;
$(document).on('click', '.add',function(e){
  e.preventDefault();
  var cartnbr='';
  $('nav ul li').eq(2).children('span').remove();
  //append span element inside the cart list
  var cartnbr = `<span>${k}</span>`;
  $('nav ul li').eq(2).append(cartnbr);
  k++;
  
})