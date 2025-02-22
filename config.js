{
	"pairs": {
		"poloniex": {
			"BTC-ETH": {
				"strategy": "stepgaintssl",
				"override": {}
			},	
			"BTC-LTC": {
				"strategy": "stepgaintssl",
				"override": {}	
			},
			"BTC-XMR": {
				"strategy": "stepgaintssl",
				"override": {}
			},
			"BTC-XRP": {
				"strategy": "stepgaintssl",
				"override": {}
			},
			"BTC-DASH": {
				"strategy": "stepgaintssl",
				"override": {}
			},
			"BTC-BURST": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-PPC": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-DOGE": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-BCN": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-BCH": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-STR": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-ETC": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-DCR": {
				"strategy": "stepgain",
				"override": {}
			},
			"BTC-ZEC": {
				"strategy": "stepgain",
				"override": {}
			}
		}
	},
	"strategies": {
		"emotionless": {
		    "NAME": "emotionless",
		    "TRADING_LIMIT": 0.01,
		    "FUNDS_RESERVE" : 0.001,
		    "PERIOD": 15,
		    "BUY_LEVEL": 0.6,
		    "GAIN": 0.6,
		    "EMA1": 16,
		    "EMA2": 8,
		    "HIGH_BB": 49,
		    "LOW_BB": 49,
		    "STDV": 2,
		    "SMAPERIOD": 50,
		    "PANIC_SELL": false,
		    "DOUBLE_UP": false,
		    "DOUBLE_UP_CAP": 1,
		    "STOP_LIMIT": 60,
		    "BUY_ENABLED": true,
		    "SELL_ENABLED": true,
		    "TA_ALWAYS_ON": false,
		    "MIN_VOLUME_TO_BUY": 0.0001,
		    "MIN_VOLUME_TO_SELL": 0.0001,
		    "TRADES_TIMEOUT": 600,
		    "MICROTRADES" : true
		},
		"bb": {
			"NAME": "bb",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600

		},
		"tsslbb": {
			"NAME": "tsslbb",
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"gain": {
			"NAME": "gain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 49,
			"LOW_BB": 49,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"ichimoku": {
			"NAME": "ichimoku",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_LEVEL": 30,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"pp": {
			"NAME": "pp",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PP_BUY": 1e-8,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"tsslpp": {
			"NAME": "tsslpp",
			"BUY_LEVEL": 0.1,
			"GAIN": 1.2,
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_RANGE": 0.6,
			"PP_SELL": 0.12345678,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"stepgain": {
			"NAME": "stepgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 49,
			"LOW_BB": 49,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"BUYLVL": 2,
			"SELLLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"tsslstepgain": {
			"NAME": "tsslstepgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 1.2,
			"BUY_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 49,
			"LOW_BB": 49,
			"STDV": 2,
			"SMAPERIOD": 50,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"SELLLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"tssl": {
			"NAME": "tssl",
			"BUY_LEVEL": 0.1,
			"GAIN": 1.2,
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_RANGE": 0.6,
			"SELL_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"tsslgain": {
			"NAME": "tsslgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_RANGE": 0.6,
			"BUY_LEVEL": 0.1,
			"GAIN": 1.2,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 49,
			"LOW_BB": 49,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"pptssl": {
			"NAME": "pptssl",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 1.2,
			"SELL_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PP_BUY": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"stepgaintssl": {
			"NAME": "stepgaintssl",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 1.2,
			"SELL_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 49,
			"LOW_BB": 49,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"BUYLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"gaintssl": {
			"NAME": "gaintssl",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 1.2,
			"SELL_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 49,
			"LOW_BB": 49,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"bbtssl": {
			"NAME": "bbtssl",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.6,
			"GAIN": 1.2,
			"SELL_RANGE": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 45,
			"LOW_BB": 45,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"TSSL_TARGET_ONLY": true,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"bbgain": {
			"NAME": "bbgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"gainbb": {
			"NAME": "gainbb",
			"TRADING_LIMIT": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"bbstepgain": {
			"NAME": "bbstepgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"SELLLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"stepgainbb": {
			"NAME": "stepgainbb",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"BUYLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"bbpp": {
			"NAME": "bbpp",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"ppbb": {
			"NAME": "ppbb",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PP_BUY": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"gainstepgain": {
			"NAME": "gainstepgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"SELLLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"stepgaingain": {
			"NAME": "stepgaingain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"BUYLVL": 2,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"gainpp": {
			"NAME": "gainpp",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"ppgain": {
			"NAME": "ppgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"PP_BUY": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"stepgainpp": {
			"NAME": "stepgainpp",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"BUYLVL1": 0.6,
			"BUYLVL2": 2,
			"BUYLVL3": 70,
			"BUYLVL": 2,
			"PP_SELL": 0.12345678,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		},
		"ppstepgain": {
			"NAME": "ppstepgain",
			"TRADING_LIMIT": 0.001,
			"FUNDS_RESERVE": 0.001,
			"PERIOD": 15,
			"BUY_LEVEL": 0.1,
			"GAIN": 0.6,
			"EMA1": 16,
			"EMA2": 8,
			"HIGH_BB": 40,
			"LOW_BB": 40,
			"STDV": 2,
			"SMAPERIOD": 50,
			"SELLLVL1": 0.6,
			"SELLLVL2": 2,
			"SELLLVL3": 70,
			"SELLLVL": 2,
			"PP_BUY": 1e-8,
			"PANIC_SELL": false,
			"DOUBLE_UP": false,
			"DOUBLE_UP_CAP": 1,
			"DU_CAP_COUNT": 3,
			"DU_METHOD": "HIGHBB",
			"RSI_DU_BUY": 30,
			"DU_BUYDOWN": 2,
			"RSI_BUY_ENABLED": false,
			"RSI_SELL_ENABLED": false,
			"RSI_BUY_LEVEL": 30,
			"RSI_SELL_LEVEL": 70,
			"STOP_LIMIT": 60,
			"BUY_ENABLED": true,
		        "SELL_ENABLED": true,
			"OKKIES_MODE": true,
			"BTC_MONEY_FLOW": 35,
			"TA_ALWAYS_ON": false,
			"MIN_VOLUME_TO_BUY": 0.001,
			"MIN_VOLUME_TO_SELL": 0.001,
			"TRADES_TIMEOUT": 600
		}
	},
	"exchanges": {
		"poloniex": {
			"masterkey": "0GZZ69YP",
			"mastersecret": "92d9161543b5b45e08dccf53d952850354c5113a0372742b5e4a34c612b4e0f9",
			"key": "0G43D9GZ4YP",
			"secret": "92d9161543b5b45e08dccf53d72742b5e4a34c612b4e0f9"
		}
	},
	"bot": {
		"debug": false,
		"BOT_DELAY": 1,
		"BOT_CCLEAN": 2,
		"CANCEL_ORDERS_ENABLED": true,
		"CANCEL_ORDERS_CYCLE_CAP": 1,
		"RESERVE_PILE_UP": false,
		"interval_ticker_update": 25000,
		"period_storage_ticker": 2000,
		"timeout_buy": 60000,
		"timeout_sell": 60000,
		"TV_GAIN": 0.6,
		"TV_TRADING_LIMIT_BUY": 0.001,
		"TV_PYRAMID": true,
		"PYRAMID_BUY": true,
		"TRADING_LIMIT_BUY_PYRAMID": 0.01,
		"TV_TRADING_LIMIT_SELL": 0.001,
		"TV_PROTECTION": true,
		"TV_TRADING_LIMIT_CAP": 0.9,
		"TV_STOPLOSS_PERCENTAGE": 60,
		"VERBOSE": true,
		"WATCH_MODE": false,
		"withdraw_address": "YOURBTCADDRESSHERE",
		"withdraw_threshold": 0.5,
		"TELEGRAM_ENABLED": false,
		"TELEGRAM_NICK": "Gunbot",
		"TOKEN": "put_your_TOKEN_here",
		"chat_id": "put_your_TELEGRAM_ID_here"
	},
	"ws": {
		"port": 5001,
		"clientport": 3000,
		"hostname": "127.0.0.1"
	},
	"imap_listener": {
		"enabled": false,
		"authorized_froms": "[\"noreply@tradingview.com\"]",
		"user": "YOUR_EMAIL_HERE",
		"password": "YOUR_PASSWORD_HERE",
		"host": "imap.gmail.com",
		"port": 993,
		"tls": true,
		"tlsOptions": {
			"rejectUnauthorized": false
		}
	}
}
