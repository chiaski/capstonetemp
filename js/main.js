
          //Markers
          
          var store1 = L.marker([13.87722222, 120.66777778]).addTo(mymap).on('click', clickStoreone);
          store1.on('mouseover', nameone).openPopup();
          var store2 = L.marker([13.87361111, 120.66500000]).on('mouseover', nametwo).addTo(mymap).on('click', clickStoretwo);
          var store3 = L.marker([13.83277778, 120.62361111]).on('mouseover', namethree).addTo(mymap).on('click', clickStorethree);
          var store4 = L.marker([13.92055556, 120.62416667]).on('mouseover', namefour).on('click', clickStorefour).addTo(mymap);
          
          function clickStoreone(){
              $("#information").fadeOut().fadeIn();
              //alert("clicked store 1 btich!!");
              $(".txt-storename").text("Personal Collection");
              $(".txt-barangayname").text("Real");
              $(".txt-brandname").text("Dinorado Yellow");
              $(".txt-costname").text("50");
              $(".txt-costefficiencyname").text("21.74");
              $(".txt-graingrade").text("B+");
              $(".txt-graingradename").text("Satisfactory");
              
              $(".grain-grade").text("B+").css("background", "#E0E63E");
              $(".image-sample").attr("src", "img/storeonesample.png");
          }
      
          function clickStoretwo(){
              $("#information").fadeOut().fadeIn();
              //alert("clicked store 1 btich!!");
              $(".txt-storename").text("Manang Eli's Sari Sari");
              $(".txt-barangayname").text("Real");
              $(".txt-brandname").text("MRWN Dinorado Puro");
              $(".txt-costname").text("48");
              $(".txt-costefficiencyname").text("21.81");
              $(".txt-graingrade").text("B");
              $(".txt-graingradename").text("Normal");
              
              $(".grain-grade").text("B").css("background", "#EBD13D");
              $(".image-sample").attr("src", "img/storetwosample.png");
          }


          function clickStorethree(){
              $("#information").fadeOut().fadeIn();
              //alert("clicked store 1 btich!!");
              $(".txt-storename").text("Lhynne's Sari Sari");
              $(".txt-barangayname").text("Poblacion 2");
              $(".txt-brandname").text("Dinorado");
              $(".txt-costname").text("57");
              $(".txt-costefficiencyname").text("21.11");
              $(".txt-graingrade").text("A-");
              $(".txt-graingradename").text("Great");
              
              $(".grain-grade").text("A-").css("background", "#75BA59");
              $(".image-sample").attr("src", "img/storethreesample.png");
          }

          function clickStorefour(){
              $("#information").fadeOut().fadeIn();
              //alert("clicked store 1 btich!!");
              $(".txt-storename").text("Anna's Sari Sari");
              $(".txt-barangayname").text("Balibago");
              $(".txt-brandname").text("Sinandomeng");
              $(".txt-costname").text("53");
              $(".txt-costefficiencyname").text("21.54");
              $(".txt-graingrade").text("A");
              $(".txt-graingradename").text("Good");
              
              $(".grain-grade").text("A").css("background", "#38AB48");
              $(".image-sample").attr("src", "img/storefoursample.png");
          }


function nameone(){
        $(".txt-nowviewing").text("Personal Collection Store in Brgy. Real").fadeIn();
}
    
function nametwo(){
        $(".txt-nowviewing").text("Manang Eli's Sari-Sari Store Store in Brgy. Real").fadeIn();
}
    
function namethree(){
        $(".txt-nowviewing").text("Lhynne's Sari Sari Store in Brgy. Poblacion 2").fadeIn();
}
    
function namefour(){
        $(".txt-nowviewing").text("Anna's Store in Brgy. Balibago").fadeIn();
}



