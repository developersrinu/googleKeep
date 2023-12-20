import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { FlagContext } from './ContextProvider';


function Input() {

  const {filterItemName, setFilterItemName} = useContext(FlagContext);
  return (
    <>
      <Form.Control type="text" placeholder="search by title"  style={{margin:'15px'}} onChange={(e)=>setFilterItemName(e.target.value)}/>
    </>
  

  );
}

export default Input;