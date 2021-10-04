import { useState } from "react";

function Pack(){
const searchState = useState("");
const searchTerm = searchState[0];
const setSearchTerm = searchState[1];

const searchState1 = useState("")
const searchTerm1 = searchState1[0];
const setSearchTerm1 = searchState1[1];

function myFunction(e){
setSearchTerm(e.target.value);
}

function myFun1(e){
setSearchTerm1(e.target.value);
}

function finalSub(){
var a = document.getElementById("phone").value;
var b = document.getElementById("radio").value;
var c = document.getElementById("radio1").value;
if (document.getElementById("radio").checked){
    alert(`you entered number is ${a} and select ${b}`);
}
else if(document.getElementById("radio1").checked) {
    alert(`you entered number is ${a} and select ${c}`);
}
else {
    alert('Please select and submit!!');
}
}

return(
    <>
      <div className="container">
        <p>Search For <strong>{searchTerm} and {searchTerm1}</strong> </p>
        <label ForName="phone">Phone Number:</label>
        <input type="number" name="phone" id="phone" onChange={myFunction} /><br/>
        <p>Has data pack:</p>
        <input type="radio" id="1" name="fav" id="radio" value="Yes" onChange={myFun1} />
        <label ForName="1">Yes</label><br/>
        <input type="radio" id="2" name="fav" id="radio1" value="No" onChange={myFun1}  />
        <label ForName="2">No</label><br/>
        <input type="submit" name="submit" value="Submit" id="btn" onClick={finalSub} />
      </div>
    </>
);
}
export default Pack;