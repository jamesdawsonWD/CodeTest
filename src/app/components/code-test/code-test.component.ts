import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import IMap from '../../models/map';
import { BlobStreamer, bytes } from '../../helpers/FileStreamer';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})


export class CodeTestComponent {

  public file: File;

  public anagrams: IMap<Array<string>> = {};
  public fileForm = new FormGroup({
    file: new FormControl(),
  });


  // HELPERS

  // sorts strings, splits into array and transforms to lower case
  private sortAndSplitWord = (word: string): Array<string> => word.split('').sort();

  constructor() {

  }

  public fileChanged(e): void {
    this.file = e.target.files[0];
  }

  public  onSubmit() {

    this.fileSize = this.file.size;
    console.log(this.readFileByChunk(this.file));
  }


  public async readFileByChunk(file) {

    // post to s3

    this.readBlockAsArrayBuffer();
  }

  public readBlockAsArrayBuffer(length: bytes = this.chunkSize) {

    const enc = new TextDecoder('utf-8');

    fetch('./../../assets/example2.txt')
      // Retrieve its body as ReadableStream
      .then(response => {
        const reader = response.body.getReader();
        let result = [];
        let charsReceived = 0;

        reader.read().then(function processText({ done, value }) {
          // Result objects contain two properties:
          // done  - true if the stream has already given you all its data.
          // value - some data. Always undefined when done is true.
          if (done) {
            console.log('Stream complete');
            console.log(result);
            return;
          }
          // value for fetch streams is a Uint8Array
          charsReceived += value.length;
          const chunk = enc.decode(new Uint8Array(value)).split('\n');
          result = [...result, ...chunk];

          
          // Read some more, and call this function again
          return reader.read()
          .then(processText);
        }) ;
        return result;
      }

      )
  }



  private parseChunkToAnagramMap(chunk: Array<string>): IMap<Array<string>> {
    const map: IMap<Array<string>> = {};

    for (const line of chunk) {

      if (!Object.keys(map).length) { map[line] = []; continue; }

      for (const key of Object.keys(map)) {
        if (this.isAnagram(key, line)) { map[key] = [...map[key], line]; break; }
        else { map[line] = []; }
      }
    }

    return map;
  }

  /**
   * Compares two strings and eqaluates if they are an anagram of eachother
   * @param string1 the first string
   * @param string2 the second string
   * @returns True or false depending on if it passed
   */
  private isAnagram(string1: string, string2: string): boolean {


    const str1 = this.sortAndSplitWord(string1);
    const str2 = this.sortAndSplitWord(string2);

    // if strings are not equal length they are not anagrams
    if (string1.length !== string2.length) { return false; }

    // create letterMap that will count the numbers of letters
    const letterMap = {};

    // parse through first string, if letter exists - increment
    for (const letter of str1) {
      letterMap[letter] = Object.keys(letterMap).includes(letter) ? letterMap[letter] += 1 : 1;
    }

    // parse through second string, if letter exists - decrement
    for (const letter of str2) {
      letterMap[letter] = Object.keys(letterMap).includes(letter) ? letterMap[letter] -= 1 : -1;
    }

    // if any key has a value less than zero it is not an anagram
    for (const key in letterMap) {
      if (letterMap[key] < 0) { return false; }
    }
    return true;
  }


}
