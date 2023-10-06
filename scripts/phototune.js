var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.subscriptions = {
      "001":{
        "original_purchase_date": "2023-10-05T16:31:47Z",
        "expires_date": "2099-09-13T16:39:22Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "period_type": "normal",
        "purchase_date": "2023-10-05T16:31:47Z",
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "store_transaction_id": "90001740146348"
      }
  },

  obj.subscriber.entitlements = {
    "Subscriptions":{
            "purchase_date": "2023-10-05T16:31:47Z",
            "product_identifier": "001",
            "expires_date":"2099-09-13T16:39:22Z"
    }
}

body = JSON.stringify(obj);
$done({body});