let body = JSON.parse($response.body)

body ={
  "request_date_ms": 1694443478986,
  "request_date": "2023-09-11T14:44:38Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-09-11T14:11:48Z",
    "original_application_version": "380",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "tf_plus_999_1y_1w0": {
        "original_purchase_date": "2023-09-11T14:38:30Z",
        "expires_date": "2066-09-25T14:38:29Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "Active",
        "purchase_date": "2023-09-11T14:38:29Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "store_transaction_id": "330001510832596"
      }
    },
    "entitlements": {
      "plus": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-11T14:38:29Z",
        "product_identifier": "tf_plus_999_1y_1w0",
        "expires_date": "2066-09-25T14:38:29Z"
      }
    },
    "original_purchase_date": "2023-09-11T14:24:13Z",
    "original_app_user_id": "_db366425c0ac33fa9ecc4c9aee1af734",
    "last_seen": "2023-09-11T14:42:29Z"
  }
}
$done({body: JSON.stringify(body)})