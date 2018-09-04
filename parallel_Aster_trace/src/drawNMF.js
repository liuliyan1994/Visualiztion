$("#tSureID").click(function(){
    var time_one=parseInt($("#time_one").val());
    var time_two=parseInt($("#time_two").val());

    $.getJSON("./LDATopic/keyArea.json",function(data){
        $.each(data,function(error,data){
            //console.log(data);
            var time=parseInt(data.slice(6,8));;
            if(time_one<=time&&time<time_two){
                var grid_index_one=parseInt(data.slice(0,5));
                var i=parseInt(grid_index_one/blockCount);
                var j=grid_index_one%blockCount;

                var bound=[[bottom+i*heightDistance,left+j*wideDistance],[bottom+(i+1)*heightDistance,left+(j+1)*wideDistance]];
                L.rectangle(bound, {color:'	#696969', fillColor: '#FFFFFF',opacity:1, weight: 1}).addTo(map);

            }
        })
    });
})

$("#tSureID").click(function(){
    var time_one=parseInt($("#time_one").val());
    var time_two=parseInt($("#time_two").val());

    $.getJSON("./LDATopic/topic.json",function(data){
        var topicNum=$.each(data.topic_num);
        $.each(data,function(key,value){
            var count=0;
            if(key!='topic_num'&&key!='term_top_num'){
                $.each(value,function(index,e){
                    var time=parseInt(e.slice(6,8));//对于没有方向的word
                    if(time_one<=time&&time<time_two){
                        var grid_index_one=parseInt(e.slice(0,5));
                        var i=parseInt(grid_index_one/blockCount);
                        var j=grid_index_one%blockCount;
                        var lat = bottom+i*heightDistance;
                        var lng = left + j*wideDistance;

                        var bound0=[[bottom+(i+3/4)*heightDistance,left+(j+2/4)*wideDistance],[bottom+(i+1)*heightDistance,left+(j+3/4)*wideDistance]];
                        var bound1=[[bottom+(i+3/4)*heightDistance,left+(j+3/4)*wideDistance],[bottom+(i+1)*heightDistance,left+(j+1)*wideDistance]];
                        var bound2=[[bottom+(i+2/4)*heightDistance,left+(j+3/4)*wideDistance],[bottom+(i+3/4)*heightDistance,left+(j+1)*wideDistance]];
                        var bound3=[[bottom+(i+1/4)*heightDistance,left+(j+3/4)*wideDistance],[bottom+(i+2/4)*heightDistance,left+(j+1)*wideDistance]];
                        var bound4=[[bottom+i*heightDistance,left+(j+3/4)*wideDistance],[bottom+(i+1/4)*heightDistance,left+(j+1)*wideDistance]];
                        var bound5=[[bottom+i*heightDistance,left+(j+2/4)*wideDistance],[bottom+(i+1/4)*heightDistance,left+(j+3/4)*wideDistance]];
                        var bound6=[[bottom+i*heightDistance,left+(j+1/4)*wideDistance],[bottom+(i+1/4)*heightDistance,left+(j+2/4)*wideDistance]];
                        var bound7=[[bottom+i*heightDistance,left+j*wideDistance],[bottom+(i+1/4)*heightDistance,left+(j+1/4)*wideDistance]];
                        var bound8=[[bottom+(i+1/4)*heightDistance,left+j*wideDistance],[bottom+(i+2/4)*heightDistance,left+(j+1/4)*wideDistance]];
                        var bound9=[[bottom+(i+2/4)*heightDistance,left+j*wideDistance],[bottom+(i+3/4)*heightDistance,left+(j+1/4)*wideDistance]];
                        var bound10=[[bottom+(i+3/4)*heightDistance,left+j*wideDistance],[bottom+(i+1)*heightDistance,left+(j+1/4)*wideDistance]];
                        var bound11=[[bottom+(i+3/4)*heightDistance,left+(j+1/4)*wideDistance],[bottom+(i+1)*heightDistance,left+(j+2/4)*wideDistance]];


                        var c = d3.scale.category10();
                        var colorScale=d3.scale.ordinal()
                            .domain(['topic_0','topic_1','topic_2','topic_3','topic_4','topic_5'])
                            //.range(['#1f77b4','#ff7f0e','#d62728','#9467bd'])
                            .range([c(0),c(1),c(2),c(3),c(4),c(5)]);
                        //#1f77b4 #ff7f0e #2ca02c #d62728 #9467bd
                        // blue    orange  green    red    purple
                        //console.log(c(6));
                        var color=colorScale(key);
                        //console.log(c(0),c(1),c(2),c(3),c(4),c(5));


                        if (time == 00){L.rectangle(bound0, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 01){L.rectangle(bound0, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 02){L.rectangle(bound1, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 03){L.rectangle(bound1, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 04){L.rectangle(bound2, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 05){L.rectangle(bound2, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 06){L.rectangle(bound3, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 07){L.rectangle(bound3, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 08){L.rectangle(bound4, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 09){L.rectangle(bound4, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 10){L.rectangle(bound5, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 11){L.rectangle(bound5, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 12){L.rectangle(bound6, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 13){L.rectangle(bound6, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 14){L.rectangle(bound7, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 15){L.rectangle(bound7, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 16){L.rectangle(bound8, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 17){L.rectangle(bound8, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 18){L.rectangle(bound9, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 19){L.rectangle(bound9, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 20){L.rectangle(bound10, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 21){L.rectangle(bound10, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 22){L.rectangle(bound11, {color:color, opacity:1, weight: 1}).addTo(map);}
                        if (time == 23){L.rectangle(bound11, {color:color, opacity:1, weight: 1}).addTo(map);}
                        count++;
                    }
                })
            }
        })
    });
})
