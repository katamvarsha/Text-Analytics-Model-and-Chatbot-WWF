import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const updateState = (botMessage) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        updateState(botMessage)
    };

    const handleChangePersonalInfo = () => {
        const botMessage = createChatBotMessage('It belongs to group 1: Change Personal Information');
        updateState(botMessage)
    };

    const handleChangeSolicitation = () => {
        const botMessage = createChatBotMessage('It belongs to group 2: Change Solicitation Preferences');
        updateState(botMessage)
    };

    const handleDonationQuestion = () => {
        const botMessage = createChatBotMessage('It belongs to group 3: Donation Question');
        updateState(botMessage)
    };

    const handleMailedInfo = () => {
        const botMessage = createChatBotMessage('It belongs to group 4: Mailed Info');
        updateState(botMessage)
    };

    const handleBenefitUpdate = () => {
        const botMessage = createChatBotMessage('It belongs to group 5: Benefit Update');
        updateState(botMessage)
    };

    const handleBenefitIssue = () => {
        const botMessage = createChatBotMessage('It belongs to group 6: Benefit Issue');
        updateState(botMessage)
    };

    const handleMemberInquiry = () => {
        const botMessage = createChatBotMessage('It belongs to group 7: Member Inquiry');
        updateState(botMessage)
    };

    const handleRefund = () => {
        const botMessage = createChatBotMessage('It belongs to group 8: Refund');
        updateState(botMessage)
    };

    const handleRenewalIssue = () => {
        const botMessage = createChatBotMessage('It belongs to group 9: Renewal Issue');
        updateState(botMessage)
    };

    const handleSustainerRequest = () => {
        const botMessage = createChatBotMessage('It belongs to group 10: Sustainer Request');
        updateState(botMessage)
    };

    const handleOrderEnquiry = () => {
        const botMessage = createChatBotMessage('I see that you need help with your order. Please tap on a topic below',
            {
                widget: 'orderOptions',
            });
        updateState(botMessage)
    };

    const handleDonations = () => {
        const botMessage = createChatBotMessage('Thank you for your generous support! We appreciate your commitment to making a difference. We offer various options for your convenience:',
            {
                widget: 'donationOptions',
            });
        updateState(botMessage)
    };

    const handleMailing = () => {
        const botMessage = createChatBotMessage("To remove your name from our mailing list or reduce mail, email us at membership@wwfus.org or click Ask a Question above. Please provide your name, address, and desired mail frequency. Changes may take up to 6 weeks. You can still donate online at website or call 1-800-960-0993. Thank you!"
        );
        updateState(botMessage)
    }

    const handleContact = () => {
        const botMessage = createChatBotMessage("I'm sorry, but I'm not quite sure I understand your question. Our customer service team will be happy to assist you further. Thank you for your understanding.",
        {
            widget: 'contactOptions',
        });
        updateState(botMessage)
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleOrderEnquiry,
                        handleDonations,
                        handleMailing,
                        handleRefund,
                        handleChangePersonalInfo,
                        handleDonationQuestion,
                        handleContact
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;