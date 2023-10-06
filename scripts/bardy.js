var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.subscriptions = {
      "com.am.gpt3.monthly":{
        "original_purchase_date": "2023-09-10T15:58:25Z",
        "expires_date": "2099-09-13T16:39:22Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "period_type": "normal",
        "purchase_date": "2023-09-10T15:58:24Z",
        "ownership_type": "PURCHASED",
        "store": "app_store",
      }
  },

  obj.subscriber.entitlements = {
    "Pro":{
            "product_identifier": "com.am.gpt3.monthly",
            "purchase_date":"2023-09-10T15:58:24Z",
            "expires_date":"2099-09-13T16:39:22Z",
    }
}

body = JSON.stringify(obj);
$done({body});