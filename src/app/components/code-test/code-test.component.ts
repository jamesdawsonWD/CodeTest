import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import IMap from '../../models/map';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})


export class CodeTestComponent {

  public file: File;
  public data;
  public anagrams: IMap<string[]> = {};
  public fileForm = new FormGroup({
    file: new FormControl(),
  });


  // HELPERS

  // sorts strings, splits into array and transforms to lower case

  constructor(private httpService: HttpService, private router: Router) {
  }

  public fileChanged(e): void {
    this.file = e.target.files[0];
  }

  public onSubmit(): void {

    this.httpService.putBucket(this.file).subscribe((response) => { console.log(response));
  }


  // public readAndPost(reader) {
  //   const enc = new TextDecoder('utf-8');
  //   let result = [];
  //   let charsReceived;
  //   const self = this;
  //   reader.read().then(function processText({ done, value }) {

  //       // Result objects contain two properties:
  //       // done  - true if the stream has already given you all its data.
  //       // value - some data. Always undefined when done is true.
  //       if (done) {
  //         self.httpService.postItem(result).subscribe((res) => console.log(res));
  //         return;
  //       }

  //       charsReceived += value.length;

  //       // value for fetch streams is a Uint8Array and needs decoded
  //       const chunk = enc.decode(new Uint8Array(value)).split('\n');

  //       result = [...result, ...chunk];

  //       // Read some more, and call this function again
  //       reader.read().then(processText); // FIXME: This is shocking

  //     });
  //   }

  // public readFileByChunk(file) {
  //   this.fetchAndReadFile()
  //     .then((response) => response.body.getReader())
  //     .then((reader) => this.readAndPost(reader));
  // }

  // public fetchAndReadFile() {
  //   return fetch('./../../assets/example2.txt');
  // }

  // /**
  //  *  Parses over the passed in chunk and eqaluates each new line
  //  *  If the line is an anagram of a key in the map then as it to that keys value
  //  *  If the value does not map to a key then we add a new key called that value
  //  * @param chunk 
  //  */
  // private parseChunkToAnagramMap(chunk: string[]): IMap<string[]> {
  //   const map: IMap<string[]> = {};

  //   for (const line of chunk) {

  //     if (!Object.keys(map).length) { map[line] = []; continue; }

  //     for (const key of Object.keys(map)) {
  //       if (this.isAnagram(key, line)) { map[key] = [...map[key], line]; break; }
  //       else { map[line] = []; }
  //     }
  //   }
  //   return map;
  // }

  // /**
  //  * Compares two strings and evaluates if they are an anagram of eachother
  //  * @param string1 the first string
  //  * @param string2 the second string
  //  * @returns True or false depending on if anagram
  //  */
  // private isAnagram(string1: string, string2: string): boolean {


  //   const str1 = this.sortAndSplitWord(string1);
  //   const str2 = this.sortAndSplitWord(string2);

  //   // if strings are not equal length they are not anagrams
  //   if (string1.length !== string2.length) return false;

  //   // create letterMap that will count the numbers of letters
  //   const letterMap = {};

  //   // parse through first string, if letter exists - increment
  //   for (const letter of str1) {
  //     letterMap[letter] = Object.keys(letterMap).includes(letter) ? letterMap[letter]++ : 1;
  //   }

  //   // parse through second string, if letter exists - decrement
  //   for (const letter of str2) {
  //     letterMap[letter] = Object.keys(letterMap).includes(letter) ? letterMap[letter]-- : -1;
  //   }

  //   // if any key has a value less than zero it is not an anagram
  //   for (const key in letterMap) {
  //     if (letterMap[key] < 0) { return false; }
  //   }
  //   return true;
  // }


}
