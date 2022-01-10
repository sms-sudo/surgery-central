## Inspiration
On [January 5th 2022](https://toronto.ctvnews.ca/ontario-pauses-non-urgent-surgeries-starting-jan-5-to-deal-with-omicron-surge-1.5726316), the Ontario government ordered an issue that all non-urgent surgeries were to be paused. Due to the third wave of COVID-19, Ontario is facing another crisis of staffing shortages in hospitals because many of the health-care workers are either infected or are isolated. This marks the third time; on [June 13, 2020](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7647484/) and [April 8th 2021](https://www.cbc.ca/news/canada/toronto/covid-19-ontario-hospitals-elective-surgery-icu-patients-1.5980755) a similar order was also issued. With data from 2020, it was after the first wave that Ontario was already [148 364 surgies behind](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7647484/). The data revealing the amount of surgery backlog for Ontario 2021 has yet to be released publicly.

**Each of those thousands of patients — people, loved-ones, fathers, mothers, sisters, brothers, and friends — are potentially increasing their risk of surgery complications and risk of death for every day their surgeries are pushed back.** Among the surgeries affected include not only potentially life-saving surgeries, but those that enhance quality of life. Yet, the web infrastructure from the Ontario government is unclear, non-specific and requires users to fill in extra information, visit multiple websites and search for hospital contact information. This project is built in hopes of providing those in need of hospital and surgery schedules a single dashboard that give them all the information they need to access the healthcare they need.

## What it does
Surgery Central is a data centralization dashboard that draws from Ontario Health and (currently) 20+ Toronto Hospitals to display adult and pediatric surgery offerings and the specific information needed to contact to book/waitlist such surgery. 

## How we built it

### 1. Backend
The Backend development was written using original python scripts to collect csvs from [Ontario Health](https://www.ontariohealth.ca/our-work/public-reporting/wait-times) and the Toronto Hospital's websites. This included using the libraries selenium, beautiful soup and requests. Cleaning of the datasets were also done with python scripts and csvs were converted to dictionaries and json files for ease of access for frontend. Data is updated as of December 2021.

### 2. Frontend
Frontend development was done using the JavaScript library React. We also utilized the Google Maps API for some components of our program. Using JSON files and dictionaries provided by the backend, we were able create an interactive and dynamic web-app using these tools.

## Challenges we ran into
1. *Public Information Statically Available*
As of 2020, Public Health Ontario has focused the majority of it's resources on responding to the COVID-19 public health emergency and has limited capacity to process FOI requests. Therefore we had to write a script to webscrape the surgery wait-time database.
The urls for the Ontario Health Database is static, and therefore required using Selenium to collect all the different surgeries and top 23 locations in Toronto for both adults and children. This led us on a journey of understanding how to use the libraries, how the Ontario website *does* have a range of defensive methods to prevent webscraping, and the importance of exactly ``time.sleep(2.2)`` <sub><sup> (pst it's a sweet spot)</sup></sub>.

2. *API Connection Woes* 
We originally wanted to have a map embedded on one of the pages, giving the individual directions to the hospital. Unfortunately, this proved too difficult to implement in such a short timeframe. For now, the embedded map does show up, thanks to the perseverance and problem-solving skills of one of our members, but it is not the hospital’s location. Rather, a random spot which is constant. This was included anyway in our final product as a POC and in the future this feature shall be implemented. Overall, the Google Maps API proved to be quite challenging and one of our front-end developers ran into some issues with the network connectivity of the site itself. We thought it was an issue on our end, but it soon became clear when things started magically working again that it was the API itself. 

## Accomplishments that we're proud of
We are proud to address the huge problem of lack of web infrastructure from the Ontario government to search for the medical care needed when patients are navigating the healthcare system. Regardless of being in a pandemic, everyone has the right to access health care to better or save their life. We are proud to have created an application that helps those in need in this difficult time.

We are proud of the quality of our project, Surgery Central, and of each other! Our team problem solved, debugged, struggled, and most importantly made sure to have fun! :)

## What we learned
- We learned how to use the Google Maps platform on Google Cloud
- We learned to use React to create a dynamic website that would be updated when drawing live data
- We learned how to use our personal skills and teamwork to split the tasks to our advantage and merge our work 
- We learned 36 hours can *and will* go on warp speed when having fun...

## What's next for Surgery Central 
Looking to submit a data request to Ontario Health for continually updated data (on a monthly basis schedule) and launch the website for public use.
