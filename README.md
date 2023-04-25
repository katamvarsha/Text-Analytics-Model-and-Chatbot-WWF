## WILD - Developing a Chatbot

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

Our project aimed to develop an interactive chatbot platform for WWF that leverages natural language processing (NLP) and machine learning (ML) algorithms to streamline customer query resolution and reduce the workload of the Customer Service team. By mapping customer queries to one of ten possible topics and providing accurate solutions quickly, the platform enhances customer service and satisfaction for WWF.

In our research, we identified extended wait times, inaccurate query resolution, and difficulty navigating the website as WWF’s key challenges. To address these issues, we developed the chatbot platform that can answer customer queries with high accuracy and includes a live scoring mechanism to provide feedback on the accuracy of queries.


## Problem Understanding

WWF needed a comprehensive solution to improve their customer query resolution process and ease the workload of their Customer Service team. We developed a chatbot and a text analytics model that could accurately forecast customer queries and display their accuracy percentage. WWF faced significant challenges in managing customer queries and resolving issues in a timely manner due to the reliance on phone and email support. This approach made it difficult to identify recurring queries and pain points of customers, resulting in dissatisfaction and frustration. The objective of the project was to build an interactive chatbot platform that reduces the number of recurring queries and provides valuable insights into customer needs and preferences. The identified pain points included extended wait times, inaccurate query resolution, and difficulties in navigating the website. Addressing these issues could enhance customer satisfaction and loyalty, leading to an improvement in WWF's overall reputation.


## Data Collection and Pre-processing

**1. Data Collection:**   
The dataset of customer inquiries was provided by the World Wildlife Fund in a file named TextAnalytics.csv. It included 15,219 rows and 5 columns, such as the inquiry's full description, submission date and time, unique identifier, and general topic group (10 were given by the client).
Data Cleaning: We used Python to clean the data, ensuring it was consistent, relevant, and error-free. The cleaning process removed irrelevant data (such as greetings and thank-you messages), standardized data by changing capitalization and punctuation, and removed noise (such as stop words, special characters, and HTML). We used 're' and 'nltk' packages for data cleaning.  

**2. Topic Extraction:**   
After cleaning the data, we used SAS Enterprise Miner to identify the top 25 topics in the dataset. These topics formed the basis for developing the interactive chatbot platform. We are continuously refining the topic extraction process to improve the quality of the topics identified. The top five significant areas we identified include "Cancel monthly donation," "Asking about order status," "Cancel membership payment," "Monthly payment status," and "Remove customer from mailing list."  

**3. Data Pre-processing:**  
We pre-processed the data by tokenizing sentences into individual words, performing lemmatization, and removing stop words. This transformed the raw text data into a more structured format suitable for analysis.

## The Text Analytics Model
**Technologies Used for Text Analytics Model**  
After extracting the 25 topics and matching them with the 10 general topic groups from the original dataset, we used SAS Enterprise Miner to create a text analytics model. Secondly, we used the Model Comparison feature of SAS so we could find the most accurate model. Finally, we also utilized the Score feature of the software so the model displays the probability that a customer inquiry is about a specific topic and assigns it the most probable one.

**Results for the Text Analytics Model**
After topic extraction and matching our collected 25 topics with the 10 general ones given by the client, we compared a neural network, decision tree, and regression model to see which would more reliably predict the topic of a customer inquiry based on its contents. Out of those three, regression was the most accurate model, featuring a KS-statistic of 0.003 and a KS probability cutoff of 0.016.
The text analytics model also uses live scoring to identify the topic of a customer inquiry. The full documentation of the model and the live scoring results can be found in the Appendix. Full integration of the text analytics model into the chatbot is a work in progress.

## The Chatbot
### Technologies Used For Chatbot   

<img src="https://user-images.githubusercontent.com/111586468/234165654-b69db93d-b3af-4a57-b831-a4a254fc668c.JPG" width="100"> <img src="https://user-images.githubusercontent.com/111586468/234165920-1ed5b7ed-bc11-40c9-a2ab-7361a5b050ac.JPG" width="100"> <img src="https://user-images.githubusercontent.com/111586468/234166076-f3e1a5d8-788b-46fb-bc04-7aa7c8a260f1.JPG" width="100"> <img src="https://user-images.githubusercontent.com/111586468/234166189-98c28951-7cdc-4f81-8d90-3c3d19973ea2.JPG" width="100">   

1. **Webstorm Integrated Development Environment (IDE)**.   
2. **Node JS framework**, which is an open-source framework that allows developers to build scalable and high-performance applications using JavaScript.   
3. **NPM (Node Package Manager)** to manage and install all the dependencies required for our chatbot.  
4. **JavaScript** with the **ReactJS** library, which is a popular front-end development library that provides a component-based approach to building user interfaces.   
5. Customized and configured the **react-chatbot-kit**, which is an open-source library that provides a framework for building chatbots using ReactJS. This allowed us to build a chatbot platform that was both user-friendly and effective in resolving customer queries.  

<!-- GETTING STARTED -->
## Getting Started

1. Go to the official Node.js website at https://nodejs.org/en/
2. Select the appropriate installer for your operating system (Windows, macOS, or Linux) and download it.
4. Once the installer has finished downloading, run it and follow the on-screen instructions to install Node.js.
5. After the installation is complete, open a terminal or command prompt and type "node -v" to verify that Node.js has been installed correctly. You should see the version number of Node.js printed to the console.
5. Next, type "npm -v" to verify that npm (Node Package Manager) has also been installed. You should see the version number of npm printed to the console.

### Installation

1. Clone the repo using HTTPS or SSH
   ```sh
   git clone https://github.com/katamvarsha/chatbot.git
   git clone git@github.com:katamvarsha/chatbot.git
   ```
2. Install NPM packages and node modules 
   ```sh
   npm install
   ```
3. Install react-chatbot-kit 
   ```sh
   npm install react-chatbot-kit
   ```
### Configuration   
_For more information on how to configure and customize the react chatbot, please refer to the [Documentation](https://fredrikoseberg.github.io/react-chatbot-kit-docs/docs/configure-your-bot)_

### Usage

Run the chatbot using the following command, this will open the development server at localhost:3000.
 ```sh
   cd wwf
   npm start
   ```
   
   <img src="https://user-images.githubusercontent.com/111586468/234170653-fa514401-6e37-4870-9b80-12534e0d07f1.JPG" height="500">  

## Recommended Next Steps

There are a few suggested next steps to take the development of our chatbot and model further. 

1. Conduct user testing to gather feedback and improve the chatbot's functionality

2. The topic model was built and tested on the dataset provided. However, as we know the English language is fluid and there are multiple variations in the use of the language, it would be helpful to release the chatbot as a trial to collect real time customer input to test its response and accuracy. User testing will also enable WWF to understand what the chatbot may potentially struggle to understand and respond appropriately, e.g. certain languages, dialects, abbreviations, etc. so as to incorporate these considerations into the further development of the chatbot.

3. Integrating the chatbot and model with different messaging platforms to reach a wider audience

4. We understand WWF is also on social media platforms like Facebook and Instagram where there are messaging platforms attached. Integrating the chatbot to these platforms enables WWF to solve customer enquiries not only with its official website but on multiple channels. This allows WWF to reach a wider span of audience and further enhance their customer service quality.

5. Add more features to the chatbot to enhance user experience

6. In addition to text messages, customers could record voice messages on their enquiries. This would leverage voice recognition and natural language processing in the model’s further development. Also, the use of emojis are not uncommon nowadays and WWF can utilize that for sentiment analysis. It can be useful to distinguish positive and negative comments from customers to cater to their immediate needs and for the chatbot to react more appropriately if negative sentiments are detected. 
 
7. Connect the chatbot to WWF’s database 

8. To continuously build the chatbot’s knowledge base, it will be useful to connect the chatbot to WWF’s database and store all incoming customer enquiries there. This practice will not only apply to the chatbot but all customer enquiries from various existing customer service channels, e.g. email, phone, etc.. This will support the model’s continuous learning to better automate responses based on accurate and up-to-date information. 

## Risk Considerations
**1. Data privacy**:
The chatbot may collect user data such as personal information or location, either on purpose or by accident, depending on the customer query and input. WWF will need a secure database to store these data to ensure they are encrypted and properly stored. Irrelevant personal information should be erased from the database. 

**2. Chatbot response accuracy:**
As the chatbot requires and depends on learning from the knowledge base to provide its responses, its accuracy is highly dependent on the quality and completeness of the information provided to it. There is a risk of the chatbot providing inaccurate information or inappropriate responses if the data collected is not monitored, reviewed and cleaned. Inaccurate or inappropriate responses could harm the brand reputation. 

**3. Technical issues:**
The chatbot may fail to operate properly due to technical issues, which could lead to frustrated users. This could be solved by assigned dedicated team member(s) to monitor for any technical issues. 

**4. Language and Culture:**
Chatbot should be programmed to be sensitive to language and cultural differences. If the chatbot does not understand or misinterprets cultural references or language nuances, it may cause offense or confusion among users.

