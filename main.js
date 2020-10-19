// eslint-disable-next-line strict
function main() {
    $('#number-chooser').on('submit', function(evt){
        evt.preventDefault(); // stop form from submitting
        // console.log(evt)
        let number = $('#number-choice').val(); // get value from text box
        // console.log(number);
        for (let i = 0; i<=number; i++) {
            // if i divisible by 3: fizz
            if(i%3===0){
                console.log('fizz');
            }
            
            // if i divisible by 5: buzz
            else if(i%5===0) {
                console.log('buzz');
            
                // if i divisible by both: fizzbuzz

            }
            else if (i%3===0 && i%5===0) {
                console.log('fizzbuzz');
            }
            else {
                console.log(i);
            }


        }
        
    })





}

$(main);
