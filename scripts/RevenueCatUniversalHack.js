let reqHeaders = $request.headers
let resHeaders = $response.headers
if(!$response.body || !reqHeaders["x-revenuecat-etag"]) {
	$done({})
}
else{
	let body = JSON.parse($response.body)
	let e = []
	let p = Object.keys(body.product_entitlement_mapping)[0]
	resHeaders["x-revenuecat-etag"] = reqHeaders["x-revenuecat-etag"]
	for(let key in body.product_entitlement_mapping) { 
		e = e.concat(body["product_entitlement_mapping"][key]["entitlements"])
		if(key.search(/(life\.?|one\.?)time/) != -1) {
			p = key
		}
	}
	body = {
	  "request_date_ms": 1694002319034,
	  "request_date": "2023-09-06T12:11:59Z",
	  "subscriber": {
	    "non_subscriptions": {},
	    "first_seen": "2023-09-06T12:11:26Z",
	    "original_application_version": "550",
	    "other_purchases": {},
	    "management_url": "https://apps.apple.com/account/subscriptions",
	    "subscriptions": {
	      [p]: {
	        "original_purchase_date": "2023-09-06T12:08:00Z",
	        "expires_date": "2099-09-09T20:20:20Z",
	        "is_sandbox": false,
	        "refunded_at": null,
	        "auto_resume_date": null,
	        "unsubscribe_detected_at": null,
	        "grace_period_expires_date": null,
	        "period_type": "normal",
	        "purchase_date": "2023-09-06T12:07:59Z",
	        "billing_issues_detected_at": null,
	        "ownership_type": "PURCHASED",
	        "store": "app_store",
	        "store_transaction_id": "430001546235440"
	      }
	    },
	    "entitlements": {},
	    "original_purchase_date": "2023-09-06T12:10:00Z",
	    "original_app_user_id": "$RCAnonymousID:adfee842a63d4001933be5d3d08e7856",
	    "last_seen": "2023-09-06T12:11:26Z"
	  }
	}
	for(let i = 0; i < e.length; i++) {
		body["subscriber"]["entitlements"][e[i]] = {
	        "grace_period_expires_date": null,
	        "purchase_date": "2023-09-06T12:07:59Z",
	        "product_identifier": p,
	        "expires_date": "2099-09-09T20:20:20Z"
	      }
	}
	$done({body: JSON.stringify(body), headers: resHeaders})
}
