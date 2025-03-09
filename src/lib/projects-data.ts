export const projects = [
    {
        title: "E-commerce Platform",
        slug: "ecommerce-platform",
        shortDescription:
            "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
        description: `
  # E-commerce Platform
  
  ## Overview
  
  This full-stack e-commerce platform provides a complete solution for online stores. It features product management, shopping cart functionality, secure payment processing, and an admin dashboard.
  
  ## Key Features
  
  - **Product Catalog**: Browsable and searchable product listings with categories and filters
  - **User Authentication**: Secure login and registration with JWT
  - **Shopping Cart**: Add, remove, and update items with persistent storage
  - **Checkout Process**: Multi-step checkout with address validation
  - **Payment Integration**: Secure payment processing with Stripe
  - **Admin Dashboard**: Comprehensive management of products, orders, and customers
  - **Responsive Design**: Optimized for all device sizes
  
  ## Technical Implementation
  
  The application uses React for the frontend with a Node.js/Express backend. Data is stored in MongoDB, and the entire application is containerized with Docker for easy deployment.
  
  ### Frontend Architecture
  
  The React frontend uses Redux for state management and React Router for navigation. Components are organized using the Atomic Design methodology, making the codebase scalable and maintainable.
  
  \`\`\`javascript
  // Example of Redux store configuration
  import { configureStore } from '@reduxjs/toolkit';
  import cartReducer from './features/cart/cartSlice';
  import productsReducer from './features/products/productsSlice';
  import authReducer from './features/auth/authSlice';
  
  export const store = configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      auth: authReducer,
    },
  });
  \`\`\`
  
  ### Backend Architecture
  
  The Node.js backend follows a modular architecture with separate controllers, services, and data access layers. This separation of concerns makes the codebase easier to maintain and test.
  
  ### Database Schema
  
  MongoDB was chosen for its flexibility with product data that can have varying attributes across different categories.
      `,
        techStack: ["React", "Node.js", "MongoDB", "Express", "Redux", "JWT", "Stripe", "Docker"],
        githubLink: "https://github.com/username/ecommerce-platform",
        liveLink: "https://ecommerce-platform.vercel.app",
        image: "/placeholder.svg?height=400&width=600",
        date: "January 2023",
        duration: "3 months",
        screenshots: [
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Product listing page",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Shopping cart",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Admin dashboard",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Checkout process",
            },
        ],
        challenges: `
  ## Challenges & Solutions
  
  ### Challenge 1: Cart Persistence Across Devices
  
  Users expected their cart to be available across multiple devices, which presented a challenge with our initial local storage implementation.
  
  **Solution:** We implemented a hybrid approach where:
  - Unauthenticated users have their cart stored in local storage
  - Upon login, the local cart merges with any server-stored cart
  - Authenticated users have their cart synchronized with the database
  
  ### Challenge 2: Payment Processing Security
  
  Ensuring secure payment processing while maintaining a smooth user experience was critical.
  
  **Solution:** We implemented Stripe Elements for secure credit card collection and used webhooks to confirm payment success before order fulfillment, keeping sensitive data off our servers entirely.
      `,
    },
    {
        title: "Task Management App",
        slug: "task-management",
        shortDescription: "A collaborative task management application with real-time updates and team workspaces.",
        description: `
  # Task Management Application
  
  ## Overview
  
  This collaborative task management application helps teams organize their work with real-time updates, customizable workflows, and comprehensive reporting. It's designed to be flexible enough for various team structures while remaining intuitive to use.
  
  ## Key Features
  
  - **Team Workspaces**: Separate spaces for different teams or projects
  - **Customizable Boards**: Kanban, list, and calendar views
  - **Task Dependencies**: Create relationships between tasks
  - **Real-time Collaboration**: See changes as they happen
  - **File Attachments**: Attach relevant documents to tasks
  - **Time Tracking**: Track time spent on tasks
  - **Reporting**: Generate reports on team productivity and project progress
  - **Notifications**: Stay updated on task changes and mentions
  
  ## Technical Implementation
  
  The application is built with React and TypeScript on the frontend, with a NestJS backend and PostgreSQL database. WebSockets provide real-time updates, and the entire system is deployed on AWS.
  
  ### Frontend Architecture
  
  The React frontend uses the Context API for state management and is organized into feature-based modules. TypeScript ensures type safety throughout the application.
  
  \`\`\`typescript
  // Example of a Task type definition
  interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'review' | 'done';
    assignee?: User;
    dueDate?: Date;
    priority: 'low' | 'medium' | 'high';
    tags: string[];
    attachments: Attachment[];
    createdAt: Date;
    updatedAt: Date;
  }
  \`\`\`
  
  ### Backend Architecture
  
  The NestJS backend follows a domain-driven design approach with clear separation of concerns. Each module has its own controllers, services, and repositories.
  
  ### Database Schema
  
  PostgreSQL was chosen for its robustness and support for complex relationships between entities. We use TypeORM for database interactions.
      `,
        techStack: ["React", "TypeScript", "NestJS", "PostgreSQL", "WebSockets", "AWS", "TypeORM"],
        githubLink: "https://github.com/username/task-management",
        liveLink: "https://task-management.vercel.app",
        image: "/placeholder.svg?height=400&width=600",
        date: "March 2023",
        duration: "4 months",
        screenshots: [
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Kanban board view",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Task detail page",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Team workspace",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Analytics dashboard",
            },
        ],
        challenges: `
  ## Challenges & Solutions
  
  ### Challenge 1: Real-time Synchronization
  
  Ensuring that all users see the same state of tasks in real-time without conflicts was challenging.
  
  **Solution:** We implemented a WebSocket-based system with optimistic UI updates and conflict resolution. When conflicts occur, the server acts as the source of truth, and clients reconcile their state accordingly.
  
  ### Challenge 2: Performance with Large Datasets
  
  As teams added thousands of tasks, performance began to degrade.
  
  **Solution:** We implemented:
  - Pagination and infinite scrolling for task lists
  - Database indexing for common query patterns
  - Caching frequently accessed data with Redis
  - Lazy loading of task details and attachments
      `,
    },
    {
        title: "Mobile Fitness Tracker",
        slug: "fitness-tracker",
        shortDescription: "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals.",
        description: `
  # Mobile Fitness Tracker
  
  ## Overview
  
  This cross-platform mobile application helps users track their fitness journey, including workouts, nutrition, and progress toward goals. It provides personalized recommendations and insights based on user data.
  
  ## Key Features
  
  - **Workout Tracking**: Log exercises, sets, reps, and weights
  - **Nutrition Tracking**: Log meals and track macronutrients
  - **Goal Setting**: Set and track fitness goals
  - **Progress Photos**: Visualize physical changes over time
  - **Exercise Library**: Browse exercises with proper form demonstrations
  - **Workout Plans**: Follow pre-made plans or create custom routines
  - **Social Features**: Connect with friends and share achievements
  - **Offline Support**: Use the app without an internet connection
  
  ## Technical Implementation
  
  The application is built with React Native and TypeScript, allowing it to run on both iOS and Android from a single codebase. Firebase provides backend services including authentication, database, and storage.
  
  ### App Architecture
  
  The app follows a feature-based architecture with Redux for state management. Navigation is handled by React Navigation, and animations are implemented with React Native Reanimated.
  
  \`\`\`typescript
  // Example of a workout tracking reducer
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
  interface WorkoutState {
    currentWorkout: Workout | null;
    workoutHistory: Workout[];
    isLoading: boolean;
    error: string | null;
  }
  
  const initialState: WorkoutState = {
    currentWorkout: null,
    workoutHistory: [],
    isLoading: false,
    error: null,
  };
  
  const workoutSlice = createSlice({
    name: 'workout',
    initialState,
    reducers: {
      startWorkout(state, action: PayloadAction<WorkoutTemplate>) {
        state.currentWorkout = {
          id: Date.now().toString(),
          startTime: new Date().toISOString(),
          exercises: [],
          template: action.payload,
        };
      },
      // Additional reducers...
    },
  });
  \`\`\`
  
  ### Data Synchronization
  
  The app uses Firebase Firestore for real-time data synchronization and offline support. This allows users to use the app without an internet connection and have their data synchronized when they reconnect.
      `,
        techStack: ["React Native", "TypeScript", "Firebase", "Redux", "Expo", "React Navigation"],
        githubLink: "https://github.com/username/fitness-tracker",
        liveLink: "https://fitness-tracker.vercel.app",
        image: "/placeholder.svg?height=400&width=600",
        date: "June 2023",
        duration: "5 months",
        screenshots: [
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Workout tracking screen",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Nutrition logging",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Progress charts",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Exercise library",
            },
        ],
        challenges: `
  ## Challenges & Solutions
  
  ### Challenge 1: Cross-Platform Consistency
  
  Ensuring a consistent user experience across iOS and Android platforms was challenging due to platform-specific behaviors and UI components.
  
  **Solution:** We implemented a custom UI component library with platform-specific adaptations where necessary. We also used extensive automated testing on both platforms to catch inconsistencies early.
  
  ### Challenge 2: Offline Data Synchronization
  
  Users needed to track workouts even without internet connectivity, which created challenges with data synchronization.
  
  **Solution:** We implemented a robust offline-first architecture using Firebase's offline capabilities and a custom conflict resolution system. This allowed users to seamlessly transition between online and offline states without data loss.
  
  ### Challenge 3: Battery Optimization
  
  Fitness tracking features like GPS and step counting could quickly drain the device battery.
  
  **Solution:** We implemented intelligent background processing that adjusted tracking frequency based on activity type and battery level. We also optimized database operations and network requests to minimize battery impact.
      `,
    },
    {
        title: "Enterprise Resource Planning System",
        slug: "erp-system",
        shortDescription: "A comprehensive ERP system for business management with modules for HR, inventory, and finance.",
        description: `
  # Enterprise Resource Planning System
  
  ## Overview
  
  This comprehensive ERP system helps businesses manage their operations efficiently with integrated modules for human resources, inventory management, finance, and reporting. It's designed to streamline business processes and provide actionable insights.
  
  ## Key Features
  
  - **Human Resources**: Employee management, attendance tracking, and payroll processing
  - **Inventory Management**: Stock tracking, purchase orders, and supplier management
  - **Finance**: Accounting, invoicing, and financial reporting
  - **Customer Relationship Management**: Lead tracking and customer communication
  - **Project Management**: Task assignment, time tracking, and project budgeting
  - **Reporting & Analytics**: Customizable dashboards and reports
  - **User Management**: Role-based access control and audit logging
  - **API Integration**: Connect with third-party services and applications
  
  ## Technical Implementation
  
  The system is built with Java and Spring Boot for the backend, with React for the frontend. PostgreSQL serves as the primary database, and the application is containerized with Docker and orchestrated with Kubernetes.
  
  ### Backend Architecture
  
  The Spring Boot backend follows a microservices architecture, with each module implemented as a separate service. This allows for independent scaling and deployment of different parts of the system.
  
  \`\`\`java
  @Service
  public class InventoryServiceImpl implements InventoryService {
      
      private final ProductRepository productRepository;
      private final StockMovementRepository stockMovementRepository;
      
      @Autowired
      public InventoryServiceImpl(ProductRepository productRepository, 
                                 StockMovementRepository stockMovementRepository) {
          this.productRepository = productRepository;
          this.stockMovementRepository = stockMovementRepository;
      }
      
      @Override
      @Transactional
      public void adjustStock(Long productId, int quantity, String reason) {
          Product product = productRepository.findById(productId)
              .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
              
          int newStock = product.getCurrentStock() + quantity;
          if (newStock < 0) {
              throw new InsufficientStockException("Insufficient stock for product: " + product.getName());
          }
          
          product.setCurrentStock(newStock);
          productRepository.save(product);
          
          StockMovement movement = new StockMovement();
          movement.setProduct(product);
          movement.setQuantity(quantity);
          movement.setReason(reason);
          movement.setTimestamp(LocalDateTime.now());
          stockMovementRepository.save(movement);
      }
      
      // Additional methods...
  }
  \`\`\`
  
  ### Frontend Architecture
  
  The React frontend uses a modular architecture with Redux for state management. Each ERP module has its own set of components, reducers, and actions.
  
  ### Database Design
  
  The PostgreSQL database is designed with normalization principles to ensure data integrity while maintaining performance. Complex business rules are enforced through database constraints and triggers.
      `,
        techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Kubernetes", "Redis", "RabbitMQ"],
        githubLink: "https://github.com/username/erp-system",
        liveLink: "https://erp-system.vercel.app",
        image: "/placeholder.svg?height=400&width=600",
        date: "September 2023",
        duration: "8 months",
        screenshots: [
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Dashboard overview",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Inventory management",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "HR module",
            },
            {
                url: "/placeholder.svg?height=300&width=500",
                caption: "Financial reporting",
            },
        ],
        challenges: `
  ## Challenges & Solutions
  
  ### Challenge 1: System Integration
  
  Integrating various modules while maintaining data consistency and performance was a significant challenge.
  
  **Solution:** We implemented an event-driven architecture using RabbitMQ for inter-service communication. This allowed services to remain loosely coupled while ensuring data consistency through eventual consistency patterns.
  
  ### Challenge 2: Data Migration
  
  Many clients needed to migrate from legacy systems with different data structures.
  
  **Solution:** We developed a flexible ETL pipeline with customizable adapters for different source systems. The pipeline included validation, transformation, and reconciliation steps to ensure data integrity during migration.
  
  ### Challenge 3: Performance at Scale
  
  As the system grew to handle thousands of concurrent users and millions of records, performance became a challenge.
  
  **Solution:** We implemented:
  - Database sharding for high-volume tables
  - Read replicas for reporting queries
  - Redis caching for frequently accessed data
  - Asynchronous processing for non-critical operations
  - Query optimization and database indexing strategies
      `,
    },
]

