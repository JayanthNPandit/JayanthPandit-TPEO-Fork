var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

const longestString = (arr) => {
    let longest = ""
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length > longest.length)
        {
            longest = arr[i]
        }
    }
    return longest
}

const recArea = (l, w) => l*w

const displayLibrary = (library) => {
    for (let i = 0; i < library.length; i++)
    {
        console.log(library[i])
    }
}

console.log(longestString(["Hello", "World", "Jayanth"]))
console.log(recArea(5, 6))
displayLibrary(library)
