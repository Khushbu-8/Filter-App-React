import Record from './Record';
import { catagory,popular } from './Deta';
import { useState } from 'react';


function App() {
  const [record, setRecord] = useState(popular);

  const FilterData = (cat) => {
    if(cat === "all"){
      setRecord(popular)

    }else{
      let data = popular.filter((item) => item.catagory === cat) ;
      setRecord(data);
    }
  };

  return ( 
   

     <Record  
     catagory={catagory} 
    popular={record}
    FilterBtn={FilterData}
    />

 
  
  )


 
}

export default App;
