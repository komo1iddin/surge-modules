var objc = JSON.parse($response.body);
    objc = {
  "request_date_ms": 1695398949709,
  "request_date": "2023-09-22T16:09:09Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2022-08-15T09:27:20Z",
    "original_application_version": "8",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "com.quanticapps.quranpro.subscription.year": {
        "original_purchase_date": "2023-09-10T16:35:54Z",
        "expires_date": "2099-09-13T16:39:22Z",
        "unsubscribe_detected_at": null,
        "purchase_date": "2023-09-10T16:35:53Z",
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "store_transaction_id": "90001712947600"
      }
    },
    "entitlements": {
      "com.quanticapps.premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-10T16:35:53Z",
        "product_identifier": "com.quanticapps.quranpro.subscription.year",
        "expires_date": "2099-09-13T16:39:22Z"
      }
    },
    "original_purchase_date": "2021-02-24T07:31:46Z",
    "original_app_user_id": "$RCAnonymousID:87118fe9abfd4f3fa4d25f51c2d9424f",
    "last_seen": "2023-09-22T15:58:36Z"
  }
}
$done({body : JSON.stringify(objc)});