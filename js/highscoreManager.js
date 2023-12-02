const key = "HS";

const highscoreManager = {
    read: () => JSON.parse(localStorage.getItem(key)),
    write: (s) => {
        const d = highscoreManager.read() || []
        d.push(s);
        localStorage.setItem(key, JSON.stringify(d));

    },
    clear: () => localStorage.clear(),
};

const Score = (name, score) => ({ name: name, score: score });
export default highscoreManager 

export { Score };
