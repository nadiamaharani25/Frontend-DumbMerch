import React, { useEffect } from 'react'

export default function GuestGreeting() {
    console.log(() => {
        console.log('Guest Greeting Component Did Mount');
        return () =>
            console.log('Guest Greeting Component Will Mount');
    }, []);

    return (
        <div>GuestGreeting</div>
    )
}
