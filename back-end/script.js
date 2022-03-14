'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const items = [
    'Anguilla (United Kingdom)',
    'Antigua and Barbuda',
    'Argentina',
    'Aruba (Netherlands)',
    'Bahamas',
    'Barbados',
    'Belize',
    'Bermuda (United Kingdom)',
    'Bolivia',
    'Bonaire (Netherlands)',
    'Bouvet Island (Norway)[86]',
    'Brazil',
    'British Virgin Islands (United Kingdom)',
    'Canada',
    'Cayman Islands (United Kingdom)',
    'Chile',
    'Clipperton Island (France)',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Curaçao (Netherlands)',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'El Salvador',
    'Falkland Islands (United Kingdom)',
    'French Guiana (France)',
    'Greenland (Kingdom of Denmark)',
    'Grenada',
    'Guadeloupe (France)',
    'Guatemala',
    'Guyana',
    'Haiti',
    'Honduras',
    'Jamaica',
    'Martinique (France)',
    'Mexico',
    'Montserrat (United Kingdom)',
    'Navassa Island (United States / Haiti)',
    'Nicaragua',
    'Panama',
    'Paraguay',
    'Peru',
    'Puerto Rico (United States)',
    'Saba (Netherlands)',
    'Saint Barthélemy (France)',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (France)',
    'Saint Pierre and Miquelon (France)',
    'Saint Vincent and the Grenadines',
    'Sint Eustatius (Netherlands)',
    'Sint Maarten (Netherlands)',
    'South Georgia and',
    'South Sandwich Islands (UK)',
    'Suriname',
    'Trinidad and Tobago',
    'Turks and Caicos Islands (UK)',
    'United States of America',
    'U.S. Virgin Islands (United States)',
    'Uruguay',
    'Venezuela'
];

app.get('/api/countries', function (req, res) {

    if (!req.query.query) {
        res.status(400).send();
    }

    console.log('query: ', req.query.query);

    items.sort(() => 0.5 - Math.random());

    res.status(200).json(items.slice(0, 9));
});

app.listen(3001);
