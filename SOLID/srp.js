// SINGLE RESPONSIBILITY PRINCIPLE

// This principle suggests that every class has to possess a single responsibility. For example, we could have add methods to the 
// Journal class for saving and writing the files but this will generate a second responsibility for Journal class which we should 
// avoid if we wanna stick to Single Responsibility Principle.

const fs = require('fs');

class Journal {
    constructor(){
        this.entries = {}
    }

    addEntry(text){
        let c = ++ Journal.count;
        let entry = `${c} ${text}`;
        this.entries[c] = entry;
        return c;
    }

    removeEntry(index){
        delete this.entries[index]
    }

    toString(){
        return Object.values(this.entries).join('\n')
    }
}

Journal.count = 0

class PersistenceManager {
    saveToFile(journal, filename){
        fs.writeFileSync(filename, journal.toString())
    }
}

// let j = new Journal();
// j.addEntry('I cried today.');
// j.addEntry('I ate a bug.');
// console.log(j.toString());

// let p =new PersistenceManager();
// let filename = 'c:/temp/journal.txt';
// p.saveToFile(j, filename);


