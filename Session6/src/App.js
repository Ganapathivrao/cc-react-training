import logo from './logo.svg';
import './App.css';
import User from './User';

function App() 
{	
const list = ['bike','car','train','bus'];

return (
    <>
          <h1>Hello Cognitive Clouds Interns!</h1>
		  <ul>
			<li>{list[0]}</li>
			<li>{list[1]}</li>
			<li>{list[2]}</li>
			<li>{list[3]}</li>
		  </ul>
		  <div>
            <User></User>
		  </div><br/>
		   <table border="3" id="myTable">
		      <tr>
		      <th>Veg</th>
		      <th>Non-Veg</th>
		      </tr>
		      <tr>
		      <td>Dal</td>
		      <td>Fish</td>
		      </tr>
		      <tr>
		      <td>Rice</td>
		      <td>Meat</td>
		      </tr>
           </table>

    </>
 
);
}


export default App;
