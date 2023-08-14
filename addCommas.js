function addCommas(num) {
  num.toString().replace(/\B(?=(?:\d{3})+)$/g, ",");
}

module.exports = addCommas;

/*
Input	            Expected Output
1234	            “1,234”
1000000	            “1,000,000”
9876543210	        “9,876,543,210”
6	                “6”
-10	                “-10”
-5678	            “-5,678”
(bonus) 12345.678	“12,345.678”
(bonus) -3141592.65	“-3,141,592.65”
*/
