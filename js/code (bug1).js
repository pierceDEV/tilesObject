/* Document JavaScript */



(function () {

    //var Tile = function(name, placeHoldermsubtitle, {},coverColor, coverImg,fontColor, imgPath){
    var Tile = function (name, placeHolder, subtitle, coverColor, fontColor, imgPath, imgAlt) {
        this.controlClass = "tile";
        this.name = name;
        this.subtitle = subtitle;
        this.place = "." + placeHolder;
        this.cover = coverColor;
        this.fontColor = fontColor;
        this.img = imgPath;
        this.imgAlt = imgAlt;

        this.birthCounter = $("." + this.controlClass).length;
        /*
         if(!name){ this.name = birthCounter }
         
         */

        this.giveBirth = function () {
            $(this.place).html('<div style="width:100%; height:100%" class="' + this.controlClass + ' ' + this.name + '">' + '<div class="trigger"></div>' + '<div class="cover"><img src="img/minicons/blog.ico" alt="blog"><div class="textMessage">' + this.subtitle + '</div></div><img src="' + imgPath + '" alt="' + imgAlt + '">');
            //console.log("Just created new Tile object!");
            //console.log(this.controlClass);
            this.birthCounter++;

            this.logCount = function () {
                console.log("We've got " + this.birthCounter + " tile(s).");
            };
        };
    };

    function Trigging(){
        $(".trigger").hover(function (e) {

            // pobieram nazwę klasy kafelki - parenta triggera
            var ca = e.currentTarget.parentNode.className;

            // parent ma dwie klasy, mnie interesuje akurat ta druga - tworzęwięc tablicę dzieląc string w miejscu spacji lub przecinka
            var arr = ca.split(/[ ,]+/);
            console.log(arr[1]);
            var end = $(".col").eq(1).css("width");

            /**/
            // animate to
            $("." + arr[1] + " > .cover").animate(
                    {
                        height: end,
                        backgroundColor: "rgba(0,0,0,.5)",
                        borderColor: "white",
                        borderWidth: 4

                    }, 500, function () {
                console.log("dokonalo sie");
                // Animation complete.
                $("." + arr[1] + " > .cover > *").animate(
                        {
                            opacity: 1
                        }, 300, function ()
                {
                    // Animation complete.

                });

                $("." + arr[1] + " > .cover > img").animate(
                        {
                            marginTop: "20%"
                        }, 300, function ()
                {
                    // Animation complete.

                });
            }
            ); // animate to

            /**/
        });

        $(".trigger").mouseout(function (e) {
            var ca = e.currentTarget.parentNode.className;
            var arr = ca.split(/[ ,]+/);
            //console.log(arr[1]);

            $("." + arr[1] + " > .cover").animate({
                height: "5px",
                backgroundColor: "rgba(0,0,0,1)",
                borderColor: "grey",
                borderWidth: 1
            }, 500, function () {
                // Animation complete.
                $("." + arr[1] + " > .cover > *").css("opacity", "0");

            });
        });
    }
    /***********************  Object() tile  *******************************/



    function Normal() {


        if ($(".tile").length) {
            /*
             var tilesNewValue = new Array();
             var tilesOldValue = "";
             
             for(var i = 0; i < ($(".col").length); i++)
             {
             tilesOldValue += $(".col").eq(i).html();
             //console.log(tilesOldValue);
             }
             console.log(tilesOldValue);
             
             */
            pasteAllTiles();
            console.log("gdy są");
            //$('span').html('<div class="rower">'+  tilesValue[0]  +'</div>' + '<div class="rower">'+  tilesValue[1]  +'</div>' + '<div class="rower">'+  tilesValue[2]  +'</div>');

        }
        else {
            console.log("gdy niema");
            $('span').html('<div class="rower"><div class="col"></div><div class="col"></div><div class="col" ></div></div><div class="rower"><div class="col" ></div><div class="col" ></div><div class="col" ></div></div><div class="rower"><div class="col"></div><div class="col"></div><div class="col"></div></div>');


            createTiles(9);
        }
    }
    ;

    function Small() {
        if ($(".tile").length) {
            console.log("gdy są");
            //$('span').html('<div class="rower">'+  $(".rower").eq(0).html()  +'</div>' + '<div class="rower">'+  $(".rower").eq(1).html()  +'</div>' + '<div class="rower">'+  $(".rower").eq(2).html()  +'</div>' + '<div class="rower">'+  $(".rower").eq(3).html()  +'</div>' + '<div class="rower">'+  $(".rower").eq(4).html()  +'</div>');
        }
        else {
            console.log("gdy niema");
            $('span').html('<div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div><div class="col" ></div></div><div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div></div>');
            createTiles();
        }


    }
    ;
    function Smaller() {
        if ($(".tile").length) {
            console.log("gdy są");
            $('span').html('<div class="rower">' + $(".rower").eq(0).html() + '</div>' + '<div class="rower">' + $(".rower").eq(1).html() + '</div>' + '<div class="rower">' + $(".rower").eq(2).html() + '</div>' + '<div class="rower">' + $(".rower").eq(3).html() + '</div>' + '<div class="rower">' + $(".rower").eq(4).html() + '</div>' + '<div class="rower">' + $(".rower").eq(5).html() + '</div>' + '<div class="rower">' + $(".rower").eq(6).html() + '</div>' + '<div class="rower">' + $(".rower").eq(7).html() + '</div>' + '<div class="rower">' + $(".rower").eq(8).html() + '</div>');

        }
        else {
            console.log("gdy niema");
            $('span').html('<div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col" ></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col" ></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div>');
            createTiles(9);
        }
    }
    ;

    /*
     function onResize(){
     $("title").html($(window).width());
     var w = $(window).width();
     
     if((w<768)&&(w>526)){
     if($('.rower').length!=5){
     Small();
     console.log("Small");	
     }	
     }
     else if (w<527){
     if($('.rower').length!=9){
     //$('.col').css("min-width","150px");
     //$('.col').css("min-height","150px");
     Smaller();
     console.log("Smaller");	
     }
     }
     else{
     if($('.rower').length!=3){
     Normal();
     console.log("Normal");
     }
     }
     };
     */


    /************* OGARNIĘTE *****************/
    function onResize() {
        $("title").html($(window).width());
        var w = $(window).width();
        if (w < 940) {
            $('.cover').css("max-height", "250px !important");
            $('.cover').css("max-width", "250px !important");
            $(".cover").css("width", $(".col").eq(1).css("width"));
        }
        else if (w >= 940) {
            setTimeout(function () {
                $(".cover").css("width", $(".col").eq(1).css("width"));

                //$(".cover").css("border-bottom","2px solid white");
                //console.log($(".tile").eq(1).css("width"));
                //$(".cover").css("height",$(".col").eq(1).css("width"));

                $(".trigger").css("width", $(".col").eq(1).css("width"));
                $(".trigger").css("height", $(".col").eq(1).css("width"));

            }, 10); /* TimeOut */
            //Normal();
        }
        ;
        /*
         if((w<768)&&(w>526)){
         if($('.rower').length!==5){
         Small();
         console.log("Small");	
         }	
         }
         else if (w<527){
         if($('.rower').length!==9){
         //$('.col').css("min-width","150px");
         //$('.col').css("min-height","150px");
         Smaller();
         console.log("Smaller");	
         }
         }
         else{
         if($('.rower').length!==3){
         Normal();
         console.log("Normal");
         }
         }
         */

    }
    ;

    $(window).resize(onResize);
    $(window).load(function () {

        onResize();


        /*
         $("."+arr[1] + " > .cover > .textMessage").animate({
         opacity: 0,
         }, 300, function() {
         // Animation complete.
         $("."+arr[1] + " > .cover").animate({
         height: "5px",
         backgroundColor: "rgba(0,0,0,1)",
         borderColor: "grey",
         borderWidth: 1
         }, 500, function() {
         // Animation complete.
         $("."+arr[1] + " > .cover > .textMessage").css("opacity","0");
         
         });
         });
         */


        //$("."+arr[1] + " > .cover").animate("fast");
        //console.log(e.currentTarget.nextElementSibling.className);
        //$(".cover").addClass("fadeOutDown");

    });

    //});

    //$(window).load(onResize);
    // Funkcja tworząca objekty Tile() i dodająca klasę do placeHoldera
    function createTiles(ile) {
        var Tiles = new Array();

        var j = ile;
        for (var i = 0; i < ile; i++) {
// nadanie .col nazw pozwalających na wstawienie tiles'ów
            $(".col").eq(i).addClass("Tile" + (i + 1));

            Tiles[i] = new Tile("poll" + (i + 1), "Tile" + (i + 1), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, iusto, tenetur.", "black", "white", "img/" + (i + 2) + ".jpg", "" + (i + 2));
            Tiles[i].giveBirth();
            //Tiles[i].logCount();
        }

    }
    ;


    // wrzuca zawartośćjuż utworzonych tile w nowy layout
    function pasteAllTiles(param) {
        if ($(".col").length) {
            var tilesNewValue = new Array();
            var tilesOldValue = "";

            console.log("pasteTiles");

            for (var i = 0; i < ($(".col").length); i++)
            {
                tilesOldValue += $(".col").eq(i).html() + "^";
                //console.log(tilesOldValue);
            }
            tilesNewValue = tilesOldValue.split('^');

            for (var j = 0; j < $(".col").length - 1; j++) {
                $('.col').eq(0).html(tilesNewValue[j]);
            }


            /*
             if(param==="Normal"){
             
             for(var j = 0; j < ile; j++){
             $('.col').eq(0).html(tilesNewValue[i]);
             }
             }
             else if(param==="Small"){
             
             }
             else if(param==="Smaller"){
             
             }
             
             
             for(var j = 0; j < ($(".col").length); j++)
             {
             //console.log(tilesNewValue[j]);
             //console.log(tilesOldValue);
             }
             */
            //console.log("gdy są");
            //$('span').html('<div class="rower">'+  tilesValue[0]  +'</div>' + '<div class="rower">'+  tilesValue[1]  +'</div>' + '<div class="rower">'+  tilesValue[2]  +'</div>');
        }
    }

    createTiles(9);
    Trigging();
    //pasteAllTiles();


    /*********************************** end of Resize *************************************************/

    /***********************  Object() tile  *******************************/





    /*
     var centerTile = new Tile("center", "centerTile", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, iusto, tenetur.", "black", "white", "img/21.jpg","21");
     centerTile.giveBirth();
     centerTile.logCount();
     
     var rightTopTile = new Tile("rightTop", "rightTopTile", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, iusto, tenetur.", "black", "white", "img/11.jpg","11");
     rightTopTile.giveBirth();
     rightTopTile.logCount();
     */
    /*
     for(var i = 0; i < $('.col').length; i++ ){
     $('.col').eq(i).html('<img src="img/'+ (i+2) +'.jpg" alt="jquery loaded">');
     console.log(i);
     }
     */

}());