export class Vocabulary {
    term: string;
    meaning: string;
    pronounce: string;
    sampleSentences: string[];
  
    constructor(term: string, meaning: string, pronounce: string,sampleSentences: string[]) {
      this.term = term;
      this.meaning = meaning;
      this.pronounce = pronounce;
      this.sampleSentences = sampleSentences;
    }
  }