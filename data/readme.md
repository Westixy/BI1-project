# Data

## Raw data

* lifetime
  * description : Life expectancy at birth for both sexes combined (years)
  * filter : y:\[1950 - 2020\]
  * columns : Country or Area / Year(s) / Value
  * date : 17.01.2018
  * url : http://data.un.org/Data.aspx?q=income&d=PopDiv&f=variableID%3a68%3bcrID%3a1500%2c1501%2c1502%2c1503%2c1517

* birth ratio
  * description : Total fertility rate (live births per woman)
  * filter : y:\[1950 - 2020\]
  * columns : Country or Area / Year(s) / Value
  * date : 17.01.2018
  * url : http://data.un.org/Data.aspx?q=income&d=PopDiv&f=variableID%3a54%3bcrID%3a1500%2c1501%2c1502%2c1503%2c1517

* money
  * description : GDP by Type of Expenditure at current prices - National currency
  * filter : y:2015
  * columns : Country or Area / Year(s) / Item / Value
  * date : 17.01.2018
  * url : http://data.un.org/Data.aspx?q=gdp&d=SNAAMA&f=grID%3a101%3bcurrID%3aNCU%3bpcFlag%3a0

## Processed data

* birth_ratio.csv
  * Is pretty the same that the raw one.
  * changed the colums name to "contry", "year" and "value"

* lifetime.csv
  * Is pretty the same that the raw one.
  * changed the colums name to "contry", "year" and "value"

* lands.csv 
  * Come from the "money" raw file
  * removed columns years and items
  * removed lines where item type was not the GDP
  * changed the colums name to "contry" and "value" 

## Study design

Looking for something that can be used for the need of the project by crowling manually the web and finally found something in data.org

## Code book

### birth_ratio.csv

| name | description  |
|---|---|
| contry | Name of the contry |
| year | Time period |
| value | Ratio of the birth by woman |

### liftime.csv

| name | description  |
|---|---|
| contry | Name of the contry |
| year | Time period |
| value | Average time of life (gender combined) |

### lands.csv

| name | description  |
|---|---|
| contry | Name of the contry |
| GDP | GDP per country in year 2015 |

## Instruction list

* Just run the commands that are described in the [code part](../code/readme.md)
