'use client';
import {useState } from 'react';
import {runAi} from '@/actions/ai'
export default function Page() { 
  
  
  const [response, setResponse] = useState('');
  const [loading, setLoading] =useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await runAi("write a special 200 words motivational text");
      setResponse(data);
    } catch (err ) {
      console.error(err);
    }finally {
      setLoading(false);
    }
  };
 
  return (
  <>
  <button onClick={handleClick}>Run Ai</button>
  <hr />
  <div>{loading ? 'Loading...' : response}</div>
  </>
  );
}
