# UML Class Diagram Documentation

## Classes and Attributes

### Client
- **Attributes:**
    - `id`: Unique identifier for the client.
    - `firstName`: Client's first name.
    - `lastName`: Client's last name.
    - `dateOfBirth`: Client's date of birth.
    - `address`: Client's home address.
    - `phoneNumber`: Client's phone number.
    - `email`: Client's email address.
    - `profession`: Client's profession.
    - `employer`: Client's employer name.
    - `workAddress`: Client's work address.
    - `workPhoneNumber`: Client's work phone number.
    - `maritalStatus`: Client's marital status (e.g., single, married).
    - `spouseName`: Name of the client's spouse (if applicable).
    - `numberOfChildren`: Number of children the client has.

### Contracts
- **Attributes:**
    - `id`: Unique identifier for the contract.
    - `clientId`: Foreign key referencing the client who owns the contract.
    - `contractNumber`: Unique identifier for the contract.
    - `insuranceCompany`: Name of the insurance company providing the coverage.
    - `coverageStartDate`: Start date of the coverage period.
    - `coverageEndDate`: End date of the coverage period.
    - `premiumAmount`: Amount of the premium paid for the contract.
    - `coverageAmount`: Total coverage amount provided by the contract.
    - `franchiseAmount`: Deductible amount for claims under the contract.

### Claims
- **Attributes:**
    - `id`: Unique identifier for the claim.
    - `clientId`: Foreign key referencing the client who made the claim.
    - `contractId`: Foreign key referencing the contract related to the claim.
    - `claimNumber`: Unique identifier for the claim.
    - `claimDate`: Date when the claim was filed.
    - `claimType`: Type of the claim (e.g., accident, theft).
    - `damageAmount`: Amount of damage claimed.
    - `status`: Status of the claim (e.g., pending, resolved).

### Documents
- **Attributes:**
    - `id`: Unique identifier for the document.
    - `contractId`: Foreign key referencing the contract to which the document belongs.
    - `documentName`: Name of the document.
    - `documentType`: Type of the document (e.g., certificate, receipt).
    - `filePath`: Path to the file where the document is stored.

### RequiredDocuments
- **Attributes:**
    - `id`: Unique identifier for the required document entry.
    - `contractType`: Type of contract (e.g., auto, home, life).
    - `requiredDocumentName`: Name of the document required for the contract type.

### Interactions
- **Attributes:**
    - `id`: Unique identifier for the interaction.
    - `clientId`: Foreign key referencing the client involved in the interaction.
    - `interactionDate`: Date of the interaction.
    - `interactionType`: Type of interaction (e.g., call, email, meeting).
    - `details`: Detailed notes on the interaction.

### Tasks
- **Attributes:**
    - `id`: Unique identifier for the task.
    - `taskDescription`: Description of the task.
    - `dueDate`: Due date for completing the task.
    - `responsiblePerson`: Person responsible for completing the task.
    - `status`: Status of the task (e.g., pending, completed).

## Relationships

### Client to Contracts
- **Relation:** One-to-Many
- **Explanation:** A client can have multiple insurance contracts. Each contract is linked to a single client.

### Client to Claims
- **Relation:** One-to-Many
- **Explanation:** A client can make multiple claims. Each claim is associated with a single client.

### Contracts to Claims
- **Relation:** One-to-Many
- **Explanation:** Each contract can have multiple claims. A claim is associated with a single contract.

### Contracts to Documents
- **Relation:** One-to-Many
- **Explanation:** Each contract can have multiple associated documents. Each document belongs to a single contract.

### Contracts to RequiredDocuments
- **Relation:** One-to-Many
- **Explanation:** Each contract type requires specific documents. Each entry in the `RequiredDocuments` table specifies a document required for a particular contract type.

### Client to Interactions
- **Relation:** One-to-Many
- **Explanation:** A client can have multiple interactions. Each interaction is related to a single client.

### Tasks to Interactions
- **Relation:** Many-to-Many
- **Explanation:** Tasks can be related to multiple interactions, and interactions can involve multiple tasks. This relationship is used to track tasks related to specific interactions.

