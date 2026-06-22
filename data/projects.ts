import type { Project, ProjectCategory } from '@/lib/types'

/**
 * Central project registry.
 *
 * This array is the single source of truth for every project in the portfolio.
 * To add a new project, append an object that satisfies the `Project` type.
 * Dynamic routes (/projects/[slug]) and listing pages read from here, so the
 * architecture scales to 30+ projects and nested structures without code changes.
 */
export const projects: Project[] = [
  {
    slug: 'advertisement-sale-prediction',
    title: 'Advertisement Sale Prediction',
    summary: 'Predicting if an existing customer will buy a product using Logistic Regression.',
    category: 'Machine Learning',
    image: '/projects/ads.png',
    technologies: ['Python', 'Logistic Regression', 'Scikit-learn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/blob/main/Machine_Learning/Supervised_Learning/Classification/Ad_Sales_Prediction_LR/README.md',
    details: {
      overview: 'A binary classification project aimed at predicting purchase intent based on customer demographics and advertisement interaction.',
      methodology: [
        'Data preprocessing and label encoding.',
        'Feature scaling for better convergence.',
        'Model training using Logistic Regression.',
        'Evaluation using Confusion Matrix.'
      ],
    },
  },
  {
    slug: 'salary-estimation-knn',
    title: 'Salary Estimation',
    summary: 'Estimating salary levels using the K-Nearest Neighbors (KNN) algorithm.',
    category: 'Machine Learning',
    image: '/projects/salary.png',
    technologies: ['Python', 'KNN', 'Scikit-learn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/Salary_Estimation_KNN',
    details: {
      overview: 'Using proximity-based classification to estimate salary brackets for employees based on age and experience.',
      methodology: [
        'Data cleaning and normalization.',
        'Finding the optimal K-value.',
        'Applying the KNN classifier.',
        'Metric evaluation for accuracy.'
      ],
    },
  },
  // {
  //   slug: 'character-recognition-svm',
  //   title: 'Character Recognition',
  //   summary: 'Identifying handwritten characters using Support Vector Machines (SVM).',
  //   category: 'Computer Vision',
  //   featured: true,
  //   image: '/projects/char.png',
  //   technologies: ['Python', 'SVM', 'OpenCV'],
  //   githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/blob/main/Computer_Vision/Character_Recognition_SVM/README.md',
  //   details: {
  //     overview: 'Developing a model capable of recognizing characters from images using high-dimensional hyperplanes.',
  //     methodology: [
  //       'Image grayscale conversion and resizing.',
  //       'Feature extraction from pixels.',
  //       'SVM Kernel selection (Linear/RBF).',
  //       'Predicting characters from test images.'
  //     ],
  //   },
  // },
  {
    slug: 'titanic-survival-prediction',
    title: 'Titanic Survival Prediction',
    summary: 'Predicting passenger survival using the Naive Bayes algorithm.',
    category: 'Machine Learning',
    image: '/projects/titanic.png',
    technologies: ['Python', 'Naive Bayes', 'Pandas'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/Titanic_Survival_Prediction_NAIVEBAYES',
    details: {
      overview: 'A probability-based approach to predict survival based on factors like class, sex, and age.',
      methodology: [
        'Handling missing values in the Titanic dataset.',
        'Categorical to numerical conversion.',
        'Naive Bayes model implementation.',
        'Accuracy check using cross-validation.'
      ],
    },
  },
  {
    slug: 'leaf-species-detection',
    title: 'Leaf Species Detection',
    summary: 'Classifying leaf images using Decision Tree algorithms.',
    category: 'Machine Learning',
    image: '/projects/leaf.png',
    technologies: ['Python', 'Decision Tree', 'Seaborn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/Leaf_Species_Detection_DecisionTree',
    details: {
      overview: 'Building an interpretable model to classify leaf species based on their characteristics.',
      methodology: [
        'Exploratory Data Analysis (EDA) using Seaborn.',
        'Decision Tree classifier training.',
        'Visualizing the tree structure.',
        'Testing with new leaf samples.'
      ],
    },
  },
  {
    slug: 'customer-spent-analysis',
    title: 'Customer Spent Analysis',
    summary: 'Unsupervised learning to cluster customers based on spending habits using K-Means Clustering.',
    category: 'Machine Learning',
    image: '/projects/customer.png',
    technologies: ['Python', 'K-Means', 'Hierarchical Clustering'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Unsupervised_Learning/Customer_Spend_Analysis_using_K-Means_Clustering',
    details: {
      overview: 'Identifying customer segments to help businesses target their marketing efforts effectively.',
      methodology: [
        'Elbow method to find optimal clusters.',
        'Dendrogram for Hierarchical clustering.',
        'K-Means algorithm application.',
        'Visualizing clusters using Matplotlib.'
      ],
    },
  },
  {
    slug: 'sentiment-analysis-nlp',
    title: 'NLP Sentiment Analysis',
    summary: 'Analyzing text data to determine sentiment using Natural Language Processing.',
    category: 'NLP',
    featured: true,
    image: '/projects/sentiment.png',
    technologies: ['Python', 'NLTK', 'Regex'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/NLP/Sentimental_Analysis_NLP',
    details: {
      overview: 'Processing and classifying textual data as positive or negative for reviews or social media.',
      methodology: [
        'Text cleaning (removing stopwords/punctuation).',
        'Tokenization and Stemming/Lemmatization.',
        'Bag of Words / TF-IDF Vectorization.',
        'Classifier training (Naive Bayes/Logistic).'
      ],
    },
  },
  {
    slug: 'covid-xray-detection',
    title: 'Covid-19 Detection from X-Rays',
    summary: 'Using Deep Learning (CNN) to detect Covid-19 from chest X-ray images.',
    category: 'Deep Learning',
    featured: true,
    image: '/projects/covid.png',
    technologies: ['Python', 'Keras', 'CNN', 'TensorFlow'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Deep_Learning/Covid19_Detection_Using_CNN',
    details: {
      overview: 'Automating the detection of respiratory infections using medical imaging and neural networks.',
      methodology: [
        'Data augmentation of X-ray images.',
        'Building a Convolutional Neural Network.',
        'Training on balanced datasets.',
        'Evaluating performance with Precision/Recall.'
      ],
    },
  },
  {
    slug: 'digit-recognition-randomforest',
    title: 'Handwritten Digit Recognition',
    summary: 'Classifying handwritten digits from the MNIST dataset using Random Forest ensemble learning.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/digit.png',
    technologies: ['Python', 'Random Forest', 'Scikit-learn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/DigitRecognition_RANDOMFOREST',
    details: {
      overview: 'An image classification project focused on identifying digits (0-9) using a collection of decision trees.',
      methodology: [
        'Flattening 2D image arrays into feature vectors.',
        'Hyperparameter tuning for the number of estimators.',
        'Training a Random Forest classifier.',
        'Testing model robustess on unseen handwritten samples.'
      ],
    },
  },
  // {
  //   slug: 'classification-performance-evaluator',
  //   title: 'Classification Model Evaluation',
  //   summary: 'A comprehensive framework for evaluating classification models using various statistical benchmarks.',
  //   category: 'Machine Learning',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'Matplotlib', 'Scikit-learn'],
  //   githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/blob/main/Machine_Learning/Supervised_Learning/Classification/Classification_Performance_Evaluator/README.md',
  //   details: {
  //     overview: 'Building a standardized pipeline to compare different classification algorithms beyond simple accuracy.',
  //     methodology: [
  //       'Implementing K-fold cross-validation techniques.',
  //       'Generating ROC and Precision-Recall curves.',
  //       'Comparing macro vs micro averaging methods.',
  //       'Visualizing decision boundaries for different models.'
  //     ],
  //   },
  // },
  {
    slug: 'breast-cancer-detection-ml',
    title: 'Breast Cancer Detection',
    summary: 'A comparative study of multiple machine learning algorithms for diagnostic classification of tumors.',
    category: 'Machine Learning',
    featured: true,
    image: '/projects/breastcancer.png',
    technologies: ['Python', 'Logistic Regression', 'SVM'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/BreastCancerDetection_VariousMLAlgorithm',
    details: {
      overview: 'Classifying tumors as malignant or benign based on clinical feature measurements.',
      methodology: [
        'Feature selection and multicollinearity analysis.',
        'Standardization of laboratory measurements.',
        'Implementing multiple classifiers for comparison.',
        'Analyzing model stability via cross-validation.'
      ],
    },
  },
  {
    slug: 'house-price-prediction-linear',
    title: 'House Price Prediction',
    summary: 'Predicting real estate prices based on property features using Simple and Multiple Linear Regression.',
    category: 'Machine Learning',
    image: '/projects/house-price.png',
    technologies: ['Python', 'Linear Regression', 'Pandas'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/House_price_prediction_LinearRegression',
    details: {
      overview: 'Modeling the relationship between house attributes and market value using statistical regression.',
      methodology: [
        'Handling outliers in property dimensions.',
        'Correlation analysis between features and price.',
        'Ordinary Least Squares (OLS) implementation.',
        'Residual analysis for model validation.'
      ],
    },
  },
  {
    slug: 'exam-mark-prediction-linear',
    title: 'Student Exam Mark Prediction',
    summary: 'Forecasting academic performance based on study hours and attendance using Linear Regression.',
    category: 'Machine Learning',
    image: '/projects/exam.png',
    technologies: ['Python', 'Numpy', 'Scikit-learn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/Exam_mark_prediction_LinearRegression',
    details: {
      overview: 'A regression project designed to find patterns in student behavior that lead to academic success.',
      methodology: [
        'Data collection and feature mapping.',
        'Linearity check and scatter plot visualization.',
        'Model training with gradient descent.',
        'Prediction of scores for new student data.'
      ],
    },
  },
  {
    slug: 'salary-prediction-polynomial',
    title: 'Salary Prediction (Polynomial)',
    summary: 'Modeling non-linear salary growth trends using Polynomial Regression techniques.',
    category: 'Machine Learning',
    image: '/projects/salary2.png',
    technologies: ['Python', 'Polynomial Features', 'Matplotlib'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Regression/Salary_prediction_using_POLYNOMIAL_REGRESSION',
    details: {
      overview: 'Capturing exponential or non-linear career growth trajectories that simple linear models miss.',
      methodology: [
        'Transforming features into higher-order polynomials.',
        'Comparing linear vs polynomial fitment.',
        'Model training on professional experience data.',
        'Visualizing the regression curve against data points.'
      ],
    },
  },
  {
    slug: 'stock-prediction-svr',
    title: 'Stock Market Trend Prediction',
    summary: 'Forecasting stock price movements using Support Vector Regression (SVR) with RBF kernels.',
    category: 'Machine Learning',
    image: '/projects/stock.png',
    technologies: ['Python', 'SVR', 'Pandas'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Regression/Stock_prediction_using_SVM_REGRESSION',
    details: {
      overview: 'Applying high-dimensional regression to time-series data for financial market forecasting.',
      methodology: [
        'Preprocessing historical stock price data.',
        'Kernel selection for non-linear time series.',
        'Implementing SVR with epsilon-tube constraints.',
        'Visualizing predicted vs actual price trends.'
      ],
    },
  },
  {
    slug: 'height-prediction-decision-tree',
    title: 'Height Prediction Model',
    summary: 'Estimating person height based on genetic and demographic factors using Decision Tree Regressors.',
    category: 'Machine Learning',
    image: '/projects/height.png',
    technologies: ['Python', 'Decision Tree', 'Seaborn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Regression/HeightPredictionFromAge_DECISIONTREE',
    details: {
      overview: 'An interpretable regression model used to understand the branching logic behind physical attributes.',
      methodology: [
        'Data cleaning of demographic datasets.',
        'Recursive binary splitting for node creation.',
        'Pruning the tree to prevent overfitting.',
        'Exporting the tree logic for rule-based analysis.'
      ],
    },
  },
  {
    slug: 'car-price-prediction-rf',
    title: 'Car Price Prediction',
    summary: 'Predicting resale value of automobiles using Random Forest Regression on multi-variate data.',
    category: 'Machine Learning',
    image: '/projects/car.png',
    technologies: ['Python', 'Random Forest', 'Scikit-learn'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Regression/CarPricePredictionusing_RANDOMFOREST',
    details: {
      overview: 'Estimating car prices by aggregating predictions from multiple decision trees for higher stability.',
      methodology: [
        'Encoding categorical variables like Fuel Type.',
        'Feature importance analysis for price drivers.',
        'Training the forest with bootstrap sampling.',
        'Reducing variance in predictions via ensemble.'
      ],
    },
  },
  {
    slug: 'heart-disease-prediction-nb',
    title: 'Heart Disease Prediction',
    summary: 'Predicting the presence of cardiovascular conditions using Naive Bayes probabilistic classification.',
    category: 'Machine Learning',
    featured: true,
    image: '/projects/heart.png',
    technologies: ['Python', 'Naive Bayes', 'Matplotlib'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Supervised_Learning/Classification/Heart_Disease_Prediction_Using_NaiveBayes',
    details: {
      overview: 'Applying Bayes\' Theorem to medical records to assess the likelihood of heart conditions.',
      methodology: [
        'Handling feature independence assumptions.',
        'Continuous to discrete value transformation.',
        'Calculating prior and posterior probabilities.',
        'Testing model sensitivity on patient records.'
      ],
    },
  },
  // {
  //   slug: 'regression-metrics-analysis',
  //   title: 'Regression Metrics Analyzer',
  //   summary: 'A specialized tool to visualize and compare regression error metrics across different datasets.',
  //   category: 'Data Analysis',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'Plotly', 'Scikit-learn'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'An analysis project dedicated to understanding the mathematical foundations of regression errors.',
  //     methodology: [
  //       'Implementing custom MAE and RMSE functions.',
  //       'Visualizing R-squared and Adjusted R-squared.',
  //       'Analyzing heteroscedasticity via residual plots.',
  //       'Developing a scorecard for regression comparison.'
  //     ],
  //   },
  // },
  {
    slug: 'plant-iris-pca',
    title: 'Iris Clustering via PCA',
    summary: 'Reducing dimensionality of flower datasets using Principal Component Analysis for optimized clustering.',
    category: 'Machine Learning',
    image: '/projects/leaf.png',
    technologies: ['Python', 'PCA', 'K-Means'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Unsupervised_Learning/Clustering_PlantIris_Using_Principal_Component_Analysis',
    details: {
      overview: 'Using linear dimensionality reduction to project 4D Iris data into a 2D space for visualization.',
      methodology: [
        'Standardizing the feature space.',
        'Calculating covariance matrices and eigenvectors.',
        'Determining explained variance ratios.',
        'Visualizing distinct clusters in reduced dimensions.'
      ],
    },
  },
  {
    slug: 'movie-recommendation-svd',
    title: 'Movie Recommendation System',
    summary: 'Building a collaborative filtering engine using Singular Value Decomposition (SVD).',
    category: 'Machine Learning',
    featured: true,
    image: '/projects/movie.png',
    technologies: ['Python', 'Surprise Library', 'SVD'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Unsupervised_Learning/Movie_Recommendation_System_Using_SVD',
    details: {
      overview: 'A recommender system that predicts user ratings for movies by decomposing user-item matrices.',
      methodology: [
        'Building a sparse user-item interaction matrix.',
        'Applying Matrix Factorization techniques.',
        'Latent factor extraction for movies and users.',
        'Generating top-N personalized recommendations.'
      ],
    },
  },
  {
    slug: 'market-basket-analysis-apriori',
    title: 'Market Basket Analysis',
    summary: 'Discovering frequent itemsets and association rules in retail data using the Apriori algorithm.',
    category: 'Data Analysis',
    image: '/projects/market.png',
    technologies: ['Python', 'Apriori', 'Mlxtend'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Machine_Learning/Unsupervised_Learning/MarketBasket_Analysis_Using_APIRIORI',
    details: {
      overview: 'Mining transaction data to identify product combinations that are frequently purchased together.',
      methodology: [
        'Transaction data transformation and encoding.',
        'Setting Support and Confidence thresholds.',
        'Mining association rules and Lift values.',
        'Visualizing product correlations via heatmaps.'
      ],
    },
  },
  {
    slug: 'web-ad-optimization-ucb',
    title: 'Web Ad Optimization (RL)',
    summary: 'Solving the Multi-Armed Bandit problem for advertisement clicks using Upper Confidence Bound.',
    category: 'Deep Learning',
    image: '/projects/webad.png',
    technologies: ['Python', 'Reinforcement Learning', 'Numpy'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Reinforcement%20_Learning/WebAdOptimization_UpperConfidenceBound_ReinforcementLearning',
    details: {
      overview: 'A Reinforcement Learning project that balances exploration and exploitation to maximize Ad click-through rates.',
      methodology: [
        'Simulating a dynamic advertising environment.',
        'Implementing the UCB mathematical formula.',
        'Updating confidence intervals in real-time.',
        'Comparing UCB performance against random selection.'
      ],
    },
  },
  {
    slug: 'breast-cancer-tumor-xgboost',
    title: 'Tumor Prediction (XGBoost)',
    summary: 'Using extreme Gradient Boosting to improve predictive accuracy in medical tumor classification.',
    category: 'Machine Learning',
    featured: true,
    image: '/projects/tumor.png',
    technologies: ['Python', 'XGBoost', 'Scikit-learn'],
    githubUrl: 'https://github.com/Santhosh17905/Breastcancer_TumorPrediction_XGBOOST/blob/main/Breastcancer_TumorPrediction_XGBOOST/README.md',
    details: {
      overview: 'Applying advanced ensemble techniques to handle complex medical datasets with high dimensionality.',
      methodology: [
        'Optimizing DMatrix objects for performance.',
        'Grid Search for hyperparameter optimization.',
        'Implementing early stopping to avoid overfitting.',
        'Analyzing feature importance through gain metrics.'
      ],
    },
  },
  // {
  //   slug: 'deep-learning-foundations',
  //   title: 'Deep Learning Foundations',
  //   summary: 'Building and training Multi-Layer Perceptrons from scratch to understand neural network backpropagation.',
  //   category: 'Deep Learning',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'TensorFlow', 'Keras'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'A foundational project focused on the architecture of Artificial Neural Networks and activation functions.',
  //     methodology: [
  //       'Designing input, hidden, and output layers.',
  //       'Implementing ReLU and Sigmoid activations.',
  //       'Manual gradient calculation and weight updates.',
  //       'Training models on simple non-linear datasets.'
  //     ],
  //   },
  // },
  {
    slug: 'pima-indians-diabetes',
    title: 'Diabetes Risk Prediction',
    summary: 'Predicting diabetes onset in high-risk populations using Neural Networks and diagnostic data.',
    category: 'Deep Learning',
    featured: true,
    image: '/projects/diabetes.png',
    technologies: ['Python', 'Keras', 'Neural Networks'],
    githubUrl: 'https://github.com/Santhosh17905/Diabetes_prediction/blob/main/README.md',
    details: {
      overview: 'Classifying patient health risk using the Pima Indians Diabetes dataset and Deep Learning.',
      methodology: [
        'Preprocessing healthcare data for neural nets.',
        'Configuring dense layers for binary classification.',
        'Optimizing models using the Adam optimizer.',
        'Validating predictions with stratified sampling.'
      ],
    },
  },
  {
    slug: 'ai-snake-game-rl',
    title: 'AI Snake Game',
    summary: 'Training an autonomous agent to play the classic Snake game using Reinforcement Learning.',
    category: 'Deep Learning',
    image: '/projects/snake.png',
    technologies: ['Python', 'Pygame', 'Deep Q-Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Reinforcement%20_Learning/AI_Snake_Game_Using_deep_Q_Learning',
    details: {
      overview: 'Developing a Deep Q-Network (DQN) that learns optimal moves through reward-based feedback.',
      methodology: [
        'Defining state, action, and reward structures.',
        'Building a neural network for Q-value estimation.',
        'Implementing experience replay for stable learning.',
        'Training the agent to avoid walls and self-collision.'
      ],
    },
  },
  {
    slug: 'fake-news-detection-nlp',
    title: 'Fake News Detection',
    summary: 'Distinguishing between real and fake news articles using NLP and the Passive Aggressive Classifier.',
    category: 'NLP',
    featured: true,
    image: '/projects/fake-news.png',
    technologies: ['Python', 'TfidfVectorizer', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/Santhosh17905/fake_news_detection',
    details: {
      overview: 'A text classification project that uses term frequency-inverse document frequency (TF-IDF) to identify misinformation in news corpora.',
      methodology: [
        'Loading and cleaning news datasets with Pandas.',
        'Feature extraction using TfidfVectorizer to convert text to numerical data.',
        'Implementing Passive Aggressive Classifier for high-accuracy text classification.',
        'Evaluating results using accuracy scores and Confusion Matrices.'
      ],
    },
  },
  // {
  //   slug: 'credit-card-fraud-detection',
  //   title: 'Fraud Detection System',
  //   summary: 'Identifying fraudulent credit card transactions using anomaly detection and ensemble models.',
  //   category: 'Machine Learning',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'Isolation Forest', 'SMOTE'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'Addressing extreme class imbalance to detect rare fraudulent events in financial streams.',
  //     methodology: [
  //       'Oversampling minority classes using SMOTE.',
  //       'Implementing Isolation Forest for anomaly detection.',
  //       'Dimensionality reduction for transaction features.',
  //       'Evaluating model robustness against adversarial data.'
  //     ],
  //   },
  // },
  // {
  //   slug: 'email-spam-classifier',
  //   title: 'Email Spam Classification',
  //   summary: 'Filtering unsolicited emails using Natural Language Processing and Multinomial Naive Bayes.',
  //   category: 'NLP',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'CountVectorizer', 'NLTK'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'A text-based classification system designed to clean inboxes by identifying common spam patterns.',
  //     methodology: [
  //       'Cleaning text and removing HTML tags/scripts.',
  //       'Building a vocabulary and word frequency matrix.',
  //       'Training a probabilistic classifier on corpus data.',
  //       'Real-time prediction for incoming text strings.'
  //     ],
  //   },
  // },
  // {
  //   slug: 'image-compression-kmeans',
  //   title: 'Image Compression (K-Means)',
  //   summary: 'Reducing image file sizes by performing color quantization using K-Means clustering.',
  //   category: 'Computer Vision',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'OpenCV', 'K-Means'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'Applying unsupervised learning to group similar pixel colors and reduce the total color palette.',
  //     methodology: [
  //       'Reshaping image pixels into a 3D feature space.',
  //       'Clustering pixels into K dominant colors.',
  //       'Replacing original pixels with centroid colors.',
  //       'Reconstructing compressed images for visual check.'
  //     ],
  //   },
  // },
  // {
  //   slug: 'customer-churn-prediction',
  //   title: 'Telecom Customer Churn',
  //   summary: 'Predicting which customers are likely to cancel subscriptions using Gradient Boosting.',
  //   category: 'Machine Learning',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'LightGBM', 'Pandas'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'A churn analysis project helping businesses improve retention through proactive identification.',
  //     methodology: [
  //       'Analyzing service usage patterns and tenure.',
  //       'Feature engineering for billing behavior.',
  //       'Training a gradient-boosted decision tree.',
  //       'Ranking customers by their probability of churn.'
  //     ],
  //   },
  // },
  // {
  //   slug: 'big-mart-sales-prediction',
  //   title: 'Big Mart Sales Analysis',
  //   summary: 'Forecasting product sales across different store outlets using multi-variate regression.',
  //   category: 'Machine Learning',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'Ridge Regression', 'Scipy'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'Predicting item outlet sales by analyzing product visibility, store location, and type.',
  //     methodology: [
  //       'Imputing missing values in item weight data.',
  //       'One-hot encoding of store and product types.',
  //       'Implementing Ridge regression to handle variance.',
  //       'Identifying key store-level sales drivers.'
  //     ],
  //   },
  // },
  // {
  //   slug: 'wine-quality-assessment',
  //   title: 'Wine Quality Assessment',
  //   summary: 'Classifying wine quality grades based on physicochemical properties using SVM.',
  //   category: 'Machine Learning',
  //   image: '/placeholder.svg',
  //   technologies: ['Python', 'SVM', 'Matplotlib'],
  //   githubUrl: 'https://github.com/Santhosh17905',
  //   details: {
  //     overview: 'Predicting sensory quality scores of wine using objective chemical measurements.',
  //     methodology: [
  //       'Analyzing correlation between acidity and quality.',
  //       'Standardizing chemical concentration levels.',
  //       'Training SVM with a multi-class approach.',
  //       'Visualizing classification accuracy for each grade.'
  //     ],
  //   },
  // },
  // New Computer Vision and Deep Learning Projects
  // {
  //   slug: 'intro-to-computer-vision',
  //   title: 'Introduction to Computer Vision & Basic Programs',
  //   summary: 'Exploring fundamental concepts of Computer Vision, its libraries, and basic programming applications.',
  //   category: 'Computer Vision',
  //   image: '/projects/cv-intro.png',
  //   technologies: ['Python', 'OpenCV'],
  //   githubUrl: '<https://github.com/Santhosh17905/AI-ML-Projects>',
  //   details: {
  //     overview: 'A foundational project introducing the core principles of computer vision, common libraries like OpenCV, and hands-on basic image processing programs.',
  //     methodology: [
  //       'Understanding image representation and manipulation.',
  //       'Exploring OpenCV functionalities for image processing.',
  //       'Implementing basic image transformations and filters.',
  //       'Setting up a computer vision development environment.'
  //     ],
  //   },
  // },
  {
    slug: 'moving-object-detection',
    title: 'Real Time Object Recognition',
    summary: 'Detecting and tracking moving objects in video streams using computer vision techniques.',
    category: 'Computer Vision',
    image: '/projects/movingobject.png',
    technologies: ['Python', 'OpenCV', 'Background Subtraction'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Computer_vision/Real_Time_Object_Recognition_Using_MobileNet%20SSD',
    details: {
      overview: 'A project focused on identifying and isolating moving objects from static backgrounds in video sequences, crucial for surveillance and traffic monitoring.',
      methodology: [
        'Applying background subtraction algorithms (e.g., MOG2, KNN).',
        'Contour detection and analysis for object localization.',
        'Tracking object movement and calculating trajectories.',
        'Handling noise and false positives in dynamic environments.'
      ],
    },
  },
  {
    slug: 'face-detection-tracking',
    title: 'AI powered Face Detection and Tracking',
    summary: 'Implementing real-time face detection and tracking in video feeds.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/face.png',
    technologies: ['Python', 'OpenCV', 'Haar Cascades', 'Deep Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Computer_vision/AI_Powered_Face_Detection%20%26%20Tracking%20System',
    details: {
      overview: 'Developing a system to accurately detect human faces in images and video streams, and subsequently track their movement across frames.',
      methodology: [
        'Utilizing pre-trained Haar cascades or deep learning models (e.g., MTCNN).',
        'Implementing bounding box generation and non-maximum suppression.',
        'Applying tracking algorithms (e.g., KCF, CSRT) for persistent tracking.',
        'Optimizing for real-time performance and varying lighting conditions.'
      ],
    },
  },
  {
    slug: 'color-object-tracking',
    title: 'Advanced Real Time Multi-Color Object Tracking System',
    summary: 'Tracking specific objects in video based on their color properties.',
    category: 'Computer Vision',
    image: '/projects/colorobject.png',
    technologies: ['Python', 'OpenCV', 'HSV Color Space'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Computer_vision/Advanced_Real_Time_MultiColorObject_TrackingSystem_Using_OpenCV',
    details: {
      overview: 'A computer vision project to track objects by segmenting them based on their color in the HSV color space, useful for simple object following tasks.',
      methodology: [
        'Converting RGB to HSV color space for robust color segmentation.',
        'Defining color ranges for target objects using sliders or predefined values.',
        'Applying morphological operations (e.g., erosion, dilation) to refine masks.',
        'Centroid tracking of segmented objects to follow their movement.'
      ],
    },
  },
  {
    slug: 'face-recognition',
    title: 'Face Recognition System Using OpenCV',
    summary: 'Building a system to identify individuals from images or video using facial features.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/face-recog.png',
    technologies: ['Python', 'OpenCV', 'FaceNet', 'Deep Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Computer_vision/Face_Recognition_System_Using_OpenCV',
    details: {
      overview: 'Developing an advanced system capable of recognizing known faces by comparing facial encodings, often used in security and authentication.',
      methodology: [
        'Detecting faces and extracting facial landmarks for alignment.',
        'Generating 128-D facial encodings using pre-trained deep models.',
        'Comparing encodings using Euclidean distance for identification.',
        'Building and managing a database of known faces for recognition.'
      ],
    },
  },
  {
    slug: 'face-emotion-recognition',
    title: 'AI Face Emotion Recognition System',
    summary: 'Recognizing human emotions from facial expressions using deep learning models.',
    category: 'Deep Learning',
    featured: true,
    image: '/projects/emotion-recog.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Computer_vision/AI_Face_Emotion_Recognition_System/AI%20Face%20Emotion%20Recognition%20System',
    details: {
      overview: 'A deep learning project to classify various human emotions (e.g., happy, sad, angry) from facial images, with applications in human-computer interaction.',
      methodology: [
        'Collecting and preprocessing emotional facial datasets (e.g., FER-2013).',
        'Designing and training Convolutional Neural Networks (CNNs) for classification.',
        'Fine-tuning models for emotion classification and handling class imbalance.',
        'Real-time emotion inference from video streams using webcam input.'
      ],
    },
  },
  // {
  //   slug: 'intro-to-deep-learning',
  //   title: 'Introduction to Deep Learning',
  //   summary: 'An introductory project covering the foundational concepts and architectures of deep learning.',
  //   category: 'Deep Learning',
  //   image: '/projects/dl-intro.png',
  //   technologies: ['Python', 'TensorFlow', 'Keras'],
  //   githubUrl: '<https://github.com/Santhosh17905/AI-ML-Projects>',
  //   details: {
  //     overview: 'A foundational project exploring the basics of deep learning, including neural networks, activation functions, and optimization algorithms.',
  //     methodology: [
  //       'Understanding perceptrons and multi-layer perceptrons (MLPs).',
  //       'Exploring backpropagation and gradient descent for training.',
  //       'Implementing basic neural network architectures from scratch or with Keras.',
  //       'Introduction to deep learning frameworks like TensorFlow and PyTorch.'
  //     ],
  //   },
  // },
  // {
  //   slug: 'dl-algorithms-concepts',
  //   title: 'Deep Learning Algorithms and Concepts',
  //   summary: 'Exploring various advanced deep learning algorithms and their underlying concepts.',
  //   category: 'Deep Learning',
  //   image: '/projects/dl-concepts.png',
  //   technologies: ['Python', 'TensorFlow', 'PyTorch', 'CNN', 'RNN'],
  //   githubUrl: '<https://github.com/Santhosh17905/AI-ML-Projects>',
  //   details: {
  //     overview: 'A project delving into the theoretical and practical aspects of key deep learning algorithms such as CNNs, RNNs, and LSTMs, and their applications.',
  //     methodology: [
  //       'Studying Convolutional Neural Networks for image tasks (e.g., VGG, ResNet).',
  //       'Understanding Recurrent Neural Networks for sequential data (e.g., LSTMs, GRUs).',
  //       'Exploring advanced architectures like Transformers and GANs.',
  //       'Implementing and comparing different deep learning models on various datasets.'
  //     ],
  //   },
  // },
  {
    slug: 'nn-diabetes-prediction-day11', // Differentiated slug from existing 'pima-indians-diabetes'
    title: 'Diabetes Prediction using Neural Networks',
    summary: 'Designing and implementing a basic neural network to predict diabetes onset.',
    category: 'Deep Learning',
    image: '/projects/diabetes-nn.png',
    technologies: ['Python', 'Keras', 'Neural Networks'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Deep_Learning/Diabetes_Prediction_Using_DNN', // Using generic for this new entry
    details: {
      overview: 'A hands-on project to build a simple neural network from scratch or using Keras to classify diabetes risk based on medical parameters.',
      methodology: [
        'Data preprocessing for medical datasets (e.g., Pima Indians Diabetes).',
        'Defining input, hidden, and output layers for binary classification.',
        'Training the neural network with backpropagation and optimizers.',
        'Evaluating model performance using accuracy, precision, and recall.'
      ],
    },
  },
  {
    slug: 'object-recognition-pretrained',
    title: 'Object Recognition with Pre-trained Models',
    summary: 'Utilizing pre-trained deep learning models for efficient object recognition tasks.',
    category: 'Deep Learning',
    image: '/projects/object-recog.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Transfer Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Computer_vision/Real_Time_Object_Recognition_Using_MobileNet%20SSD',
    details: {
      overview: 'A project demonstrating the power of transfer learning by using state-of-the-art pre-trained Convolutional Neural Networks (CNNs) for various object recognition tasks.',
      methodology: [
        'Loading pre-trained models (e.g., VGG16, ResNet50, MobileNetV2).',
        'Fine-tuning the last layers for specific datasets and classes.',
        'Performing inference on new images and videos for object detection.',
        'Understanding feature extraction from deep layers and model architectures.'
      ],
    },
  },
  {
    slug: 'image-classification-dl',
    title: 'Image Classification',
    summary: 'Classifying images into predefined categories using deep learning techniques.',
    category: 'Deep Learning',
    image: '/projects/image-classify.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/blob/main/Deep_Learning/Image_Classification_using_CNN/RAEDME.md',
    details: {
      overview: 'A fundamental deep learning project focused on training models to categorize images, from simple datasets like CIFAR-10 to more complex ones.',
      methodology: [
        'Data augmentation techniques for improving model generalization.',
        'Designing and training custom CNN architectures for image classification.',
        'Evaluating classification accuracy, loss, and confusion matrices.',
        'Visualizing feature maps and model predictions to understand behavior.'
      ],
    },
  },
  {
    slug: 'hand-gesture-recognition',
    title: 'AI powered Hand Gesture Recognition',
    summary: 'Recognizing various hand gestures for human-computer interaction using computer vision.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/gesture-recog.png',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'Deep Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Deep_Learning/AI_Powered_Hand_Gesture_Control_System',
    details: {
      overview: 'Developing a system to interpret human hand gestures, enabling intuitive control and interaction with digital interfaces.',
      methodology: [
        'Detecting hands and extracting keypoints using libraries like MediaPipe.',
        'Training classification models on gesture datasets (e.g., CNNs, SVMs).',
        'Real-time gesture inference from camera input for interactive applications.',
        'Implementing gesture-based commands for various functionalities.'
      ],
    },
  },
  {
    slug: 'leaf-disease-detection',
    title: 'Plant Leaf Disease Detection using CNN',
    summary: 'Detecting and classifying plant leaf diseases from images using deep learning.',
    category: 'Deep Learning',
    featured: true,
    image: '/projects/leaf-disease.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Deep_Learning/Plant_Leaf_Disease_Detection_Using_CNN',
    details: {
      overview: 'An agricultural application of deep learning to identify various plant diseases from images of leaves, aiding in early diagnosis and treatment.',
      methodology: [
        'Collecting and annotating leaf disease datasets for supervised learning.',
        'Building and training Convolutional Neural Networks for disease classification.',
        'Evaluating model performance on unseen disease images and healthy leaves.',
        'Deploying models for practical use in farming and agricultural monitoring.'
      ],
    },
  },
  {
    slug: 'char-recognition-pyqt5',
    title: 'AI Character Recognition with PyQt5 GUI',
    summary: 'Building a GUI application for character recognition using PyQt5 and computer vision techniques.',
    category: 'Computer Vision',
    image: '/projects/char-gui.png',
    technologies: ['Python', 'OpenCV', 'PyQt5', 'Machine Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Deep_Learning/Character_Recognition_System_Using_PyQt5',
    details: {
      overview: 'A project combining computer vision for character recognition with a user-friendly graphical interface developed using PyQt5.',
      methodology: [
        'Integrating character recognition models (e.g., SVM, CNN, Tesseract).',
        'Designing interactive GUI elements with PyQt5 for image input and display.',
        'Handling image input from files or webcam and displaying recognition results.',
        'Creating a standalone desktop application for character recognition.'
      ],
    },
  },
  {
    slug: 'label-reading-ocr',
    title: 'AI Enhanced Label Reading using OCR',
    summary: 'Extracting text from images of labels using Optical Character Recognition (OCR).',
    category: 'Computer Vision',
    image: '/projects/ocr-label.png',
    technologies: ['Python', 'OpenCV', 'Tesseract', 'OCR'],
    githubUrl: 'https://github.com/Santhosh17905/AI-ML-Projects/tree/main/Deep_Learning/AI_Enhanced_OCR_System',
    details: {
      overview: 'A computer vision project focused on extracting textual information from images, specifically from product labels, documents, or signs, using OCR technology.',
      methodology: [
        'Image preprocessing for OCR (e.g., deskewing, binarization, noise reduction).',
        'Applying Tesseract or other OCR engines for text extraction.',
        'Post-processing extracted text for accuracy and format correction.',
        'Handling various font styles, sizes, and image conditions for robust OCR.'
      ],
    },
  },
  {
    slug: 'attendance-face-recognition',
    title: 'AI-Powered Attendance System with Face Recognition (DL & ML)',
    summary: 'Automated attendance system leveraging deep learning and machine learning for face recognition.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/attendance-system.png',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'Machine Learning'],
    githubUrl: 'https://github.com/Santhosh17905/AI-Powered-Attendance-System-with-Face-Recognition',
    details: {
      overview: 'Developing an intelligent attendance system that automatically marks presence by recognizing individuals through their facial features using advanced AI techniques.',
      methodology: [
        'Real-time face detection and alignment from camera streams.',
        'Training a face recognition model (e.g., FaceNet, ArcFace) for identification.',
        'Integrating with a database for attendance records and user management.',
        'Ensuring robustness against varying lighting, angles, and partial occlusions.'
      ],
    },
  },
  {
    slug: 'vehicle-detection-tracking',
    title: 'Smart Traffic Analytics System: Vehicle Detection and Tracking',
    summary: 'Detecting and tracking vehicles in real-time video streams for traffic analysis or autonomous driving.',
    category: 'Computer Vision',
    image: '/projects/vehicle-track.png',
    technologies: ['Python', 'OpenCV', 'YOLO', 'Deep Learning'],
    githubUrl: 'https://github.com/Santhosh17905/Smart-Traffic-Analytics-System',
    details: {
      overview: 'A computer vision project focused on identifying and following vehicles in video footage, essential for smart city applications and advanced driver-assistance systems.',
      methodology: [
        'Utilizing object detection models (e.g., YOLO, SSD) for vehicle localization.',
        'Implementing multi-object tracking algorithms (e.g., DeepSORT, ByteTrack).',
        'Counting vehicles, analyzing traffic flow, and estimating speed.',
        'Handling occlusions, varying vehicle types, and environmental conditions.'
      ],
    },
  },
  {
    slug: 'license-plate-recognition',
    title: 'License Plate Recognition (LPR) and ANPR System',
    summary: 'Automatically identifying and extracting text from vehicle license plates.',
    category: 'Computer Vision',
    image: '/projects/license-plate.png',
    technologies: ['Python', 'OpenCV', 'Tesseract', 'OCR'],
    githubUrl: 'https://github.com/Santhosh17905/License-Plate-Recognition-System-ANPR-',
    details: {
      overview: 'A specialized OCR application for automatically reading and digitizing vehicle license plate numbers from images or video frames.',
      methodology: [
        'Detecting license plate regions in images using computer vision techniques.',
        'Segmenting individual characters on the plate for OCR processing.',
        'Applying Tesseract or custom OCR models to extract alphanumeric characters.',
        'Post-processing for accuracy, format validation, and database integration.'
      ],
    },
  },
  {
    slug: 'drowsiness-detection',
    title: 'Drowsiness Detection System',
    summary: 'Monitoring driver alertness and detecting signs of drowsiness to prevent accidents.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/drowsiness.png',
    technologies: ['Python', 'OpenCV', 'Dlib', 'Deep Learning'],
    githubUrl: 'https://github.com/Santhosh17905/Real-Time-Driver-Drowsiness-Detection-System',
    details: {
      overview: 'A critical safety project using computer vision to analyze facial cues (e.g., eye closure, yawning) to detect driver drowsiness in real-time.',
      methodology: [
        'Detecting facial landmarks around eyes and mouth using Dlib.',
        'Calculating Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) as indicators.',
        'Training a classifier to identify drowsiness patterns based on these metrics.',
        'Alerting the driver upon detection of fatigue to prevent accidents.'
      ],
    },
  },
  {
    slug: 'road-sign-recognition',
    title: 'AI-Powered Traffic Sign Classification System for Autonomous Vehicles',
    summary: 'Recognizing and classifying various road signs to assist autonomous navigation systems.',
    category: 'Computer Vision',
    featured: true,
    image: '/projects/road-sign.png',
    technologies: ['Python', 'OpenCV', 'Deep Learning', 'CNN'],
    githubUrl: 'https://github.com/Santhosh17905/AI-Powered-Traffic-Sign-Classification-System-for-Autonomous-Vehicles',
    details: {
      overview: 'A vital component for autonomous driving, this project focuses on accurately identifying and interpreting traffic signs in real-time camera feeds.',
      methodology: [
        'Collecting and annotating diverse road sign datasets (e.g., GTSRB).',
        'Training Convolutional Neural Networks for robust classification.',
        'Implementing real-time detection and recognition in video streams.',
        'Handling varying lighting, weather, and sign conditions for reliability.'
      ],
    },
  },
]


/* ----------------------------- Helper functions ---------------------------- */

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

export function getProjectCategories(): ProjectCategory[] {
  return Array.from(new Set(projects.map((p) => p.category)))
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category)
}
