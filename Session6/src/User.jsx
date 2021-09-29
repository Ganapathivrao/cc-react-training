function User(){
return (
    <>
        <form>
        <label ForName="user">UserName</label>
        <input type="text" maxLength={10} minLength={4}  name="user" id="user"  required /><br/>
        <br></br>
        <label ForName="email">Email</label>
        <input type="email" required id="email"  pattern=".+@gmail.com" /><br/>
        <br></br>
        <label ForName="phone">Phone</label>
        <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" maxLength={10} minLength={10} id="phone"  required /><br/>
        <br></br>
        <button onClick={handleButton} type="submit">Submit</button>
        </form>
    </>
);
}
export default User;

function handleButton(e){
   let p = document.getElementById('user').value;
   let q = document.getElementById('email').value;
   let r = document.getElementById('phone').value;
   console.log(p);
   console.log(r);
   console.log(q);
}


