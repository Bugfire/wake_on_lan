#!/usr/bin/env node

'use strict';

var wol = require('wake_on_lan');
var config = require('/data/config.js');

function kick() {
    config.hosts.forEach(function(host) {
        console.log('ping to ' + host);
        wol.wake(host);
    });
};

var CronJob = require('cron').CronJob;
new CronJob(config.schedule, kick, null, true, config.timezone);
