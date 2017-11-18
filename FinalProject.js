    document.addEventListener("DOMContentLoaded", function(event){ 
        hidePicture();
        showIndex(1);
        showPictures();
        
        });
        function showPictures(){
            var e = document.getElementById("pilvenstre");
            e.style.display = "inline-block";
            document.getElementById("pilhøyre").style.display = "inline-block";
            document.getElementById("a4").style.display = "block";
            document.getElementById("a5").style.display = "none";
            document.getElementById("a6").style.display = "none";
            document.getElementById("a7").style.display = "none";
        }
        function hidePicture(){
            
            const image = document.getElementsByClassName("defaultslide");
            
            image[0].style.display = "none"; 
        }
        
        var imageIndex = 1;
        var myTimer;
        
        function indexPlus(n){
            showIndex(imageIndex += n);
            console.log(imageIndex + "'" + n);
        }
        
        
        function showIndex(n){
        
            clearTimeout(myTimer);
        
            var bildene = document.getElementsByClassName("abc");
        
            if(n>bildene.length){
                imageIndex = 1;
            }
            
            if(n<1) imageIndex = bildene.length;
            
            for(i = 0; i < bildene.length; i++){
        
                bildene[i].style.display = "none";
        
            }
        
            bildene[imageIndex-1].style.display = "block";
            myTimer = setTimeout(function() { indexPlus(1) }, 8000);
            
        }
        