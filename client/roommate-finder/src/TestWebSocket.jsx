import React from "react";
import socket from "./socket";

const TestWebSocket = () => {
    const sendTestRequest = () => {
        const testRequest = {
            receiver_ID: "receiverTestID",
            sender_ID: "senderTestID",
            description: "Test request description",
        };
        socket.emit("sendRequest", testRequest); // Simulate sending a request
    };

    const sendTestMessage = () => {
        const testMessage = {
            sender_ID: "senderTestID",
            receiver_ID: "receiverTestID",
            content: "Hello! This is a test message.",
        };
        socket.emit("sendMessage", testMessage); // Simulate sending a message
    };

    return (
        <div>
            <button onClick={sendTestRequest}>Send Test Request</button>
            <button onClick={sendTestMessage}>Send Test Message</button>
        </div>
    );
};

export default TestWebSocket;
