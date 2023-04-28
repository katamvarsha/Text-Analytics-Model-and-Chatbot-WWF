import React from 'react';

// greets
// orders
// monthly donation
// remove mailing

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        message = message.toLowerCase()
        if (message.includes('order')) {
            actions.handleOrderEnquiry();
        } else if ((message.includes('cancel') && (message.includes('membership') || message.includes('donation') || message.includes('donating'))) || message.includes('refund')){
            actions.handleRefund();
        } else if ((message.includes('change') || message.includes('update')) && (message.includes('mail') || message.includes('address') || (message.includes('name')))){
            actions.handleChangePersonalInfo();
        } else if ((message.includes('donation') || (message.includes('adopt')))) {
            actions.handleDonationQuestion();
        } else {
            actions.handleContact();
        }
        // }  else if (message.includes('monthly') || message.includes('donation')) {
        //     actions.handleDonations();
        // } else if ((message.includes('mail') || message.includes('mailing')) && message.includes('remove')) {
        //     actions.handleMailing();
        // } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        //     actions.handleHello();
        // }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;