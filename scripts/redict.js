let body = JSON.parse($response.body);
body = {
    "subscriber": {
      "non_subscriptions": {},
      "other_purchases": {},
      "management_url": "https://apps.apple.com/account/subscriptions",
      "subscriptions": {
        "dash.redict.pro.year.full": {
          "original_purchase_date": "2023-09-23T10:41:14Z",
          "expires_date": "2099-09-30T10:41:13Z",
          "is_sandbox": false,
          "refunded_at": null,
          "auto_resume_date": null,
          "unsubscribe_detected_at": null,
          "grace_period_expires_date": null,
          "period_type": null,
          "purchase_date": "2023-09-23T10:41:13Z",
          "billing_issues_detected_at": null,
          "ownership_type": "PURCHASED",
          "store_transaction_id": "90001726388269"
        }
      },
      "entitlements": {
        "Pro": {
          "grace_period_expires_date": null,
          "purchase_date": "2023-09-23T10:41:13Z",
          "product_identifier": "dash.redict.pro.year.full",
          "expires_date": "2099-09-30T10:41:13Z"
        }
      },
    }
  }
$done({body: JSON.stringify(body)});