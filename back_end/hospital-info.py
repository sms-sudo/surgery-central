#!/usr/bin/env python
# coding: utf-8

# In[2]:


import requests
from bs4 import BeautifulSoup


# In[6]:


with open('hospitals.txt') as file:
    hospital_list = file.readlines()
    hospital_list = [line.rstrip() for line in hospital_list]


# In[ ]:


blocks = []

for hospital in hospital_list:
    url = 'http://www.google.com/search?' + "q=" + hospital.replace(' ', "+") + "+contact+information"
    print(url)
    
    r = requests.get(url)
    html_doc = r.text    
    soup = BeautifulSoup(html_doc, 'html.parser')
    
    for s in soup.find_all(id="rhs_block"):
        blocks.append(s)

