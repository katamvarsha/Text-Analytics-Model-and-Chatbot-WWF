<a target="_blank" href="https://www.worldwildlife.org/">
    <img src="https://user-images.githubusercontent.com/111586468/235177635-15f4dab0-0176-4a96-98af-108b0ae80460.JPG" height="100" align="right"/>
</a>

# WILD - Developing a Chatbot

As Business Analytics students from The George Washington University, our project involves building a chatbot and text analytics model for our client, the World Wildlife Fund.  

Team members:  Varsha Katam, Pedro Chames Carvalho, Ke Chai, Hao Ren, Priscilla Sit, Alejandra Taboada 

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Executive Summary](#executive-summary)
- [Problem Understanding](#problem-understanding)
- [Data Collection and Pre-processing](#data-collection-and-pre-processing)
- [The Text Analytics Model](#the-text-analytics-model)
- [The Chatbot](#the-chatbot)
- [Recommended Next Steps](#recommended-next-steps)
- [Risk Considerations](#risk-considerations)

## Executive Summary


The goal of our initiative was to create an interactive chatbot platform for World Wildlife Fund that utilizes natural language processing (NLP) and machine learning (ML) algorithms to streamline customer inquiries and ease the burden on the Customer Service team. Our project achieves this by accurately mapping customer queries to one of ten possible topics and providing swift categorisation, which will aid in improved customer service and satisfaction.

Our research revealed that extended wait times, inaccurate query resolution, and website navigation difficulties were the primary challenges faced by WWF. To demonstrate the effectiveness of our topic extraction approach, we created a chatbot that accurately categorizes customer queries into the top ten recurring topics.

## Problem Understanding

WWF needed a comprehensive solution to improve their customer query resolution process and ease the workload of their Customer Service team. We developed a chatbot and a text analytics model that could accurately forecast customer queries by displaying their group. WWF faced significant challenges in managing customer queries and resolving issues in a timely manner due to the reliance on phone and email support. This approach made it difficult to identify recurring queries and pain points of customers, resulting in dissatisfaction and frustration.  

The objective of the project was to build an interactive chatbot platform that reduces the number of recurring queries and provides valuable insights into customer needs and preferences. Addressing these issues could enhance customer satisfaction and loyalty, leading to an improvement in WWF's overall reputation.

## Data Collection and Pre-processing

**1. Data Collection:**   
The dataset of customer inquiries was provided by the World Wildlife Fund in a file named TextAnalytics.csv. It included 15,219 rows and 5 columns, such as the inquiry's full description, submission date and time, unique identifier, and general topic group (10 were given by the client).
Data Cleaning: We used Python to clean the data, ensuring it was consistent, relevant, and error-free. The cleaning process removed irrelevant data (such as greetings and thank-you messages), standardized data by changing capitalization and punctuation, and removed noise (such as stop words, special characters, and HTML). We used 're' and 'nltk' packages for data cleaning.  

**2. Topic Extraction:**   
After cleaning the data, we used SAS Enterprise Miner to identify the top 25 topics in the dataset. These topics formed the basis for developing the interactive chatbot platform. We are continuously refining the topic extraction process to improve the quality of the topics identified. The top five significant areas we identified include   
1. Cancel monthly donation
2. Order status
3. Cancel membership payment
4. Monthly payment status
5. Remove customer mailing list

**3. Data Pre-processing:**  
We pre-processed the data by tokenizing sentences into individual words, performing lemmatization, and removing stop words. This transformed the raw text data into a more structured format suitable for analysis.

## The Text Analytics Model

**Technologies Used for Text Analytics Model** 

![4127a8fef430552efa5474ef78551f1c](https://user-images.githubusercontent.com/131799834/234361104-e40d579a-4e6b-4564-96b6-72f292b16b80.png)

We then proceeded to create the Text Analytics model. 

1. We wanted to create a model that accurately predicts the Group of a customer inquiry based on its content. To do this, we used SAS Enterprise Miner. 
2. Secondly, we used the Model Comparison feature of SAS to find the most accurate model. 
3. Finally, we utilized the Score feature of the software so the model displays the probability that a customer inquiry is about a specific Group and assigns it the most probable one.

**Results for the Text Analytics Model**

![f87f5cf4c24df6134268d5c44c9d81e8](https://user-images.githubusercontent.com/131799834/234364191-b20b8d69-8cb2-4d72-bc67-642682387700.png)

Using the Model Comparison feature, we compared a neural network, decision tree, and regression model to see which would more reliably predict the topic of a customer inquiry based on its contents. 

Out of those three, the regression was the most accurate model, featuring a KS-statistic of 0.133 and a KS probability cutoff of 0.295.

![0af12daaf2fbd84b95832d344ba6025f](https://user-images.githubusercontent.com/131799834/236341133-65181bef-0774-4e8e-836b-9b529298ca70.png)

The text analytics model uses the Score node to identify the Group of a customer inquiry. The results are displayed above.

As an example, TextTopic_raw4 includes the combination of keywords "donor+refund+description". When the model identifies it in an inquiry, it has a 22.22% chance of it being labeled as Benefit Update, Benefit Issue, or Member Inquiry. In the case of a tie, it breaks the tie by assigning it one of the most probable Groups.

The full documentation of the model and the scoring results can be found in the Appendix.

## The Chatbot
### Technologies Used For Chatbot   

<img src="https://user-images.githubusercontent.com/111586468/234165654-b69db93d-b3af-4a57-b831-a4a254fc668c.JPG" width="100"> <img src="https://user-images.githubusercontent.com/111586468/234165920-1ed5b7ed-bc11-40c9-a2ab-7361a5b050ac.JPG" width="100"> <img src="https://user-images.githubusercontent.com/111586468/234166076-f3e1a5d8-788b-46fb-bc04-7aa7c8a260f1.JPG" width="100"> <img src="https://user-images.githubusercontent.com/111586468/234166189-98c28951-7cdc-4f81-8d90-3c3d19973ea2.JPG" width="100">   

1. **[Webstorm Integrated Development Environment (IDE)](https://www.jetbrains.com/webstorm/)**.   
2. **[Node JS framework](https://nodejs.org/en)**, which is an open-source framework that allows developers to build scalable and high-performance applications using JavaScript.   
3. **[NPM (Node Package Manager)](https://www.npmjs.com/)** to manage and install all the dependencies required for our chatbot.  
4. **JavaScript** with the **[ReactJS](https://react.dev/)** library, which is a popular front-end development library that provides a component-based approach to building user interfaces.   
5. Customized and configured the **[react-chatbot-kit](https://fredrikoseberg.github.io/react-chatbot-kit-docs/)**, which is an open-source library that provides a framework for building chatbots using ReactJS. This allowed us to build a chatbot platform that was both user-friendly and effective in resolving customer queries.  

<!-- GETTING STARTED -->
## Getting Started

1. Go to the official Node.js [website](https://nodejs.org/en/)
2. Select the appropriate installer for your operating system (Windows, macOS, or Linux) and download it.
4. Once the installer has finished downloading, run it and follow the on-screen instructions to install Node.js.
5. After the installation is complete, open a terminal or command prompt and type "node -v" to verify that Node.js has been installed correctly. You should see the version number of Node.js printed to the console.
5. Next, type "npm -v" to verify that npm (Node Package Manager) has also been installed. You should see the version number of npm printed to the console.

## Installation

1. Clone the repo using HTTPS or SSH
   ```sh
   $ git clone https://github.com/katamvarsha/chatbot.git
   $ git clone git@github.com:katamvarsha/chatbot.git
   ```
2. Install NPM packages and node modules 
   ```sh
   $ npm install
   ```
3. Install react-chatbot-kit 
   ```sh
   $ npm install react-chatbot-kit
   ```
## Configuration  
For further details and information regarding React Chatbot Kit, please refer to the official [documentation](https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/).

### MessageParser  
The parse function of MessageParser is utilized to process each user message.   
This function includes a set of rules that determine the action to be initiated.

```sh

const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        message = message.toLowerCase()
        if (message.includes('hello')) {
        actions.handleHello()
        }
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

```

### ActionProvider   
After defining the ruleset, the next step is to develop an action that can be activated. It should be designed to carry out a specific task or response based on the user's input. Depending on the context and purpose of the program, the action can take various forms such as a displaying a message or executing a function. 

```sh

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
    
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello
                    },
                });
            })}
        </div>
    );
};

```

## Usage
To start the interactive chatbot, simply run $ npm start. This will open the development server at http://localhost:3000/.
 ```sh
   $ cd wwf
   $ npm start
   ```
<img src="/demo/chatbot_demo.gif" height="470"/>     
   
| Key Words        | Example Prompts from WWF Dataset           | Group  |
| ------------- |:-------------:| -----:|
| (refund AND (membership OR donat(ion/ing)))      | Recently cancelled monthly donation and asked for a refund however havent yet received money back | Refund |
| ((change OR update) AND (mail OR address OR name))   | I am trying to donate online. My name has recently changed from Lewis to Maloney. My email address has remained the same but the website won't accept this as a valid email address even though I received my donation request through that email address     |   Change Personal Information | 
| (donation OR adopt) |  Good morning, I've made a donation a few days ago, I would like to know which carrier do you guys use so I can check with the people from the receiving department since I got it ship to my job. Thanks | Donation Question
| (update OR remove OR (take AND off)) AND mail | Hi. We very much appreciate the work you're doing, and we do donate. Would you please take us off the paper mailing list in order to save paper | Change Solicitation Preferences  | 
| cancel AND (subscription OR membership or donation)  | Hi, I need to cancel my membership at this time. I am currently donating $15/month.Please advise me when this is done  | Sustainer Request  |
| renew  | I sent a membership renewal on the 17th, the wwf website hungup at the end of transaction. I am not sure if it went through. Can you help?  | Renewal Issue  |
| (receive OR send OR forward) AND (mail OR receipt OR invoice OR address)  | Please forward a copy of invoice with mailing address to example@gmail.  | Mailed Info |
| member OR contribution  | I purchased membership a while ago for my two young sons and they requested the socks but never received them.  It has been a long time and they are now disappointed as if their membership doesn't count. How can I correct this?  | Member Inquiry  |
| ((update OR incorrect OR status) AND (order OR address OR mail)) |  I recently ordered this but the mailing address is incorrect. The correct mailing address is 123 Example St  | Benefit Update  |
| (not received OR never received) AND (order OR mail OR receipt)  | Hello, i still have not received my gift bag and i ordered it before christmas. just wondering what is taking so long  | Benefit Issue  |

## Recommended Next Steps

There are a few suggested next steps to take the development of our chatbot and model further. 

**1. Conduct user testing to gather feedback and improve the chatbot's functionality**

The topic model was built and tested on the dataset provided. However, as we know the English language is fluid and there are multiple variations in the use of the language, it would be helpful to release the chatbot as a trial to collect real time customer input to test its response and accuracy. User testing will also enable WWF to understand what the chatbot may potentially struggle to understand and respond appropriately, e.g. certain languages, dialects, abbreviations, etc. so as to incorporate these considerations into the further development of the chatbot.

**2. Integrate chatbot with text analytics model**

To take the chatbot development to the next phase, it is suggested to connect the text analytics model to the chatbot for it to provide live scoring. Further continuous cleaning of the dataset would be required for better results. 

**3. Integrate with different messaging platforms to reach a wider audience**

We understand WWF is also on social media platforms like Facebook and Instagram where there are messaging platforms attached. Integrating the chatbot to these platforms enables WWF to solve customer enquiries not only with its official website but on multiple channels. This allows WWF to reach a wider span of audience and further enhance their customer service quality.

**4. Add more features to the chatbot to enhance user experience**

In addition to text messages, customers could record voice messages on their enquiries. This would leverage voice recognition and natural language processing in the model’s further development. Also, the use of emojis are not uncommon nowadays and WWF can utilize that for sentiment analysis. It can be useful to distinguish positive and negative comments from customers to cater to their immediate needs and for the chatbot to react more appropriately if negative sentiments are detected. 
 
**5. Connect the chatbot to WWF’s database**

To continuously build the chatbot’s knowledge base, it will be useful to connect the chatbot to WWF’s database and store all incoming customer enquiries there. This practice will not only apply to the chatbot but all customer enquiries from various existing customer service channels, e.g. email, phone, etc.. This will support the model’s continuous learning to better automate responses based on accurate and up-to-date information. 

## Risk Considerations
**1. Data privacy**:
Data leak and/or data breach caused by malicious attacks or human mistakes are possible. WWF will need a secure database to store these data to ensure they are encrypted and properly stored. Irrelevant personal information should be erased from the database. 

**2. Chatbot response accuracy:**
As the chatbot requires and depends on learning from the knowledge base to provide its responses, its accuracy is highly dependent on the quality and completeness of the information provided to it. There is a risk of the chatbot providing inaccurate information or inappropriate responses if the data collected is not monitored, reviewed and cleaned. Inaccurate or inappropriate responses could lead to misunderstandings and confusion, harm the brand reputation. A possible solution to this would be adding a troubleshoot option in the chatbot to inform the IT team promptly.

**3. Limited Ability to Handle Complex Situations:**
Chatbots may have difficulty dealing with complex customer queries or issues that require human intervention and problem-solving skills. Similar to point 2, thsi could be solved by adding a "chat with customer service representative" button in the chatbot for customer service staff to take on the queries. 

**4. Change management:**
Chatbots require regular maintenance and updates to ensure they continue to function properly and provide accurate responses. Failure to do so can lead to a breakdown in the system and a negative impact on the customer experience. Another consideration is that inconsistencies/descrepancies could exist between frontend and backend. or issues from API, throughout the maintenance process, which may cause infunctionality. 

