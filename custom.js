sasa        $( document ).ready(function() {

        var value = 0;
        
        var toggle1value = 0;
        var toggle2value = 0;
        var toggle3value = 0;
        var toggle4value = 0;

        var arr1 = '';
        var arr2 = '';
        var arr3 = '';
        var arr4 = '';
        var tries = 0;

        var try1 = '';
        var try2 = '';
        var try3 = '';

        function check(){
            var increment = 0;
            $( ".box" ).each(function( index ) {
               // if ($(this).css("visibility") == "visible") {                   
                if ( $( this ).hasClass( "bounceIn" ) ) {
                   increment++;
                }
            });
            value = increment;

            
        }

        function uncheck(a,b,c){
      
            if(a == value){
                $("."+b+"").removeClass("bounceIn").addClass("bounceOut");
                if(c==1){
                    toggle1value = 0;
                }
                else if(c==2){
                    toggle2value = 0;
                }
                else if(c==3){
                    toggle3value = 0;
                }
                else if(c==4){
                    toggle4value = 0;
                }

                if(value==1){
                    arr1 = '';
                }
                else if(value==2){
                    arr2 = '';
                }
                else if(value==3){
                    arr3 = '';
                }
                else if(value==4){
                    arr4 = '';
                }

            }else{

            }            

        }

        $( ".toggle1,.toggle2,.toggle3,.toggle4" ).mousemove(function( event ) {
            $(this).find('img').addClass('tada animated');
        });

        $( ".toggle1,.toggle2,.toggle3,.toggle4" ).mouseout(function( event ) {
            $(this).find('img').removeClass('tada animated');
        });

        $(".creates").click(function(){
            window.reload();
        })
        $(".toggle1").on('click', function() {
            var a = $(this).prev().html();
            var b = "box1";
            var c = 1;
            console.log("value="+value);

            if (toggle1value == 0){
                $(".box1").fadeIn().css({"visibility":"visible"}).addClass("bounceIn animated tick").removeClass("bounceOut");
                toggle1value = 1;
                check();
                $(".box1").html(value);
                

                if(value==1){
                    arr1 = 'sand';
                }
                else if(value==2){
                    arr2 = 'sand';
                }
                else if(value==3){
                    arr3 = 'sand';
                }
                else if(value==4){
                    arr4 = 'sand';
                }
                
            } else{
                console.log(uncheck(a,b,c));
                check();
                
            }

            console.log(arr1+" "+arr2+" "+arr3+" "+arr4);
        });

        $(".toggle2").on('click', function() {
            var a = $(this).prev().html();
            var b = "box2";
            var c = 2;
            console.log("value="+value);

            if (toggle2value == 0){
                $(".box2").fadeIn().css({"visibility":"visible"}).addClass("bounceIn animated").removeClass("bounceOut");
                toggle2value = 1;
                check();
                $(".box2").html(value);

                if(value==1){
                    arr1 = 'golf balls';
                }
                else if(value==2){
                    arr2 = 'golf balls';
                }
                else if(value==3){
                    arr3 = 'golf balls';
                }
                else if(value==4){
                    arr4 = 'golf balls';
                }

            } else{
                console.log(uncheck(a,b,c));
                check();
            }

             console.log(arr1+" "+arr2+" "+arr3+" "+arr4);
        });

        $(".toggle3").on('click', function() {
            var a = $(this).prev().html();
            var b = "box3";
            var c = 3;
            console.log("value="+value);

            if (toggle3value == 0){
                $(".box3").fadeIn().css({"visibility":"visible"}).addClass("bounceIn animated").removeClass("bounceOut");
                toggle3value = 1;
                check();
                $(".box3").html(value);

                if(value==1){
                    arr1 = 'marbles';
                }
                else if(value==2){
                    arr2 = 'marbles';
                }
                else if(value==3){
                    arr3 = 'marbles';
                }
                else if(value==4){
                    arr4 = 'marbles';
                }

            } else{
                console.log(uncheck(a,b,c));
                check();
               
            }

             console.log(arr1+" "+arr2+" "+arr3+" "+arr4);
        })

        $(".toggle4").on('click', function() {
            var a = $(this).prev().html();
            var b = "box4";
            var c = 4;
            console.log("value="+value);

            if (toggle4value == 0){
                $(".box4").fadeIn().css({"visibility":"visible"}).addClass("bounceIn animated").removeClass("bounceOut");
                toggle4value = 1;
                check();
                $(".box4").html(value);

                if(value==1){
                    arr1 = 'pebbles';
                }
                else if(value==2){
                    arr2 = 'pebbles';
                }
                else if(value==3){
                    arr3 = 'pebbles';
                }
                else if(value==4){
                    arr4 = 'pebbles';
                }

            } else{
                console.log(uncheck(a,b,c));
                check();
            }

             console.log(arr1+" "+arr2+" "+arr3+" "+arr4);
        });
        


        $(".create").click(function(){


            if(arr1!="" && arr2!="" && arr3!="" && arr4!=""){
                tries++;
                $(".notifyjs-metro-base").trigger('notify-hide');

                if(tries==1){
                    try1 = arr1+' - '+arr2+' - '+arr3+' - '+arr4;
                    $(".try1").html('1st Try: <span class="bcolor">'+try1+'</span>');
                }
                else if(tries==2){
                    try2 = arr1+' - '+arr2+' - '+arr3+' - '+arr4;
                    $(".try2").html('2nd Try: <span class="bcolor">'+try2+'</span>');
                }
                else if(tries==3){
                    try3 = arr1+' - '+arr2+' - '+arr3+' - '+arr4;
                    $(".try3").html('3rd Try: <span class="bcolor">'+try3+'</span>');
                }

                $("section.prompt").fadeIn();

                setTimeout(function(){ 
                    $("section.prompt img").fadeIn();
                 }, 500);
                
                setTimeout(function(){
                $("section.prompt").fadeOut();
                $("section.prompt img").fadeOut();                   
                 }, 3000);
                

                /*if(tries>=3){                
                    setTimeout(function(){
                        swal("Oops!", "Sorry you have reach the maximum tries.", "warning");
                    }, 3500);
                }   
                else{
                */
                    //1
                    if((arr1=="golf balls") && (arr2=="marbles") && (arr3=="pebbles") && (arr4="sand")){
                        
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Super Awesome! ",
                                text: "Your Jar of Priorities is filled to the brim without spillovers!",
                                confirmButtonText: "Done",
                                imageUrl: "img/24.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                    $("section.main").css({"display":"none"});
                                    $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);

                        }
						
						else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Sweet!",
                                text: "It did not take long for you to figure that out. Nice!",
                                confirmButtonText: "Done",
                                imageUrl: "img/24.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                    $("section.main").css({"display":"none"});
                                    $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);

                        }
						
						else {
                            setTimeout(function(){
                            swal({
                                title: "Good Job!",
                                text: "Persistence pays off. Congratulations!",
                                confirmButtonText: "Done",
                                imageUrl: "img/24.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                    $("section.main").css({"display":"none"});
                                    $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);

                        }

                      
                    }
                    //2
                    else if((arr1=="golf balls") && (arr2=="marbles") && (arr3=="sand") && (arr4="pebbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?.",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/23.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
                        else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going!",
                                text: "One last try, and you’ll soon figure it out.",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/23.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/23.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3
                    }
                    //3
                    else if((arr1=="golf balls") && (arr2=="pebbles") && (arr3=="marbles") && (arr4="sand")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/22.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/22.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/22.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3 
                    }
                    //4
                    else if((arr1=="golf balls") && (arr2=="sand") && (arr3=="marbles") && (arr4="pebbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/21.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/21.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/21.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //5
                    else if((arr1=="golf balls") && (arr2=="pebbles") && (arr3=="sand") && (arr4="marbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/20.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/20.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/20.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3
                    }
                    //6
                    else if((arr1=="golf balls") && (arr2=="sand") && (arr3=="pebbles") && (arr4="marbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/19.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/19.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/19.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //7
                    else if((arr1=="marbles") && (arr2=="golf balls") && (arr3=="pebbles") && (arr4="sand")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/18.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/18.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/18.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3  
                    }
                    //8
                    else if((arr1=="marbles") && (arr2=="golf balls") && (arr3=="sand") && (arr4="pebbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/17.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/17.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/17.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //9
                    else if((arr1=="marbles") && (arr2=="pebbles") && (arr3=="golf balls") && (arr4="sand")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/16.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/16.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/16.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //10
                    else if((arr1=="marbles") && (arr2=="sand") && (arr3=="golf balls") && (arr4="pebbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/15.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/15.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/15.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //11
                    else if((arr1=="marbles") && (arr2=="pebbles") && (arr3=="sand") && (arr4="golf balls")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/14.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/14.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/14.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3  
                    }
                    //12
                    else if((arr1=="marbles") && (arr2=="sand") && (arr3=="pebbles") && (arr4="golf balls")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/13.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/13.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/13.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3 
                    }
                    //13
                    else if((arr1=="pebbles") && (arr2=="golf balls") && (arr3=="marbles") && (arr4="sand")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/12.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/12.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/12.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3
                    }
                    //14
                    else if((arr1=="pebbles") && (arr2=="golf balls") && (arr3=="sand") && (arr4="marbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/11.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/11.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/11.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3
                    }
                    //15
                    else if((arr1=="pebbles") && (arr2=="marbles") && (arr3=="golf balls") && (arr4="sand")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/10.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/10.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/10.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //16
                    else if((arr1=="pebbles") && (arr2=="sand") && (arr3=="golf balls") && (arr4="marbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/9.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/9.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/9.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3 
                    }
                    //17
                    else if((arr1=="pebbles") && (arr2=="marbles") && (arr3=="sand") && (arr4="golf balls")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/8.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/8.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/8.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //18
                    else if((arr1=="pebbles") && (arr2=="sand") && (arr3=="marbles") && (arr4="golf balls")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/7.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/7.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                                
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/7.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //19
                    else if((arr1=="sand") && (arr2=="golf balls") && (arr3=="marbles") && (arr4="pebbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/6.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                          
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/6.png", 
                                imageSize: "200x200"},
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                               
                                    } else {     
                                           
                                    }                                            
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/6.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3   
                    }
                    //20
                    else if((arr1=="sand") && (arr2=="golf balls") && (arr3=="pebbles") && (arr4="marbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/5.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/5.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/5.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3  
                    }
                    //21
                    else if((arr1=="sand") && (arr2=="marbles") && (arr3=="golf balls") && (arr4="pebbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/4.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/4.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/4.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3    
                    }
                    //22
                    else if((arr1=="sand") && (arr2=="pebbles") && (arr3=="golf balls") && (arr4="marbles")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/3.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/3.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/3.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3   
                    }
                    //23
                    else if((arr1=="sand") && (arr2=="marbles") && (arr3=="pebbles") && (arr4="golf balls")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/2.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/2.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/2.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3 
                    }
                    //24
                    else if((arr1=="sand") && (arr2=="pebbles") && (arr3=="marbles") && (arr4="golf balls")){
                        if(tries==1){
                            setTimeout(function(){
                            swal({
                                title: "Almost there!",
                                text: "Try again, shall we?",
                                confirmButtonClass: "btn-danger",
                                confirmButtonText: "Try again",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/1.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);  
                        }
  else if(tries==2){
                            setTimeout(function(){
                            swal({
                                title: "Keep going! ",
                                text: "One last try, and you’ll soon figure it out",
                                confirmButtonClass: "btn-danger",
                                confirmButtonColor: "#DD6B55",
                                confirmButtonText: "Try again",
                                imageUrl: "img/1.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {    
                                        $(".box").removeClass("bounceIn").addClass("bounceOut");
                                            toggle1value = 0;                                      
                                            toggle2value = 0;                                      
                                            toggle3value = 0;                                      
                                            toggle4value = 0;
                                            arr1 = '';
                                            arr2 = '';
                                            arr3 = '';
                                            arr4 = '';
                                        $.Notification.notify('error', 'top right', 'Summary', '1st try: '+try1+'<br/>2nd try: '+try2+'<br/>3rd try: '+try3+'');                                        
                                    } else {     
                                           
                                    }                               
                                });
                            }, 3500);      
                        }
                        else if(tries==3){
                            setTimeout(function(){
                            swal({
                                title: "We’ll get ‘em next time!",
                                text: "Sorry, but you’ve used up 3 tries.",
                                confirmButtonClass: "btn-danger",                                
                                confirmButtonText: "Done",
                                confirmButtonColor: "#DD6B55",
                                imageUrl: "img/1.png", 
                                imageSize: "200x200" },
                                function(isConfirm){   
                                    if (isConfirm) {     
                                        $("section.main").css({"display":"none"});
                                        $("section.final").fadeIn();
                                             
                                    } else {     
                                           
                                    }

                                });
                            }, 3500);  
                        }//tries3  
                    }

                //}


            }
        })

        //

        });