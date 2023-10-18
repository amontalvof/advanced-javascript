const a = 10;

function outer() {
    const b = 20;

    function inner() {
        const c = 30;
        console.log(a, b, c);
    }

    inner();
}

module.exports = { outer };