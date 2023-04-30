import { Component, OnInit } from '@angular/core';
import { Vocabulary } from '../model/vocabulary.model';
import { VocabularyService } from '../services/vocabulary.service';

@Component({
  selector: 'app-pte',
  templateUrl: './pte.component.html',
  styleUrls: ['./pte.component.scss']
})
export class PteComponent implements OnInit {

  vocabulary: Vocabulary[] = [];
  currentIndex = 0;
  currentObject?: Vocabulary;

  constructor(private vocabularyService: VocabularyService) { }

  ngOnInit(): void {
    this.vocabularyService.getVocabulary().subscribe(vocabulary => {
      this.vocabulary = vocabulary;
      this.currentObject = this.vocabulary[0];
    });
  }

  onNext(): void {
    // Increment the current index, and set the current object to the next object in the array
    this.currentIndex++;
    this.currentObject = this.vocabulary[this.currentIndex % this.vocabulary.length];
  }

}