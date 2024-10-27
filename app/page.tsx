'use client';
import {useState } from 'react';
import {runAi} from '@/actions/ai'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardHeader, CardContent} from '@/components/ui/card';
export default function Page() { 
  
  
  const [response, setResponse] = useState('');
  const [loading, setLoading] =useState(false);
  const [query, setQuery] = useState("");

  const handleClick = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await runAi(query);
      setResponse(data);
    } catch (err ) {
      console.error(err);
    }finally {
      setLoading(false);
    }
  };
 
  return (
    <div className='m-5'>
      <form onSubmit={handleClick}>
        <input
          className='mb-5' placeholder='Ask anything' value={query} onChange={e => setQuery(e.target.value)}
        />
        <Button>Generate with Ai</Button>
      </form>
      <Card className='mt-5'>
        <CardHeader>Ai Response</CardHeader>
        <CardContent>
          {loading ? <div>loading...</div> : <div>{response}</div>}
        </CardContent>
      </Card>
    </div>
  );
}  