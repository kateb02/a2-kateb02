// Add some Javascript code here, to run on the front end.

//getElementById returns element object, 
//element->node->eventTarget
//element inherits properties from Node 

//document.getElementById("dataTable").appendChild(childNode);


const appdata = [
  { 'model': 'toyota', 'year': 1999, 'mpg': 23 },
  { 'model': 'honda', 'year': 2004, 'mpg': 30 },
  { 'model': 'ford', 'year': 1987, 'mpg': 14} 
]

    const dummyAppData = ["postOne", "postTwo", "postThree"]
   
    //later: change stringToAdd to work with JSON
    //this is not called anywhere but when I sumbit with it uncommented, it throws error
    function passNewPost(){
      const slotList = document.querySelectorAll(".slot")
      //s is an index
      for (const s = 0; s < slotList.length; s++){
        if(slotList[s].length === 0){
          console.log("found empty slot at index: " , s , "in slotList")
        }
        else{console.log("slot " , s , " : contents: ", slotList[s])}
      }
    }
