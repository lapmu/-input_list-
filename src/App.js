import './App.css';
import { useState, useEffect } from 'react';
import Input from './components/input';
import List from './components/list';
import memo from './data/dummy';

function App() {
  const [isMemo, setMemo] = useState(memo)

  useEffect(()=>{
    const localMemo = localStorage.getItem('memo')
    const parseMemo = JSON.parse(localMemo)

    if(parseMemo){
      setMemo(parseMemo)
    }
  }, [])

  const addMemo = (Id, Email, content) => {
  /*
memo = [
    {
        'Id' : Id
        'Email' : ~~~~
        'content' : ~~~~
    }
]
*/  
  const newMemo = {
    Id,
    Email,
    content
  }

  const data = [...isMemo, newMemo]
  setMemo(data)

  const stringMemo = JSON.stringify(data)
  localStorage.setItem('memo', stringMemo)

  }

  return (
    <div>
      <Input addMemo={addMemo}/>
      <List isMemo={isMemo}/>
    </div>
  );
}

export default App;
