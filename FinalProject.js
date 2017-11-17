    document.addEventListener("DOMContentLoaded", function(event){ 
        hidePicture();
        showIndex(1);
        showPictures();
        
        });
        function showPictures(){
            var e = document.getElementById("pilvenstre");
            e.style.display = "block";
            document.getElementById("pilhøyre").style.display = "block";
            document.getElementById("a4").style.display = "hidden";
            document.getElementById("a5").style.display = "hidden";
        }
        function hidePicture(){
            
            const image = document.getElementsByClassName("defaultslide");
            
            image[0].style.display = "none"; 
        }
        
        var imageIndex = 1;
        var myTimer;
        
        function indexPlus(n){
            showIndex(imageIndex += n);
        }
        
        
        function showIndex(n){
        
            clearTimeout(myTimer);
        
            var x = document.getElementsByClassName("abc");
        
            if(n>x.length){
                imageIndex = 1;
            }
            
            if(n<1) imageIndex = x.length;
            
            for(i = 0; i < x.length; i++){
        
                x[i].style.display = "none";
        
            }
        
            x[imageIndex-1].style.display = "block";
            myTimer = setTimeout(function() { indexPlus(1) }, 9000);
            
        }
        