$(document).ready(function(){
    $(".ingredientes").hide();
    $(".preparacion").hide();

    function clickIngredientes(){
        if($(".ingredientes").is(":hidden")){
            $(".ingredientes").show();
        }else{
            $(".ingredientes").hide();
        }
    }

    function clickPreparacion(){
        if($(".preparacion").is(":hidden")){
            $(".preparacion").show();
        }else{
            $(".preparacion").hide();
        }
    }

    $("#opcion1").click(clickIngredientes);
    $("#opcion2").click(clickPreparacion);
});