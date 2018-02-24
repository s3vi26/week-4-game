// ids = "random-number", "display-message", "win-counter", "loss-counter", "gem-1", "gem-2", "gem-3", "gem-4", "total-score"

$( document ).ready(function () {

    var game = {
        total_score: 0,
        wins: 0,
        losses: 0,
        random_number: "",
        current_score: "",
        start:
            function start(){
                var random_number_array = [20,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
                var random_gem_array = [1,2,3,4,5,6,7,8,9]
                this.random_number  = random_number_array[Math.floor(Math.random() * random_number_array.length)];              
                $("#gem-1").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
                $("#gem-2").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
                $("#gem-3").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
                $("#gem-4").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
                $("#random-number").html(this.random_number)
                $("#total-score").html(0);
                $("#win-counter").html(0);
                $("#loss-counter").html(0);
            },     
    }

    function reset () {
        var random_number_array = [20,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
        var random_gem_array = [1,2,3,4,5,6,7,8,9]
        $("#gem-1").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#gem-2").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#gem-3").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#gem-4").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        $("#total-score").html(0);
        game.total_score = $("#total-score").html()
        game.random_number  = random_number_array[Math.floor(Math.random() * random_number_array.length)];              
        $("#random-number").html(game.random_number) 
    }

    function add_jewel_values(value) {
        game.total_score = (game.total_score*1) + (value*1)
        $("#total-score").html(game.total_score)
        compare(value)
    }

    function compare() {
        if (game.total_score === game.random_number) {
            $("#win-counter").html(game.wins+1);
            reset()
        }
        else if (game.total_score > game.random_number) {
            $("#loss-counter").html(game.losses+1);
            reset()
        } 
    }
function add(a,b){
    game.wins
}
   






    $("#gem-1").on("click", function get_jewel_values() {
        var value = $("#gem-1").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    $("#gem-2").on("click", function get_jewel_values() {
        var value = $("#gem-2").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    $("#gem-3").on("click", function get_jewel_values() {
        var value = $("#gem-3").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    $("#gem-4").on("click", function get_jewel_values() {
        var value = $("#gem-4").attr("value")
        add_jewel_values(value)
        console.log(value)
    })
    
game.start()
})