
# coding: utf-8

# In[216]:

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.cross_validation import train_test_split
from sklearn.metrics import classification_report

from datetime import datetime
import itertools

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/send_sms", methods =['POST'])
def hello():
  print("hi")
  data = pd.read_csv(request.form['param'])
  data.head()

if __name__ == "__main__":
  app.run()


# In[217]:

# data = pd.read_csv('test.csv')
# data.head()


# In[218]:

data[data['text'] == 'I want to kill myself']['bool'] = 0
data


# In[219]:

data.info()
data.describe()


# In[220]:

negative_words = np.array(['hate', 'annoy', 'anxious', 'bad', 
                           'corrupt', 'cut', 'crazy', 'dead', 'die', 'depressed',
                          'dreadful', 'evil', 'fear', 'foul', 'frighten', 'gross',
                          'angry', 'ill', 'insane', 'injure', 'jealous', 'malicious',
                          'mean', 'monstrous', 'nobody', 'nonsense', 'pain', 'poor',
                          'quit', 'rage', 'rude', 'rotten', 'reject', 'repulsive', 'savage',
                          'scary', 'severe', 'sucks', 'ugly', 'terrible', 'upset', 'vile',
                          'wicked', 'freak', 'curse', 'not', 'cannot', 'no', 'monster',
                          'trapped', 'burden', 'hopeless', 'gun', 'suicide', 'pills', 'overdose', 'never',
                          'imperfect', 'disapprove', 'hard', 'challenging', 'demanding', 'different'
                          'blame', 'painless', 'kill'])


# In[221]:

data


# ## random branch of other stuff

# In[222]:

from sklearn import feature_extraction

vectorizer = feature_extraction.text.CountVectorizer(vocabulary=negative_words)
X = vectorizer.fit_transform(data['text'])



# In[223]:

X = X.todense()
X


# In[224]:

y = data['bool']


# In[225]:

# equivalent:
# data['bool']
# data.bool


# In[226]:

X.shape


# In[227]:

np.hstack((X,data['score'].reshape((27,1)).shape))


# In[228]:

X_train, X_test, y_train, y_test  = train_test_split(X, y,
    train_size=0.50, 
    random_state=420)


# In[229]:

model = LogisticRegression()


# In[230]:

model.fit(X_train,y_train)


# In[231]:

model.predict_proba(X_test)


# In[232]:

model.coef_


# In[178]:

X_test[0]


# ## end random branch

# In[108]:

def create_vector(string, counter):
    temp = []
    splitString = string.split(" ")
    negCount = 0

    for nword in negative_words:
        temp = np.append(temp, np.array([splitString.count(nword)]))
        if splitString.count(nword) > 0:
            negCount = 1
    
    temp = np.append(temp, np.array([data.score[counter]]))
    
    return np.array(temp,negCount) 

        


# In[104]:

#handling the parent interaction (input as the text string)

def unflag(string,X):
    vec = create_vector(string)
    for v,i in enumerate(X):
        if np.array_equal(v, vec[0]):
            y[i] = 0
    


# In[105]:

#testing flagging
# unflag('I hate you and you a monstrous nobody')

