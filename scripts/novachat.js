let body = JSON.parse($response.body)
body = {
  "data": {
    "type": "adapty_inapps_apple_receipt_validation_result",
    "id": "e0bafcb6-6358-4064-90f3-2beec0f427ba",
    "attributes": {
      "app_id": "a8c5ac2e-0f65-419a-bdf8-5605def7f71d",
      "total_revenue_usd": 0,
      "customer_user_id": "49D8D04DD4BE403DA91E4B4D97CBECBF",
      "subscriptions": {
        "chatai_weekly_3dft_ios_2": {
          "vendor_transaction_id": "430001583748940",
          "offer_id": null,
          "billing_issue_detected_at": null,
          "is_lifetime": false,
          "store": "app_store",
          "vendor_product_id": "chatai_weekly_3dft_ios_2",
          "cancellation_reason": null,
          "will_renew": true,
          "vendor_original_transaction_id": "430001583748940",
          "renewed_at": "2023-10-13T21:19:24.000000+0000",
          "active_promotional_offer_id": null,
          "active_promotional_offer_type": null,
          "unsubscribed_at": null,
          "is_active": true,
          "activated_at": "2023-10-13T21:19:25.000000+0000",
          "is_refund": false,
          "is_in_grace_period": false,
          "active_introductory_offer_type": "free_trial",
          "expires_at": "2099-09-09T20:20:20.000Z",
          "starts_at": null,
          "is_sandbox": false
        }
      },
      "promotional_offer_eligibility": false,
      "custom_attributes": {},
      "paid_access_levels": {
        "premium": {
          "id": "premium",
          "vendor_product_id": "chatai_weekly_3dft_ios_2",
          "is_lifetime": false,
          "active_promotional_offer_type": null,
          "cancellation_reason": null,
          "billing_issue_detected_at": null,
          "unsubscribed_at": null,
          "expires_at": "2099-09-09T20:20:20.000Z",
          "will_renew": true,
          "is_active": true,
          "offer_id": null,
          "is_in_grace_period": false,
          "activated_at": "2023-10-13T21:19:25.000000+0000",
          "active_promotional_offer_id": null,
          "renewed_at": "2023-10-13T21:19:24.000000+0000",
          "is_refund": false,
          "active_introductory_offer_type": "free_trial",
          "store": "app_store",
          "starts_at": null
        }
      },
      "profile_id": "e0bafcb6-6358-4064-90f3-2beec0f427ba",
      "introductory_offer_eligibility": false,
      "apple_validation_result": {
        "receipt": {
          "app_item_id": 1669007652,
          "receipt_creation_date": "2023-10-13 21:19:25 Etc/GMT",
          "receipt_type": "Production",
          "bundle_id": "com.scaleup.chatai",
          "original_purchase_date": "2023-10-13 21:18:17 Etc/GMT",
          "in_app": [
            {
              "quantity": "1",
              "purchase_date_ms": "1697231964000",
              "expires_date": "2099-09-09T20:20:20Z",
              "expires_date_pst": "2099-09-09 13:20:20 America/Los_Angeles",
              "is_in_intro_offer_period": "false",
              "transaction_id": "430001583748940",
              "is_trial_period": "false",
              "original_transaction_id": "430001583748940",
              "original_purchase_date_pst": "2023-10-13 14:19:25 America/Los_Angeles",
              "product_id": "chatai_weekly_3dft_ios_2",
              "purchase_date": "2023-10-13 21:19:24 Etc/GMT",
              "in_app_ownership_type": "PURCHASED",
              "original_purchase_date_ms": "1697231965000",
              "web_order_line_item_id": "430000758045060",
              "expires_date_ms": "4092657620000",
              "purchase_date_pst": "2023-10-13 14:19:24 America/Los_Angeles",
              "original_purchase_date": "2023-10-13 21:19:25 Etc/GMT"
            }
          ],
          "adam_id": 1669007652,
          "receipt_creation_date_pst": "2023-10-13 14:19:25 America/Los_Angeles",
          "request_date": "2023-10-13 21:19:27 Etc/GMT",
          "request_date_pst": "2023-10-13 14:19:27 America/Los_Angeles",
          "version_external_identifier": 860068394,
          "request_date_ms": "1697231967570",
          "original_purchase_date_pst": "2023-10-13 14:18:17 America/Los_Angeles",
          "application_version": "84",
          "original_purchase_date_ms": "1697231897000",
          "receipt_creation_date_ms": "1697231965000",
          "original_application_version": "84",
          "download_id": 502864219463795650
        },
        "environment": "Production",
        "pending_renewal_info": [
          {
            "product_id": "chatai_weekly_3dft_ios_2",
            "original_transaction_id": "430001583748940",
            "auto_renew_product_id": "chatai_weekly_3dft_ios_2",
            "auto_renew_status": "1"
          }
        ],
        "status": 0,
        "latest_receipt_info": [
          {
            "quantity": "1",
            "purchase_date_ms": "1697231964000",
            "expires_date": "2099-09-09T20:20:20Z",
            "expires_date_pst": "2099-09-09 13:20:20 America/Los_Angeles",
            "is_in_intro_offer_period": "false",
            "transaction_id": "430001583748940",
            "is_trial_period": "false",
            "original_transaction_id": "430001583748940",
            "original_purchase_date_pst": "2023-10-13 14:19:25 America/Los_Angeles",
            "product_id": "chatai_weekly_3dft_ios_2",
            "purchase_date": "2023-10-13 21:19:24 Etc/GMT",
            "in_app_ownership_type": "PURCHASED",
            "subscription_group_identifier": "21188439",
            "original_purchase_date_ms": "1697231965000",
            "web_order_line_item_id": "430000758045060",
            "expires_date_ms": "4092657620000",
            "purchase_date_pst": "2023-10-13 14:19:24 America/Los_Angeles",
            "original_purchase_date": "2023-10-13 21:19:25 Etc/GMT"
          }
        ],
        "latest_receipt": "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"
      },
      "non_subscriptions": null
    }
  }
}
$done({body: JSON.stringify(body)})