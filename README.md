---

# 💰 **Moneysentry – Personal Finance Management Application**  



> A full-stack personal finance management application to track and manage income and expenses efficiently.  

---

## 🚀 **Overview**  
Moneysentry is a secure and responsive personal finance management application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It helps users track their income and expenses, visualize financial data through charts, and generate downloadable reports. The project is designed with a focus on performance, scalability, and user experience.  

---

## 🌟 **Features**  
✅ **User Authentication:**  
- Secure JWT-based authentication for login and registration.  
- Password hashing using **bcrypt** for enhanced security.  

✅ **Income and Expense Tracking:**  
- Add, delete, and retrieve income and expenses using RESTful endpoints.  
- Real-time tracking of financial data.  

✅ **Data Visualization:**  
- Interactive bar and line charts using **Recharts**.  
- Financial data is sorted and formatted using **Moment.js**.  

✅ **Reporting:**  
- Export income and expense reports in **Excel** format.  

✅ **User Interface:**  
- Clean and responsive UI using **Tailwind CSS**.  
- Dynamic side menu with **react-icons** for seamless navigation.  

✅ **Code Optimization:**  
- Reusable utility functions for email validation, string manipulation, and data formatting.  
- Efficient state management using **Context API**.  

---

## 🛠️ **Tech Stack**  
| Technology | Description |
|------------|-------------|
| **React.js** | Frontend framework for building dynamic UI |
| **Node.js** | Backend runtime for handling requests |
| **Express.js** | Web framework for building RESTful APIs |
| **MongoDB** | NoSQL database for storing user data |
| **JWT** | Secure authentication mechanism |
| **Recharts** | Library for creating charts |
| **Tailwind CSS** | Utility-first CSS framework |
| **Moment.js** | Date and time manipulation |
| **xlsx** | Exporting data to Excel format |
| **Context API** | State management across components |

---

## 📸 **Screenshots** 
### 🔑 **SignUp Page**
![Signup Screenshot](https://github.com/user-attachments/assets/d7592fd8-5292-420b-a84f-8affa2109780)

### 🔑 **Login Page**  
![Login Screenshot](https://github.com/user-attachments/assets/cbdd457f-e713-41ff-9b2e-59d196230b9a)


### 📊 **Dashboard with Charts**  
 ![Dashboard Screenshot](https://github.com/user-attachments/assets/dff962be-cd5f-428e-95be-e53401054609)


### 💼 **Income with Bar Charts**  
 ![Income Screenshot](https://github.com/user-attachments/assets/f87813ad-fd0c-46bc-a471-fed9222327be)


### **Expense with Line Charts**
![Expense Screenshot](https://github.com/user-attachments/assets/d7d30513-782d-4a12-b87b-b370baf168db)

---

## 🔨 **Installation and Setup**  

### 1. **Clone the repository**  
```bash
git clone https://github.com/Melvin-KJ/finance-project.git
```

### 2. **Navigate to the project directory**  
```bash
cd finance-project
```

### 3. **Install dependencies**  
#### For frontend:  
```bash
cd finance-frontend
npm install
```

#### For backend:  
```bash
cd finance-backend
npm init -y
```

### 4. **Set up environment variables**  
Create a `.env` file in the root directory and add the following:  
```env
MONGO_URI = your-mongodb-uri
JWT_SECRET = your-jwt-secret
PORT = 3000
```

### 5. **Run the development server**  
#### Start backend:  
```bash
cd finance-backend
npm start
```

#### Start frontend:  
```bash
cd finance-frontend
npm run dev
```

### 6. **Open in browser**  
👉 [http://localhost:3000](http://localhost:3000)  


## **State Management**  
- Used **Context API** for efficient state sharing across components.  
- Ensured smooth data flow without prop drilling.  

---

## 🔒 **Authentication**  
- Used **JWT** for secure token-based authentication.  
- Implemented **bcrypt** for password hashing and security.  

---

## 📈 **Data Handling**  
- Financial data is sorted and formatted using **Moment.js**.  
- Data visualization through **Recharts** for better insights.  
- Export to Excel using **xlsx** library.  

---

## 🏆 **Challenges and Solutions**  
| Challenge | Solution |
|-----------|----------|
| State management complexity | Implemented Context API for centralized state control |
| Secure login and data protection | Used JWT and bcrypt for enhanced security |
| Displaying large datasets efficiently | Used optimized rendering and data formatting techniques |
