export interface VocabularyResponse {
    vocabulary: VocabularyItem[];
  }

  export interface VocabularyItem {
    Term: string;
    meaning: string;
    Pronounce: string;
    SampleSentences: string[];
  }