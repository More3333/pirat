$("#but2").click(f4)
 function f4() {
        let n = $('input').val()
        if (n==5){
            $('h2').text("угадали число")
        }
        else if( (n>5)&&(n<100)){
            $('h2').text("слишком много")
        }
        else {
            $('h2').text("слишком мало")
        }
    }