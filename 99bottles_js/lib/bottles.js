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
            const numContainer = this.numberOfContainer(num);
            const lastContainer = this.numberOfContainer(num-1);

            const verse =
            `${num} ${numContainer} of beer on the wall, ` +
            `${num} ${numContainer} of beer.\n` +
            ((num === 1) ? `Take it down and pass it around, no more bottles of beer on the wall.\n` : `Take one down and pass it around, ${num-1} ${lastContainer} of beer on the wall.\n`);
            return verse;
        }
    }

    numberOfContainer(givenNum) {
        return (givenNum === 1) ? 'bottle' : 'bottles';
    }

    verses(from, to) {
        const nums = downTo(from, to);
        return nums.map(num => this.verse(num)).join('\n');
    }

    song(){
        return this.verses(99, 0);
    }

}