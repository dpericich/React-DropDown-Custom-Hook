const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3003;

app.listen(port, () => {});

app.get('/state-names', (req, res) => {
    res.json({ status: 200, data: stateNames })
});


const stateNames = [
    {
        value: 'AL',
        readableName: 'Alabama',
        disabled: false   
    },
    {
        value: 'AK',
        readableName: 'Alaska',
        disabled: false   
    },
    {
        value: 'AZ',
        readableName: 'Arizona',
        disabled: false   
    },
    {
        value: 'AR',
        readableName: 'Arkansas',
        disabled: false   
    },
    {
        value: 'CA',
        readableName: 'California',
        disabled: false   
    },
    {
        value: 'CO',
        readableName: 'Colorado',
        disabled: false   
    },
    {
        value: 'CT',
        readableName: 'Conneticut',
        disabled: false   
    },
    {
        value: 'DE',
        readableName: 'Delaware',
        disabled: false   
    },
    {
        value: 'FL',
        readableName: 'Florida',
        disabled: false   
    },
    {
        value: 'GA',
        readableName: 'Georgia',
        disabled: false   
    },
    {
        value: 'HI',
        readableName: 'Hawaii',
        disabled: false   
    },
    {
        value: 'ID',
        readableName: 'Idaho',
        disabled: false   
    },
    {
        value: 'IL',
        readableName: 'Illinois',
        disabled: false   
    },
    {
        value: 'IN',
        readableName: 'Indiana',
        disabled: false   
    },
    {
        value: 'IA',
        readableName: 'Iowa',
        disabled: false   
    },
    {
        value: 'KS',
        readableName: 'Kansas',
        disabled: false   
    },
    {
        value: 'KY',
        readableName: 'Kentucky',
        disabled: false   
    },
    {
        value: 'LA',
        readableName: 'Louisiana',
        disabled: false   
    },
    {
        value: 'ME',
        readableName: 'Maine',
        disabled: false   
    },
    {
        value: 'MD',
        readableName: 'Maryland',
        disabled: false   
    },
    {
        value: 'MA',
        readableName: 'Massachusetts',
        disabled: false   
    },
    {
        value: 'MI',
        readableName: 'Michigan',
        disabled: false   
    },
    {
        value: 'MN',
        readableName: 'Minnesota',
        disabled: false   
    },
    {
        value: 'MS',
        readableName: 'Mississippi',
        disabled: false   
    },
    {
        value: 'MO',
        readableName: 'Missouri',
        disabled: false   
    },
    {
        value: 'MT',
        readableName: 'Montana',
        disabled: false   
    },
    {
        value: 'NE',
        readableName: 'Nebraska',
        disabled: false   
    },
    {
        value: 'NV',
        readableName: 'Nevada',
        disabled: false   
    },
    {
        value: 'NH',
        readableName: 'New Hampshire',
        disabled: false   
    },
    {
        value: 'NJ',
        readableName: 'New Jersey',
        disabled: false   
    },
    {
        value: 'NM',
        readableName: 'New Mexico',
        disabled: false   
    },
    {
        value: 'NY',
        readableName: 'New York',
        disabled: false   
    },
    {
        value: 'NC',
        readableName: 'North Carolina',
        disabled: false   
    },
    {
        value: 'ND',
        readableName: 'North Dakota',
        disabled: false   
    },
    {
        value: 'OH',
        readableName: 'Ohio',
        disabled: false   
    },
    {
        value: 'OK',
        readableName: 'Oklahoma',
        disabled: false   
    },
    {
        value: 'OR',
        readableName: 'Oregon',
        disabled: false   
    },
    {
        value: 'PA',
        readableName: 'Pennsylvania',
        disabled: false   
    },
    {
        value: 'RI',
        readableName: 'Rhode Island',
        disabled: false   
    },
    {
        value: 'SC',
        readableName: 'South Carolina',
        disabled: false   
    },
    {
        value: 'SD',
        readableName: 'South Dakota',
        disabled: false   
    },
    {
        value: 'TN',
        readableName: 'Tennessee',
        disabled: false   
    },
    {
        value: 'TX',
        readableName: 'Texas',
        disabled: false   
    },
    {
        value: 'UT',
        readableName: 'Utah',
        disabled: false   
    },
    {
        value: 'VT',
        readableName: 'Vermont',
        disabled: false   
    },
    {
        value: 'VA',
        readableName: 'Virginia',
        disabled: false   
    },
    {
        value: 'WA',
        readableName: 'Washington',
        disabled: false   
    },
    {
        value: 'WV',
        readableName: 'West Virginia',
        disabled: false   
    },
    {
        value: 'WI',
        readableName: 'Wisconsin',
        disabled: false   
    },
    {
        value: 'WY',
        readableName: 'Wyoming',
        disabled: false   
    },
]
