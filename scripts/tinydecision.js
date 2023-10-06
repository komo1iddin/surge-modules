var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.subscriptions = {
      "com.nixwang.decision.pro.annual":{
        "original_purchase_date": "2023-09-23T15:17:20Z",
        "expires_date": "2099-09-26T15:17:19Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "period_type": "normal",
        "purchase_date": "2023-09-23T15:17:19Z",
        "ownership_type": "PURCHASED",
        "store": "app_store",
      }
  },

  obj.subscriber.entitlements = {
    "com.nixwang.decision.entitlements.pro":{
            "purchase_date":"2023-09-23T15:17:19Z",
            "product_identifier": "com.nixwang.decision.pro.annual",
            "expires_date":"2099-09-26T15:17:19Z"
    }
}

body = JSON.stringify(obj);
$done({body});