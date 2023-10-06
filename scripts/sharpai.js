var body = $response.body;
var obj = JSON.parse(body);

obj.subscriber.subscriptions = {
        "ape.weekly.trial": {
          "original_purchase_date": "2023-10-05T16:26:23Z",
          "expires_date": "2099-09-13T16:39:22Z",
          "is_sandbox": false,
          "refunded_at": null,
          "unsubscribe_detected_at": null,
          "grace_period_expires_date": null,
          "period_type": "normal",
          "purchase_date": "2023-10-05T16:26:22Z",
          "ownership_type": "PURCHASED",
          "store": "app_store",
          "store_transaction_id": "90001740141629"
        }
      },
      obj.subscriber.entitlements = {
        "pro": {
          "grace_period_expires_date": null,
          "purchase_date": "2023-10-05T16:26:22Z",
          "product_identifier": "ape.weekly.trial",
          "expires_date": "2099-09-13T16:39:22Z"
        }
      }

body = JSON.stringify(obj);
$done({body});