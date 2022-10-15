
$("#todolist").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){$(this).remove();});
    event.stopPropagation();
});

    $("input[type=text]").on("keypress",function(event){
        
        if(event.which === 13){     
                                var list = $(this).val();
                                if(list === ''){
                                                alert("write something");
                                                }
                                else{
                                        $(this).val("");
                                        $("ul").append("<li>"+"<span>" + "<i class='fa-solid fa-trash'></i>" +"</span> " + list + "</li>");
                                    }
                            }
                        });




  