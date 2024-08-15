# API Documentation

## Clients Endpoints

### Create Client
- **POST** `/clients`
    - **Description:** Create a new client
    - **Body:**
        - `firstName`: Client's first name
        - `lastName`: Client's last name
        - `dateOfBirth`: Client's date of birth
        - `address`: Client's home address
        - `phoneNumber`: Client's phone number
        - `email`: Client's email address
        - `profession`: Client's profession
        - `employer`: Client's employer name
        - `workAddress`: Client's work address
        - `workPhoneNumber`: Client's work phone number
        - `maritalStatus`: Client's marital status
        - `spouseName`: Name of the client's spouse
        - `numberOfChildren`: Number of children

### Get All Clients
- **GET** `/clients`
    - **Description:** Retrieve all clients

### Get Client by ID
- **GET** `/clients/:clientId`
    - **Description:** Retrieve a specific client by `clientId`

### Update Client
- **PUT** `/clients/:clientId`
    - **Description:** Update a specific client
    - **Body:** Fields to update

### Delete Client
- **DELETE** `/clients/:clientId`
    - **Description:** Delete a specific client

## Contracts Endpoints

### Create Contract
- **POST** `/clients/:clientId/contracts`
    - **Description:** Create a new contract for a specific client
    - **Body:**
        - `contractNumber`: Unique identifier for the contract
        - `insuranceCompany`: Name of the insurance company
        - `coverageStartDate`: Start date of the coverage
        - `coverageEndDate`: End date of the coverage
        - `premiumAmount`: Amount of the premium
        - `coverageAmount`: Total coverage amount
        - `franchiseAmount`: Deductible amount

### Get All Contracts for a Client
- **GET** `/clients/:clientId/contracts`
    - **Description:** Retrieve all contracts for a specific client

### Get Contract by ID
- **GET** `/clients/:clientId/contracts/:contractId`
    - **Description:** Retrieve a specific contract by `contractId` for a specific client

### Update Contract
- **PUT** `/clients/:clientId/contracts/:contractId`
    - **Description:** Update a specific contract for a specific client
    - **Body:** Fields to update

### Delete Contract
- **DELETE** `/clients/:clientId/contracts/:contractId`
    - **Description:** Delete a specific contract for a specific client

## Claims Endpoints

### Create Claim
- **POST** `/clients/:clientId/contracts/:contractId/claims`
    - **Description:** Create a new claim for a specific contract of a client
    - **Body:**
        - `claimNumber`: Unique identifier for the claim
        - `claimDate`: Date when the claim was filed
        - `claimType`: Type of the claim
        - `damageAmount`: Amount of damage claimed
        - `status`: Status of the claim

### Get All Claims for a Contract
- **GET** `/clients/:clientId/contracts/:contractId/claims`
    - **Description:** Retrieve all claims for a specific contract of a client

### Get Claim by ID
- **GET** `/clients/:clientId/contracts/:contractId/claims/:claimId`
    - **Description:** Retrieve a specific claim by `claimId` for a specific contract of a client

### Update Claim
- **PUT** `/clients/:clientId/contracts/:contractId/claims/:claimId`
    - **Description:** Update a specific claim for a specific contract of a client
    - **Body:** Fields to update

### Delete Claim
- **DELETE** `/clients/:clientId/contracts/:contractId/claims/:claimId`
    - **Description:** Delete a specific claim for a specific contract of a client

## Documents Endpoints

### Upload Document
- **POST** `/clients/:clientId/contracts/:contractId/documents`
    - **Description:** Upload a document for a specific contract of a client
    - **Body:**
        - `documentName`: Name of the document
        - `documentType`: Type of the document
        - `filePath`: Path to the document file

### Get All Documents for a Contract
- **GET** `/clients/:clientId/contracts/:contractId/documents`
    - **Description:** Retrieve all documents for a specific contract of a client

### Get Document by ID
- **GET** `/clients/:clientId/contracts/:contractId/documents/:documentId`
    - **Description:** Retrieve a specific document by `documentId` for a specific contract of a client

### Delete Document
- **DELETE** `/clients/:clientId/contracts/:contractId/documents/:documentId`
    - **Description:** Delete a specific document for a specific contract of a client

## Required Documents Endpoints

### Get Required Documents by Contract Type
- **GET** `/required-documents/:contractType`
    - **Description:** Retrieve all required documents for a specific contract type

## Interactions Endpoints

### Create Interaction
- **POST** `/clients/:clientId/interactions`
    - **Description:** Create a new interaction for a specific client
    - **Body:**
        - `interactionDate`: Date of the interaction
        - `interactionType`: Type of the interaction
        - `details`: Detailed notes on the interaction

### Get All Interactions for a Client
- **GET** `/clients/:clientId/interactions`
    - **Description:** Retrieve all interactions for a specific client

### Get Interaction by ID
- **GET** `/clients/:clientId/interactions/:interactionId`
    - **Description:** Retrieve a specific interaction by `interactionId` for a specific client

### Update Interaction
- **PUT** `/clients/:clientId/interactions/:interactionId`
    - **Description:** Update a specific interaction for a specific client
    - **Body:** Fields to update

### Delete Interaction
- **DELETE** `/clients/:clientId/interactions/:interactionId`
    - **Description:** Delete a specific interaction for a specific client

## Tasks Endpoints

### Create Task
- **POST** `/clients/:clientId/tasks`
    - **Description:** Create a new task for a specific client
    - **Body:**
        - `taskDescription`: Description of the task
        - `dueDate`: Due date for completing the task
        - `responsiblePerson`: Person responsible for the task
        - `status`: Status of the task

### Get All Tasks for a Client
- **GET** `/clients/:clientId/tasks`
    - **Description:** Retrieve all tasks for a specific client

### Get Task by ID
- **GET** `/clients/:clientId/tasks/:taskId`
    - **Description:** Retrieve a specific task by `taskId` for a specific client

### Update Task
- **PUT** `/clients/:clientId/tasks/:taskId`
    - **Description:** Update a specific task for a specific client
    - **Body:** Fields to update

### Delete Task
- **DELETE** `/clients/:clientId/tasks/:taskId`
    - **Description:** Delete a specific task for a specific client
