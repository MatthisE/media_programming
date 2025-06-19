import { downTo } from './helpers';

export class Bottles {

    verse(num) {
        if(num === 0){
            const verse =
            'No more bottles of beer on the wall, ' +
            'no more bottles of beer.\n' +
            'Go to the store and buy some more, ' +
            '99 bottles of beer on the wall.\n';
            return verse;
        }
        else{
            const verse =
            `${this.number(num)} ${this.numberContainer(num)} of beer on the wall, ` +
            `${this.number(num)} ${this.numberContainer(num)} of beer.\n` +
            `Take ${this.pronoun(num)} down and pass it around, ${this.number(num-1)} ${this.numberContainer(num-1)} of beer on the wall.\n`;
            return verse;
        }
    }

    number(num) {
        return (num === 0) ? 'no more' : num;
    }

    numberContainer(num) {
        return (num === 1) ? 'bottle' : 'bottles';
    }

    pronoun(num) {
        return (num === 1) ? 'it' : 'one';
    }

    verses(from, to) {
        const nums = downTo(from, to);
        return nums.map(num => this.verse(num)).join('\n');
    }

    song(){
        return this.verses(99, 0);
    }

}