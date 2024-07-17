class RailFenceCipher {
    static encode(s, n) {
        const railFence = this.makeRailFence(s, n);
        let result = '';

        for (let i = 0; i < n; i++) {
            railFence[i].forEach(c => {
                if (c !== null)
                    result += c;
            });
        }

        return result;
    }

    static decode(s, n) {
        const railFence = this.makeRailFence(s, n);
        let result = '';
        let index = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < railFence[i].length; j++) {
                if (railFence[i][j] !== null)
                    railFence[i][j] = s.charAt(index++);
            }
        }

        let position = [0, 0];
        let step = 1;

        while (result.length !== s.length) {
            if (railFence[position[0]][position[1]] === null) {
                step *= -1;
                position[0] += step;
            }

            result += railFence[position[0]][position[1]];

            if ((position[0] === n - 1 && step === 1) || (position[0] === 0 && step === -1))
                position[1]++;
            else
                position[0] += step;
        }

        return result;
    }

    static makeRailFence(str, n) {
        const railFence = new Array(n).fill().map(() => []);

        let index = 0, step = 1;

        for (let c of str) {
            railFence[index].push(c);

            if ((index === n - 1 && step === 1) || (index === 0 && step === -1)) {
                railFence[index].push(null);
                step *= -1;
            }

            index += step;
        }

        return railFence;
    }
}

