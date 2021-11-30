import React,{useState,useEffect} from 'react';
import Axios from 'Axios';
import Form from '../lib/Forms';
import { Button } from 'react-native';


function Axios (props) {
    const [user, setUser] = useState({}); 
   useEffect(()=>{

       async function Create() {
      

            const result = await Axios({
                method:"GET",
                url: "http://localhost3000",
                data: [id]
                
            });
            setUser(result.data);
    
        } 

        Create();
       
    }, []);
    
           
    

  
let isActivity = true;




//   const isLogin = 1;

//   if (isLogin === 1 || isLogin=== 0) {
//        return (
//            <Form/>
//        );
       
//    }else{
//        return(
//          undefined
//         );
//    }

//    let   isLoggedOut = true
   
//    if ( isLoggedOut === true) {
//     return (
//         <Form/>
//     );
    
// }else{
//     return(
//       undefined
//      );
// }


   


return (
    <View>
      
        {isActivity ===true?<Button>Login</Button>:<Button>Logout</Button>}
    </View>
);

}


   


   
    
  


export default Axios;

