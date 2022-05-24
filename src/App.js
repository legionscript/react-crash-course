import Form from './components/Form'
import { useEffect, useContext } from 'react'
import Context from './context/Context'


function App() {
  const propText = 'Example text'

  const { num, saveNumber } = useContext(Context) 

  useEffect(() => {
    console.log(num)
    saveNumber(400)
    console.log(num)
  }, [num, saveNumber])

  return (
    <Form text={propText} />
  );
}

export default App;
