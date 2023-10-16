let body = JSON.parse($response.body)
body = {
  "request_date_ms": 1697442916408,
  "request_date": "2023-10-16T07:55:16Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-09-12T14:45:45Z",
    "original_application_version": "1.0",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "com.goodnotes.premium_7dt_1y_999": {
        "original_purchase_date": "2023-10-16T07:55:10Z",
        "expires_date": "2099-10-16T07:58:02Z",
        "is_sandbox": false,
        "refunded_at": null,
        "auto_resume_date": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "active",
        "purchase_date": "2023-10-16T07:55:02Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "store_transaction_id": "2000000436216970"
      }
    },
    "entitlements": {
      "apple_access": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-10-16T07:55:02Z",
        "product_identifier": "com.goodnotes.premium_7dt_1y_999",
        "expires_date": "2099-10-16T07:58:02Z"
      },
      "crossplatform_access": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-10-16T07:55:02Z",
        "product_identifier": "com.goodnotes.premium_7dt_1y_999",
        "expires_date": "2023-10-16T07:58:02Z"
      }
    },
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "original_app_user_id": "5d3b198b-9647-4234-9b49-663a6f83c1cc",
    "last_seen": "2023-10-16T07:48:49Z"
  }
}
$done({body: JSON.stringify(body)})