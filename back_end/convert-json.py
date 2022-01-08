#!/usr/bin/env python
# coding: utf-8

# In[71]:


import os

for subdir, dirs, files in os.walk('adult csv'):
    for file in files:
        filepath = subdir + os.sep + file
        n = 16
        count = 0
        
        nfirstlines = []

        with open(filepath) as f, open("bigfiletmp.txt", "w") as out:
            for x in range(n):
                nfirstlines.append(next(f))
            for line in f:
                if count < 23:
                    out.write(line)
                    count +=1
        
        os.remove(filepath)
        os.rename("bigfiletmp.txt", filepath) 


# In[72]:


import os
import csv

adult_dic = {}

for subdir, dirs, files in os.walk('adult csv'):
    for file in files:
        filepath = subdir + os.sep + file
        
        name = file.replace("_", " ")
        hospitals = []
        
        with open(filepath, 'r') as file:
            reader = csv.reader(file)
            for row in reader:
                hospitals.append(row)
                
        adult_dic[name.replace(".csv", '')] = hospitals


# In[ ]:


"""
['Hospital', 'Distance: ','Address','Overall wait time','Priority 4 (Days)','Priority 3 (Days)','Priority 2 (Days)'],  
['','','','','within a target time of 182 Days','within a target time of 90 Days','within a target time of 30 Days']

"""


# In[73]:


adult_dic


# In[75]:


for surgery in adult_dic:
    real = []
    
    for hospital in adult_dic[surgery]:
        if '%' in hospital[3]:
            real.append(hospital)

    adult_dic[surgery] = real
    


# In[76]:


adult_dic


# In[79]:


import json
json_object = json.dumps(adult_dic, indent = 4) 
print(json_object)


# In[78]:


with open('adult_surgery.json', 'w') as outfile:
    json.dump(adult_dic, outfile)

