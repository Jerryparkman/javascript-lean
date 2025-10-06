// Imediately invoked function expression(IIFE)

// Normal function
function chaiOne(){
    console.log(`DB connected`);
};
chaiOne();


// Imediately invoked function

(
    function chaiTwo(){
        console.log(`DB connected Two`);
    }
)();

(
    (name) =>{
        console.log(`DB connected ${name}`)
    }
)("Satrohan sharma");