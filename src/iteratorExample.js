const obj = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                step++;
                if (step === 1) {
                    return {
                        value: "Hello",
                        done: false,
                    };
                } else if (step === 2) {
                    return {
                        value: "World",
                        done: false,
                    };
                }
                return {
                    value: undefined,
                    done: true,
                };
            },
        };
        return iterator;
    },
};

for (const iterator of obj) {
    console.log(iterator);
}