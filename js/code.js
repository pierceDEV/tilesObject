/* Document JavaScript */



function tileCreator() {
    
    // createClasses
    function Stylylize(){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.rower a{display:block}.rower > .col{margin:3px;background-color:#ffc0cb;min-width:200px;min-height:250px;max-height:250px;max-width:300px;float:left;overflow:hidden}.rower{margin-left:auto;margin-right:auto;display:table;text-align:center}.tilesHolder{margin:0 auto}.cover{height:5px;position:absolute;z-index:2;background-color:rgba(0,0,0,1);border-bottom:1px solid grey}.trigger{position:absolute;z-index:3;background-color:transparent}.textMessage{opacity:0;padding:5px;max-width:250px;margin-top:40%;text-align:left;vertical-align:bottom;color:#fff;font-size:20px;font-weight:400}.cover  img{position:absolute;left:0;margin-top:2%;opacity:0;float:left;width:50px;border:2px solid #fff;margin-top:10px}.tile{border:2px dashed #fff}';
        document.getElementsByTagName('head')[0].appendChild(style);

    }
    
    
    
    
    /* ważna tablica trzymająca utworzone objekty */
    var createdTilesArray = [];
    //var Tile = function(name, placeHoldermsubtitle, {},coverColor, coverImg,fontColor, imgPath){
    var Tile = function (name, placeHolder, subtitle, coverColor, fontColor, imgPath, imgAlt, miniImg, link) {
        this.controlClass = "tile";
        this.name = name;
        this.subtitle = subtitle;
        this.place = "." + placeHolder;
        this.cover = coverColor;
        this.fontColor = fontColor;
        this.img = imgPath;
        this.imgAlt = imgAlt;
        this.minicon = miniImg;
        this.link = link;

        this.birthCounter = $("." + this.controlClass).length;
        /*
         if(!name){ this.name = birthCounter }
         
         */

        this.giveBirth = function () {
            createdTilesArray.push(
                    ('<div style="width:100%; height:100%" class="' + this.controlClass + ' ' + this.name + '">' + '<div class="trigger"></div>' + '<div class="cover"><a class="link" href="'+ this.link +'"><img src="'+ this.minicon +'" alt="minicon"></a><div class="textMessage">' + this.subtitle + '</div></div><img class="tileBg" src="' + imgPath + '" alt="' + imgAlt + '">')
                    );
            //console.log("Just created new Tile object!");
            //console.log(this.controlClass);

            this.logCount = function () {
                console.log("We've got " + this.birthCounter + " tile(s).");
            };
        };
    };

    function Trigging() {
        
        $(".trigger").css("cursor","pointer");
        
        $(".trigger").click(function(e){
            var ca = e.currentTarget.parentNode.className;
            var arr = ca.split(/[ ,]+/);
           
            var href = $("." + arr[1]).find("a").attr('href');
            window.location.href = href; //causes the browser to refresh and load the requested url
            
            
            console.log("sjould go");
        });
        
        $(".trigger").hover(function (e) {

            // pobieram nazwę klasy kafelki - parenta triggera
            var ca = e.currentTarget.parentNode.className;

            // parent ma dwie klasy, mnie interesuje akurat ta druga - tworzęwięc tablicę dzieląc string w miejscu spacji lub przecinka
            var arr = ca.split(/[ ,]+/);
            console.log(arr[1]);
            var end = $(".col").eq(1).css("height");

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
                $("." + arr[1] + " > .cover  *").animate(
                        {
                            opacity: 1
                        }, 300, function ()
                {
                    // Animation complete.

                });

                $("." + arr[1] + " > .cover  img").animate(
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
                $("." + arr[1] + " > .cover  img").css("opacity", "0");

            });
        });
        
        
    }
    /***********************  Object() tile  *******************************/



    function Normal() {
        if ($(".tile").length) {
            console.log("gdy są");

            $('.tilesHolder').html('<div class="rower"><div class="col"></div><div class="col"></div><div class="col" ></div></div><div class="rower"><div class="col" ></div><div class="col" ></div><div class="col" ></div></div><div class="rower"><div class="col"></div><div class="col"></div><div class="col"></div></div>');
            pasteAllTiles();

        }
        else {
            console.log("gdy niema");
            $('.tilesHolder').html('<div class="rower"><div class="col"></div><div class="col"></div><div class="col" ></div></div><div class="rower"><div class="col" ></div><div class="col" ></div><div class="col" ></div></div><div class="rower"><div class="col"></div><div class="col"></div><div class="col"></div></div>');
            createTiles(9);
            pasteAllTiles();
        }
    };
/***********************  End of Normal  *******************************/
    function Small() {
        if ($(".tile").length) {
            console.log("gdy są");
            $('.tilesHolder').html('<div class="rower"><div class="col"></div><div class="col"></div></div><div class= "rower"><div class= "col"></div><div class= "col"></div></div><div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div></div>');
            pasteAllTiles();
        }
        else {
            console.log("gdy niema");
            $('.tilesHolder').html('<div class="rower"><div class="col"></div><div class="col"></div></div><div class= "rower"><div class= "col"></div><div class= "col"></div></div><div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div><div class="col"></div></div><div class="rower"><div class="col"></div></div>');
            createTiles(9);
            pasteAllTiles();
        }
 /***********************  End of Small  *******************************/
    };
    function Smaller() {
        if ($(".tile").length) {
            console.log("gdy są");


            $('.tilesHolder').html('<div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div>');

            pasteAllTiles();
        }
        else {
            console.log("gdy niema");
            $('.tilesHolder').html('<div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col" ></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col" ></div></div><div class="rower"><div class="col"></div></div><div class="rower"><div class="col"></div></div>');
            createTiles(9);
            pasteAllTiles();
        }
    };
/***********************  End of Smaller  *******************************/
    function onResize() {
        $("title").html($(window).width());
        var w = $(window).width();
               
        if (w < 940) {
            $(".col").css("width","250px");
            $('.cover').css("max-height", "250px !important");
            $('.cover').css("max-width", "250px !important");
           //$(".cover").css("width", $(".col").eq(1).css("width"));
            $(".cover").css("width", $(".col").eq(1).width());
            
            $(".trigger").css("width", $(".col").eq(1).width());
            $(".trigger").css("height", $(".col").eq(1).width());
            $(".tileBg").css("height", $(".col").eq(1).width());

        }
        else if (w > 940) {
            setTimeout(function () {
                $(".cover").css("width", $(".col").eq(1).css("width"));

                //$(".cover").css("border-bottom","2px solid white");
                //console.log($(".tile").eq(1).css("width"));
                //$(".cover").css("height",$(".col").eq(1).css("width"));

                $(".trigger").css("width", $(".col").eq(1).width());
                $(".trigger").css("height", $(".col").eq(1).width());
                $(".tileBg").css("height", $(".col").eq(1).width());

            }, 10); /* TimeOut */
            //Normal();
        };

        if((w < 768) && (w > 526)) {
            if ($('.rower').length !== 5) {
                Small();
                console.log("Small");
            }
        }
        else if (w < 527) {
            if ($('.rower').length !== 9) {
                Smaller();
                console.log("Smaller");
            }
        }
        else {
            if ($('.rower').length !== 3) {
                
                Normal();
                console.log("Normal");
            }
        }
    };
/*********************************** end of Resize *************************************************/
     
    onResize();
    setTimeout(function(){onResize();},300);
    $(window).resize(onResize);
    $(window).load(function () {
        onResize();
        Stylylize();
    });

    function createTiles(ile) {

        var Tiles = new Array();

        var j = ile;
        for (var i = 0; i < ile; i++) {

            Tiles[i] = new Tile("poll" + (i + 1), "Tile" + (i + 1), "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, iusto, tenetur.", "black", "white", "img/" + (i + 2) + ".jpg", "" + (i + 2),"img/minicons/"+(i + 1) + ".ico", "http://www.google.pl");
            Tiles[i].giveBirth();
            //Tiles[i].logCount();
        }

    };

    // wrzuca zawartość już utworzonych tile w nowy layout
    function pasteAllTiles() {

        // liczba utworzonych tile'sów
        var howMuch = createdTilesArray.length;
        if (howMuch) {

            //stworzenie tablicy przechowującej elementy .col jako kontener dla tile'sów
            var tilesCols = new Array();
            tilesCols = $(".col");

            // czyszczenie elementów .col z ich kontentu , ahmm - "treści"

            //console.log("pasteTiles");


            for (var j = 0; j < howMuch; j++) {
                $('.col').eq(j).html(createdTilesArray[j]);
            }
            
            Trigging();
            
            // ukrywanie .col pustych
            
            for(var i = 0; i< $(".col").length;i++)
            {
                if($(".col").eq(i).text()==="")
                {
                    $(".col").eq(i).css("display","none");
                }
            }
           

        }
    }
        
   


}