// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

// Step 3
function pAequorFactory(specimenNum, dna) {
    return {
        specimenNum,
        dna,
        mutate() {
            //Step 4
            let randomDna = Math.floor(Math.random() * 15);
            let dnaBases = ["A", "T", "C", "G"];
            let indexBase = dnaBases.indexOf(this.dna[randomDna]); // Get index of base in dnaBases that match random base in dna.

            dnaBases.splice(indexBase, 1); // Remove matched base in dnaBases

            let randomBase = Math.floor(Math.random() * dnaBases.length); //  Generate a new random base based on the bases left in dnaBases

            this.dna.splice(randomDna, 1, dnaBases[randomBase]); // Remove previous random base in dna and replace it with new random base from dnaBases

            return this.dna; // return new mutated dna
        },
        compareDNA(pAequor) {
            // Step 5
            let count = 0;
            let percentage;
            for (
                let i = 0, j = 0;
                i < this.dna, j < pAequor.dna.length;
                i++, j++
            ) {
                // Compare DNA Bases by location
                if (this.dna[i] === pAequor.dna[j]) {
                    count++; // Find the count of identical DNA bases
                }
            }
            percentage = Math.floor((count / 15) * 100); // Calculate percentage of identical DNA Bases
            console.log(
                `Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common with ${count} identical DNA Bases.`
            );
        }, //Step 6: Function that find element similar to C and G and based on percentage >=60 returns true
        willLikelySurvive() {
            let countSurvive = [];
            countSurvive = this.dna.filter((element) => {
                return element === "C" || element === "G";
            });
            survivePercentage = Math.floor((countSurvive.length / 15) * 100);
            if (survivePercentage >= 60) {
                return true;
            } else {
                return false;
            }
        },
    };
}

const pAequor = pAequorFactory(1, mockUpStrand());

const pAequor2 = pAequorFactory(2, mockUpStrand());

let teamArray = [];

// Step 7: Create array of organism that will likely surive based on percentage of 'C' and 'G' Bases being >= 60%
for (let i = 0; teamArray.length < 30; i++) {
    organism = pAequorFactory(i, mockUpStrand());
    if (organism.willLikelySurvive() === true) {
        teamArray.push(organism);
    }
}
