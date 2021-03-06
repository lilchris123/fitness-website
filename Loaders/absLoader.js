//this fuction will create a unordered html list of all our exersices loaded from the json file
function exerciseList(data) { 
    var ul = document.getElementById("list"), str;
    
    for (var i=0; i<data.abs.length; i++)
        {
            str=data.abs[i].Exercise;
            var li= document.createElement("li");  //create a new item for the list
            li.setAttribute("id",i);
            var b=document.createElement("button");
            $(b).addClass("textClickable");
            $(b).text(str);
            //set the item to the ith exercise from our json database
            li.appendChild(b);
            ul.appendChild(li); // add that item to the unordered list
        }
}

function exerciseLoader(data){
    
    $(document).ready(function(){
    $(".exercises li").click(function(){
    var listNum= $(this).attr("id");
    $("h2").text(data.abs[listNum].Exercise);
    
        if(!$("#desc").length)
            {
         var h3=document.createElement("h3");
        h3.innerHTML=data.abs[listNum].Descriptions;
        $(h3).attr({"id":"desc","style":"text-align: center"});
        $(h3).appendTo("#gen");
            }
        else
            {
                var h3=document.getElementById("desc");
        h3.innerHTML=data.abs[listNum].Descriptions;
        $("#desc").replaceWith(h3);
            }
    
        if($("iframe").length==0)
            {
                var v=document.createElement("iframe"); 
                $(v).attr({"style":"text-align: center","width":760,"height":505,"src":data.abs[listNum].link,"frameborder":0,"allowfullscreen":0});
                $(v).appendTo("#gen");
            }
        else{
            var v=document.getElementsByTagName("iframe"); 
            $(v).attr({"style":"text-align: center","width":760,"height":505,"src":data.abs[listNum].link,"frameborder":0,"allowfullscreen":0});
            $("iframe").replaceWith(v);
        }
            
    });
});
    
    
}
$.getJSON("/api/database/abs",function(data){

    exerciseList(data);
    exerciseLoader(data);
    
});
