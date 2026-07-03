export const COURSE_QUIZZES = {
  ml: {
    beginner: {
      title: 'Machine Learning Essentials — Beginner Final Assessment',
      intro: 'You have completed all 8 Machine Learning Beginner modules: what is ML, data preparation, linear regression, classification, model evaluation, scikit-learn Pipelines, and two end-to-end projects. These 30 questions test whether you can apply these concepts to real problems — the way a working ML engineer would.',
      questions: [
        // ── ML Concepts & Workflow (Q1–5) ─────────────────────────
        {
          id: 'ml-b-f-1',
          type: 'mcq',
          prompt: 'Predicting the sale price of a house given its features (size, location, age) is an example of which type of ML problem?',
          options: ['Binary Classification — there are two outcomes (sold / not sold)', 'Regression — the output is a continuous numeric value', 'Unsupervised Learning — there are no labels for sale prices', 'Reinforcement Learning — the agent learns from buyer feedback'],
          answerIndex: 1,
          explanation: 'Regression targets a continuous number. Classification targets a discrete category. Sale price is continuous — making this a regression problem regardless of domain.'
        },
        {
          id: 'ml-b-f-2',
          type: 'mcq',
          prompt: 'What is "data leakage" in a Machine Learning project?',
          options: ['When the model accidentally deletes rows from the dataset during training', 'When information from the test set influences the training process — causing unrealistically optimistic performance metrics that will not hold in production', 'When the database connection drops during model training', 'When two features are highly correlated with each other'],
          answerIndex: 1,
          explanation: 'Leakage occurs when test data influences training (directly or via shared preprocessing steps). The model appears to perform well, but it has "seen" the test set — the real-world score will be much lower.'
        },
        {
          id: 'ml-b-f-3',
          type: 'mcq',
          prompt: 'In the standard ML workflow, at which step do you first touch test data?',
          options: ['Before training — to understand the full data distribution', 'Only after training, during evaluation — test data must never be seen during any training or preprocessing fitting step', 'During the EDA phase, to check for missing values', 'During preprocessing — to fit the scaler on the complete dataset'],
          answerIndex: 1,
          explanation: 'Test data is a simulation of future, unseen data. Touching it before evaluation — even just to fit a scaler — contaminates the evaluation and produces optimistic metrics.'
        },
        {
          id: 'ml-b-f-4',
          type: 'fill-blank',
          prompt: 'The three main types of Machine Learning are Supervised Learning, Unsupervised Learning, and ______ Learning.',
          correctAnswers: ['reinforcement', 'Reinforcement'],
          explanation: 'Supervised = labelled examples. Unsupervised = no labels, find structure. Reinforcement = agent learns from reward/penalty signals through trial and error.'
        },
        {
          id: 'ml-b-f-5',
          type: 'mcq',
          prompt: 'You train a model with training accuracy 0.99 and test accuracy 0.71. What is the most likely problem?',
          options: ['Underfitting — the model is too simple to capture the pattern', 'Overfitting — the model memorised training data but fails to generalise to new examples', 'The dataset is too small to train any model', 'The test/train split was performed incorrectly'],
          answerIndex: 1,
          explanation: 'A large gap between train and test accuracy is the hallmark of overfitting. The model learned the training data\'s noise and edge cases so well it cannot transfer those rules to new examples.'
        },

        // ── Data Preparation (Q6–10) ──────────────────────────────
        {
          id: 'ml-b-f-6',
          type: 'mcq',
          prompt: 'Which scikit-learn function correctly splits data into training and test sets while preserving the class ratio?',
          options: ['train_test_split(X, y, stratify=y)', 'split_data(X, y, balanced=True)', 'X.split(0.8, stratified=True)', 'sklearn.split(X, y, class_ratio="preserve")'],
          answerIndex: 0,
          explanation: 'train_test_split with stratify=y uses the target column to ensure the same class proportion in both splits. Essential for imbalanced classification datasets.'
        },
        {
          id: 'ml-b-f-7',
          type: 'mcq',
          prompt: 'A "Gender" column contains "Male" and "Female". You apply LabelEncoder, producing Male=1, Female=0. Why might this be problematic for a linear model?',
          options: ['Linear models cannot process any encoded categorical features', 'LabelEncoder implies Male > Female numerically — the model might learn a spurious linear relationship between the numerical encoding and the target', 'The encoding should use 0.5 and 1.5 instead of 0 and 1', 'There is no problem — any numeric encoding works for linear models'],
          answerIndex: 1,
          explanation: 'For binary features with no order, LabelEncoder\'s 0/1 encoding is actually fine for most algorithms. For multi-category nominal features, the implied ordering becomes a real problem. OneHotEncoder eliminates this ambiguity entirely.'
        },
        {
          id: 'ml-b-f-8',
          type: 'mcq',
          prompt: 'What does SimpleImputer(strategy="median") do to a column with missing values?',
          options: ['Deletes all rows where the column is missing', 'Replaces each missing value with the median of the non-missing values in that column', 'Replaces missing values with zero', 'Replaces missing values with the most frequent value in the column'],
          answerIndex: 1,
          explanation: 'strategy="median" fills NaN with the column median. Median is preferred over mean when the column has outliers (the median is more robust). strategy="most_frequent" is better for categorical columns.'
        },
        {
          id: 'ml-b-f-9',
          type: 'mcq',
          prompt: 'Why does K-Nearest Neighbours require StandardScaler but a Random Forest does not?',
          options: ['Random Forests only work with boolean features', 'KNN computes Euclidean distances — an unscaled large-valued feature dominates. Random Forests split on thresholds and are completely scale-invariant', 'KNN is a linear model; Random Forests are non-linear', 'StandardScaler breaks tree-based algorithms'],
          answerIndex: 1,
          explanation: 'Distance-based algorithms (KNN, SVM, Neural Networks) are sensitive to feature scales. Tree-based algorithms (Decision Tree, Random Forest, Gradient Boosting) split on ordered thresholds — the absolute scale is irrelevant.'
        },
        {
          id: 'ml-b-f-10',
          type: 'fill-blank',
          prompt: 'The pandas method to count missing values per column is df.______.sum().',
          correctAnswers: ['isnull()', 'isnull', 'isna()', 'isna'],
          explanation: '.isnull() (or equivalently .isna()) returns a True/False mask per cell. .sum() then counts the True values per column, giving you missing-value counts.'
        },

        // ── Linear Regression (Q11–15) ───────────────────────────
        {
          id: 'ml-b-f-11',
          type: 'mcq',
          prompt: 'After training a Linear Regression model, model.coef_ returns [-0.12, 0.45, 0.03]. What does the 0.45 value mean for its corresponding feature?',
          options: ['45% of predictions use this feature', 'For each one-unit increase in that feature, the model\'s prediction increases by 0.45', 'The feature has a 45% correlation with the target', 'The feature was assigned index 45 by the algorithm'],
          answerIndex: 1,
          explanation: 'Linear Regression coefficients are slopes: each unit increase in the feature produces a coefficient-sized change in the prediction. Negative coefficients reduce the prediction; positive ones increase it.'
        },
        {
          id: 'ml-b-f-12',
          type: 'mcq',
          prompt: 'Your regression model has RMSE = 45,000 and MAE = 15,000 when predicting house prices in dollars. What does the large gap between RMSE and MAE indicate?',
          options: ['The model is performing excellently on all examples', 'The model makes occasional very large errors — squaring amplifies them in RMSE. A few predictions are wildly wrong even though most are close', 'RMSE and MAE should always be equal for a correctly trained model', 'The gap means the model is underfitting'],
          answerIndex: 1,
          explanation: 'RMSE >> MAE signals large-error outliers. Average absolute error is $15k (typical prediction), but RMSE-boosting large errors mean some predictions are off by $100k+. Investigate those cases — they reveal model blind spots.'
        },
        {
          id: 'ml-b-f-13',
          type: 'mcq',
          prompt: 'Which regularised linear regression variant performs automatic feature selection by driving some coefficients to exactly zero?',
          options: ['Ridge (L2 regularisation)', 'Lasso (L1 regularisation)', 'ElasticNet (L1 + L2)', 'Standard Linear Regression with cross-validation'],
          answerIndex: 1,
          explanation: 'Lasso\'s L1 penalty has a geometric property that produces exactly-zero coefficients. Features with zero coefficients are effectively excluded. Ridge shrinks all coefficients but keeps every feature.'
        },
        {
          id: 'ml-b-f-14',
          type: 'mcq',
          prompt: 'What does an R² score of -0.05 tell you about a regression model?',
          options: ['The model explains 5% of variance — a minor performance', 'The model performs WORSE than simply predicting the mean of y for every example — a sign the model is fundamentally wrong', 'R² cannot be negative — this indicates a calculation error', 'The model has 5% overfitting'],
          answerIndex: 1,
          explanation: 'R²=0 = predicting the mean for every example. R²<0 = the model\'s variance in predictions is larger than the variance in y itself — worse than a trivial baseline. Always compare to R²=0 as your floor.'
        },
        {
          id: 'ml-b-f-15',
          type: 'fill-blank',
          prompt: 'The scikit-learn class for standard linear regression is ______ from sklearn.linear_model.',
          correctAnswers: ['LinearRegression', 'LinearRegression()'],
          explanation: 'from sklearn.linear_model import LinearRegression. model = LinearRegression(); model.fit(X_train, y_train). Two lines to train a complete regression model.'
        },

        // ── Classification (Q16–20) ───────────────────────────────
        {
          id: 'ml-b-f-16',
          type: 'mcq',
          prompt: 'model.predict_proba(X_test)[:, 1] returns what for a binary classifier?',
          options: ['The binary class prediction (0 or 1) for each row', 'The probability that each example belongs to class 1 (the positive class)', 'The feature importance scores for each column', 'The cross-validation scores for each fold'],
          answerIndex: 1,
          explanation: 'predict_proba returns [P(class=0), P(class=1)] per row. [:, 1] selects the positive-class probabilities. These are used for ROC curves, threshold tuning, and ranking examples by risk.'
        },
        {
          id: 'ml-b-f-17',
          type: 'mcq',
          prompt: 'A Decision Tree trained with no max_depth restriction achieves 100% training accuracy. Is this a good model?',
          options: ['Yes — 100% accuracy is the best possible result', 'No — an unrestricted tree creates a leaf for each training example, memorising every training row. It will perform far worse on new data (overfitting)', 'It depends on the dataset size', 'Yes, as long as the test accuracy is above 80%'],
          answerIndex: 1,
          explanation: 'An unconstrained decision tree partitions training data until each leaf has a single example — 100% training accuracy by memorisation. Setting max_depth, min_samples_leaf, or min_samples_split prevents this.'
        },
        {
          id: 'ml-b-f-18',
          type: 'mcq',
          prompt: 'What is the main advantage of Random Forest over a single Decision Tree?',
          options: ['Random Forests train faster than a single tree', 'Combining hundreds of trees trained on random subsets reduces overfitting — individual tree errors average out, producing more stable and accurate predictions', 'Random Forests can only handle classification, not regression', 'Random Forests do not require a train/test split'],
          answerIndex: 1,
          explanation: 'Ensemble methods reduce variance by averaging. Uncorrelated errors cancel out across many diverse trees. The result: a Random Forest is almost always more accurate and less overfit than its best individual tree.'
        },
        {
          id: 'ml-b-f-19',
          type: 'mcq',
          prompt: 'In the Titanic dataset, sex, pclass, and fare are the strongest predictors of survival. When a Decision Tree splits on "sex" first, what does this mean?',
          options: ['Sex has the highest correlation coefficient with survived', 'Sex is the single feature that, when used as the first split, best separates survivors from non-survivors — maximising the purity of each resulting branch', 'The algorithm randomly selected sex as the root node', 'Sex was first alphabetically in the feature list'],
          answerIndex: 1,
          explanation: 'Decision Trees select splits using information gain or Gini impurity reduction. The root split is the single feature-threshold combination that most reduces impurity in the data — in Titanic, sex (female vs male) is that feature.'
        },
        {
          id: 'ml-b-f-20',
          type: 'fill-blank',
          prompt: 'The scikit-learn class for an ensemble of decision trees that trains on random feature and row subsets is ______.',
          correctAnswers: ['RandomForestClassifier', 'RandomForestRegressor', 'RandomForest'],
          explanation: 'sklearn.ensemble.RandomForestClassifier for classification, RandomForestRegressor for regression. Both train n_estimators trees on bootstrapped samples with random feature subsets.'
        },

        // ── Model Evaluation (Q21–25) ─────────────────────────────
        {
          id: 'ml-b-f-21',
          type: 'mcq',
          prompt: 'In a confusion matrix, what is a False Positive?',
          options: ['Correctly predicted a positive example', 'Predicted Positive (e.g., churn), but the example was actually Negative (no churn)', 'Predicted Negative, but the example was actually Positive', 'A prediction that falls outside the valid range'],
          answerIndex: 1,
          explanation: 'False Positive = Type I error. Predicted class 1, actual class 0. In churn: the model says the customer will leave, but they stay. In spam: a legitimate email flagged as spam.'
        },
        {
          id: 'ml-b-f-22',
          type: 'mcq',
          prompt: 'For a disease screening test, which metric should you prioritise — Precision or Recall?',
          options: ['Precision — you want to minimise false alarms', 'Recall — you want to catch every actual case, even if it means more false alarms. Missing a real diagnosis is far more costly than an extra follow-up test', 'Always accuracy — it is the most comprehensive metric', 'They are equivalent for medical use cases'],
          answerIndex: 1,
          explanation: 'In screening, False Negatives (missed cases) are catastrophic. High Recall minimises FNs. The false positive cost (unnecessary follow-up) is comparatively low. After high-recall screening, a higher-precision confirmatory test is applied.'
        },
        {
          id: 'ml-b-f-23',
          type: 'mcq',
          prompt: 'AUC-ROC = 0.50 for your classifier. What does this mean?',
          options: ['The model correctly classifies 50% of examples', 'The model performs no better than random guessing — it cannot distinguish positive from negative examples at all', 'The model is 50% overfit', 'The model needs 50% more training data'],
          answerIndex: 1,
          explanation: 'AUC = 0.5 = the ROC curve is a diagonal line (equivalent to randomly ranking examples). The model has learned nothing. AUC > 0.5 shows discriminative ability; AUC < 0.5 means predictions are worse than random.'
        },
        {
          id: 'ml-b-f-24',
          type: 'mcq',
          prompt: 'Why do you use cross_val_score(pipeline, X_train, y_train) rather than cross_val_score(pipeline, X, y) when cross-validating a Pipeline?',
          options: ['cross_val_score requires smaller datasets', 'To avoid using test set data during model selection — the test set is held out entirely until final evaluation. CV on the full X, y would let CV folds include test examples', 'X_train is always larger, so CV scores are more reliable', 'Pipelines cannot be cross-validated on the full dataset due to a sklearn limitation'],
          answerIndex: 1,
          explanation: 'If you cross-validate on the full dataset (X, y), your held-out test set ends up in CV folds, giving it implicit influence on model selection. Always CV on training data only; use the true test set only once at the very end.'
        },
        {
          id: 'ml-b-f-25',
          type: 'fill-blank',
          prompt: 'The metric that is the harmonic mean of Precision and Recall is called the ______ score.',
          correctAnswers: ['f1', 'F1', 'f1-score', 'F1-score'],
          explanation: 'F1 = 2 * (Precision * Recall) / (Precision + Recall). It gives a single balanced number when you cannot sacrifice either precision or recall, and is especially useful when classes are imbalanced.'
        },

        // ── Pipelines & Deployment (Q26–30) ──────────────────────
        {
          id: 'ml-b-f-26',
          type: 'mcq',
          prompt: 'What is the correct order of steps when building a sklearn Pipeline for classification?',
          options: ['model → scaler → imputer', 'imputer → scaler → model (preprocessing first, model last)', 'scaler → model → imputer', 'The order does not matter in a Pipeline'],
          answerIndex: 1,
          explanation: 'Preprocessing must prepare data before the model sees it. Impute missing values first (so the scaler has no NaN), scale next (so the model receives normalized features), model last. Pipeline enforces this order automatically.'
        },
        {
          id: 'ml-b-f-27',
          type: 'mcq',
          prompt: 'What does ColumnTransformer allow that a plain Pipeline cannot?',
          options: ['Running multiple models at the same time', 'Applying different preprocessing steps to different subsets of columns — e.g., StandardScaler on numeric columns and OneHotEncoder on categorical columns simultaneously', 'Automatically detecting the best preprocessing strategy for each column', 'Training the model on GPU instead of CPU'],
          answerIndex: 1,
          explanation: 'ColumnTransformer routes column groups through separate transformers in parallel, then concatenates the results. It is the essential tool for datasets with mixed data types.'
        },
        {
          id: 'ml-b-f-28',
          type: 'mcq',
          prompt: 'In GridSearchCV, what does the scoring="roc_auc" parameter specify?',
          options: ['The model family to search (ROC-based models only)', 'The metric used to rank parameter combinations and select the best — combinations producing higher AUC-ROC are preferred', 'The number of cross-validation folds to use', 'The minimum AUC required before the search stops early'],
          answerIndex: 1,
          explanation: 'scoring tells GridSearchCV what to optimise. Use "accuracy" for balanced classes, "roc_auc" or "f1" for imbalanced classes. The combination with the highest scoring metric becomes the best_estimator_.'
        },
        {
          id: 'ml-b-f-29',
          type: 'mcq',
          prompt: 'You save a trained pipeline with joblib.dump(pipeline, "model.pkl"). What is preserved in the file?',
          options: ['Only the model weights — preprocessing steps must be refit on new data', 'The complete fitted pipeline: every preprocessor\'s fitted parameters (scaler means/stds, encoder categories) and the trained model — predict() on the loaded pipeline works end-to-end', 'A text description of the pipeline structure only', 'The original training data compressed for future re-training'],
          answerIndex: 1,
          explanation: 'joblib serialises the entire Python object including its state. For a fitted Pipeline, that includes the StandardScaler\'s learned mean and std, the OneHotEncoder\'s learned categories, and all model weights — everything needed to make predictions on new data.'
        },
        {
          id: 'ml-b-f-30',
          type: 'mcq',
          prompt: 'Across this entire beginner ML course — data prep, regression, classification, evaluation, Pipelines — what is the single most important practice to master?',
          options: ['Memorising every scikit-learn class and its parameters', 'The discipline of strict train/test separation: all preprocessing fits on training data only, all evaluation happens on held-out test data only — this is what makes ML results trustworthy', 'Choosing the most complex model available to maximise accuracy', 'Always using cross-validation instead of a fixed test set'],
          answerIndex: 1,
          explanation: 'Every other skill builds on this foundation. Correct train/test separation is what separates a trustworthy model from a misleading one. Get this wrong and no amount of algorithmic sophistication will compensate.'
        }
      ]
    },
    intermediate: {
      title: 'Machine Learning Essentials — Intermediate Final Assessment',
      description: 'SVMs, clustering, PCA, neural networks, NLP, and model deployment',
      questions: [
        { id: 'q1', type: 'mcq', prompt: 'In SVM, the support vectors are:', options: ['All training data points', 'The training points on the margin boundary that define the decision hyperplane', 'The misclassified points', 'The class centroids'], answerIndex: 1, explanation: 'Only support vectors determine the SVM boundary. All other training points are irrelevant — removing them would not change the model.' },
        { id: 'q2', type: 'mcq', prompt: 'Low C in a soft-margin SVM results in:', options: ['Overfitting with a tight margin', 'A wider margin that tolerates more training errors — better generalisation', 'No effect on the boundary', 'More support vectors but lower accuracy'], answerIndex: 1, explanation: 'C trades off margin width vs training error tolerance. Low C = wider margin = more training errors = better generalisation. High C = tighter margin = fewer training errors = overfitting risk.' },
        { id: 'q3', type: 'fill', prompt: 'The ________ kernel transforms data into higher dimensions to enable non-linear classification without explicitly computing the transformation.', answer: 'RBF', explanation: 'The RBF (Radial Basis Function) kernel, also called Gaussian kernel, is the most common non-linear SVM kernel. It creates circular/curved boundaries by implicitly mapping to infinite-dimensional space.' },
        { id: 'q4', type: 'mcq', prompt: 'Before fitting an SVM you must:', options: ['Encode all features as binary', 'StandardScale features — SVM is distance-based and dominated by large-scale features', 'Remove all outliers', 'Apply PCA to reduce to 2 dimensions'], answerIndex: 1, explanation: 'SVM measures margin in Euclidean space. Features with large values (income: 50000) dominate those with small values (years: 5). StandardScaler ensures equal contribution.' },
        { id: 'q5', type: 'mcq', prompt: 'K-Means assigns each point to a cluster by:', options: ['Density: points in dense regions belong to the same cluster', 'Nearest centroid — the cluster whose centre is closest in Euclidean distance', 'Random assignment that improves over iterations', 'Hierarchical linkage between nearby points'], answerIndex: 1, explanation: 'K-Means E-step: assign each point to its nearest centroid. M-step: recompute centroids as the mean of assigned points. Repeat until convergence.' },
        { id: 'q6', type: 'mcq', prompt: 'The elbow method for K selection identifies:', options: ['The K with the highest silhouette score', 'The K where inertia\'s rate of decrease sharply drops — adding more clusters gives diminishing returns', 'The K equal to the square root of n', 'The minimum number of clusters to achieve 90% accuracy'], answerIndex: 1, explanation: 'Inertia always decreases as K grows. The elbow is the inflection point where the curve bends — beyond it, extra clusters don\'t meaningfully reduce inertia.' },
        { id: 'q7', type: 'fill', prompt: 'DBSCAN assigns label ________ to outlier points that don\'t belong to any dense cluster.', answer: '-1', explanation: 'DBSCAN label = −1 means noise. This is a key advantage over K-Means: instead of forcing outliers into a cluster, DBSCAN identifies them explicitly.' },
        { id: 'q8', type: 'mcq', prompt: 'Silhouette score of −0.2 indicates:', options: ['Well-separated clusters', 'Points may be assigned to the wrong cluster — poor clustering quality', 'The optimal number of clusters has been found', 'Cluster variance is low'], answerIndex: 1, explanation: 'Silhouette near −1: point is closer to a neighbouring cluster than its own. This means poor cluster assignment — the clustering is worse than random.' },
        { id: 'q9', type: 'mcq', prompt: 'PCA should be applied AFTER StandardScaler because:', options: ['PCA requires integer inputs', 'PCA is variance-based — without scaling, high-magnitude features dominate the principal components unfairly', 'Scaling reduces computation time for PCA', 'PCA does not work on continuous data'], answerIndex: 1, explanation: 'If income is 0-100,000 and age is 0-80, PCA would almost entirely pick up income variance. Scaling equalises each feature\'s contribution.' },
        { id: 'q10', type: 'mcq', prompt: 'n_components=0.95 in PCA(n_components=0.95) means:', options: ['Use 95 components', 'Automatically choose the minimum number of components that explain 95% of variance', 'Keep 95% of training examples', 'Apply 95% regularisation'], answerIndex: 1, explanation: 'Passing a float < 1 to PCA\'s n_components selects enough components to explain that fraction of variance — automatically choosing k.' },
        { id: 'q11', type: 'fill', prompt: 'PCA components are ________ to each other — they are uncorrelated by construction.', answer: 'orthogonal', explanation: 'Orthogonality (perpendicularity in feature space) means zero correlation between components. This is why PCA is also used to remove multicollinearity before linear models.' },
        { id: 'q12', type: 'mcq', prompt: 'ReLU activation is preferred in hidden layers because:', options: ['It outputs values in (0,1)', 'It avoids the vanishing gradient problem — gradient is 1 for positive inputs, enabling deep networks to train effectively', 'It is differentiable at zero', 'It normalises hidden layer outputs'], answerIndex: 1, explanation: 'Sigmoid saturates at 0 and 1 — gradient ≈ 0 there. Backpropagation through many sigmoid layers gives near-zero gradients to early layers. ReLU has constant gradient 1 for positive x, solving this.' },
        { id: 'q13', type: 'mcq', prompt: 'hidden_layer_sizes=(64, 32, 16) creates a neural network with:', options: ['1 hidden layer of 112 neurons', '3 hidden layers: 64 neurons, then 32, then 16 — plus the input and output layers', '64 input features and 16 outputs', '112 total parameters'], answerIndex: 1, explanation: 'Each tuple element = one hidden layer with that many neurons. (64, 32, 16) = 3 hidden layers. The input layer size comes from features; output from the task.' },
        { id: 'q14', type: 'fill', prompt: 'Early stopping monitors ________ performance and stops training when it stops improving — preventing overfitting.', answer: 'validation', explanation: 'Early stopping holds out a validation fraction, tracks its score each epoch, and stops when no improvement is seen for n_iter_no_change consecutive epochs. The best weights are restored.' },
        { id: 'q15', type: 'mcq', prompt: 'The alpha parameter in MLPClassifier adds L2 regularisation by:', options: ['Reducing the learning rate each epoch', 'Adding a penalty of α×Σw² to the loss function — shrinking large weights and reducing overfitting', 'Dropping neurons randomly during training', 'Clipping gradient values'], answerIndex: 1, explanation: 'L2 regularisation (weight decay) discourages large weights, forcing the model to distribute learning across many features rather than relying heavily on a few.' },
        { id: 'q16', type: 'mcq', prompt: 'TF-IDF assigns high weight to a word that:', options: ['Appears in every document (like "the")', 'Appears frequently in this document but rarely across the corpus — a discriminating term', 'Has many letters', 'Appears exactly once anywhere in the corpus'], answerIndex: 1, explanation: 'TF-IDF = TF × log(N/df). High TF: frequent in this document. High IDF: rare across all documents. Common words like "the" have near-zero IDF.' },
        { id: 'q17', type: 'fill', prompt: 'ngram_range=(1,2) extracts both single words (unigrams) and pairs of consecutive words (________).' , answer: 'bigrams', explanation: 'Bigrams capture word pairs like "not good", "highly recommend", "terrible movie". These carry meaning that individual words miss — crucial for sentiment and topic classification.' },
        { id: 'q18', type: 'mcq', prompt: 'For high-dimensional sparse text data (TF-IDF), which classifier is the fastest and typically performs best?', options: ['Random Forest', 'k-Nearest Neighbours', 'LinearSVC — optimised for sparse matrices and large feature spaces', 'MLPClassifier'], answerIndex: 2, explanation: 'LinearSVC uses liblinear, optimised for sparse high-dimensional data. It trains in seconds on 10,000+ features vs minutes for tree-based methods, with comparable or better accuracy.' },
        { id: 'q19', type: 'mcq', prompt: 'The TextPreprocessor class in the NLP module inherits from BaseEstimator, TransformerMixin so it can:', options: ['Access GPU for faster processing', 'Be used inside a sklearn Pipeline with fit()/transform() — enabling end-to-end Pipeline serialisation with joblib', 'Handle multiple languages automatically', 'Tokenise using BERT vocabulary'], answerIndex: 1, explanation: 'Inheriting from these sklearn mixins gives the class pipeline-compatible fit() and transform() methods. This means the entire preprocessing → vectorisation → classification chain can be saved as one pickle file.' },
        { id: 'q20', type: 'mcq', prompt: 'In the customer segmentation mini project, you used PCA AFTER K-Means clustering. PCA was used for:', options: ['Improving cluster quality', '2D visualisation of high-dimensional cluster assignments — PCA compresses to 2 axes for a scatter plot', 'Reducing features before clustering', 'Removing outliers'], answerIndex: 1, explanation: 'PCA for visualisation: you can\'t scatter-plot 5-dimensional RFM space. PCA to 2 components gives a 2D view where clusters can be visually inspected — even if PCA was not used in the clustering itself.' },
        { id: 'q21', type: 'mcq', prompt: 'Saving a sklearn Pipeline with joblib.dump saves:', options: ['Only the final model weights', 'The entire pipeline including all preprocessing transformers — ensuring identical preprocessing at serving time', 'The training data', 'Only the hyperparameters'], answerIndex: 1, explanation: 'A serialised Pipeline contains the fitted TF-IDF vocabulary, scaler statistics (mean, std), and model weights. Loading it in production applies identical transformations to new data.' },
        { id: 'q22', type: 'mcq', prompt: 'Pydantic Field(ge=300, le=850) on credit_score in the FastAPI request model:', options: ['Sets the default credit score to 300', 'Validates that the input is between 300 and 850 — rejecting invalid requests with a 422 error before they hit the model', 'Stores the acceptable range in the database', 'Computes the credit score automatically'], answerIndex: 1, explanation: 'Pydantic validation runs before your function body. ge=300 (greater or equal) and le=850 (less or equal) enforce business rules at the API boundary, protecting the model from bad inputs.' },
        { id: 'q23', type: 'fill', prompt: 'FastAPI auto-generates interactive API documentation accessible at the ________ endpoint.', answer: '/docs', explanation: 'FastAPI reads your route definitions, Pydantic models, and docstrings to build Swagger UI at /docs. No extra documentation code required — it stays in sync with your code automatically.' },
        { id: 'q24', type: 'mcq', prompt: 'Training-serving skew in ML deployment means:', options: ['The model performs better on new data than on training data', 'Preprocessing in training and serving differ — causing the model to receive different feature distributions than it was trained on', 'Serving is slower than training', 'The model is retrained too frequently'], answerIndex: 1, explanation: 'If you train with StandardScaler(mean=50) but serve without scaling, features shift. The model predicts on different inputs than it learned from — catastrophic for performance.' },
        { id: 'q25', type: 'mcq', prompt: 'Dockerising an ML API solves which problem?', options: ['The model is automatically retrained when new data arrives', '"Works on my machine" — dependencies, Python version, and environment are packaged so the app runs identically anywhere', 'The API is automatically load-balanced', 'Docker improves model prediction accuracy'], answerIndex: 1, explanation: 'Docker containers encapsulate everything needed to run the app. A Docker image built on your laptop runs identically on AWS, GCP, Azure, or a colleague\'s machine.' },
        { id: 'q26', type: 'mcq', prompt: 'In the news classifier capstone, cross_val_score with cv=5 was used to:', options: ['Split data into 5 equal classes', 'Average test accuracy across 5 different train/test splits — giving a more stable and trustworthy performance estimate than a single split', 'Train 5 different models and pick the best', 'Reduce the training time by parallelising'], answerIndex: 1, explanation: 'A single train/test split might be lucky or unlucky. 5-fold CV trains on 4 folds and tests on the remaining 1, rotating 5 times. The mean ± std gives a reliable performance estimate.' },
        { id: 'q27', type: 'fill', prompt: 'In DBSCAN, the ε (epsilon) parameter controls the ________ of a point\'s neighbourhood — how far away points can be to be considered neighbours.', answer: 'radius', explanation: 'ε is the neighbourhood radius. A point with ≥ min_samples neighbours within ε is a core point. Too large ε merges distinct clusters; too small creates too many noise points.' },
        { id: 'q28', type: 'mcq', prompt: 'In the customer segmentation project, the "At-Risk / Lapsed" segment was identified by:', options: ['High frequency and low monetary spend', 'High recency (many days since last purchase) — long time since last order', 'Low app sessions and high cart abandonment', 'High monetary spend with low frequency'], answerIndex: 1, explanation: 'Recency is the strongest churn signal in RFM analysis. Customers who haven\'t purchased in 120+ days are at high risk of churning or already lapsed. High recency = bad in RFM context.' },
        { id: 'q29', type: 'mcq', prompt: 'The @app.get("/health") endpoint in the FastAPI deployment is used by:', options: ['End users to check their own health data', 'Load balancers and orchestrators (Kubernetes) to verify the service is running — a non-200 response triggers a container restart', 'Monitoring dashboards for ML accuracy', 'The model to check training status'], answerIndex: 1, explanation: 'Health check endpoints are a production requirement. Kubernetes, AWS ECS, and other orchestrators ping /health to know if the container is alive. A failing health check triggers a restart.' },
        { id: 'q30', type: 'mcq', prompt: 'The best overall takeaway from the ML Intermediate track is:', options: ['Neural networks always outperform simpler models', 'Each algorithm has a domain where it excels — SVMs for high-dimensional text, K-Means for segmentation, PCA for compression, MLP for pattern learning, TF-IDF+SVM for NLP. Knowing which tool fits which problem is the skill.', 'More features always improve model performance', 'Deep learning replaces all other ML methods'], answerIndex: 1, explanation: 'There is no universal best model. A working ML engineer picks the right algorithm for the data type, size, and business goal — and validates the choice with proper evaluation.' }
      ]
    },
    advanced: {
      title: 'Machine Learning Essentials — Advanced Final Assessment',
      description: 'PyTorch, CNNs, Transformers, MLOps, XGBoost/LightGBM, Reinforcement Learning, and production deployment',
      questions: [
        { id: 'ml-a-f-1', type: 'mcq', prompt: 'In PyTorch, what is the purpose of requires_grad=True on a tensor?', options: ['It moves the tensor to the GPU', 'It tells the autograd engine to track operations on this tensor so gradients can be computed during backward()', 'It makes the tensor read-only', 'It converts the tensor to a NumPy array'], answerIndex: 1, explanation: 'requires_grad=True opts a tensor into PyTorch\'s computation graph. Every operation involving it is recorded, enabling gradient computation via .backward(). Model parameters have this set automatically.' },
        { id: 'ml-a-f-2', type: 'fill', prompt: 'The three steps of a PyTorch training iteration in order are: zero gradients, ________, compute loss, call backward(), then optimizer.step().', answer: 'forward pass', explanation: 'The canonical loop: zero_grad() → forward(x) → loss() → backward() → step(). Zeroing gradients first prevents accumulation from the previous iteration.' },
        { id: 'ml-a-f-3', type: 'mcq', prompt: 'model.eval() affects which two layer types differently from model.train()?', options: ['Linear and Conv2d', 'Dropout and BatchNorm — Dropout is disabled; BatchNorm uses running statistics instead of batch statistics', 'ReLU and MaxPool', 'Embedding and LSTM'], answerIndex: 1, explanation: 'eval() mode: Dropout passes all neurons (no random zeroing). BatchNorm uses exponential moving averages learned during training instead of the current batch\'s statistics — giving deterministic, stable inference.' },
        { id: 'ml-a-f-4', type: 'mcq', prompt: 'MaxPool2d(2) applied to a 28×28 feature map produces:', options: ['26×26', '14×14', '56×56', '7×7'], answerIndex: 1, explanation: 'MaxPool2d with kernel_size=2 and default stride=2 halves each spatial dimension. 28/2 = 14. This reduces parameters, computation, and introduces local translation invariance.' },
        { id: 'ml-a-f-5', type: 'fill', prompt: 'In a CNN, ________ normalisation after a conv layer normalises activations within the mini-batch, stabilising training and enabling higher learning rates.', answer: 'batch', explanation: 'BatchNorm2d normalises each channel\'s activations across the batch to zero mean, unit variance, then applies learned scale (γ) and shift (β). It effectively acts as regularisation and removes sensitivity to weight initialisation.' },
        { id: 'ml-a-f-6', type: 'mcq', prompt: 'Transfer learning works well for CNNs because:', options: ['Pretrained models are always smaller', 'Early layers learn universal visual features (edges, textures, shapes) that transfer across domains — only the final classifier needs retraining for your specific classes', 'ImageNet weights are the optimal starting point for all image tasks', 'Frozen layers train faster'], answerIndex: 1, explanation: 'CNNs trained on ImageNet develop a hierarchy of visual features. These features are domain-general and transferable. Fine-tuning only the classifier requires far less data and compute than training from scratch.' },
        { id: 'ml-a-f-7', type: 'mcq', prompt: 'Self-attention in a transformer computes attention scores between:', options: ['Only adjacent tokens', 'Every pair of tokens in the sequence simultaneously — enabling long-range dependency modelling in a single operation', 'The current token and a fixed context window', 'Query tokens and a fixed key-value memory'], answerIndex: 1, explanation: 'Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Every token attends to every other token in parallel, unlike RNNs which process sequentially and lose long-range information.' },
        { id: 'ml-a-f-8', type: 'fill', prompt: 'In the scaled dot-product attention formula, dividing by ________ prevents large dot products from pushing softmax into saturation regions.', answer: '√d_k', explanation: 'For d_k-dimensional queries and keys, dot products can grow large. Dividing by √d_k keeps values in a range where softmax has non-vanishing gradients, stabilising training.' },
        { id: 'ml-a-f-9', type: 'mcq', prompt: 'Fine-tuning DistilBERT over BERT-large for a production service is preferred because:', options: ['DistilBERT is always more accurate', 'DistilBERT is 60% the size, 97% the accuracy, and 2× faster — meeting business requirements with far lower latency and infrastructure cost', 'BERT-large cannot be fine-tuned', 'DistilBERT handles longer sequences'], answerIndex: 1, explanation: 'Knowledge distillation trains a student model to mimic a teacher. DistilBERT retains 97% of BERT\'s performance. In production, serving cost is real — pick the smallest model that meets your accuracy threshold.' },
        { id: 'ml-a-f-10', type: 'mcq', prompt: 'MLflow mlflow.log_metrics() records:', options: ['Git commit metadata', 'Numeric training metrics (loss, AUC, F1) per step, linked to the run — queryable and visually comparable in the MLflow UI', 'Model architecture details', 'Input data statistics'], answerIndex: 1, explanation: 'MLflow tracks experiments with runs. Each run stores params, metrics per step, and artifacts. The UI shows training curves, hyperparameter comparison, and run diffs — making experimentation systematic.' },
        { id: 'ml-a-f-11', type: 'fill', prompt: 'The Kolmogorov-Smirnov test for data drift compares the full ________ of a feature in training vs production data.', answer: 'distribution', explanation: 'The KS test is a non-parametric test that measures the maximum difference between two cumulative distribution functions. A small p-value (< 0.05) indicates the distributions differ significantly — flagging drift.' },
        { id: 'ml-a-f-12', type: 'mcq', prompt: 'A GitHub Actions ML pipeline scheduled weekly for model retraining achieves:', options: ['Faster model inference', 'Automated model freshness — preventing performance degradation from data drift without manual intervention', 'Larger training datasets', 'Reduced cloud costs automatically'], answerIndex: 1, explanation: 'CI/CD for ML: automate train → evaluate → threshold check → deploy. The pipeline fails and alerts if AUC drops below threshold, preventing a degraded model from reaching production.' },
        { id: 'ml-a-f-13', type: 'mcq', prompt: 'Gradient boosting builds trees sequentially by fitting each new tree to:', options: ['Random subsets of the data', 'The residual errors (negative gradient of the loss) of the current ensemble — each tree corrects the previous ensemble\'s mistakes', 'The most important features only', 'A bootstrapped sample with replacement'], answerIndex: 1, explanation: 'Gradient boosting minimises the loss function by gradient descent in function space. Each tree is fitted to the pseudo-residuals (negative gradient), progressively reducing the ensemble\'s error.' },
        { id: 'ml-a-f-14', type: 'fill', prompt: 'For a fraud dataset with 1% positives, the XGBoost parameter ________ should be set to approximately 99 to compensate for class imbalance.', answer: 'scale_pos_weight', explanation: 'scale_pos_weight = negative_count / positive_count. Setting it to 99 tells XGBoost to weight each positive (fraud) case 99× more heavily, effectively treating the imbalanced dataset as balanced during training.' },
        { id: 'ml-a-f-15', type: 'mcq', prompt: 'LightGBM\'s leaf-wise tree growth differs from XGBoost\'s level-wise growth because:', options: ['LightGBM grows all leaves simultaneously', 'LightGBM grows the leaf with the maximum loss reduction at each step — achieving better accuracy for the same number of leaves, but risking overfitting on small datasets', 'LightGBM only grows binary trees', 'LightGBM avoids split finding entirely'], answerIndex: 1, explanation: 'Level-wise: all leaves at the same depth grow together (XGBoost default). Leaf-wise: always split the leaf that reduces loss the most, regardless of depth. Leaf-wise is more efficient but can overfit — use min_child_samples and max_depth to control it.' },
        { id: 'ml-a-f-16', type: 'mcq', prompt: 'In a stacking ensemble, the meta-learner is trained on:', options: ['The original training features', 'Out-of-fold predictions from base models — ensuring the meta-learner never sees base model predictions on data those models were trained on', 'The test set predictions directly', 'The average of all base model outputs'], answerIndex: 1, explanation: 'Out-of-fold predictions prevent data leakage. Each fold\'s held-out predictions are assembled into meta-features. The meta-learner learns the optimal combination of base model outputs.' },
        { id: 'ml-a-f-17', type: 'mcq', prompt: 'SHAP values for a fraud model explain:', options: ['The overall model AUC', 'For each individual prediction: how much each feature contributed to moving the score from the baseline — enabling per-transaction explanations required by regulators', 'Which features to remove from the model', 'The model\'s training speed'], answerIndex: 1, explanation: 'SHAP (SHapley Additive exPlanations) distributes a prediction\'s deviation from the baseline fairly among features using game theory. Both global (feature importance) and local (per-prediction) explanations are possible.' },
        { id: 'ml-a-f-18', type: 'fill', prompt: 'The Q-function Q(s,a) represents the expected ________ discounted reward from taking action a in state s and following the optimal policy thereafter.', answer: 'cumulative', explanation: 'Q-values capture long-term value, not immediate reward. Q*(s,a) = r + γ×max_a\'[Q(s\',a\')] — the Bellman equation. This recursive definition enables backward induction from terminal rewards.' },
        { id: 'ml-a-f-19', type: 'mcq', prompt: 'Epsilon-greedy exploration with ε=0.15 means the RL agent:', options: ['Explores 85% of the time', 'Takes a random action 15% of the time and exploits the best-known action 85% of the time', 'Sets the Q-value update rate to 0.15', 'Discounts future rewards by 15%'], answerIndex: 1, explanation: 'ε-greedy: with probability ε, pick a random action (explore); with probability 1-ε, pick argmax_a Q(s,a) (exploit). Decaying ε over training allows more exploration early and more exploitation later.' },
        { id: 'ml-a-f-20', type: 'mcq', prompt: 'Experience replay in DQN helps training stability by:', options: ['Doubling the training data', 'Storing (s,a,r,s\') transitions in a replay buffer and sampling random mini-batches — breaking correlations between consecutive transitions that cause divergence', 'Reducing the learning rate automatically', 'Removing the target network requirement'], answerIndex: 1, explanation: 'Consecutive transitions (s_t, s_t+1, s_t+2) are highly correlated. Training on correlated sequences causes the Q-network to oscillate. Random sampling from the replay buffer decorrelates experience and stabilises training.' },
        { id: 'ml-a-f-21', type: 'mcq', prompt: 'Thompson Sampling for multi-armed bandits outperforms epsilon-greedy because:', options: ['It always explores less', 'It maintains Beta distribution posteriors over each arm\'s true reward rate — naturally exploring uncertain arms and exploiting known good arms based on posterior uncertainty', 'It requires a fixed exploration budget', 'It works only with binary rewards'], answerIndex: 1, explanation: 'Thompson Sampling samples from each arm\'s posterior. Arms with high uncertainty (wide posteriors) get sampled more. Arms known to be good (narrow, high-value posteriors) get sampled more too. The balance is adaptive and principled.' },
        { id: 'ml-a-f-22', type: 'fill', prompt: 'In a hybrid recommender system, ________ filtering combines user-item interaction patterns while content-based filtering uses item features — the hybrid mitigates the cold-start problem.', answer: 'collaborative', explanation: 'Collaborative filtering (matrix factorisation, SVD) finds users with similar taste and recommends what they liked. Content-based filtering recommends items similar to what a user already liked. Hybrid systems use both.' },
        { id: 'ml-a-f-23', type: 'mcq', prompt: 'SVD (Singular Value Decomposition) in collaborative filtering decomposes the user-item matrix into:', options: ['Clusters of similar users', 'Latent user factors × latent item factors — embedding users and items in a shared low-dimensional space where dot product similarity predicts ratings', 'Decision boundaries between item categories', 'Principal components of user behaviour'], answerIndex: 1, explanation: 'SVD factorises R ≈ U × Σ × Vᵀ. The k latent factors capture taste dimensions (e.g., "prefers action films with complex plots"). User and item embeddings in this space enable fast similarity computation.' },
        { id: 'ml-a-f-24', type: 'mcq', prompt: 'A RAG (Retrieval-Augmented Generation) layer in a recommender system:', options: ['Trains the recommendation model on new data', 'Retrieves relevant context (reviews, descriptions) from a vector store and injects it into an LLM prompt — enabling natural language explanations for each recommendation', 'Reduces latency by caching results', 'Replaces collaborative filtering entirely'], answerIndex: 1, explanation: 'RAG = retrieve relevant documents → augment the LLM\'s prompt → generate grounded responses. In a recommender: retrieve reviews/metadata for the top-N recommended items, pass them to the LLM to explain why the item was recommended.' },
        { id: 'ml-a-f-25', type: 'mcq', prompt: 'The key difference between PyTorch and scikit-learn\'s approach to model training is:', options: ['PyTorch only runs on GPUs', 'PyTorch requires you to write an explicit training loop with gradient computation — scikit-learn\'s .fit() abstracts this away. PyTorch provides control; scikit-learn provides convenience.', 'Scikit-learn supports neural networks; PyTorch does not', 'PyTorch uses different evaluation metrics'], answerIndex: 1, explanation: 'Scikit-learn: model.fit(X,y) — one line. PyTorch: define model architecture, loss function, optimizer; loop over batches; call backward(); call step(). More code, but full control over architecture, loss, and training dynamics.' },
        { id: 'ml-a-f-26', type: 'fill', prompt: 'In transformer models, positional ________ are added to token embeddings to give the model information about token order — since self-attention is permutation-invariant.', answer: 'encodings', explanation: 'Self-attention treats input as a set (no order). Without positional encodings, "The cat sat" and "Sat cat the" would produce identical attention scores. Sine/cosine positional encodings inject position information into embeddings.' },
        { id: 'ml-a-f-27', type: 'mcq', prompt: 'MLflow mlflow.log_model() is used to:', options: ['Log training metrics per epoch', 'Save the serialised model as an artifact attached to the run — enabling model versioning, reproducibility, and serving from the MLflow Model Registry', 'Compare models across runs', 'Register the model in a production database'], answerIndex: 1, explanation: 'log_model() serialises and stores the model with the run, in a standardised format. The MLflow Model Registry enables model versioning: staging → production promotion workflows.' },
        { id: 'ml-a-f-28', type: 'mcq', prompt: 'For a production fraud detection model, Precision-Recall AUC is preferred over ROC-AUC because:', options: ['PR-AUC is always higher', 'For heavily imbalanced datasets, ROC-AUC can look artificially high. PR-AUC focuses on the model\'s ability to find fraud (precision) without missing it (recall) — directly measuring what the business cares about.', 'PR-AUC is faster to compute', 'ROC-AUC cannot handle binary classification'], answerIndex: 1, explanation: 'ROC-AUC considers all classification thresholds including very low ones where the fraud rate is low. For 1% fraud, even a naive model achieves high ROC-AUC. PR-AUC is much more discriminating for imbalanced problems.' },
        { id: 'ml-a-f-29', type: 'mcq', prompt: 'The discount factor γ (gamma) in RL determines:', options: ['The agent\'s learning rate', 'How much the agent values future rewards relative to immediate ones — γ=0 is myopic (immediate only), γ=1 weights all future rewards equally', 'The replay buffer size', 'The exploration rate'], answerIndex: 1, explanation: 'γ ∈ [0,1]. With γ=0.99, a reward 100 steps away is worth 0.99^100 ≈ 0.37 of its face value. Tuning γ trades off short-term vs long-term planning. γ=1 can cause divergence without terminal states.' },
        { id: 'ml-a-f-30', type: 'mcq', prompt: 'The core skill the ML Advanced track develops — across PyTorch, transformers, MLOps, and RL — is:', options: ['Memorising API signatures for every framework', 'Reasoning about the full ML system: from raw data through model architecture, training dynamics, production monitoring, and failure modes — with principled tools for each stage', 'Always choosing deep learning over classical methods', 'Achieving the highest possible accuracy regardless of constraints'], answerIndex: 1, explanation: 'Advanced ML engineering is systems thinking. Each module covers a different system concern: model design, scaling, monitoring, ensemble diversity, agent design. The skill is knowing which tool solves which problem — and when a simpler approach is better.' }
      ]
    }
  },
  sql: {
    beginner: {
      title: 'SQL Beginner Final Assessment',
      intro: 'Test your knowledge across all 6 SQL beginner modules. This comprehensive quiz contains multiple choice, fill-in-the-blank, and interactive code exercises.',
      questions: [
        {
          id: 'sql-b-f-1',
          type: 'mcq',
          prompt: 'You have a table of employees, and you want to list only their names and departments. Which keyword must start your query?',
          options: ['FIND', 'GET', 'SELECT', 'FETCH'],
          answerIndex: 2,
          explanation: 'Every SQL query that reads data from a table begins with the SELECT keyword.'
        },
        {
          id: 'sql-b-f-2',
          type: 'mcq',
          prompt: 'Why is using "SELECT *" considered bad practice in large production databases?',
          options: ['It crashes the server immediately', 'It wastes memory and slows performance by pulling unneeded columns', 'It deletes data from the database', 'It alters the table structure permanently'],
          answerIndex: 1,
          explanation: 'SELECT * fetches everything. In real applications with huge tables, this causes massive performance issues and wastes bandwidth.'
        },
        {
          id: 'sql-b-f-3',
          type: 'fill-blank',
          prompt: 'To rename a column in your output to something more readable without modifying the database, use the ______ keyword.',
          correctAnswers: ['as', 'AS'],
          explanation: 'The AS keyword creates an alias. For example: SELECT emp_name AS "Employee Name".'
        },
        {
          id: 'sql-b-f-4',
          type: 'mcq',
          prompt: 'Which operator is used in a WHERE clause to check if a text column contains a specific pattern?',
          options: ['MATCH', 'EQUALS', 'LIKE', 'CONTAINS'],
          answerIndex: 2,
          explanation: 'LIKE is used with wildcards (e.g., %) to search for patterns within text strings.'
        },
        {
          id: 'sql-b-f-5',
          type: 'fill-blank',
          prompt: 'To filter results to only show orders over ₹1000, you use the ______ clause before the ORDER BY clause.',
          correctAnswers: ['where', 'WHERE'],
          explanation: 'The WHERE clause filters rows based on a condition before they are grouped or sorted.'
        },
        {
          id: 'sql-b-f-6',
          type: 'mcq',
          prompt: 'You want to find customers whose emails end in "@yahoo.com". Which WHERE clause is correct?',
          options: ["WHERE email LIKE '%@yahoo.com'", "WHERE email = '*@yahoo.com'", "WHERE email = '@yahoo.com'", "WHERE email MATCHES '%@yahoo.com'"],
          answerIndex: 0,
          explanation: 'The % symbol is the wildcard for "any number of characters", making \'%@yahoo.com\' match any prefix.'
        },
        {
          id: 'sql-b-f-7',
          type: 'mcq',
          prompt: 'If you want to find the 5 most expensive products, which clauses do you need?',
          options: ['ORDER BY price ASC LIMIT 5', 'ORDER BY price DESC LIMIT 5', 'SORT price HIGHEST', 'LIMIT 5 ORDER BY price'],
          answerIndex: 1,
          explanation: 'You first sort from highest to lowest using DESC, and then cap the output at 5 rows using LIMIT.'
        },
        {
          id: 'sql-b-f-8',
          type: 'fill-blank',
          prompt: 'By default, the ORDER BY clause sorts data in ______ order (lowest to highest).',
          correctAnswers: ['ascending', 'asc', 'ASCENDING', 'ASC'],
          explanation: 'If you omit DESC or ASC, SQL defaults to ascending (A to Z, 0 to 9) order.'
        },
        {
          id: 'sql-b-f-9',
          type: 'mcq',
          prompt: 'Which function calculates the average value of a numeric column?',
          options: ['MEAN()', 'AVERAGE()', 'MEDIAN()', 'AVG()'],
          answerIndex: 3,
          explanation: 'In SQL, the average is calculated using the AVG() aggregation function.'
        },
        {
          id: 'sql-b-f-10',
          type: 'fill-blank',
          prompt: 'To count the total number of rows returned by a query, you use the aggregation function ______(*).',
          correctAnswers: ['count', 'COUNT'],
          explanation: 'COUNT(*) calculates the total number of rows.'
        },
        {
          id: 'sql-b-f-11',
          type: 'mcq',
          prompt: 'What happens if you include a normal column in your SELECT statement alongside an aggregation like SUM(), but forget to use GROUP BY?',
          options: ['The query works fine', 'SQL automatically groups it for you', 'The query returns an error', 'The database crashes'],
          answerIndex: 2,
          explanation: 'Any un-aggregated column in the SELECT clause must be explicitly declared in the GROUP BY clause.'
        },
        {
          id: 'sql-b-f-12',
          type: 'mcq',
          prompt: 'When using GROUP BY, what is the role of the HAVING clause?',
          options: [
            'It filters individual rows before grouping',
            'It joins two tables together',
            'It limits the total number of rows returned',
            'It filters the aggregated groups after grouping has occurred'
          ],
          answerIndex: 3,
          explanation: 'WHERE filters individual rows before grouping. HAVING filters the summarized groups (e.g., HAVING SUM(total) > 500).'
        },
        {
          id: 'sql-b-f-13',
          type: 'fill-blank',
          prompt: 'To connect two tables based on a matching column, you use a ______.',
          correctAnswers: ['join', 'JOIN', 'inner join', 'INNER JOIN'],
          explanation: 'JOINs combine rows from two or more tables based on a related column.'
        },
        {
          id: 'sql-b-f-14',
          type: 'mcq',
          prompt: 'Which type of JOIN ensures you keep ALL rows from the first (left) table, even if there is no match in the second table?',
          options: ['INNER JOIN', 'OUTER JOIN', 'LEFT JOIN', 'FULL JOIN'],
          answerIndex: 2,
          explanation: 'A LEFT JOIN keeps every row from the left table, inserting NULLs if the right table has no matching row.'
        },
        {
          id: 'sql-b-f-15',
          type: 'code',
          prompt: 'Write a query to return all columns from the "customers" table where the country is exactly \'India\'.',
          dataset: 'customers',
          expectedKeywords: ['select', '*', 'from', 'customers', 'where', 'country'],
          explanation: 'You need a basic SELECT * query with a WHERE clause filtering for country = \'India\'.'
        },
        {
          id: 'sql-b-f-16',
          type: 'mcq',
          prompt: 'Why do we use table aliases (like "customers AS c") in queries with JOINs?',
          options: ['To hide the real table name for security', 'To save typing and make the query cleaner', 'Because SQL requires aliases for all tables', 'To create a backup table'],
          answerIndex: 1,
          explanation: 'Aliases save time and make queries with multiple tables much easier to read.'
        },
        {
          id: 'sql-b-f-17',
          type: 'mcq',
          prompt: 'What does the IN operator do in a WHERE clause?',
          options: ['It checks if a value exists inside another table', 'It checks if a value matches any value in a specified list', 'It replaces the EQUALS operator entirely', 'It imports data from an external file'],
          answerIndex: 1,
          explanation: 'The IN operator is a shorthand for multiple OR conditions. e.g., WHERE country IN (\'India\', \'USA\').'
        },
        {
          id: 'sql-b-f-18',
          type: 'fill-blank',
          prompt: 'In a JOIN, the ______ clause specifies exactly which columns link the two tables together.',
          correctAnswers: ['on', 'ON'],
          explanation: 'The ON clause acts as the bridge (e.g., ON table1.id = table2.user_id).'
        },
        {
          id: 'sql-b-f-19',
          type: 'mcq',
          prompt: 'If you want to find the highest salary in the employees table, which function do you use?',
          options: ['TOP()', 'HIGHEST()', 'MAX()', 'SUM()'],
          answerIndex: 2,
          explanation: 'MAX() returns the largest value in the selected column.'
        },
        {
          id: 'sql-b-f-20',
          type: 'code',
          prompt: 'Write a SQL query that joins "customers" and "orders". Select the customer name and the order total where the total is strictly greater than 1000. (Use an INNER JOIN).',
          dataset: 'customers_orders',
          expectedKeywords: ['select', 'from', 'customers', 'join', 'orders', 'on', 'where', '>', '1000'],
          explanation: 'An INNER JOIN is required on the common key (customer_id = id), followed by a WHERE clause for the total.'
        }
      ]
    },
    intermediate: {
      title: 'SQL Intermediate Final Assessment',
      intro: 'Test your knowledge across all 12 SQL intermediate modules — NULL handling, CASE WHEN, subqueries, CTEs, UNION, every JOIN type, both window-function modules, string functions, date functions, CAST, and query performance. Uses the QuickBite food-delivery dataset throughout.',
      questions: [
        {
          id: 'sql-i-f-1',
          type: 'mcq',
          prompt: 'What happens when you write WHERE rider_id = NULL in a query?',
          options: ['It returns every row where rider_id is NULL', 'It returns zero rows, because comparisons against NULL never evaluate to true', 'It throws a syntax error', 'It returns every row regardless of rider_id'],
          answerIndex: 1,
          explanation: 'NULL means "unknown," so = NULL never evaluates to true, even when the value genuinely is NULL. Use IS NULL instead.'
        },
        {
          id: 'sql-i-f-2',
          type: 'fill-blank',
          prompt: 'COALESCE(rating, 0) returns rating if it is not NULL, otherwise it returns ______.',
          correctAnswers: ['0', 'zero'],
          explanation: 'COALESCE returns the first non-NULL value in its argument list — here, that fallback is the literal 0.'
        },
        {
          id: 'sql-i-f-3',
          type: 'code',
          prompt: 'Using the QuickBite dataset, write a query that returns the order_id and customer_id of every order that does not yet have a rider assigned.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'order_id', 'customer_id', 'from', 'orders', 'where', 'rider_id', 'is', 'null'],
          explanation: 'rider_id IS NULL identifies orders that have not yet been picked up by a rider.'
        },
        {
          id: 'sql-i-f-4',
          type: 'mcq',
          prompt: 'In a CASE WHEN expression, what happens once SQL finds a WHEN condition that evaluates to true?',
          options: ['It evaluates every remaining WHEN condition anyway', "It stops checking and uses that branch's result, similar to an if/elif chain", 'It restarts evaluation from the top', 'It throws an error if ELSE is missing'],
          answerIndex: 1,
          explanation: 'CASE WHEN checks conditions top-to-bottom and stops at the first one that is true, exactly like an if/elif/else chain.'
        },
        {
          id: 'sql-i-f-5',
          type: 'fill-blank',
          prompt: 'In a CASE WHEN expression, the ______ keyword provides a fallback value for any row that did not match any WHEN condition.',
          correctAnswers: ['else', 'ELSE'],
          explanation: 'ELSE is optional but commonly used to catch any row that fell through every WHEN condition above it.'
        },
        {
          id: 'sql-i-f-6',
          type: 'code',
          prompt: "Write a query that shows every order's order_id along with a label: 'Completed' if status is 'delivered', 'Cancelled' if status is 'cancelled', and 'In Progress' otherwise.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'order_id', 'case', 'when', 'status', 'then', 'else', 'end', 'from', 'orders'],
          explanation: "CASE WHEN status = 'delivered' THEN 'Completed' WHEN status = 'cancelled' THEN 'Cancelled' ELSE 'In Progress' END."
        },
        {
          id: 'sql-i-f-7',
          type: 'mcq',
          prompt: 'What is a "scalar" subquery?',
          options: ['A subquery that always uses GROUP BY', 'A subquery that returns exactly one value (one row, one column)', 'A subquery that returns an entire table', 'A subquery written in all uppercase'],
          answerIndex: 1,
          explanation: 'A scalar subquery returns a single value, which is why it can be used anywhere a single number or text value would normally go.'
        },
        {
          id: 'sql-i-f-8',
          type: 'mcq',
          prompt: 'What makes a subquery "correlated"?',
          options: ['It uses a JOIN inside it', 'It references a column from the outer query, so it effectively runs once per outer row', 'It is wrapped in double parentheses', 'It must use the IN operator'],
          answerIndex: 1,
          explanation: 'A correlated subquery depends on the current row of the outer query, so it is effectively re-evaluated for every row the outer query considers.'
        },
        {
          id: 'sql-i-f-9',
          type: 'fill-blank',
          prompt: 'The ______ keyword checks whether a correlated subquery returns at least one row, without caring what the row actually contains.',
          correctAnswers: ['exists', 'EXISTS'],
          explanation: 'EXISTS is a yes/no check — it stops as soon as it finds one matching row, which is why it pairs naturally with a correlated subquery.'
        },
        {
          id: 'sql-i-f-10',
          type: 'code',
          prompt: 'Write a query that returns the name of every customer who has never placed an order, using NOT IN.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'name', 'from', 'customers', 'where', 'customer_id', 'not', 'in', 'select', 'customer_id', 'from', 'orders'],
          explanation: "WHERE customer_id NOT IN (SELECT customer_id FROM orders) excludes anyone who appears at least once in the orders table."
        },
        {
          id: 'sql-i-f-11',
          type: 'mcq',
          prompt: 'What is a CTE, in the simplest terms?',
          options: ['A type of JOIN', 'A subquery that has been given a name using WITH, so it can be referred to like a table', 'A built-in date function', 'A way to permanently store query results in the database'],
          answerIndex: 1,
          explanation: 'A CTE (Common Table Expression) is functionally a named subquery, defined with WITH before the main query that uses it.'
        },
        {
          id: 'sql-i-f-12',
          type: 'fill-blank',
          prompt: 'A Common Table Expression is defined using the ______ keyword, placed before the main query.',
          correctAnswers: ['with', 'WITH'],
          explanation: 'WITH name AS (subquery) defines a CTE that the rest of the query can refer to by name.'
        },
        {
          id: 'sql-i-f-13',
          type: 'code',
          prompt: "Using a CTE, write a query that calculates each restaurant_id's average total_amount from the orders table (call the result avg_order_value).",
          dataset: 'quickbite',
          expectedKeywords: ['with', 'select', 'restaurant_id', 'avg', 'total_amount', 'from', 'orders', 'group', 'by'],
          explanation: 'WITH restaurant_avg AS (SELECT restaurant_id, AVG(total_amount) AS avg_order_value FROM orders GROUP BY restaurant_id) SELECT * FROM restaurant_avg.'
        },
        {
          id: 'sql-i-f-14',
          type: 'mcq',
          prompt: 'What is the key difference between UNION and UNION ALL?',
          options: ['UNION ALL only works with numbers', 'UNION removes duplicate rows from the combined result; UNION ALL keeps every row, including duplicates', 'UNION is always faster than UNION ALL', 'There is no real difference between them'],
          answerIndex: 1,
          explanation: 'UNION does extra work checking for and removing duplicates across the combined results. UNION ALL skips that check and keeps everything.'
        },
        {
          id: 'sql-i-f-15',
          type: 'fill-blank',
          prompt: 'Both SELECT statements joined by UNION must return the same number of ______, in a compatible type and order.',
          correctAnswers: ['columns', 'COLUMNS'],
          explanation: 'SQL combines UNION results positionally, not by column name, so the column counts, types, and order must line up.'
        },
        {
          id: 'sql-i-f-16',
          type: 'mcq',
          prompt: "In a UNION query, where do the final result's column names come from?",
          options: ['The second SELECT statement', 'The first SELECT statement', 'SQL automatically renames them col1, col2, etc.', 'You must specify them manually after UNION'],
          answerIndex: 1,
          explanation: 'The final result set takes its column names from the very first SELECT in the UNION, regardless of what later SELECTs name their columns.'
        },
        {
          id: 'sql-i-f-17',
          type: 'mcq',
          prompt: 'How does RIGHT JOIN relate to LEFT JOIN?',
          options: ['They are completely unrelated operations', 'RIGHT JOIN keeps every row from the second (right) table — swapping the table order in a LEFT JOIN produces the same result', 'RIGHT JOIN only works on numeric columns', 'RIGHT JOIN cannot use an ON clause'],
          answerIndex: 1,
          explanation: 'RIGHT JOIN and LEFT JOIN are mirror images of each other; many people just always write LEFT JOIN and reorder the tables instead.'
        },
        {
          id: 'sql-i-f-18',
          type: 'mcq',
          prompt: 'What does FULL OUTER JOIN return?',
          options: ['Only rows that match in both tables', 'Every row from both tables, with NULLs filled in wherever a row from one side has no match on the other', 'Only rows from the left table', 'It is invalid SQL on every database'],
          answerIndex: 1,
          explanation: 'FULL OUTER JOIN keeps everything from both tables — matched rows show data from both sides, unmatched rows show NULLs for the missing side.'
        },
        {
          id: 'sql-i-f-19',
          type: 'mcq',
          prompt: 'What makes a SELF JOIN different from a normal JOIN?',
          options: ['It uses a special SELFJOIN keyword', 'It is ordinary JOIN syntax, just pointing at the same table twice using two different aliases', 'It only works on tables with no primary key', 'It cannot use an ON clause'],
          answerIndex: 1,
          explanation: 'A SELF JOIN aliases the same table twice, letting SQL (and you) treat the two "copies" as separate tables for the query.'
        },
        {
          id: 'sql-i-f-20',
          type: 'code',
          prompt: "Using a SELF JOIN on the customers table, write a query that shows each referred customer's name next to the name of the customer who referred them.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'from', 'customers', 'inner', 'join', 'customers', 'on'],
          explanation: 'FROM customers AS c1 INNER JOIN customers AS c2 ON c1.referred_by = c2.customer_id resolves each referral back to the referrer.'
        },
        {
          id: 'sql-i-f-21',
          type: 'mcq',
          prompt: "What does PARTITION BY do inside a window function's OVER() clause?",
          options: ['It deletes non-matching rows', "It restarts the window function's calculation separately for each group, without merging rows together like GROUP BY does", 'It sorts the table permanently', 'It is required in every window function'],
          answerIndex: 1,
          explanation: 'PARTITION BY divides rows into groups for the calculation — each group gets its own independent ranking or running total — while every row still appears in the output.'
        },
        {
          id: 'sql-i-f-22',
          type: 'mcq',
          prompt: 'Two restaurants are tied for 2nd place by rating. What rank does RANK() give the restaurant right after them?',
          options: ['3', '4, because RANK leaves a gap equal to the number of tied rows', '2, the same as the tied rows', 'An error, since ties are not allowed'],
          answerIndex: 1,
          explanation: 'RANK() gives tied rows the same rank but leaves a gap afterward — two rows tied at rank 2 means the next row gets rank 4, not 3.'
        },
        {
          id: 'sql-i-f-23',
          type: 'fill-blank',
          prompt: 'Unlike RANK(), ______() never leaves a gap in the numbering after a tie.',
          correctAnswers: ['dense_rank', 'DENSE_RANK'],
          explanation: 'DENSE_RANK gives tied rows the same rank, but the next distinct value always continues immediately afterward with no skipped numbers.'
        },
        {
          id: 'sql-i-f-24',
          type: 'code',
          prompt: 'Write a query that ranks every restaurant by rating (highest first) using DENSE_RANK, only including restaurants where rating is not null.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'name', 'rating', 'dense_rank', 'over', 'order', 'by', 'rating', 'desc', 'from', 'restaurants', 'where', 'is', 'not', 'null'],
          explanation: 'SELECT name, rating, DENSE_RANK() OVER (ORDER BY rating DESC) AS rnk FROM restaurants WHERE rating IS NOT NULL.'
        },
        {
          id: 'sql-i-f-25',
          type: 'mcq',
          prompt: 'What is the difference between LAG and LEAD?',
          options: ['LAG looks at the previous row; LEAD looks at the next row, within the same ordered window', 'LAG only works with dates; LEAD only works with numbers', 'They always produce identical results', 'LEAD requires a CTE; LAG does not'],
          answerIndex: 0,
          explanation: 'LAG reaches backward to a prior row, LEAD reaches forward to a following row, both within whatever PARTITION BY / ORDER BY defines the window.'
        },
        {
          id: 'sql-i-f-26',
          type: 'mcq',
          prompt: 'What turns a normal SUM(total_amount) into a running total?',
          options: ['Adding GROUP BY total_amount', 'Adding OVER (ORDER BY some_column), turning it into a window function that accumulates row by row', 'Using SUM ALL instead of SUM', 'Nothing — SUM is always a running total'],
          answerIndex: 1,
          explanation: 'Without OVER(), SUM collapses everything into one number. With OVER (ORDER BY ...), it accumulates as it moves through the ordered rows.'
        },
        {
          id: 'sql-i-f-27',
          type: 'code',
          prompt: 'Write a query that shows order_date and total_amount for delivered orders, along with a running total of total_amount ordered by order_date.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'order_date', 'total_amount', 'sum', 'over', 'order', 'by', 'from', 'orders', 'where', 'status'],
          explanation: "SELECT order_date, total_amount, SUM(total_amount) OVER (ORDER BY order_date) AS running_total FROM orders WHERE status = 'delivered' ORDER BY order_date."
        },
        {
          id: 'sql-i-f-28',
          type: 'mcq',
          prompt: "What does TRIM('  Spice Route  ') return?",
          options: ["'  Spice Route  ' unchanged", "'Spice Route' with the leading and trailing spaces removed", "'SpiceRoute' with every space removed", 'An error'],
          answerIndex: 1,
          explanation: 'TRIM removes only leading and trailing whitespace, leaving "Spice Route" with no surrounding spaces but the internal space intact.'
        },
        {
          id: 'sql-i-f-29',
          type: 'fill-blank',
          prompt: 'In SQLite, the ______ operator joins two text values together.',
          correctAnswers: ['||'],
          explanation: "name || ' (' || cuisine_type || ')' is SQLite's way of concatenating text — the same job CONCAT() does in MySQL or SQL Server."
        },
        {
          id: 'sql-i-f-30',
          type: 'code',
          prompt: "Write a query that returns every restaurant's name and city, both cleaned with TRIM and converted to uppercase.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'upper', 'trim', 'name', 'city', 'from', 'restaurants'],
          explanation: 'SELECT UPPER(TRIM(name)) AS clean_name, UPPER(TRIM(city)) AS clean_city FROM restaurants.'
        },
        {
          id: 'sql-i-f-31',
          type: 'mcq',
          prompt: 'What does julianday() convert a date into?',
          options: ['A text string in DD-MM-YYYY format', 'A single number representing days since a fixed historical reference point', 'The day of the week', 'A boolean true/false for whether the date is valid'],
          answerIndex: 1,
          explanation: 'julianday() converts any date into one number (a day count), which is exactly why subtracting two julianday() values gives a clean day difference.'
        },
        {
          id: 'sql-i-f-32',
          type: 'fill-blank',
          prompt: "strftime('______', order_date) extracts just the year portion of a date.",
          correctAnswers: ['%Y'],
          explanation: 'strftime formats a date using codes — %Y specifically extracts the 4-digit year.'
        },
        {
          id: 'sql-i-f-33',
          type: 'code',
          prompt: 'Write a query that calculates the average delivery time in minutes for each restaurant_id, for orders where delivered_at is not null.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'restaurant_id', 'avg', 'julianday', 'delivered_at', 'order_date', 'from', 'orders', 'where', 'is', 'not', 'null', 'group', 'by'],
          explanation: "SELECT restaurant_id, AVG((julianday(delivered_at) - julianday(order_date)) * 1440) AS avg_minutes FROM orders WHERE delivered_at IS NOT NULL GROUP BY restaurant_id."
        },
        {
          id: 'sql-i-f-34',
          type: 'mcq',
          prompt: 'What does CAST(3.7 AS INTEGER) return?',
          options: ['4, because it rounds to the nearest whole number', '3, because CAST truncates the decimal rather than rounding', '3.7, unchanged', 'An error, since 3.7 is not a whole number'],
          answerIndex: 1,
          explanation: 'CAST to an integer type truncates — it discards everything after the decimal point rather than rounding.'
        },
        {
          id: 'sql-i-f-35',
          type: 'fill-blank',
          prompt: 'If you actually want 3.7 to become 4 (genuine rounding), use the ______() function instead of CAST.',
          correctAnswers: ['round', 'ROUND'],
          explanation: 'ROUND() performs real mathematical rounding. CAST to an integer type truncates instead, which is a common point of confusion.'
        },
        {
          id: 'sql-i-f-36',
          type: 'mcq',
          prompt: "Why might COALESCE(rating, 'Not yet rated') need CAST(rating AS TEXT) on some databases but not on SQLite?",
          options: ['SQLite does not support COALESCE at all', "SQLite has flexible typing and allows a single column to return different types per row, while stricter databases like PostgreSQL or SQL Server require COALESCE's arguments to share a type", 'CAST is required everywhere with no exceptions', 'Stricter databases do not support NULL'],
          answerIndex: 1,
          explanation: "SQLite's dynamic typing lets COALESCE mix a number and a fallback word without complaint — most production databases are stricter and would reject it without an explicit CAST."
        },
        {
          id: 'sql-i-f-37',
          type: 'mcq',
          prompt: 'What does EXPLAIN QUERY PLAN tell you?',
          options: ['The exact number of seconds a query will take to run', 'How the database actually intends to execute your query, without running it', 'Whether your SQL syntax is valid', 'The total row count in every table'],
          answerIndex: 1,
          explanation: 'EXPLAIN QUERY PLAN reveals the execution strategy — for example, whether the database will scan an entire table or use an index to jump straight to matching rows.'
        },
        {
          id: 'sql-i-f-38',
          type: 'mcq',
          prompt: 'What does a database index conceptually do?',
          options: ['It deletes old rows to save space', 'It works like a library card catalogue, letting the database jump straight to matching rows instead of scanning every row', 'It makes every query take exactly the same amount of time', 'It only works on text columns'],
          answerIndex: 1,
          explanation: 'Just like a library catalogue lets you go straight to the right shelf, an index lets the database jump directly to matching rows instead of scanning the whole table.'
        },
        {
          id: 'sql-i-f-39',
          type: 'fill-blank',
          prompt: "After creating an index on a filtered column, EXPLAIN QUERY PLAN typically changes from showing a table 'SCAN' to showing a table ______.",
          correctAnswers: ['search', 'SEARCH'],
          explanation: 'SCAN means checking every row one by one. SEARCH means the database used an index to jump straight to the matching rows.'
        }
      ]
    },
    advanced: {
      title: 'SQL Advanced Final Assessment',
      intro: 'Test your knowledge across all 11 SQL advanced modules — recursive CTEs, advanced window functions, set operations, views, transactions, constraints and triggers, JSON, indexing, query plans, anti-patterns, and concurrency. Uses the QuickBite food-delivery dataset throughout.',
      questions: [
        {
          id: 'sql-a-f-1',
          type: 'mcq',
          prompt: 'What kind of question needs a recursive CTE rather than a fixed number of JOINs?',
          options: ['Any question involving a WHERE clause', 'A question about a hierarchy of unknown depth, like "everyone in this customer\'s entire referral chain, however many levels deep"', 'Any question involving an aggregate function', 'A question that sorts results'],
          answerIndex: 1,
          explanation: 'A fixed number of JOINs can only reach a fixed number of levels. A recursive CTE keeps going until no new rows are found, regardless of depth.'
        },
        {
          id: 'sql-a-f-2',
          type: 'fill-blank',
          prompt: 'A recursive CTE is introduced with the keywords WITH ______.',
          correctAnswers: ['recursive', 'RECURSIVE'],
          explanation: 'WITH RECURSIVE signals that the CTE\'s recursive part is allowed to refer back to the CTE itself.'
        },
        {
          id: 'sql-a-f-3',
          type: 'mcq',
          prompt: 'In a recursive CTE, what must the anchor and the recursive part be combined with?',
          options: ['INTERSECT', 'UNION ALL', 'A plain comma', 'GROUP BY'],
          answerIndex: 1,
          explanation: 'The anchor (starting point) and the recursive part (which refers back to the CTE) must be joined with UNION ALL.'
        },
        {
          id: 'sql-a-f-4',
          type: 'code',
          prompt: 'Write a recursive CTE that finds every customer who traces back to customer_id 1 through the referred_by chain, at any depth.',
          dataset: 'quickbite',
          expectedKeywords: ['with', 'recursive', 'select', 'customer_id', 'from', 'customers', 'where', 'union', 'all', 'inner', 'join', 'on'],
          explanation: 'WITH RECURSIVE chain AS (SELECT ... WHERE customer_id = 1 UNION ALL SELECT ... INNER JOIN chain ON c.referred_by = chain.customer_id) SELECT * FROM chain.'
        },
        {
          id: 'sql-a-f-5',
          type: 'mcq',
          prompt: 'What does FIRST_VALUE(total_amount) OVER (PARTITION BY customer_id ORDER BY order_date) return for every row within one customer\'s partition?',
          options: ['A different value per row, like LAG', "The same value for every row in that partition: the customer's very first order amount by date", 'Always NULL', 'The total of all their orders'],
          answerIndex: 1,
          explanation: 'FIRST_VALUE always returns the first row of the window by its ordering, not the row immediately before the current one.'
        },
        {
          id: 'sql-a-f-6',
          type: 'mcq',
          prompt: 'Why does LAST_VALUE often return the current row instead of the true last row, without an explicit frame clause?',
          options: ['LAST_VALUE is broken in SQLite', 'The default window frame only extends from the start of the partition up to the current row, so LAST_VALUE returns whatever the current row is', 'LAST_VALUE requires PARTITION BY to work at all', 'It only happens with PARTITION BY, never with plain ORDER BY'],
          answerIndex: 1,
          explanation: 'Fixing this requires explicitly widening the frame with RANGE BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING.'
        },
        {
          id: 'sql-a-f-7',
          type: 'fill-blank',
          prompt: '______(4) splits the rows in a window into 4 roughly equal-sized groups, numbered 1 through 4.',
          correctAnswers: ['ntile', 'NTILE'],
          explanation: 'NTILE is the standard way to calculate quartiles or any other N-way split, such as identifying the top-spending quarter of customers.'
        },
        {
          id: 'sql-a-f-8',
          type: 'mcq',
          prompt: 'What does INTERSECT return when combining two SELECT queries?',
          options: ['Every row from both queries, combined', 'Only rows that appear in both result sets', 'Only rows in the first query but not the second', 'An error, since INTERSECT is not standard SQL'],
          answerIndex: 1,
          explanation: 'INTERSECT keeps only rows present in both result sets, useful for "who appears on both lists" questions.'
        },
        {
          id: 'sql-a-f-9',
          type: 'mcq',
          prompt: 'A business wants to know which customers ordered in January but never returned in February. Which set operation answers this directly?',
          options: ['UNION', 'INTERSECT', 'EXCEPT (January results EXCEPT February results)', 'A CROSS JOIN'],
          answerIndex: 2,
          explanation: 'EXCEPT subtracts the second result set from the first, leaving customers unique to January — exactly the churn question.'
        },
        {
          id: 'sql-a-f-10',
          type: 'code',
          prompt: 'Write a query that finds every customer_id that placed an order in both January 2024 and February 2024, using INTERSECT.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'customer_id', 'from', 'orders', 'where', 'strftime', 'intersect'],
          explanation: "SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-01' INTERSECT SELECT customer_id FROM orders WHERE strftime('%Y-%m', order_date) = '2024-02'."
        },
        {
          id: 'sql-a-f-11',
          type: 'mcq',
          prompt: 'What does a CREATE VIEW statement actually store?',
          options: ['A frozen copy of the query\'s results at creation time', 'The query itself, re-run automatically every time the view is referenced', 'Nothing — CREATE VIEW has no real effect', 'A scheduled nightly refresh job'],
          answerIndex: 1,
          explanation: 'A view has no storage of its own; querying it re-runs the saved query against the live underlying tables.'
        },
        {
          id: 'sql-a-f-12',
          type: 'fill-blank',
          prompt: 'A view that pre-calculates and caches its results, trading instant freshness for speed, is called a ______ view (not supported directly by SQLite).',
          correctAnswers: ['materialized', 'MATERIALIZED'],
          explanation: 'Materialized views exist in databases like PostgreSQL and SQL Server; SQLite only supports plain views.'
        },
        {
          id: 'sql-a-f-13',
          type: 'mcq',
          prompt: 'Why might two UPDATE statements (subtract from A, add to B) be unsafe without a transaction?',
          options: ['UPDATE can never be used twice in a row', 'If something fails between the two statements, one change could take effect while the other never does, leaving inconsistent data', 'This is never actually a risk in practice', 'Transactions are only relevant to SELECT statements'],
          answerIndex: 1,
          explanation: 'Without a transaction, a crash or error between the two statements can leave the data in a half-updated, inconsistent state.'
        },
        {
          id: 'sql-a-f-14',
          type: 'fill-blank',
          prompt: '______ undoes every change made since BEGIN, as if none of it had happened.',
          correctAnswers: ['rollback', 'ROLLBACK'],
          explanation: 'ROLLBACK reverts all statements within the current transaction back to the state right before BEGIN.'
        },
        {
          id: 'sql-a-f-15',
          type: 'mcq',
          prompt: 'In ACID, what does "Atomicity" guarantee?',
          options: ['That a transaction runs instantly', 'That every statement in a transaction happens together, or none of them do', 'That data is automatically encrypted', 'That two transactions can never overlap in time'],
          answerIndex: 1,
          explanation: 'Atomicity is the "all or nothing" guarantee that makes a multi-step transfer safe even if something fails partway through.'
        },
        {
          id: 'sql-a-f-16',
          type: 'mcq',
          prompt: 'What does a CHECK constraint do?',
          options: ['It logs every change to a separate audit table', 'It rejects any INSERT or UPDATE that would violate a rule defined on the column, like price >= 0', 'It speeds up queries that filter on that column', 'It automatically corrects invalid values instead of rejecting them'],
          answerIndex: 1,
          explanation: 'A CHECK constraint stops the database from ever storing a value that breaks a rule you defined once, at table-creation time.'
        },
        {
          id: 'sql-a-f-17',
          type: 'mcq',
          prompt: 'What can a trigger do that a plain constraint cannot?',
          options: ['Nothing, they are identical features', 'Run arbitrary extra SQL automatically in response to an event, like writing to an audit log on every INSERT', 'Only triggers can be used with PRIMARY KEY columns', 'Triggers can only fire on SELECT statements'],
          answerIndex: 1,
          explanation: 'Constraints only validate or reject values; triggers can run real follow-up logic automatically whenever a specified event happens.'
        },
        {
          id: 'sql-a-f-18',
          type: 'code',
          prompt: 'Create a table called rating_demo with a CHECK constraint ensuring a "stars" column only accepts values between 1 and 5.',
          dataset: 'quickbite',
          expectedKeywords: ['create', 'table', 'rating_demo', 'stars', 'integer', 'check', 'between'],
          explanation: 'CREATE TABLE rating_demo (id INTEGER PRIMARY KEY, stars INTEGER CHECK (stars BETWEEN 1 AND 5)).'
        },
        {
          id: 'sql-a-f-19',
          type: 'mcq',
          prompt: 'Why might a restaurant\'s flexible attributes (tags, optional settings) be stored as a JSON column instead of several regular columns?',
          options: ['JSON columns are always faster than regular columns for every query', 'When attributes genuinely vary in number per row, forcing them into rigid tag_1/tag_2/tag_3 columns is wasteful and inflexible', 'SQL cannot store text any other way', 'It is required by the SQL standard for any text column'],
          answerIndex: 1,
          explanation: 'JSON columns are a pragmatic fit for genuinely sparse or variable-shaped data, not a replacement for well-used regular columns.'
        },
        {
          id: 'sql-a-f-20',
          type: 'fill-blank',
          prompt: "______(metadata, '$.delivery_radius_km') pulls a single named field out of a JSON column.",
          correctAnswers: ['json_extract', 'JSON_EXTRACT'],
          explanation: 'json_extract reaches into a JSON document using a path starting with $ (the root) and returns the specified field\'s value.'
        },
        {
          id: 'sql-a-f-21',
          type: 'code',
          prompt: "Using json_each, find every restaurant name where the metadata column's tags array contains 'spicy'.",
          dataset: 'quickbite',
          expectedKeywords: ['select', 'distinct', 'from', 'restaurants', 'json_each', 'as', 'where'],
          explanation: "SELECT DISTINCT r.name FROM restaurants AS r, json_each(r.metadata, '$.tags') AS tag WHERE tag.value = 'spicy'."
        },
        {
          id: 'sql-a-f-22',
          type: 'mcq',
          prompt: 'Given a composite index on (customer_id, status), which query benefits from it?',
          options: ['WHERE status = \'delivered\' alone', 'WHERE customer_id = 5, or WHERE customer_id = 5 AND status = \'delivered\' together', 'Neither query benefits at all', 'Only queries with no WHERE clause whatsoever'],
          answerIndex: 1,
          explanation: 'A composite index helps queries using its leading column(s); skipping the leading column (filtering on status alone) gets little benefit.'
        },
        {
          id: 'sql-a-f-23',
          type: 'mcq',
          prompt: 'What makes an index "covering" for a given query?',
          options: ['It covers every table in the database at once', 'It contains every column the query needs, for both filtering and selecting, so the database never has to read the actual table', 'It is simply the first index ever created', 'It automatically fills in missing values with defaults'],
          answerIndex: 1,
          explanation: 'EXPLAIN QUERY PLAN explicitly says "USING COVERING INDEX" when the index alone has everything the query needs.'
        },
        {
          id: 'sql-a-f-24',
          type: 'fill-blank',
          prompt: 'Every index speeds up matching reads, but slightly slows down every INSERT, UPDATE, and ______ on that table, since the index itself must stay up to date.',
          correctAnswers: ['delete', 'DELETE'],
          explanation: 'Indexing is a deliberate read/write tradeoff, not something to apply unconditionally to every column.'
        },
        {
          id: 'sql-a-f-25',
          type: 'mcq',
          prompt: 'What does "USE TEMP B-TREE FOR ORDER BY" in a query plan indicate?',
          options: ['The query failed to run', 'SQLite had to build a temporary sorted structure because no index already provided the rows in the requested order', 'The query used a covering index successfully', 'The table has too many columns to sort'],
          answerIndex: 1,
          explanation: 'An index on the ORDER BY column would let SQLite read rows already sorted, skipping this temporary structure entirely.'
        },
        {
          id: 'sql-a-f-26',
          type: 'mcq',
          prompt: 'A report query that ran fine for months suddenly takes 30 seconds. What is the fastest first diagnostic step?',
          options: ['Restart the database server immediately', 'Run EXPLAIN QUERY PLAN on the slow query to see exactly what it is doing before guessing at a fix', 'Delete older rows without investigating first', 'Rewrite the entire application from scratch'],
          answerIndex: 1,
          explanation: 'EXPLAIN QUERY PLAN reveals the actual execution strategy, turning a guessing game into a targeted fix.'
        },
        {
          id: 'sql-a-f-27',
          type: 'mcq',
          prompt: 'Why does WHERE UPPER(city) = \'MUMBAI\' typically prevent an index on city from being used?',
          options: ['UPPER() is invalid SQL syntax', 'An index is built on a column\'s actual stored values; wrapping the column in a function changes what needs to be matched, generally blocking direct index use', 'This pattern is always faster than a plain comparison', 'Indexes only work with lowercase text'],
          answerIndex: 1,
          explanation: 'The fix is comparing against a properly-cased literal instead, keeping the column itself bare in the WHERE clause.'
        },
        {
          id: 'sql-a-f-28',
          type: 'mcq',
          prompt: 'Why might a correlated subquery be rewritten as a JOIN + GROUP BY for better performance?',
          options: ['They are always identical in performance with no exceptions', 'The correlated version conceptually re-checks the condition once per outer row, while a JOIN + GROUP BY lets the optimizer consider the whole operation at once, which is frequently faster on larger tables', 'JOINs are always slower than subqueries', 'Correlated subqueries cannot be rewritten in any form'],
          answerIndex: 1,
          explanation: 'Both are correct SQL, but the JOIN + GROUP BY version frequently gives the optimizer more room to find an efficient plan.'
        },
        {
          id: 'sql-a-f-29',
          type: 'fill-blank',
          prompt: 'These four anti-patterns are well-documented tendencies, not absolute laws — the actual discipline is to use ______ ______ ______ before and after a rewrite to confirm it actually helped.',
          correctAnswers: ['explain query plan', 'EXPLAIN QUERY PLAN'],
          explanation: 'Measuring with EXPLAIN QUERY PLAN turns a guess into a verified improvement, rather than blindly applying every rewrite everywhere.'
        },
        {
          id: 'sql-a-f-30',
          type: 'mcq',
          prompt: 'In the "last item in stock" race condition, why can two customers both successfully order the same single last unit without proper locking?',
          options: ['This scenario can never actually happen in a real system', 'Both queries can check "is stock available?" and both see "yes" before either one actually commits a decrement, since nothing forced one to wait for the other', 'SQL always prevents this automatically with zero setup required', 'This only happens with non-relational databases'],
          answerIndex: 1,
          explanation: 'Without a lock forcing one transaction to wait, both can observe the same "stock available" state before either updates it.'
        },
        {
          id: 'sql-a-f-31',
          type: 'mcq',
          prompt: 'What is the difference between a shared lock and an exclusive lock?',
          options: ['They are the same mechanism with different names', 'A shared lock allows multiple simultaneous readers; an exclusive lock is needed to write and blocks other writers until released', 'Shared locks are only used when deleting rows', 'Exclusive locks allow unlimited simultaneous writers'],
          answerIndex: 1,
          explanation: 'Reading does not conflict with other reading, so shared locks coexist; writing requires exclusive access to avoid conflicting changes.'
        },
        {
          id: 'sql-a-f-32',
          type: 'mcq',
          prompt: 'What is a deadlock?',
          options: ['A query that returns zero rows', 'A situation where transaction A waits for a lock held by B, while B simultaneously waits for a lock held by A, so neither can proceed', 'A syntax error in a transaction', 'A transaction that intentionally never commits'],
          answerIndex: 1,
          explanation: 'Real databases detect deadlocks automatically and forcibly fail one transaction so the other can proceed, rather than letting both wait forever.'
        },
        {
          id: 'sql-a-f-33',
          type: 'fill-blank',
          prompt: 'A practical habit that avoids most real-world deadlocks: when updating multiple tables or rows in one transaction, always touch them in the same consistent ______, everywhere in the codebase.',
          correctAnswers: ['order', 'ORDER'],
          explanation: 'Most real deadlocks come from two different parts of an application locking the same resources in opposite order.'
        },
        {
          id: 'sql-a-f-34',
          type: 'mcq',
          prompt: 'What is the general tradeoff between stricter and looser isolation levels?',
          options: ['There is no tradeoff — strictest is always best with no downside', 'Stricter isolation means fewer surprising bugs but more transactions waiting on each other (or needing retries), which can reduce throughput under heavy load', 'Looser isolation is always faster with zero correctness cost', 'Isolation levels only change how data displays, not correctness'],
          answerIndex: 1,
          explanation: 'Every database faces this same fundamental tradeoff between consistency guarantees and concurrent throughput.'
        },
        {
          id: 'sql-a-f-35',
          type: 'code',
          prompt: 'Find every restaurant in restaurants whose rating is not null, ranked by rating using DENSE_RANK, highest first.',
          dataset: 'quickbite',
          expectedKeywords: ['select', 'name', 'rating', 'dense_rank', 'over', 'order', 'by', 'desc', 'from', 'restaurants', 'where', 'is', 'not', 'null'],
          explanation: "SELECT name, rating, DENSE_RANK() OVER (ORDER BY rating DESC) AS rnk FROM restaurants WHERE rating IS NOT NULL."
        }
      ]
    }
  },
  python: {
    beginner: {
      title: 'Python Beginner Final Assessment',
      intro: 'Test your knowledge across all Python beginner modules — variables, conditionals, loops, lists & dictionaries, functions, files, and error handling. Several questions include a live, runnable Python playground.',
      questions: [
        {
          id: 'py-b-f-1',
          type: 'mcq',
          prompt: 'What does print("Hello") do?',
          options: ['Saves "Hello" to a file', 'Displays the text Hello in the output', 'Creates a variable named Hello', 'Deletes the word Hello'],
          answerIndex: 1,
          explanation: 'print() outputs whatever you pass it to the console/output area.'
        },
        {
          id: 'py-b-f-2',
          type: 'fill-blank',
          prompt: 'Fill in the blank: ____ = "Alice" creates a variable called name holding the text "Alice".',
          correctAnswers: ['name'],
          explanation: 'name = "Alice" — the variable name goes on the left of the equals sign.'
        },
        {
          id: 'py-b-f-3',
          type: 'code',
          prompt: 'Create a variable called age set to 25, and print a message like "I am 25 years old" using an f-string.',
          language: 'python',
          expectedKeywords: ['age', 'print', 'i', 'am', 'years', 'old'],
          explanation: 'age = 25; print(f"I am {age} years old").'
        },
        {
          id: 'py-b-f-4',
          type: 'mcq',
          prompt: 'What is the data type of the value 3.14 in Python?',
          options: ['int', 'float', 'str', 'bool'],
          answerIndex: 1,
          explanation: 'Numbers with a decimal point are floats; whole numbers without one are ints.'
        },
        {
          id: 'py-b-f-5',
          type: 'mcq',
          prompt: 'What does the // operator do in Python?',
          options: ['Starts a comment', 'Performs floor (integer) division, dropping any remainder', 'Divides and keeps the remainder', 'Raises a number to a power'],
          answerIndex: 1,
          explanation: '// performs division and rounds down to the nearest whole number, unlike / which keeps decimals.'
        },
        {
          id: 'py-b-f-6',
          type: 'code',
          prompt: 'Write code that converts the string "42" into an integer, adds 8 to it, and prints the result.',
          language: 'python',
          expectedKeywords: ['int', 'print'],
          explanation: 'print(int("42") + 8) — int() converts a numeric string into a usable integer.'
        },
        {
          id: 'py-b-f-7',
          type: 'fill-blank',
          prompt: 'Fill in the blank: the string method ____() converts text to all uppercase letters.',
          correctAnswers: ['upper'],
          explanation: '"hello".upper() returns "HELLO".'
        },
        {
          id: 'py-b-f-8',
          type: 'mcq',
          prompt: 'In an if/elif/else chain, what happens once one condition is found to be True?',
          options: ['Every remaining branch still runs', 'Python runs that branch and skips all the rest of the chain', 'Python throws an error', 'Nothing runs at all'],
          answerIndex: 1,
          explanation: 'Only the first matching branch executes; the rest of the chain is skipped.'
        },
        {
          id: 'py-b-f-9',
          type: 'code',
          prompt: 'Write code that checks a variable called score (set it to 85), and prints "Pass" if score is 60 or above, otherwise prints "Fail".',
          language: 'python',
          expectedKeywords: ['score', 'if', 'print', 'pass', 'else', 'print', 'fail'],
          explanation: 'score = 85\\nif score >= 60:\\n    print("Pass")\\nelse:\\n    print("Fail")'
        },
        {
          id: 'py-b-f-10',
          type: 'mcq',
          prompt: 'What is the difference between and and or in a condition?',
          options: ['They mean the same thing', 'and requires both sides to be True; or requires at least one side to be True', 'and is for numbers, or is for text', 'They are not valid Python keywords'],
          answerIndex: 1,
          explanation: 'and is true only when both conditions are true; or is true when at least one is true.'
        },
        {
          id: 'py-b-f-11',
          type: 'code',
          prompt: 'Write a for loop that prints each number from 1 to 5 (inclusive) using range().',
          language: 'python',
          expectedKeywords: ['for', 'in', 'range', 'print'],
          explanation: 'for i in range(1, 6):\\n    print(i) — range(1, 6) produces 1 through 5.'
        },
        {
          id: 'py-b-f-12',
          type: 'mcq',
          prompt: 'What does the break statement do inside a loop?',
          options: ['Skips to the next iteration', 'Immediately exits the loop entirely', 'Pauses the program for one second', 'Restarts the loop from the beginning'],
          answerIndex: 1,
          explanation: 'break stops the loop immediately, even if there would be more iterations left.'
        },
        {
          id: 'py-b-f-13',
          type: 'mcq',
          prompt: 'What does the continue statement do inside a loop?',
          options: ['Stops the loop completely', 'Skips the rest of the current iteration and moves to the next one', 'Deletes the loop variable', 'Throws an error'],
          answerIndex: 1,
          explanation: 'continue jumps straight to the next iteration, skipping any remaining code in the current one.'
        },
        {
          id: 'py-b-f-14',
          type: 'code',
          prompt: 'Write a while loop that prints "Counting" while a variable count (start at 0) is less than 3, incrementing count by 1 each time.',
          language: 'python',
          expectedKeywords: ['count', 'while', 'print', 'counting', 'count'],
          explanation: 'count = 0\\nwhile count < 3:\\n    print("Counting")\\n    count += 1'
        },
        {
          id: 'py-b-f-15',
          type: 'mcq',
          prompt: 'How do you access the first item in a list called fruits?',
          options: ['fruits.first()', 'fruits[1]', 'fruits[0]', 'fruits(0)'],
          answerIndex: 2,
          explanation: 'Python lists are zero-indexed, so the first item is at index 0.'
        },
        {
          id: 'py-b-f-16',
          type: 'mcq',
          prompt: 'What is the key difference between a list and a dictionary?',
          options: ['Lists store items by position (index); dictionaries store items by key', 'Dictionaries cannot store text', 'Lists can only hold numbers', 'They are interchangeable with no real difference'],
          answerIndex: 0,
          explanation: 'A list is an ordered sequence accessed by numeric index; a dictionary maps keys to values.'
        },
        {
          id: 'py-b-f-17',
          type: 'code',
          prompt: 'Create a list called colors containing "red", "green", "blue". Use .append() to add "yellow", then print the list.',
          language: 'python',
          expectedKeywords: ['colors', 'append', 'yellow', 'print'],
          explanation: 'colors = ["red", "green", "blue"]\\ncolors.append("yellow")\\nprint(colors)'
        },
        {
          id: 'py-b-f-18',
          type: 'code',
          prompt: 'Create a dictionary called person with keys "name" set to "Sam" and "age" set to 30. Print the value of person["name"].',
          language: 'python',
          expectedKeywords: ['person', 'name', 'sam', 'age', 'print'],
          explanation: 'person = {"name": "Sam", "age": 30}\\nprint(person["name"])'
        },
        {
          id: 'py-b-f-19',
          type: 'fill-blank',
          prompt: 'Fill in the blank: a for loop like for fruit ____ fruits: lets you iterate over each item in a list.',
          correctAnswers: ['in'],
          explanation: 'for fruit in fruits: loops over every element in the fruits list.'
        },
        {
          id: 'py-b-f-20',
          type: 'mcq',
          prompt: 'Why would you write a function instead of repeating the same code multiple times?',
          options: ['Functions run faster than any other code', 'Functions let you reuse logic by name instead of copy-pasting it everywhere', 'Python requires every program to have at least one function', 'Functions are only useful for printing text'],
          answerIndex: 1,
          explanation: 'Functions package reusable logic behind a name, making code shorter, clearer, and easier to fix in one place.'
        },
        {
          id: 'py-b-f-21',
          type: 'code',
          prompt: 'Write a function called square that takes a number n and returns n squared. Call it with 5 and print the result.',
          language: 'python',
          expectedKeywords: ['def', 'square', 'return', 'print'],
          explanation: 'def square(n):\\n    return n ** 2\\nprint(square(5))'
        },
        {
          id: 'py-b-f-22',
          type: 'mcq',
          prompt: 'What does a return statement do inside a function?',
          options: ['It prints a value to the screen', 'It sends a value back to wherever the function was called, and ends the function', 'It creates a new variable inside the function only', 'It pauses the function temporarily'],
          answerIndex: 1,
          explanation: 'return hands a result back to the caller and immediately exits the function.'
        },
        {
          id: 'py-b-f-23',
          type: 'mcq',
          prompt: 'What is a default parameter value in a function definition like def greet(name="friend"):?',
          options: ['A value that must always be passed in', 'A fallback value used automatically if the caller does not provide one', 'An error that occurs if no argument is given', 'A value that can never be changed'],
          answerIndex: 1,
          explanation: 'If the caller omits the argument, the default value is used instead.'
        },
        {
          id: 'py-b-f-24',
          type: 'code',
          prompt: 'Write code using a with statement to open a file called "notes.txt" for writing and write the line "Hello file" into it.',
          language: 'python',
          expectedKeywords: ['with', 'open', 'notes', 'txt', 'as', 'write', 'hello', 'file'],
          explanation: 'with open("notes.txt", "w") as f:\\n    f.write("Hello file")'
        },
        {
          id: 'py-b-f-25',
          type: 'mcq',
          prompt: 'Why is using a with statement to open files preferred over open() alone?',
          options: ['It is the only way Python allows opening files', 'It automatically closes the file for you, even if an error happens inside the block', 'It makes the file open faster', 'It prevents the file from ever being edited again'],
          answerIndex: 1,
          explanation: 'with handles closing the file automatically once the block finishes, preventing resource leaks.'
        },
        {
          id: 'py-b-f-26',
          type: 'code',
          prompt: 'Write code using a with statement that opens "notes.txt" for reading and prints its full contents.',
          language: 'python',
          expectedKeywords: ['with', 'open', 'notes', 'txt', 'as', 'read', 'print'],
          explanation: 'with open("notes.txt") as f:\\n    print(f.read())'
        },
        {
          id: 'py-b-f-27',
          type: 'mcq',
          prompt: 'What is the purpose of a try/except block?',
          options: ['It speeds up your code', 'It catches errors at runtime so your program can handle them gracefully instead of crashing', 'It is required before every function definition', 'It only works with file operations'],
          answerIndex: 1,
          explanation: 'try/except lets you catch and respond to errors instead of letting the whole program crash.'
        },
        {
          id: 'py-b-f-28',
          type: 'code',
          prompt: 'Write code that tries to convert the string "abc" into an integer inside a try block, and prints "Invalid number" if a ValueError occurs.',
          language: 'python',
          expectedKeywords: ['try', 'int', 'except', 'valueerror', 'print', 'invalid', 'number'],
          explanation: 'try:\\n    int("abc")\\nexcept ValueError:\\n    print("Invalid number")'
        },
        {
          id: 'py-b-f-29',
          type: 'mcq',
          prompt: 'What data type does a Python set hold, and what is its key feature?',
          options: ['An ordered collection that allows duplicates', 'An unordered collection of unique values — duplicates are automatically removed', 'A fixed-size list that cannot change', 'A key-value mapping like a dictionary'],
          answerIndex: 1,
          explanation: 'A set automatically discards duplicate values and does not preserve insertion order.'
        },
        {
          id: 'py-b-f-30',
          type: 'fill-blank',
          prompt: 'Fill in the blank: a tuple is created with parentheses, like point = (3, 4), and unlike a list, it is ____ once created.',
          correctAnswers: ['immutable', 'unchangeable', 'fixed'],
          explanation: 'Tuples cannot be modified after creation — no appending, removing, or reassigning elements.'
        },
        {
          id: 'py-b-f-31',
          type: 'code',
          prompt: 'Write a list comprehension that creates a list of the squares of numbers 1 through 5, and print it.',
          language: 'python',
          expectedKeywords: ['for', 'in', 'range', 'print'],
          explanation: 'squares = [n ** 2 for n in range(1, 6)]\\nprint(squares)'
        },
        {
          id: 'py-b-f-32',
          type: 'mcq',
          prompt: 'What does len(my_list) return?',
          options: ['The largest value in the list', 'The number of items in the list', 'The data type of the list', 'The first item in the list'],
          answerIndex: 1,
          explanation: 'len() returns a count of how many elements a list (or string, dict, etc.) contains.'
        },
        {
          id: 'py-b-f-33',
          type: 'code',
          prompt: 'Write a function called is_even that takes a number n and returns True if it is even, False otherwise. Call it with 7 and print the result.',
          language: 'python',
          expectedKeywords: ['def', 'is_even', 'return', 'print'],
          explanation: 'def is_even(n):\\n    return n % 2 == 0\\nprint(is_even(7))'
        }
      ]
    },
    intermediate: {
      title: 'Python Intermediate Final Assessment',
      intro: 'Test your knowledge across all 11 Python intermediate modules — pandas, NumPy, merging data, matplotlib, APIs, web scraping, Jupyter notebooks, and virtual environments. Several questions include a live, runnable Python playground.',
      questions: [
        {
          id: 'py-i-f-1',
          type: 'mcq',
          prompt: 'What is a pandas DataFrame?',
          options: ['A single column of values', "pandas' table structure — rows and columns, like an Excel sheet or SQL table, that you can filter, sort, and group in code", 'A type of chart', 'A built-in Python data type, available without importing anything'],
          answerIndex: 1,
          explanation: 'A DataFrame is the core pandas object representing a full table of data, with powerful row-and-column operations built in.'
        },
        {
          id: 'py-i-f-2',
          type: 'mcq',
          prompt: 'What does pd.read_csv() do?',
          options: ['Deletes a CSV file', 'Reads an entire CSV file (or CSV-like text) into a DataFrame in one line', 'Converts a DataFrame into a chart', 'Creates a brand new, empty file'],
          answerIndex: 1,
          explanation: 'read_csv() is the standard way to load real-world tabular data into pandas, handling the row/column parsing for you.'
        },
        {
          id: 'py-i-f-3',
          type: 'code',
          prompt: 'Using io.StringIO, load the CSV text below into a DataFrame called df and print its shape.',
          language: 'python',
          expectedKeywords: ['import', 'pandas', 'as', 'pd', 'import', 'io', 'read_csv', 'stringio', 'print', 'shape'],
          explanation: 'import pandas as pd; import io; df = pd.read_csv(io.StringIO(csv_text)); print(df.shape).'
        },
        {
          id: 'py-i-f-4',
          type: 'mcq',
          prompt: 'What does df[df["unit_price"] > 1000] return?',
          options: ['Every row, unfiltered', 'Only the rows where unit_price is greater than 1000', 'An error, since this is invalid syntax', 'Only the unit_price column'],
          answerIndex: 1,
          explanation: 'df["unit_price"] > 1000 produces a column of True/False values; wrapping it in df[...] keeps only the True rows — the pandas equivalent of SQL\'s WHERE.'
        },
        {
          id: 'py-i-f-5',
          type: 'mcq',
          prompt: 'Why does df[df["category"] == "Electronics" & df["unit_price"] > 1000] usually cause an error?',
          options: ['& is never valid in pandas', 'Each condition needs its own parentheses when combined with & or |, e.g. (condition1) & (condition2)', 'You cannot combine two conditions at all in pandas', 'category and unit_price cannot both be used in one filter'],
          answerIndex: 1,
          explanation: 'Without parentheses around each condition, Python tries to evaluate operators in the wrong order, producing a confusing error.'
        },
        {
          id: 'py-i-f-6',
          type: 'fill-blank',
          prompt: 'df["category"].______(["Electronics", "Apparel"]) checks whether each value matches anything in a given list — the pandas equivalent of SQL\'s IN.',
          correctAnswers: ['isin', 'ISIN'],
          explanation: '.isin() is the standard way to filter a column against a list of acceptable values.'
        },
        {
          id: 'py-i-f-7',
          type: 'code',
          prompt: 'Given a DataFrame df with a unit_price column, write code to filter to rows where unit_price > 1000, then sort the result by unit_price descending.',
          language: 'python',
          expectedKeywords: ['sort_values', 'ascending', 'false'],
          explanation: 'df[df["unit_price"] > 1000].sort_values("unit_price", ascending=False).'
        },
        {
          id: 'py-i-f-8',
          type: 'mcq',
          prompt: 'What does df.isnull().sum() show you?',
          options: ['The total row count', 'How many missing (null) values exist in each column', 'The sum of every numeric column', 'Whether the DataFrame is empty'],
          answerIndex: 1,
          explanation: 'isnull() flags every missing cell as True; .sum() totals those per column, giving a missing-value count for each one.'
        },
        {
          id: 'py-i-f-9',
          type: 'mcq',
          prompt: 'What is the key difference between df.dropna() and df.fillna(value)?',
          options: ['They do the same thing', 'dropna() removes rows with missing values; fillna() replaces missing values with something specific instead of removing the row', 'fillna() only works on text columns', 'dropna() can only be used once per DataFrame'],
          answerIndex: 1,
          explanation: 'Dropping discards the whole row; filling keeps the row but substitutes a sensible default for the gap.'
        },
        {
          id: 'py-i-f-10',
          type: 'fill-blank',
          prompt: 'df["product"].______.strip() applies a string method to every value in an entire column at once, without writing a loop.',
          correctAnswers: ['str', 'STR'],
          explanation: 'The .str accessor unlocks ordinary Python string methods across a whole column simultaneously.'
        },
        {
          id: 'py-i-f-11',
          type: 'code',
          prompt: 'Given a DataFrame df with a "product" column containing messy text, write code to strip whitespace and convert it to title case.',
          language: 'python',
          expectedKeywords: ['str', 'strip', 'str', 'title'],
          explanation: 'df["product"] = df["product"].str.strip().str.title().'
        },
        {
          id: 'py-i-f-12',
          type: 'mcq',
          prompt: 'What does df.groupby("category")["total"].sum() calculate?',
          options: ['The overall total across the whole DataFrame', 'The total of the "total" column, calculated separately for each distinct category', 'The number of categories', 'The average of every column'],
          answerIndex: 1,
          explanation: 'groupby buckets rows by category, and .sum() totals within each bucket separately — the same idea as SQL\'s GROUP BY.'
        },
        {
          id: 'py-i-f-13',
          type: 'fill-blank',
          prompt: 'In df.pivot_table(..., fill_value=0), what does fill_value=0 prevent?',
          correctAnswers: ['nan', 'NaN'],
          explanation: 'Without fill_value=0, any region/category combination with no data shows up as NaN, which looks like an error rather than a genuine zero.'
        },
        {
          id: 'py-i-f-14',
          type: 'code',
          prompt: 'Given a DataFrame df with "category" and "total" columns, write code to print total revenue per category, sorted highest to lowest.',
          language: 'python',
          expectedKeywords: ['groupby', 'category', 'sum', 'sort_values', 'ascending', 'false'],
          explanation: 'df.groupby("category")["total"].sum().sort_values(ascending=False).'
        },
        {
          id: 'py-i-f-15',
          type: 'mcq',
          prompt: 'What does prices * 1.18 do if prices is a NumPy array?',
          options: ['Raises an error', 'Multiplies every single element in the array by 1.18 simultaneously, with no loop required', 'Only multiplies the first element', 'Replaces the array with the number 1.18'],
          answerIndex: 1,
          explanation: 'This is a vectorised operation — the calculation applies to the entire array at once, which is both shorter to write and far faster than a manual loop.'
        },
        {
          id: 'py-i-f-16',
          type: 'mcq',
          prompt: 'What does array.std() calculate?',
          options: ['The sum of all values', 'The standard deviation — how spread out the values are around the average', 'The number of elements', 'The largest value'],
          answerIndex: 1,
          explanation: 'Standard deviation measures spread: small means values cluster near the mean, large means they are widely scattered.'
        },
        {
          id: 'py-i-f-17',
          type: 'code',
          prompt: 'Given a NumPy array called totals, write code to print its mean and standard deviation.',
          language: 'python',
          expectedKeywords: ['print', 'totals', 'mean', 'std'],
          explanation: 'print(totals.mean()); print(totals.std()).'
        },
        {
          id: 'py-i-f-18',
          type: 'mcq',
          prompt: 'What does pd.merge(customers, orders, on="customer_id") do by default?',
          options: ['Stacks the two tables on top of each other', 'Combines the tables sideways, matching rows by customer_id — behaving like an INNER JOIN by default', 'Deletes any row that does not match', 'Always keeps every row from both tables regardless of match'],
          answerIndex: 1,
          explanation: 'merge() with no how= argument defaults to an inner join, keeping only rows with a match in both tables.'
        },
        {
          id: 'py-i-f-19',
          type: 'mcq',
          prompt: 'What does how="left" do in a pandas merge?',
          options: ['Keeps every row from the first table, filling NaN where there is no match on the right — the same idea as SQL\'s LEFT JOIN', 'Only keeps matching rows', 'Reverses the column order', 'Deletes the left table'],
          answerIndex: 0,
          explanation: 'how="left" preserves every row from the first table passed to merge(), even when there is no match in the second table.'
        },
        {
          id: 'py-i-f-20',
          type: 'code',
          prompt: 'Merge customers and orders on "customer_id", keeping every customer even if they have no matching order.',
          language: 'python',
          expectedKeywords: ['merge', 'customers', 'orders', 'on', 'how', 'left'],
          explanation: 'pd.merge(customers, orders, on="customer_id", how="left").'
        },
        {
          id: 'py-i-f-21',
          type: 'mcq',
          prompt: 'What do fig and ax typically represent in fig, ax = plt.subplots()?',
          options: ['fig is the data, ax is the title', 'fig is the overall chart canvas, ax is the actual plotting area where you draw bars, lines, or points', 'They refer to the same object', 'fig is required only for pie charts'],
          answerIndex: 1,
          explanation: 'fig represents the whole figure; ax is the specific axes you actually plot onto.'
        },
        {
          id: 'py-i-f-22',
          type: 'mcq',
          prompt: 'Which chart type is best for comparing a value across several distinct categories?',
          options: ['Pie chart', 'Bar chart', 'A scatter plot only', 'None of these'],
          answerIndex: 1,
          explanation: 'Bar charts are the clearest way to compare values across categories, the same guidance from this platform\'s Excel course.'
        },
        {
          id: 'py-i-f-23',
          type: 'code',
          prompt: 'Given lists categories and totals, write code to build a bar chart and display it using show_plot().',
          language: 'python',
          expectedKeywords: ['plt', 'subplots', 'bar', 'show_plot'],
          explanation: 'fig, ax = plt.subplots(); ax.bar(categories, totals); show_plot().'
        },
        {
          id: 'py-i-f-24',
          type: 'mcq',
          prompt: 'Why does JSON feel natural to work with in Python immediately after fetching it?',
          options: ['JSON is a Python-only format', "JSON's structure (key-value pairs, lists) closely mirrors Python dictionaries and lists", 'JSON cannot contain numbers', 'It does not — JSON requires heavy conversion first'],
          answerIndex: 1,
          explanation: 'A JSON object becomes a Python dictionary and a JSON array becomes a list almost directly, which is why parsed JSON feels immediately usable.'
        },
        {
          id: 'py-i-f-25',
          type: 'mcq',
          prompt: 'Why does fetching data from an API typically require await in this platform\'s playground?',
          options: ['await has no real effect', 'A network request takes time, so await lets Python pause at that point without freezing everything else, resuming once the response arrives', 'await converts the response into a DataFrame automatically', 'await is required before every print statement'],
          answerIndex: 1,
          explanation: 'Network requests are inherently slower than local code, which is why fetching is asynchronous — await is how you wait for the result correctly.'
        },
        {
          id: 'py-i-f-26',
          type: 'code',
          prompt: 'Using pyodide.http.pyfetch, write code to fetch JSON from a url variable and store the parsed result in a variable called data.',
          language: 'python',
          expectedKeywords: ['await', 'pyodide', 'http', 'pyfetch', 'response', 'json'],
          explanation: 'response = await pyodide.http.pyfetch(url); data = await response.json().'
        },
        {
          id: 'py-i-f-27',
          type: 'mcq',
          prompt: 'What does BeautifulSoup(html, "html.parser") do?',
          options: ['Sends a network request to fetch a web page', 'Parses a string of HTML text into a structure you can search through with find() and find_all()', 'Deletes all HTML tags', 'Converts HTML directly into a DataFrame automatically'],
          answerIndex: 1,
          explanation: 'BeautifulSoup parses raw HTML text into a navigable object; fetching the HTML itself is a separate step.'
        },
        {
          id: 'py-i-f-28',
          type: 'mcq',
          prompt: 'What is the difference between soup.find() and soup.find_all()?',
          options: ['They are identical', 'find() returns only the first matching tag; find_all() returns every matching tag as a list', 'find_all() only works on numbers', 'find() searches the whole internet'],
          answerIndex: 1,
          explanation: 'find() stops at the first match; find_all() collects every match, which is what you need to loop through multiple items.'
        },
        {
          id: 'py-i-f-29',
          type: 'code',
          prompt: 'Given a BeautifulSoup object called soup, write code to find every "div" tag with class "product" and print how many were found.',
          language: 'python',
          expectedKeywords: ['find_all', 'div', 'class_', 'product', 'print', 'len'],
          explanation: 'products = soup.find_all("div", class_="product"); print(len(products)).'
        },
        {
          id: 'py-i-f-30',
          type: 'mcq',
          prompt: 'What are the two main types of cells in a Jupyter notebook?',
          options: ['Input cells and output cells', 'Code cells (which run Python) and markdown cells (which hold formatted text)', 'Public cells and private cells', 'Fast cells and slow cells'],
          answerIndex: 1,
          explanation: 'Code cells execute Python and show results below; markdown cells hold formatted explanatory text alongside the code.'
        },
        {
          id: 'py-i-f-31',
          type: 'mcq',
          prompt: 'When is a regular .py script generally a better choice than a notebook?',
          options: ['Scripts are never a better choice', 'Once the logic is finalised and needs to run reliably end-to-end without manual cell-clicking, like an automated nightly report', 'Scripts cannot import pandas', 'Notebooks are always superior for every use case'],
          answerIndex: 1,
          explanation: 'Notebooks shine during exploration; scripts shine once you need reliable, unattended execution.'
        },
        {
          id: 'py-i-f-32',
          type: 'mcq',
          prompt: 'What problem does a virtual environment solve?',
          options: ['It makes Python code run faster', 'It prevents different projects on the same computer from conflicting over different required versions of the same package', 'It automatically writes your code', 'It replaces the need for pip'],
          answerIndex: 1,
          explanation: 'Without isolation, installing a package version for one project can silently break a different project needing an older version of the same package.'
        },
        {
          id: 'py-i-f-33',
          type: 'fill-blank',
          prompt: 'pip freeze > ______.txt saves the exact list of installed packages so someone else can recreate your setup with pip install -r.',
          correctAnswers: ['requirements', 'REQUIREMENTS'],
          explanation: 'requirements.txt is the standard, shareable record of exactly what a project needs installed.'
        }
      ]
    },
    advanced: {
      title: 'Python Advanced Final Assessment',
      intro: 'Test your knowledge across all 11 Python advanced modules — classes, inheritance, decorators, generators, context managers, async programming, performance profiling, type hints, testing with pytest, and packaging. Several questions include a live, runnable Python playground.',
      questions: [
        {
          id: 'py-a-f-1',
          type: 'mcq',
          prompt: 'What does __init__ do in a class?',
          options: ['It deletes the object when no longer needed', 'It runs automatically every time a new object is created, setting up its initial attributes', 'It must be called manually every time you use the object', 'It only runs once no matter how many objects you create'],
          answerIndex: 1,
          explanation: '__init__ is the automatic setup step for every new instance, filling in attributes based on what was passed in.'
        },
        {
          id: 'py-a-f-2',
          type: 'mcq',
          prompt: 'What is the difference between a class and an instance?',
          options: ['No real difference', 'A class is the blueprint, written once; an instance is one actual object built from that blueprint, with its own values', 'An instance is shared across the whole program', 'A class can only ever produce one instance'],
          answerIndex: 1,
          explanation: 'One class can produce many separate instances, each with independent attribute values.'
        },
        {
          id: 'py-a-f-3',
          type: 'code',
          prompt: 'Write a class called Item with an __init__ that takes name and price, and a method total_cost(quantity) that returns price times quantity.',
          language: 'python',
          expectedKeywords: ['class', 'item', 'def', '__init__', 'self', 'def', 'total_cost', 'self', 'return'],
          explanation: 'class Item:\\n    def __init__(self, name, price):\\n        self.name = name\\n        self.price = price\\n    def total_cost(self, quantity):\\n        return self.price * quantity'
        },
        {
          id: 'py-a-f-4',
          type: 'mcq',
          prompt: 'What does class PremiumCustomer(Customer): mean?',
          options: ['PremiumCustomer and Customer are unrelated', 'PremiumCustomer inherits from Customer, automatically receiving everything Customer already defines', 'Customer inherits from PremiumCustomer', 'This creates two identical, separate classes'],
          answerIndex: 1,
          explanation: 'Writing the parent class name in parentheses sets up inheritance — the new class gets everything the parent already has.'
        },
        {
          id: 'py-a-f-5',
          type: 'mcq',
          prompt: 'What is the general rule of thumb for choosing between inheritance and composition?',
          options: ['Always use inheritance', 'Prefer composition unless inheritance clearly models a genuine "is a" relationship', 'Always use composition, never inheritance', 'The choice has no real consequences'],
          answerIndex: 1,
          explanation: '"Favour composition over inheritance" exists because inheritance used where it does not genuinely fit produces confusing, hard-to-change code.'
        },
        {
          id: 'py-a-f-6',
          type: 'fill-blank',
          prompt: 'Inside a subclass\'s __init__, ______().__init__(...) calls the parent class\'s own setup code, so you do not have to retype it.',
          correctAnswers: ['super', 'SUPER'],
          explanation: 'super().__init__(...) reuses the parent\'s setup logic, letting the subclass only add what is new.'
        },
        {
          id: 'py-a-f-7',
          type: 'mcq',
          prompt: 'What does printing an object show by default, without a custom __repr__?',
          options: ['A readable summary of attributes', 'Just its memory address, like <__main__.Customer object at 0x...>', 'An error', 'Nothing'],
          answerIndex: 1,
          explanation: 'Without a custom __repr__, Python falls back to an unhelpful default showing only the memory address.'
        },
        {
          id: 'py-a-f-8',
          type: 'mcq',
          prompt: 'Why might two separately-created objects with identical attribute values compare as not equal using ==, without a custom __eq__?',
          options: ['This never happens', 'Python compares objects by identity by default (are they the same object in memory), not by their actual data', 'Python cannot compare objects at all', '== always returns True for same-class objects'],
          answerIndex: 1,
          explanation: 'Without __eq__, == checks identity, not data equality — rarely what you actually mean for data-holding objects.'
        },
        {
          id: 'py-a-f-9',
          type: 'code',
          prompt: 'Add a __repr__ to the Point class below that returns something like Point(x=1, y=2).',
          language: 'python',
          expectedKeywords: ['def', '__repr__', 'self', 'return'],
          explanation: 'def __repr__(self):\\n    return f"Point(x={self.x}, y={self.y})"'
        },
        {
          id: 'py-a-f-10',
          type: 'mcq',
          prompt: 'What does @time_it above a function definition actually do?',
          options: ['It is just a comment with no effect', 'It is equivalent to writing my_function = time_it(my_function) — wrapping the original function and replacing it with the wrapped version', 'It deletes the function after one use', 'It only works on functions with zero arguments'],
          answerIndex: 1,
          explanation: 'The @decorator syntax passes the function into the decorator and reassigns the name to whatever the decorator returns.'
        },
        {
          id: 'py-a-f-11',
          type: 'mcq',
          prompt: 'Why does a decorator\'s wrapper function typically accept *args, **kwargs?',
          options: ['They are required keywords with no purpose', 'So the wrapper can accept any combination of arguments and pass them through to the original function, regardless of its specific signature', 'They limit the function to exactly two arguments', 'They only work with decorators, nowhere else'],
          answerIndex: 1,
          explanation: 'A decorator usually does not know what arguments the wrapped function needs, so *args/**kwargs forward anything through untouched.'
        },
        {
          id: 'py-a-f-12',
          type: 'code',
          prompt: 'Write a decorator called log_call that prints "Calling now" before running the function it wraps, then apply it to a function add(a, b).',
          language: 'python',
          expectedKeywords: ['def', 'log_call', 'func', 'def', 'wrapper', 'args', 'kwargs', 'return', 'wrapper'],
          explanation: 'def log_call(func):\\n    def wrapper(*args, **kwargs):\\n        print("Calling now")\\n        return func(*args, **kwargs)\\n    return wrapper'
        },
        {
          id: 'py-a-f-13',
          type: 'mcq',
          prompt: 'What turns a normal function into a generator function?',
          options: ['Adding a return statement', 'Using yield anywhere inside the function body', 'Naming it starting with gen_', 'Adding type hints'],
          answerIndex: 1,
          explanation: 'The presence of yield anywhere in a function makes calling it return a generator object instead of running the code immediately.'
        },
        {
          id: 'py-a-f-14',
          type: 'mcq',
          prompt: 'Why does a generator typically use far less memory than building a full list, for the same data?',
          options: ['Generators store data more compactly in the same way', 'A generator produces one value at a time, on demand, never holding the entire collection in memory simultaneously', 'Generators can only hold numbers', 'No real memory difference exists'],
          answerIndex: 1,
          explanation: 'A generator only needs to remember where it is up to, not the full set of results, which keeps its memory footprint tiny.'
        },
        {
          id: 'py-a-f-15',
          type: 'code',
          prompt: 'Write a generator function called evens that yields only the even numbers from a list called numbers.',
          language: 'python',
          expectedKeywords: ['def', 'evens', 'for', 'in', 'if', 'yield'],
          explanation: 'def evens(numbers):\\n    for n in numbers:\\n        if n % 2 == 0:\\n            yield n'
        },
        {
          id: 'py-a-f-16',
          type: 'mcq',
          prompt: 'What guarantee does with open("file.txt") as f: give you, that a plain f = open("file.txt") does not?',
          options: ['It opens the file faster', 'It guarantees the file gets closed automatically when the block ends, even if an error happens inside it', 'It prevents the file from ever being edited', 'No real difference exists'],
          answerIndex: 1,
          explanation: 'A context manager\'s cleanup step (closing the file) runs no matter how the block ends, including via an exception.'
        },
        {
          id: 'py-a-f-17',
          type: 'mcq',
          prompt: 'In a @contextmanager-decorated generator function, what does the code before yield correspond to?',
          options: ['Nothing, it never runs', 'The setup step, equivalent to __enter__', 'The cleanup step, equivalent to __exit__', 'Code that only runs on error'],
          answerIndex: 1,
          explanation: 'Code before yield runs at the start of the with block (setup); code after yield runs at the end (cleanup).'
        },
        {
          id: 'py-a-f-18',
          type: 'mcq',
          prompt: 'What does the await keyword actually do inside an async function?',
          options: ['Permanently stops the program', 'It pauses at that point and lets other code run while waiting, instead of blocking everything until the awaited operation finishes', 'It has no real effect', 'It only works inside a for loop'],
          answerIndex: 1,
          explanation: 'await is where a coroutine can pause without blocking the whole program, letting other pending work make progress during the wait.'
        },
        {
          id: 'py-a-f-19',
          type: 'mcq',
          prompt: 'For what kind of work does async programming actually provide a speed benefit?',
          options: ['Heavy CPU-bound number-crunching with no waiting involved', 'I/O-bound work — waiting on a network response, a file, or a database — where the waiting itself does not need the CPU', 'Any code at all, with no exceptions', 'Only code that prints to the screen'],
          answerIndex: 1,
          explanation: 'Async fills idle waiting time with other useful work. Pure CPU-bound work has no idle waiting time to fill, so it gets no benefit.'
        },
        {
          id: 'py-a-f-20',
          type: 'code',
          prompt: 'Write an async function called main that uses asyncio.gather to run two coroutines, task_a() and task_b(), concurrently and prints their results.',
          language: 'python',
          expectedKeywords: ['async', 'def', 'main', 'await', 'asyncio', 'gather', 'print'],
          explanation: 'async def main():\\n    results = await asyncio.gather(task_a(), task_b())\\n    print(results)'
        },
        {
          id: 'py-a-f-21',
          type: 'mcq',
          prompt: 'What is timeit best suited for?',
          options: ['Finding which function inside a large program is slow', 'Comparing the speed of two small code snippets directly against each other, run many times to smooth out noise', 'Writing automated tests', 'Adding type hints'],
          answerIndex: 1,
          explanation: 'timeit repeats a snippet many times for a reliable timing comparison, ideal for "which approach is faster?" questions.'
        },
        {
          id: 'py-a-f-22',
          type: 'mcq',
          prompt: 'What does cProfile tell you that timeit does not?',
          options: ['Nothing, they do the same job', 'Inside an entire function, which specific function calls are actually consuming the most time', 'Whether your code has syntax errors', 'How to automatically fix slow code'],
          answerIndex: 1,
          explanation: 'cProfile breaks down time spent across every function call, helping pinpoint the real bottleneck rather than just timing the whole thing.'
        },
        {
          id: 'py-a-f-23',
          type: 'code',
          prompt: 'Using cProfile.Profile(), profile a call to a function called process_data() and print the stats.',
          language: 'python',
          expectedKeywords: ['cprofile', 'profile', 'enable', 'process_data', 'disable', 'print_stats'],
          explanation: 'profiler = cProfile.Profile()\\nprofiler.enable()\\nprocess_data()\\nprofiler.disable()\\nprofiler.print_stats()'
        },
        {
          id: 'py-a-f-24',
          type: 'mcq',
          prompt: 'Does Python enforce type hints at runtime by stopping a function from running with the "wrong" type?',
          options: ['Yes, always', 'No — type hints are documentation with structure; Python still runs the code regardless, and mismatches are caught by a separate tool', 'Only for built-in types', 'Only inside classes'],
          answerIndex: 1,
          explanation: 'Type hints by themselves do not change runtime behaviour — a separate static type checker like mypy is what actually enforces them.'
        },
        {
          id: 'py-a-f-25',
          type: 'mcq',
          prompt: 'What does Optional[Dict] mean as a type hint?',
          options: ['A dictionary that can never be empty', 'Either a Dict, or possibly None', 'A dictionary with optional keys', 'The same as just Dict'],
          answerIndex: 1,
          explanation: 'Optional[X] is shorthand for "X or None," commonly used for lookups that might not find a result.'
        },
        {
          id: 'py-a-f-26',
          type: 'fill-blank',
          prompt: '______, a static type checker run from the command line, is what actually reports mismatches between your code and its type hints.',
          correctAnswers: ['mypy', 'MYPY'],
          explanation: 'mypy reads type hints and checks them as a separate static-analysis step, without running the program.'
        },
        {
          id: 'py-a-f-27',
          type: 'mcq',
          prompt: 'How does pytest decide which functions in a file to run as tests?',
          options: ['It runs every function in the file', 'It looks for functions whose names start with test_', 'Only functions listed in a separate config file run', 'Every test must be a class method'],
          answerIndex: 1,
          explanation: 'pytest automatically discovers and runs any function whose name starts with test_.'
        },
        {
          id: 'py-a-f-28',
          type: 'mcq',
          prompt: 'Why might you write several small, specifically-named test functions instead of one large combined test?',
          options: ['Smaller tests always run faster', 'If only one specific case breaks, named tests immediately tell you exactly which behaviour failed, rather than just "something failed"', 'pytest does not support multiple tests per file', 'Combined tests are invalid syntax'],
          answerIndex: 1,
          explanation: 'Specific, named tests pinpoint exactly which behaviour broke, which a single all-in-one test cannot.'
        },
        {
          id: 'py-a-f-29',
          type: 'mcq',
          prompt: 'What does pytest.raises(ValueError) let you test?',
          options: ['That a function never raises any error', 'That a specific block of code correctly raises a ValueError, confirming error-raising behaviour works as intended', 'That a function returns a float', 'That a file has no syntax errors'],
          answerIndex: 1,
          explanation: 'Sometimes correct behaviour IS raising an error — pytest.raises checks that this actually happens as expected.'
        },
        {
          id: 'py-a-f-30',
          type: 'code',
          prompt: 'Write a pytest test function called test_add_works that asserts add(2, 3) equals 5.',
          language: 'python',
          expectedKeywords: ['def', 'test_add_works', 'assert', 'add'],
          explanation: 'def test_add_works():\\n    assert add(2, 3) == 5'
        },
        {
          id: 'py-a-f-31',
          type: 'mcq',
          prompt: 'What does an __init__.py file inside a folder signal to Python?',
          options: ['That the folder should be deleted', 'That the folder should be treated as an importable package', 'That the folder contains only test files', 'Nothing, it has no special meaning'],
          answerIndex: 1,
          explanation: '__init__.py (even when empty) is what makes a plain folder behave as a proper, importable Python package.'
        },
        {
          id: 'py-a-f-32',
          type: 'mcq',
          prompt: 'What is pyproject.toml used for?',
          options: ['Storing actual Python source code', 'Describing the package to the outside world — its name, version, dependencies, and how to build it', 'Writing tests', 'Replacing __init__.py entirely'],
          answerIndex: 1,
          explanation: 'pyproject.toml is the modern standard file describing a package\'s metadata and build requirements.'
        },
        {
          id: 'py-a-f-33',
          type: 'fill-blank',
          prompt: '______ is the public repository that pip install pandas actually downloads packages from.',
          correctAnswers: ['pypi', 'PyPI'],
          explanation: 'PyPI (the Python Package Index) is the central public index of published Python packages.'
        }
      ]
    }
  },
  excel: {
    beginner: {
      title: 'Excel Beginner Final Assessment',
      intro: 'Test your knowledge across all Excel beginner modules — cells and formulas, references, formatting, IF logic, sorting/filtering/charts, workbooks, and cleaning text. Includes multiple choice and fill-in-the-blank formula questions.',
      questions: [
        {
          id: 'ex-b-f-1',
          type: 'mcq',
          prompt: 'In a spreadsheet, what does the cell address "B7" refer to?',
          options: ['Row B, column 7', 'Column B, row 7', 'The 7th sheet, column B', 'A named range called B7 only'],
          answerIndex: 1,
          explanation: 'Cell addresses are always column letter first, then row number — B7 means column B, row 7.'
        },
        {
          id: 'ex-b-f-2',
          type: 'mcq',
          prompt: 'What must every Excel formula begin with?',
          options: ['A capital letter', 'The @ symbol', 'The = sign', 'A pair of parentheses'],
          answerIndex: 2,
          explanation: 'The equals sign tells Excel "treat this as a calculation," not plain text.'
        },
        {
          id: 'ex-b-f-3',
          type: 'fill-blank',
          prompt: 'Write the formula that adds up every value in the range A1 to A10.',
          correctAnswers: ['=sum(a1:a10)', 'sum(a1:a10)'],
          explanation: '=SUM(A1:A10) adds every value in that continuous range of cells.'
        },
        {
          id: 'ex-b-f-4',
          type: 'mcq',
          prompt: 'You copy a formula =A2*0.18 from cell B2 down to B3. What does the formula in B3 automatically become?',
          options: ['=A2*0.18, unchanged', '=A3*0.18, since the reference shifts with the new row', '=B2*0.18', 'An error, because formulas cannot be copied'],
          answerIndex: 1,
          explanation: 'A relative reference like A2 automatically adjusts to match its new position when copied — this is the default behaviour.'
        },
        {
          id: 'ex-b-f-5',
          type: 'mcq',
          prompt: 'Your tax rate is stored once in cell B1, and you want every row\'s formula to always reference that exact same cell, even after copying the formula down. Which reference style do you need?',
          options: ['A relative reference, like B1', 'An absolute reference, like $B$1', 'A text reference, like "B1"', 'It is not possible in Excel'],
          answerIndex: 1,
          explanation: 'Dollar signs ($B$1) lock both the column and row, so the reference never shifts no matter where the formula is copied.'
        },
        {
          id: 'ex-b-f-6',
          type: 'fill-blank',
          prompt: 'You see the error ##### in a cell that contains a valid formula. What is the most likely cause — too narrow a ______?',
          correctAnswers: ['column', 'column width'],
          explanation: '##### is not a calculation error at all — it just means the column is too narrow to display the number, and widening it fixes it.'
        },
        {
          id: 'ex-b-f-7',
          type: 'mcq',
          prompt: 'What does the error #DIV/0! mean?',
          options: ['A formula referenced a deleted cell', 'A formula tried to divide by zero or by an empty cell', 'Excel does not recognise a function name', 'The file failed to save'],
          answerIndex: 1,
          explanation: '#DIV/0! specifically signals a division where the denominator was zero or blank.'
        },
        {
          id: 'ex-b-f-8',
          type: 'mcq',
          prompt: 'What does =COUNT(A1:A50) count, as opposed to =COUNTA(A1:A50)?',
          options: ['COUNT counts everything including text; COUNTA only counts numbers', 'COUNT only counts cells containing numbers; COUNTA counts any non-empty cell, numbers or text', 'They are identical functions', 'COUNT counts empty cells only'],
          answerIndex: 1,
          explanation: 'COUNT is numeric-only; COUNTA counts any cell that is not blank, regardless of whether it holds text or a number.'
        },
        {
          id: 'ex-b-f-9',
          type: 'mcq',
          prompt: 'Why is the number 15-Mar-2025 actually stored internally by Excel as a plain number like 45735?',
          options: ['It is a display bug', 'Because Excel stores every date as a count of days since 1 January 1900, which is exactly what lets you do maths with dates', 'Dates cannot be stored as numbers', 'Only when the regional settings are set to the US'],
          answerIndex: 1,
          explanation: 'Storing dates as a day-count is what allows formulas like adding 30 days to a date, or subtracting two dates to find the number of days between them.'
        },
        {
          id: 'ex-b-f-10',
          type: 'fill-blank',
          prompt: 'A2 holds 15-Jan-2025 and B2 holds 01-Feb-2025. Write a formula in C2 that calculates the number of days between them.',
          correctAnswers: ['=b2-a2', 'b2-a2'],
          explanation: 'Subtracting one date cell from another returns the number of days between them, since dates are stored as numbers.'
        },
        {
          id: 'ex-b-f-11',
          type: 'mcq',
          prompt: 'What is the purpose of Conditional Formatting?',
          options: ['To lock a cell so it cannot be edited', 'To automatically change a cell\'s colour or style when its value matches a rule you define', 'To merge two cells together', 'To sort a column automatically'],
          answerIndex: 1,
          explanation: 'Conditional Formatting highlights cells that meet a chosen condition automatically, without manual checking.'
        },
        {
          id: 'ex-b-f-12',
          type: 'mcq',
          prompt: 'What does Freeze Panes (specifically Freeze Top Row) do?',
          options: ['Prevents the file from being saved', 'Keeps the header row visible at the top of the screen while you scroll down through the rest of the data', 'Locks every cell in the workbook from editing', 'Hides the top row completely'],
          answerIndex: 1,
          explanation: 'Freeze Top Row keeps row 1 visible no matter how far down you scroll, so you never lose track of your column headers.'
        },
        {
          id: 'ex-b-f-13',
          type: 'fill-blank',
          prompt: 'Write a formula that shows "Pass" if cell B2 is 40 or greater, and "Fail" otherwise.',
          correctAnswers: ['=if(b2>=40,"pass","fail")', 'if(b2>=40,"pass","fail")', '=if(b2>=40, "pass", "fail")', 'if(b2>=40, "pass", "fail")'],
          explanation: '=IF(B2>=40, "Pass", "Fail") reads as: if the condition is true, show Pass, otherwise show Fail.'
        },
        {
          id: 'ex-b-f-14',
          type: 'mcq',
          prompt: 'In the nested formula =IF(B2>=90, "A", IF(B2>=75, "B", IF(B2>=60, "C", "Fail"))), if B2 is 82, what does the formula return?',
          options: ['"A"', '"B"', '"C"', '"Fail"'],
          answerIndex: 1,
          explanation: '82 is not >= 90, so Excel checks the next condition: 82 >= 75 is true, so it returns "B" immediately and stops checking further.'
        },
        {
          id: 'ex-b-f-15',
          type: 'mcq',
          prompt: 'What is the difference between =IF(AND(B2>=100000, C2>=1), "Bonus", "No bonus") and the same formula using OR instead of AND?',
          options: ['There is no difference', 'AND requires both conditions to be true; OR only requires at least one of them to be true', 'AND only works with numbers; OR only works with text', 'OR always returns TRUE'],
          answerIndex: 1,
          explanation: 'AND demands every condition be true simultaneously, while OR is satisfied if even one condition holds.'
        },
        {
          id: 'ex-b-f-16',
          type: 'fill-blank',
          prompt: 'Write a formula that counts how many cells in the range D2:D50 contain the text "Mumbai".',
          correctAnswers: ['=countif(d2:d50,"mumbai")', 'countif(d2:d50,"mumbai")', '=countif(d2:d50, "mumbai")', 'countif(d2:d50, "mumbai")'],
          explanation: '=COUNTIF(D2:D50, "Mumbai") counts every matching cell in that range without needing a helper IF column.'
        },
        {
          id: 'ex-b-f-17',
          type: 'mcq',
          prompt: 'What does =SUMIF(D2:D50, "Mumbai", B2:B50) calculate?',
          options: ['The total of every value in D2:D50', 'The total of the values in B2:B50, but only for the rows where D2:D50 equals "Mumbai"', 'The count of cells matching "Mumbai"', 'The average of B2:B50'],
          answerIndex: 1,
          explanation: 'SUMIF totals a separate range (B2:B50) based on a condition checked in a different range (D2:D50) — a conditional total.'
        },
        {
          id: 'ex-b-f-18',
          type: 'mcq',
          prompt: 'Before sorting a table of names and their sales figures, what is the most important precaution to take?',
          options: ['Save a backup copy of the file first', 'Select or click inside the entire table so every column moves together, rather than sorting one column in isolation', 'Convert all numbers to text first', 'Remove all formulas before sorting'],
          answerIndex: 1,
          explanation: 'Sorting just one column by itself scrambles the data, since names would no longer line up with their correct sales figures.'
        },
        {
          id: 'ex-b-f-19',
          type: 'mcq',
          prompt: 'What is the key difference between sorting and filtering?',
          options: ['They are exactly the same feature', 'Sorting rearranges every row into a new order; filtering temporarily hides non-matching rows without deleting or reordering anything', 'Filtering only works on numbers; sorting only works on text', 'Sorting requires a chart to already exist'],
          answerIndex: 1,
          explanation: 'Sorting changes row order permanently (until sorted again); filtering just hides rows that do not match, leaving the underlying data and order untouched.'
        },
        {
          id: 'ex-b-f-20',
          type: 'mcq',
          prompt: 'You need to show "sales by city" so the comparison between 5 cities is instantly obvious. Which chart type fits best?',
          options: ['A pie chart with 5 slices', 'A bar or column chart', 'A line chart', 'No chart is needed for this'],
          answerIndex: 1,
          explanation: 'Bar/column charts are the clearest way to compare values across categories like cities — the most common and accurate chart for this kind of question.'
        },
        {
          id: 'ex-b-f-21',
          type: 'mcq',
          prompt: 'Why would a pie chart be a poor choice for showing monthly revenue across 12 months?',
          options: ['Pie charts cannot display numbers', 'Pie charts show parts of a whole at one point in time, not change over time — a line chart fits a trend like this far better', 'Pie charts only work with text data', 'Excel does not support pie charts'],
          answerIndex: 1,
          explanation: 'A trend over time calls for a line chart; a pie chart is for showing how a single total splits into parts, not for tracking change.'
        },
        {
          id: 'ex-b-f-22',
          type: 'mcq',
          prompt: 'What is the relationship between a workbook and a worksheet?',
          options: ['They mean exactly the same thing', 'A workbook is the entire file, which can contain many worksheets (tabs) inside it', 'A worksheet can contain multiple workbooks', 'A worksheet is only for charts, never for data'],
          answerIndex: 1,
          explanation: 'Think of a workbook as a binder and each worksheet as one page inside it — one file, many tabs.'
        },
        {
          id: 'ex-b-f-23',
          type: 'fill-blank',
          prompt: 'On a sheet called "Summary", write a formula that pulls the value from cell B10 on a sheet called "Sales".',
          correctAnswers: ['=sales!b10', 'sales!b10'],
          explanation: 'SheetName!CellReference (like Sales!B10) is how a formula reaches across to a different worksheet in the same workbook.'
        },
        {
          id: 'ex-b-f-24',
          type: 'mcq',
          prompt: 'You need to email a colleague raw data with no formulas, no formatting, and no multiple tabs — just the plain values, in a format that opens easily in any tool. Which file format fits best?',
          options: ['.xlsx', '.csv', '.pdf', '.xls'],
          answerIndex: 1,
          explanation: 'CSV strips away formulas, formatting, and multiple sheets, keeping only plain data — exactly why it travels so easily between different tools.'
        },
        {
          id: 'ex-b-f-25',
          type: 'mcq',
          prompt: 'What does Paste Special → Values do, that a normal paste does not?',
          options: ['Pastes only the calculated result of a formula, not the formula itself', 'Pastes only colours and borders', 'Deletes the original cells after pasting', 'Converts numbers into text automatically'],
          answerIndex: 0,
          explanation: 'Paste Values "freezes" a formula\'s current result as a plain number, useful for sharing a report that should not recalculate later.'
        },
        {
          id: 'ex-b-f-26',
          type: 'fill-blank',
          prompt: 'Write a formula that joins the text in A2 and B2 with a single space in between (A2 holds "Aditi", B2 holds "Rao").',
          correctAnswers: ['=a2&" "&b2', 'a2&" "&b2', '=a2 & " " & b2', 'a2 & " " & b2'],
          explanation: 'The & symbol joins text together; the " " in between explicitly inserts a space, giving "Aditi Rao".'
        },
        {
          id: 'ex-b-f-27',
          type: 'mcq',
          prompt: 'Given A2 contains "9876543210", what does =RIGHT(A2, 4) return?',
          options: ['"9876"', '"3210"', '"9876543210"', 'An error'],
          answerIndex: 1,
          explanation: 'RIGHT(text, n) grabs the last n characters — here, the final 4 digits of the phone number.'
        },
        {
          id: 'ex-b-f-28',
          type: 'mcq',
          prompt: 'A column of city names has entries like "  Mumbai   ", "MUMBAI", and "mumbai" that should all be treated as one city. Which two functions, nested together, fix this most reliably?',
          options: ['SUM and AVERAGE', 'TRIM and PROPER (or UPPER)', 'LEFT and RIGHT', 'VLOOKUP and MATCH'],
          answerIndex: 1,
          explanation: 'TRIM removes the extra spaces and PROPER (or UPPER) fixes the inconsistent capitalisation — nesting them as PROPER(TRIM(cell)) handles both problems in one formula.'
        },
        {
          id: 'ex-b-f-29',
          type: 'mcq',
          prompt: 'What is the main benefit of adding a Data Validation dropdown list to a "Status" column?',
          options: ['It makes the spreadsheet load faster', 'It restricts what can be typed into the cell, preventing typos like "actve" before they ever happen', 'It automatically sorts the column', 'It hides the column from other users'],
          answerIndex: 1,
          explanation: 'Data Validation prevents bad data at the source by only allowing pre-approved values, rather than cleaning up typos after the fact.'
        },
        {
          id: 'ex-b-f-30',
          type: 'fill-blank',
          prompt: 'Write a formula that returns the first 2 characters of the text in cell A2.',
          correctAnswers: ['=left(a2,2)', 'left(a2,2)', '=left(a2, 2)', 'left(a2, 2)'],
          explanation: 'LEFT(text, n) grabs the first n characters from the left-hand side of the text.'
        },
        {
          id: 'ex-b-f-31',
          type: 'mcq',
          prompt: 'You type "Monday" in a cell and drag the fill handle across 6 more cells. What happens?',
          options: ['Excel repeats "Monday" in every cell', 'Excel recognises the pattern and continues with Tuesday, Wednesday, Wednesday, and so on', 'Excel shows an error, since text cannot be dragged', 'Nothing happens until you type a formula'],
          answerIndex: 1,
          explanation: 'AutoFill recognises common patterns like days of the week, months, and sequential numbers, and continues them automatically.'
        },
        {
          id: 'ex-b-f-32',
          type: 'mcq',
          prompt: 'What does the #VALUE! error typically indicate?',
          options: ['A function name was misspelled', 'A formula is trying to perform a calculation on something that is not a valid number, like adding text to a number', 'The column is too narrow', 'A cell reference points to a deleted cell'],
          answerIndex: 1,
          explanation: '#VALUE! signals that the formula encountered data of the wrong type for the operation being attempted.'
        },
        {
          id: 'ex-b-f-33',
          type: 'fill-blank',
          prompt: 'Write a formula that calculates the average of every value in the range B2:B9.',
          correctAnswers: ['=average(b2:b9)', 'average(b2:b9)'],
          explanation: '=AVERAGE(B2:B9) adds up every value in the range and divides by the count of cells, giving the mean.'
        }
      ]
    },
    intermediate: {
      title: 'Excel Intermediate Final Assessment',
      intro: 'Test your knowledge across all 5 Excel intermediate modules — VLOOKUP and INDEX/MATCH, Pivot Tables, Conditional Formatting, Named Ranges and Data Validation, and Power Query. Includes multiple choice and fill-in-the-blank formula questions.',
      questions: [
        {
          id: 'ex-i-f-1',
          type: 'mcq',
          prompt: 'In =VLOOKUP(C2, Products!A:C, 2, FALSE), what does the FALSE argument do?',
          options: ['Tells Excel to ignore errors', 'Forces an exact match instead of an approximate one — without it, VLOOKUP can silently return a wrong answer', 'Searches from the bottom of the table upward', 'Hides the result if it is blank'],
          answerIndex: 1,
          explanation: 'Without FALSE, VLOOKUP defaults to an approximate match and can return a plausible-looking but wrong answer instead of an error.'
        },
        {
          id: 'ex-i-f-2',
          type: 'mcq',
          prompt: 'What is the key limitation of VLOOKUP that INDEX/MATCH does not have?',
          options: ['VLOOKUP cannot be used with numbers', 'VLOOKUP can only search the first column of its range and return values to the right of it — it cannot look left', 'VLOOKUP only works on one worksheet', 'VLOOKUP is always slower to calculate'],
          answerIndex: 1,
          explanation: 'VLOOKUP always searches the leftmost column of its given range. INDEX/MATCH has no such directional restriction.'
        },
        {
          id: 'ex-i-f-3',
          type: 'fill-blank',
          prompt: 'In =INDEX(A:A, MATCH(D2, D:D, 0)), what does MATCH actually return — a value, or a ______?',
          correctAnswers: ['position', 'row position', 'row number'],
          explanation: 'MATCH returns a position (a row number), not a value — INDEX then uses that position to fetch the actual value from a different range.'
        },
        {
          id: 'ex-i-f-4',
          type: 'mcq',
          prompt: 'Why is a VLOOKUP column number considered fragile compared to INDEX/MATCH?',
          options: ['It always returns text instead of numbers', 'If someone inserts a new column into the searched table, every column number shifts and the formula can silently pull the wrong column', 'It cannot be copied to other cells', 'It only works with numeric IDs, never text'],
          answerIndex: 1,
          explanation: 'VLOOKUP relies on a hardcoded column count; INDEX/MATCH has no such number, so it keeps working correctly even after columns are inserted or reordered.'
        },
        {
          id: 'ex-i-f-5',
          type: 'mcq',
          prompt: 'You get a #N/A error from a lookup formula. What is the most likely cause?',
          options: ['Your computer needs a restart', 'The value you searched for genuinely does not exist in the lookup range — often a typo or extra space', 'You used too many decimal places', 'The workbook file is too large'],
          answerIndex: 1,
          explanation: '#N/A specifically means "not found" — the lookup value is genuinely absent from the range you searched.'
        },
        {
          id: 'ex-i-f-6',
          type: 'mcq',
          prompt: 'What is the main advantage of XLOOKUP over both VLOOKUP and INDEX/MATCH?',
          options: ['It is the only lookup function that works with numbers', 'It combines the simplicity of VLOOKUP with the any-direction flexibility of INDEX/MATCH, in one function', 'It does not require a lookup value at all', 'It only works on the active sheet'],
          answerIndex: 1,
          explanation: 'XLOOKUP can look in any direction like INDEX/MATCH, but with a simpler, single-function syntax closer to VLOOKUP.'
        },
        {
          id: 'ex-i-f-7',
          type: 'fill-blank',
          prompt: 'Write a formula that looks up the value in cell D2 inside the range D:D, and returns the matching value from column A — using INDEX and MATCH together.',
          correctAnswers: ['=index(a:a,match(d2,d:d,0))', 'index(a:a,match(d2,d:d,0))'],
          explanation: 'MATCH finds the row position of D2 within D:D, and INDEX returns whatever sits at that same row position within column A.'
        },
        {
          id: 'ex-i-f-8',
          type: 'mcq',
          prompt: 'What are the four boxes you drag fields into when building a Pivot Table?',
          options: ['Rows, Columns, Values, Filters', 'Header, Footer, Body, Sidebar', 'Sum, Count, Average, Max', 'Sheet1, Sheet2, Sheet3, Sheet4'],
          answerIndex: 0,
          explanation: 'Rows and Columns control grouping, Values controls the number being summarised, and Filters narrows the whole table to a category.'
        },
        {
          id: 'ex-i-f-9',
          type: 'mcq',
          prompt: 'You drag a numeric column like Revenue into the Values box of a Pivot Table. What does Excel do by default?',
          options: ['Counts the number of entries', 'Sums all the values', 'Averages all the values automatically', 'Leaves the field blank until you configure it'],
          answerIndex: 1,
          explanation: 'Sum is the default aggregation Excel applies to numeric fields dropped into Values, changeable via Value Field Settings.'
        },
        {
          id: 'ex-i-f-10',
          type: 'mcq',
          prompt: 'What happens if you drag a text column like Customer Name into the Values box of a Pivot Table?',
          options: ['Excel throws an error and refuses', 'Excel automatically switches to Count, since text cannot be summed', 'Excel converts the text into numbers', 'The pivot table disappears'],
          answerIndex: 1,
          explanation: 'Text values cannot be summed, so Excel defaults to counting how many entries exist instead.'
        },
        {
          id: 'ex-i-f-11',
          type: 'mcq',
          prompt: 'You added 200 new rows to the data a Pivot Table is built on, but it still shows the old numbers. What should you do?',
          options: ['Delete the pivot table and rebuild it from scratch', 'Right-click the pivot and choose Refresh (or press Alt+F5)', 'Wait — it updates automatically within an hour', 'Reinstall Excel'],
          answerIndex: 1,
          explanation: 'A Pivot Table is a snapshot, not a live formula — it only updates when explicitly refreshed.'
        },
        {
          id: 'ex-i-f-12',
          type: 'mcq',
          prompt: 'What does a Slicer add to a Pivot Table that a normal dropdown filter does not?',
          options: ['It deletes filtered-out rows permanently', 'A clickable, visual filtering interface — popular for building simple interactive dashboards', 'A way to sort the data alphabetically', 'It converts the pivot into a chart automatically'],
          answerIndex: 1,
          explanation: 'Slicers give Pivot Tables a clickable, visual filtering experience, commonly used in dashboards instead of the standard dropdown filter.'
        },
        {
          id: 'ex-i-f-13',
          type: 'mcq',
          prompt: 'What is the benefit of a Pivot Chart over a regular Excel chart built from raw data?',
          options: ['Pivot Charts cannot be customised at all', 'A Pivot Chart updates automatically whenever its underlying Pivot Table is refreshed, without manual rebuilding', 'Pivot Charts only display pie charts', 'They require an internet connection'],
          answerIndex: 1,
          explanation: 'Because a Pivot Chart is tied to a Pivot Table, refreshing the pivot keeps the chart in sync automatically.'
        },
        {
          id: 'ex-i-f-14',
          type: 'mcq',
          prompt: 'What is the main purpose of Conditional Formatting?',
          options: ['To lock a cell from being edited', "To automatically change a cell's appearance (colour, icon, bar) when it meets a rule you define", 'To merge multiple cells together', 'To validate data before it is typed in'],
          answerIndex: 1,
          explanation: 'Conditional Formatting changes visual appearance based on rules, making important values jump out without manual scanning.'
        },
        {
          id: 'ex-i-f-15',
          type: 'fill-blank',
          prompt: 'You want to highlight an entire row red whenever the Status column (F) says "Cancelled," with the whole data range selected first. Write the formula-based rule, locking only the column.',
          correctAnswers: ['=$f2="cancelled"', '$f2="cancelled"'],
          explanation: 'Locking only the column ($F2) keeps every cell in a row checking column F, while letting the row number adjust per row.'
        },
        {
          id: 'ex-i-f-16',
          type: 'mcq',
          prompt: 'What do Data Bars do as a Conditional Formatting option?',
          options: ['Add a dropdown list to a cell', 'Draw a small bar inside each cell, proportional to its value, for quick visual comparison of magnitudes', 'Lock the column width', 'Convert numbers into percentages automatically'],
          answerIndex: 1,
          explanation: 'Data Bars are an in-cell visual bar — longer bars represent larger values, ideal for quick comparisons across a column.'
        },
        {
          id: 'ex-i-f-17',
          type: 'mcq',
          prompt: 'A cell is not formatting the way you expect, even though your rule looks correct. Where should you check first?',
          options: ['The Name Manager', 'Conditional Formatting → Manage Rules, to check for a conflicting rule positioned above yours', 'The Page Layout tab', 'AutoSave settings'],
          answerIndex: 1,
          explanation: 'Multiple rules can apply to the same cell, evaluated top to bottom — Manage Rules shows the order and reveals any conflicting rule.'
        },
        {
          id: 'ex-i-f-18',
          type: 'mcq',
          prompt: 'What does the formula rule =A2<TODAY() achieve when applied to a Due Date column?',
          options: ['It deletes any past due date automatically', 'It highlights any date that has already passed today\'s date', 'It blocks future dates from ever being entered', 'It sorts the dates chronologically'],
          answerIndex: 1,
          explanation: 'TODAY() returns the current date, so the rule is TRUE — and applies formatting — for any due date earlier than today, i.e., overdue.'
        },
        {
          id: 'ex-i-f-19',
          type: 'mcq',
          prompt: 'What is the main benefit of using a Named Range like "TaxRate" instead of $F$1 in a formula?',
          options: ['Named ranges calculate faster than cell references', 'It makes formulas easier to read, and the name keeps working correctly even if the underlying cell is moved elsewhere', 'It lets one cell store multiple values at once', 'It removes the need for the equals sign in formulas'],
          answerIndex: 1,
          explanation: 'A named range behaves like an absolute reference automatically, and stays valid even if you relocate the cell it points to.'
        },
        {
          id: 'ex-i-f-20',
          type: 'mcq',
          prompt: 'Where can you see and edit every named range defined in a workbook?',
          options: ['Data → Sort', 'Formulas → Name Manager', 'View → Freeze Panes', 'Insert → Names'],
          answerIndex: 1,
          explanation: 'Name Manager lists all defined names, what they point to, and lets you edit or delete them.'
        },
        {
          id: 'ex-i-f-21',
          type: 'mcq',
          prompt: 'What does a Data Validation dropdown list (Allow: List) primarily prevent?',
          options: ['Slow formula calculation', 'Typos and inconsistent entries, by only allowing pre-approved values to be typed into a cell', 'Accidental file deletion', 'A formula referencing the wrong worksheet'],
          answerIndex: 1,
          explanation: 'A dropdown list restricts input to exact, pre-approved values, eliminating problems like "Sales" vs "sales" vs "SALES" meaning the same thing.'
        },
        {
          id: 'ex-i-f-22',
          type: 'fill-blank',
          prompt: 'A custom Data Validation rule uses the formula =AND(B2>0, B2<=C2). What two conditions must both be true for an entry in B2 to be accepted — it must be greater than 0, and it must not ______ the value in C2?',
          correctAnswers: ['exceed', 'be greater than', 'go above'],
          explanation: 'AND requires both conditions true — a positive quantity (B2>0) that also does not exceed some limit stored in C2, such as available stock.'
        },
        {
          id: 'ex-i-f-23',
          type: 'mcq',
          prompt: 'Does Data Validation retroactively flag data that was already typed into the cells before the rule was created?',
          options: ['Yes, it instantly highlights every existing invalid entry', 'No — it only stops new entries going forward, not data already present', 'It deletes existing invalid entries automatically', 'It converts existing invalid entries to the nearest valid option automatically'],
          answerIndex: 1,
          explanation: 'Data Validation rules apply going forward from when they are created — always set them up before a sheet is shared for filling in, not after.'
        },
        {
          id: 'ex-i-f-24',
          type: 'mcq',
          prompt: 'On the Data Validation dialog, what is the difference between the "Input Message" tab and the "Error Alert" tab?',
          options: ['They do exactly the same thing', 'Input Message shows a helpful tooltip when the cell is selected; Error Alert controls what happens if an invalid value is entered', 'Input Message blocks all entries; Error Alert allows all entries', 'Input Message is for numbers only; Error Alert is for text only'],
          answerIndex: 1,
          explanation: 'Input Message guides the user before they type; Error Alert (Stop, Warning, or Information) reacts after an invalid entry is attempted.'
        },
        {
          id: 'ex-i-f-25',
          type: 'mcq',
          prompt: 'What is the main advantage of cleaning data with Power Query instead of one-off manual formulas?',
          options: ['It is the only way to ever remove duplicate rows', 'The cleanup steps are recorded and can be replayed automatically on future versions of the same messy export via Refresh', 'It automatically creates charts for you', 'It permanently changes the original source file'],
          answerIndex: 1,
          explanation: 'Power Query records a repeatable recipe of steps, so a recurring messy export can be re-cleaned with one click instead of redoing manual work.'
        },
        {
          id: 'ex-i-f-26',
          type: 'mcq',
          prompt: 'What is the "Applied Steps" panel in the Power Query Editor?',
          options: ['A list of every formula in the workbook', 'An ordered, named list of every transformation you have performed, which can be clicked through, edited, or reordered', 'A history of files you have opened in Excel', 'A list of all currently open Excel windows'],
          answerIndex: 1,
          explanation: 'Applied Steps records each transformation (like "Removed Columns" or "Split Column") in order, and re-runs all of them on Refresh.'
        },
        {
          id: 'ex-i-f-27',
          type: 'mcq',
          prompt: 'Does working inside the Power Query Editor change your original source file?',
          options: ['Yes, every change is saved back to the source file immediately', 'No — it is a safe sandbox; the original source file stays untouched until you choose Close & Load', 'Only if you forget to undo a step', 'Only for CSV files, never for Excel workbooks'],
          answerIndex: 1,
          explanation: 'Power Query builds a separate recipe of transformations on a copy of the data; the source file itself is never modified.'
        },
        {
          id: 'ex-i-f-28',
          type: 'fill-blank',
          prompt: 'In Power Query, which transformation would you use to turn a single "Full Name" column into separate First Name and Last Name columns?',
          correctAnswers: ['split column', 'split column by delimiter'],
          explanation: 'Split Column → By Delimiter (using a space as the delimiter) divides one text column into multiple columns.'
        },
        {
          id: 'ex-i-f-29',
          type: 'mcq',
          prompt: 'What does "Merge Queries" in Power Query conceptually correspond to?',
          options: ['A VLOOKUP formula, but reusable across refreshes', 'A SQL-style JOIN, combining two tables based on a matching column', 'Combining two entire Excel files into one workbook', 'Deleting duplicate columns from one table'],
          answerIndex: 1,
          explanation: 'Merge Queries combines two tables on a matching column, similar to a SQL JOIN, with "Left Outer" matching a LEFT JOIN.'
        },
        {
          id: 'ex-i-f-30',
          type: 'mcq',
          prompt: 'You replace the source file with a new export and click Refresh All. What is most likely to go wrong if a column was renamed in the new file?',
          options: ['Nothing — Power Query always adapts automatically to any change', 'A step that depends on that exact column name may fail or pull the wrong column, so you should spot-check the result after refreshing', 'Excel will permanently delete the new file', 'The workbook will become corrupted'],
          answerIndex: 1,
          explanation: 'Refresh assumes the new file has the same structure as the one the steps were built against — a renamed or reordered column can silently break a step.'
        },
        {
          id: 'ex-i-f-31',
          type: 'mcq',
          prompt: 'Which Power Query transformation would you use to remove accidental repeated rows from an export, such as the same Order ID appearing twice?',
          options: ['Change Type', 'Remove Duplicates', 'Trim', 'Filter Rows'],
          answerIndex: 1,
          explanation: 'Remove Duplicates eliminates rows that repeat based on the column(s) you select, such as Order ID.'
        },
        {
          id: 'ex-i-f-32',
          type: 'mcq',
          prompt: 'A date column was imported as plain text instead of a real date, breaking date-based calculations. Which Power Query action fixes this?',
          options: ['Remove Columns', 'Change Type, to convert the column to a proper Date', 'Merge Queries', 'Filter Rows'],
          answerIndex: 1,
          explanation: 'Clicking the data-type icon in a column header (Change Type) converts text that looks like a date into an actual Date type Excel can calculate with.'
        },
        {
          id: 'ex-i-f-33',
          type: 'mcq',
          prompt: 'Across this whole track, what is the common theme connecting VLOOKUP/INDEX-MATCH, Pivot Tables, and Power Query Merge?',
          options: ['They all require VBA macros to work', 'All three are ways of bringing related data together — from a row-by-row lookup, to a full table summary, to a repeatable table-to-table join', 'They only work with numeric data', 'They are mutually exclusive — using one prevents using the others'],
          answerIndex: 1,
          explanation: 'Lookups, Pivot Tables, and Power Query merges all solve variations of the same underlying problem: combining and summarising data that lives in more than one place.'
        }
      ]
    },
    advanced: {
      title: 'Excel Advanced Final Assessment',
      intro: 'Test your knowledge across all 5 Excel advanced modules — Power Pivot and the Data Model, DAX measures, advanced array formulas, Macros and VBA, and building interactive dashboards. Includes multiple choice and fill-in-the-blank questions.',
      questions: [
        {
          id: 'ex-a-f-1',
          type: 'mcq',
          prompt: 'Why does Power Pivot use table relationships instead of VLOOKUP at large scale, like 200,000 rows?',
          options: ['VLOOKUP is more accurate than relationships', 'VLOOKUP formulas copied down hundreds of thousands of rows are slow and bloat the file; relationships connect tables structurally with no formulas copied at all', 'Relationships only work with text columns', 'VLOOKUP cannot be used inside any Pivot Table'],
          answerIndex: 1,
          explanation: 'A relationship connects tables the way a database does, avoiding the performance cost and fragility of millions of repeated lookup formulas.'
        },
        {
          id: 'ex-a-f-2',
          type: 'mcq',
          prompt: 'In a Sales / Products / Customers Data Model, what kind of relationship exists between Sales and Products?',
          options: ['Many-to-many', 'One-to-many, with Sales as the "many" side', 'No relationship is needed between them', 'One-to-one'],
          answerIndex: 1,
          explanation: 'Many sales rows can reference the same single product, making Sales the "many" side and Products the "one" side.'
        },
        {
          id: 'ex-a-f-3',
          type: 'mcq',
          prompt: 'What requirement must the "one" side of a relationship (e.g., Products[Product ID]) satisfy before Excel will create it?',
          options: ['It must be sorted alphabetically', 'It must contain no duplicate values', 'It must be the first column in the table', 'It must be formatted as currency'],
          answerIndex: 1,
          explanation: 'Excel refuses to build a relationship if the "one" side has duplicate key values, since that would break the lookup logic.'
        },
        {
          id: 'ex-a-f-4',
          type: 'fill-blank',
          prompt: 'The pattern of one central transactional table (like Sales) connected to several small lookup tables (like Products and Customers) is commonly called a ______ schema.',
          correctAnswers: ['star'],
          explanation: 'A star schema has one "facts" table surrounded by smaller "dimension" tables it relates to — the standard shape for a Data Model.'
        },
        {
          id: 'ex-a-f-5',
          type: 'mcq',
          prompt: 'After building relationships in the Data Model, what can a single Pivot Table now do that it could not do before?',
          options: ['Automatically email itself on a schedule', 'Combine fields from multiple related tables directly (like Products[Category] alongside Sales[Quantity]), with no VLOOKUP formulas needed', 'Delete duplicate rows in the source data', 'Convert every number to text'],
          answerIndex: 1,
          explanation: 'The Data Model lets a Pivot Table pull fields from different related tables at once, using the relationships instead of helper lookup columns.'
        },
        {
          id: 'ex-a-f-6',
          type: 'mcq',
          prompt: 'What does RELATED do inside a DAX measure like SUMX(Sales, Sales[Quantity] * RELATED(Products[Price]))?',
          options: ['Sorts the Sales table by price', 'Reaches across an existing relationship to fetch a matching value from a related table, for the current row', 'Deletes rows with no matching product', 'Converts text into numbers'],
          answerIndex: 1,
          explanation: 'RELATED follows the relationship from the "many" side to fetch the corresponding value on the "one" side, row by row.'
        },
        {
          id: 'ex-a-f-7',
          type: 'mcq',
          prompt: 'What is the key difference between a DAX measure and a calculated column?',
          options: ['They are exactly the same thing', 'A calculated column stores one static value per row; a measure recalculates fresh every time, based on whatever filter context a Pivot Table currently applies', 'Measures can only ever return text', 'Calculated columns are always faster, with no tradeoffs'],
          answerIndex: 1,
          explanation: 'A measure is dynamic and filter-aware, recomputing for whatever Rows/Columns/Filters context it is placed in — a calculated column is fixed per row.'
        },
        {
          id: 'ex-a-f-8',
          type: 'mcq',
          prompt: 'What does CALCULATE([Total Revenue], Customers[City] = "Mumbai") do?',
          options: ['Permanently deletes all non-Mumbai rows', 'Recomputes the Total Revenue measure, but forced to only consider rows where the customer city is Mumbai', 'Renames the Total Revenue measure to "Mumbai"', 'Creates a brand new table called Mumbai'],
          answerIndex: 1,
          explanation: 'CALCULATE takes an existing measure and recomputes it under a modified filter context — here, restricted to Mumbai.'
        },
        {
          id: 'ex-a-f-9',
          type: 'mcq',
          prompt: 'Why should DIVIDE(a, b) be used instead of writing a/b directly in a DAX measure?',
          options: ['DIVIDE is simply faster to type', 'DIVIDE returns blank instead of an error when the denominator is zero, which a plain a/b would throw as an error', 'a/b is not valid DAX syntax at all', 'DIVIDE always rounds the result to two decimals'],
          answerIndex: 1,
          explanation: 'DIVIDE gracefully handles a zero denominator (like a month with no sales) by returning blank instead of breaking the calculation.'
        },
        {
          id: 'ex-a-f-10',
          type: 'mcq',
          prompt: 'What does TOTALYTD([Total Revenue], Sales[Date]) calculate when used in a Pivot Table broken down by month?',
          options: ['The revenue for that single month only', 'The running cumulative total from the start of the year through the end of that month', 'The average monthly revenue across the whole year', "Next year's projected revenue"],
          answerIndex: 1,
          explanation: 'TOTALYTD is a time-intelligence function that accumulates a measure from the start of the year up to the current filter context.'
        },
        {
          id: 'ex-a-f-11',
          type: 'fill-blank',
          prompt: 'Which DAX function would you use to count how many distinct customers appear in the Sales table, rather than counting every sales row?',
          correctAnswers: ['distinctcount'],
          explanation: 'DISTINCTCOUNT(Sales[Customer ID]) counts unique customer IDs, unlike COUNTROWS which counts every transaction row regardless of repeats.'
        },
        {
          id: 'ex-a-f-12',
          type: 'mcq',
          prompt: 'What does =SUMPRODUCT((D2:D30="Mumbai") * B2:B30 * C2:C30) calculate?',
          options: ['The total of columns B and C for every row, regardless of city', 'The sum of B×C for only the rows where column D equals "Mumbai," since the TRUE/FALSE condition acts as 1/0 in the multiplication', 'A count of how many rows say "Mumbai"', 'An error, because SUMPRODUCT cannot use conditions'],
          answerIndex: 1,
          explanation: 'The (D2:D30="Mumbai") condition produces an array of 1s and 0s, zeroing out the contribution of any row that is not Mumbai before summing the products.'
        },
        {
          id: 'ex-a-f-13',
          type: 'mcq',
          prompt: 'What do the curly braces {} around a legacy array formula in the formula bar mean?',
          options: ['You should type them yourself when writing the formula', 'Excel added them automatically to show the formula was confirmed with Ctrl+Shift+Enter as an array calculation', 'The formula contains an error', 'The formula is locked from editing'],
          answerIndex: 1,
          explanation: 'Curly braces are Excel\'s own indicator that a formula was entered as a legacy array formula — you never type them manually.'
        },
        {
          id: 'ex-a-f-14',
          type: 'mcq',
          prompt: 'What makes a Dynamic Array formula like =UNIQUE(D2:D30) different from a regular formula?',
          options: ['It can only be used once per worksheet', 'It automatically "spills" its results into as many cells as needed, with no Ctrl+Shift+Enter or manual range sizing required', 'It only works with numbers, never text', 'It requires Power Pivot to be enabled first'],
          answerIndex: 1,
          explanation: 'Dynamic Arrays in modern Excel spill multiple results automatically into adjacent cells, unlike older array formulas or single-cell formulas.'
        },
        {
          id: 'ex-a-f-15',
          type: 'mcq',
          prompt: 'What does the #SPILL! error mean?',
          options: ['The formula contains a typo', 'A dynamic array formula needs to spill results into cells that already contain other data', 'The file has become corrupted', 'A circular reference was detected'],
          answerIndex: 1,
          explanation: '#SPILL! appears when something is blocking the cells a dynamic array formula needs to expand into — clearing those cells resolves it.'
        },
        {
          id: 'ex-a-f-16',
          type: 'fill-blank',
          prompt: 'Write the dynamic array formula that produces an alphabetically sorted list of every distinct value in the range D2:D30.',
          correctAnswers: ['=sort(unique(d2:d30))', 'sort(unique(d2:d30))'],
          explanation: 'UNIQUE removes duplicates and SORT then alphabetizes the result, with both functions spilling the combined output automatically.'
        },
        {
          id: 'ex-a-f-17',
          type: 'mcq',
          prompt: 'What file format must you save a workbook as to keep a macro inside it?',
          options: ['.xlsx, the standard format', '.xlsm, the Macro-Enabled Workbook format', '.csv', '.pdf'],
          answerIndex: 1,
          explanation: 'Saving as a regular .xlsx silently strips out any macros with no warning — .xlsm is required to preserve them.'
        },
        {
          id: 'ex-a-f-18',
          type: 'mcq',
          prompt: 'In VBA, what does Cells(Rows.Count, "B").End(xlUp).Row typically find?',
          options: ['The first empty row at the very top of the sheet', 'The last row that actually contains data in column B, regardless of how much data exists', 'The total number of columns on the sheet', 'A random row somewhere in column B'],
          answerIndex: 1,
          explanation: 'This is the standard VBA idiom for finding the last used row in a column, making a macro work correctly no matter how the data grows or shrinks.'
        },
        {
          id: 'ex-a-f-19',
          type: 'mcq',
          prompt: 'What does a For i = 2 To lastRow ... Next i loop do in VBA?',
          options: ['Runs the code inside it exactly once', 'Repeats the code inside it once for every row from row 2 through lastRow, with i taking each row number in turn', 'Deletes rows 2 through lastRow', 'Pauses the macro for "lastRow" seconds'],
          answerIndex: 1,
          explanation: 'This is a counting loop — i increments from 2 up to lastRow, running the enclosed code once per value, which is how macros process every row of a table.'
        },
        {
          id: 'ex-a-f-20',
          type: 'mcq',
          prompt: 'Why does Excel show a security warning bar when opening a .xlsm file received from someone else?',
          options: ['Because .xlsm files are always corrupted', 'Because macros can run arbitrary actions on your computer and are a real, common way malware spreads through email attachments', 'Because the file is too large to open safely', 'Because macros always contain viruses by definition'],
          answerIndex: 1,
          explanation: 'Macros have broad capability on your system, so Excel disables them by default on files from outside sources until you explicitly trust and enable them.'
        },
        {
          id: 'ex-a-f-21',
          type: 'mcq',
          prompt: 'What is the main limitation of recording a macro rather than hand-writing VBA code?',
          options: ['Recorded macros run slower than typed code', 'Recording only captures a linear sequence of actions — it cannot capture loops or conditional logic like "for every row, check if X"', 'Recorded macros cannot be saved at all', 'Recording requires an internet connection'],
          answerIndex: 1,
          explanation: 'The macro recorder can only play back the exact clicks you made — any logic involving loops or conditions needs to be hand-written in the VBA editor.'
        },
        {
          id: 'ex-a-f-22',
          type: 'fill-blank',
          prompt: 'In VBA, which statement displays a popup confirming a macro has finished running, like MsgBox "Done!"?',
          correctAnswers: ['msgbox', 'msgbox "done!"'],
          explanation: 'MsgBox shows a small popup dialog with whatever text you pass it, commonly used to confirm a macro has completed.'
        },
        {
          id: 'ex-a-f-23',
          type: 'mcq',
          prompt: 'What should you decide before opening Excel and building dashboard charts?',
          options: ['Which font to use throughout the workbook', 'Who the dashboard is for, and the 3-5 specific questions it needs to answer', 'How many worksheets the workbook should have', 'The maximum file size allowed'],
          answerIndex: 1,
          explanation: 'Designing around the audience\'s actual questions first prevents a dashboard that looks busy but does not answer anything useful.'
        },
        {
          id: 'ex-a-f-24',
          type: 'mcq',
          prompt: 'What does connecting a Slicer to multiple Pivot Tables via "Report Connections" achieve?',
          options: ['It merges the Pivot Tables into a single table', 'One click on the slicer filters every connected Pivot Table and Pivot Chart simultaneously', 'It permanently deletes the unconnected Pivot Tables', 'It hides the slicer from view entirely'],
          answerIndex: 1,
          explanation: 'Report Connections let a single slicer control multiple visuals at once, which is the foundation of an interactive, click-to-filter dashboard.'
        },
        {
          id: 'ex-a-f-25',
          type: 'mcq',
          prompt: 'What does GETPIVOTDATA let you do?',
          options: ['Delete a Pivot Table entirely', 'Pull one specific number out of an existing Pivot Table into a standalone cell, useful for building a styled KPI card', 'Convert a Pivot Table into a regular flat range', 'Connect to an external database'],
          answerIndex: 1,
          explanation: 'GETPIVOTDATA extracts a single value from a Pivot Table so it can be displayed independently, like in a large-font KPI card.'
        },
        {
          id: 'ex-a-f-26',
          type: 'mcq',
          prompt: 'What does Data → Refresh All update in one click?',
          options: ['Only the currently active cell', 'Every Pivot Table, Pivot Chart, Power Query step, and Data Model calculation in the entire workbook', 'Only charts, never Pivot Tables', 'Only cell formatting, not the underlying data'],
          answerIndex: 1,
          explanation: 'Refresh All is the single action a dashboard\'s end user needs, updating every data-dependent element across the whole workbook at once.'
        },
        {
          id: 'ex-a-f-27',
          type: 'mcq',
          prompt: 'Why hide gridlines and move underlying Pivot Tables to a separate sheet on a finished dashboard?',
          options: ['It is technically required for slicers to function at all', 'It makes the dashboard look intentional and focused on the visuals, rather than exposing raw working data', 'It speeds up Excel\'s calculation engine', 'It is required before saving as .xlsm'],
          answerIndex: 1,
          explanation: 'A clean, deliberate layout — without visible raw pivot grids or gridlines — is read faster and trusted more by the people actually using the dashboard.'
        },
        {
          id: 'ex-a-f-28',
          type: 'mcq',
          prompt: 'A measure shows a different total depending on whether a Pivot Table is sliced by City, by Month, or by nothing at all. What DAX concept explains this?',
          options: ['The measure is broken and needs fixing', 'Measures are filter-context aware — they recalculate automatically based on whatever Rows/Columns/Filters the report currently applies', 'DAX measures are random by design', 'This only happens with corrupted Data Models'],
          answerIndex: 1,
          explanation: 'This dynamic, context-sensitive recalculation is the entire point of a measure, as opposed to a static calculated column.'
        },
        {
          id: 'ex-a-f-29',
          type: 'mcq',
          prompt: 'Why is SUMPRODUCT a useful alternative to SUMIFS for a calculation like "total revenue for Mumbai" when revenue itself is Quantity × Price?',
          options: ['SUMPRODUCT cannot use any conditions at all', 'SUMIFS can only sum one existing column, while SUMPRODUCT can combine a condition with an inline multiplication (quantity × price) in a single formula', 'SUMPRODUCT is only for text data', 'They produce different totals for the same data'],
          answerIndex: 1,
          explanation: 'SUMIFS sums an existing column under a condition; SUMPRODUCT can additionally multiply two ranges together inline, which SUMIFS alone cannot do.'
        },
        {
          id: 'ex-a-f-30',
          type: 'mcq',
          prompt: 'You assign a macro to a button on a worksheet. What is required for that macro to still be available the next time the file is opened?',
          options: ['Nothing extra — buttons always retain their macro forever', 'The workbook must be saved as a .xlsm (Macro-Enabled Workbook), since a .xlsx save would silently delete the macro', 'The button must be re-assigned every time the file opens', 'Macros assigned to buttons cannot be saved under any format'],
          answerIndex: 1,
          explanation: 'The macro itself only survives if the file is saved in a macro-enabled format — the button assignment alone does not preserve it in a regular .xlsx.'
        },
        {
          id: 'ex-a-f-31',
          type: 'mcq',
          prompt: 'In a Sales/Products/Customers Data Model, why can a DAX measure use RELATED(Products[Price]) but not easily do the reverse (pulling a Sales value from inside a measure defined in the Products table)?',
          options: ['RELATED never works in either direction', 'RELATED follows a relationship from the "many" side to the "one" side; going the opposite direction (one to many) needs a different function, like RELATEDTABLE', 'Products and Sales are not actually related', 'DAX cannot reference more than one table at all'],
          answerIndex: 1,
          explanation: 'RELATED specifically works many-to-one. Fetching values in the opposite direction (one-to-many) requires a different approach, such as RELATEDTABLE.'
        },
        {
          id: 'ex-a-f-32',
          type: 'mcq',
          prompt: 'What is the practical benefit of building 3-4 KPI cards (like Total Revenue, Number of Sales, Average Order Value) at the top of a dashboard?',
          options: ['They replace the need for any Pivot Tables or charts', 'They give an instant, at-a-glance read of the most important numbers before a viewer digs into any chart', 'They are required for slicers to function', 'They automatically refresh faster than charts do'],
          answerIndex: 1,
          explanation: 'KPI cards summarise the headline numbers immediately, letting a viewer get the big picture in seconds before exploring the detailed charts.'
        },
        {
          id: 'ex-a-f-33',
          type: 'mcq',
          prompt: 'Across this whole track, what is the common thread connecting the Data Model, DAX measures, dynamic arrays, and VBA macros?',
          options: ['They all require an internet connection to function', 'Each one removes a different kind of repetitive manual work — repeated lookups, repeated calculations, repeated helper columns, and repeated clicks — replacing it with something that recalculates or reruns automatically', 'They can only be used one at a time, never combined', 'They are all exclusive to Power BI, not Excel'],
          answerIndex: 1,
          explanation: 'Every advanced Excel tool in this track exists to eliminate a specific category of repeated manual effort, which is exactly why they combine so naturally into one interactive dashboard.'
        }
      ]
    }
  },
  powerbi: {
    beginner: {
      title: 'Power BI Beginner Final Assessment',
      intro: 'Test your knowledge across all 7 Power BI beginner modules — what Power BI is, loading data, cleaning it with Power Query, building charts, slicers and filters, and publishing to the Service. Built around a running real-world scenario: a small café chain, Brew & Bite.',
      questions: [
        {
          id: 'pb-b-f-1',
          type: 'mcq',
          prompt: 'What is the core difference between Excel and Power BI?',
          options: ['They are identical tools with different logos', 'Excel is primarily for storing and calculating data; Power BI is primarily for building interactive, shareable visual dashboards from that data', 'Power BI cannot connect to Excel files', 'Excel is newer than Power BI'],
          answerIndex: 1,
          explanation: 'Power BI is purpose-built for connecting multiple sources, modelling relationships, and serving interactive dashboards — a different job from Excel\'s calculation-first design.'
        },
        {
          id: 'pb-b-f-2',
          type: 'mcq',
          prompt: 'Which of the three Power BI pieces is where you actually author and build a report?',
          options: ['Power BI Mobile', 'Power BI Service', 'Power BI Desktop', 'Power BI Gateway'],
          answerIndex: 2,
          explanation: 'Power BI Desktop is the free installable application where the modelling and visual-building work happens.'
        },
        {
          id: 'pb-b-f-3',
          type: 'mcq',
          prompt: 'A hospital wants one screen showing bed occupancy, ventilator availability, and ambulance status, updating automatically. Which Power BI workflow step turns raw hospital records into that one screen?',
          options: ['Get Data only, nothing else is needed', 'The full pipeline: Get Data, clean and shape it, model the relationships, then visualise it on a canvas', 'Publishing alone, without building any visuals first', 'Renaming the source file'],
          answerIndex: 1,
          explanation: 'The standard Power BI workflow — get, clean, model, visualise — is what turns scattered raw records into one coherent live screen.'
        },
        {
          id: 'pb-b-f-4',
          type: 'fill-blank',
          prompt: 'Power BI Desktop is only natively available for which operating system?',
          correctAnswers: ['windows'],
          explanation: 'Power BI Desktop is Windows-only; Mac users need a virtual machine or similar workaround to run it.'
        },
        {
          id: 'pb-b-f-5',
          type: 'mcq',
          prompt: 'What is the purpose of the Power BI Service (app.powerbi.com)?',
          options: ['It is where you write DAX formulas exclusively', 'It is the cloud platform where finished reports are published so others can view and interact with them in a browser', 'It is a customer support contact form', 'It only works for Excel files, not Power BI reports'],
          answerIndex: 1,
          explanation: 'The Service is where a report becomes accessible to people who do not have Power BI Desktop installed.'
        },
        {
          id: 'pb-b-f-6',
          type: 'mcq',
          prompt: 'Brew & Bite\'s owner hands you an Excel file with 3 months of sales data. What is the very first action you take in Power BI Desktop?',
          options: ['Publish to the Service immediately', 'Get Data → Excel Workbook, to connect to and load the file', 'Write a DAX measure', 'Add a Slicer to a blank canvas'],
          answerIndex: 1,
          explanation: 'Nothing can be visualised or modelled until the data has actually been connected to and loaded via Get Data.'
        },
        {
          id: 'pb-b-f-7',
          type: 'mcq',
          prompt: 'What does the Navigator window show after choosing Get Data → Excel Workbook?',
          options: ['A list of every formula in the workbook', 'Every sheet and named table found in the workbook, with a preview, letting you choose which to load', 'A request for your Windows password', 'The full publishing history of the file'],
          answerIndex: 1,
          explanation: 'The Navigator lets you confirm you are loading the correct sheet/table before anything is brought into the report.'
        },
        {
          id: 'pb-b-f-8',
          type: 'mcq',
          prompt: 'Why is clicking "Transform Data" generally a safer habit than clicking "Load" directly, even if the data looks clean?',
          options: ['Load is always slower than Transform Data', 'Transform Data opens the Power Query Editor first, letting you fix any hidden problems before the data ever reaches your report, at no real cost if nothing needs fixing', 'Load deletes the original source file', '"Load" only works with CSV files, not Excel'],
          answerIndex: 1,
          explanation: 'Transform Data costs nothing extra if the data is genuinely clean, but saves significant rework if a problem is discovered later.'
        },
        {
          id: 'pb-b-f-9',
          type: 'mcq',
          prompt: 'A daily billing-system export arrives as a CSV file each morning. What is one key structural difference between loading a CSV versus an Excel workbook?',
          options: ['CSV files cannot contain numbers', 'A CSV has no sheets or named tables to choose between — it is one flat block of data, so there is no Navigator selection step', 'CSV loads always fail in Power BI', 'Excel files load faster in every case'],
          answerIndex: 1,
          explanation: 'CSV\'s single flat structure means there is nothing to pick between, unlike a multi-sheet Excel workbook.'
        },
        {
          id: 'pb-b-f-10',
          type: 'mcq',
          prompt: 'In the Data view, a Date column shows "ABC" (text) instead of a calendar icon. Why does this matter for a real dashboard?',
          options: ['It is purely cosmetic and has no real effect', 'A wrongly-typed Date column will silently break date-based visuals and time filters later — it should be fixed immediately after loading', 'It means the report cannot be published', 'It only affects which workspace the report can go into'],
          answerIndex: 1,
          explanation: 'Catching a wrong data type right after loading is quick; catching it after several visuals already depend on it is far more disruptive.'
        },
        {
          id: 'pb-b-f-11',
          type: 'mcq',
          prompt: 'Is the Power Query Editor inside Power BI a different tool from the one in Excel?',
          options: ['Yes, they have completely separate feature sets', 'No — Power BI uses the same Power Query Editor and the same Applied Steps concept as Excel', 'Power BI\'s version cannot remove duplicates', 'Excel\'s version cannot split columns'],
          answerIndex: 1,
          explanation: 'Power Query is shared across both products, including the recorded, replayable Applied Steps approach to cleanup.'
        },
        {
          id: 'pb-b-f-12',
          type: 'mcq',
          prompt: 'Brew & Bite\'s City column has "mumbai", " Mumbai", and "MUMBAI" all meaning the same city. Which two Power Query transformations, used together, fix this?',
          options: ['Remove Columns and Sort Ascending', 'Trim and Capitalize Each Word', 'Merge Queries and Change Type', 'Group By and Filter Rows'],
          answerIndex: 1,
          explanation: 'Trim removes the inconsistent extra spaces, and Capitalize Each Word standardises the casing, together producing a single consistent value.'
        },
        {
          id: 'pb-b-f-13',
          type: 'mcq',
          prompt: 'A register glitch caused a few sales rows to appear twice in the export. Which Power Query transformation fixes this?',
          options: ['Change Type', 'Remove Duplicates', 'Trim', 'Capitalize Each Word'],
          answerIndex: 1,
          explanation: 'Remove Duplicates eliminates rows that repeat based on the column(s) selected, exactly the case of an accidental double-entry.'
        },
        {
          id: 'pb-b-f-14',
          type: 'mcq',
          prompt: 'What is the Applied Steps panel useful for when troubleshooting an unexpected result?',
          options: ['It permanently deletes the original source file', 'Clicking any previous step shows exactly what the data looked like at that point, helping pinpoint where something went wrong', 'It automatically fixes any error without input', 'It only shows the very first and very last steps'],
          answerIndex: 1,
          explanation: 'Being able to step backward through each named transformation makes isolating the source of a problem straightforward.'
        },
        {
          id: 'pb-b-f-15',
          type: 'mcq',
          prompt: 'What does Home → Close & Apply do in the Power Query Editor?',
          options: ['Deletes every cleanup step you just built', 'Loads the cleaned data into the report\'s data model, ready for visuals to be built from it', 'Immediately publishes the report to the Service', 'Reopens the Navigator window'],
          answerIndex: 1,
          explanation: 'Close & Apply is the Power BI equivalent of Excel\'s Close & Load, bringing the cleaned result into the report itself.'
        },
        {
          id: 'pb-b-f-16',
          type: 'mcq',
          prompt: 'Which view in Power BI Desktop is the actual canvas where charts and visuals are placed?',
          options: ['Data view', 'Report view', 'Model view', 'Power Query Editor'],
          answerIndex: 1,
          explanation: 'Report view is the blank canvas for building visuals; Data and Model views are for inspecting tables and relationships instead.'
        },
        {
          id: 'pb-b-f-17',
          type: 'fill-blank',
          prompt: 'Write the DAX formula for a new calculated column called Revenue, equal to the Sales table\'s Quantity column multiplied by its Price column.',
          correctAnswers: ['revenue = sales[quantity] * sales[price]', 'revenue=sales[quantity]*sales[price]'],
          explanation: 'Revenue = Sales[Quantity] * Sales[Price] creates a new column giving every row its own calculated revenue value.'
        },
        {
          id: 'pb-b-f-18',
          type: 'mcq',
          prompt: 'You drag City onto the X-axis and Revenue onto the Y-axis of a column chart. What does Power BI do by default with the Revenue values?',
          options: ['Shows only the first row\'s value', 'Automatically aggregates (typically sums) Revenue for each city', 'Leaves the chart blank until a formula is written', 'Throws an error, since two fields cannot combine this way'],
          answerIndex: 1,
          explanation: 'Power BI automatically aggregates a numeric field dropped alongside a category field — summing is the default.'
        },
        {
          id: 'pb-b-f-19',
          type: 'mcq',
          prompt: 'The owner wants to compare revenue across the 3 cities side by side. Which chart type is the safest default choice?',
          options: ['A pie chart with 3 slices', 'A bar/column chart', 'A Card showing a single number', 'A Slicer'],
          answerIndex: 1,
          explanation: 'Bar/column charts are the clearest, most accurate way to compare values across a small number of categories like cities.'
        },
        {
          id: 'pb-b-f-20',
          type: 'mcq',
          prompt: 'You already built a column chart of Revenue by Date. You want to see the same data as a line chart instead. What is the fastest way?',
          options: ['Delete the visual and build an entirely new line chart from scratch', 'Select the existing visual and click the line chart icon in the Visualizations pane — the same fields carry over', 'Export the data, reimport it, then rebuild', 'This is not possible — chart types are permanent once chosen'],
          answerIndex: 1,
          explanation: 'Changing a selected visual\'s type keeps its assigned fields and simply redraws them in the new chart type.'
        },
        {
          id: 'pb-b-f-21',
          type: 'mcq',
          prompt: 'What does adding a Slicer for City to a report page let a viewer do?',
          options: ['Permanently delete data for other cities', 'Click a city and have every visual on the page that uses the same table update to reflect that selection', 'Change the report\'s underlying DAX formulas', 'Republish the report automatically'],
          answerIndex: 1,
          explanation: 'A Slicer gives the viewer a self-service way to filter every connected visual on the page with a single click.'
        },
        {
          id: 'pb-b-f-22',
          type: 'mcq',
          prompt: 'Setting a date Slicer\'s style to "Between" gives the viewer what kind of control?',
          options: ['A single dropdown listing every individual date', 'A from/to date range picker, letting them narrow the report to a custom time window', 'A button that resets the entire report', 'A way to add new dates to the data'],
          answerIndex: 1,
          explanation: '"Between" style converts a date slicer into a range selector, ideal for narrowing reports to a specific period like one week.'
        },
        {
          id: 'pb-b-f-23',
          type: 'mcq',
          prompt: 'What is the difference between "Filters on this visual" and "Filters on all pages" in the Filters pane?',
          options: ['They behave identically in every situation', '"This visual" affects only the single selected chart; "All pages" affects the entire report, every page', '"All pages" only works with Slicers', '"This visual" filters cannot be edited once applied'],
          answerIndex: 1,
          explanation: 'The Filters pane offers three scopes — visual, page, and all pages — each widening the area that the filter applies to.'
        },
        {
          id: 'pb-b-f-24',
          type: 'mcq',
          prompt: 'The owner wants viewers to be able to pick their own city, but she also wants test/dummy transactions excluded everywhere, with no way for a viewer to accidentally bring them back. Which tools fit each need respectively?',
          options: ['A Filter for the city choice, a Slicer for excluding test data', 'A Slicer for the city choice (viewer-facing), and an "all pages" Filter for excluding test data (locked, invisible to the viewer)', 'Both needs should use the same single Slicer', 'Neither need is possible in Power BI'],
          answerIndex: 1,
          explanation: 'Slicers suit viewer-facing, changeable choices; Filters suit decisions the report builder locks in and the viewer cannot undo.'
        },
        {
          id: 'pb-b-f-25',
          type: 'mcq',
          prompt: 'Why is a finished report still not useful to Brew & Bite\'s owner the moment it is built in Power BI Desktop?',
          options: ['Desktop reports automatically expire after a day', 'The report only exists on the local computer it was built on — nobody else can view it until it is published somewhere accessible', 'Desktop cannot save files', 'Charts disappear once Desktop is closed'],
          answerIndex: 1,
          explanation: 'Desktop is purely an authoring tool — publishing to the Service is what makes a report accessible to anyone else.'
        },
        {
          id: 'pb-b-f-26',
          type: 'mcq',
          prompt: 'What is a workspace in the Power BI Service?',
          options: ['A local folder on your computer', 'A shared space where published reports live, which specific people can be granted access to', 'A chart type', 'A setting only available in Power BI Desktop'],
          answerIndex: 1,
          explanation: '"My workspace" is private by default; a real team would typically publish to a shared workspace specific colleagues can access.'
        },
        {
          id: 'pb-b-f-27',
          type: 'mcq',
          prompt: 'What is the key difference between a Report and a Dashboard in the Power BI Service?',
          options: ['They are the same thing with two different names', 'A Report is the full multi-page document built in Desktop; a Dashboard is a single page assembled in the Service by pinning individual visuals, often from several reports', 'Dashboards cannot display charts, only text', 'Reports can never be shared with anyone'],
          answerIndex: 1,
          explanation: 'Reports are authored in Desktop with full page-by-page interactivity; Dashboards combine pinned visuals into one summary screen built in the Service.'
        },
        {
          id: 'pb-b-f-28',
          type: 'mcq',
          prompt: 'What does Scheduled Refresh allow a published report to do?',
          options: ['Automatically rearrange its visuals daily', 'Automatically reload from its original data source on a set schedule, so it reflects new data without manual republishing', 'Email a PDF copy to every employee automatically', 'Switch itself from a Report into a Dashboard'],
          answerIndex: 1,
          explanation: 'Scheduled Refresh keeps a published report current by re-pulling from its source on a timer, rather than staying frozen at publish time.'
        },
        {
          id: 'pb-b-f-29',
          type: 'mcq',
          prompt: 'After publishing, a chart in the Service still shows your old data, even though you made changes in Desktop. What is the most likely cause?',
          options: ['The Power BI Service is permanently broken', 'You published before saving (Ctrl+S) the latest changes in your .pbix file in Desktop, so the Service received an older version', 'Dashboards always lag 24 hours behind Reports', 'Publishing only works once per file, ever'],
          answerIndex: 1,
          explanation: 'Publishing sends whatever is currently open in Desktop — saving immediately beforehand ensures the most recent version is what gets published.'
        },
        {
          id: 'pb-b-f-30',
          type: 'fill-blank',
          prompt: 'Across this whole track — loading, cleaning, visualising, adding interactivity, and publishing — what single word describes the recurring theme of letting a non-technical viewer explore data ______, instead of reading a static report?',
          correctAnswers: ['interactively', 'themselves'],
          explanation: 'Every feature in this track — slicers, filters, Cards, charts — ultimately serves the same goal: letting a viewer explore the data interactively, on their own, rather than just reading a fixed document.'
        }
      ]
    },
    intermediate: {
      title: 'Power BI Intermediate Final Assessment',
      intro: 'Test your knowledge across all 6 Power BI intermediate modules — data modelling and relationships, DAX measures, time intelligence, drill-through and bookmarks, row-level security, and mobile design. Built around Brew & Bite\'s growth into a 6-café chain with multiple managers.',
      questions: [
        {
          id: 'pb-i-f-1',
          type: 'mcq',
          prompt: 'Why does Brew & Bite split its data into separate Sales, Items, and Cities tables as the business grows, instead of one flat table?',
          options: ['Power BI has a hard limit on how many columns one table can have', 'Repeating item and city details on every sales row becomes a maintenance nightmare at real volume — splitting into related tables avoids that', 'Flat tables cannot be charted in Power BI', 'It is required before any report can be published'],
          answerIndex: 1,
          explanation: 'A star-schema-style split avoids the maintenance burden of repeating descriptive data across every transaction row.'
        },
        {
          id: 'pb-i-f-2',
          type: 'mcq',
          prompt: 'Which view is used to build and inspect relationships between tables in Power BI Desktop?',
          options: ['Report view', 'Data view', 'Model view', 'Power Query Editor'],
          answerIndex: 2,
          explanation: 'Model view shows each loaded table as a box with relationship lines connecting them.'
        },
        {
          id: 'pb-i-f-3',
          type: 'mcq',
          prompt: 'In the Sales-to-Items relationship, which table is the "many" side?',
          options: ['Items', 'Sales, since many transaction rows can reference the same single item', 'Neither — they are always one-to-one', 'Both tables equally'],
          answerIndex: 1,
          explanation: 'Many sales rows can point to the same product, making Sales the "many" side and Items the "one" side.'
        },
        {
          id: 'pb-i-f-4',
          type: 'mcq',
          prompt: 'Why should the "Both" cross filter direction be applied carefully, rather than to every relationship as a default?',
          options: ['It makes the file impossible to save', 'It can create ambiguous filtering paths, leading to visuals behaving unexpectedly when there is no longer one clear path for the filter to follow', 'It only works with numeric columns', 'It disables every visual on the page'],
          answerIndex: 1,
          explanation: 'Single direction is the safe default; "Both" should be a deliberate choice for a specific, understood scenario.'
        },
        {
          id: 'pb-i-f-5',
          type: 'mcq',
          prompt: 'What does RELATED(Items[Price]) do inside a calculation on the Sales table?',
          options: ['Deletes the Price column from Items', 'Reaches across the relationship to fetch the matching Price for the current Sales row', 'Sorts Items by price descending', 'Converts Price to a percentage'],
          answerIndex: 1,
          explanation: 'RELATED follows an existing relationship from the "many" side to fetch a value from the related "one" side.'
        },
        {
          id: 'pb-i-f-6',
          type: 'mcq',
          prompt: 'What is the core difference between a calculated column and a measure?',
          options: ['They are the same thing with two names', 'A calculated column computes once per row and is stored; a measure recalculates dynamically based on the current filter context every time it is used', 'Calculated columns update live with every slicer click, but measures do not', 'Measures cannot reference other tables'],
          answerIndex: 1,
          explanation: 'This dynamic, context-aware recalculation is the entire point of a measure, unlike a static, stored calculated column.'
        },
        {
          id: 'pb-i-f-7',
          type: 'fill-blank',
          prompt: 'Write the DAX measure that sums revenue across the Sales table, multiplying Quantity by the related Items price, using SUMX and RELATED.',
          correctAnswers: ['total revenue = sumx(sales, sales[quantity] * related(items[price]))', 'sumx(sales, sales[quantity] * related(items[price]))'],
          explanation: 'SUMX iterates row by row over Sales, multiplying each row\'s Quantity by the related Items price, then sums the result.'
        },
        {
          id: 'pb-i-f-8',
          type: 'mcq',
          prompt: 'What does CALCULATE([Total Revenue], Cities[City] = "Mumbai") produce?',
          options: ['A new table called Mumbai', 'Total Revenue recomputed, forced to only consider rows where the related city is Mumbai, regardless of other report filters', 'An error, since CALCULATE only accepts one argument', 'A permanent change to the underlying data'],
          answerIndex: 1,
          explanation: 'CALCULATE recomputes an existing measure under a modified filter context.'
        },
        {
          id: 'pb-i-f-9',
          type: 'mcq',
          prompt: 'What does New Quick Measure provide?',
          options: ['A way to permanently delete a measure', 'Common calculation templates (running total, percent of grand total, etc.) that generate working DAX automatically', 'A shortcut to publish the report', 'A tool only for renaming columns'],
          answerIndex: 1,
          explanation: 'Quick Measures both save time and serve as a way to learn correct DAX patterns by inspecting the generated formula.'
        },
        {
          id: 'pb-i-f-10',
          type: 'mcq',
          prompt: 'What is required before time intelligence functions like TOTALYTD will calculate correctly?',
          options: ['A published report', 'A continuous, properly recognised date column, ideally marked as a Date Table or a dedicated Calendar table', 'At least one Row-Level Security role', 'A mobile layout built for every page'],
          answerIndex: 1,
          explanation: 'Time intelligence functions depend on a correctly recognised date column to calculate periods accurately.'
        },
        {
          id: 'pb-i-f-11',
          type: 'mcq',
          prompt: 'What does TOTALYTD([Total Revenue], Sales[Date]) show when used in a chart broken down by month?',
          options: ['Only that single month\'s revenue', 'The cumulative running total from January through the end of that month', 'Next year\'s forecasted revenue', 'The average revenue for the whole year'],
          answerIndex: 1,
          explanation: 'TOTALYTD accumulates a measure from the start of the year up to the current filter context.'
        },
        {
          id: 'pb-i-f-12',
          type: 'mcq',
          prompt: 'What does SAMEPERIODLASTYEAR(Sales[Date]) do inside a CALCULATE?',
          options: ['Permanently deletes last year\'s rows', 'Shifts the current date filter back exactly one year, enabling a year-over-year comparison', 'Predicts future sales using machine learning', 'Converts the Date column to text'],
          answerIndex: 1,
          explanation: 'SAMEPERIODLASTYEAR shifts the filter context back a year so the same measure reflects the equivalent prior-year period.'
        },
        {
          id: 'pb-i-f-13',
          type: 'mcq',
          prompt: 'How does DATEADD(Sales[Date], -1, MONTH) differ from SAMEPERIODLASTYEAR?',
          options: ['They are unrelated and cannot both be used in one model', 'DATEADD is a more flexible building block that can shift by any unit (day, month, quarter, year); SAMEPERIODLASTYEAR is effectively a shortcut for shifting back exactly one year', 'DATEADD only works on text columns', 'SAMEPERIODLASTYEAR works on non-date columns too'],
          answerIndex: 1,
          explanation: 'SAMEPERIODLASTYEAR is essentially DATEADD(..., -1, YEAR) — DATEADD is the more general tool underneath it.'
        },
        {
          id: 'pb-i-f-14',
          type: 'mcq',
          prompt: 'What does setting up a drill-through page let a viewer do?',
          options: ['Edit the report\'s DAX directly from a right-click menu', 'Right-click a specific data point on a summary page and jump to a dedicated detail page, automatically filtered to that selection', 'Permanently remove a data point from the model', 'Convert any visual into a Slicer'],
          answerIndex: 1,
          explanation: 'Drill-through carries the clicked value as a filter onto a detail page built for deeper exploration of that specific selection.'
        },
        {
          id: 'pb-i-f-15',
          type: 'mcq',
          prompt: 'Why might drill-through be preferred over adding a City Slicer directly to a clean summary page?',
          options: ['Slicers are not supported on summary pages', 'Drill-through keeps the summary page focused, while still offering detailed exploration one right-click away when actually needed', 'Drill-through always calculates faster than a Slicer', 'They solve entirely unrelated problems'],
          answerIndex: 1,
          explanation: 'A summary page stays uncluttered without detail-only visuals, while drill-through still provides a path to deeper data on demand.'
        },
        {
          id: 'pb-i-f-16',
          type: 'mcq',
          prompt: 'What does a Bookmark capture when created via View → Bookmarks → Add Bookmark?',
          options: ['Only the file\'s size on disk', 'The current report state — slicer selections, applied filters, and which visuals are visible', 'A static, non-interactive screenshot', 'A backup copy of the entire dataset'],
          answerIndex: 1,
          explanation: 'A bookmark remembers the live, interactive state of the report, restorable later with one click.'
        },
        {
          id: 'pb-i-f-17',
          type: 'mcq',
          prompt: 'How do you connect a button on the canvas to jump to a specific bookmark when clicked?',
          options: ['Buttons cannot be linked to bookmarks', 'Select the button, open Format pane → Action, turn it on, set Type to Bookmark, and choose the target bookmark', 'Rename the button to exactly match the bookmark name', 'Buttons automatically link to the most recent bookmark'],
          answerIndex: 1,
          explanation: 'The Action setting in the Format pane is what wires a button to a bookmark (or other navigation target).'
        },
        {
          id: 'pb-i-f-18',
          type: 'mcq',
          prompt: 'What is the purpose of Row-Level Security (RLS)?',
          options: ['To prevent the report from ever being edited', 'To restrict which rows of data a given viewer can see, within the same published report everyone uses', 'To make a report load faster for every viewer', 'To control which chart types appear in the Visualizations pane'],
          answerIndex: 1,
          explanation: 'RLS lets one report show correctly restricted, different data depending on who is viewing it.'
        },
        {
          id: 'pb-i-f-19',
          type: 'mcq',
          prompt: 'A role filters Cities to [City] = "Mumbai". Why does this also restrict the much larger Sales table?',
          options: ['It does not — Sales stays fully visible', 'Because Cities is related to Sales, the filter cascades through the relationship and restricts Sales wherever that relationship reaches', 'Every role automatically applies to every table with no relationship needed', 'The same filter must be manually duplicated onto Sales'],
          answerIndex: 1,
          explanation: 'A relationship lets a filter on a small lookup table automatically restrict the related fact table too.'
        },
        {
          id: 'pb-i-f-20',
          type: 'mcq',
          prompt: 'What is the purpose of Modeling → View As when testing an RLS role?',
          options: ['It permanently locks the role for every future viewer', 'It previews the report exactly as that role would see it, before publishing — the key way to verify a role works correctly', 'It deletes the role after testing', 'It only works after a report has already been published'],
          answerIndex: 1,
          explanation: 'View As is essential for catching a broken or incorrect role before real users ever see a wrong (or unrestricted) report.'
        },
        {
          id: 'pb-i-f-21',
          type: 'mcq',
          prompt: 'Why does a dynamic role using USERPRINCIPALNAME() scale better than one static role per city?',
          options: ['It does not — they behave identically', 'A single dynamic role automatically restricts each manager based on who is logged in, instead of requiring a new hand-written role every time a city is added', 'USERPRINCIPALNAME() only supports up to 3 users', 'Dynamic roles require no DAX at all, unlike static roles'],
          answerIndex: 1,
          explanation: 'Comparing the logged-in user against a data column scales to any number of locations without writing a new role each time.'
        },
        {
          id: 'pb-i-f-22',
          type: 'mcq',
          prompt: 'When does Row-Level Security actually become enforced for real users?',
          options: ['Immediately when created in Desktop, even before publishing', 'After publishing, once users are assigned to the correct role in the dataset\'s Security settings in the Power BI Service', 'Only after exporting the report to PDF', 'RLS only restricts the report\'s original author'],
          answerIndex: 1,
          explanation: 'Roles are authored in Desktop, but enforcement for real users requires publishing and assigning accounts to roles in the Service.'
        },
        {
          id: 'pb-i-f-23',
          type: 'mcq',
          prompt: 'Why does a desktop report layout not automatically work well on a phone screen?',
          options: ['Phones cannot run Power BI at all', 'Shrinking a wide desktop layout proportionally makes text unreadable and touch targets too small for a narrow screen', 'Mobile devices do not support charts', 'Power BI reports are always read-only on phones'],
          answerIndex: 1,
          explanation: 'A layout designed for a wide screen does not translate cleanly to a narrow one without deliberate redesign.'
        },
        {
          id: 'pb-i-f-24',
          type: 'mcq',
          prompt: 'What happens if a report page has no mobile layout built for it?',
          options: ['The page becomes completely inaccessible on the Power BI Mobile app', 'The Mobile app falls back to a scaled-down version of the full desktop page, which works but can feel cramped', 'The report automatically deletes that page on phones', 'Mobile users see a blank page instead'],
          answerIndex: 1,
          explanation: 'Without an explicit mobile layout, the app shows a scaled desktop view rather than a purpose-built phone layout.'
        },
        {
          id: 'pb-i-f-25',
          type: 'mcq',
          prompt: 'For a Brew & Bite manager checking numbers on their phone, what should typically be prioritised at the very top of a mobile layout?',
          options: ['The most detailed chart available, regardless of size', 'The single most important headline number (like a Total Revenue Card), since that is what a quick phone glance most needs', 'A duplicate copy of the desktop layout, unchanged', 'The Power Query Editor view'],
          answerIndex: 1,
          explanation: 'Mobile layouts work best when the most important summary information is placed first, since phone use is typically a quick glance rather than deep exploration.'
        },
        {
          id: 'pb-i-f-26',
          type: 'mcq',
          prompt: 'In the relationship setup from this track, what role does the small Cities table play that makes Row-Level Security simpler to set up?',
          options: ['Cities has no special role in RLS at all', 'Because Cities is related to the much larger Sales table, a single RLS filter on Cities cascades through the relationship to correctly restrict Sales as well', 'RLS must always be written directly against the largest table', 'Cities needs to be duplicated into Sales before RLS can work'],
          answerIndex: 1,
          explanation: 'Filtering a small, related lookup table is often simpler and just as effective as writing a rule directly against a large fact table.'
        },
        {
          id: 'pb-i-f-27',
          type: 'mcq',
          prompt: 'A manager wants to compare "this month" against "last month" with one click, without manually resetting a slicer each time. Which combination of features from this track solves this directly?',
          options: ['Row-Level Security alone', 'Two Bookmarks (one per time period) connected to buttons, so clicking toggles between the two pre-set states', 'A single calculated column', 'Mobile Layout view'],
          answerIndex: 1,
          explanation: 'Bookmarks paired with buttons are exactly the feature designed for jumping between pre-configured report states with one click.'
        },
        {
          id: 'pb-i-f-28',
          type: 'mcq',
          prompt: 'Why is DIVIDE preferred over a plain a/b division inside a measure like Average Order Value?',
          options: ['DIVIDE is simply shorter to type', 'DIVIDE returns blank instead of an error when the denominator is zero — such as a filtered view with no matching sales rows', 'Plain division is not valid DAX syntax at all', 'DIVIDE always rounds the result to whole numbers'],
          answerIndex: 1,
          explanation: 'DIVIDE handles a zero denominator gracefully, avoiding broken visuals when a filter context produces no matching rows.'
        },
        {
          id: 'pb-i-f-29',
          type: 'mcq',
          prompt: 'After finishing the mobile layout for the capstone report, why does the lesson recommend testing the RLS role with View As one more time?',
          options: ['View As is required only once and never needs repeating', 'Adding new visuals or measures late in the process can introduce a field not properly covered by existing relationships, which View As would reveal', 'Mobile layouts automatically disable all RLS roles', 'It is purely a formality with no real purpose'],
          answerIndex: 1,
          explanation: 'Late additions to a report can quietly introduce gaps in security coverage — re-testing with View As catches this before publishing.'
        },
        {
          id: 'pb-i-f-30',
          type: 'mcq',
          prompt: 'Across this whole track — relationships, measures, time intelligence, drill-through/bookmarks, RLS, and mobile design — what common challenge do all of these features ultimately address?',
          options: ['Making the report file smaller in size', 'Making one single report work correctly for different kinds of users and different kinds of devices, rather than one fixed view for everyone', 'Removing the need for any data cleaning', 'Replacing the need for Power BI Desktop entirely'],
          answerIndex: 1,
          explanation: 'RLS and drill-through/bookmarks adapt a report to different users; mobile layout adapts it to different devices — the core challenge of real BI work at any scale.'
        }
      ]
    },
    advanced: {
      title: 'Power BI Advanced Final Assessment',
      intro: 'Test your knowledge across all 6 Power BI advanced modules — advanced DAX patterns, performance tuning, custom visuals, embedded analytics, workspace governance, and Premium features. Built around Brew & Bite\'s growth into a 50-outlet franchise with a head-office BI team and a partner portal.',
      questions: [
        {
          id: 'pb-a-f-1',
          type: 'mcq',
          prompt: 'What is the main benefit of using VAR and RETURN inside a complex DAX measure?',
          options: ['It is mandatory syntax for every measure', 'It computes a sub-expression once under a name and reuses it, improving readability and often performance versus repeating the expression', 'It permanently stores the result as a new physical column', 'It disables all filters on the measure'],
          answerIndex: 1,
          explanation: 'VAR/RETURN avoids recomputing the same logic multiple times and makes measures far easier to read and debug.'
        },
        {
          id: 'pb-a-f-2',
          type: 'mcq',
          prompt: 'What does RANKX(ALL(Cities[City]), [Total Revenue]) produce for a head-office leaderboard?',
          options: ['The combined total revenue of all cities', 'Each city\'s rank compared against every other city\'s revenue, ignoring whatever filter the report itself currently has on City', 'A random, non-meaningful number', 'The count of distinct cities only'],
          answerIndex: 1,
          explanation: 'ALL(Cities[City]) clears any existing filter on City so every outlet is ranked against every other outlet fairly.'
        },
        {
          id: 'pb-a-f-3',
          type: 'mcq',
          prompt: 'What is the key difference between ALL and ALLSELECTED?',
          options: ['No real difference exists', 'ALL ignores every filter on a column everywhere, including slicers; ALLSELECTED respects filters from outside the visual (like a slicer) while still ignoring the visual\'s own internal row context', 'ALLSELECTED only works inside Cards', 'ALL can only be used with text columns'],
          answerIndex: 1,
          explanation: 'This distinction matters for percentage-of-total measures that should respect a slicer\'s narrowing while still computing correctly per row.'
        },
        {
          id: 'pb-a-f-4',
          type: 'mcq',
          prompt: 'What does ALLEXCEPT(Cities, Cities[Region]) achieve in a "share within region" measure?',
          options: ['It removes every filter from the model entirely', 'It removes every filter on the Cities table except Region, so the measure shows an outlet\'s share of its own region\'s total', 'It only works on the Sales table, never Cities', 'It deletes the Region column'],
          answerIndex: 1,
          explanation: 'ALLEXCEPT keeps the named filter (Region) while clearing all other filters on that table, useful for "share within a group" calculations.'
        },
        {
          id: 'pb-a-f-5',
          type: 'mcq',
          prompt: 'What does a What-If Parameter (like a Discount %) let a viewer explore?',
          options: ['Permanent edits to the underlying source data', 'An interactive scenario, with measures recalculating live as the parameter is adjusted, without changing the actual data', 'A way to change workspace roles', 'A way to delete rows from Sales'],
          answerIndex: 1,
          explanation: 'What-if parameters generate a measure a viewer can adjust live for scenario analysis, with no impact on the underlying data.'
        },
        {
          id: 'pb-a-f-6',
          type: 'mcq',
          prompt: 'What should you do before attempting to optimise a report that feels slow?',
          options: ['Immediately rebuild the most visually complex chart', 'Use Performance Analyzer to measure exactly which visual and which part (DAX vs rendering) is actually slow', 'Switch every table to DirectQuery without investigation', 'Reduce every visual\'s font size'],
          answerIndex: 1,
          explanation: 'Performance Analyzer gives a real measured breakdown, often revealing the actual bottleneck is not the visual you would have assumed.'
        },
        {
          id: 'pb-a-f-7',
          type: 'mcq',
          prompt: 'What is the core tradeoff between Import and DirectQuery storage modes?',
          options: ['They behave identically in every situation', 'Import copies data into a fast in-memory engine but is only as fresh as the last refresh; DirectQuery stays live but every click depends on the source database\'s query speed', 'DirectQuery is always faster regardless of source', 'Import cannot use relationships between tables'],
          answerIndex: 1,
          explanation: 'Import trades freshness for speed; DirectQuery trades raw speed for always-current data pulled live from the source.'
        },
        {
          id: 'pb-a-f-8',
          type: 'mcq',
          prompt: 'Why is a column with extremely high cardinality (like a precise per-second timestamp) a performance concern in an Import model?',
          options: ['High-cardinality columns cannot be loaded at all', 'A column where almost every row has a distinct value compresses poorly in the in-memory engine, increasing model size and slowing performance', 'It only matters for DirectQuery, never Import', 'It has no measurable effect on performance'],
          answerIndex: 1,
          explanation: 'The VertiPaq engine compresses repeated values efficiently; mostly-unique columns compress far less effectively.'
        },
        {
          id: 'pb-a-f-9',
          type: 'mcq',
          prompt: 'What is the purpose of an Aggregation table at very large scale?',
          options: ['To delete the underlying detailed data permanently', 'To provide a pre-summarised, much smaller table that high-level visuals use automatically, only falling back to full detail when a viewer drills in', 'To replace the need for any relationships in the model', 'To convert every table into DirectQuery automatically'],
          answerIndex: 1,
          explanation: 'Aggregations let summary-level visuals query a small pre-summarised table instead of scanning the full detail every time.'
        },
        {
          id: 'pb-a-f-10',
          type: 'mcq',
          prompt: 'What is AppSource, in the context of Power BI?',
          options: ['A built-in default chart type', 'A marketplace of community and Microsoft-built custom visuals, installable with one click and usable like any native chart type', 'A workspace governance setting', 'A way to schedule dataset refreshes'],
          answerIndex: 1,
          explanation: 'AppSource hosts custom visuals (box plots, Sankey diagrams, and more) beyond Power BI\'s default chart library.'
        },
        {
          id: 'pb-a-f-11',
          type: 'mcq',
          prompt: 'What is a genuine limitation of a Python or R script visual compared to a native Power BI chart?',
          options: ['It cannot display any numeric data', 'It renders as a static image and does not support native interactivity like cross-filtering other visuals when clicked', 'It cannot be created inside Power BI Desktop at all', 'It only works with text-based data'],
          answerIndex: 1,
          explanation: 'Script visuals lose native click-to-cross-filter interactivity, a real cost that should be weighed before choosing one.'
        },
        {
          id: 'pb-a-f-12',
          type: 'mcq',
          prompt: 'According to best practice, when should a Python or R visual be reached for instead of a native or AppSource visual?',
          options: ['As the default first choice for every chart', 'Only when a genuinely specific statistical chart is required and no native or AppSource visual already covers it', 'Whenever a report needs to load faster', 'Only on mobile report layouts'],
          answerIndex: 1,
          explanation: 'The interactivity tradeoff means script visuals are a deliberate, narrow-use tool rather than a default choice.'
        },
        {
          id: 'pb-a-f-13',
          type: 'mcq',
          prompt: 'For Brew & Bite\'s franchise partner portal, where partners have no personal Power BI account, which embedding approach fits?',
          options: ['"Embed for your organisation"', '"Embed for your customers" (App Owns Data), since partners are authenticated entirely by the host portal application, not by their own Power BI login', 'Neither approach supports external users at all', 'Partners must each be given a personal Power BI Pro license first'],
          answerIndex: 1,
          explanation: 'App Owns Data is specifically designed for external viewers with no Power BI account of their own.'
        },
        {
          id: 'pb-a-f-14',
          type: 'mcq',
          prompt: 'In the "embed for your customers" flow, who actually requests the embed token from Power BI?',
          options: ['Each individual partner, logging in with their own Power BI credentials', 'The host application\'s own backend, using a dedicated service identity, on behalf of the partner', 'No authentication happens at any stage', 'The partner\'s web browser, directly contacting Power BI'],
          answerIndex: 1,
          explanation: 'The portal\'s backend authenticates and requests a scoped token; the external partner never logs into Power BI themselves.'
        },
        {
          id: 'pb-a-f-15',
          type: 'mcq',
          prompt: 'Why is Row-Level Security described as essential, not optional, when embedding a report for external franchise partners?',
          options: ['RLS and embedding are unrelated features', 'Without RLS, an embed token for "the report" would show the same unrestricted data to every partner; combined with RLS, each partner sees only their own outlet\'s data', 'RLS only applies to internal Power BI Service users', 'RLS makes embedded reports load more slowly with no security benefit'],
          answerIndex: 1,
          explanation: 'RLS is the mechanism that makes one embedded report safely show different, correctly restricted data to each external partner.'
        },
        {
          id: 'pb-a-f-16',
          type: 'mcq',
          prompt: 'What is the Power BI REST API primarily used for?',
          options: ['Manually designing report visuals by hand', 'Programmatic operations like generating embed tokens, triggering dataset refreshes, or managing workspace users, typically called from a backend application', 'Replacing the need for Power BI Desktop entirely', 'Only for billing and invoicing'],
          answerIndex: 1,
          explanation: 'The REST API is how external applications (like a partner portal\'s backend) interact with Power BI programmatically.'
        },
        {
          id: 'pb-a-f-17',
          type: 'mcq',
          prompt: 'What licensing reality applies to embedding reports for external customers at real organisational scale?',
          options: ['It is automatically included free with standard Pro licensing', 'It requires a dedicated Power BI Embedded capacity or existing Premium capacity, a genuine cost and architecture decision', 'Only Power BI Desktop is needed, at no additional cost', 'Embedding for customers is not technically possible'],
          answerIndex: 1,
          explanation: 'Embedding for customers is a capacity-based cost separate from standard per-user Pro licensing, requiring deliberate planning.'
        },
        {
          id: 'pb-a-f-18',
          type: 'mcq',
          prompt: 'What is the difference between the Member and Viewer workspace roles?',
          options: ['They are identical in every respect', 'Member can edit and publish content and share it onward; Viewer can only view already-published content with no editing rights', 'Viewer has greater access than Member', 'Member can only view, never edit, content'],
          answerIndex: 1,
          explanation: 'Workspace roles range from full control down to view-only, with Member and Contributor offering different levels of editing/sharing ability between them.'
        },
        {
          id: 'pb-a-f-19',
          type: 'mcq',
          prompt: 'What is the purpose of a Dev → Test → Production deployment pipeline?',
          options: ['To make every visual render in a different colour automatically', 'To ensure unverified or in-progress changes are reviewed in earlier stages before being promoted to Production, where real business users see them', 'To permanently prevent any report from ever being edited again', 'To automatically translate reports into other languages'],
          answerIndex: 1,
          explanation: 'Deployment pipelines apply standard software-development discipline to BI content, preventing half-finished work from reaching real users.'
        },
        {
          id: 'pb-a-f-20',
          type: 'mcq',
          prompt: 'What problem does a shared, certified dataset solve at head-office scale?',
          options: ['It changes the visual theme of every report', 'It prevents multiple analysts from each redefining the same measure (like Total Revenue) slightly differently across separate reports, avoiding inconsistent numbers', 'It is a prerequisite before any report can be published at all', 'It automatically converts DAX measures into SQL'],
          answerIndex: 1,
          explanation: 'A single shared, certified dataset gives every report the same trusted definitions, avoiding the "five analysts, five different numbers" problem.'
        },
        {
          id: 'pb-a-f-21',
          type: 'mcq',
          prompt: 'What do sensitivity labels address that workspace roles alone do not?',
          options: ['Exactly the same concern as workspace roles, just renamed', 'How sensitive content is and what handling rules (like export or external-sharing restrictions) should automatically follow it, rather than simply who is allowed access', 'Which chart types are permitted in a report', 'How frequently a dataset refreshes'],
          answerIndex: 1,
          explanation: 'Sensitivity labels classify data sensitivity and apply handling policies, a different concern from the access-control question workspace roles answer.'
        },
        {
          id: 'pb-a-f-22',
          type: 'mcq',
          prompt: 'What is managed through the Power BI Admin Portal that is distinct from any single workspace\'s own settings?',
          options: ['Only the colour theme of one report', 'Tenant-wide settings — such as whether publishing to the web is allowed, who can create new workspaces, and organisation-wide usage metrics', 'An individual user\'s personal device settings', 'A single visual\'s formatting options'],
          answerIndex: 1,
          explanation: 'The Admin Portal governs organisation-wide tenant settings, managed by a Power BI administrator, separate from any individual workspace.'
        },
        {
          id: 'pb-a-f-23',
          type: 'mcq',
          prompt: 'What real limitation of standard Pro licensing does Premium capacity primarily raise?',
          options: ['The number of charts allowed per report', 'Dataset size limits (capped around 1 GB on Pro) and the number of scheduled refreshes per day, both increased substantially under Premium', 'The number of colours available for formatting', 'The maximum length of a report\'s title'],
          answerIndex: 1,
          explanation: 'Premium capacity raises dataset size ceilings and refresh frequency limits well beyond what standard Pro licensing allows.'
        },
        {
          id: 'pb-a-f-24',
          type: 'mcq',
          prompt: 'When is a Paginated Report the better tool than a standard interactive Power BI report?',
          options: ['Whenever any chart is needed at all', 'When a precisely formatted, page-by-page document is required — like a franchise royalty statement that must look identical and correctly paginated every time it is printed or exported', 'Only when a report has zero numeric data', 'Never — paginated reports are always inferior to standard reports'],
          answerIndex: 1,
          explanation: 'Paginated Reports are purpose-built for pixel-perfect, printable, page-by-page documents, unlike the interactive on-screen design of standard reports.'
        },
        {
          id: 'pb-a-f-25',
          type: 'mcq',
          prompt: 'What does the Q&A AI feature let a viewer do?',
          options: ['Permanently change the underlying dataset', 'Type a plain-English question and have Power BI automatically generate a matching visual, using the model\'s field names and synonyms', 'Chat with a live human support agent', 'Translate the entire report into another language'],
          answerIndex: 1,
          explanation: 'Q&A interprets a typed natural-language question against the data model and builds a corresponding visual automatically.'
        },
        {
          id: 'pb-a-f-26',
          type: 'mcq',
          prompt: 'Why does Q&A tend to work best on a clean, well-modelled dataset?',
          options: ['Q&A does not actually depend on the model\'s structure at all', 'Q&A relies heavily on sensible, well-named fields and measures to correctly interpret a typed question and match it to the right data', 'Q&A only works on datasets smaller than 100 rows', 'Q&A requires every column to be numeric'],
          answerIndex: 1,
          explanation: 'Natural-language interpretation depends on clear field and measure naming to correctly map a question to the underlying data.'
        },
        {
          id: 'pb-a-f-27',
          type: 'mcq',
          prompt: 'What is a Dataflow, conceptually?',
          options: ['A type of chart visual', 'A Power Query cleanup recipe saved centrally in the Service, reusable by multiple reports across multiple workspaces, instead of being redefined inside each individual file', 'A replacement for Row-Level Security', 'A built-in AI chatbot feature'],
          answerIndex: 1,
          explanation: 'Dataflows centralise data preparation logic so it is defined once and reused, rather than duplicated inside every separate report file.'
        },
        {
          id: 'pb-a-f-28',
          type: 'fill-blank',
          prompt: 'Which DAX function is used specifically to rank one value (like an outlet\'s revenue) against a set of others?',
          correctAnswers: ['rankx'],
          explanation: 'RANKX ranks a measure\'s result for the current row/context against the same measure evaluated across a specified table or column.'
        },
        {
          id: 'pb-a-f-29',
          type: 'fill-blank',
          prompt: 'Which Power BI tool would you open to measure exactly which visual on a page is slow, broken down by DAX query time vs rendering time?',
          correctAnswers: ['performance analyzer'],
          explanation: 'Performance Analyzer provides a per-visual timing breakdown, the starting point for any real performance investigation.'
        },
        {
          id: 'pb-a-f-30',
          type: 'mcq',
          prompt: 'Across this whole Advanced track — DAX patterns, performance, custom visuals, embedding, governance, and Premium features — what common thread connects all six topics?',
          options: ['They are all features exclusive to Power BI Desktop, with no Service involvement', 'Each one addresses a challenge that only emerges once Power BI moves beyond one person\'s individual report, toward a real organisation\'s shared, governed, externally-facing BI system', 'They only matter for companies with fewer than 10 employees', 'They are unrelated topics with no shared theme'],
          answerIndex: 1,
          explanation: 'Every Advanced-track topic is a response to the same underlying shift: from one analyst\'s report to a multi-stakeholder, organisation-scale BI system.'
        }
      ]
    }
  },
  tableau: {
    beginner: {
      title: 'Tableau Beginner Final Assessment',
      intro: 'Test your knowledge across all 5 Tableau beginner modules — what Tableau is, loading data, building your first chart, filters and groups, and your first dashboard. Built around Tableau\'s own real teaching dataset, Sample Superstore.',
      questions: [
        {
          id: 'tb-b-f-1',
          type: 'mcq',
          prompt: 'What is the fundamental difference in how Tableau builds charts compared to Excel?',
          options: ['Tableau requires writing code for every chart', 'In Tableau, dragging fields onto shelves automatically generates an appropriate chart; Excel typically requires manually choosing a chart type first', 'Tableau can only build pie charts', 'There is no real difference between them'],
          answerIndex: 1,
          explanation: 'Tableau infers a suitable visualisation from the fields and shelves used, rather than requiring a chart type to be picked first.'
        },
        {
          id: 'tb-b-f-2',
          type: 'mcq',
          prompt: 'In Tableau terminology, what is a Measure?',
          options: ['A category used to group or slice data, like Region or Category', 'A numerical field that can be aggregated (summed, averaged), like Sales or Profit', 'The physical size of the dashboard canvas', 'A type of map visual'],
          answerIndex: 1,
          explanation: 'Measures are quantitative fields Tableau aggregates by default when dragged into a view.'
        },
        {
          id: 'tb-b-f-3',
          type: 'mcq',
          prompt: 'What is the main catch with using Tableau Public for free?',
          options: ['It expires after 7 days', 'Any workbook you save is publicly visible on the internet by default, often downloadable by others', 'It limits you to 10 rows of data', 'It cannot connect to Excel files'],
          answerIndex: 1,
          explanation: 'Tableau Public is genuinely public — it should never be used for sensitive or confidential business data.'
        },
        {
          id: 'tb-b-f-4',
          type: 'mcq',
          prompt: 'Why is "Sample Superstore" used as the dataset throughout the Tableau Beginner track?',
          options: ['It is the only dataset format Tableau accepts', 'It is Tableau\'s own long-standing teaching dataset, so skills practised on it transfer directly to countless real tutorials and sample workbooks', 'It contains no numeric data at all', 'It is required for a Tableau Public account specifically'],
          answerIndex: 1,
          explanation: 'Using the same dataset Tableau itself teaches with means learned skills carry over directly to outside resources.'
        },
        {
          id: 'tb-b-f-5',
          type: 'mcq',
          prompt: 'What does the Data Source page let you check right after connecting to a file, before building any charts?',
          options: ['The final published dashboard URL', 'Each column\'s detected data type, shown by an icon — catching a wrongly-typed date or number before it breaks a chart later', 'Your Tableau Public account password', 'The number of sheets in the workbook'],
          answerIndex: 1,
          explanation: 'Confirming data types immediately after connecting is a habit worth building, the same one emphasised in the Excel and Power BI tracks.'
        },
        {
          id: 'tb-b-f-6',
          type: 'mcq',
          prompt: 'A simple test for telling Dimensions and Measures apart: a question starting with "which" or "what kind" usually points to which one?',
          options: ['Dimension', 'Measure', 'Neither — text fields are never categorised this way', 'It depends only on the field\'s data type icon colour'],
          answerIndex: 0,
          explanation: '"Which State" or "what Category" are categorising/grouping questions, which is exactly what a Dimension represents.'
        },
        {
          id: 'tb-b-f-7',
          type: 'mcq',
          prompt: 'Why might a numeric Order ID column need to be manually moved from Measures to Dimensions?',
          options: ['Order ID cannot be displayed in Tableau at all', 'An ID-like numeric field should be grouped or categorised by, not summed or averaged, which is what Dimensions are for', 'Dimensions always load faster regardless of the field', 'All numeric fields must always be Dimensions by Tableau\'s rules'],
          answerIndex: 1,
          explanation: 'You would never want to SUM an Order ID — numeric ID-like fields are the classic exception to "numbers are Measures."'
        },
        {
          id: 'tb-b-f-8',
          type: 'mcq',
          prompt: 'What is the key tradeoff between a Live connection and an Extract in Tableau?',
          options: ['They behave identically with no difference', 'Live queries the original source on every interaction (always current, but as fast as the source); Extract copies a fast internal snapshot (faster, but needs explicit refreshing)', 'Extract only supports Excel files, never CSV', 'Live connections are not supported by Tableau Public'],
          answerIndex: 1,
          explanation: 'This is conceptually the same tradeoff as Power BI\'s Import vs DirectQuery, under different names.'
        },
        {
          id: 'tb-b-f-9',
          type: 'mcq',
          prompt: 'You drag Category onto Columns and Sales onto Rows. What happens?',
          options: ['Nothing, until a chart type is manually chosen', 'Tableau automatically draws a bar chart, one bar per category, sized by total Sales', 'An error appears, since two fields cannot combine this way', 'Only the first row of data displays'],
          answerIndex: 1,
          explanation: 'Tableau infers an appropriate chart type automatically from what is dragged onto which shelf.'
        },
        {
          id: 'tb-b-f-10',
          type: 'mcq',
          prompt: 'What does the "Show Me" panel do?',
          options: ['Permanently locks the current chart type forever', 'Highlights every chart type compatible with the currently selected fields, letting you switch visualisations instantly', 'Publishes the workbook to Tableau Public', 'Deletes any unused fields from the dataset'],
          answerIndex: 1,
          explanation: 'Show Me suggests valid alternative chart types for the fields currently in use.'
        },
        {
          id: 'tb-b-f-11',
          type: 'mcq',
          prompt: 'Right-clicking SUM(Sales) on a shelf and switching it to Average changes what?',
          options: ['It deletes the Sales field from the dataset entirely', 'It changes the aggregation shown — total Sales per category becomes average Sales per category — answering a different question from the same data', 'It converts Sales into a Dimension', 'It has no effect on the chart at all'],
          answerIndex: 1,
          explanation: 'Switching aggregation type changes what each mark represents without rebuilding the chart from scratch.'
        },
        {
          id: 'tb-b-f-12',
          type: 'mcq',
          prompt: 'Dragging Profit onto the "Color" box in the Marks card does what to an existing chart?',
          options: ['Removes the Sales data already on the chart', 'Shades each mark according to its Profit value, layering a second insight onto the existing chart', 'Deletes the Profit field from the dataset', 'Converts the chart into a map automatically'],
          answerIndex: 1,
          explanation: 'The Marks card lets you encode an additional Measure visually (colour, size, label) onto an existing chart.'
        },
        {
          id: 'tb-b-f-13',
          type: 'mcq',
          prompt: 'Why does dragging a field like State directly onto the canvas automatically produce a map?',
          options: ['It does not — maps must always be built manually in Tableau', 'Tableau recognises geographic fields automatically and generates a corresponding map, with no chart type chosen manually', 'Maps require a separate paid add-on', 'Geographic fields must first be converted into numbers'],
          answerIndex: 1,
          explanation: 'Tableau\'s built-in geographic role recognition is one of its most distinctive beginner-friendly features.'
        },
        {
          id: 'tb-b-f-14',
          type: 'mcq',
          prompt: 'Why is renaming a sheet from the default "Sheet 1" to something meaningful, like "Sales by Category," worth doing?',
          options: ['Tableau requires unique sheet names to function at all', 'A finished workbook with several generically-named sheets is unusable to anyone but the person who built it minutes ago', 'It changes how the underlying data is stored', 'It is purely cosmetic with no practical benefit'],
          answerIndex: 1,
          explanation: 'Clear sheet names matter for anyone returning to or sharing a workbook later, including the original builder after some time has passed.'
        },
        {
          id: 'tb-b-f-15',
          type: 'mcq',
          prompt: 'What happens when you drag Profit onto the Filters shelf and set a range of "less than 0"?',
          options: ['Every loss-making order is permanently deleted from the source data', 'The current sheet recalculates to show only orders with negative Profit, surfacing loss-making orders instantly', 'Profit is converted into a Dimension', 'Nothing changes until the workbook is published'],
          answerIndex: 1,
          explanation: 'A Filters shelf entry restricts what a sheet displays and recalculates from, without altering the underlying source data.'
        },
        {
          id: 'tb-b-f-16',
          type: 'mcq',
          prompt: 'What is the key difference between a plain filter on the Filters shelf and a Quick Filter (Show Filter)?',
          options: ['They are identical in every respect', 'A plain filter is fixed and invisible to the viewer; a Quick Filter adds a visible, interactive control the viewer can change themselves', 'Quick Filters only support numeric fields', 'Plain filters only work with date fields'],
          answerIndex: 1,
          explanation: 'This mirrors the Filter-vs-Slicer distinction from the Power BI track, just under a different name.'
        },
        {
          id: 'tb-b-f-17',
          type: 'mcq',
          prompt: 'What does a "Relative Date" filter (e.g., "last 3 months") do that a fixed date range does not?',
          options: ['It permanently deletes older rows from the dataset', 'It automatically updates its window as time passes, useful for a dashboard meant to be reused indefinitely', 'It only works inside Tableau Public, not Desktop', 'It disables every other filter on the sheet'],
          answerIndex: 1,
          explanation: 'A relative date filter recalculates going forward automatically, unlike a fixed range needing manual updates.'
        },
        {
          id: 'tb-b-f-18',
          type: 'mcq',
          prompt: 'What does creating a Group from several Sub-Category values achieve?',
          options: ['It permanently deletes the original individual values from the source data', 'It creates a new combined field treating the selected values as one category, without altering the underlying data', 'It converts the field into a Measure', 'It automatically builds a full dashboard'],
          answerIndex: 1,
          explanation: 'Groups let an analyst define a custom, simplified level of detail layered on top of the original data.'
        },
        {
          id: 'tb-b-f-19',
          type: 'mcq',
          prompt: 'A retail analyst wants to find which specific product lines are losing money. What is the most direct approach using tools from this track?',
          options: ['Manually scroll through every row of raw data looking for negative numbers', 'Filter to Profit < 0, then break the filtered view down by Sub-Category', 'Delete all rows with positive Profit from the source file', 'Rename every Sub-Category value'],
          answerIndex: 1,
          explanation: 'Combining a Measure filter with a Dimension breakdown directly answers "which specific things are the problem."'
        },
        {
          id: 'tb-b-f-20',
          type: 'mcq',
          prompt: 'What is a Dashboard in Tableau, structurally?',
          options: ['A single chart with extra colours', 'A separate canvas where existing sheets (not raw data) are dragged in and arranged together', 'A type of data connection', 'A built-in AI chat feature'],
          answerIndex: 1,
          explanation: 'A Dashboard combines previously built sheets into one arranged view, rather than being built directly from raw data itself.'
        },
        {
          id: 'tb-b-f-21',
          type: 'mcq',
          prompt: 'What does a Dashboard Action (Filter, set to "On Select") let a viewer do?',
          options: ['Permanently delete a sheet from the dashboard', 'Click a mark on one sheet (like a category bar) and have another sheet on the same dashboard (like a map) filter automatically in response', 'Change the dashboard\'s underlying data source', 'Export the dashboard as a PDF automatically'],
          answerIndex: 1,
          explanation: 'Dashboard Actions wire up cross-sheet interactivity, turning separate sheets into one connected, explorable tool.'
        },
        {
          id: 'tb-b-f-22',
          type: 'mcq',
          prompt: 'Why is it specifically risky to publish a workbook containing real customer names or financial figures to Tableau Public?',
          options: ['Tableau Public cannot technically handle that kind of data', 'Tableau Public is genuinely public by default — anyone with the link, and often the public gallery, can view and sometimes download the underlying workbook and data', 'It would make the dashboard load more slowly', 'Tableau Public requires a paid license for any real data'],
          answerIndex: 1,
          explanation: 'The free tier\'s public-by-default nature makes it unsuitable for any sensitive or confidential information.'
        },
        {
          id: 'tb-b-f-23',
          type: 'mcq',
          prompt: 'What is the "Tiled" vs "Floating" choice in dashboard layout used for?',
          options: ['Choosing the colour palette for the whole dashboard', 'Controlling whether sheets snap to a grid layout or can overlap and be positioned freely', 'Switching between Live and Extract connections', 'Deciding which fields are Dimensions vs Measures'],
          answerIndex: 1,
          explanation: 'Tiled and Floating are the two layout modes for arranging dashboard objects, each suited to different design needs.'
        },
        {
          id: 'tb-b-f-24',
          type: 'mcq',
          prompt: 'Why does a finished dashboard benefit from a Text title object placed at the top?',
          options: ['Tableau requires a title to publish at all', 'It immediately tells a first-time viewer what they are looking at, without needing a separate explanation', 'It changes how the underlying measures are calculated', 'It is the only way to add a Quick Filter'],
          answerIndex: 1,
          explanation: 'A clear title makes a dashboard self-explanatory to anyone opening it for the first time.'
        },
        {
          id: 'tb-b-f-25',
          type: 'mcq',
          prompt: 'How does publishing to Tableau Public compare conceptually to Power BI\'s publish-to-Service step?',
          options: ['They are completely unrelated concepts', 'Both make a finished report/workbook viewable in a browser without the viewer needing the authoring software installed, though Tableau Public\'s result is public by default while Power BI\'s Service can be kept private', 'Tableau Public requires a paid license, unlike Power BI\'s Service', 'Publishing is only possible in Power BI, not Tableau'],
          answerIndex: 1,
          explanation: 'Both tools separate authoring (Desktop) from viewing (a published, browser-accessible version), but with different default privacy.'
        },
        {
          id: 'tb-b-f-26',
          type: 'fill-blank',
          prompt: 'In Tableau, which sample dataset (used throughout this beginner track) does Tableau itself ship with for teaching purposes?',
          correctAnswers: ['sample superstore', 'superstore'],
          explanation: 'Sample Superstore is Tableau\'s long-standing built-in teaching dataset, used in countless official and community tutorials.'
        },
        {
          id: 'tb-b-f-27',
          type: 'fill-blank',
          prompt: 'Which card on the left of the canvas lets you add Color, Size, and Label to an existing chart by dragging a field onto it?',
          correctAnswers: ['marks', 'marks card'],
          explanation: 'The Marks card is where additional Measures or Dimensions get encoded visually onto an existing chart, via Color, Size, Label, and similar properties.'
        },
        {
          id: 'tb-b-f-28',
          type: 'mcq',
          prompt: 'A chart shows total Sales per Category. Which field is acting as the Dimension, and which as the Measure?',
          options: ['Category is the Measure; Sales is the Dimension', 'Category is the Dimension; Sales is the Measure', 'Both are Dimensions', 'Both are Measures'],
          answerIndex: 1,
          explanation: 'Category groups/categorises the data (Dimension); Sales is the number being aggregated (Measure).'
        },
        {
          id: 'tb-b-f-29',
          type: 'mcq',
          prompt: 'Why might switching a numeric field\'s aggregation from Sum to Average reveal a different business insight on the exact same chart?',
          options: ['It does not — the chart always looks identical regardless of aggregation', 'Sum shows total volume per category, while Average shows typical order size per category — two genuinely different, equally valid questions about the same underlying data', 'Average always produces a larger number than Sum', 'Switching aggregation requires rebuilding the chart from scratch'],
          answerIndex: 1,
          explanation: 'The same fields can answer different business questions depending on which aggregation is applied, without any new chart needed.'
        },
        {
          id: 'tb-b-f-30',
          type: 'mcq',
          prompt: 'Across this whole Beginner track — connecting data, building charts, filtering/grouping, and dashboards — what is the overall workflow this track teaches?',
          options: ['Writing SQL queries to manually generate every chart', 'Connect to data, visualise it by dragging fields rather than choosing chart types first, narrow and group it meaningfully, then combine multiple views into one connected, publishable dashboard', 'Only building maps, since that is Tableau\'s sole real use case', 'Memorising every possible chart type before touching real data'],
          answerIndex: 1,
          explanation: 'Connect, visualise, filter, combine, publish is the core repeatable workflow this entire track builds toward.'
        }
      ]
    },

    intermediate: {
      title: 'Tableau Intermediate — Final Assessment',
      intro: 'You have completed all 6 Tableau Intermediate modules: calculated fields, parameters, maps, LOD expressions, a mini project, and Story Points. These 30 questions test whether you can apply these tools to real analytical problems — not just recall definitions.',
      questions: [
        // ── Calculated Fields (Q1–8) ─────────────────────────────
        {
          id: 'tb-i-f-1',
          type: 'mcq',
          prompt: 'What does IIF([Sales]=0, 0, [Profit]/[Sales]) protect against that a plain [Profit]/[Sales] does not?',
          options: ['Negative profit values', 'Division-by-zero errors on rows where Sales is zero', 'Text fields being used as numbers', 'Null values in the Profit column'],
          answerIndex: 1,
          explanation: 'IIF checks the condition first; only when Sales ≠ 0 does it attempt the division. Plain division would produce NULL or an error on zero-sales rows.'
        },
        {
          id: 'tb-i-f-2',
          type: 'mcq',
          prompt: 'You want to flag any order shipped more than 5 days after it was placed. Which calculated field formula correctly creates this Boolean flag?',
          options: ['[Ship Date] - [Order Date] > 5', 'DATEDIFF("day", [Order Date], [Ship Date]) > 5', 'DATEPART("day", [Ship Date]) > 5', 'LEFT([Ship Date], 2) > 5'],
          answerIndex: 1,
          explanation: 'DATEDIFF("day", start, end) returns the integer number of days between two dates — the right tool for elapsed-time comparisons.'
        },
        {
          id: 'tb-i-f-3',
          type: 'mcq',
          prompt: 'A CASE statement in a calculated field matches one field against several known values. What is CASE most readable for compared to IF/ELSEIF?',
          options: ['CASE is faster to compute than IF', 'CASE is cleaner when one field maps to several discrete values — like converting a Ship Mode name to a priority number', 'CASE can handle ranges like >100, while IF cannot', 'CASE only works with numeric fields'],
          answerIndex: 1,
          explanation: 'CASE is semantically clearer when you are mapping one value to another — IF/ELSEIF is more flexible but more verbose for simple discrete mappings.'
        },
        {
          id: 'tb-i-f-4',
          type: 'mcq',
          prompt: 'What is RUNNING_SUM(SUM([Sales])) used for?',
          options: ['Computing the grand total of all Sales across the entire dataset', 'A cumulative (running) total that increases as you move across the axis — useful for YTD or cumulative revenue charts', 'Averaging Sales over a rolling window', 'Ranking each row from highest to lowest Sales'],
          answerIndex: 1,
          explanation: 'RUNNING_SUM is a table calculation that accumulates the aggregated value as it moves along the table — producing a typical cumulative line chart.'
        },
        {
          id: 'tb-i-f-5',
          type: 'fill-blank',
          prompt: 'The Tableau function that returns the number of days between two date fields is called ______.',
          correctAnswers: ['datediff', 'DATEDIFF'],
          explanation: 'DATEDIFF("day", start_date, end_date) is the standard function for computing elapsed time in Tableau.'
        },
        {
          id: 'tb-i-f-6',
          type: 'mcq',
          prompt: 'Where do you go to create a new calculated field in Tableau?',
          options: ['Analysis menu → Calculated Field', 'Right-click blank space in the Data pane → "Create Calculated Field"', 'Format menu → Calculations', 'File menu → New Calculation'],
          answerIndex: 1,
          explanation: 'Right-clicking blank space in the Data pane is the standard entry point for the calculated field dialog.'
        },
        {
          id: 'tb-i-f-7',
          type: 'mcq',
          prompt: 'In a table calculation like RANK(SUM([Profit])), what does "Compute Using" control?',
          options: ['Which data source the calculation reads from', 'The direction the table calculation traverses the view — across, down, or within a pane', 'Which color palette ranks use', 'Whether the calculation runs on published or draft workbooks only'],
          answerIndex: 1,
          explanation: '"Compute Using" tells Tableau the dimension over which RANK iterates. Getting this wrong (e.g., "Table Across" when you need "Table Down") produces incorrect rank values.'
        },
        {
          id: 'tb-i-f-8',
          type: 'mcq',
          prompt: 'You use CONTAINS([Product Name], "Chair") in a calculated field. What data type does this return?',
          options: ['Integer (0 or 1)', 'Boolean (True or False)', 'String ("Chair" or empty)', 'Float (0.0 or 1.0)'],
          answerIndex: 1,
          explanation: 'CONTAINS returns a Boolean — True if the string includes the search term, False otherwise. You can use Boolean fields directly on Color or Filters.'
        },

        // ── Parameters (Q9–15) ────────────────────────────────────
        {
          id: 'tb-i-f-9',
          type: 'mcq',
          prompt: 'A parameter on its own — with no calculated field or reference line referencing it — produces what visible effect on the dashboard?',
          options: ['It automatically filters the data to rows matching the parameter value', 'Nothing — a parameter is just a named variable; it does nothing until referenced in a calc, filter, or reference line', 'It updates the dashboard title automatically', 'It removes null values from the view'],
          answerIndex: 1,
          explanation: 'Parameters store a value. Only when another object (a calc or reference line) reads that value does the parameter influence the view.'
        },
        {
          id: 'tb-i-f-10',
          type: 'mcq',
          prompt: 'To build a "Top N Products" bar chart where the user picks N with a slider, what must you place on the Filters shelf?',
          options: ['The parameter itself, set to "True"', 'A calculated field like RANK(SUM([Sales])) <= [Top N], filtered to True', 'A date range filter limiting rows to the top N dates', 'A dimension filter selecting the first N product names alphabetically'],
          answerIndex: 1,
          explanation: 'RANK computes the position of each product. Filtering to RANK <= [Top N] keeps exactly the top-N rows — fewer or more as the user moves the slider.'
        },
        {
          id: 'tb-i-f-11',
          type: 'mcq',
          prompt: 'How do you make a parameter control interactive for dashboard viewers?',
          options: ['Parameters are always visible once created', 'Right-click the parameter in the Data pane → "Show Parameter"', 'Drag the parameter onto the Columns shelf', 'Add the parameter to the Filters shelf'],
          answerIndex: 1,
          explanation: '"Show Parameter" adds a visible UI control (slider or dropdown) to the canvas that viewers can interact with.'
        },
        {
          id: 'tb-i-f-12',
          type: 'fill-blank',
          prompt: 'To let users choose which measure to display (Sales, Profit, or Quantity), the calculated field that reads the parameter and returns the right aggregation uses a ______ statement.',
          correctAnswers: ['case', 'CASE', 'case statement', 'CASE statement'],
          explanation: 'CASE [Metric Selector] WHEN "Sales" THEN SUM([Sales]) … END maps each string option to its corresponding aggregation cleanly.'
        },
        {
          id: 'tb-i-f-13',
          type: 'mcq',
          prompt: 'A product manager wants a reference line on a monthly sales chart that moves as she drags a "Sales Target" slider. What is the correct setup?',
          options: ['Hardcode the reference line value to the current target in the reference line dialog', 'Create a Float parameter "Sales Target", then configure Analytics → Reference Line → set value to the parameter', 'Reference lines cannot be connected to parameters', 'Use a calculated field placed on Rows — reference lines are only for formatting'],
          answerIndex: 1,
          explanation: 'In the Reference Line dialog, set the value source to "Parameter" and choose your parameter. The line repositions live as the user changes the slider.'
        },
        {
          id: 'tb-i-f-14',
          type: 'mcq',
          prompt: 'What allowable values setting would you use for a parameter where users must choose from exactly three named options ("East", "West", "Central")?',
          options: ['All — so they can type anything', 'List — define the exact three string values; a dropdown or radio buttons will appear', 'Range — min 1, max 3, step 1', 'Boolean — True/False only'],
          answerIndex: 1,
          explanation: '"List" creates a discrete dropdown of exactly the values you define. Range is for numeric sliding. All allows free text input.'
        },
        {
          id: 'tb-i-f-15',
          type: 'mcq',
          prompt: 'Why is a parameter-driven measure switcher preferable to duplicating the same chart three times for Sales, Profit, and Quantity separately?',
          options: ['Duplicate charts are not allowed in Tableau', 'One chart with a measure switcher is smaller, easier to maintain, and keeps the dashboard layout cleaner — changing the metric requires zero layout changes', 'Parameters load data faster than three separate charts', 'Duplicate charts break when published to Tableau Public'],
          answerIndex: 1,
          explanation: 'Maintainability is the main argument — one calc to update instead of three charts. Keeping the layout simple is an added dashboard design benefit.'
        },

        // ── Maps (Q16–21) ────────────────────────────────────────
        {
          id: 'tb-i-f-16',
          type: 'mcq',
          prompt: 'Why might a state show as a grey "unknown" patch on a Tableau filled map?',
          options: ['Tableau cannot render more than 48 states at once', 'The value in the data does not match Tableau\'s internal spelling — use Map → Edit Locations to manually remap it', 'Grey means the state has zero revenue', 'Grey patches indicate the filter is excluding those states'],
          answerIndex: 1,
          explanation: 'Tableau\'s geocoding matches on exact string values. A mismatch (e.g., "Calif." vs "California") leaves the state unmatched and renders it grey.'
        },
        {
          id: 'tb-i-f-17',
          type: 'mcq',
          prompt: 'On a symbol map, you put Sales on Size and Profit on Color with a red-white-green diverging palette centred at 0. A large red bubble represents what?',
          options: ['A location with low sales and high profit', 'A location with high sales volume and negative profit — high-revenue but loss-making', 'A location with old data that has not refreshed', 'A location that has been manually flagged for deletion'],
          answerIndex: 1,
          explanation: 'Large = high Sales. Red = negative Profit. Together they identify your highest-revenue loss-making locations — the most urgent intervention targets.'
        },
        {
          id: 'tb-i-f-18',
          type: 'mcq',
          prompt: 'What technique allows you to show both filled state polygons AND city-level circles on the same Tableau map simultaneously?',
          options: ['Creating two separate map sheets and linking them with a dashboard action', 'A dual-axis map — duplicating the Latitude pill and setting "Dual Axis" on the second copy, giving two independent Marks layers on one map', 'Using the Map Layers panel to toggle polygon fills on and off', 'Tableau cannot overlay two mark types on the same map'],
          answerIndex: 1,
          explanation: 'Dual-axis maps merge two map layers into one canvas. Each layer has its own Marks card, allowing polygon fills and circle marks to coexist on the same geographic view.'
        },
        {
          id: 'tb-i-f-19',
          type: 'mcq',
          prompt: 'Your data contains the exact GPS coordinates of 300 delivery depots not in Tableau\'s geocoding database. How do you plot them?',
          options: ['You cannot plot non-standard locations in Tableau', 'Include Latitude and Longitude as numeric columns, assign each the Geographic Role of Latitude/Longitude, then drag them to Rows/Columns', 'Use the Custom Territories feature under Map menu', 'Import a KML shapefile for each depot'],
          answerIndex: 1,
          explanation: 'Explicit lat/long columns are Tableau\'s universal escape hatch for any location not in the built-in geocoding database. Assign the roles, drag to shelves, done.'
        },
        {
          id: 'tb-i-f-20',
          type: 'fill-blank',
          prompt: 'The two primary map types in Tableau are symbol maps (circles at geographic points) and ______ maps (shaded polygons at country/state level).',
          correctAnswers: ['filled', 'filled map', 'choropleth'],
          explanation: 'Filled maps shade entire geographic polygons — they work best at country and state level where polygon boundaries exist in Tableau\'s geocoding database.'
        },
        {
          id: 'tb-i-f-21',
          type: 'mcq',
          prompt: 'You want to add an interactive country filter so viewers can click a country on a map and filter all other sheets on the dashboard. What is the correct mechanism?',
          options: ['Drag Country to the Filters shelf on every sheet individually', 'Create a Dashboard Action: Filter → source sheet (the map) → target sheets (all others) → filtering field: Country', 'Right-click the Country field → "Apply to all sheets"', 'Dashboard Actions only work with bar charts, not maps'],
          answerIndex: 1,
          explanation: 'Dashboard Actions connect sheets — a Filter Action on the map triggers a filter on all specified target sheets whenever the user clicks a mark.'
        },

        // ── LOD Expressions (Q22–28) ─────────────────────────────
        {
          id: 'tb-i-f-22',
          type: 'mcq',
          prompt: 'What does { FIXED [Region] : SUM([Sales]) } return?',
          options: ['The average sales per Region', 'The total Sales per Region, computed independently of whatever other dimensions are currently in the view', 'The sales for whichever Region is currently filtered to', 'The running total of sales ordered by Region'],
          answerIndex: 1,
          explanation: 'FIXED pins the aggregation to the specified dimensions. Even if your view also has Category, the FIXED expression still returns the Region total — not the Region-Category subtotal.'
        },
        {
          id: 'tb-i-f-23',
          type: 'mcq',
          prompt: 'You want to compute % share of each Sub-Category within its own Category. Which LOD correctly calculates the Category subtotal to use as the denominator?',
          options: ['{ FIXED [Sub-Category] : SUM([Sales]) }', '{ EXCLUDE [Sub-Category] : SUM([Sales]) }', '{ INCLUDE [Category] : SUM([Sales]) }', 'SUM([Sales]) / TOTAL(SUM([Sales]))'],
          answerIndex: 1,
          explanation: 'EXCLUDE [Sub-Category] removes Sub-Category from the aggregation while keeping Category — producing exactly the Category subtotal needed for a within-category % calculation.'
        },
        {
          id: 'tb-i-f-24',
          type: 'mcq',
          prompt: 'Why is AVG({ INCLUDE [Customer ID] : SUM([Sales]) }) the correct formula for "average spend per customer" rather than AVG([Sales])?',
          options: ['AVG() cannot be used directly on Sales', 'AVG([Sales]) averages individual order rows; the INCLUDE version sums each customer\'s total first, then averages those per-customer sums — giving true average customer value', 'INCLUDE automatically applies to every dimension in the view', 'AVG([Sales]) and the INCLUDE formula always produce the same result'],
          answerIndex: 1,
          explanation: 'The distinction is sum-then-average vs. average-directly. A customer with 10 small orders vs. 1 large order should not be weighted the same — the INCLUDE approach computes the correct per-customer total before averaging.'
        },
        {
          id: 'tb-i-f-25',
          type: 'mcq',
          prompt: 'In Tableau\'s order of operations, when is a FIXED LOD expression computed relative to dimension filters on the Filters shelf?',
          options: ['After all dimension filters — so filters always affect FIXED LODs', 'Before dimension filters — so a dimension filter on the Filters shelf does NOT affect a FIXED LOD by default', 'At exactly the same time as dimension filters', 'Only after the workbook is published'],
          answerIndex: 1,
          explanation: 'FIXED LODs are computed at step 4 in Tableau\'s pipeline; dimension filters apply at step 5. To make a dimension filter affect a FIXED LOD, you must promote it to a Context Filter.'
        },
        {
          id: 'tb-i-f-26',
          type: 'mcq',
          prompt: 'What does { FIXED : SUM([Sales]) } compute? (Note: no dimension specified inside FIXED.)',
          options: ['An error — FIXED requires at least one dimension', 'The grand total of all Sales across the entire dataset — a blank FIXED aggregates over everything', 'The average Sales per row', 'The maximum Sales value in the dataset'],
          answerIndex: 1,
          explanation: 'An empty FIXED collapses to a single value for the whole dataset — useful as the denominator in "% of grand total" calculations: SUM([Sales]) / { FIXED : SUM([Sales]) }.'
        },
        {
          id: 'tb-i-f-27',
          type: 'mcq',
          prompt: 'You apply a dimension filter for Region = "West" on the Filters shelf. Your FIXED LOD uses [Region]. The FIXED value looks wrong. What should you check?',
          options: ['Rebuild the LOD from scratch — FIXED does not support Region', 'Promote the Region filter to a Context Filter (right-click → Add to Context) so it executes before the FIXED LOD', 'Change FIXED to INCLUDE', 'Clear the filter and use a table calculation instead'],
          answerIndex: 1,
          explanation: 'Context Filters execute before FIXED LODs. Without Context status, the dimension filter applies after FIXED and cannot narrow what FIXED aggregates over.'
        },
        {
          id: 'tb-i-f-28',
          type: 'fill-blank',
          prompt: 'The LOD type that adds an extra dimension to the aggregation on top of what is already in the view is called ______.',
          correctAnswers: ['include', 'INCLUDE'],
          explanation: 'INCLUDE adds dimensions, EXCLUDE removes them, FIXED ignores the view entirely. INCLUDE is used when you need a finer-grained sub-aggregate (like per-customer sums) as input to a further calculation.'
        },

        // ── Story Points + Integration (Q29–30) ──────────────────
        {
          id: 'tb-i-f-29',
          type: 'mcq',
          prompt: 'What is the key structural difference between a Tableau Dashboard and a Tableau Story?',
          options: ['Dashboards can only have one sheet; Stories can have many', 'A Dashboard shows multiple views spatially (everything at once); a Story is sequential — one view per story point with a caption, guiding the audience through a narrative', 'Stories can only be viewed on Tableau Server', 'Dashboards cannot be published to Tableau Public, but Stories can'],
          answerIndex: 1,
          explanation: 'Dashboards are spatial (parallel views for simultaneous comparison); Stories are sequential (guided slide-by-slide narratives). Each serves a different communication goal.'
        },
        {
          id: 'tb-i-f-30',
          type: 'mcq',
          prompt: 'Across this entire Tableau Intermediate track — calculated fields, parameters, maps, LOD expressions — what is the common capability they all share?',
          options: ['They all require a connection to Tableau Server to function', 'They all let you go beyond what the raw source data directly provides — creating new logic, user controls, geographic context, and custom aggregation levels that answer more precise business questions', 'They are all exclusively for visual formatting with no analytical value', 'They all require writing SQL before Tableau can use them'],
          answerIndex: 1,
          explanation: 'The intermediate track is about extending Tableau\'s reach: calcs add logic, parameters add interactivity, maps add geographic context, LODs add aggregation control — together they unlock answers the raw data alone cannot give.'
        }
      ]
    },

    advanced: {
      title: 'Tableau Advanced — Final Assessment',
      intro: 'You have completed all 6 Tableau Advanced modules: advanced LOD patterns, table calculations, Sets and Set Actions, performance tuning, a retention analytics mini project, and Tableau Cloud/Server deployment. These 30 questions test whether you can apply these tools to real enterprise-level problems.',
      questions: [
        // ── Advanced LOD (Q1–8) ──────────────────────────────────
        {
          id: 'tb-a-f-1',
          type: 'mcq',
          prompt: 'In cohort retention analysis, what does "Cohort Age = 0" represent for a customer?',
          options: ['The customer has been inactive for 0 months', 'The customer\'s acquisition month — their first order month, when distance from first purchase to current date is zero', 'The customer placed 0 orders this month', 'A placeholder for customers with no assigned cohort'],
          answerIndex: 1,
          explanation: 'Cohort Age = DATEDIFF("month", First Order Month, current month). At Age 0, the current month equals the first order month — the acquisition period. Every customer appears at Age 0 exactly once.'
        },
        {
          id: 'tb-a-f-2',
          type: 'mcq',
          prompt: 'What does LOOKUP(COUNTD([Customer ID]), FIRST()) compute when used as a retention % denominator?',
          options: ['The total distinct customers in the entire dataset', 'The count of distinct customers in the first column of the current partition — the cohort\'s starting size at Cohort Age 0', 'The customer count in the last row of the view', 'The average customer count across all cohort ages'],
          answerIndex: 1,
          explanation: 'FIRST() returns the distance to the first position in the partition. LOOKUP(…, FIRST()) fetches the value from that first position — the Age-0 (acquisition) count for this cohort row.'
        },
        {
          id: 'tb-a-f-3',
          type: 'mcq',
          prompt: 'You compute Customer Revenue = { FIXED [Customer ID] : SUM([Sales]) } and then write RANK_UNIQUE([Customer Revenue]). What is this pattern called?',
          options: ['A parameter expression', 'A nested LOD — the output of a FIXED LOD used as the input to a rank function, composing two computation levels', 'A combined set expression', 'A table calculation referencing a dimension'],
          answerIndex: 1,
          explanation: 'Nesting means one LOD\'s output feeds into another computation. FIXED produces per-customer totals; RANK_UNIQUE then ranks those totals — two-layer composition.'
        },
        {
          id: 'tb-a-f-4',
          type: 'fill-blank',
          prompt: 'An empty FIXED LOD — { FIXED : SUM([Sales]) } — returns the ______ of Sales across the entire dataset.',
          correctAnswers: ['grand total', 'total', 'sum'],
          explanation: 'With no dimension specified, FIXED aggregates over everything — producing a single grand total value stamped on every row.'
        },
        {
          id: 'tb-a-f-5',
          type: 'mcq',
          prompt: 'You apply a Region filter on the Filters shelf and your FIXED LOD still shows the full-dataset total instead of the filtered total. What is the correct fix?',
          options: ['Change FIXED to INCLUDE', 'Promote the Region filter to a Context Filter — FIXED LODs execute before dimension filters, but after Context Filters', 'Delete and recreate the LOD after applying the filter', 'FIXED LODs cannot be used with dimension filters at all'],
          answerIndex: 1,
          explanation: 'In Tableau\'s order of operations, FIXED runs before dimension filters. Promoting to Context moves the filter earlier in the pipeline, so FIXED sees only the filtered rows.'
        },
        {
          id: 'tb-a-f-6',
          type: 'mcq',
          prompt: 'For a "Top 10% of customers by revenue" flag, you need the total distinct customer count. Which LOD gives the full count independent of any dimension in the view?',
          options: ['{ INCLUDE [Customer ID] : COUNTD([Customer ID]) }', '{ FIXED : COUNTD([Customer ID]) }', 'TOTAL(COUNTD([Customer ID]))', 'WINDOW_COUNT(COUNTD([Customer ID]), FIRST(), LAST())'],
          answerIndex: 1,
          explanation: 'Empty FIXED collapses across the full dataset. TOTAL() is view-dependent and changes with filters. The 10% threshold must use the true total, not the filtered view.'
        },
        {
          id: 'tb-a-f-7',
          type: 'mcq',
          prompt: 'What does { FIXED DATETRUNC("month", DATEADD("year", -1, [Order Date])) : SUM([Sales]) } compute?',
          options: ['The sales for the current month, shifted forward one year', 'The total sales for the same calendar month one year ago — the prior-year equivalent for each row\'s date', 'The average monthly sales across all years', 'The maximum sales in any single prior-year month'],
          answerIndex: 1,
          explanation: 'DATEADD("year",-1,…) shifts each date back one year. DATETRUNC("month",…) truncates to month start. FIXED on that result = prior-year monthly total.'
        },
        {
          id: 'tb-a-f-8',
          type: 'mcq',
          prompt: 'A cohort retention heatmap shows Retention % exceeding 100% in some cells. What is the most likely cause?',
          options: ['Retention can legitimately exceed 100% when new customers join the cohort later', 'The LOOKUP(…, FIRST()) denominator is offset incorrectly, pulling a smaller number than the true Age-0 count', 'Retention % should be multiplied by 100 before display', 'The cohort age calculation uses DATEADD instead of DATEDIFF'],
          answerIndex: 1,
          explanation: 'If FIRST() is misapplied (wrong partition direction), LOOKUP fetches a smaller number than the true starting cohort size, making later ages appear to exceed 100%. Fix partitioning and addressing.'
        },

        // ── Advanced Table Calculations (Q9–15) ──────────────────
        {
          id: 'tb-a-f-9',
          type: 'mcq',
          prompt: 'WINDOW_AVG(SUM([Sales]), -2, 0) on a monthly bar chart computes what?',
          options: ['The total sales over all months', 'A 3-month moving average — averaging the current month plus the two months before it', 'A 2-month forecast of future sales', 'A running cumulative average from the first month to the current one'],
          answerIndex: 1,
          explanation: '-2 means 2 positions before the current row; 0 means the current row. WINDOW_AVG across those 3 positions = trailing 3-month moving average.'
        },
        {
          id: 'tb-a-f-10',
          type: 'mcq',
          prompt: 'What does LOOKUP(SUM([Sales]), -1) return for the very first row in a table partition?',
          options: ['0 — LOOKUP defaults to zero when no prior row exists', 'NULL — there is no row at offset -1 from the first row', 'The grand total Sales value', 'The same value as the current row'],
          answerIndex: 1,
          explanation: 'No row exists one position before the first row. LOOKUP returns NULL. Always handle this with ISNULL() or ZN() in MoM % change calculations.'
        },
        {
          id: 'tb-a-f-11',
          type: 'mcq',
          prompt: 'You want to label only the last data point on a line chart with its value. Which calculated field achieves this?',
          options: ['IF FIRST() = 0 THEN SUM([Sales]) END', 'IF LAST() = 0 THEN SUM([Sales]) END', 'IF INDEX() = 1 THEN SUM([Sales]) END', 'LOOKUP(SUM([Sales]), LAST())'],
          answerIndex: 1,
          explanation: 'LAST() = 0 is true only at the final row in the partition. Placing this calc on the Label shelf produces a label exclusively on the last chart point.'
        },
        {
          id: 'tb-a-f-12',
          type: 'fill-blank',
          prompt: 'In a table calculation, the dimension the calculation moves along (e.g., Month) is called the ______ dimension.',
          correctAnswers: ['addressing', 'address'],
          explanation: 'Addressing is the direction of travel. The partitioning dimension restarts the calculation. "Compute Using → Specific Dimensions" lets you control both precisely.'
        },
        {
          id: 'tb-a-f-13',
          type: 'mcq',
          prompt: 'Why does SUM([Sales]) / TOTAL(SUM([Sales])) change when a quick filter is applied, while SUM([Sales]) / { FIXED : SUM([Sales]) } does not?',
          options: ['TOTAL() is a calculated field; FIXED is a measure — different computation types', 'TOTAL() sums what is currently visible in the view (respects filters); FIXED was computed before the filter was applied and does not change unless the filter is a Context Filter', 'The formulas use different rounding methods', 'They are always identical — there is no difference'],
          answerIndex: 1,
          explanation: 'TOTAL() is a table calc running on the visible aggregated values — it changes as filters change. FIXED LODs execute earlier in the pipeline, before dimension filters.'
        },
        {
          id: 'tb-a-f-14',
          type: 'mcq',
          prompt: 'What does INDEX() % 2 = 0 produce when dragged onto Color in a text table?',
          options: ['Highlights every row where Sales is even', 'Alternating True/False values as rows increase — creating a zebra-stripe row colour effect', 'A filter removing every other row from the view', 'A percentage of every-other-row\'s share of total'],
          answerIndex: 1,
          explanation: 'INDEX() gives the 1-based row position. Modulo 2 alternates between 1 and 0. As a Boolean on Color, this creates the classic alternating-row readability pattern.'
        },
        {
          id: 'tb-a-f-15',
          type: 'mcq',
          prompt: 'What does SIZE() return inside a table calculation?',
          options: ['The number of marks on the entire canvas', 'The total number of rows in the current table partition', 'The file size of the workbook in megabytes', 'The number of distinct values in the Dimension on Color'],
          answerIndex: 1,
          explanation: 'SIZE() counts rows in the current partition. Combined with INDEX(), it enables midpoint labelling: INDEX() = INT(SIZE()/2).'
        },

        // ── Sets and Set Actions (Q16–21) ────────────────────────
        {
          id: 'tb-a-f-16',
          type: 'mcq',
          prompt: 'A condition-based Set uses SUM([Sales]) >= 5000. When the extract is refreshed with new data, what happens to the set membership?',
          options: ['The set keeps the same members as when it was first created', 'The set re-evaluates the condition against the new data — membership updates automatically to reflect which customers now exceed the threshold', 'You must manually recreate the set after each refresh', 'The set membership is locked for 30 days after creation'],
          answerIndex: 1,
          explanation: 'Condition-based Sets are dynamic — they re-evaluate on each extract refresh. This is the key advantage over Groups, which are permanently static once defined.'
        },
        {
          id: 'tb-a-f-17',
          type: 'mcq',
          prompt: 'A Set Action is configured with "Clearing the selection: Keep set values." What happens when the user clicks on empty canvas?',
          options: ['The set empties and downstream charts show all data', 'The set retains the last selected member(s) — no automatic reset occurs', 'The entire dashboard resets to its default state', 'The workbook closes and must be reopened'],
          answerIndex: 1,
          explanation: '"Keep set values" persists the last selection. Users must click a different mark or use a dedicated Reset button to change the set. Contrast with "Remove all values," which auto-resets on deselection.'
        },
        {
          id: 'tb-a-f-18',
          type: 'mcq',
          prompt: 'Combined Set: "Top 10 by Sales" EXCEPT "Top 10 by Profit." Which products appear?',
          options: ['Products in the top 10 by both Sales and Profit', 'Products with high revenue (top-10 Sales) but NOT in the top-10 Profit — margin-problem candidates', 'Products outside both top-10 lists entirely', 'The bottom 10 products by both metrics'],
          answerIndex: 1,
          explanation: 'Set A EXCEPT Set B = members of A not in B. High-revenue products outside the profit top-10 are the ones generating revenue without generating equivalent profit.'
        },
        {
          id: 'tb-a-f-19',
          type: 'mcq',
          prompt: 'Why is a Set Action with Opacity encoding preferable to a Filter Action for a "compare this sub-category to all others" use case?',
          options: ['Set Actions load faster than Filter Actions on large datasets', 'Set Actions dim non-selected marks (keeping them visible for comparison); Filter Actions remove non-selected marks entirely, hiding the comparison baseline', 'Filter Actions do not support Sub-Category as a field', 'Set Actions apply globally; Filter Actions only apply to one sheet'],
          answerIndex: 1,
          explanation: 'Comparing requires seeing both the selected item and the rest. Dimming keeps the full picture visible. Hiding (Filter Action) removes the context needed for meaningful comparison.'
        },
        {
          id: 'tb-a-f-20',
          type: 'fill-blank',
          prompt: 'To create a Set that automatically includes only customers whose total lifetime sales exceed $5000, you use the ______ tab in the Set creation dialog.',
          correctAnswers: ['condition', 'Condition'],
          explanation: 'The Condition tab accepts a formula or field-level aggregation (SUM([Sales]) >= 5000). General is for manual member selection; Top is for ranking-based selection.'
        },
        {
          id: 'tb-a-f-21',
          type: 'mcq',
          prompt: 'You configure a Set Action and test it on the individual source sheet — it does not appear to do anything. What is the issue?',
          options: ['The Set Action needs to be published to Tableau Cloud before it activates', 'Set Actions only fire in dashboard context — they are dashboard-level features and will not trigger on individual sheet previews', 'The Set Action requires a LOD expression to be wired up before it works', 'Set Actions are only supported in Tableau Server, not Tableau Desktop or Public'],
          answerIndex: 1,
          explanation: 'Set Actions are defined in Dashboard → Actions and only execute when a user interacts with a mark on a dashboard. Sheet-level preview does not trigger dashboard actions.'
        },

        // ── Performance, Custom SQL, Prep (Q22–27) ───────────────
        {
          id: 'tb-a-f-22',
          type: 'mcq',
          prompt: 'Performance Recording shows "Querying" accounts for 85% of load time. What is the most effective first fix?',
          options: ['Reduce the number of colour shades in the workbook', 'Switch from Live to Extract — eliminating repeated database round-trips on each user interaction', 'Move all sheets from dashboards to individual tabs', 'Add more calculated fields to pre-compute values'],
          answerIndex: 1,
          explanation: 'Querying bottleneck = the database (or network) is the slowest component. An Extract caches data in a local Hyper column-store. Subsequent interactions read from the fast cache, not the database.'
        },
        {
          id: 'tb-a-f-23',
          type: 'mcq',
          prompt: 'A Custom SQL is used as a Live data source. Every filter takes 6 seconds. What is the root cause?',
          options: ['Custom SQL is unsupported as a Live data source', 'The Custom SQL query re-executes against the database on every user interaction — the full query fires each time a filter changes', 'Tableau cannot display more than 10,000 rows from Custom SQL', 'The SQL WHERE clause is missing'],
          answerIndex: 1,
          explanation: 'Custom SQL on Live fires a full DB query on every interaction. Switching to Extract: the SQL runs once at refresh time, then all interactions read from local Hyper cache.'
        },
        {
          id: 'tb-a-f-24',
          type: 'mcq',
          prompt: 'What does an Incremental Refresh do for a large extract on Tableau Cloud?',
          options: ['Refreshes only specific sheets instead of all sheets', 'Fetches only rows added since the last refresh, appending them to the existing extract without re-downloading the full table', 'Reduces the colour palette to speed up visual refresh', 'Automatically deletes rows older than 12 months from the extract'],
          answerIndex: 1,
          explanation: 'Incremental Refresh uses a date/ID column to identify new rows and appends only those. For tables with millions of rows that grow daily, this is dramatically faster than a full refresh.'
        },
        {
          id: 'tb-a-f-25',
          type: 'mcq',
          prompt: 'You have 500,000 order lines but the dashboard only shows Region × Category totals (12 combinations). What Tableau Prep node reduces the data to 12 rows before extraction?',
          options: ['Input filter on Order Date', 'Aggregate node — grouping by Region and Category, summing Sales and Profit', 'Join node combining two input flows', 'Clean node removing null values'],
          answerIndex: 1,
          explanation: 'The Aggregate node in Prep collapses the data to a specified group-by grain and applies aggregation functions. 4 regions × 3 categories = 12 rows output — exactly what the dashboard needs.'
        },
        {
          id: 'tb-a-f-26',
          type: 'mcq',
          prompt: 'What does Density mark type solve on a scatter plot with 200,000 data points?',
          options: ['It converts the scatter to a bar chart automatically', 'It aggregates overlapping points into a heatmap — showing where clusters concentrate without reducing the underlying data', 'It increases the rendering speed by hiding marks behind the axis', 'It converts the data source to a smaller extract automatically'],
          answerIndex: 1,
          explanation: 'Density marks bin and visually aggregate overlapping points. 200K points becomes a smooth heatmap — readable, performant, and showing cluster structure instead of a black blob.'
        },
        {
          id: 'tb-a-f-27',
          type: 'mcq',
          prompt: 'What is the primary purpose of a data source filter?',
          options: ['To add visual filter controls to every sheet automatically', 'To remove rows from what Tableau processes at connection time — reducing data volume before any sheet-level query, calc, or render step', 'To convert the connection from Live to Extract', 'To restrict certain users from accessing specific columns'],
          answerIndex: 1,
          explanation: 'Data source filters execute at connection time — the earliest possible stage. Every downstream operation works on fewer rows, compounding the performance benefit across every sheet and dashboard.'
        },

        // ── Deployment and Embedding (Q28–30) ────────────────────
        {
          id: 'tb-a-f-28',
          type: 'mcq',
          prompt: '2 people publish workbooks, 10 explore data, 200 only view. What is the correct Tableau Cloud licence mix?',
          options: ['212 Creator licences', '2 Creator + 10 Explorer + 200 Viewer licences', '2 Creator + 210 Viewer licences', '212 Viewer licences — cheapest option'],
          answerIndex: 1,
          explanation: 'Creators: publish and build data sources. Explorers: create ad-hoc views from existing published data sources. Viewers: view-only. Matching role to licence minimises cost while preserving capability.'
        },
        {
          id: 'tb-a-f-29',
          type: 'mcq',
          prompt: 'What does USERNAME() enable when used in a Row Level Security calculated field on Tableau Cloud?',
          options: ['It displays the Tableau version number in the view', 'It returns the logged-in viewer\'s email address, enabling dynamic RLS where each user automatically sees only rows matching their identity — without manual user-to-data mapping in Tableau', 'It auto-fills the dashboard title with the user\'s name', 'It restricts PDF export access to specific users'],
          answerIndex: 1,
          explanation: 'USERNAME() on Tableau Cloud = the viewer\'s email. Filter [Allowed Email] = USERNAME() and each user sees only their rows. Adding new users means updating the data, not reconfiguring Tableau.'
        },
        {
          id: 'tb-a-f-30',
          type: 'mcq',
          prompt: 'Across this entire Tableau Advanced track — LODs, table calcs, Sets, performance, deployment — what unifying capability do they all extend?',
          options: ['They all require Tableau Server to function — none work in Tableau Public', 'Each removes a different ceiling: LODs and table calcs deepen analytical power; Sets enable live interactivity; performance tuning makes it scale; Cloud/Server/API makes it organisational — together they complete Tableau as an enterprise platform', 'The advanced track focuses solely on visual design and colour theory', 'Advanced features are only needed for workbooks exceeding 1 million rows'],
          answerIndex: 1,
          explanation: 'Advanced Tableau is about removing limits at every layer: analytical depth, interactive dynamism, performance at scale, and enterprise reach. Each module lifts a ceiling the previous track left in place.'
        }
      ]
    }
  },

  statistics: {
    beginner: {
      title: 'Statistics for Data — Beginner Track Practice',
      description: 'Descriptive stats, probability, distributions, and hypothesis testing',
      questions: [
        { id: 'q1', type: 'mcq', prompt: 'A dataset of 10 employees has salaries: 9 employees at ₹5L and 1 CEO at ₹200L. The mean is ₹23.5L and the median is ₹5L. Which metric best represents the "typical" employee?', options: ['Mean (₹23.5L)', 'Median (₹5L)', 'They are equally valid', 'The standard deviation'], answerIndex: 1, explanation: 'The CEO\'s extreme salary pulls the mean far above what any typical employee earns. Median is resistant to outliers and represents the "middle" employee.' },
        { id: 'q2', type: 'mcq', prompt: 'Skewness of +2.4 in a salary dataset means:', options: ['Most salaries are very high', 'There is a long right tail — a few very high earners pull the mean above the median', 'The distribution is bimodal', 'Mean equals median'], answerIndex: 1, explanation: 'Positive skewness = right-skewed = long tail on the right side. High earners are outliers pulling the mean rightward. In right-skewed data, mean > median.' },
        { id: 'q3', type: 'mcq', prompt: 'Q1=20, Q3=40. Using the Tukey method, what is the upper fence for outlier detection?', options: ['60', '70', '50', '80'], answerIndex: 1, explanation: 'IQR = Q3 − Q1 = 20. Upper fence = Q3 + 1.5×IQR = 40 + 30 = 70. Values above 70 are classified as outliers.' },
        { id: 'q4', type: 'fill', prompt: 'Standard deviation is the ________ root of variance.', answer: 'square', explanation: 'Variance = average squared deviation. Standard deviation = √variance, returning values to the original units.' },
        { id: 'q5', type: 'mcq', prompt: 'Which chart is most appropriate for comparing salary distributions across 4 different departments?', options: ['Pie chart', 'Single combined histogram', 'Side-by-side box plots', 'Stacked bar chart'], answerIndex: 2, explanation: 'Box plots show median, IQR, whiskers, and outliers simultaneously for each group. They make distributional comparison across groups easy at a glance.' },
        { id: 'q6', type: 'mcq', prompt: 'Anscombe\'s Quartet teaches that:', options: ['Larger datasets are more accurate', 'Four datasets with identical summary statistics can have completely different shapes — always visualise', 'The mean and median are always reliable', 'Standard deviation is the best measure of spread'], answerIndex: 1, explanation: 'Anscombe\'s Quartet: four datasets share the same mean, variance, and correlation yet look radically different when plotted. This proves summary statistics alone can be dangerously misleading.' },
        { id: 'q7', type: 'mcq', prompt: 'P(A) = 0.6, P(B) = 0.4, P(A and B) = 0.25. What is P(A or B)?', options: ['1.0', '0.75', '0.24', '0.85'], answerIndex: 1, explanation: 'Addition rule: P(A or B) = P(A) + P(B) − P(A and B) = 0.6 + 0.4 − 0.25 = 0.75.' },
        { id: 'q8', type: 'fill', prompt: 'The probability that you do NOT get heads on a single coin flip is ________%.', answer: '50', explanation: 'P(not heads) = 1 − P(heads) = 1 − 0.5 = 0.5 = 50%. The complement rule: P(not A) = 1 − P(A).' },
        { id: 'q9', type: 'mcq', prompt: 'A disease affects 2% of the population. A test is 95% sensitive (true positive rate) and has a 5% false positive rate. If you test positive, the probability you have the disease is approximately:', options: ['95%', '50%', '28%', '2%'], answerIndex: 2, explanation: 'Bayes\' theorem: P(Disease|Pos) = 0.95×0.02 / (0.95×0.02 + 0.05×0.98) ≈ 0.019/0.068 ≈ 28%. Rare base rate makes most positives false alarms.' },
        { id: 'q10', type: 'mcq', prompt: '68% of data falls within how many standard deviations of the mean in a normal distribution?', options: ['2', '1', '3', '0.5'], answerIndex: 1, explanation: 'The 68-95-99.7 rule: 68% within ±1 SD, 95% within ±2 SD, 99.7% within ±3 SD.' },
        { id: 'q11', type: 'mcq', prompt: 'A student scores 90 on a test with mean=75, SD=10. Their z-score is:', options: ['0.75', '1.5', '9', '0.90'], answerIndex: 1, explanation: 'z = (90 − 75) / 10 = 1.5. The student scored 1.5 standard deviations above the mean, placing them around the 93rd percentile.' },
        { id: 'q12', type: 'fill', prompt: 'The Binomial distribution counts the number of ________ in n independent trials.', answer: 'successes', explanation: 'Binomial(n, p) models the number of successes in n independent trials each with probability p. E.g., number of conversions in 20 website visitors.' },
        { id: 'q13', type: 'mcq', prompt: 'Which distribution models "number of customers arriving per hour at a bank" (averaging 8/hour)?', options: ['Normal', 'Binomial', 'Poisson', 'Uniform'], answerIndex: 2, explanation: 'Poisson models counts of rare, independent events per fixed interval. λ=8 arrivals/hour. Customers arrive independently and the average rate is stable.' },
        { id: 'q14', type: 'mcq', prompt: 'In hypothesis testing, the null hypothesis (H₀) represents:', options: ['The result you hope to prove', 'The boring baseline — no effect, any difference is random noise', 'The 95% confidence level', 'The p-value threshold'], answerIndex: 1, explanation: 'H₀ is always the conservative "nothing happened" claim. You try to gather enough evidence to reject it. You can never "prove" H₀ — only fail to reject it.' },
        { id: 'q15', type: 'mcq', prompt: 'A t-test returns p=0.02. At α=0.05, you:', options: ['Fail to reject H₀', 'Reject H₀ — result is statistically significant', 'Accept H₁ as proven true', 'Need a larger sample'], answerIndex: 1, explanation: 'p=0.02 < α=0.05. You reject H₀. The result is statistically significant — it\'s unlikely to have occurred by chance alone if H₀ were true.' },
        { id: 'q16', type: 'fill', prompt: 'A p-value of 0.03 means there is a ________% chance of observing results this extreme if the null hypothesis were true.', answer: '3', explanation: 'p-value = probability of observed (or more extreme) results given H₀ is true. p=0.03 → 3% chance. Below the typical 5% threshold → statistically significant.' },
        { id: 'q17', type: 'mcq', prompt: 'Why use Welch\'s t-test (equal_var=False) when comparing two groups?', options: ['It always gives a smaller p-value', 'It doesn\'t assume equal variances — more robust when group spreads differ', 'It handles categorical data', 'It requires fewer observations'], answerIndex: 1, explanation: 'Welch\'s t-test does not assume the two groups have equal variance, making it more robust in practice. It is the safer default for two-group comparisons.' },
        { id: 'q18', type: 'mcq', prompt: 'Statistical significance (p=0.001) with a tiny effect size (0.01% improvement) is:', options: ['Both statistically and practically significant', 'Statistically significant but practically meaningless', 'Practically significant but not statistically', 'Not significant in any sense'], answerIndex: 1, explanation: 'With very large samples, even trivial effects achieve p < 0.05. Always report effect size alongside p-value. A real but negligible effect may not justify action.' },
        { id: 'q19', type: 'mcq', prompt: 'In the ShopNow A/B test capstone, the orange button had 562 conversions vs 487 for the blue button (both with 5,000 visitors). The correct statistical test is:', options: ['One-sample t-test', 'Chi-square goodness of fit', 'Two-proportion z-test', 'Paired t-test'], answerIndex: 2, explanation: 'Comparing two proportions (conversion rates) from independent groups requires a two-proportion z-test (or chi-square test of independence). One-sample and paired tests apply to different scenarios.' },
        { id: 'q20', type: 'fill', prompt: 'The complement rule states: P(not A) = 1 − ________', answer: 'P(A)', explanation: 'Since all probabilities must sum to 1, P(not A) = 1 − P(A). If there\'s a 30% chance of rain, there\'s a 70% chance of no rain.' },
        { id: 'q21', type: 'mcq', prompt: 'A histogram with too few bins (e.g., 3 bins for 500 data points) suffers from:', options: ['Noisy spiky appearance', 'Over-smoothing that hides real structure like bimodality or skewness', 'Too many gaps between bars', 'Showing outliers incorrectly'], answerIndex: 1, explanation: 'Too few bins merge distinct patterns into one big blob. You might miss bimodality (two peaks), skewness, or gaps in the data. Too many bins create noisy spikes.' },
        { id: 'q22', type: 'mcq', prompt: 'The Poisson distribution with λ=3 gives P(X=0) ≈ 0.050. In a support context (3 tickets/hour average), this means:', options: ['Zero tickets are most likely', 'About 5% of hours will have zero support tickets', '5 tickets per hour is the average', 'The standard deviation is 0.05'], answerIndex: 1, explanation: 'P(X=0) = e^(−λ) = e^(−3) ≈ 0.050. So roughly 5% of hours have zero tickets. λ is both the mean AND variance of a Poisson distribution.' },
        { id: 'q23', type: 'fill', prompt: 'In a normal distribution, approximately ________% of data falls within ±3 standard deviations of the mean.', answer: '99.7', explanation: '68-95-99.7 rule: 99.7% within ±3 SD. This means only 0.3% of data lies beyond 3 standard deviations — events beyond this are extremely rare.' },
        { id: 'q24', type: 'mcq', prompt: 'Which measure of spread is most resistant to outliers?', options: ['Standard deviation', 'Variance', 'IQR (Interquartile Range)', 'Range (max − min)'], answerIndex: 2, explanation: 'IQR = Q3 − Q1 uses only the middle 50% of data, ignoring extreme values entirely. SD and variance square outlier distances, amplifying their effect. Range is completely dominated by outliers.' },
        { id: 'q25', type: 'mcq', prompt: 'In a scatter plot of study hours vs exam scores, a trend line with slope 5.5 means:', options: ['The correlation is 5.5', 'Each additional study hour is associated with 5.5 more exam points', '5.5% of variance is explained', 'The intercept is 5.5'], answerIndex: 1, explanation: 'The slope of a trend line = change in Y per 1-unit increase in X. Slope=5.5 → each extra study hour predicts 5.5 additional exam points on average.' },
        { id: 'q26', type: 'fill', prompt: 'Bayes\' theorem: P(Disease|Positive) = P(Positive|Disease) × P(Disease) / P(________)', answer: 'Positive', explanation: 'Full Bayes formula: P(Disease|Pos) = P(Pos|Disease)×P(Disease) / P(Positive). P(Positive) is computed as total probability: P(Pos|Disease)×P(Disease) + P(Pos|No Disease)×P(No Disease).' },
        { id: 'q27', type: 'mcq', prompt: 'Which type of skewness do salary datasets almost always exhibit?', options: ['Negative (left-skewed)', 'Symmetric (zero skew)', 'Positive (right-skewed)', 'Bimodal'], answerIndex: 2, explanation: 'Salary distributions almost always have a long right tail because there is no upper limit to earnings. A few very high earners pull the mean far above the median — classic positive skew.' },
        { id: 'q28', type: 'mcq', prompt: 'A chi-square test of goodness of fit compares:', options: ['Two group means', 'Observed categorical frequencies against expected frequencies under H₀', 'Two proportions with z-test', 'Variance between groups'], answerIndex: 1, explanation: 'Chi-square goodness of fit: are observed counts consistent with expected counts? E.g., are actual conversion rates consistent with a hypothesised 45% rate?' },
        { id: 'q29', type: 'fill', prompt: 'The binomial probability P(X=k) uses the formula: P(X=k) = C(n,k) × p^k × (1-p)^(________)', answer: 'n-k', explanation: 'Binomial PMF: P(X=k) = C(n,k)×p^k×(1−p)^(n−k). C(n,k) is the number of ways to choose k successes from n trials. (1−p)^(n−k) is the probability of the remaining failures.' },
        { id: 'q30', type: 'mcq', prompt: 'The IPL mini project compared mean vs median batting scores across players. Which player type would have mean >> median?', options: ['A consistent "singles and doubles" accumulator', 'An aggressive striker with many low scores and occasional match-winning centuries', 'A player who scores exactly the same every innings', 'A bowler'], answerIndex: 1, explanation: 'An aggressive striker with frequent low scores (0, 5, 12...) but occasional huge scores (120+) would be right-skewed: mean >> median. The large scores pull the mean up above the typical performance.' }
      ]
    },
    intermediate: {
      title: 'Statistics for Data — Intermediate Track Practice',
      description: 'Sampling, confidence intervals, ANOVA, correlation, and regression',
      questions: [
        { id: 'q1', type: 'mcq', prompt: 'Which sampling method guarantees proportional representation of all subgroups?', options: ['Simple random sampling', 'Cluster sampling', 'Stratified sampling', 'Convenience sampling'], answerIndex: 2, explanation: 'Stratified sampling divides the population into subgroups (strata) and samples proportionally from each, ensuring no subgroup is missed.' },
        { id: 'q2', type: 'mcq', prompt: 'If SE = σ/√n and n grows from 100 to 900, the standard error:', options: ['Triples', 'Stays the same', 'Decreases to one-third', 'Doubles'], answerIndex: 2, explanation: 'SE = σ/√n. √900/√100 = 3. So SE decreases by a factor of 3 (to one-third). Going from n=100 to n=900 triples √n, cutting SE by ⅓.' },
        { id: 'q3', type: 'fill', prompt: 'The Central Limit Theorem states that as sample size increases, the sampling distribution of the mean approaches a ________ distribution.', answer: 'normal', explanation: 'CLT is the cornerstone of frequentist statistics: regardless of the population distribution, sample means approach a normal distribution as n grows. This justifies z and t-tests.' },
        { id: 'q4', type: 'mcq', prompt: 'A 95% CI for mean satisfaction is [7.05, 7.35]. This means:', options: ['95% of patients scored between 7.05 and 7.35', 'If repeated many times, 95% of such intervals would contain the true mean', 'There is a 95% probability the true mean equals 7.20', 'The margin of error is 0.30'], answerIndex: 1, explanation: 'Correct frequentist interpretation: the 95% refers to the long-run procedure. The true mean is fixed — this particular interval either contains it or doesn\'t.' },
        { id: 'q5', type: 'mcq', prompt: 'Quadrupling the sample size reduces the margin of error by:', options: ['A factor of 4', 'A factor of 2 (halves it)', 'A factor of 16', 'No change'], answerIndex: 1, explanation: 'ME = z×σ/√n. Quadrupling n multiplies √n by 2, halving ME. This is why precision is expensive.' },
        { id: 'q6', type: 'mcq', prompt: 'A paired t-test is preferred over an independent t-test when:', options: ['Groups are large', 'The same subjects are measured before and after — pairing removes between-subject noise', 'Groups have unequal sizes', 'The outcome is categorical'], answerIndex: 1, explanation: 'Pairing accounts for individual differences. By measuring each person twice (before/after), you eliminate between-person variability, dramatically increasing power to detect the treatment effect.' },
        { id: 'q7', type: 'mcq', prompt: 'One-way ANOVA tests H₀: all group means are equal. A significant result means:', options: ['All group means are different from each other', 'At least one group mean differs from the others — a post-hoc test identifies which pairs', 'The groups have equal variance', 'The test automatically rejects H₀'], answerIndex: 1, explanation: 'ANOVA only tells you SOMETHING differs. Tukey HSD post-hoc test then identifies which specific pairs are significantly different while controlling the overall false positive rate.' },
        { id: 'q8', type: 'fill', prompt: 'The chi-square test of ________ tests whether two categorical variables are related or independent.', answer: 'independence', explanation: 'Chi-square test of independence: tests H₀ that two categorical variables are independent. Uses a contingency table of observed vs expected counts.' },
        { id: 'q9', type: 'mcq', prompt: 'Pearson correlation r = −0.78 between ice cream sales and hot drink sales means:', options: ['Ice cream causes hot drinks to decrease', 'Strong negative linear relationship — as one rises, the other tends to fall', 'The variables are independent', '78% of variance is explained'], answerIndex: 1, explanation: 'r = −0.78 indicates a strong negative linear relationship. Neither causes the other — a confounder (temperature/season) likely drives both. Correlation ≠ causation.' },
        { id: 'q10', type: 'mcq', prompt: 'Spearman correlation ρ is preferred over Pearson r when:', options: ['Sample size exceeds 1,000', 'Data is normally distributed with no outliers', 'Data has outliers, is ordinal, or the relationship is monotonic but not strictly linear', 'You need the regression line slope'], answerIndex: 2, explanation: 'Spearman ranks data before computing correlation, making it resistant to outliers and valid for non-linear monotonic relationships.' },
        { id: 'q11', type: 'fill', prompt: 'If r = 0.9 between GDP and life expectancy, R² = ________ meaning GDP explains ________% of the variance in life expectancy.', answer: '0.81', explanation: 'R² = r² = 0.9² = 0.81 = 81%. R² (coefficient of determination) is the proportion of variance explained. Always square r to get R².' },
        { id: 'q12', type: 'mcq', prompt: 'In a scatter plot, points close to the trend line indicate:', options: ['Strong positive correlation regardless of slope', 'Low residuals — the linear model fits well', 'A non-linear relationship', 'Heteroscedasticity'], answerIndex: 1, explanation: 'Small residuals (distance between observed and predicted points) mean the linear model fits well. High R² reflects small residuals throughout the range of X.' },
        { id: 'q13', type: 'mcq', prompt: 'In simple linear regression rent = 3000 + 12×area, predicting rent for area=800 sq ft:', options: ['₹9,600', '₹12,600', '₹12,000', '₹15,000'], answerIndex: 1, explanation: 'Prediction: 3000 + 12×800 = 3000 + 9600 = ₹12,600 per month.' },
        { id: 'q14', type: 'mcq', prompt: 'A funnel shape in a residuals vs fitted plot indicates:', options: ['Normally distributed residuals', 'Heteroscedasticity — non-constant variance that violates OLS assumptions', 'Perfect model fit', 'Non-linearity'], answerIndex: 1, explanation: 'Heteroscedasticity: variance of residuals grows with fitted values. Common fix: log-transform the outcome. Standard errors are biased when this assumption is violated.' },
        { id: 'q15', type: 'fill', prompt: 'OLS stands for Ordinary ________ Squares — minimising the sum of squared residuals.', answer: 'Least', explanation: 'Ordinary Least Squares minimises Σ(yᵢ − ŷᵢ)² — the sum of squared differences between observed and predicted values.' },
        { id: 'q16', type: 'mcq', prompt: 'In multiple regression, the coefficient on "bedrooms" (=3000) represents:', options: ['The rent of a 3-bedroom apartment', 'The change in rent per additional bedroom, holding all other features constant', '3,000 apartments have this bedroom count', 'The correlation between bedrooms and rent'], answerIndex: 1, explanation: 'Multiple regression coefficients are partial effects — the change in Y for 1-unit change in this predictor, CONTROLLING for all other predictors.' },
        { id: 'q17', type: 'mcq', prompt: 'VIF (Variance Inflation Factor) > 10 for a predictor indicates:', options: ['Strong model fit', 'The predictor is the most important variable', 'Severe multicollinearity — consider removing or combining with correlated predictors', 'The model is overfitted'], answerIndex: 2, explanation: 'VIF measures how much a coefficient\'s variance is inflated by collinearity. VIF=10 means the standard error is √10 ≈ 3.16× what it would be without multicollinearity — making inference unreliable.' },
        { id: 'q18', type: 'fill', prompt: 'When encoding a categorical variable with 4 categories using get_dummies with drop_first=True, ________ binary columns are created.', answer: '3', explanation: '4 categories − 1 (dropped reference) = 3 dummy columns. The 4th category is implied when all 3 dummies are 0.' },
        { id: 'q19', type: 'mcq', prompt: 'In the WHO Health Indicators mini project, you found schooling strongly correlates with life expectancy. The correct conclusion is:', options: ['More schooling causes longer life — governments should invest in education immediately', 'Schooling and life expectancy are strongly associated — but common cause (national wealth) may explain both; controlled studies needed for causation', 'Schooling has no effect on health', 'The correlation is spurious'], answerIndex: 1, explanation: 'Observational correlations suggest relationships but cannot establish causation. National wealth (GDP) likely drives both educational access and healthcare quality — a confounder.' },
        { id: 'q20', type: 'mcq', prompt: 'Adjusted R² differs from R² in that it:', options: ['Is always larger than R²', 'Penalises for adding predictors that don\'t improve fit — resists overfitting', 'Measures training accuracy', 'Equals R² for models with one predictor'], answerIndex: 1, explanation: 'R² always increases when you add any predictor (even noise). Adjusted R² subtracts a penalty per added predictor, only increasing if fit genuinely improves. Use it to compare models with different numbers of features.' },
        { id: 'q21', type: 'mcq', prompt: 'Which sampling bias explains why "average" salary reported on LinkedIn skews high?', options: ['Cluster sampling', 'Response bias — higher earners are more likely to list salaries publicly', 'Undercoverage of senior employees', 'Survivorship bias'], answerIndex: 1, explanation: 'Response/self-selection bias: people with higher salaries are more likely to share them publicly on professional networks. The sample (public salaries) systematically differs from the population (all salaries).' },
        { id: 'q22', type: 'fill', prompt: 'The 95% CI for a proportion uses the formula: p̂ ± z* × √(p̂(1−p̂)/________).', answer: 'n', explanation: 'Standard error of a proportion = √(p̂(1−p̂)/n). The 95% CI = p̂ ± 1.96 × SE. Larger n → smaller SE → narrower CI.' },
        { id: 'q23', type: 'mcq', prompt: 'ANOVA\'s F-statistic measures:', options: ['Total variance in the dataset', 'Ratio of variance between groups to variance within groups — large F suggests real group differences', 'Correlation between group means', 'The number of significant pairwise differences'], answerIndex: 1, explanation: 'F = between-group variance / within-group variance. Large F means group means vary more than individual variation within groups — evidence against H₀.' },
        { id: 'q24', type: 'mcq', prompt: 'In the Bangalore house price capstone, cross-validation (5-fold CV) is used to:', options: ['Speed up computation', 'Get a more reliable estimate of test performance by averaging across 5 different train/test splits', 'Reduce the number of features', 'Replace the final test evaluation'], answerIndex: 1, explanation: 'Cross-validation reduces variance in performance estimates. A single train/test split may be lucky or unlucky. 5-fold CV averages across 5 splits for a more stable R² estimate.' },
        { id: 'q25', type: 'mcq', prompt: 'In the hospital sampling module, stratified sampling was used instead of SRS to:', options: ['Reduce total sample size needed', 'Guarantee ICU (20% of patients) is properly represented, not undersampled by chance', 'Increase randomness', 'Avoid response bias'], answerIndex: 1, explanation: 'ICU has 20% of patients. With SRS and n=400, you expect 80 ICU patients but might get 50 by chance. Stratified sampling guarantees exactly the right proportions.' },
        { id: 'q26', type: 'fill', prompt: 'In the Pearson correlation formula, r ranges from ________ to +1.', answer: '-1', explanation: 'r ∈ [−1, +1]. r=+1: perfect positive linear relationship. r=−1: perfect negative. r=0: no linear relationship.' },
        { id: 'q27', type: 'mcq', prompt: 'A Q-Q plot of residuals with points curving away from the diagonal suggests:', options: ['The model is overfitted', 'Residuals are not normally distributed — may affect inference validity', 'Heteroscedasticity', 'Multicollinearity'], answerIndex: 1, explanation: 'Q-Q plots compare data quantiles to theoretical normal quantiles. S-curves or systematic deviations from the diagonal indicate non-normal residuals, affecting the reliability of p-values for coefficients.' },
        { id: 'q28', type: 'mcq', prompt: 'Which of these is an example of survivorship bias in data analysis?', options: ['Surveying only current customers to evaluate a cancelled subscription plan', 'Using stratified sampling for a customer survey', 'Testing for normality before using ANOVA', 'Computing the mean instead of the median'], answerIndex: 0, explanation: 'Surveying only current customers ignores those who churned — the group most likely to reveal problems with the cancelled plan. You only see the "survivors" who stayed.' },
        { id: 'q29', type: 'fill', prompt: 'Multiple regression coefficient on "age_years" = −150 means each additional year of building age is associated with ₹________ less in monthly rent.', answer: '150', explanation: 'The coefficient of −150 on age_years means: holding all other predictors constant, each additional year of building age reduces predicted rent by ₹150/month.' },
        { id: 'q30', type: 'mcq', prompt: 'The WHO capstone found a 95% CI for mean life expectancy in Developing countries: [66.3, 69.1]. What can you conclude?', options: ['Exactly 67.7 years is the true mean', 'We are 95% confident the true population mean life expectancy for developing countries lies between 66.3 and 69.1 years', '95% of developing countries have life expectancy in this range', 'The estimate is not reliable'], answerIndex: 1, explanation: 'A CI estimates the POPULATION PARAMETER with stated uncertainty, not the range for individual countries. Developing country citizens individually have much more variation in life expectancy.' }
      ]
    },
    advanced: {
      title: 'Statistics for Data — Advanced Track Practice',
      description: 'Logistic regression, time series, Bayesian methods, causal inference, and experimental design',
      questions: [
        { id: 'q1', type: 'mcq', prompt: 'Why does logistic regression use the sigmoid function instead of predicting directly?', options: ['The sigmoid is computationally faster', 'It constrains predictions to [0,1] so they are valid probabilities', 'The sigmoid removes outliers', 'It makes the model linear'], answerIndex: 1, explanation: 'Linear regression can predict any real number. Probabilities must be in [0,1]. The sigmoid function maps any linear combination to (0,1), making the output a valid probability.' },
        { id: 'q2', type: 'mcq', prompt: 'AUC-ROC of 0.50 means the model:', options: ['Is 50% accurate', 'Performs no better than random guessing', 'Has 50% precision', 'Correctly classifies half the positives'], answerIndex: 1, explanation: 'AUC-ROC = 0.5 is the random baseline — equivalent to flipping a coin. AUC > 0.5 means the model has some discriminative ability. AUC = 1.0 is perfect.' },
        { id: 'q3', type: 'fill', prompt: 'Lowering the classification threshold from 0.5 to 0.3 increases ________ at the cost of lower precision.', answer: 'recall', explanation: 'Lower threshold → more examples predicted positive → higher recall (catch more true positives) but lower precision (more false positives). Threshold choice depends on the business cost of each error type.' },
        { id: 'q4', type: 'mcq', prompt: 'In the telecom churn mini project, top 20% by churn probability captured what % of actual churners?', options: ['20%', 'About 50–60% — the model concentrates churners at the top of the risk score', 'Exactly 80%', '100%'], answerIndex: 1, explanation: 'A good model ranks churners higher than non-churners. Targeting the top 20% by predicted probability should capture much more than 20% of actual churners — typically 50–70% in a strong model.' },
        { id: 'q5', type: 'mcq', prompt: 'The ADF test p-value = 0.65 for a monthly sales time series. You should:', options: ['Proceed directly to SARIMA', 'Apply first-order differencing to achieve stationarity', 'Decompose and stop', 'Use polynomial regression instead'], answerIndex: 1, explanation: 'ADF p ≥ 0.05 → non-stationary. Apply differencing (d=1) and re-test. ARIMA/SARIMA models require stationarity; the d parameter in the model name controls this.' },
        { id: 'q6', type: 'mcq', prompt: 'Seasonal decomposition reveals: Trend (upward), Seasonality (peaks every December), Residual (small noise). For monthly data with annual seasonality, the appropriate SARIMA seasonal period m is:', options: ['1', '4', '12', '52'], answerIndex: 2, explanation: 'm=12 for monthly data with annual (12-month) seasonality. If you had weekly data with annual seasonality, m=52. m must match the periodicity of the seasonal pattern.' },
        { id: 'q7', type: 'fill', prompt: 'MAPE stands for Mean Absolute ________ Error and measures forecast accuracy as a percentage.', answer: 'Percentage', explanation: 'MAPE = mean of |actual − forecast| / actual × 100. Expressed as a percentage, making it scale-independent and easy to communicate. Below 10% is generally strong for business forecasting.' },
        { id: 'q8', type: 'mcq', prompt: 'In Bayesian statistics, the prior represents:', options: ['The observed data distribution', 'Your belief about the parameter BEFORE seeing the data', 'The p-value for significance', 'The posterior mean'], answerIndex: 1, explanation: 'Prior P(θ) = initial belief. Likelihood P(data|θ) = evidence from data. Posterior P(θ|data) = updated belief. More data → posterior shifts toward likelihood.' },
        { id: 'q9', type: 'mcq', prompt: 'A Bayesian 95% credible interval [0.082, 0.118] for CTR allows you to say:', options: ['The same thing as a frequentist 95% CI', 'There is a 95% probability the true CTR is between 8.2% and 11.8%', '95% of users have CTR in this range', 'The interval was computed from 95 bootstrap samples'], answerIndex: 1, explanation: 'Bayesian credible intervals support direct probability statements about parameters — impossible in frequentist inference where parameters are fixed unknowns.' },
        { id: 'q10', type: 'mcq', prompt: 'Bayesian A/B testing computes P(B > A) = 89%. Compared to frequentist p-value testing, this:', options: ['Requires the same sample size', 'Provides a direct, actionable probability that B is better — and allows continuous monitoring without false positive inflation', 'Is identical in interpretation', 'Cannot detect small effects'], answerIndex: 1, explanation: 'P(B>A) is directly interpretable. Frequentist p-values only test whether to reject H₀="no difference." Bayesian testing also solves the peeking problem — continuous monitoring doesn\'t inflate false positives.' },
        { id: 'q11', type: 'fill', prompt: 'Statistical ________ is the probability of detecting a real effect if one exists (1 − Type II error rate).', answer: 'power', explanation: 'Power = P(reject H₀ | H₁ true) = 1 − β. Industry standard is 80% power. Higher power requires larger samples.' },
        { id: 'q12', type: 'mcq', prompt: 'In power analysis, to detect a 5%→5.5% conversion lift at 80% power and α=0.05, you need approximately 15,000 total visitors. If only 7,500 visitors are available, your test is:', options: ['Over-powered and will reject H₀ too often', 'Under-powered — likely to miss the real effect even if it exists', 'Fine — 7,500 is the adjusted sample size', 'Needs a smaller α'], answerIndex: 1, explanation: 'Under-powered tests have high Type II error (missing real effects). With half the required sample, power drops below 80% — you are likely to get a non-significant result even if the 10% relative lift is real.' },
        { id: 'q13', type: 'mcq', prompt: 'The peeking problem in A/B testing occurs when:', options: ['Test groups see each other\'s results', 'You check p-values at multiple points and stop when p < 0.05 appears — inflating false positive rate to 25-30%', 'Control and treatment groups overlap', 'Sample sizes are unequal'], answerIndex: 1, explanation: 'Each "peek" at an evolving experiment uses the same α budget. Stopping at first significant result from 20 looks achieves only ~72% of nominal coverage — inflating false positives by 5-6×.' },
        { id: 'q14', type: 'fill', prompt: 'Epsilon-greedy bandits with ε=0.10 allocate ________% of traffic to exploitation (the current best arm).', answer: '90', explanation: 'ε=0.10: 10% random exploration, 90% exploitation of the best-known arm. This adapts allocation in real time, reducing traffic waste on losing variants vs fixed A/B tests.' },
        { id: 'q15', type: 'mcq', prompt: 'Bootstrap confidence intervals are superior to parametric CIs when:', options: ['Sample sizes are very large', 'The statistic has no closed-form formula for its standard error (e.g., median, Gini coefficient)', 'Data is normally distributed', 'Multiple groups are compared'], answerIndex: 1, explanation: 'For complex statistics without analytical standard error formulas, bootstrap resampling builds the sampling distribution empirically. Works for any statistic, any distribution.' },
        { id: 'q16', type: 'mcq', prompt: 'A permutation test creates its null distribution by:', options: ['Assuming normality and using t-tables', 'Randomly shuffling group labels thousands of times and recomputing the test statistic each time', 'Resampling with replacement', 'Using the chi-square distribution'], answerIndex: 1, explanation: 'Under H₀ (no group difference), labels are interchangeable. Shuffling creates the distribution of the test statistic by chance — no distributional assumptions required.' },
        { id: 'q17', type: 'mcq', prompt: 'The fundamental problem of causal inference is:', options: ['Data is always noisy', 'You can only observe each unit in ONE state — the counterfactual is unobservable', 'Randomisation is always unethical', 'Confounders are impossible to identify'], answerIndex: 1, explanation: 'Each person is either treated or not — you never see the same person in both states simultaneously. Causal inference is the science of estimating unobservable counterfactuals.' },
        { id: 'q18', type: 'mcq', prompt: 'DiD (Difference-in-Differences) requires which key assumption?', options: ['Random assignment to treatment', 'Parallel trends: without treatment, both groups would have followed the same trajectory', 'Equal group sizes', 'No seasonality'], answerIndex: 1, explanation: 'Parallel trends is the identifying assumption for DiD. If treated and control groups were diverging before the intervention, DiD estimates are biased. Always plot pre-treatment trends.' },
        { id: 'q19', type: 'fill', prompt: 'DiD estimate = (Treated_after − Treated_before) − (Control_after − ________)', answer: 'Control_before', explanation: 'DiD removes the common time trend by subtracting the control group\'s change. What remains is the causal effect attributable to the treatment, not background trends.' },
        { id: 'q20', type: 'mcq', prompt: 'Propensity Score Matching (PSM) addresses which problem?', options: ['Non-stationarity in time series', 'Selection bias: people who self-select into treatment differ from controls in confounding ways', 'Multicollinearity in regression', 'Heteroscedasticity'], answerIndex: 1, explanation: 'PSM estimates the probability of treatment from observable covariates and matches treated to similar controls. This balances confounders, reducing selection bias in observational studies.' },
        { id: 'q21', type: 'mcq', prompt: 'Regression Discontinuity Design (RDD) is valid because units just below and just above the cutoff are:', options: ['Randomly assigned to treatment by the researcher', 'Essentially random with respect to the threshold — their assignment is driven by chance variation near the cutoff', 'Identical in all respects', 'Selected by the analyst'], answerIndex: 1, explanation: 'Near the cutoff, who is just below vs just above is largely random chance. This creates a local quasi-experiment, making the comparison causally valid near the threshold.' },
        { id: 'q22', type: 'mcq', prompt: 'In the FreshMart capstone, ANOVA showed Platinum tier spend significantly differs from Silver (p<0.001). Tukey HSD is then used to:', options: ['Rerun ANOVA with more power', 'Identify which specific tier pairs are significantly different while controlling family-wise error rate', 'Compute confidence intervals for each tier mean', 'Test whether variances are equal'], answerIndex: 1, explanation: 'ANOVA tells you "something differs." Tukey HSD identifies which specific pairwise comparisons are significant, maintaining an overall α=0.05 across all comparisons.' },
        { id: 'q23', type: 'fill', prompt: 'OBF (O\'Brien-Fleming) boundary at the first look of 5 planned looks requires a z-score > ________ to declare early significance (much more conservative than 1.96).', answer: '4.56', explanation: 'OBF is very conservative at early looks (z > 4.56 at look 1 of 5) to prevent false early stops. By look 5, the threshold relaxes to ~2.04 — near the standard 1.96.' },
        { id: 'q24', type: 'mcq', prompt: 'In the FreshMart DiD analysis, the DiD coefficient represents:', options: ['The average basket size in the treated group', 'The causal increase in basket size attributable to the loyalty programme, after removing the common trend', 'The difference between Platinum and Silver tiers', 'The forecast improvement after programme launch'], answerIndex: 1, explanation: 'DiD coefficient = incremental effect of treatment beyond what the control group experienced. It removes the common time trend, attributing the residual change specifically to the programme.' },
        { id: 'q25', type: 'mcq', prompt: 'Bootstrap standard error is computed by:', options: ['Dividing sample SD by √n', 'Taking the standard deviation of the bootstrap distribution of the statistic', 'Using the t-distribution formula', 'Computing the IQR of bootstrap samples'], answerIndex: 1, explanation: 'The spread of the bootstrap distribution (its standard deviation) estimates the standard error of the statistic. This is the bootstrap standard error — valid for any statistic without formulas.' },
        { id: 'q26', type: 'mcq', prompt: 'In Bayesian A/B testing, P(B > A) is computed by:', options: ['Comparing p-values from two separate z-tests', 'Monte Carlo: drawing thousands of samples from each posterior and computing the fraction where B > A', 'Using the Chi-square distribution', 'Comparing posterior means directly'], answerIndex: 1, explanation: 'Monte Carlo: sample 100,000 values from Posterior_A and Posterior_B, compute fraction where B_sample > A_sample. This gives P(B > A) without any analytical approximation.' },
        { id: 'q27', type: 'fill', prompt: 'AUC-ROC = 1.0 means the model ________ ranks every positive example above every negative example.', answer: 'perfectly', explanation: 'AUC-ROC=1.0: perfect discrimination. The model assigns higher probability to every true positive than to every true negative. AUC=0.5: random. AUC=0.0: perfectly wrong (easily fixed by flipping).' },
        { id: 'q28', type: 'mcq', prompt: 'For SARIMA forecasting, MAPE is computed on:', options: ['Training data only', 'Held-out test data that comes AFTER the training period chronologically', 'The entire dataset', 'Cross-validated folds'], answerIndex: 1, explanation: 'Always evaluate time series forecasts on held-out FUTURE data. Using past data for both training and evaluation creates data leakage — the model\'s past would inform "future" predictions.' },
        { id: 'q29', type: 'mcq', prompt: 'Which causal method would you use to evaluate whether a scholarship programme improves graduation rates, given students above/below a test score cutoff?', options: ['DiD — comparing treated vs control over time', 'Propensity Score Matching', 'Regression Discontinuity Design (RDD)', 'Bayesian A/B testing'], answerIndex: 2, explanation: 'A sharp score cutoff (e.g., ≥60 → scholarship) is the classic RDD setup. Units just below and above the cutoff are comparable — the only difference is whether they received the scholarship.' },
        { id: 'q30', type: 'mcq', prompt: 'In the FreshMart churn model, the AUC-ROC on the test set measures:', options: ['Accuracy on training data', 'How well the model ranks at-risk customers — generalisable to new unseen customers', 'The number of features used', 'Whether the model is statistically significant'], answerIndex: 1, explanation: 'Test AUC-ROC measures how well the model distinguishes churners from non-churners on customers it has never seen. This is the metric that matters for deployment.' }
      ]
    }
  }
}

export const getCourseQuiz = (courseSlug, track) => {
  return COURSE_QUIZZES[courseSlug]?.[track] || null
}
