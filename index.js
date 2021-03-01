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
      let indexBase = dnaBases.indexOf(this.dna[randomDna]);

      dnaBases.splice(indexBase, 1);

      let randomBase = Math.floor(Math.random() * dnaBases.length);

      this.dna.splice(randomDna, 1, dnaBases[randomBase]);

      return this.dna;
    },
  };
}

const pAequor = pAequorFactory(1, mockUpStrand());

console.log(pAequor.dna);
console.log(pAequor.mutate());
