import { useState } from 'preact/hooks';

let lastNum = -1;

export default function RandomFact({messages}) {


    const randomMessage = () => 
    {
        let result = Math.floor(Math.random() * messages.length);

        while(result == lastNum)
        {
            result = Math.floor(Math.random() * messages.length);
        }

        lastNum = result;
        
        
        return messages[(result)];
    }

    const [greeting, setGreeting] = useState(randomMessage());
    

    return (
        <div style="text-align: center;">
            <div class="human-facts">
                <p>
                    <b>{greeting}</b>
                </p>
            </div>
            <button class="button" style="margin-top: 30px" onClick={() => setGreeting(randomMessage())}>
                Re-fact
            </button>
        </div>
    );
}