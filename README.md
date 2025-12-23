# 📚 Book2Door - Client

<div align="center">
<img width="158" height="47" alt="image" src="https://github.com/user-attachments/assets/8c2cdccb-9f83-44db-b4d3-14fbc346c567" />


**Your gateway to a world of books, delivered right to your door**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/Node-16.x+-339933.svg)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[Live](https://book2-door-client.vercel.app/) | [Server Repo](https://github.com/ShahriarRefat0/Book2Door-server.git) | [Client Repo](https://github.com/ShahriarRefat0/Book2Door-client)

</div>

---

## 📖 About The Project

Book2Door is a modern, full-featured online bookstore application that brings the joy of reading directly to customers' doorsteps. Built with cutting-edge web technologies, it offers a seamless shopping experience with an intuitive interface, robust search capabilities, and secure payment processing.

### ✨ Key Features

- **📱 Role Base Dashboard** - Admin, Librarian and customer role base Dashboard Features
- **📱 Responsive Design** - Seamless experience across all devices
- **🔍 Advanced Search** - Find books by title, author, genre, or ISBN
- **🛒 Shopping Cart** - Easy-to-use cart with real-time updates
- **💳 Secure Checkout** - Multiple payment options with SSL encryption
- **👤 User Profiles** - Personalized dashboards and order history
- **⭐ Reviews & Ratings** - Community-driven book recommendations
- **📚 Wishlist** - Save books for later purchase
- **🔔 Notifications** - Real-time order tracking and updates
- **🎨 Dark Mode** - Eye-friendly reading experience
- **🌐 Multi-language Support** - Accessible to global audience

---  
## ⚙️ User Dashboar Core Functionalities  

### 🔴 Admin Dashboard (Complete Platform Control)

- User Management (view, role assignment, status control)  
- Book Management (add, edit, delete, categories, bulk operations)  
- Order Management (all orders, status updates, analytics, refunds)  
- Financial Management (revenue tracking, sales analytics, reports)  
- System Management (settings, analytics, promotions, content)  

### 🟢 Librarian Dashboard (Catalog & Inventory Management)  

- Book Operations (add, edit, delete, stock management)  
- Inventory Management (monitoring, alerts, reorders, reports)  
- Category & Organization (genres, authors, publishers)  
- Order Fulfillment (pending orders, packing, status updates)  
- Reports & Analytics (performance, turnover, monthly summaries)  

### 🔵 Customer Dashboard (Shopping & Personal Experience)

- Shopping Features (browse, search, cart, wishlist, quick buy)  
- Order Management (place orders, tracking, history, cancellation)  
- Profile Management (personal info, addresses, payment methods)  
- Reviews & Engagement (write/edit reviews, ratings, voting)  
- Personalization (reading lists, recommendations, preferences)  
- Customer Support (tickets, live chat, FAQ, returns, feedback)  

---  
## 🚀 Built With

This project leverages modern technologies and best practices:

### Frontend
- **React.js** - UI component library
- **React Router** - Navigation and routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **React Query** - Server state management
- **SweetAlert2** (draggable alerts)
- **AOS** (Animate on Scroll)
- **Framer Motion**  

### **Backend**
- Node.js + Express.js
- MongoDB Atlas
- Firebase Admin SDK
- dotenv, cors  

### Additional Tools
- **Vite** - Build tool and dev server
- **ESLint & Prettier** - Code quality and formatting


---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

```bash
node >= 16.0.0
npm >= 8.0.0
# or
yarn >= 1.22.0
```

---

## ⚙️ Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/ShahriarRefat0/Book2Door-client.git
cd Book2Door-client
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory and add the following variables:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_APP_NAME=Book2Door
```

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

---

## 🏗️ Project Structure

```
BOOK2DOOR/
├── .vscode/                    # VSCode configuration
├── dist/                       # Production build output
├── node_modules/               # Project dependencies
├── public/                     # Static public assets
│   ├── areas.json
│   ├── logo.svg
│   └── vite.svg
├── src/
│   ├── assets/                 # Images, icons, static files
│   ├── Components/             # React components
│   │   ├── BuyNowModal/
│   │   │   └── BuyNowModal.jsx
│   │   ├── LoadingSpinner/
│   │   │   └── LoadingSpinner.jsx
│   │   ├── Logo/
│   │   │   └── Logo.jsx
│   │   └── shared/             # Shared components
│   │       ├── Footer.jsx
│   │       ├── Navbar.jsx
│   │       └── BookCard.jsx
│   ├── Context/                # React Context API
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   ├── Firebase/               # Firebase configuration
│   │   └── firebase.init.js
│   ├── hook/                   # Custom React hooks
│   │   ├── useAuth.jsx
│   │   ├── useAxios.jsx
│   │   ├── useAxiosSecure.jsx
│   │   ├── useRole.jsx
│   ├── Layouts/                # Layout components
│   │   ├── AuthLayouts.jsx
│   │   ├── DashboardLayout.jsx
│   │   └── MainLayouts.jsx
│   ├── Pages/                  # Page components
│   ├── Routes/                 # Route configuration
│   │   ├── AdminRoute.jsx
│   │   ├── CustomerRoute.jsx
│   │   ├── LibrarianRoute.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── router.jsx
│   ├── utils/                  # Utility functions
│   │   ├── index.js
│   │   └── index.css
│   ├── main.jsx                # Application entry point
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── package-lock.json           # Dependency lock file
├── package.json                # Project dependencies & scripts
├── README.md                   # Project documentation
└── vite.config.js              # Vite configuration
```

---

## 🎯 Available Scripts

In the project directory, you can run:

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Testing
```bash
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
```

---

## 🌐 API Integration

This client application connects to the Book2Door backend API. Ensure the backend server is running for full functionality.

**Backend Repository:** [Book2Door-server](https://github.com/ShahriarRefat0/Book2Door-server)

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get book by ID |
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/orders` | Create new order |
| GET | `/api/orders/:userId` | Get user orders |

---

## 🔐 Authentication

Book2Door uses JWT (JSON Web Tokens) for authentication. The token is stored in localStorage and included in API requests via Axios interceptors.

### Protected Routes

- `/profile` - User profile and settings
- `/orders` - Order history
- `/checkout` - Checkout process
- `/wishlist` - User wishlist

---

## 🎨 UI/UX Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interfaces

### Accessibility
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast mode

### Performance
- Code splitting and lazy loading
- Image optimization
- Memoization for expensive operations
- Efficient state management

---

## 🧪 Testing

The project includes comprehensive test coverage:

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm run test -- src/components/Button.test.jsx
```

---

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

```bash
npm run build
vercel --prod
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Docker

```bash
docker build -t book2door-client .
docker run -p 3000:3000 book2door-client
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 🐛 Bug Reports

If you discover a bug, please create an issue on GitHub with the following information:

- Bug description
- Steps to reproduce
- Expected behavior
- Screenshots (if applicable)
- Browser and OS information

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👥 Authors

**Shahriar Refat**
- GitHub: [@ShahriarRefat0](https://github.com/ShahriarRefat0)
- LinkedIn: [Your LinkedIn]( https://www.linkedin.com/in/shahriar-rahman-refat/)
- Email: shahariarrefat@gmail.com

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [Font Awesome](https://fontawesome.com/)
- [Unsplash](https://unsplash.com/) for images

---

## 📸 Screenshots

<div align="center">

### Home Page
<img width="1118" height="665" alt="image" src="https://github.com/user-attachments/assets/f0a2e08f-0a92-45ee-a46f-70356013601b" />

### Book Details
<img width="1118" height="664" alt="image" src="https://github.com/user-attachments/assets/06a97d89-e253-4faf-9553-14653065231e" />

### Admin Dashboar
<img width="1118" height="661" alt="image" src="https://github.com/user-attachments/assets/03582fc7-1504-403a-809f-fee2a44da1ff" />


</div>

---

## 📊 Project Status

This project is currently in active development. See the [open issues](https://github.com/ShahriarRefat0/Book2Door-client/issues) for a list of proposed features and known issues.

---

## 💬 Support

For support, email shaharirrefat.com or join our Slack channel.

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ by [Shahriar Refat](https://github.com/ShahriarRefat0)

</div>
