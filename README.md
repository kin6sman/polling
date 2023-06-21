# PollingAPI-Nodejs
API for Polling Questions - Coding Ninjas Backend Skill Test Project

Task: Need to create an API where anyone can create questions with options and also add votes to it

---

## Features
- Create a question
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it

## Required Routes
- /questions/create (To create a question)
  ![image](https://github.com/kin6sman/polling/assets/88446494/fb7c8b72-575c-4c1e-85af-8f2f7378f7dc)

- /questions/:id/options/create (To add options to a specific question)
  ![image](https://github.com/kin6sman/polling/assets/88446494/285ed110-ea6d-47b5-a884-c8b322632a9e)


- /questions/:id/delete (To delete a question)
  ![image](https://github.com/kin6sman/polling/assets/88446494/4a63b958-e4e0-405f-85a2-5b5e3c587150)

- /options/:id/delete (To delete an option)
  ![image](https://github.com/kin6sman/polling/assets/88446494/9e04fc8b-9274-4d52-9e78-28a8867e8a41)

- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)
  ![image](https://github.com/kin6sman/polling/assets/88446494/727108aa-232c-4dd9-b113-8c6dee8ce36c)


## Folder Structure
```
CSV_Upload/
|── |config/
│   |      ├── mongoose.js
|   |
├── routes/
│   |      ├── api/
│   ├── index.js
|   |
├── controllers/
│   ├── OptionsController.js
│   ├── QuestionsController.js
|   |
├── models/
│   ├── options.js
│   ├── questions.js
|   |
├── package-lock.json
├── package.json
├── README.md
