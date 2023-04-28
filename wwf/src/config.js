import { createChatBotMessage } from 'react-chatbot-kit';
import LinkedList from "./components/LinkedList/LinkedList";
import {orderOptions} from "./components/OrderOptions/OrderOptions";
import {donationOptions} from "./components/DonationOptions/DonationOptions";
import {contactOptions} from "./components/ContactOptions/ContactOptions";

const botName = 'Chatbot';
const config = {
    initialMessages: [createChatBotMessage(`Hello! Welcome to World Wildlife Fund, and thanks for visiting. How can I help you today?`)],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
    widgets: [
        {
            widgetName: "orderOptions",
            widgetFunc: (props) => <LinkedList {...props} />,
            props: {
                options: orderOptions
            }
        },
        {
            widgetName: "donationOptions",
            widgetFunc: (props) => <LinkedList {...props} />,
            props: {
                options: donationOptions
            }
        },
        {
            widgetName: "contactOptions",
            widgetFunc: (props) => <LinkedList {...props} />,
            props: {
                options: contactOptions
            }
        }
    ],
};

export default config;