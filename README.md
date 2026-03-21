## Q1 – AI vs ML

**Question:**  
In an enterprise context, which statement best captures the relationship between Artificial Intelligence (AI) and Machine Learning (ML)?

A. ML is a set of business rules, while AI is any software that uses data.  
B. AI is a broad goal of creating systems that exhibit intelligent behavior, and ML is one family of techniques used to achieve that behavior.  
C. AI refers only to systems that pass the Turing Test, and ML refers to all other automated systems.  
D. ML and AI are interchangeable terms and mean the same thing.

**Correct answer:** B  

**Reasoning:**  
AI is a broad concept focused on systems that perform tasks requiring human-like intelligence. ML is a subset of AI that learns patterns from data to support that goal. Options C and D misstate the relationship, and A confuses ML with rule-based systems.

---

## Q2 – Machine Learning definition nuance

**Question:**  
Which definition most accurately reflects modern usage of the term “machine learning” in industry practice?

A. Writing explicit rules so a program can mimic expert decisions.  
B. Designing systems that infer patterns from data and improve performance on a task with experience.  
C. Any use of statistics in data analysis.  
D. Training a model once on historical data and never updating it.

**Correct answer:** B  

**Reasoning:**  
ML emphasizes algorithms that learn from data and improve with experience. A describes expert systems, C is generic statistics, and D contradicts the idea of ongoing learning and adaptation.

---

## Q3 – Neural networks vs traditional models

**Question:**  
Compared to traditional linear models, which feature best characterizes artificial neural networks?

A. They always require less data and compute than linear models.  
B. They can approximate highly non-linear relationships by composing many simple units and layers.  
C. They can only be applied to image data and not tabular data.  
D. They eliminate the need for any data preprocessing.

**Correct answer:** B  

**Reasoning:**  
Neural networks combine many simple units into layers to capture complex non-linear patterns. They often require more data and compute, work on many data types, and still benefit from preprocessing, so A, C, and D are incorrect.

---

## Q4 – Deep learning vs “shallow” networks

**Question:**  
What primarily distinguishes *deep learning* from other neural network approaches?

A. Deep learning models always use image data, while other networks do not.  
B. Deep learning refers to neural networks with multiple hidden layers that can learn hierarchical feature representations.  
C. Deep learning models do not require any labeled data.  
D. Deep learning models are only deployed on specialized hardware.

**Correct answer:** B  

**Reasoning:**  
“Deep” refers to depth in layers: stacking many hidden layers allows hierarchical feature learning. Domains (A), label requirements (C), and deployment hardware (D) are not defining characteristics.

---

## Q5 – NLP beyond simple text processing

**Question:**  
Which example best illustrates a modern Natural Language Processing (NLP) task rather than generic text processing?

A. Counting how many times a word appears in a document.  
B. Converting a text file from one encoding to another.  
C. Automatically classifying customer emails into intents such as “billing issue” or “technical support.”  
D. Compressing text files to save disk space.

**Correct answer:** C  

**Reasoning:**  
NLP focuses on understanding and generating human language; intent classification from free-form text is a typical NLP task. The other options are text operations without language understanding.

---

## Q6 – Large language model properties

**Question:**  
Which property is *most* characteristic of a large language model (LLM) compared with earlier NLP systems?

A. It relies exclusively on manually designed grammar rules for each language.  
B. It is trained end-to-end on massive text corpora to predict the next token, enabling it to generalize to many tasks via prompting.  
C. It can only perform the single task it was explicitly fine-tuned for.  
D. It requires labeled intent data for every downstream use case.

**Correct answer:** B  

**Reasoning:**  
LLMs use self-supervised objectives like next-token prediction over large text corpora and can handle many tasks via prompting. Rule-based grammars (A) and strict task-specific labeling (D) describe older paradigms, while C ignores broad task generalization.

---

## Q7 – Generative AI vs discriminative AI

**Question:**  
Which description best contrasts generative AI models with discriminative models?

A. Generative models only generate labels, while discriminative models only generate raw data.  
B. Generative models learn to model the joint distribution of inputs and outputs to produce new samples, while discriminative models focus on predicting outputs given inputs.  
C. Generative models require no training data, while discriminative models do.  
D. There is no meaningful distinction; the terms are synonymous.

**Correct answer:** B  

**Reasoning:**  
Generative models approximate how data is distributed and can sample new data points; discriminative models learn boundaries for tasks like classification. A, C, and D misdescribe or deny this distinction.

---

## Q8 – AI bias vs data bias

**Question:**  
An AI system for loan approvals shows systematically lower approval rates for one demographic group, even when controlling for income and credit score. Which explanation most accurately reflects the notion of *AI bias*?

A. The AI is malfunctioning due to hardware failure.  
B. The training data or model design encodes historical or structural biases, leading to unfairly different outcomes for certain groups.  
C. Users are entering incorrect information into the system.  
D. The system is correctly following regulations that explicitly forbid lending to that group.

**Correct answer:** B  

**Reasoning:**  
AI bias generally arises when data, labels, or model design encode inequities that drive systematic disparities. Hardware issues, user input errors, or mandated discrimination are different problems.

---

## Q9 – Explainability vs “documentation”

**Question:**  
A financial institution deploys a credit scoring model and regulators ask, “Why was this applicant denied?” Which practice aligns most closely with *AI explainability* requirements?

A. Sharing only the model’s source code under NDA.  
B. Providing human-readable reasons, such as key features and their contributions, that clarify how the model produced this specific decision.  
C. Responding that the model is proprietary and cannot be explained.  
D. Publishing a high-level marketing brochure about the benefits of AI.

**Correct answer:** B  

**Reasoning:**  
Explainability aims to make decisions understandable, often via feature-level or local explanations. Code access (A), refusal to explain (C), and generic marketing material (D) do not meet that goal.

---

## Q10 – Training vs test data

**Question:**  
Why is it a bad practice to include test data in the training dataset for a machine learning model?

A. It makes the model slower at inference time.  
B. It prevents the model from converging during optimization.  
C. It leaks information about the evaluation set, causing overly optimistic performance estimates and hiding how the model will generalize to unseen data.  
D. It forces the model to memorize all training examples perfectly.

**Correct answer:** C  

**Reasoning:**  
Test data should represent unseen real-world cases. If it is used in training, evaluation metrics are inflated and no longer measure true generalization performance, which can mislead deployment decisions.

---

## Q11 – Overfitting

**Question:**  
A fraud detection model performs almost perfectly on historical training data but misses many new fraud patterns after deployment. Which situation best describes *overfitting*?

A. The model has too few parameters and cannot capture the structure of the data.  
B. The model learned idiosyncratic noise and specifics of the training set, harming its ability to generalize to new data.  
C. The model was trained on too much diverse data and became unstable.  
D. The model was evaluated only with cross-validation and not with a test set.

**Correct answer:** B  

**Reasoning:**  
Overfitting occurs when a model captures noise and quirks of the training data rather than underlying patterns, leading to poor performance on unseen data. High training performance but degraded real-world performance matches this description.

---

## Q12 – Supervised learning nuance

**Question:**  
Which scenario is the clearest example of *supervised learning* in a business context?

A. Clustering customer transactions to find unknown behavior segments.  
B. Predicting whether a loan application will be approved using historical applications labeled as “approved” or “denied.”  
C. Using an LLM to generate draft marketing copy without any labels.  
D. Running a rules engine that rejects applications below a fixed credit score.

**Correct answer:** B  

**Reasoning:**  
Supervised learning uses labeled examples mapping inputs to known outputs, such as historical applications labeled approved/denied. Clustering is unsupervised, generation without labels is not standard supervised learning, and a rules engine is not learning from labels.

---

## Q13 – Unsupervised learning nuance

**Question:**  
A data science team wants to discover previously unknown customer segments based only on purchase patterns and demographics, without predefined segment labels. Which learning paradigm is most appropriate?

A. Supervised learning.  
B. Unsupervised learning.  
C. Reinforcement learning.  
D. Semi-supervised learning.

**Correct answer:** B  

**Reasoning:**  
Unsupervised learning is used when there are no labels and the goal is to find structure or patterns in the data, such as clusters or latent groups. Customer segmentation from unlabeled behavior is a classic unsupervised use case.

---

## Q14 – Reinforcement learning detail

**Question:**  
Which statement best captures the core idea of reinforcement learning?

A. The model passively fits a function from labeled inputs to outputs.  
B. An agent interacts with an environment, taking actions and learning a policy that maximizes cumulative reward over time.  
C. The model clusters data points to discover underlying groups.  
D. The model learns from a static dataset without any feedback.

**Correct answer:** B  

**Reasoning:**  
Reinforcement learning centers on an agent–environment loop, where actions yield rewards and the agent learns a policy to maximize long-term return. The other options describe supervised, unsupervised, or static learning setups.

---

## Q15 – Foundation model characteristics

**Question:**  
Which aspect most distinguishes a *foundation model* from a traditional task-specific model?

A. It must be open source and free to use.  
B. It is trained on broad, large-scale data and then adapted for many downstream tasks, often via fine-tuning or prompting.  
C. It can only be used for text generation tasks.  
D. It does not require any governance because it is pre-trained.

**Correct answer:** B  

**Reasoning:**  
Foundation models are large, general-purpose models pre-trained on broad data and reused across many tasks. Openness, modality restrictions, and lack of governance are not defining properties.

---

## Q16 – Prompt engineering depth

**Question:**  
Which practice is the best example of *prompt engineering* for a large language model used in an enterprise knowledge assistant?

A. Rewriting the model’s source code to improve performance.  
B. Carefully structuring instructions, context, and examples in the input so the model produces consistent, policy-compliant answers.  
C. Increasing GPU memory to allow larger batch sizes.  
D. Randomly varying prompts to avoid repetition.

**Correct answer:** B  

**Reasoning:**  
Prompt engineering focuses on crafting inputs—instructions, constraints, examples, and context—to steer model behavior. Changing code or infrastructure is outside prompt engineering, and random variation does not reliably improve consistency or compliance.

---

## Q17 – Hallucination risk

**Question:**  
A legal assistant chatbot confidently cites a non-existent court case with a plausible-sounding name and reference. What is the best description of this failure mode?

A. Data leakage.  
B. Concept drift.  
C. Model hallucination.  
D. Underfitting.

**Correct answer:** C  

**Reasoning:**  
Hallucination occurs when a model produces fluent but factually incorrect or fabricated content. Data leakage, drift, and underfitting are different issues related to data misuse, changing distributions, or insufficient learning.

---

## Q18 – EU AI Act risk tiers

**Question:**  
Under the EU AI Act, which AI use case is *most likely* to be classified in a higher risk category requiring strict controls?

A. A generative model used to create abstract art wallpapers.  
B. A chatbot suggesting movie recommendations for a streaming service.  
C. An AI system used to screen job applicants for hiring decisions across the EU.  
D. A personal note-taking assistant that summarizes a user’s own documents locally.

**Correct answer:** C  

**Reasoning:**  
The EU AI Act treats systems that significantly affect individuals’ rights and opportunities (e.g., employment, education, law enforcement) as high-risk, subject to stringent requirements. Entertainment and personal productivity use cases are typically lower risk.

---

## Q19 – High-risk AI obligations

**Question:**  
For an AI system classified as *high-risk* under the EU AI Act (for example, an automated hiring tool), which obligation is most relevant?

A. No documentation is required if the model is accurate.  
B. The provider must implement risk management, data quality controls, technical documentation, human oversight, and post-market monitoring.  
C. The system is banned and cannot be deployed in the EU.  
D. Only a public transparency notice is required.

**Correct answer:** B  

**Reasoning:**  
High-risk systems are permitted but subject to stringent obligations, including risk management, quality management, documentation, human oversight, and monitoring. Only certain unacceptable-risk systems are prohibited, and transparency alone is insufficient.

---

## Q20 – GDPR and AI training data

**Question:**  
A company wants to train a recommendation model on EU customers’ clickstream data that is linked to identifiable user profiles. Under GDPR, which practice is most aligned with compliance expectations?

A. Collecting all available behavioral data by default without informing users.  
B. Processing personal data based on a valid lawful basis (such as consent or legitimate interest), honoring user rights (access, erasure), and applying data minimization and purpose limitation.  
C. Storing personal data indefinitely as long as it improves model accuracy.  
D. Treating any data used for AI training as exempt from GDPR.

**Correct answer:** B  

**Reasoning:**  
GDPR requires a lawful basis for processing, transparency, respect for data subject rights, and adherence to principles like data minimization and purpose limitation. Indefinite storage, non-transparency, or exempting AI training from GDPR are non-compliant.


## Q21
**Under GDPR, what is a 'Data Subject'?**

- A. The topic that data is about.
- B. An identified or identifiable natural person whose personal data is processed.
- C. The person who collects data.
- D. The organization that stores data.

---

## Q22
**What is 'Differential Privacy'?**

- A. A method for keeping different types of data separate.
- B. A technique that adds statistical noise to data to protect individual privacy while still allowing useful analysis.
- C. A way to differentiate between private and public data.
- D. A privacy law for different countries.

---

## Q23
**What is 'Federated Learning'?**

- A. A learning method used by the federal government.
- B. A machine learning approach where a model is trained across multiple decentralized devices holding local data samples, without sharing the raw data.
- C. A way for different AI systems to learn from each other.
- D. A centralized learning system for AI.

---

## Q24
**What is a 'Deepfake'?**

- A. A very convincing lie.
- B. AI-generated synthetic media, often video or audio, that realistically depicts someone saying or doing something they never did.
- C. A fake deep learning model.
- D. A deep fake internet connection.

---

## Q25
**What is 'AI Fairness'?**

- A. When all AI systems are given equal computing power.
- B. The principle that AI systems should treat all individuals and groups equitably and without discrimination.
- C. Ensuring AI systems are priced fairly.
- D. When AI is used in fair competitions.

---

## Q26
**What is the purpose of an 'AI Risk Assessment'?**

- A. To assess the financial risk of investing in AI.
- B. To identify, analyze, and evaluate the potential harms and negative impacts of an AI system before and during its deployment.
- C. To determine if an AI system is too risky to be profitable.
- D. To assess the risk that AI will replace human jobs.

---

## Q27
**What is 'Model Drift'?**

- A. When a model is moved from one server to another.
- B. The degradation of a model's predictive performance over time as the real-world data it operates on changes from the data it was trained on.
- C. When a model's code drifts into a corrupt state.
- D. When a model is not anchored to a specific task.

---

## Q28
**What is 'Data Minimization' as a principle?**

- A. Making datasets as small as possible to save storage.
- B. The principle that only the data that is necessary for a specific purpose should be collected and processed.
- C. Minimizing the number of data sources used.
- D. Reducing the cost of data storage.

---

## Q29
**What is 'Informed Consent' in the context of data collection?**

- A. When an AI system consents to being trained.
- B. The process by which individuals are given clear information about how their data will be used and voluntarily agree to it.
- C. Informing employees about data collection policies.
- D. A form signed by data scientists before starting a project.

---

## Q30
**What is 'AI Governance'?**

- A. When a government uses AI to manage its operations.
- B. The framework of rules, policies, and processes that guide the responsible development and use of AI within an organization.
- C. A new type of government powered by AI.
- D. The government's department responsible for AI.

---

## Q31
**What is a 'Chatbot'?**

- A. A robot that can chat.
- B. A software application designed to simulate human-like conversation, often using AI.
- C. A type of social media bot.
- D. A chat application for software developers.

---

## Q32
**What is 'Computer Vision'?**

- A. The ability of computers to see in the dark.
- B. A field of AI that enables computers to interpret and understand visual information from images and videos.
- C. The visual display of a computer monitor.
- D. A type of software for video editing.

---

## Q33
**What is a 'Recommendation System'?**

- A. A system for making business recommendations.
- B. An AI system that suggests relevant items or content to users based on their past behavior and preferences.
- C. A system for recommending employees for promotion.
- D. A way for AI systems to recommend each other.

---

## Q34
**What is 'Robotic Process Automation' (RPA)?**

- A. The automation of robot assembly lines.
- B. Technology that uses software robots to automate repetitive, rule-based digital tasks.
- C. Teaching robots how to move.
- D. A process for automating the manufacture of robots.

---

## Q35
**What is the 'Turing Test'?**

- A. A test for measuring computing speed.
- B. A test proposed by Alan Turing to determine if a machine can exhibit intelligent behavior indistinguishable from a human.
- C. A way to test new AI programming languages.
- D. A security test for AI systems.

---

## Q36
**What is 'Artificial General Intelligence' (AGI)?**

- A. A general-purpose AI that can do multiple tasks.
- B. A hypothetical AI that can perform any intellectual task that a human being can.
- C. An AI system used by general contractors.
- D. A type of AI that is generally available to the public.

---

## Q37
**What is 'Narrow AI' (or Weak AI)?**

- A. An AI system with limited computing power.
- B. An AI system designed and trained for a specific, well-defined task.
- C. An AI system that is less intelligent than a human.
- D. An AI system used in small businesses.

---

## Q38
**What does 'Privacy by Design' mean?**

- A. Designing buildings with privacy in mind.
- B. An approach to systems engineering that integrates privacy and data protection principles from the earliest stages of design.
- C. A method for designing private AI systems.
- D. A type of software licensing model.

---

## Q39
**What is an 'Adversarial Attack' on an AI system?**

- A. A cyber attack on a company's AI department.
- B. A technique where an attacker provides malicious input to cause an AI model to make mistakes or produce unintended outputs.
- C. When two AI systems compete against each other.
- D. A type of legal challenge against an AI company.

---

## Q40
**What is 'Model Interpretability'?**

- A. The ability to translate a model's outputs into different languages.
- B. The degree to which a human can understand the cause of a decision made by a machine learning model.
- C. How easy it is to use an AI model.
- D. The ability of a model to interpret human commands.

---

## Q41
**What is 'Data Augmentation'?**

- A. Adding more computers to a data center.
- B. Techniques used to increase the size and diversity of a training dataset by creating modified versions of existing data.
- C. Upgrading data storage hardware.
- D. The process of adding new data fields to a database.

---

## Q42
**What is a 'Knowledge Graph'?**

- A. A graph that shows how much a company knows.
- B. A structured representation of knowledge that describes real-world entities and the relationships between them.
- C. A diagram used in knowledge management training.
- D. A type of chart used in data science.

---

## Q43
**What is 'Transfer Learning'?**

- A. Moving a machine learning model from one server to another.
- B. A machine learning technique where a model trained on one task is reused as the starting point for a model on a different but related task.
- C. Transferring data between different AI systems.
- D. A method of paying for AI services.

---

## Q44
**What is a 'Decision Tree'?**

- A. A tree used to make decisions about planting.
- B. A type of machine learning model that uses a tree-like structure to make decisions based on sequential rules.
- C. An organizational chart for a decision-making body.
- D. A diagram for mapping out business strategies.

---

## Q45
**What does 'Open Source AI' mean?**

- A. AI that is available on the internet.
- B. AI models and tools whose source code, weights, and training methodology are publicly available for anyone to use, modify, and distribute.
- C. AI that can open files and programs.
- D. AI software that doesn't require a license.

---

## Q46
**What is the primary goal of 'Responsible AI'?**

- A. To ensure AI systems are cost-effective.
- B. To develop and deploy AI in a way that is ethical, transparent, fair, accountable, and respects human rights.
- C. To make AI systems respond faster.
- D. To ensure AI can respond to any question.

---

## Q47
**What is a 'Black Box' AI model?**

- A. An AI system that only works in dark environments.
- B. An AI system whose internal workings and decision-making process are opaque and not easily understood by humans.
- C. A secure, encrypted AI system.
- D. An AI model that is classified by the government.

---

## Q48
**What is 'AI Literacy'?**

- A. The ability for an AI system to read.
- B. The ability to understand how AI works, its capabilities and limitations, and its impact on society.
- C. Reading textbooks about AI.
- D. A certification program for AI developers.


***

## Q49
**What is 'Predictive Policing'?**

- A. Predicting when police officers will be needed.
- B. The use of AI algorithms to predict where crimes are likely to occur or who is likely to commit them, in order to allocate police resources.
- C. Using AI to predict the outcome of criminal trials.
- D. A way for police to predict traffic patterns.

***

## Q50
**What is a 'Generative Adversarial Network' (GAN)?**

- A. A network of AI systems that compete for resources.
- B. A type of AI architecture where two neural networks — a generator and a discriminator — compete with each other to produce realistic synthetic data.
- C. An AI system designed to detect and counter adversarial attacks.
- D. A network used for secure AI communications.

***

## Q51
**What is the NIST AI Risk Management Framework (AI RMF)?**

- A. A government mandate for AI companies.
- B. A voluntary framework from the U.S. National Institute of Standards and Technology designed to help organizations manage risks related to AI systems.
- C. A risk scoring system for AI investments.
- D. A framework for managing IT infrastructure risks.

***

## Q52
**What does 'Human-in-the-Loop' mean in AI?**

- A. A human who is trapped inside an AI system.
- B. A design approach where human judgment is incorporated into the AI decision-making process, especially for critical or high-stakes decisions.
- C. A human who manually enters all data into an AI system.
- D. A requirement for humans to monitor all AI outputs 24/7.

***

## Q53
**What is 'Model Cards' in the context of AI?**

- A. Business cards for AI researchers.
- B. Short documents that provide key information about a machine learning model, including its intended use, performance metrics, and limitations.
- C. Cards used to activate AI software licenses.
- D. Index cards used to organize training data.

***

## Q54
**What is 'Synthetic Data'?**

- A. Data created by chemical synthesis.
- B. Artificially generated data that mimics real-world data, used to train AI models without exposing sensitive information.
- C. Data that has been compressed and encrypted.
- D. Data collected from synthetic materials research.

***

## Q55
**What is 'Algorithmic Transparency'?**

- A. Making algorithm code publicly visible at all times.
- B. The principle that the logic, data, and processes behind an algorithmic decision should be explainable and accessible to affected parties.
- C. Ensuring algorithms run without any hidden processes.
- D. A law requiring all AI companies to publish their source code.

***

## Q56
**What is 'AI Watermarking'?**

- A. Adding a visual logo to AI-generated images.
- B. Embedding imperceptible signals or metadata into AI-generated content so it can be identified as machine-generated.
- C. A technique to protect AI software from piracy.
- D. Marking AI systems with a government-approved certification.

***

## Q57
**What is the 'Right to Explanation' under GDPR?**

- A. The right of companies to explain why they use AI.
- B. The right of individuals to receive a meaningful explanation of the logic behind automated decisions that significantly affect them.
- C. The right of AI systems to explain their own behavior.
- D. A requirement for AI developers to publish technical documentation.

***

## Q58
**What is 'Bias Mitigation' in AI?**

- A. Reducing the size of training datasets.
- B. Techniques and processes applied to identify and reduce unfair bias in AI models and their outputs.
- C. Training AI systems to be less opinionated.
- D. Removing all human input from the AI training process.

***

## Q59
**What is a 'Shadow Model'?**

- A. A backup AI model kept in reserve.
- B. A copy of an AI model trained by an attacker using queries to the original model, used to craft adversarial attacks.
- C. An AI model that operates in the background without user knowledge.
- D. A model used for internal testing only.

***

## Q60
**What is 'AI Auditing'?**

- A. A financial audit of AI company spending.
- B. The systematic examination of an AI system to assess its performance, fairness, safety, and compliance with relevant standards and regulations.
- C. Reviewing AI-generated content for errors.
- D. An internal process for selecting the best AI tools.

***

## Q61
**What is 'Responsible Disclosure' in AI?**

- A. A requirement to disclose all AI usage to customers.
- B. The practice of responsibly reporting discovered vulnerabilities or harms in an AI system to the developer so they can be addressed before being exploited.
- C. Disclosing the results of an AI audit to regulators.
- D. Publishing AI research findings in academic journals.

***

## Q62
**What is a 'Data Sheet for Datasets'?**

- A. A spreadsheet containing raw training data.
- B. A document that describes a dataset's motivation, composition, collection process, and recommended uses, to improve transparency and accountability.
- C. A technical specification sheet for data storage hardware.
- D. A summary of how much data an AI model requires.

***

## Q63
**What does 'Accountability' mean in the context of AI?**

- A. Tracking how much money is spent on AI.
- B. The principle that individuals and organizations are responsible for the outcomes of AI systems they develop and deploy, and can be held answerable for them.
- C. Making AI systems count their own errors.
- D. Requiring AI systems to keep detailed logs.

***

## Q64
**What is 'AI Impact Assessment'?**

- A. Measuring the computing power impact of an AI system.
- B. A process to evaluate the potential positive and negative consequences of deploying an AI system on individuals, groups, and society.
- C. Assessing how much an AI investment will grow.
- D. Measuring the carbon footprint of an AI data center.

***

## Q65
**What is 'Consent Management' in the context of AI and data?**

- A. Managing the consent forms employees sign.
- B. The processes and tools used to collect, store, and honor user consent preferences regarding how their personal data is used.
- C. An AI system that manages employee agreements.
- D. A database of user passwords and permissions.

***

## Q66
**What is the 'Right to be Forgotten' (Right to Erasure)?**

- A. The right of AI developers to delete unsuccessful models.
- B. A GDPR right that allows individuals to request the deletion of their personal data when it is no longer necessary or when consent is withdrawn.
- C. The right of companies to delete records older than 7 years.
- D. An AI feature that automatically deletes old user data.

***

## Q67
**What is 'AI Explainability' different from 'AI Interpretability'?**

- A. They are exactly the same thing.
- B. Interpretability refers to the degree a human can understand the internal mechanics of a model, while explainability refers to actions taken to make those mechanics understandable to a broader audience.
- C. Explainability is a legal requirement; interpretability is voluntary.
- D. Interpretability applies only to neural networks; explainability applies to all AI.

***

## Q68
**What is 'Dual Use' in the context of AI?**

- A. Using two different AI systems simultaneously.
- B. The concept that AI technologies, research, or data developed for beneficial purposes can also be used to cause harm.
- C. An AI licensing model that allows two users to share a subscription.
- D. Using AI in two different business departments.

***

## Q69
**What is 'Algorithmic Accountability'?**

- A. Making the algorithm pay for its mistakes.
- B. The principle that those who develop and deploy algorithms should be held responsible for their impacts and any harm they may cause.
- C. A way to count the number of algorithms in a system.
- D. The process of writing new algorithms.

***

## Q70
**In AI, 'Security' refers to:**

- A. The physical security of the computer.
- B. Protecting AI systems from unauthorized access, use, disclosure, disruption, modification, or destruction.
- C. The speed of the AI's processor.
- D. The amount of data the AI can store.

***

## Q71
**What is 'AI Safety'?**

- A. Making sure the AI doesn't fall off the table.
- B. The field of study concerned with ensuring that AI systems behave as intended and do not cause harm to humans or the environment.
- C. A way to make AI models run faster.
- D. The process of building safe hardware for AI.

***

## Q72
**Which of the following is a key requirement for 'Trustworthy AI' according to the EU AI Act?**

- A. Human agency and oversight.
- B. Technical robustness and safety.
- C. Privacy and data governance.
- D. All of the above.

***

## Q73
**What is 'Algorithmic Bias'?**

- A. When an algorithm is very biased towards one specific color.
- B. Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.
- C. A way to make algorithms run faster.
- D. The process of writing new algorithms.

***

## Q74
**In AI, 'Transparency' means:**

- A. Being able to see through the computer screen.
- B. Providing clear

## Q49
**What is 'Predictive Policing'?**

- A. Predicting when police officers will be needed.
- B. The use of AI algorithms to predict where crimes are likely to occur or who is likely to commit them, in order to allocate police resources.
- C. Using AI to predict the outcome of police investigations.
- D. A system for predicting police budgets.

## Q50
**What is 'Autonomous Weapons System'?**

- A. A weapon that operates automatically.
- B. A weapons system that can select and engage targets without human intervention.
- C. A robotic weapon system controlled remotely.
- D. Any modern military weapon.

---

## Q51
**What is the 'NIST AI Risk Management Framework'?**

- A. A US government financial risk tool.
- B. A voluntary framework published by NIST to help organizations manage risks related to AI systems throughout their lifecycle.
- C. A set of AI safety standards for the military.
- D. A risk scoring system for AI startups.

---

## Q52
**What is 'AI Explainability'?**

- A. A user manual for an AI system.
- B. The ability to describe how and why an AI system produced a particular output in a way that is understandable to humans.
- C. A feature that allows AI to explain its code.
- D. Marketing material describing AI capabilities.

---

## Q53
**What is a 'Synthetic Dataset'?**

- A. A dataset made from recycled materials.
- B. Artificially generated data that mimics the statistical properties of real data, often used to protect privacy or augment training data.
- C. A dataset purchased from a third party.
- D. A combined dataset from multiple sources.

---

## Q54
**What is 'Model Cards'?**

- A. Business cards for AI developers.
- B. Short documents that accompany trained machine learning models, providing information about intended use, performance, limitations, and ethical considerations.
- C. Flash cards used to memorize AI concepts.
- D. Credit cards used to pay for AI services.

---

## Q55
**What is 'AI Watermarking'?**

- A. Protecting AI hardware from water damage.
- B. Embedding hidden signals or metadata into AI-generated content so it can be identified as machine-generated.
- C. Trademarking an AI product name.
- D. Adding a logo to AI-generated images.

---

## Q56
**What is 'Retrieval-Augmented Generation' (RAG)?**

- A. A method for retrieving old AI models.
- B. A technique that combines an AI's generative abilities with retrieval of relevant documents from an external knowledge base to produce more accurate and grounded responses.
- C. A way to augment a dataset by retrieving more data.
- D. A type of AI memory system.

---

## Q57
**What is 'AI Auditing'?**

- A. Auditing the finances of an AI company.
- B. A systematic examination of an AI system to assess its performance, fairness, security, and compliance with relevant standards and regulations.
- C. Reviewing the code of an AI system for errors.
- D. Checking the hardware used by an AI system.

---

## Q58
**What is 'Intellectual Property' (IP) in the context of AI?**

- A. The intelligence built into AI systems.
- B. Legal rights, such as copyrights and patents, that apply to AI-created works and AI technologies, and the complex questions about who owns them.
- C. The property owned by AI companies.
- D. The data stored inside AI systems.

---

## Q59
**What is a 'Digital Twin'?**

- A. Two identical AI systems.
- B. A virtual replica of a physical object, process, or system that uses real-time data and AI to simulate and analyze its real-world counterpart.
- C. A backup copy of a digital system.
- D. An AI system that mimics human behavior.

---

## Q60
**What is 'Edge AI'?**

- A. AI systems that are on the cutting edge of technology.
- B. AI processing that is performed locally on a device (such as a smartphone or IoT sensor) rather than in a centralized cloud server.
- C. AI used to monitor the edges of a network.
- D. AI systems that operate at the geographic edge of a country.

---

## Q61
**What is 'AI Alignment'?**

- A. Aligning multiple AI systems to work together.
- B. The challenge of ensuring that AI systems act in accordance with human values, intentions, and goals.
- C. The process of calibrating an AI system's sensors.
- D. Aligning a company's AI strategy with its business goals.

---

## Q62
**What is 'Informed Consent' in AI?**

- A. Making sure the AI is informed before making a decision.
- B. Ensuring users are clearly informed about how an AI system uses their data and obtaining their agreement before doing so.
- C. A consent form signed by AI developers.
- D. Consent given by a computer program.

---

## Q63
**What is a 'Bias Audit'?**

- A. An audit of biased employees.
- B. A systematic evaluation of an AI system to detect and measure any discriminatory or unfair outcomes it may produce.
- C. A review of the training budget for an AI project.
- D. An audit of the data storage used by an AI system.

---

## Q64
**What is 'Human-in-the-Loop' (HITL)?**

- A. A human who is trapped inside a computer system.
- B. A design principle where a human is involved in the AI decision-making process, providing oversight, feedback, or final approval.
- C. A loop in computer code that requires human input.
- D. A training process that uses human-generated data.

---

## Q65
**What is 'Explainable AI' (XAI)?**

- A. AI that can explain itself to other machines.
- B. A set of methods and techniques that make the outputs of AI systems understandable and interpretable by humans.
- C. AI systems with a very simple design.
- D. AI that explains how to complete tasks.

---

## Q66
**What is a 'Generative Adversarial Network' (GAN)?**

- A. A network of AI systems that compete for resources.
- B. A type of deep learning model consisting of two neural networks — a generator and a discriminator — that compete to produce increasingly realistic synthetic data.
- C. A network used to generate adversarial attacks.
- D. A GAN is a social network for AI developers.

---

## Q67
**What is 'Counterfactual Explanation'?**

- A. An explanation that contradicts the facts.
- B. An explanation of an AI decision that describes what the smallest change to input data would have produced a different output (e.g., "if your income had been $5,000 higher, the loan would have been approved").
- C. A type of story told by an AI system.
- D. An explanation provided when an AI system fails.

---

## Q68
**What is 'Shadow AI'?**

- A. An AI system that is hidden from view.
- B. The use of AI tools and systems by employees within an organization without the knowledge or approval of IT or leadership.
- C. An AI system that monitors other AI systems.
- D. A dark mode version of an AI interface.

---

## Q69
**What is 'Algorithmic Accountability'?**

- A. Making the algorithm pay for its mistakes.
- B. The principle that those who develop and deploy algorithms should be held responsible for their impacts and any harm they may cause.
- C. A way to count the number of algorithms in a system.
- D. The process of writing new algorithms.

---

## Q70
**In AI, 'Security' refers to:**

- A. The physical security of the computer.
- B. Protecting AI systems from unauthorized access, use, disclosure, disruption, modification, or destruction.
- C. The speed of the AI's processor.
- D. The amount of data the AI can store.

---

## Q71
**What is 'AI Safety'?**

- A. Making sure the AI doesn't fall off the table.
- B. The field of study concerned with ensuring that AI systems behave as intended and do not cause harm to humans or the environment.
- C. A way to make AI models run faster.
- D. The process of building safe hardware for AI.

---

## Q72
**Which of the following is a key requirement for 'Trustworthy AI' according to the EU AI Act?**

- A. Human agency and oversight.
- B. Technical robustness and safety.
- C. Privacy and data governance.
- D. All of the above.

---

## Q73
**What is 'Algorithmic Bias'?**

- A. When an algorithm is very biased towards one specific color.
- B. Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.
- C. A way to make algorithms run faster.
- D. The process of writing new algorithms.

---

## Q74
**In AI, 'Transparency' means:**

- A. Being able to see through the computer screen.
- B. Providing clear and understandable information about how an AI system works, what data it uses, and how it reaches its decisions.
- C. Making the AI's code invisible.
- D. A way to make AI models run faster.

---

## Q75
**What is 'Data Governance'?**

- A. The government's data.
- B. The overall management of the availability, usability, integrity, and security of data used in an organization.
- C. A way to govern the data.
- D. The process of deleting old data.

---

## Q76
**Which of the following is a risk of 'Generative AI'?**

- A. The AI becomes too smart and starts creating its own AI.
- B. The potential for generating harmful or biased content, deepfakes, and misinformation at scale.
- C. The AI stops working and people can't create anything.
- D. The AI starts creating things that no one wants.

---

## Q77
**What is 'AI Ethics'?**

- A. The study of how AI can be used to make people more ethical.
- B. The branch of ethics that deals with the ethical issues raised by the development and use of AI.
- C. A way to make AI models run faster.
- D. The process of building ethical hardware for AI.

---

## Q78
**In AI, 'Sustainability' refers to:**

- A. The ability of the AI to sustain itself.
- B. Ensuring that the development and use of AI systems do not have a negative impact on the environment or future generations.
- C. The speed of the AI's processor.
- D. The amount of data the AI can store.

---

## Q79
**What is 'Algorithmic Impact Assessment' (AIA)?**

- A. Measuring the physical impact of an algorithm on a computer.
- B. A process for identifying and evaluating the potential social and ethical impacts of an algorithm before it is deployed.
- C. A way to make algorithms run faster.
- D. The process of writing new algorithms.

---

## Q80
**Which of the following is a key principle of the 'Asilomar AI Principles'?**

- A. AI research should be focused on creating beneficial intelligence.
- B. AI systems should be safe and secure throughout their operational lifetime.
- C. AI should be subject to human control.
- D. All of the above.

---

## Q81
**What is 'AI Governance'?**

- A. The government's AI.
- B. The framework of rules, practices, and processes by which an organization ensures the ethical and legal use of AI.
- C. A way to govern the AI.
- D. The process of building new AI models.

---

## Q82
**In AI, 'Reliability' refers to:**

- A. The physical reliability of the computer.
- B. The ability of an AI system to consistently perform its intended function without failure.
- C. The speed of the AI's processor.
- D. The amount of data the AI can store.

---

## Q83
**What is 'Data Privacy'?**

- A. Keeping your data in a private room.
- B. The right of individuals to control how their personal information is collected, used, and shared.
- C. A way to make data private.
- D. The process of deleting old data.

---

## Q84
**Which of the following is a risk of 'AI-driven Automation'?**

- A. The AI becomes too smart and starts automating everything.
- B. The potential for job displacement, increased inequality, and a loss of human agency.
- C. The AI stops working and everything stops.
- D. The AI starts automating things that don't need to be automated.

---

## Q85
**What is 'Algorithmic Fairness'?**

- A. Ensuring that algorithms are fair to everyone.
- B. The principle that algorithms should not unfairly discriminate against individuals or groups based on protected characteristics.
- C. A way to make algorithms run faster.
- D. The process of writing new algorithms.

---

## Q86
**In AI, 'Inclusion' means:**

- A. Including everyone in the AI's training data.
- B. Ensuring that AI systems are designed and developed with the input and needs of diverse populations in mind.
- C. Including the AI in all company meetings.
- D. Including the AI's code in all projects.

---

## Q87
**What is 'Data Ethics'?**

- A. The study of how data can be used to make people more ethical.
- B. The branch of ethics that deals with the ethical issues raised by the collection, use, and sharing of data.
- C. A way to make data run faster.
- D. The process of building ethical hardware for data.

---

## Q88
**Which of the following is a key principle of the 'Hiroshima AI Process'?**

- A. Promoting the development of safe, secure, and trustworthy AI.
- B. Encouraging international cooperation on AI governance.
- C. Addressing the risks of generative AI.
- D. All of the above.

---

## Q89
**What is 'AI Accountability'?**

- A. Making the AI pay for its mistakes.
- B. The principle that those who develop and deploy AI systems should be held responsible for their impacts and any harm they may cause.
- C. A way to count the number of AI models in a system.
- D. The process of writing new AI models.

---

## Q90
**In AI, 'Safety' refers to:**

- A. Making sure the AI doesn't fall off the table.
- B. Ensuring that AI systems do not cause harm to humans or the environment.
- C. The speed of the AI's processor.
- D. The amount of data the AI can store.

---

## Q91
**What is 'Data Security'?**

- A. Keeping your data in a secure room.
- B. Protecting data from unauthorized access, use, disclosure, disruption, modification, or destruction.
- C. A way to make data secure.
- D. The process of deleting old data.

---

## Q92
**Which of the following is a risk of 'AI-driven Bias'?**

- A. The AI becomes too smart and starts being biased.
- B. The potential for AI systems to reinforce and amplify existing societal biases, leading to unfair and discriminatory outcomes.
- C. The AI stops working and people feel biased.
- D. The AI starts being biased towards things that don't matter.

---

## Q93
**What is 'Algorithmic Transparency'?**

- A. Being able to see through the computer screen.
- B. The principle that the logic and processes behind an algorithm should be open and understandable to users and regulators.
- C. Making the algorithm's code invisible.
- D. A way to make algorithms run faster.

---

## Q94
**In AI, 'Human Agency' means:**

- A. The AI has its own agency.
- B. The ability of humans to make their own choices and have control over AI systems.
- C. A company that provides human workers for AI projects.
- D. A way to use AI to control humans.

---

## Q95
**What is 'Data Provenance'?**

- A. The place where data is born.
- B. The documentation of the origin, history, and ownership of a piece of data.
- C. A type of data that is only used in France.
- D. The process of deleting old data.

---

## Q96
**Which of the following is a key principle of the 'Bletchley Declaration'?**

- A. Identifying AI safety risks of shared concern.
- B. Building a shared scientific and evidence-based understanding of these risks.
- C. Developing respective risk-based policies across countries to foster safety in light of such risks.
- D. All of the above.

---

## Q97
**What is 'AI Transparency'?**

- A. Being able to see through the computer screen.
- B. Providing clear and understandable information about how an AI system works, what data it uses, and how it reaches its decisions.
- C. Making the AI's code invisible.
- D. A way to make AI models run faster.

---

## Q98
**In AI, 'Robustness' refers to:**

- A. The physical strength of the computer.
- B. The ability of an AI system to maintain its performance and safety even when faced with unexpected inputs or adversarial attacks.
- C. The speed of the AI's processor.
- D. The amount of data the AI can store.

---

## Q99
**What is 'Data Governance'?**

- A. The government's data.
- B. The overall management of the availability, usability, integrity, and security of data used in an organization.
- C. A way to govern the data.
- D. The process of deleting old data.

---

## Q100
**What is the primary objective of the 'AI Incident Response' process?**

- A. To hide the incident from the public.
- B. To identify, contain, and mitigate the impact of an AI-related failure or security breach.
- C. To blame the developers for the failure.
- D. To immediately delete the model and all training data.

