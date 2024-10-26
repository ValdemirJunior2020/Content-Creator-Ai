'use client';
import {useState } from 'react';
import {runAi} from '@/actions/ai'
import {Button} from "@/components/ui/button";
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
  <Button onClick={handleClick}>Run Ai</Button>
  <hr />
  <div>{loading ? 'Loading...' : response}</div>
  </>
  );
}
