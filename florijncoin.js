var myCoin = {
    "name": "Florijncoin",
    "symbol": "FLRN",
    "algorithm": "X11",
    "chainStartTime": 1375801200, //defaults to 1367991200 (YACoin) if not used
    "nMin": 6, 
    "nMax": 32 
};

var Stratum = require('stratum-pool');

var pool = Stratum.createPool({

    "coin": florijncoin,
    
    "address": "FLRzq4AbERbKwfNTMYyfhwkgoEiH4cmh22",
    
    "rewardRecipients": {
        "FDKEqPzmKXEpP8d345qVbuTLcE7KGEKNGR": 1.5, 
        "FDKEqPzmKXEpP8d345qVbuTLcE7KGEKNGR": 0.5,
        "22851477d63a085dbc2398c8430af1c09e7343f6": 0.0 
    },
    
    "blockRefreshInterval": 1000, 
    "jobRebroadcastTimeout": 55,
    "connectionTimeout": 600,
    "emitInvalidBlockHashes": false,
    "tcpProxyProtocol": false,
    "banning": {
        "enabled": true,
        "time": 600, 
        "invalidPercent": 50, 
        "checkThreshold": 500, 
        "purgeInterval": 300 
    },

    "ports": {
        "4882": { 
            "diff": 32, 
            "varDiff": {
                "minDiff": 8, 
                "maxDiff": 512, 
                "targetTime": 15, 
                "retargetTime": 90, 
                "variancePercent": 30 /
            }
        },

        "5332": { 
            "diff": 256 
        }
    },


    "daemons": [
        {   //Main daemon instance
            "host": "127.0.0.1",
            "port": 8349,
            "user": "rpc_florijncoin",
            "password": "6g9030c7c181551ed66740bcc"
        },
        {   //Backup daemon instance
            "host": "127.0.0.1",
            "port": 8349,
            "user": "rpc_florijncoin",
            "password": "6g9030c7c181551ed66740bcc"
        }
    ],


    "p2p": {
        "enabled": false,

        /* Host for daemon */
        "host": "127.0.0.1",
        "port": 19333,
        "disableTransactions": true

    }

}, function(ip, port , workerName, password, callback){ //stratum authorization function
    console.log("Authorize " + workerName + ":" + password + "@" + ip);
    callback({
        error: null,
        authorized: true,
        disconnect: false
    });
});
