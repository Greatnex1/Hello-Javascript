
let allTimes = { 'first' : 'information Society',
                   'second' : 'Hack',
                 'third' : 'Peace and Love'
}


function groupBand(albums){
    console.log("Album List")
    console.log('first :', albums.first)
    console.log('second :', albums.second)
    console.log('third :', albums.third)
    console.groupEnd()
}
document.addEventListener("DOMContentLoaded", () =>{
    groupBand(allTimes)
});