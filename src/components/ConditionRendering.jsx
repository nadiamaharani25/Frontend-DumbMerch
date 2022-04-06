import React, { useState } from 'react';

//Create Component CustomerPage
function CustomerPage(props) {
    return (
        <div>
            <h1>Welcome</h1>
            <button onClick={props.logout}>Logout</button>
        </div>
    );
}


//Create Component AdminPage

function AdminPage(props) {
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={props.login}>Login</button>
        </div>
    );
}


function ConditionRendering() {
    //init State
    const [isLogin, setIsLogin] = useState(false);

    return (
        // Code Inside div
        <div>
            {isLogin ? (
                <CustomerPage logout={() => setIsLogin(!isLogin)} />
            ) : (
                <AdminPage login={() => setIsLogin(!isLogin)} />
            )}
        </div>
    );
}

export default ConditionRendering