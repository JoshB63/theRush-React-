# "the Rush" 
This is a dynamic database web app that displays all NFL players rushing statistics. I have completed this project by building a React web app that utilizes react-tables to handle filtering, sorting and searching. The user can also download the filtered and sorted data to a CSV file. The user can sort by any column in the table as well as increase/decrease the page size. The solution is also incredibly efficient and can easily handle 10,000 entires. How do I know? I created a mock data set with generated data that fits this projects criteria. It can be used in place of the given data set by changing "SampleData" to "BigData" in line 17 of src/components/table.js. The project uses the standard dataset by default.


### Challenge Background
We have sets of records representing football players' rushing statistics. All records have the following attributes:
* `Player` (Player's name)
* `Team` (Player's team abbreviation)
* `Pos` (Player's postion)
* `Att/G` (Rushing Attempts Per Game Average)
* `Att` (Rushing Attempts)
* `Yds` (Total Rushing Yards)
* `Avg` (Rushing Average Yards Per Attempt)
* `Yds/G` (Rushing Yards Per Game)
* `TD` (Total Rushing Touchdowns)
* `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
* `1st` (Rushing First Downs)
* `1st%` (Rushing First Down Percentage)
* `20+` (Rushing 20+ Yards Each)
* `40+` (Rushing 40+ Yards Each)
* `FUM` (Rushing Fumbles)

##### Requirements
1. Create a web app. This must be able to do the following steps
   - [x] 1. Create a webpage which displays a table with the contents of [`rushing.json`](/rushing.json) 
   - [x] 2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_ 
   - [x] 3. The user should be able to filter by the player's name 
   - [x] 4. The user should be able to download the sorted data as a CSV, as well as a filtered subset 
   - [x] 5. The system should be able to potentially support larger sets of data on the order of 10k records. 


### Installation and running this solution
In order to run, you must have the latest version of VS Code, Node >= 14.0.0 and npm >= 5.6 installed on your machine.

1. Download this solution as a ZIP and Un-zip.
2. Navigate to folder in VS Code.
3. In the terminal "npm i". This will install all depencies.
4. In the terminal: "npm run start". This will run the web app at http://localhost:3000.

## Troubleshooting
Ensure that all the latest version of any required packages are installed. If you run into any additional problems, email me.





