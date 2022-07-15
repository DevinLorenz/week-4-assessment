module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    

    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.','A dubious friend may be an enemy in camouflage.','A faithful friend is a strong defense.','A fresh start will put you on your way.','A friend asks only for your time not your money.'];

        let fortIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[fortIndex];

        res.status(200).send(randomFortunes);
    },

    addCompliment: (req, res) => {
        const { compliments } = req.body;
        
    }
}