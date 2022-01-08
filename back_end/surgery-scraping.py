#!/usr/bin/env python
# coding: utf-8

# In[ ]:


"""
unpack selenium package and move to python folder
it errors occur, clear cache and rerun
"""


# In[1]:


url = 'https://www.ontariohealth.ca/our-work/public-reporting/wait-times'
from selenium import webdriver
import string


# In[ ]:


driver = webdriver.PhantomJS()
driver.get(url)

# select surgical wait times

next_button = driver.find_element_by_link_text('Surgical Wait Times')
next_button.click()

# select adult/paediatric

next_button = driver.find_element_by_link_text('Adult')
next_button.click()

# select location
user = driver.find_element_by_name("Choose a location")
user.send_keys("Toronto, Ontario")

# select browe by category
next_button = driver.find_element_by_link_text('Browse by category')
next_button.click()


# In[ ]:


for letter in list(string.ascii_uppercase):
    next_button = driver.find_element_by_link_text(letter)
    next_button.click()
    
    copiedText = driver.find_element_by_css_selector("surgery-by-character-container").text
    surgery_list.append(copiedText)

